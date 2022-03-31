/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [5834], {
        27856: function(e) {
            /*! @license DOMPurify 2.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.1/LICENSE */
            e.exports = function() {
                "use strict";

                function e(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }
                var t = Object.hasOwnProperty,
                    n = Object.setPrototypeOf,
                    r = Object.isFrozen,
                    o = Object.getPrototypeOf,
                    a = Object.getOwnPropertyDescriptor,
                    i = Object.freeze,
                    l = Object.seal,
                    s = Object.create,
                    u = "undefined" != typeof Reflect && Reflect,
                    c = u.apply,
                    d = u.construct;
                c || (c = function(e, t, n) {
                    return e.apply(t, n)
                }), i || (i = function(e) {
                    return e
                }), l || (l = function(e) {
                    return e
                }), d || (d = function(t, n) {
                    return new(Function.prototype.bind.apply(t, [null].concat(e(n))))
                });
                var f = T(Array.prototype.forEach),
                    p = T(Array.prototype.pop),
                    m = T(Array.prototype.push),
                    y = T(String.prototype.toLowerCase),
                    h = T(String.prototype.match),
                    g = T(String.prototype.replace),
                    v = T(String.prototype.indexOf),
                    b = T(String.prototype.trim),
                    w = T(RegExp.prototype.test),
                    A = x(TypeError);

                function T(e) {
                    return function(t) {
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                        return c(e, t, r)
                    }
                }

                function x(e) {
                    return function() {
                        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return d(e, n)
                    }
                }

                function S(e, t) {
                    n && n(e, null);
                    for (var o = t.length; o--;) {
                        var a = t[o];
                        if ("string" == typeof a) {
                            var i = y(a);
                            i !== a && (r(t) || (t[o] = i), a = i)
                        }
                        e[a] = !0
                    }
                    return e
                }

                function E(e) {
                    var n = s(null),
                        r = void 0;
                    for (r in e) c(t, e, [r]) && (n[r] = e[r]);
                    return n
                }

                function _(e, t) {
                    for (; null !== e;) {
                        var n = a(e, t);
                        if (n) {
                            if (n.get) return T(n.get);
                            if ("function" == typeof n.value) return T(n.value)
                        }
                        e = o(e)
                    }

                    function r(e) {
                        return console.warn("fallback value for", e), null
                    }
                    return r
                }
                var O = i(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                    k = i(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                    D = i(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                    R = i(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                    M = i(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
                    N = i(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                    C = i(["#text"]),
                    L = i(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
                    P = i(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                    I = i(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                    F = i(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                    U = l(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
                    j = l(/<%[\s\S]*|[\s\S]*%>/gm),
                    z = l(/^data-[\-\w.\u00B7-\uFFFF]/),
                    B = l(/^aria-[\-\w]+$/),
                    H = l(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                    V = l(/^(?:\w+script|data):/i),
                    q = l(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                    G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };

                function W(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }
                var Y = function() {
                        return "undefined" == typeof window ? null : window
                    },
                    $ = function(e, t) {
                        if ("object" !== (void 0 === e ? "undefined" : G(e)) || "function" != typeof e.createPolicy) return null;
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

                function K() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y(),
                        t = function(e) {
                            return K(e)
                        };
                    if (t.version = "2.3.1", t.removed = [], !e || !e.document || 9 !== e.document.nodeType) return t.isSupported = !1, t;
                    var n = e.document,
                        r = e.document,
                        o = e.DocumentFragment,
                        a = e.HTMLTemplateElement,
                        l = e.Node,
                        s = e.Element,
                        u = e.NodeFilter,
                        c = e.NamedNodeMap,
                        d = void 0 === c ? e.NamedNodeMap || e.MozNamedAttrMap : c,
                        T = e.Text,
                        x = e.Comment,
                        Q = e.DOMParser,
                        J = e.trustedTypes,
                        Z = s.prototype,
                        X = _(Z, "cloneNode"),
                        ee = _(Z, "nextSibling"),
                        te = _(Z, "childNodes"),
                        ne = _(Z, "parentNode");
                    if ("function" == typeof a) {
                        var re = r.createElement("template");
                        re.content && re.content.ownerDocument && (r = re.content.ownerDocument)
                    }
                    var oe = $(J, n),
                        ae = oe && Fe ? oe.createHTML("") : "",
                        ie = r,
                        le = ie.implementation,
                        se = ie.createNodeIterator,
                        ue = ie.createDocumentFragment,
                        ce = ie.getElementsByTagName,
                        de = n.importNode,
                        fe = {};
                    try {
                        fe = E(r).documentMode ? r.documentMode : {}
                    } catch (e) {}
                    var pe = {};
                    t.isSupported = "function" == typeof ne && le && void 0 !== le.createHTMLDocument && 9 !== fe;
                    var me = U,
                        ye = j,
                        he = z,
                        ge = B,
                        ve = V,
                        be = q,
                        we = H,
                        Ae = null,
                        Te = S({}, [].concat(W(O), W(k), W(D), W(M), W(C))),
                        xe = null,
                        Se = S({}, [].concat(W(L), W(P), W(I), W(F))),
                        Ee = null,
                        _e = null,
                        Oe = !0,
                        ke = !0,
                        De = !1,
                        Re = !1,
                        Me = !1,
                        Ne = !1,
                        Ce = !1,
                        Le = !1,
                        Pe = !1,
                        Ie = !0,
                        Fe = !1,
                        Ue = !0,
                        je = !0,
                        ze = !1,
                        Be = {},
                        He = null,
                        Ve = S({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                        qe = null,
                        Ge = S({}, ["audio", "video", "img", "source", "image", "track"]),
                        We = null,
                        Ye = S({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                        $e = "http://www.w3.org/1998/Math/MathML",
                        Ke = "http://www.w3.org/2000/svg",
                        Qe = "http://www.w3.org/1999/xhtml",
                        Je = Qe,
                        Ze = !1,
                        Xe = null,
                        et = r.createElement("form"),
                        tt = function(e) {
                            Xe && Xe === e || (e && "object" === (void 0 === e ? "undefined" : G(e)) || (e = {}), e = E(e), Ae = "ALLOWED_TAGS" in e ? S({}, e.ALLOWED_TAGS) : Te, xe = "ALLOWED_ATTR" in e ? S({}, e.ALLOWED_ATTR) : Se, We = "ADD_URI_SAFE_ATTR" in e ? S(E(Ye), e.ADD_URI_SAFE_ATTR) : Ye, qe = "ADD_DATA_URI_TAGS" in e ? S(E(Ge), e.ADD_DATA_URI_TAGS) : Ge, He = "FORBID_CONTENTS" in e ? S({}, e.FORBID_CONTENTS) : Ve, Ee = "FORBID_TAGS" in e ? S({}, e.FORBID_TAGS) : {}, _e = "FORBID_ATTR" in e ? S({}, e.FORBID_ATTR) : {}, Be = "USE_PROFILES" in e && e.USE_PROFILES, Oe = !1 !== e.ALLOW_ARIA_ATTR, ke = !1 !== e.ALLOW_DATA_ATTR, De = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Re = e.SAFE_FOR_TEMPLATES || !1, Me = e.WHOLE_DOCUMENT || !1, Le = e.RETURN_DOM || !1, Pe = e.RETURN_DOM_FRAGMENT || !1, Ie = !1 !== e.RETURN_DOM_IMPORT, Fe = e.RETURN_TRUSTED_TYPE || !1, Ce = e.FORCE_BODY || !1, Ue = !1 !== e.SANITIZE_DOM, je = !1 !== e.KEEP_CONTENT, ze = e.IN_PLACE || !1, we = e.ALLOWED_URI_REGEXP || we, Je = e.NAMESPACE || Qe, Re && (ke = !1), Pe && (Le = !0), Be && (Ae = S({}, [].concat(W(C))), xe = [], !0 === Be.html && (S(Ae, O), S(xe, L)), !0 === Be.svg && (S(Ae, k), S(xe, P), S(xe, F)), !0 === Be.svgFilters && (S(Ae, D), S(xe, P), S(xe, F)), !0 === Be.mathMl && (S(Ae, M), S(xe, I), S(xe, F))), e.ADD_TAGS && (Ae === Te && (Ae = E(Ae)), S(Ae, e.ADD_TAGS)), e.ADD_ATTR && (xe === Se && (xe = E(xe)), S(xe, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && S(We, e.ADD_URI_SAFE_ATTR), e.FORBID_CONTENTS && (He === Ve && (He = E(He)), S(He, e.FORBID_CONTENTS)), je && (Ae["#text"] = !0), Me && S(Ae, ["html", "head", "body"]), Ae.table && (S(Ae, ["tbody"]), delete Ee.tbody), i && i(e), Xe = e)
                        },
                        nt = S({}, ["mi", "mo", "mn", "ms", "mtext"]),
                        rt = S({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                        ot = S({}, k);
                    S(ot, D), S(ot, R);
                    var at = S({}, M);
                    S(at, N);
                    var it = function(e) {
                            var t = ne(e);
                            t && t.tagName || (t = {
                                namespaceURI: Qe,
                                tagName: "template"
                            });
                            var n = y(e.tagName),
                                r = y(t.tagName);
                            if (e.namespaceURI === Ke) return t.namespaceURI === Qe ? "svg" === n : t.namespaceURI === $e ? "svg" === n && ("annotation-xml" === r || nt[r]) : Boolean(ot[n]);
                            if (e.namespaceURI === $e) return t.namespaceURI === Qe ? "math" === n : t.namespaceURI === Ke ? "math" === n && rt[r] : Boolean(at[n]);
                            if (e.namespaceURI === Qe) {
                                if (t.namespaceURI === Ke && !rt[r]) return !1;
                                if (t.namespaceURI === $e && !nt[r]) return !1;
                                var o = S({}, ["title", "style", "font", "a", "script"]);
                                return !at[n] && (o[n] || !ot[n])
                            }
                            return !1
                        },
                        lt = function(e) {
                            m(t.removed, {
                                element: e
                            });
                            try {
                                e.parentNode.removeChild(e)
                            } catch (t) {
                                try {
                                    e.outerHTML = ae
                                } catch (t) {
                                    e.remove()
                                }
                            }
                        },
                        st = function(e, n) {
                            try {
                                m(t.removed, {
                                    attribute: n.getAttributeNode(e),
                                    from: n
                                })
                            } catch (e) {
                                m(t.removed, {
                                    attribute: null,
                                    from: n
                                })
                            }
                            if (n.removeAttribute(e), "is" === e && !xe[e])
                                if (Le || Pe) try {
                                    lt(n)
                                } catch (e) {} else try {
                                    n.setAttribute(e, "")
                                } catch (e) {}
                        },
                        ut = function(e) {
                            var t = void 0,
                                n = void 0;
                            if (Ce) e = "<remove></remove>" + e;
                            else {
                                var o = h(e, /^[\r\n\t ]+/);
                                n = o && o[0]
                            }
                            var a = oe ? oe.createHTML(e) : e;
                            if (Je === Qe) try {
                                t = (new Q).parseFromString(a, "text/html")
                            } catch (e) {}
                            if (!t || !t.documentElement) {
                                t = le.createDocument(Je, "template", null);
                                try {
                                    t.documentElement.innerHTML = Ze ? "" : a
                                } catch (e) {}
                            }
                            var i = t.body || t.documentElement;
                            return e && n && i.insertBefore(r.createTextNode(n), i.childNodes[0] || null), Je === Qe ? ce.call(t, Me ? "html" : "body")[0] : Me ? t.documentElement : i
                        },
                        ct = function(e) {
                            return se.call(e.ownerDocument || e, e, u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT, null, !1)
                        },
                        dt = function(e) {
                            return !(e instanceof T || e instanceof x || "string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof d && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute && "string" == typeof e.namespaceURI && "function" == typeof e.insertBefore)
                        },
                        ft = function(e) {
                            return "object" === (void 0 === l ? "undefined" : G(l)) ? e instanceof l : e && "object" === (void 0 === e ? "undefined" : G(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                        },
                        pt = function(e, n, r) {
                            pe[e] && f(pe[e], (function(e) {
                                e.call(t, n, r, Xe)
                            }))
                        },
                        mt = function(e) {
                            var n = void 0;
                            if (pt("beforeSanitizeElements", e, null), dt(e)) return lt(e), !0;
                            if (h(e.nodeName, /[\u0080-\uFFFF]/)) return lt(e), !0;
                            var r = y(e.nodeName);
                            if (pt("uponSanitizeElement", e, {
                                    tagName: r,
                                    allowedTags: Ae
                                }), !ft(e.firstElementChild) && (!ft(e.content) || !ft(e.content.firstElementChild)) && w(/<[/\w]/g, e.innerHTML) && w(/<[/\w]/g, e.textContent)) return lt(e), !0;
                            if ("select" === r && w(/<template/i, e.innerHTML)) return lt(e), !0;
                            if (!Ae[r] || Ee[r]) {
                                if (je && !He[r]) {
                                    var o = ne(e) || e.parentNode,
                                        a = te(e) || e.childNodes;
                                    if (a && o)
                                        for (var i = a.length - 1; i >= 0; --i) o.insertBefore(X(a[i], !0), ee(e))
                                }
                                return lt(e), !0
                            }
                            return e instanceof s && !it(e) ? (lt(e), !0) : "noscript" !== r && "noembed" !== r || !w(/<\/no(script|embed)/i, e.innerHTML) ? (Re && 3 === e.nodeType && (n = e.textContent, n = g(n, me, " "), n = g(n, ye, " "), e.textContent !== n && (m(t.removed, {
                                element: e.cloneNode()
                            }), e.textContent = n)), pt("afterSanitizeElements", e, null), !1) : (lt(e), !0)
                        },
                        yt = function(e, t, n) {
                            if (Ue && ("id" === t || "name" === t) && (n in r || n in et)) return !1;
                            if (ke && !_e[t] && w(he, t));
                            else if (Oe && w(ge, t));
                            else {
                                if (!xe[t] || _e[t]) return !1;
                                if (We[t]);
                                else if (w(we, g(n, be, "")));
                                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== v(n, "data:") || !qe[e])
                                    if (De && !w(ve, g(n, be, "")));
                                    else if (n) return !1
                            }
                            return !0
                        },
                        ht = function(e) {
                            var n = void 0,
                                r = void 0,
                                o = void 0,
                                a = void 0;
                            pt("beforeSanitizeAttributes", e, null);
                            var i = e.attributes;
                            if (i) {
                                var l = {
                                    attrName: "",
                                    attrValue: "",
                                    keepAttr: !0,
                                    allowedAttributes: xe
                                };
                                for (a = i.length; a--;) {
                                    var s = n = i[a],
                                        u = s.name,
                                        c = s.namespaceURI;
                                    if (r = b(n.value), o = y(u), l.attrName = o, l.attrValue = r, l.keepAttr = !0, l.forceKeepAttr = void 0, pt("uponSanitizeAttribute", e, l), r = l.attrValue, !l.forceKeepAttr && (st(u, e), l.keepAttr))
                                        if (w(/\/>/i, r)) st(u, e);
                                        else {
                                            Re && (r = g(r, me, " "), r = g(r, ye, " "));
                                            var d = e.nodeName.toLowerCase();
                                            if (yt(d, o, r)) try {
                                                c ? e.setAttributeNS(c, u, r) : e.setAttribute(u, r), p(t.removed)
                                            } catch (e) {}
                                        }
                                }
                                pt("afterSanitizeAttributes", e, null)
                            }
                        },
                        gt = function e(t) {
                            var n = void 0,
                                r = ct(t);
                            for (pt("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) pt("uponSanitizeShadowNode", n, null), mt(n) || (n.content instanceof o && e(n.content), ht(n));
                            pt("afterSanitizeShadowDOM", t, null)
                        };
                    return t.sanitize = function(r, a) {
                        var i = void 0,
                            s = void 0,
                            u = void 0,
                            c = void 0,
                            d = void 0;
                        if ((Ze = !r) && (r = "\x3c!--\x3e"), "string" != typeof r && !ft(r)) {
                            if ("function" != typeof r.toString) throw A("toString is not a function");
                            if ("string" != typeof(r = r.toString())) throw A("dirty is not a string, aborting")
                        }
                        if (!t.isSupported) {
                            if ("object" === G(e.toStaticHTML) || "function" == typeof e.toStaticHTML) {
                                if ("string" == typeof r) return e.toStaticHTML(r);
                                if (ft(r)) return e.toStaticHTML(r.outerHTML)
                            }
                            return r
                        }
                        if (Ne || tt(a), t.removed = [], "string" == typeof r && (ze = !1), ze);
                        else if (r instanceof l) 1 === (s = (i = ut("\x3c!----\x3e")).ownerDocument.importNode(r, !0)).nodeType && "BODY" === s.nodeName || "HTML" === s.nodeName ? i = s : i.appendChild(s);
                        else {
                            if (!Le && !Re && !Me && -1 === r.indexOf("<")) return oe && Fe ? oe.createHTML(r) : r;
                            if (!(i = ut(r))) return Le ? null : ae
                        }
                        i && Ce && lt(i.firstChild);
                        for (var f = ct(ze ? r : i); u = f.nextNode();) 3 === u.nodeType && u === c || mt(u) || (u.content instanceof o && gt(u.content), ht(u), c = u);
                        if (c = null, ze) return r;
                        if (Le) {
                            if (Pe)
                                for (d = ue.call(i.ownerDocument); i.firstChild;) d.appendChild(i.firstChild);
                            else d = i;
                            return Ie && (d = de.call(n, d, !0)), d
                        }
                        var p = Me ? i.outerHTML : i.innerHTML;
                        return Re && (p = g(p, me, " "), p = g(p, ye, " ")), oe && Fe ? oe.createHTML(p) : p
                    }, t.setConfig = function(e) {
                        tt(e), Ne = !0
                    }, t.clearConfig = function() {
                        Xe = null, Ne = !1
                    }, t.isValidAttribute = function(e, t, n) {
                        Xe || tt({});
                        var r = y(e),
                            o = y(t);
                        return yt(r, o, n)
                    }, t.addHook = function(e, t) {
                        "function" == typeof t && (pe[e] = pe[e] || [], m(pe[e], t))
                    }, t.removeHook = function(e) {
                        pe[e] && p(pe[e])
                    }, t.removeHooks = function(e) {
                        pe[e] && (pe[e] = [])
                    }, t.removeAllHooks = function() {
                        pe = {}
                    }, t
                }
                return K()
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
        89179: (e, t, n) => {
            var r = n(55639),
                o = n(40554),
                a = n(14841),
                i = n(79833),
                l = r.isFinite,
                s = Math.min;
            e.exports = function(e) {
                var t = Math[e];
                return function(e, n) {
                    if (e = a(e), (n = null == n ? 0 : s(o(n), 292)) && l(e)) {
                        var r = (i(e) + "e").split("e"),
                            u = t(r[0] + "e" + (+r[1] + n));
                        return +((r = (i(u) + "e").split("e"))[0] + "e" + (+r[1] - n))
                    }
                    return t(e)
                }
            }
        },
        5558: (e, t, n) => {
            var r = n(89179)("floor");
            e.exports = r
        },
        30236: (e, t, n) => {
            var r = n(42980),
                o = n(21463)((function(e, t, n, o) {
                    r(e, t, n, o)
                }));
            e.exports = o
        },
        31351: e => {
            var t = Array.prototype.reverse;
            e.exports = function(e) {
                return null == e ? e : t.call(e)
            }
        },
        59854: (e, t, n) => {
            var r = n(89179)("round");
            e.exports = r
        },
        68356: (e, t, n) => {
            "use strict";
            var r = n(21314).default,
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
            var r = n(21314).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = s(n(9215)),
                a = s(n(28255)),
                i = s(n(65279)),
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
        65279: (e, t) => {
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
            var r = n(21314).default;
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
            var r = n(21314).default;
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