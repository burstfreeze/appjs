/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [8218], {
        986907: (e, t, n) => {
            "use strict";
            const r = n(471313);
            e.exports = r
        },
        471313: (e, t, n) => {
            "use strict";
            var r = n(263026).default,
                o = n(587592),
                i = n(244783),
                l = n(389408),
                a = n(376969),
                s = n(932998);

            function u(e) {
                throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?code=${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)
            }

            function c(e) {
                let t = s.$getSelection();
                if (null == t) throw Error("Expected valid LexicalSelection");
                return s.$isRangeSelection(t) && t.isCollapsed() || 0 === t.getNodes().length ? "" : o.$generateHtmlFromNodes(e, t)
            }

            function d(e) {
                let t = s.$getSelection();
                if (null == t) throw Error("Expected valid LexicalSelection");
                return s.$isRangeSelection(t) && t.isCollapsed() || 0 === t.getNodes().length ? null : JSON.stringify(p(e, t))
            }

            function f(e, t, n) {
                (s.DEPRECATED_$isGridSelection(n) || null !== a.$findMatchingParent(n.anchor.getNode(), (e => s.DEPRECATED_$isGridCellNode(e))) && null !== a.$findMatchingParent(n.focus.getNode(), (e => s.DEPRECATED_$isGridCellNode(e)))) && 1 === t.length && s.DEPRECATED_$isGridNode(t[0]) ? function(e, t, n, r) {
                    1 === e.length && s.DEPRECATED_$isGridNode(e[0]) || u(42);
                    var o = e[0];
                    e = o.getChildren(), n = o.getFirstChildOrThrow().getChildrenSize();
                    var i = o.getChildrenSize(),
                        l = a.$findMatchingParent(t.anchor.getNode(), (e => s.DEPRECATED_$isGridCellNode(e)));
                    t = (o = l && a.$findMatchingParent(l, (e => s.DEPRECATED_$isGridRowNode(e)))) && a.$findMatchingParent(o, (e => s.DEPRECATED_$isGridNode(e))), s.DEPRECATED_$isGridCellNode(l) && s.DEPRECATED_$isGridRowNode(o) && s.DEPRECATED_$isGridNode(t) || u(43);
                    var c = o.getIndexWithinParent(),
                        d = Math.min(t.getChildrenSize() - 1, c + i - 1);
                    let f, g;
                    i = l.getIndexWithinParent(), l = Math.min(o.getChildrenSize() - 1, i + n - 1), n = Math.min(i, l), o = Math.min(c, d), i = Math.max(i, l), c = Math.max(c, d), d = t.getChildren(), l = 0;
                    for (let t = o; t <= c; t++) {
                        var p = d[t];
                        s.DEPRECATED_$isGridRowNode(p) || u(24);
                        var h = e[l];
                        s.DEPRECATED_$isGridRowNode(h) || u(24), p = p.getChildren(), h = h.getChildren();
                        let r = 0;
                        for (let e = n; e <= i; e++) {
                            let l = p[e];
                            s.DEPRECATED_$isGridCellNode(l) || u(25);
                            let a = h[r];
                            s.DEPRECATED_$isGridCellNode(a) || u(25), t === o && e === n ? f = l.getKey() : t === c && e === i && (g = l.getKey());
                            let d = l.getChildren();
                            a.getChildren().forEach((e => {
                                s.$isTextNode(e) && s.$createParagraphNode().append(e), l.append(e)
                            })), d.forEach((e => e.remove())), r++
                        }
                        l++
                    }
                    f && g && ((e = s.DEPRECATED_$createGridSelection()).set(t.getKey(), f, g), s.$setSelection(e), r.dispatchCommand(s.SELECTION_CHANGE_COMMAND, void 0))
                }(t, n, !1, e) : function(e, t) {
                    let n = [],
                        r = null,
                        o = null;
                    for (let t = 0; t < e.length; t++) {
                        let l = e[t];
                        if (i.$isListItemNode(l)) {
                            null == o && (o = i.$createListNode("bullet"), n.push(o)), o.append(l);
                            continue
                        }
                        null != o && (o = null);
                        let a = s.$isLineBreakNode(l);
                        if (a || s.$isDecoratorNode(l) && l.isInline() || s.$isElementNode(l) && l.isInline() || s.$isTextNode(l)) {
                            if (null === r && (r = s.$createParagraphNode(), n.push(r), a)) continue;
                            null !== r && r.append(l)
                        } else n.push(l), r = null
                    }
                    s.$isRangeSelection(t) ? t.insertNodes(n) : s.DEPRECATED_$isGridSelection(t) && (e = t.anchor.getNode(), s.DEPRECATED_$isGridCellNode(e) || u(41), e.append(...n))
                }(t, n)
            }

            function g(e, t, n, r = []) {
                let o = null == t || n.isSelected(),
                    i = s.$isElementNode(n) && n.excludeFromCopy("html");
                var a = n;
                if (null !== t) {
                    var c = l.$cloneWithProperties(n);
                    a = c = s.$isTextNode(c) && null != t ? l.$sliceSelectedTextNodeContent(t, c) : c
                }
                let d = s.$isElementNode(a) ? a.getChildren() : [];
                var f = a;
                (c = f.exportJSON()).type !== f.constructor.getType() && u(58);
                var p = c.children;
                for (s.$isElementNode(f) && (Array.isArray(p) || u(59)), s.$isTextNode(a) && (c.text = a.__text), a = 0; a < d.length; a++) p = g(e, t, f = d[a], c.children), !o && s.$isElementNode(n) && p && n.extractWithChild(f, t, "clone") && (o = !0);
                if (o && !i) r.push(c);
                else if (Array.isArray(c.children))
                    for (e = 0; e < c.children.length; e++) r.push(c.children[e]);
                return o
            }

            function p(e, t) {
                let n = [],
                    r = s.$getRoot().getChildren();
                for (let o = 0; o < r.length; o++) g(e, t, r[o], n);
                return {
                    namespace: e._config.namespace,
                    nodes: n
                }
            }

            function h(e) {
                let t = [];
                for (let n = 0; n < e.length; n++) {
                    let r = s.$parseSerializedNode(e[n]);
                    s.$isTextNode(r) && l.$addNodeStyle(r), t.push(r)
                }
                return t
            }
            let m = null;

            function _(e, t) {
                if (t.preventDefault(), null === (t = t.clipboardData)) return !1;
                let n = s.$getSelection(),
                    r = c(e);
                e = d(e);
                let o = "";
                return null !== n && (o = n.getTextContent()), null !== r && t.setData("text/html", r), null !== e && t.setData("application/x-lexical-editor", e), t.setData("text/plain", o), !0
            }
            t.$generateJSONFromSelectedNodes = p, t.$generateNodesFromSerializedNodes = h, t.$getHtmlContent = c, t.$getLexicalContent = d, t.$insertDataTransferForPlainText = function(e, t) {
                null != (e = e.getData("text/plain")) && t.insertRawText(e)
            }, t.$insertDataTransferForRichText = function(e, t, n) {
                var r = e.getData("application/x-lexical-editor");
                if (r) try {
                    let e = JSON.parse(r);
                    if (e.namespace === n._config.namespace && Array.isArray(e.nodes)) {
                        return f(n, h(e.nodes), t)
                    }
                } catch {}
                if (r = e.getData("text/html")) try {
                    var i = (new DOMParser).parseFromString(r, "text/html");
                    return f(n, o.$generateNodesFromDOM(n, i), t)
                } catch {}
                if (null != (e = e.getData("text/plain")))
                    if (s.$isRangeSelection(t))
                        for (n = (e = e.split(/\r?\n/)).length, i = 0; i < n; i++) t.insertText(e[i]), i < n - 1 && t.insertParagraph();
                    else t.insertRawText(e)
            }, t.$insertGeneratedNodes = f, t.copyToClipboard__EXPERIMENTAL = async function(e, t) {
                if (null !== m) return !1;
                if (null !== t) return new r((n => {
                    e.update((() => {
                        n(_(e, t))
                    }))
                }));
                var n = e.getRootElement();
                let o = document.getSelection();
                if (null === n || null === o) return !1;
                let i = document.createElement("span");
                return i.style.cssText = "position: fixed; top: -1000px;", i.append(document.createTextNode("#")), n.append(i), (n = new Range).setStart(i, 0), n.setEnd(i, 1), o.removeAllRanges(), o.addRange(n), new r((t => {
                    let n = e.registerCommand(s.COPY_COMMAND, (r => (r instanceof ClipboardEvent && (n(), null !== m && (window.clearTimeout(m), m = null), t(_(e, r))), !0)), s.COMMAND_PRIORITY_CRITICAL);
                    m = window.setTimeout((() => {
                        n(), m = null, t(!1)
                    }), 50), document.execCommand("copy"), i.remove()
                }))
            }
        },
        570573: (e, t, n) => {
            "use strict";
            const r = n(97370);
            e.exports = r
        },
        97370: (e, t, n) => {
            "use strict";
            var r = n(932998);
            t.registerDragonSupport = function(e) {
                let t = t => {
                    var n = e.getRootElement();
                    if (document.activeElement === n && "string" == typeof(n = t.data)) {
                        try {
                            var o = JSON.parse(n)
                        } catch (e) {
                            return
                        }
                        if (o && "nuanria_messaging" === o.protocol && "request" === o.type && (o = o.payload) && "makeChanges" === o.functionId && (o = o.args)) {
                            const [n, i, l, a, s] = o;
                            e.update((() => {
                                const e = r.$getSelection();
                                if (r.$isRangeSelection(e)) {
                                    var o = e.anchor;
                                    let u = o.getNode(),
                                        c = 0,
                                        d = 0;
                                    r.$isTextNode(u) && 0 <= n && 0 <= i && (c = n, d = n + i, e.setTextNodeRange(u, c, u, d)), c === d && "" === l || (e.insertRawText(l), u = o.getNode()), r.$isTextNode(u) && (c = a, d = a + s, c = c > (o = u.getTextContentSize()) ? o : c, d = d > o ? o : d, e.setTextNodeRange(u, c, u, d)), t.stopImmediatePropagation()
                                }
                            }))
                        }
                    }
                };
                return window.addEventListener("message", t, !0), () => {
                    window.removeEventListener("message", t, !0)
                }
            }
        },
        548854: (e, t, n) => {
            "use strict";
            const r = n(654379);
            e.exports = r
        },
        654379: (e, t, n) => {
            "use strict";
            var r = n(376969),
                o = n(932998);

            function i(e, t) {
                let n = Date.now(),
                    r = 0;
                return (i, l, a, s, u, c) => {
                    let d = Date.now();
                    if (c.has("historic")) return r = 0, n = d, 2;
                    let f = function(e, t, n, r, i) {
                            if (null === e || 0 === n.size && 0 === r.size && !i) return 0;
                            var l = t._selection,
                                a = e._selection;
                            if (i) return 1;
                            if (!(o.$isRangeSelection(l) && o.$isRangeSelection(a) && a.isCollapsed() && l.isCollapsed())) return 0;
                            i = t._nodeMap;
                            let s = [];
                            for (let e of n) void 0 !== (n = i.get(e)) && s.push(n);
                            for (let [e, t] of r) t && (void 0 === (r = i.get(e)) || o.$isRootNode(r) || s.push(r));
                            return 0 === s.length ? 0 : 1 < s.length ? (t = (r = t._nodeMap).get(l.anchor.key), a = r.get(a.anchor.key), t && a && !e._nodeMap.has(t.__key) && o.$isTextNode(t) && 1 === t.__text.length && 1 === l.anchor.offset ? 2 : 0) : (t = s[0], e = e._nodeMap.get(t.__key), o.$isTextNode(e) && o.$isTextNode(t) && e.__mode === t.__mode ? (e = e.__text) === (t = t.__text) ? 0 : (l = l.anchor, a = a.anchor, l.key !== a.key || "text" !== l.type ? 0 : (l = l.offset, a = a.offset, 1 == (e = t.length - e.length) && a === l - 1 ? 2 : -1 === e && a === l + 1 ? 3 : -1 === e && a === l ? 4 : 0)) : 0)
                        }(i, l, s, u, e.isComposing()),
                        g = (() => {
                            var g = null === a || a.editor === e,
                                p = c.has("history-push");
                            if (!p && g && c.has("history-merge")) return 0;
                            if (null === i) return 1;
                            const h = l._selection,
                                m = i._selection;
                            return 0 < s.size || 0 < u.size ? !1 === p && 0 !== f && f === r && d < n + t && g || 1 === s.size && (p = Array.from(s)[0], g = i._nodeMap.get(p), p = l._nodeMap.get(p), g = !(!o.$isTextNode(g) || !o.$isTextNode(p)) && (g.__type === p.__type && g.__text === p.__text && g.__mode === p.__mode && g.__detail === p.__detail && g.__style === p.__style && g.__format === p.__format && g.__parent === p.__parent)) ? 0 : 1 : null === m && null !== h ? 0 : 2
                        })();
                    return n = d, r = f, g
                }
            }
            t.createEmptyHistoryState = function() {
                return {
                    current: null,
                    redoStack: [],
                    undoStack: []
                }
            }, t.registerHistory = function(e, t, n) {
                let l = i(e, n);
                n = ({
                    editorState: n,
                    prevEditorState: r,
                    dirtyLeaves: i,
                    dirtyElements: a,
                    tags: s
                }) => {
                    const u = t.current,
                        c = t.redoStack,
                        d = t.undoStack,
                        f = null === u ? null : u.editorState;
                    if (null === u || n !== f) {
                        if (1 === (i = l(r, n, u, i, a, s))) 0 !== c.length && (t.redoStack = []), null !== u && (d.push({
                            ...u,
                            undoSelection: r.read(o.$getSelection)
                        }), e.dispatchCommand(o.CAN_UNDO_COMMAND, !0));
                        else if (2 === i) return;
                        t.current = {
                            editor: e,
                            editorState: n
                        }
                    }
                };
                let a = r.mergeRegister(e.registerCommand(o.UNDO_COMMAND, (() => {
                        let n = t.redoStack,
                            r = t.undoStack;
                        if (0 !== r.length) {
                            let i = t.current,
                                l = r.pop();
                            null !== i && (n.push(i), e.dispatchCommand(o.CAN_REDO_COMMAND, !0)), 0 === r.length && e.dispatchCommand(o.CAN_UNDO_COMMAND, !1), t.current = l || null, l && l.editor.setEditorState(l.editorState.clone(l.undoSelection), {
                                tag: "historic"
                            })
                        }
                        return !0
                    }), o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.REDO_COMMAND, (() => {
                        let n = t.redoStack;
                        var r = t.undoStack;
                        if (0 !== n.length) {
                            let i = t.current;
                            null !== i && (r.push(i), e.dispatchCommand(o.CAN_UNDO_COMMAND, !0)), r = n.pop(), 0 === n.length && e.dispatchCommand(o.CAN_REDO_COMMAND, !1), t.current = r || null, r && r.editor.setEditorState(r.editorState, {
                                tag: "historic"
                            })
                        }
                        return !0
                    }), o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.CLEAR_EDITOR_COMMAND, (() => (t.undoStack = [], t.redoStack = [], t.current = null, !1)), o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.CLEAR_HISTORY_COMMAND, (() => (t.undoStack = [], t.redoStack = [], t.current = null, e.dispatchCommand(o.CAN_REDO_COMMAND, !1), e.dispatchCommand(o.CAN_UNDO_COMMAND, !1), !0)), o.COMMAND_PRIORITY_EDITOR), e.registerUpdateListener(n)),
                    s = e.registerUpdateListener(n);
                return () => {
                    a(), s()
                }
            }
        },
        587592: (e, t, n) => {
            "use strict";
            const r = n(164478);
            e.exports = r
        },
        164478: (e, t, n) => {
            "use strict";
            var r = n(389408),
                o = n(932998);

            function i(e, t, n, l = null) {
                let a = null == l || t.isSelected(),
                    s = o.$isElementNode(t) && t.excludeFromCopy("html");
                var u = t;
                null !== l && (u = r.$cloneWithProperties(t), u = o.$isTextNode(u) && null != l ? r.$sliceSelectedTextNodeContent(l, u) : u);
                let c = o.$isElementNode(u) ? u.getChildren() : [],
                    {
                        element: d,
                        after: f
                    } = u.exportDOM(e);
                if (!d) return !1;
                let g = new DocumentFragment;
                for (let n = 0; n < c.length; n++) {
                    let r = c[n],
                        s = i(e, r, g, l);
                    !a && o.$isElementNode(t) && s && t.extractWithChild(r, l, "html") && (a = !0)
                }
                return a && !s ? (d.append(g), n.append(d), f && (e = f.call(u, d)) && d.replaceWith(e)) : n.append(g), a
            }
            let l = new Set(["STYLE"]);

            function a(e, t, n = new Map, r, i = !1) {
                let s = [];
                if (l.has(e.nodeName)) return s;
                let u = null;
                var {
                    nodeName: c
                } = e, d = t._htmlConversions.get(c.toLowerCase());
                if (c = null, void 0 !== d)
                    for (f of d) null !== (d = f(e)) && (null === c || c.priority < d.priority) && (c = d);
                var f = (f = null !== c ? c.conversion : null) ? f(e, void 0, i) : null;
                if (c = null, null !== f) {
                    if (c = f.after, u = f.node, null !== u) {
                        for (var [, g] of n)
                            if (u = g(u, r), !u) break;
                        u && s.push(u)
                    }
                    null != f.forChild && n.set(e.nodeName, f.forChild)
                }
                for (e = e.childNodes, r = [], g = 0; g < e.length; g++) r.push(...a(e[g], t, new Map(n), u, i || !0 === (f && f.preformatted)));
                return null != c && (r = c(r)), null == u ? s = s.concat(r) : o.$isElementNode(u) && u.append(...r), s
            }
            t.$generateHtmlFromNodes = function(e, t) {
                if ("undefined" == typeof document || "undefined" == typeof window) throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
                let n = document.createElement("div"),
                    r = o.$getRoot().getChildren();
                for (let o = 0; o < r.length; o++) i(e, r[o], n, t);
                return n.innerHTML
            }, t.$generateNodesFromDOM = function(e, t) {
                let n = [],
                    r = (t = t.body ? Array.from(t.body.childNodes) : []).length;
                for (let i = 0; i < r; i++) {
                    var o = t[i];
                    l.has(o.nodeName) || null !== (o = a(o, e)) && (n = n.concat(o))
                }
                return n
            }
        },
        873435: (e, t, n) => {
            "use strict";
            const r = n(813906);
            e.exports = r
        },
        813906: (e, t, n) => {
            "use strict";
            var r = n(376969),
                o = n(932998);
            class i extends o.ElementNode {
                static getType() {
                    return "link"
                }
                static clone(e) {
                    return new i(e.__url, {
                        rel: e.__rel,
                        target: e.__target
                    }, e.__key)
                }
                constructor(e, t = {}, n) {
                    super(n);
                    let {
                        target: r = null,
                        rel: o = null
                    } = t;
                    this.__url = e, this.__target = r, this.__rel = o
                }
                createDOM(e) {
                    let t = document.createElement("a");
                    return t.href = this.__url, null !== this.__target && (t.target = this.__target), null !== this.__rel && (t.rel = this.__rel), r.addClassNamesToElement(t, e.theme.link), t
                }
                updateDOM(e, t) {
                    let n = this.__url,
                        r = this.__target,
                        o = this.__rel;
                    return n !== e.__url && (t.href = n), r !== e.__target && (r ? t.target = r : t.removeAttribute("target")), o !== e.__rel && (o ? t.rel = o : t.removeAttribute("rel")), !1
                }
                static importDOM() {
                    return {
                        a: () => ({
                            conversion: l,
                            priority: 1
                        })
                    }
                }
                static importJSON(e) {
                    let t = a(e.url, {
                        rel: e.rel,
                        target: e.target
                    });
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                exportJSON() {
                    return {
                        ...super.exportJSON(),
                        rel: this.getRel(),
                        target: this.getTarget(),
                        type: "link",
                        url: this.getURL(),
                        version: 1
                    }
                }
                getURL() {
                    return this.getLatest().__url
                }
                setURL(e) {
                    this.getWritable().__url = e
                }
                getTarget() {
                    return this.getLatest().__target
                }
                setTarget(e) {
                    this.getWritable().__target = e
                }
                getRel() {
                    return this.getLatest().__rel
                }
                setRel(e) {
                    this.getWritable().__rel = e
                }
                insertNewAfter(e) {
                    if (e = this.getParentOrThrow().insertNewAfter(e), o.$isElementNode(e)) {
                        let t = a(this.__url, {
                            rel: this.__rel,
                            target: this.__target
                        });
                        return e.append(t), t
                    }
                    return null
                }
                canInsertTextBefore() {
                    return !1
                }
                canInsertTextAfter() {
                    return !1
                }
                canBeEmpty() {
                    return !1
                }
                isInline() {
                    return !0
                }
                extractWithChild(e, t) {
                    if (!o.$isRangeSelection(t)) return !1;
                    e = t.anchor.getNode();
                    let n = t.focus.getNode();
                    return this.isParentOf(e) && this.isParentOf(n) && 0 < t.getTextContent().length
                }
            }

            function l(e) {
                let t = null;
                if (e instanceof HTMLAnchorElement) {
                    let n = e.textContent;
                    null !== n && "" !== n && (t = a(e.getAttribute("href") || "", {
                        rel: e.getAttribute("rel"),
                        target: e.getAttribute("target")
                    }))
                }
                return {
                    node: t
                }
            }

            function a(e, t) {
                return new i(e, t)
            }

            function s(e) {
                return e instanceof i
            }
            class u extends i {
                static getType() {
                    return "autolink"
                }
                static clone(e) {
                    return new u(e.__url, {
                        rel: e.__rel,
                        target: e.__target
                    }, e.__key)
                }
                static importJSON(e) {
                    let t = c(e.url, {
                        rel: e.rel,
                        target: e.target
                    });
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                static importDOM() {
                    return null
                }
                exportJSON() {
                    return {
                        ...super.exportJSON(),
                        type: "autolink",
                        version: 1
                    }
                }
                insertNewAfter(e) {
                    if (e = this.getParentOrThrow().insertNewAfter(e), o.$isElementNode(e)) {
                        let t = c(this.__url, {
                            rel: this._rel,
                            target: this.__target
                        });
                        return e.append(t), t
                    }
                    return null
                }
            }

            function c(e, t) {
                return new u(e, t)
            }
            let d = o.createCommand("TOGGLE_LINK_COMMAND");
            t.$createAutoLinkNode = c, t.$createLinkNode = a, t.$isAutoLinkNode = function(e) {
                return e instanceof u
            }, t.$isLinkNode = s, t.AutoLinkNode = u, t.LinkNode = i, t.TOGGLE_LINK_COMMAND = d, t.toggleLink = function(e, t = {}) {
                let {
                    target: n,
                    rel: r
                } = t;
                if (t = o.$getSelection(), o.$isRangeSelection(t))
                    if (t = t.extract(), null === e) t.forEach((e => {
                        if (s(e = e.getParent())) {
                            let t = e.getChildren();
                            for (let n = 0; n < t.length; n++) e.insertBefore(t[n]);
                            e.remove()
                        }
                    }));
                    else {
                        if (1 === t.length) {
                            var i = t[0];
                            if (null !== (i = s(i) ? i : function(e) {
                                    return function(e, t) {
                                        for (; null !== e && null !== (e = e.getParent()) && !t(e););
                                        return e
                                    }(e, (e => s(e)))
                                }(i))) return i.setURL(e), void 0 !== n && i.setTarget(n), void(void 0 !== r && i.setRel(r))
                        }
                        let l = null,
                            u = null;
                        t.forEach((t => {
                            var i = t.getParent();
                            if (i !== u && null !== i && (!o.$isElementNode(t) || t.isInline()))
                                if (s(i)) u = i, i.setURL(e), void 0 !== n && i.setTarget(n), void 0 !== r && i.setRel(r);
                                else if (i.is(l) || (l = i, u = a(e, {
                                    rel: r,
                                    target: n
                                }), s(i) ? null === t.getPreviousSibling() ? i.insertBefore(u) : i.insertAfter(u) : t.insertBefore(u)), s(t)) {
                                if (!t.is(u)) {
                                    if (null !== u) {
                                        i = t.getChildren();
                                        for (let e = 0; e < i.length; e++) u.append(i[e])
                                    }
                                    t.remove()
                                }
                            } else null !== u && u.append(t)
                        }))
                    }
            }
        },
        244783: (e, t, n) => {
            "use strict";
            const r = n(319206);
            e.exports = r
        },
        319206: (e, t, n) => {
            "use strict";
            var r = n(932998),
                o = n(376969);

            function i(e) {
                throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?code=${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)
            }

            function l(e) {
                let t = 1;
                for (e = e.getParent(); null != e;) {
                    if (T(e)) {
                        if (w(e = e.getParent())) {
                            t++, e = e.getParent();
                            continue
                        }
                        i(40)
                    }
                    break
                }
                return t
            }

            function a(e) {
                w(e = e.getParent()) || i(40);
                let t = e;
                for (; null !== t;) t = t.getParent(), w(t) && (e = t);
                return e
            }

            function s(e) {
                let t = [];
                e = e.getChildren().filter(T);
                for (let n = 0; n < e.length; n++) {
                    let r = e[n],
                        o = r.getFirstChild();
                    w(o) ? t = t.concat(s(o)) : t.push(r)
                }
                return t
            }

            function u(e) {
                return T(e) && w(e.getFirstChild())
            }

            function c(e) {
                return N().append(e)
            }

            function d(e, t) {
                return T(e) && (0 === t.length || 1 === t.length && e.is(t[0]) && 0 === e.getChildrenSize())
            }

            function f(e, t) {
                e.splice(e.getChildrenSize(), 0, t)
            }

            function g(e, t) {
                if (w(e)) return e;
                let n = e.getPreviousSibling(),
                    r = e.getNextSibling(),
                    o = N();
                return o.setFormat(e.getFormatType()), o.setIndent(e.getIndent()), f(o, e.getChildren()), w(n) && t === n.getListType() ? (n.append(o), e.remove(), w(r) && t === r.getListType() && (f(n, r.getChildren()), r.remove()), n) : w(r) && t === r.getListType() ? (r.getFirstChildOrThrow().insertBefore(o), e.remove(), r) : ((t = D(t)).append(o), e.replace(t), p(t), t)
            }

            function p(e, t) {
                if (void 0 !== (e = t || e.getChildren()))
                    for (t = 0; t < e.length; t++) {
                        let l = e[t];
                        if (T(l)) {
                            let e = l.getValue();
                            var n = l,
                                r = n.getParent(),
                                o = 1;
                            for (null != r && (w(r) ? o = r.getStart() : i(44)), n = n.getPreviousSiblings(), r = 0; r < n.length; r++) {
                                let e = n[r];
                                T(e) && !w(e.getFirstChild()) && o++
                            }
                            e !== o && l.setValue(o)
                        }
                    }
            }

            function h(e) {
                let t = new Set;
                e.forEach((e => {
                    if (!u(e) && !t.has(e.getKey())) {
                        var n = e.getParent(),
                            r = e.getNextSibling(),
                            o = e.getPreviousSibling();
                        if (u(r) && u(o)) w(o = o.getFirstChild()) && (o.append(e), w(e = r.getFirstChild()) && (f(o, e = e.getChildren()), r.remove(), t.add(r.getKey())), p(o));
                        else if (u(r)) w(r = r.getFirstChild()) && (null !== (o = r.getFirstChild()) && o.insertBefore(e), p(r));
                        else if (u(o)) w(r = o.getFirstChild()) && (r.append(e), p(r));
                        else if (w(n)) {
                            let t = N(),
                                i = D(n.getListType());
                            t.append(i), i.append(e), o ? o.insertAfter(t) : r ? r.insertBefore(t) : n.append(t)
                        }
                        w(n) && p(n)
                    }
                }))
            }

            function m(e) {
                e.forEach((e => {
                    if (!u(e)) {
                        var t = e.getParent(),
                            n = t ? t.getParent() : void 0,
                            r = n ? n.getParent() : void 0;
                        if (w(r) && T(n) && w(t)) {
                            var o = t ? t.getFirstChild() : void 0,
                                i = t ? t.getLastChild() : void 0;
                            if (e.is(o)) n.insertBefore(e), t.isEmpty() && n.remove();
                            else if (e.is(i)) n.insertAfter(e), t.isEmpty() && n.remove();
                            else {
                                var l = t.getListType();
                                o = N();
                                let r = D(l);
                                o.append(r), e.getPreviousSiblings().forEach((e => r.append(e))), i = N(), l = D(l), i.append(l), f(l, e.getNextSiblings()), n.insertBefore(o), n.insertAfter(i), n.replace(e)
                            }
                            p(t), p(r)
                        }
                    }
                }))
            }

            function _(e) {
                var t = r.$getSelection();
                if (r.$isRangeSelection(t)) {
                    var n = t.getNodes(),
                        o = [];
                    if (0 === n.length && n.push(t.anchor.getNode()), 1 === n.length) {
                        e: {
                            for (n = n[0]; null !== n;) {
                                if (T(n)) break e;
                                n = n.getParent()
                            }
                            n = null
                        }
                        null !== n && (o = [n])
                    }
                    else {
                        for (o = new Set, t = 0; t < n.length; t++) {
                            let e = n[t];
                            T(e) && o.add(e)
                        }
                        o = Array.from(o)
                    }
                    0 < o.length && ("indent" === e ? h(o) : m(o))
                }
            }
            class y extends r.ElementNode {
                static getType() {
                    return "listitem"
                }
                static clone(e) {
                    return new y(e.__value, e.__checked, e.__key)
                }
                constructor(e, t, n) {
                    super(n), this.__value = void 0 === e ? 1 : e, this.__checked = t
                }
                createDOM(e) {
                    let t = document.createElement("li"),
                        n = this.getParent();
                    return w(n) && (p(n), E(t, this, null, n)), t.value = this.__value, v(t, e.theme, this), t
                }
                updateDOM(e, t, n) {
                    let r = this.getParent();
                    return w(r) && (p(r), E(t, this, e, r)), t.value = this.__value, v(t, n.theme, this), !1
                }
                static importDOM() {
                    return {
                        li: () => ({
                            conversion: C,
                            priority: 0
                        })
                    }
                }
                static importJSON(e) {
                    let t = new y(e.value, e.checked);
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                exportJSON() {
                    return {
                        ...super.exportJSON(),
                        checked: this.getChecked(),
                        type: "listitem",
                        value: this.getValue(),
                        version: 1
                    }
                }
                append(...e) {
                    for (let t = 0; t < e.length; t++) {
                        let n = e[t];
                        if (r.$isElementNode(n) && this.canMergeWith(n)) {
                            let e = n.getChildren();
                            this.append(...e), n.remove()
                        } else super.append(n)
                    }
                    return this
                }
                replace(e) {
                    if (T(e)) return super.replace(e);
                    let t = this.getParentOrThrow();
                    if (w(t)) {
                        var n = t.__children;
                        let o = n.length;
                        var r = n.indexOf(this.__key);
                        if (0 === r) t.insertBefore(e);
                        else if (r === o - 1) t.insertAfter(e);
                        else {
                            n = D(t.getListType());
                            let i = t.getChildren();
                            for (r += 1; r < o; r++) n.append(i[r]);
                            t.insertAfter(e), e.insertAfter(n)
                        }
                        this.remove(), 1 === o && t.remove()
                    }
                    return e
                }
                insertAfter(e) {
                    var t = this.getParentOrThrow();
                    w(t) || i(39);
                    var n = this.getNextSiblings();
                    if (T(e)) return t = super.insertAfter(e), w(e = e.getParentOrThrow()) && p(e), t;
                    if (w(e) && e.getListType() === t.getListType()) {
                        for (t = e, n = (e = e.getChildren()).length - 1; 0 <= n; n--) t = e[n], this.insertAfter(t);
                        return t
                    }
                    if (t.insertAfter(e), 0 !== n.length) {
                        let r = D(t.getListType());
                        n.forEach((e => r.append(e))), e.insertAfter(r)
                    }
                    return e
                }
                remove(e) {
                    let t = this.getNextSibling();
                    super.remove(e), null !== t && (w(e = t.getParent()) && p(e))
                }
                insertNewAfter() {
                    let e = N(null == this.__checked && void 0);
                    return this.insertAfter(e), e
                }
                collapseAtStart(e) {
                    let t = r.$createParagraphNode();
                    this.getChildren().forEach((e => t.append(e)));
                    var n = this.getParentOrThrow(),
                        o = n.getParentOrThrow();
                    let i = T(o);
                    return 1 === n.getChildrenSize() ? i ? (n.remove(), o.select()) : (n.replace(t), n = e.anchor, e = e.focus, o = t.getKey(), "element" === n.type && n.getNode().is(this) && n.set(o, n.offset, "element"), "element" === e.type && e.getNode().is(this) && e.set(o, e.offset, "element")) : (n.insertBefore(t), this.remove()), !0
                }
                getValue() {
                    return this.getLatest().__value
                }
                setValue(e) {
                    this.getWritable().__value = e
                }
                getChecked() {
                    return this.getLatest().__checked
                }
                setChecked(e) {
                    this.getWritable().__checked = e
                }
                toggleChecked() {
                    this.setChecked(!this.__checked)
                }
                getIndent() {
                    var e = this.getParent();
                    if (null === e) return this.getLatest().__indent;
                    e = e.getParentOrThrow();
                    let t = 0;
                    for (; T(e);) e = e.getParentOrThrow().getParentOrThrow(), t++;
                    return t
                }
                setIndent(e) {
                    let t = this.getIndent();
                    for (; t !== e;) t < e ? (h([this]), t++) : (m([this]), t--);
                    return this
                }
                canIndent() {
                    return !1
                }
                insertBefore(e) {
                    if (T(e)) {
                        let e = this.getParentOrThrow();
                        if (w(e)) {
                            p(e, this.getNextSiblings())
                        }
                    }
                    return super.insertBefore(e)
                }
                canInsertAfter(e) {
                    return T(e)
                }
                canReplaceWith(e) {
                    return T(e)
                }
                canMergeWith(e) {
                    return r.$isParagraphNode(e) || T(e)
                }
                extractWithChild(e, t) {
                    if (!r.$isRangeSelection(t)) return !1;
                    e = t.anchor.getNode();
                    let n = t.focus.getNode();
                    return this.isParentOf(e) && this.isParentOf(n) && this.getTextContent().length === t.getTextContent().length
                }
            }

            function v(e, t, n) {
                let r = [],
                    i = [];
                var l = (t = t.list) ? t.listitem : void 0;
                if (t && t.nested) var a = t.nested.listitem;
                if (void 0 !== l && (l = l.split(" "), r.push(...l)), t) {
                    l = w(l = n.getParent()) && "check" === l.getListType();
                    let e = n.getChecked();
                    l && !e || i.push(t.listitemUnchecked), l && e || i.push(t.listitemChecked), l && r.push(e ? t.listitemChecked : t.listitemUnchecked)
                }
                void 0 !== a && (a = a.split(" "), n.getChildren().some((e => w(e))) ? r.push(...a) : i.push(...a)), 0 < i.length && o.removeClassNamesFromElement(e, ...i), 0 < r.length && o.addClassNamesToElement(e, ...r)
            }

            function E(e, t, n, r) {
                "check" === r.getListType() ? w(t.getFirstChild()) ? (e.removeAttribute("role"), e.removeAttribute("tabIndex"), e.removeAttribute("aria-checked")) : (e.setAttribute("role", "checkbox"), e.setAttribute("tabIndex", "-1"), n && t.__checked === n.__checked || e.setAttribute("aria-checked", t.getChecked() ? "true" : "false")) : null != t.getChecked() && t.setChecked(void 0)
            }

            function C() {
                return {
                    node: N()
                }
            }

            function N(e) {
                return new y(void 0, e)
            }

            function T(e) {
                return e instanceof y
            }
            class S extends r.ElementNode {
                static getType() {
                    return "list"
                }
                static clone(e) {
                    return new S(e.__listType || O[e.__tag], e.__start, e.__key)
                }
                constructor(e, t, n) {
                    super(n), this.__listType = e = O[e] || e, this.__tag = "number" === e ? "ol" : "ul", this.__start = t
                }
                getTag() {
                    return this.__tag
                }
                getListType() {
                    return this.__listType
                }
                getStart() {
                    return this.__start
                }
                createDOM(e) {
                    let t = document.createElement(this.__tag);
                    return 1 !== this.__start && t.setAttribute("start", String(this.__start)), t.__lexicalListType = this.__listType, $(t, e.theme, this), t
                }
                updateDOM(e, t, n) {
                    return e.__tag !== this.__tag || ($(t, n.theme, this), !1)
                }
                static importDOM() {
                    return {
                        ol: () => ({
                            conversion: R,
                            priority: 0
                        }),
                        ul: () => ({
                            conversion: R,
                            priority: 0
                        })
                    }
                }
                static importJSON(e) {
                    let t = D(e.listType, e.start);
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                exportJSON() {
                    return {
                        ...super.exportJSON(),
                        listType: this.getListType(),
                        start: this.getStart(),
                        tag: this.getTag(),
                        type: "list",
                        version: 1
                    }
                }
                canBeEmpty() {
                    return !1
                }
                canIndent() {
                    return !1
                }
                append(...e) {
                    for (let n = 0; n < e.length; n++) {
                        var t = e[n];
                        if (T(t)) super.append(t);
                        else {
                            let e = N();
                            w(t) ? e.append(t) : r.$isElementNode(t) ? (t = r.$createTextNode(t.getTextContent()), e.append(t)) : e.append(t), super.append(e)
                        }
                    }
                    return this
                }
                extractWithChild(e) {
                    return T(e)
                }
            }

            function $(e, t, n) {
                let r = [],
                    i = [];
                var a = t.list;
                if (void 0 !== a) {
                    let e = a[`${n.__tag}Depth`] || [],
                        o = (t = l(n) - 1) % e.length;
                    var s = e[o];
                    let u, c = a[n.__tag];
                    if (void 0 !== (a = a.nested) && a.list && (u = a.list), void 0 !== c && r.push(c), void 0 !== s)
                        for (s = s.split(" "), r.push(...s), s = 0; s < e.length; s++) s !== o && i.push(n.__tag + s);
                    void 0 !== u && (n = u.split(" "), 1 < t ? r.push(...n) : i.push(...n))
                }
                0 < i.length && o.removeClassNamesFromElement(e, ...i), 0 < r.length && o.addClassNamesToElement(e, ...r)
            }

            function x(e) {
                let t = [];
                for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    T(r) ? (t.push(r), r.getChildren().forEach((e => {
                        w(e) && t.push(c(e))
                    }))) : t.push(c(r))
                }
                return t
            }

            function R(e) {
                let t = null;
                return "ol" === (e = e.nodeName.toLowerCase()) ? t = D("number") : "ul" === e && (t = D("bullet")), {
                    after: x,
                    node: t
                }
            }
            let O = {
                ol: "number",
                ul: "bullet"
            };

            function D(e, t = 1) {
                return new S(e, t)
            }

            function w(e) {
                return e instanceof S
            }
            let b = r.createCommand("INSERT_UNORDERED_LIST_COMMAND"),
                A = r.createCommand("INSERT_ORDERED_LIST_COMMAND"),
                M = r.createCommand("INSERT_CHECK_LIST_COMMAND"),
                P = r.createCommand("REMOVE_LIST_COMMAND");
            t.$createListItemNode = N, t.$createListNode = D, t.$getListDepth = l, t.$handleListInsertParagraph = function() {
                var e = r.$getSelection();
                if (!r.$isRangeSelection(e) || !e.isCollapsed()) return !1;
                if (!T(e = e.anchor.getNode()) || "" !== e.getTextContent()) return !1;
                var t = a(e),
                    n = e.getParent();
                w(n) || i(40);
                let o, l = n.getParent();
                if (r.$isRootOrShadowRoot(l)) o = r.$createParagraphNode(), t.insertAfter(o);
                else {
                    if (!T(l)) return !1;
                    o = N(), l.insertAfter(o)
                }
                if (o.select(), 0 < (t = e.getNextSiblings()).length) {
                    let e = D(n.getListType());
                    r.$isParagraphNode(o) ? o.insertAfter(e) : ((n = N()).append(e), o.insertAfter(n)), t.forEach((t => {
                        t.remove(), e.append(t)
                    }))
                }
                return function(e) {
                    for (; null == e.getNextSibling() && null == e.getPreviousSibling();) {
                        let t = e.getParent();
                        if (null == t || !T(e) && !w(e)) break;
                        e = t
                    }
                    e.remove()
                }(e), !0
            }, t.$isListItemNode = T, t.$isListNode = w, t.INSERT_CHECK_LIST_COMMAND = M, t.INSERT_ORDERED_LIST_COMMAND = A, t.INSERT_UNORDERED_LIST_COMMAND = b, t.ListItemNode = y, t.ListNode = S, t.REMOVE_LIST_COMMAND = P, t.indentList = function() {
                _("indent")
            }, t.insertList = function(e, t) {
                e.update((() => {
                    var e = r.$getSelection();
                    if (r.$isRangeSelection(e) || r.DEPRECATED_$isGridSelection(e)) {
                        var n = e.getNodes(),
                            o = (e = e.anchor.getNode()).getParent();
                        if (d(e, n)) n = D(t), r.$isRootOrShadowRoot(o) ? (e.replace(n), o = N(), r.$isElementNode(e) && (o.setFormat(e.getFormatType()), o.setIndent(e.getIndent())), n.append(o)) : T(e) && (f(n, (e = e.getParentOrThrow()).getChildren()), e.replace(n));
                        else
                            for (e = new Set, o = 0; o < n.length; o++) {
                                var i = n[o];
                                if (r.$isElementNode(i) && i.isEmpty() && !e.has(i.getKey())) g(i, t);
                                else if (r.$isLeafNode(i))
                                    for (i = i.getParent(); null != i;) {
                                        let n = i.getKey();
                                        if (w(i)) {
                                            if (!e.has(n)) {
                                                var l = D(t);
                                                f(l, i.getChildren()), i.replace(l), p(l), e.add(n)
                                            }
                                            break
                                        }
                                        if (l = i.getParent(), r.$isRootOrShadowRoot(l) && !e.has(n)) {
                                            e.add(n), g(i, t);
                                            break
                                        }
                                        i = l
                                    }
                            }
                    }
                }))
            }, t.outdentList = function() {
                _("outdent")
            }, t.removeList = function(e) {
                e.update((() => {
                    let e = r.$getSelection();
                    if (r.$isRangeSelection(e)) {
                        var t = new Set,
                            n = e.getNodes(),
                            i = e.anchor.getNode();
                        if (d(i, n)) t.add(a(i));
                        else
                            for (i = 0; i < n.length; i++) {
                                var l = n[i];
                                r.$isLeafNode(l) && (null != (l = o.$getNearestNodeOfType(l, y)) && t.add(a(l)))
                            }
                        for (let o of t) {
                            t = o, n = s(o);
                            for (let o of n) f(n = r.$createParagraphNode(), o.getChildren()), t.insertAfter(n), t = n, o.__key === e.anchor.key && e.anchor.set(n.getKey(), 0, "element"), o.__key === e.focus.key && e.focus.set(n.getKey(), 0, "element"), o.remove();
                            o.remove()
                        }
                    }
                }))
            }
        },
        329428: (e, t, n) => {
            "use strict";
            const r = n(174301);
            e.exports = r
        },
        174301: (e, t, n) => {
            "use strict";
            var r = n(932998),
                o = n(376969);
            class i extends r.ElementNode {
                static getType() {
                    return "mark"
                }
                static clone(e) {
                    return new i(Array.from(e.__ids), e.__key)
                }
                static importDOM() {
                    return null
                }
                static importJSON(e) {
                    let t = l(e.ids);
                    return t.setFormat(e.format), t.setIndent(e.indent), t.setDirection(e.direction), t
                }
                exportJSON() {
                    return {
                        ...super.exportJSON(),
                        ids: this.getIDs(),
                        type: "mark",
                        version: 1
                    }
                }
                constructor(e, t) {
                    super(t), this.__ids = e || []
                }
                createDOM(e) {
                    let t = document.createElement("mark");
                    return o.addClassNamesToElement(t, e.theme.mark), 1 < this.__ids.length && o.addClassNamesToElement(t, e.theme.markOverlap), t
                }
                updateDOM(e, t, n) {
                    e = e.__ids.length;
                    let r = this.__ids.length;
                    return n = n.theme.markOverlap, e !== r && (1 === e ? 2 === r && o.addClassNamesToElement(t, n) : 1 === r && o.removeClassNamesFromElement(t, n)), !1
                }
                hasID(e) {
                    let t = this.getIDs();
                    for (let n = 0; n < t.length; n++)
                        if (e === t[n]) return !0;
                    return !1
                }
                getIDs() {
                    let e = this.getLatest();
                    return a(e) ? e.__ids : []
                }
                addID(e) {
                    var t = this.getWritable();
                    if (a(t)) {
                        let n = t.__ids;
                        for (t.__ids = n, t = 0; t < n.length; t++)
                            if (e === n[t]) return;
                        n.push(e)
                    }
                }
                deleteID(e) {
                    var t = this.getWritable();
                    if (a(t)) {
                        let n = t.__ids;
                        for (t.__ids = n, t = 0; t < n.length; t++)
                            if (e === n[t]) {
                                n.splice(t, 1);
                                break
                            }
                    }
                }
                insertNewAfter(e) {
                    if (e = this.getParentOrThrow().insertNewAfter(e), r.$isElementNode(e)) {
                        let t = l(this.__ids);
                        return e.append(t), t
                    }
                    return null
                }
                canInsertTextBefore() {
                    return !1
                }
                canInsertTextAfter() {
                    return !1
                }
                canBeEmpty() {
                    return !1
                }
                isInline() {
                    return !0
                }
                extractWithChild(e, t, n) {
                    if (!r.$isRangeSelection(t) || "html" === n) return !1;
                    let o = t.anchor,
                        i = t.focus;
                    return e = o.getNode(), n = i.getNode(), t = t.isBackward() ? o.offset - i.offset : i.offset - o.offset, this.isParentOf(e) && this.isParentOf(n) && this.getTextContent().length === t
                }
                excludeFromCopy(e) {
                    return "clone" !== e
                }
            }

            function l(e) {
                return new i(e)
            }

            function a(e) {
                return e instanceof i
            }
            t.$createMarkNode = l, t.$getMarkIDs = function(e, t) {
                for (; null !== e;) {
                    if (a(e)) return e.getIDs();
                    if (r.$isTextNode(e) && t === e.getTextContentSize()) {
                        let t = e.getNextSibling();
                        if (a(t)) return t.getIDs()
                    }
                    e = e.getParent()
                }
                return null
            }, t.$isMarkNode = a, t.$unwrapMarkNode = function(e) {
                let t = e.getChildren(),
                    n = null;
                for (let r = 0; r < t.length; r++) {
                    let o = t[r];
                    null === n ? e.insertBefore(o) : n.insertAfter(o), n = o
                }
                e.remove()
            }, t.$wrapSelectionInMarkNode = function(e, t, n, o) {
                let i = e.getNodes();
                var s = e.anchor.offset,
                    u = e.focus.offset;
                e = i.length;
                let c, d, f = t ? u : s;
                for (t = t ? s : u, s = 0; s < e; s++) {
                    var g = i[s];
                    if (r.$isElementNode(d) && d.isParentOf(g)) continue;
                    u = 0 === s;
                    let h = s === e - 1;
                    var p = null;
                    if (r.$isTextNode(g)) {
                        p = g.getTextContentSize();
                        let e = u ? f : 0,
                            n = h ? t : p;
                        if (0 === e && 0 === n) continue;
                        p = 1 < (g = g.splitText(e, n)).length && (3 === g.length || u && !h || n === p) ? g[1] : g[0]
                    } else {
                        if (a(g)) continue;
                        r.$isElementNode(g) && g.isInline() && (p = g)
                    }
                    null !== p ? p && p.is(c) || (null != (u = p.getParent()) && u.is(c) || (d = void 0), c = u, void 0 === d && (d = (o || l)([n]), p.insertBefore(d)), d.append(p)) : d = c = void 0
                }
            }, t.MarkNode = i
        },
        99299: (e, t, n) => {
            "use strict";
            const r = n(161490);
            e.exports = r
        },
        161490: (e, t, n) => {
            "use strict";
            var r = n(986907),
                o = n(389408),
                i = n(376969),
                l = n(932998);
            let a = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
                s = a && "documentMode" in document ? document.documentMode : null;
            a && /Mac|iPod|iPhone|iPad/.test(navigator.platform), a && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
            let u = !(!a || !("InputEvent" in window) || s) && "getTargetRanges" in new window.InputEvent("input"),
                c = a && /Version\/[\d.]+.*Safari/.test(navigator.userAgent),
                d = a && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

            function f(e, t) {
                t.update((() => {
                    let n = e instanceof KeyboardEvent ? null : e.clipboardData,
                        o = l.$getSelection();
                    if (null !== o && null != n) {
                        e.preventDefault();
                        let i = r.$getHtmlContent(t);
                        null !== i && n.setData("text/html", i), n.setData("text/plain", o.getTextContent())
                    }
                }))
            }
            t.registerPlainText = function(e) {
                return i.mergeRegister(e.registerCommand(l.DELETE_CHARACTER_COMMAND, (e => {
                    const t = l.$getSelection();
                    return !!l.$isRangeSelection(t) && (t.deleteCharacter(e), !0)
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.DELETE_WORD_COMMAND, (e => {
                    const t = l.$getSelection();
                    return !!l.$isRangeSelection(t) && (t.deleteWord(e), !0)
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.DELETE_LINE_COMMAND, (e => {
                    const t = l.$getSelection();
                    return !!l.$isRangeSelection(t) && (t.deleteLine(e), !0)
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.CONTROLLED_TEXT_INSERTION_COMMAND, (e => {
                    const t = l.$getSelection();
                    if (!l.$isRangeSelection(t)) return !1;
                    if ("string" == typeof e) t.insertText(e);
                    else {
                        const n = e.dataTransfer;
                        null != n ? r.$insertDataTransferForPlainText(n, t) : (e = e.data) && t.insertText(e)
                    }
                    return !0
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.REMOVE_TEXT_COMMAND, (() => {
                    const e = l.$getSelection();
                    return !!l.$isRangeSelection(e) && (e.removeText(), !0)
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.INSERT_LINE_BREAK_COMMAND, (e => {
                    const t = l.$getSelection();
                    return !!l.$isRangeSelection(t) && (t.insertLineBreak(e), !0)
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.INSERT_PARAGRAPH_COMMAND, (() => {
                    const e = l.$getSelection();
                    return !!l.$isRangeSelection(e) && (e.insertLineBreak(), !0)
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.KEY_ARROW_LEFT_COMMAND, (e => {
                    const t = l.$getSelection();
                    if (!l.$isRangeSelection(t)) return !1;
                    const n = e.shiftKey;
                    return !!o.$shouldOverrideDefaultCharacterSelection(t, !0) && (e.preventDefault(), o.$moveCharacter(t, n, !0), !0)
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.KEY_ARROW_RIGHT_COMMAND, (e => {
                    const t = l.$getSelection();
                    if (!l.$isRangeSelection(t)) return !1;
                    const n = e.shiftKey;
                    return !!o.$shouldOverrideDefaultCharacterSelection(t, !1) && (e.preventDefault(), o.$moveCharacter(t, n, !1), !0)
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.KEY_BACKSPACE_COMMAND, (t => {
                    const n = l.$getSelection();
                    return !!l.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(l.DELETE_CHARACTER_COMMAND, !0))
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.KEY_DELETE_COMMAND, (t => {
                    const n = l.$getSelection();
                    return !!l.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(l.DELETE_CHARACTER_COMMAND, !1))
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.KEY_ENTER_COMMAND, (t => {
                    const n = l.$getSelection();
                    if (!l.$isRangeSelection(n)) return !1;
                    if (null !== t) {
                        if ((d || c) && u) return !1;
                        t.preventDefault()
                    }
                    return e.dispatchCommand(l.INSERT_LINE_BREAK_COMMAND, !1)
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.COPY_COMMAND, (t => {
                    const n = l.$getSelection();
                    return !!l.$isRangeSelection(n) && (f(t, e), !0)
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.CUT_COMMAND, (t => {
                    const n = l.$getSelection();
                    return !!l.$isRangeSelection(n) && (function(e, t) {
                        f(e, t), t.update((() => {
                            let e = l.$getSelection();
                            l.$isRangeSelection(e) && e.removeText()
                        }))
                    }(t, e), !0)
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.PASTE_COMMAND, (t => {
                    const n = l.$getSelection();
                    return !!l.$isRangeSelection(n) && (function(e, t) {
                        e.preventDefault(), t.update((() => {
                            let t = l.$getSelection(),
                                n = e instanceof InputEvent || e instanceof KeyboardEvent ? null : e.clipboardData;
                            null != n && l.$isRangeSelection(t) && r.$insertDataTransferForPlainText(n, t)
                        }), {
                            tag: "paste"
                        })
                    }(t, e), !0)
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.DROP_COMMAND, (e => {
                    const t = l.$getSelection();
                    return !!l.$isRangeSelection(t) && (e.preventDefault(), !0)
                }), l.COMMAND_PRIORITY_EDITOR), e.registerCommand(l.DRAGSTART_COMMAND, (e => {
                    const t = l.$getSelection();
                    return !!l.$isRangeSelection(t) && (e.preventDefault(), !0)
                }), l.COMMAND_PRIORITY_EDITOR))
            }
        },
        264053: (e, t, n) => {
            "use strict";
            const r = n(710221);
            e.exports = r
        },
        710221: (e, t, n) => {
            "use strict";
            var r = n(84260),
                o = n(932998),
                i = n(667294),
                l = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? i.useLayoutEffect : i.useEffect;
            t.AutoScrollPlugin = function({
                scrollRef: e
            }) {
                let [t] = r.useLexicalComposerContext();
                return l((() => t.registerUpdateListener((({
                    tags: n,
                    editorState: r
                }) => {
                    var i = e.current;
                    null !== i && n.has("scroll-into-view") && (n = r.read((() => o.$getSelection())), o.$isRangeSelection(n) && n.isCollapsed() && (null !== (n = t.getElementByKey(n.anchor.key)) && (i = i.getBoundingClientRect(), (r = n.getBoundingClientRect()).bottom > i.bottom ? n.scrollIntoView(!1) : r.top < i.top && n.scrollIntoView())))
                }))), [t, e]), null
            }
        },
        111356: (e, t, n) => {
            "use strict";
            const r = n(650024);
            e.exports = r
        },
        650024: (e, t, n) => {
            "use strict";
            var r = n(84260),
                o = n(932998),
                i = n(667294),
                l = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? i.useLayoutEffect : i.useEffect;
            t.ClearEditorPlugin = function({
                onClear: e
            }) {
                let [t] = r.useLexicalComposerContext();
                return l((() => t.registerCommand(o.CLEAR_EDITOR_COMMAND, (() => (t.update((() => {
                    if (null == e) {
                        let e = o.$getRoot(),
                            t = o.$getSelection(),
                            n = o.$createParagraphNode();
                        e.clear(), e.append(n), null !== t && n.select()
                    } else e()
                })), !0)), o.COMMAND_PRIORITY_EDITOR)), [t, e]), null
            }
        },
        822292: (e, t, n) => {
            "use strict";
            const r = n(544149);
            e.exports = r
        },
        544149: (e, t, n) => {
            "use strict";
            var r = n(84260),
                o = n(932998),
                i = n(667294),
                l = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? i.useLayoutEffect : i.useEffect;
            let a = {
                tag: "history-merge"
            };
            t.LexicalComposer = function({
                initialConfig: e,
                children: t
            }) {
                let n = i.useMemo((() => {
                    const {
                        theme: t,
                        namespace: n,
                        editor__DEPRECATED: i,
                        nodes: l,
                        onError: s,
                        editorState: u
                    } = e, c = r.createLexicalComposerContext(null, t);
                    let d = i || null;
                    if (null === d) {
                        const e = o.createEditor({
                            editable: !1,
                            namespace: n,
                            nodes: l,
                            onError: t => s(t, e),
                            theme: t
                        });
                        ! function(e, t) {
                            if (null !== t)
                                if (void 0 === t) e.update((() => {
                                    var t = o.$getRoot();
                                    if (t.isEmpty()) {
                                        let n = o.$createParagraphNode();
                                        t.append(n), t = document.activeElement, (null !== o.$getSelection() || null !== t && t === e.getRootElement()) && n.select()
                                    }
                                }), a);
                                else if (null !== t) switch (typeof t) {
                                case "string":
                                    let n = e.parseEditorState(t);
                                    e.setEditorState(n, a);
                                    break;
                                case "object":
                                    e.setEditorState(t, a);
                                    break;
                                case "function":
                                    e.update((() => {
                                        o.$getRoot().isEmpty() && t(e)
                                    }), a)
                            }
                        }(e, u), d = e
                    }
                    return [d, c]
                }), []);
                return l((() => {
                    let t = e.editable,
                        [r] = n;
                    r.setEditable(void 0 === t || t)
                }), []), i.createElement(r.LexicalComposerContext.Provider, {
                    value: n
                }, t)
            }
        },
        777943: (e, t, n) => {
            "use strict";
            const r = n(279848);
            e.exports = r
        },
        279848: (e, t, n) => {
            "use strict";
            var r = n(667294);

            function o(e, t) {
                return (o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var i = {
                    error: null
                },
                l = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = i, t.resetErrorBoundary = function() {
                            for (var e, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                            null == t.props.onReset || (e = t.props).onReset.apply(e, r), t.reset()
                        }, t
                    }! function(e, t) {
                        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, o(e, t)
                    }(t, e), t.getDerivedStateFromError = function(e) {
                        return {
                            error: e
                        }
                    };
                    var n = t.prototype;
                    return n.reset = function() {
                        this.setState(i)
                    }, n.componentDidCatch = function(e, t) {
                        var n, r;
                        null == (n = (r = this.props).onError) || n.call(r, e, t)
                    }, n.componentDidUpdate = function(e, t) {
                        var n, r, o = this.props.resetKeys;
                        null !== this.state.error && null !== t.error && function(e, t) {
                            return void 0 === e && (e = []), void 0 === t && (t = []), e.length !== t.length || e.some((function(e, n) {
                                return !Object.is(e, t[n])
                            }))
                        }(e.resetKeys, o) && (null == (n = (r = this.props).onResetKeysChange) || n.call(r, e.resetKeys, o), this.reset())
                    }, n.render = function() {
                        var e = this.state.error,
                            t = this.props,
                            n = t.fallbackRender,
                            o = t.FallbackComponent;
                        if (t = t.fallback, null !== e) {
                            if (e = {
                                    error: e,
                                    resetErrorBoundary: this.resetErrorBoundary
                                }, r.isValidElement(t)) return t;
                            if ("function" == typeof n) return n(e);
                            if (o) return r.createElement(o, e);
                            throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")
                        }
                        return this.props.children
                    }, t
                }(r.Component);
            e.exports = function({
                children: e,
                onError: t
            }) {
                return r.createElement(l, {
                    fallback: r.createElement("div", {
                        style: {
                            border: "1px solid #f00",
                            color: "#f00",
                            padding: "8px"
                        }
                    }, "An error was thrown."),
                    onError: t
                }, e)
            }
        },
        704506: (e, t, n) => {
            "use strict";
            const r = n(800548);
            e.exports = r
        },
        800548: (e, t, n) => {
            "use strict";
            var r = n(84260),
                o = n(548854),
                i = n(667294);
            t.createEmptyHistoryState = o.createEmptyHistoryState, t.HistoryPlugin = function({
                externalHistoryState: e
            }) {
                let [t] = r.useLexicalComposerContext();
                return function(e, t, n = 1e3) {
                    let r = i.useMemo((() => t || o.createEmptyHistoryState()), [t]);
                    i.useEffect((() => o.registerHistory(e, r, n)), [n, e, r])
                }(t, e), null
            }
        },
        717150: (e, t, n) => {
            "use strict";
            const r = n(224800);
            e.exports = r
        },
        224800: (e, t, n) => {
            "use strict";
            var r = n(84260),
                o = n(667294),
                i = n(302977),
                l = n(376969),
                a = n(973935),
                s = n(570573),
                u = n(99299),
                c = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? o.useLayoutEffect : o.useEffect;

            function d(e) {
                return e.getEditorState().read(i.$canShowPlaceholderCurry(e.isComposing(), e.isEditable()))
            }
            t.PlainTextPlugin = function({
                contentEditable: e,
                placeholder: t,
                ErrorBoundary: n
            }) {
                let [i] = r.useLexicalComposerContext(), f = function(e) {
                    let [t, n] = o.useState((() => d(e)));
                    return c((() => {
                        function t() {
                            let t = d(e);
                            n(t)
                        }
                        return t(), l.mergeRegister(e.registerUpdateListener((() => {
                            t()
                        })), e.registerEditableListener((() => {
                            t()
                        })))
                    }), [e]), t
                }(i);
                return n = function(e, t) {
                        let [n, r] = o.useState((() => e.getDecorators()));
                        return c((() => e.registerDecoratorListener((e => {
                            a.flushSync((() => {
                                r(e)
                            }))
                        }))), [e]), o.useEffect((() => {
                            r(e.getDecorators())
                        }), [e]), o.useMemo((() => {
                            let r = [],
                                i = Object.keys(n);
                            for (let s = 0; s < i.length; s++) {
                                var l = i[s];
                                let u = o.createElement(t, {
                                    onError: t => e._onError(t)
                                }, o.createElement(o.Suspense, {
                                    fallback: null
                                }, n[l]));
                                null !== (l = e.getElementByKey(l)) && r.push(a.createPortal(u, l))
                            }
                            return r
                        }), [t, n, e])
                    }(i, n),
                    function(e) {
                        c((() => l.mergeRegister(u.registerPlainText(e), s.registerDragonSupport(e))), [e])
                    }(i), o.createElement(o.Fragment, null, e, f && t, n)
            }
        },
        847480: (e, t, n) => {
            "use strict";
            const r = n(22210);
            e.exports = r
        },
        22210: (e, t, n) => {
            "use strict";
            var r = n(873435),
                o = n(329428),
                i = n(376969),
                l = n(932998),
                a = n(667294);
            let s = Object.freeze({
                    "\t": "\\t",
                    "\n": "\\n"
                }),
                u = new RegExp(Object.keys(s).join("|"), "g"),
                c = Object.freeze({
                    ancestorHasNextSibling: "|",
                    ancestorIsLastChild: " ",
                    hasNextSibling: "├",
                    isLastChild: "└",
                    selectedChar: "^",
                    selectedLine: ">"
                });

            function d(e, t, n, i) {
                let a = " root\n";
                return e = e.read((() => {
                    const e = l.$getSelection();
                    return f(l.$getRoot(), ((t, n) => {
                        const i = `(${t.getKey()})`,
                            s = t.getType() || "",
                            d = t.isSelected(),
                            f = o.$isMarkNode(t) ? ` id: [ ${t.getIDs().join(", ")} ] ` : "";
                        var p = a,
                            h = d ? c.selectedLine : " ",
                            m = n.join(" ");
                        if (l.$isTextNode(t)) {
                            var E = t.getTextContent(),
                                C = 0 === E.length ? "(empty)" : `"${g(E)}"`;
                            E = [C, 0 !== (E = [v(t), _(t), y(t)].filter(Boolean).join(", ")).length ? `{ ${E} }` : null].filter(Boolean).join(" ").trim()
                        } else if (r.$isLinkNode(t)) {
                            E = 0 === (E = t.getURL()).length ? "(empty)" : `"${g(E)}"`, null != (C = t.getTarget()) && (C = "target: " + C);
                            var N = Boolean;
                            let e = t.getRel();
                            null != e && (e = "rel: " + e), E = [E, 0 !== (C = [C, e].filter(N).join(", ")).length ? `{ ${C} }` : null].filter(Boolean).join(" ").trim()
                        } else E = "";
                        a = p + `${h} ${m} ${i} ${s} ${f} ${E}\n`, a += function({
                            indent: e,
                            isSelected: t,
                            node: n,
                            nodeKeyDisplay: r,
                            selection: o,
                            typeDisplay: i
                        }) {
                            if (!l.$isTextNode(n) || !l.$isRangeSelection(o) || !t || l.$isElementNode(n)) return "";
                            t = o.anchor;
                            var a = o.focus;
                            if ("" === n.getTextContent() || t.getNode() === o.focus.getNode() && t.offset === a.offset) return "";
                            a = o.anchor;
                            let s = o.focus,
                                d = n.getTextContent(),
                                f = d.length;
                            if (t = o = -1, "text" === a.type && "text" === s.type) {
                                let e = a.getNode(),
                                    r = s.getNode();
                                e === r && n === e && a.offset !== s.offset ? [o, t] = a.offset < s.offset ? [a.offset, s.offset] : [s.offset, a.offset] : [o, t] = n === e ? e.isBefore(r) ? [a.offset, f] : [0, a.offset] : n === r ? r.isBefore(e) ? [s.offset, f] : [0, s.offset] : [0, f]
                            }
                            n = (d.slice(0, o).match(u) || []).length, a = (d.slice(o, t).match(u) || []).length;
                            let [g, p] = [o + n, t + n + a];
                            return g === p ? "" : (n = e[e.length - 1] === c.hasNextSibling ? c.ancestorHasNextSibling : c.ancestorIsLastChild, e = [...e.slice(0, e.length - 1), n], n = Array(g + 1).fill(" "), o = Array(p - g).fill(c.selectedChar), r = Array(r.length + (i.length + 3)).fill(" "), [c.selectedLine, e.join(" "), [...r, ...n, ...o].join("")].join(" ") + "\n")
                        }({
                            indent: n,
                            isSelected: d,
                            node: t,
                            nodeKeyDisplay: i,
                            selection: e,
                            typeDisplay: s
                        })
                    })), null === e ? ": null" : l.$isRangeSelection(e) ? function(e) {
                        let t = "",
                            n = v(e),
                            r = e.anchor;
                        e = e.focus;
                        let o = r.offset,
                            i = e.offset;
                        return t = t + ": range " + ("" !== n ? `{ ${n} }` : "") + `\n  ├ anchor { key: ${r.key}, offset: ${null===o?"null":o}, type: ${r.type} }`, t + `\n  └ focus { key: ${e.key}, offset: ${null===i?"null":i}, type: ${e.type} }`
                    }(e) : l.DEPRECATED_$isGridSelection(e) ? `: grid\n  └ { grid: ${e.gridKey}, anchorCell: ${e.anchor.key}, focusCell: ${e.focus.key} }` : `: node\n  └ [${Array.from(e._nodes).join(", ")}]`
                })), a += "\n selection" + e, a += "\n\n editor:", a += `\n  └ namespace ${t.namespace}`, null !== n && (a += `\n  └ compositionKey ${n}`), a += `\n  └ editable ${String(i)}`
            }

            function f(e, t, n = []) {
                let r = (e = e.getChildren()).length;
                e.forEach(((e, o) => {
                    t(e, n.concat(o === r - 1 ? c.isLastChild : c.hasNextSibling)), l.$isElementNode(e) && f(e, t, n.concat(o === r - 1 ? c.ancestorIsLastChild : c.ancestorHasNextSibling))
                }))
            }

            function g(e) {
                return Object.entries(s).reduce(((e, [t, n]) => e.replace(new RegExp(t, "g"), String(n))), e)
            }
            let p = [e => e.hasFormat("bold") && "Bold", e => e.hasFormat("code") && "Code", e => e.hasFormat("italic") && "Italic", e => e.hasFormat("strikethrough") && "Strikethrough", e => e.hasFormat("subscript") && "Subscript", e => e.hasFormat("superscript") && "Superscript", e => e.hasFormat("underline") && "Underline"],
                h = [e => e.isDirectionless() && "Directionless", e => e.isUnmergeable() && "Unmergeable"],
                m = [e => e.isToken() && "Token", e => e.isSegmented() && "Segmented"];

            function _(e) {
                let t = h.map((t => t(e))).filter(Boolean).join(", ").toLocaleLowerCase();
                return "" !== t && (t = "detail: " + t), t
            }

            function y(e) {
                let t = m.map((t => t(e))).filter(Boolean).join(", ").toLocaleLowerCase();
                return "" !== t && (t = "mode: " + t), t
            }

            function v(e) {
                let t = p.map((t => t(e))).filter(Boolean).join(", ").toLocaleLowerCase();
                return "" !== t && (t = "format: " + t), t
            }
            t.TreeView = function({
                timeTravelButtonClassName: e,
                timeTravelPanelSliderClassName: t,
                timeTravelPanelButtonClassName: n,
                viewClassName: r,
                timeTravelPanelClassName: o,
                editor: l
            }) {
                let [s, u] = a.useState([]), [c, f] = a.useState(""), [g, p] = a.useState(!1), h = a.useRef(0), m = a.useRef(null), _ = a.useRef(null), [y, v] = a.useState(!1);
                a.useEffect((() => (f(d(l.getEditorState(), l._config, l._compositionKey, l._editable)), i.mergeRegister(l.registerUpdateListener((({
                    editorState: e
                }) => {
                    let t = d(l.getEditorState(), l._config, l._compositionKey, l._editable);
                    f(t), g || u((t => [...t, [Date.now(), e]]))
                })), l.registerEditableListener((() => {
                    let e = d(l.getEditorState(), l._config, l._compositionKey, l._editable);
                    f(e)
                }))))), [g, l]);
                let E = s.length;
                return a.useEffect((() => {
                    if (y) {
                        let e, t = () => {
                            const n = h.current;
                            n === E - 1 ? v(!1) : e = setTimeout((() => {
                                h.current++;
                                const e = h.current,
                                    n = _.current;
                                null !== n && (n.value = String(e)), l.setEditorState(s[e][1]), t()
                            }), s[n + 1][0] - s[n][0])
                        };
                        return t(), () => {
                            clearTimeout(e)
                        }
                    }
                }), [s, y, l, E]), a.useEffect((() => {
                    let e = m.current;
                    if (null !== e) return e.__lexicalEditor = l, () => {
                        e.__lexicalEditor = null
                    }
                }), [l]), a.createElement("div", {
                    className: r
                }, !g && 2 < E && a.createElement("button", {
                    onClick: () => {
                        let e = l.getRootElement();
                        null !== e && (e.contentEditable = "false", h.current = E - 1, p(!0))
                    },
                    className: e,
                    type: "button"
                }, "Time Travel"), a.createElement("pre", {
                    ref: m
                }, c), g && a.createElement("div", {
                    className: o
                }, a.createElement("button", {
                    className: n,
                    onClick: () => {
                        h.current === E - 1 && (h.current = 1), v(!y)
                    },
                    type: "button"
                }, y ? "Pause" : "Play"), a.createElement("input", {
                    className: t,
                    ref: _,
                    onChange: e => {
                        e = Number(e.target.value);
                        let t = s[e];
                        t && (h.current = e, l.setEditorState(t[1]))
                    },
                    type: "range",
                    min: "1",
                    max: E - 1
                }), a.createElement("button", {
                    className: n,
                    onClick: () => {
                        var e = l.getRootElement();
                        if (null !== e) {
                            e.contentEditable = "true", e = s.length - 1, l.setEditorState(s[e][1]);
                            let t = _.current;
                            null !== t && (t.value = String(e)), p(!1), v(!1)
                        }
                    },
                    type: "button"
                }, "Exit")))
            }
        },
        389408: (e, t, n) => {
            "use strict";
            const r = n(649235);
            e.exports = r
        },
        649235: (e, t, n) => {
            "use strict";
            var r = n(932998);
            let o = new Map;

            function i(e) {
                for (; null != e;) {
                    if (e.nodeType === Node.TEXT_NODE) return e;
                    e = e.firstChild
                }
                return null
            }

            function l(e) {
                let t = e.parentNode;
                if (null == t) throw Error("Should never happen");
                return [t, Array.from(t.childNodes).indexOf(e)]
            }

            function a(e) {
                let t = {};
                e = e.split(";");
                for (let n of e)
                    if ("" !== n) {
                        let [e, r] = n.split(/:([^]+)/);
                        t[e.trim()] = r.trim()
                    } return t
            }

            function s(e) {
                let t = o.get(e);
                return void 0 === t && (t = a(e), o.set(e, t)), t
            }

            function u(e) {
                for (; null !== e && !r.$isRootOrShadowRoot(e);) {
                    let t = e.getLatest(),
                        n = e.getParent();
                    0 === t.__children.length && e.remove(!0), e = n
                }
            }

            function c(e, t, n, o, i = null) {
                if (0 !== t.length) {
                    var l = t[0],
                        a = new Map,
                        s = [];
                    (l = r.$isElementNode(l) ? l : l.getParentOrThrow()).isInline() && (l = l.getParentOrThrow());
                    for (var c = !1; null !== l;) {
                        var d = l.getPreviousSibling();
                        if (null !== d) {
                            l = d, c = !0;
                            break
                        }
                        if (l = l.getParentOrThrow(), r.$isRootOrShadowRoot(l)) break
                    }
                    d = new Set;
                    for (var f = 0; f < n; f++) {
                        var g = t[f];
                        r.$isElementNode(g) && 0 === g.getChildrenSize() && d.add(g.getKey())
                    }
                    var p = new Set;
                    for (f = 0; f < n; f++) {
                        var h = (g = t[f]).getParent();
                        if (null !== h && h.isInline() && (h = h.getParent()), null !== h && r.$isLeafNode(g) && !p.has(g.getKey())) {
                            if (g = h.getKey(), void 0 === a.get(g)) {
                                let e = o();
                                e.setFormat(h.getFormatType()), e.setIndent(h.getIndent()), s.push(e), a.set(g, e), h.getChildren().forEach((t => {
                                    e.append(t), p.add(t.getKey())
                                })), u(h)
                            }
                        } else d.has(g.getKey()) && ((h = o()).setFormat(g.getFormatType()), h.setIndent(g.getIndent()), s.push(h), g.remove(!0))
                    }
                    if (null !== i)
                        for (t = 0; t < s.length; t++) i.append(s[t]);
                    if (r.$isRootOrShadowRoot(l))
                        if (c)
                            if (null !== i) l.insertAfter(i);
                            else
                                for (i = s.length - 1; 0 <= i; i--) l.insertAfter(s[i]);
                    else if (t = l.getFirstChild(), r.$isElementNode(t) && (l = t), null === t)
                        if (i) l.append(i);
                        else
                            for (i = 0; i < s.length; i++) l.append(s[i]);
                    else if (null !== i) t.insertBefore(i);
                    else
                        for (l = 0; l < s.length; l++) t.insertBefore(s[l]);
                    else if (i) l.insertAfter(i);
                    else
                        for (i = s.length - 1; 0 <= i; i--) l.insertAfter(s[i]);
                    s = r.$getPreviousSelection(), r.$isRangeSelection(s) && s.anchor.getNode().isAttached() && s.focus.getNode().isAttached() ? r.$setSelection(s.clone()) : e.dirty = !0
                }
            }

            function d(e, t, n, r) {
                e.modify(t ? "extend" : "move", n, r)
            }

            function f(e) {
                return e = e.anchor.getNode(), "rtl" === (r.$isRootNode(e) ? e : e.getParentOrThrow()).getDirection()
            }

            function g(e, t, n, o, i, l) {
                for (var a = t; null !== e;) {
                    for (t = e.getParent(); null !== t && t.excludeFromCopy("clone");) t = t.getParent();
                    if (null === t) break;
                    if (!r.$isElementNode(e) || !e.excludeFromCopy("clone")) {
                        let s = e.getKey(),
                            u = l.get(s),
                            c = void 0 === u;
                        if (c && (u = p(e), l.set(s, u)), !r.$isTextNode(u) || u.isSegmented() || u.isToken() ? r.$isElementNode(u) && (u.__children = u.__children.slice(o ? a : 0, o ? void 0 : (a || 0) + 1)) : u.__text = u.__text.slice(o ? a : 0, o ? n : a), r.$isRootNode(t)) {
                            c && i.push(s);
                            break
                        }
                    }
                    a = l.get(t.getKey()), a = r.$isElementNode(a) ? a.__children.indexOf(e.getKey()) : e.getIndexWithinParent(), e = t
                }
            }

            function p(e) {
                let t = (e = e.getLatest()).constructor.clone(e);
                return t.__parent = e.__parent, r.$isElementNode(e) && r.$isElementNode(t) ? (t.__children = Array.from(e.__children), t.__format = e.__format, t.__indent = e.__indent, t.__dir = e.__dir, t) : (r.$isTextNode(e) && r.$isTextNode(t) && (t.__format = e.__format, t.__style = e.__style, t.__mode = e.__mode, t.__detail = e.__detail), t)
            }

            function h(e, t) {
                var n = s(e.getStyle());
                n = function(e) {
                    let t = "";
                    for (let n in e) n && (t += `${n}: ${e[n]};`);
                    return t
                }(t = Object.entries(t).reduce(((e, [t, n]) => (null === n ? delete e[t] : e[t] = n, e)), {
                    ...n
                })), e.setStyle(n), o.set(n, t)
            }
            t.$addNodeStyle = function(e) {
                let t = a(e = e.getStyle());
                o.set(e, t)
            }, t.$cloneContents = function(e) {
                var t = {
                    nodeMap: [],
                    range: []
                };
                if (r.$isRangeSelection(e)) {
                    var n = e.anchor,
                        o = e.focus;
                    let [c, d] = e.getCharacterOffsets();
                    if (0 === (t = e.getNodes()).length || 1 === t.length && r.$isElementNode(t[0]) && t[0].excludeFromCopy("clone")) t = {
                        nodeMap: [],
                        range: []
                    };
                    else {
                        e = t.length;
                        var i = t[0],
                            l = i.getParent();
                        if (null !== l && (!l.canBeEmpty() || r.$isRootNode(l))) {
                            var a = l.__children;
                            if (a.length === e) {
                                for (var s = !0, u = 0; u < a.length; u++)
                                    if (a[u] !== t[u].__key) {
                                        s = !1;
                                        break
                                    } s && (e++, t.push(l))
                            }
                        }
                        for (l = t[e - 1], n = n.isBefore(o), o = new Map, a = [], g(i, n ? c : d, (s = r.$isTextNode(i) && 1 === e) ? n ? d : c : void 0, !0, a, o), i = 0; i < e; i++) {
                            let e = (u = t[i]).getKey();
                            if (!(o.has(e) || r.$isElementNode(u) && u.excludeFromCopy("clone"))) {
                                let t = p(u);
                                r.$isRootNode(u.getParent()) && a.push(u.getKey()), "root" !== e && o.set(e, t)
                            }
                        }
                        g(l, s ? void 0 : n ? d : c, void 0, !1, a, o), t = {
                            nodeMap: Array.from(o.entries()),
                            range: a
                        }
                    }
                } else if (r.DEPRECATED_$isGridSelection(e)) t = function(e) {
                    return {
                        nodeMap: e.getNodes().map((e => [e.getKey(), e = p(e)])),
                        range: [e.gridKey]
                    }
                }(e);
                else if (r.$isNodeSelection(e)) throw Error("Minified Lexical error #1; visit https://lexical.dev/docs/error?code=1 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");
                return t
            }, t.$cloneWithProperties = p, t.$getSelectionStyleValueForProperty = function(e, t, n = "") {
                let o = null,
                    i = e.getNodes();
                var l = e.anchor,
                    a = e.focus,
                    u = e.isBackward();
                for (e = u ? a.offset : l.offset, l = u ? a.getNode() : l.getNode(), a = 0; a < i.length; a++) {
                    var c = i[a];
                    if ((0 === a || 0 !== e || !c.is(l)) && r.$isTextNode(c)) {
                        u = t;
                        var d = n;
                        if (u = null !== (c = s(c = c.getStyle())) && c[u] || d, null === o) o = u;
                        else if (o !== u) {
                            o = "";
                            break
                        }
                    }
                }
                return null === o ? n : o
            }, t.$isAtNodeEnd = function(e) {
                return "text" === e.type ? e.offset === e.getNode().getTextContentSize() : e.offset === e.getNode().getChildrenSize()
            }, t.$isParentElementRTL = f, t.$moveCaretSelection = d, t.$moveCharacter = function(e, t, n) {
                let r = f(e);
                d(e, t, n ? !r : r, "character")
            }, t.$patchStyleText = function(e, t) {
                var n = e.getNodes();
                let o = n.length - 1,
                    i = n[0],
                    l = n[o];
                if (!e.isCollapsed()) {
                    var a = e.anchor,
                        s = e.focus,
                        u = i.getTextContent().length,
                        c = s.offset,
                        d = a.offset,
                        f = a.isBefore(s),
                        g = f ? d : c;
                    e = f ? c : d;
                    var p = f ? a.type : s.type,
                        m = f ? s.type : a.type;
                    if (a = f ? s.key : a.key, r.$isTextNode(i) && g === u && (s = i.getNextSibling(), r.$isTextNode(s) && (g = d = 0, i = s)), i.is(l)) r.$isTextNode(i) && ((g = "element" === p ? 0 : d > c ? c : d) !== (e = "element" === m ? u : d > c ? d : c) && (0 === g && e === u ? (h(i, t), i.select(g, e)) : (n = i.splitText(g, e), h(n = 0 === g ? n[0] : n[1], t), n.select(0, e - g))));
                    else
                        for (r.$isTextNode(i) && g < i.getTextContentSize() && (0 !== g && (i = i.splitText(g)[1]), h(i, t)), r.$isTextNode(l) && (g = l.getTextContent().length, l.__key !== a && 0 !== e && (e = g), e !== g && ([l] = l.splitText(e)), 0 !== e && h(l, t)), e = 1; e < o; e++) u = (g = n[e]).getKey(), r.$isTextNode(g) && u !== i.getKey() && u !== l.getKey() && !g.isToken() && h(g, t)
                }
            }, t.$selectAll = function(e) {
                let t = e.anchor;
                e = e.focus;
                var n = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
                let o = n.getFirstDescendant();
                n = n.getLastDescendant();
                let i = "element",
                    l = "element",
                    a = 0;
                r.$isTextNode(o) ? i = "text" : r.$isElementNode(o) || null === o || (o = o.getParentOrThrow()), r.$isTextNode(n) ? (l = "text", a = n.getTextContentSize()) : r.$isElementNode(n) || null === n || (n = n.getParentOrThrow()), o && n && (t.set(o.getKey(), 0, i), e.set(n.getKey(), a, l))
            }, t.$shouldOverrideDefaultCharacterSelection = function(e, t) {
                return e = r.$getDecoratorNode(e.focus, t), r.$isDecoratorNode(e) && !e.isIsolated()
            }, t.$sliceSelectedTextNodeContent = function(e, t) {
                if (t.isSelected() && !t.isSegmented() && !t.isToken() && (r.$isRangeSelection(e) || r.DEPRECATED_$isGridSelection(e))) {
                    var n = e.anchor.getNode(),
                        o = e.focus.getNode(),
                        i = t.is(n),
                        l = t.is(o);
                    if (i || l) {
                        i = e.isBackward();
                        let r, [a, s] = e.getCharacterOffsets();
                        e = n.is(o), l = t.is(i ? o : n), o = t.is(i ? n : o), n = 0, e ? (n = a > s ? s : a, r = a > s ? a : s) : l ? (n = i ? s : a, r = void 0) : o && (n = 0, r = i = i ? a : s), t.__text = t.__text.slice(n, r)
                    }
                }
                return t
            }, t.$wrapNodes = function(e, t, n = null) {
                var o = e.getNodes();
                let i = o.length;
                var l = e.anchor;
                if (0 === i || 1 === i && "element" === l.type && 0 === l.getNode().getChildrenSize()) {
                    o = (e = "text" === l.type ? l.getNode().getParentOrThrow() : l.getNode()).getChildren();
                    let r = t();
                    r.setFormat(e.getFormatType()), r.setIndent(e.getIndent()), o.forEach((e => r.append(e))), n && (r = n.append(r)), e.replace(r)
                } else {
                    l = null;
                    var a = [];
                    for (let s = 0; s < i; s++) {
                        let i = o[s];
                        r.$isRootOrShadowRoot(i) ? (c(e, a, a.length, t, n), a = [], l = i) : null === l || null !== l && r.$hasAncestor(i, l) ? a.push(i) : (c(e, a, a.length, t, n), a = [i])
                    }
                    c(e, a, a.length, t, n)
                }
            }, t.$wrapNodesImpl = c, t.createDOMRange = function(e, t, n, o, a) {
                let s = t.getKey(),
                    u = o.getKey(),
                    c = document.createRange(),
                    d = e.getElementByKey(s);
                if (e = e.getElementByKey(u), r.$isTextNode(t) && (d = i(d)), r.$isTextNode(o) && (e = i(e)), void 0 === t || void 0 === o || null === d || null === e) return null;
                "BR" === d.nodeName && ([d, n] = l(d)), "BR" === e.nodeName && ([e, a] = l(e)), t = d.firstChild, d === e && null != t && "BR" === t.nodeName && 0 === n && 0 === a && (a = 1);
                try {
                    c.setStart(d, n), c.setEnd(e, a)
                } catch (e) {
                    return null
                }
                return !c.collapsed || n === a && s === u || (c.setStart(e, a), c.setEnd(d, n)), c
            }, t.createRectsFromDOMRange = function(e, t) {
                var n = e.getRootElement();
                if (null === n) return [];
                e = n.getBoundingClientRect(), n = getComputedStyle(n), n = parseFloat(n.paddingLeft) + parseFloat(n.paddingRight);
                let r, o = (t = Array.from(t.getClientRects())).length;
                for (let i = 0; i < o; i++) {
                    let l = t[i],
                        a = l.width + n === e.width;
                    r && r.top === l.top && r.left === l.left && r.width === l.width && r.height === l.height || a ? (t.splice(i--, 1), o--) : r = l
                }
                return t
            }, t.getStyleObjectFromCSS = s, t.trimTextContentFromAnchor = function(e, t, n) {
                let o = t.getNode();
                if (r.$isElementNode(o)) {
                    var i = o.getDescendantByIndex(t.offset);
                    null !== i && (o = i)
                }
                for (; 0 < n && null !== o;) {
                    var l = o.getPreviousSibling(),
                        a = 0;
                    if (null === l) {
                        for (var s = (i = o.getParentOrThrow()).getPreviousSibling(); null === s;) {
                            if (null === (i = i.getParent())) {
                                l = null;
                                break
                            }
                            s = i.getPreviousSibling()
                        }
                        null !== i && (a = i.isInline() ? 0 : 2, l = r.$isElementNode(s) ? s.getLastDescendant() : s)
                    }
                    let u = o.getTextContent();
                    "" === u && r.$isElementNode(o) && !o.isInline() && (u = "\n\n"), s = (i = u.length) - n;
                    let c = u.slice(0, s);
                    if (!r.$isTextNode(o) || n >= i) s = o.getParent(), o.remove(), null != s && 0 === s.getChildrenSize() && s.remove(), n -= i + a, o = l;
                    else {
                        let d = o.getKey();
                        null !== (l = e.getEditorState().read((() => {
                            const e = r.$getNodeByKey(d);
                            return r.$isTextNode(e) && e.isSimpleText() ? e.getTextContent() : null
                        }))) && l !== u ? (n = r.$getPreviousSelection(), i = o, o.isSimpleText() ? o.setTextContent(l) : (i = r.$createTextNode(l), o.replace(i)), r.$isRangeSelection(n) && n.isCollapsed() && (n = n.anchor.offset, i.select(n, n))) : o.isSimpleText() ? (l = t.key === d, (a = t.offset) < n && (a = i), n = l ? a - n : 0, i = l ? a : s, l && 0 === n ? ([n] = o.splitText(n, i), n.remove()) : ([, n] = o.splitText(n, i), n.remove())) : (n = r.$createTextNode(c), o.replace(n)), n = 0
                    }
                }
            }
        },
        302977: (e, t, n) => {
            "use strict";
            const r = n(328263);
            e.exports = r
        },
        328263: (e, t, n) => {
            "use strict";
            var r = n(932998);

            function o(e, t = !0) {
                return !e && (e = i(), t && (e = e.trim()), "" === e)
            }

            function i() {
                return r.$getRoot().getTextContent()
            }

            function l(e, t) {
                if (!t || !o(e, !1)) return !1;
                if (1 < (t = (e = r.$getRoot().getChildren()).length)) return !1;
                for (let o = 0; o < t; o++) {
                    var n = e[o];
                    if (r.$isElementNode(n)) {
                        if ("paragraph" !== n.__type || 0 !== n.__indent) return !1;
                        let e = (n = n.getChildren()).length;
                        for (let t = 0; t < e; t++)
                            if (!r.$isTextNode(n[o])) return !1
                    }
                }
                return !0
            }
            t.$canShowPlaceholder = l, t.$canShowPlaceholderCurry = function(e, t) {
                return () => l(e, t)
            }, t.$findTextIntersectionFromCharacters = function(e, t) {
                var n = e.getFirstChild();
                e = 0;
                e: for (; null !== n;) {
                    if (r.$isElementNode(n)) {
                        var o = n.getFirstChild();
                        if (null !== o) {
                            n = o;
                            continue
                        }
                    } else if (r.$isTextNode(n)) {
                        if (e + (o = n.getTextContentSize()) > t) return {
                            node: n,
                            offset: t - e
                        };
                        e += o
                    }
                    if (null === (o = n.getNextSibling())) {
                        for (n = n.getParent(); null !== n;) {
                            if (null !== (o = n.getNextSibling())) {
                                n = o;
                                continue e
                            }
                            n = n.getParent()
                        }
                        break
                    }
                    n = o
                }
                return null
            }, t.$isRootTextContentEmpty = o, t.$isRootTextContentEmptyCurry = function(e, t) {
                return () => o(e, t)
            }, t.$rootTextContent = i, t.registerLexicalTextEntity = function(e, t, n, o) {
                let i = e => {
                    const t = r.$createTextNode(e.getTextContent());
                    t.setFormat(e.getFormat()), e.replace(t)
                };
                return [e.registerNodeTransform(r.TextNode, (e => {
                    if (e.isSimpleText()) {
                        var l = e.getPreviousSibling(),
                            a = e.getTextContent(),
                            s = e;
                        if (r.$isTextNode(l)) {
                            var u = l.getTextContent(),
                                c = t(u + a);
                            if (l instanceof n) {
                                if (null === c || 0 !== l.getLatest().__mode) return void i(l);
                                if (0 < (c = c.end - u.length)) return s = u + (s = a.slice(0, c)), l.select(), l.setTextContent(s), void(c === a.length ? e.remove() : (l = a.slice(c), e.setTextContent(l)))
                            } else if (null === c || c.start < u.length) return
                        }
                        for (;;) {
                            if (a = c = null === (e = t(a)) ? "" : a.slice(e.end), "" === c) {
                                if (u = s.getNextSibling(), r.$isTextNode(u)) {
                                    if (c = s.getTextContent() + u.getTextContent(), null === (c = t(c))) {
                                        u instanceof n ? i(u) : u.markDirty();
                                        break
                                    }
                                    if (0 !== c.start) break
                                }
                            } else if (null !== (u = t(c)) && 0 === u.start) break;
                            if (null === e) break;
                            if (0 === e.start && r.$isTextNode(l) && l.isTextEntity()) continue;
                            let d;
                            if (0 === e.start ? [d, s] = s.splitText(e.end) : [, d, s] = s.splitText(e.start, e.end), e = o(d), d.replace(e), null == s) break
                        }
                    }
                })), e = e.registerNodeTransform(n, (e => {
                    var o = e.getTextContent();
                    const l = t(o);
                    null === l || 0 !== l.start ? i(e) : o.length > l.end ? e.splitText(l.end) : (o = e.getPreviousSibling(), r.$isTextNode(o) && o.isTextEntity() && (i(o), i(e)), o = e.getNextSibling(), r.$isTextNode(o) && o.isTextEntity() && (i(o), e instanceof n && i(e)))
                }))]
            }
        },
        376969: (e, t, n) => {
            "use strict";
            const r = n(487502);
            e.exports = r
        },
        487502: (e, t, n) => {
            "use strict";
            var r = n(932998);

            function o(e) {
                throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?code=${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)
            }

            function i(e, t) {
                for (; e !== r.$getRoot() && null != e;) {
                    if (t(e)) return e;
                    e = e.getParent()
                }
                return null
            }

            function l(e, t, n, i, a) {
                var u = n._nodes.get(e.__type);
                for (var c in void 0 === u && o(5), e) {
                    var d = e[c];
                    if (null != d && "object" == typeof d && null != (d = d.editorState)) {
                        var f = r.createEditor({
                            namespace: d.namespace
                        });
                        f._nodes = n._nodes, f._parentEditor = n._parentEditor, f._pendingEditorState = s(f, d), e[c] = f
                    }
                }
                if (u = u.klass, c = e.__key, e.__key = void 0, u = u.clone(e), e.__key = c, c = u.__key, a._nodeMap.set(c, u), u.__parent = i, r.$isElementNode(u)) {
                    for (i = e.__children, d = 0; d < i.length; d++) void 0 !== (f = t.get(i[d])) && (f = l(f, t, n, c, a).__key, u.__children.push(f));
                    u.__indent = e.__indent, u.__format = e.__format, u.__dir = e.__dir
                } else r.$isTextNode(u) && (u.__format = e.__format, u.__style = e.__style, u.__mode = e.__mode, u.__detail = e.__detail);
                return u
            }

            function a(e, t) {
                let n = new(0, t._editorState.constructor)(new Map),
                    r = new Map(e._nodeMap),
                    o = r.get("root");
                e = t._updating;
                try {
                    t._updating = !1, t.update((() => {
                        let e = t._dirtyElements,
                            i = t._dirtyLeaves,
                            a = t._dirtyType;
                        t._dirtyElements = new Map, t._dirtyLeaves = new Set, t._dirtyType = 0;
                        try {
                            l(o, r, t, null, n)
                        } finally {
                            t._dirtyElements = e, t._dirtyLeaves = i, t._dirtyType = a
                        }
                    }))
                } finally {
                    t._updating = e
                }
                return n._readOnly = !0, n
            }

            function s(e, t) {
                return a(t = "string" == typeof t ? JSON.parse(t) : t, e)
            }
            t.$dfs = function(e, t) {
                let n = [];
                e = (e || r.$getRoot()).getLatest(), t = t || (r.$isElementNode(e) ? e.getLastDescendant() : e);
                for (var o = e, i = 0; null !== (o = o.getParent());) i++;
                for (o = i; null !== e && !e.is(t);)
                    if (n.push({
                            depth: o,
                            node: e
                        }), r.$isElementNode(e) && 0 < e.getChildrenSize()) e = e.getFirstChild(), o++;
                    else
                        for (i = null; null === i && null !== e;) null === (i = e.getNextSibling()) ? (e = e.getParent(), o--) : e = i;
                return null !== e && e.is(t) && n.push({
                    depth: o,
                    node: e
                }), n
            }, t.$findMatchingParent = i, t.$getNearestBlockElementAncestorOrThrow = function(e) {
                return e = i(e, (e => r.$isElementNode(e) && !e.isInline())), r.$isElementNode(e) || o(4), e
            }, t.$getNearestNodeOfType = function(e, t) {
                for (; null != e;) {
                    if (e instanceof t) return e;
                    e = e.getParent()
                }
                return null
            }, t.$insertNodeToNearestRoot = function(e) {
                var t = r.$getSelection();
                return r.$isRangeSelection(t) ? t.focus.getNode().getTopLevelElementOrThrow().insertAfter(e) : r.$isNodeSelection(t) || r.DEPRECATED_$isGridSelection(t) ? (t = t.getNodes())[t.length - 1].getTopLevelElementOrThrow().insertAfter(e) : r.$getRoot().append(e), t = r.$createParagraphNode(), e.insertAfter(t), t.select(), e.getLatest()
            }, t.$restoreEditorState = function(e, t) {
                let n = new Map(t._nodeMap),
                    o = e._pendingEditorState;
                o && (o._nodeMap = n), e._dirtyType = 2, e = t._selection, r.$setSelection(null === e ? null : e.clone())
            }, t.$wrapNodeInElement = function(e, t) {
                return t = t(), e.replace(t), t.append(e), t
            }, t.addClassNamesToElement = function(e, ...t) {
                t.forEach((t => {
                    "string" == typeof t && (t = t.split(" ").filter((e => "" !== e)), e.classList.add(...t))
                }))
            }, t.mergeRegister = function(...e) {
                return () => {
                    e.forEach((e => e()))
                }
            }, t.registerNestedElementResolver = function(e, t, n, r) {
                return e.registerNodeTransform(t, (e => {
                    e: {
                        for (var o = e.getChildren(), i = 0; i < o.length; i++)
                            if (o[i] instanceof t) {
                                o = null;
                                break e
                            } for (o = e; null !== o;)
                            if (i = o, (o = o.getParent()) instanceof t) {
                                o = {
                                    child: i,
                                    parent: o
                                };
                                break e
                            } o = null
                    }
                    if (null !== o) {
                        const {
                            child: t,
                            parent: l
                        } = o;
                        if (t.is(e)) {
                            if (r(l, e), o = (e = t.getNextSiblings()).length, l.insertAfter(t), 0 !== o) {
                                i = n(l), t.insertAfter(i);
                                for (let t = 0; t < o; t++) i.append(e[t])
                            }
                            l.canBeEmpty() || 0 !== l.getChildrenSize() || l.remove()
                        }
                    }
                }))
            }, t.removeClassNamesFromElement = function(e, ...t) {
                t.forEach((t => {
                    "string" == typeof t && e.classList.remove(...t.split(" "))
                }))
            }, t.unstable_convertLegacyJSONEditorState = s
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
                var i = document.head || document.getElementsByTagName("head")[0],
                    l = document.createElement("script");
                "function" == typeof r && (o = r, r = {}), r = r || {}, o = o || function() {}, l.type = r.type || "text/javascript", l.charset = r.charset || "utf8", l.async = !("async" in r) || !!r.async, l.src = e, r.attrs && function(e, t) {
                    for (var n in t) e.setAttribute(n, t[n])
                }(l, r.attrs), r.text && (l.text = "" + r.text), ("onload" in l ? t : n)(l, o), l.onload || t(l, o), i.appendChild(l)
            }
        },
        389179: (e, t, n) => {
            var r = n(555639),
                o = n(640554),
                i = n(14841),
                l = n(479833),
                a = r.isFinite,
                s = Math.min;
            e.exports = function(e) {
                var t = Math[e];
                return function(e, n) {
                    if (e = i(e), (n = null == n ? 0 : s(o(n), 292)) && a(e)) {
                        var r = (l(e) + "e").split("e"),
                            u = t(r[0] + "e" + (+r[1] + n));
                        return +((r = (l(u) + "e").split("e"))[0] + "e" + (+r[1] - n))
                    }
                    return t(e)
                }
            }
        },
        29521: (e, t, n) => {
            var r = n(920731),
                o = n(121078),
                i = n(105976),
                l = n(229246),
                a = n(610928),
                s = i((function(e, t) {
                    var n = a(t);
                    return l(n) && (n = void 0), l(e) ? r(e, o(t, 1, l, !0), void 0, n) : []
                }));
            e.exports = s
        },
        705558: (e, t, n) => {
            var r = n(389179)("floor");
            e.exports = r
        },
        133856: (e, t, n) => {
            var r = n(829932),
                o = n(247556),
                i = n(105976),
                l = n(24387),
                a = n(610928),
                s = i((function(e) {
                    var t = a(e),
                        n = r(e, l);
                    return (t = "function" == typeof t ? t : void 0) && n.pop(), n.length && n[0] === e[0] ? o(n, void 0, t) : []
                }));
            e.exports = s
        },
        59854: (e, t, n) => {
            var r = n(389179)("round");
            e.exports = r
        },
        892703: (e, t, n) => {
            "use strict";
            var r = n(150414);

            function o() {}

            function i() {}
            i.resetWarningCache = o, e.exports = function() {
                function e(e, t, n, o, i, l) {
                    if (l !== r) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        },
        45697: (e, t, n) => {
            e.exports = n(892703)()
        },
        150414: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        803689: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                ucs2decode: () => g,
                ucs2encode: () => p,
                decode: () => _,
                encode: () => y,
                toASCII: () => E,
                toUnicode: () => v,
                default: () => C
            });
            const r = 2147483647,
                o = 36,
                i = /^xn--/,
                l = /[^\0-\x7E]/,
                a = /[\x2E\u3002\uFF0E\uFF61]/g,
                s = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                u = Math.floor,
                c = String.fromCharCode;

            function d(e) {
                throw new RangeError(s[e])
            }

            function f(e, t) {
                const n = e.split("@");
                let r = "";
                n.length > 1 && (r = n[0] + "@", e = n[1]);
                const o = function(e, t) {
                    const n = [];
                    let r = e.length;
                    for (; r--;) n[r] = t(e[r]);
                    return n
                }((e = e.replace(a, ".")).split("."), t).join(".");
                return r + o
            }

            function g(e) {
                const t = [];
                let n = 0;
                const r = e.length;
                for (; n < r;) {
                    const o = e.charCodeAt(n++);
                    if (o >= 55296 && o <= 56319 && n < r) {
                        const r = e.charCodeAt(n++);
                        56320 == (64512 & r) ? t.push(((1023 & o) << 10) + (1023 & r) + 65536) : (t.push(o), n--)
                    } else t.push(o)
                }
                return t
            }
            const p = e => String.fromCodePoint(...e),
                h = function(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                },
                m = function(e, t, n) {
                    let r = 0;
                    for (e = n ? u(e / 700) : e >> 1, e += u(e / t); e > 455; r += o) e = u(e / 35);
                    return u(r + 36 * e / (e + 38))
                },
                _ = function(e) {
                    const t = [],
                        n = e.length;
                    let i = 0,
                        l = 128,
                        a = 72,
                        s = e.lastIndexOf("-");
                    s < 0 && (s = 0);
                    for (let n = 0; n < s; ++n) e.charCodeAt(n) >= 128 && d("not-basic"), t.push(e.charCodeAt(n));
                    for (let f = s > 0 ? s + 1 : 0; f < n;) {
                        let s = i;
                        for (let t = 1, l = o;; l += o) {
                            f >= n && d("invalid-input");
                            const s = (c = e.charCodeAt(f++)) - 48 < 10 ? c - 22 : c - 65 < 26 ? c - 65 : c - 97 < 26 ? c - 97 : o;
                            (s >= o || s > u((r - i) / t)) && d("overflow"), i += s * t;
                            const g = l <= a ? 1 : l >= a + 26 ? 26 : l - a;
                            if (s < g) break;
                            const p = o - g;
                            t > u(r / p) && d("overflow"), t *= p
                        }
                        const g = t.length + 1;
                        a = m(i - s, g, 0 == s), u(i / g) > r - l && d("overflow"), l += u(i / g), i %= g, t.splice(i++, 0, l)
                    }
                    var c;
                    return String.fromCodePoint(...t)
                },
                y = function(e) {
                    const t = [];
                    let n = (e = g(e)).length,
                        i = 128,
                        l = 0,
                        a = 72;
                    for (const n of e) n < 128 && t.push(c(n));
                    let s = t.length,
                        f = s;
                    for (s && t.push("-"); f < n;) {
                        let n = r;
                        for (const t of e) t >= i && t < n && (n = t);
                        const g = f + 1;
                        n - i > u((r - l) / g) && d("overflow"), l += (n - i) * g, i = n;
                        for (const n of e)
                            if (n < i && ++l > r && d("overflow"), n == i) {
                                let e = l;
                                for (let n = o;; n += o) {
                                    const r = n <= a ? 1 : n >= a + 26 ? 26 : n - a;
                                    if (e < r) break;
                                    const i = e - r,
                                        l = o - r;
                                    t.push(c(h(r + i % l, 0))), e = u(i / l)
                                }
                                t.push(c(h(e, 0))), a = m(l, g, f == s), l = 0, ++f
                            }++ l, ++i
                    }
                    return t.join("")
                },
                v = function(e) {
                    return f(e, (function(e) {
                        return i.test(e) ? _(e.slice(4).toLowerCase()) : e
                    }))
                },
                E = function(e) {
                    return f(e, (function(e) {
                        return l.test(e) ? "xn--" + y(e) : e
                    }))
                },
                C = {
                    version: "2.1.0",
                    ucs2: {
                        decode: g,
                        encode: p
                    },
                    decode: _,
                    encode: y,
                    toASCII: E,
                    toUnicode: v
                }
        },
        268356: (e, t, n) => {
            "use strict";
            var r = n(263026).default,
                o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
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
            var s = n(667294),
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

            function g(e) {
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

            function p(e, t) {
                return s.createElement((n = e) && n.__esModule ? n.default : n, t);
                var n
            }

            function h(e, t) {
                var r, f;
                if (!t.loading) throw new Error("react-loadable requires a `loading` component");
                var g = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        render: p,
                        webpack: null,
                        modules: null
                    }, t),
                    h = null;

                function m() {
                    return h || (h = e(g.loader)), h.promise
                }
                return c.push(m), "function" == typeof g.webpack && d.push((function() {
                    if (e = g.webpack, "object" === o(n.m) && e().every((function(e) {
                            return void 0 !== e && void 0 !== n.m[e]
                        }))) return m();
                    var e
                })), f = r = function(t) {
                    function n(r) {
                        i(this, n);
                        var o = l(this, t.call(this, r));
                        return o.retry = function() {
                            o.setState({
                                error: null,
                                loading: !0,
                                timedOut: !1
                            }), h = e(g.loader), o._loadModule()
                        }, m(), o.state = {
                            error: h.error,
                            pastDelay: !1,
                            timedOut: !1,
                            loading: h.loading,
                            loaded: h.loaded
                        }, o
                    }
                    return a(n, t), n.preload = function() {
                        return m()
                    }, n.prototype.componentWillMount = function() {
                        this._mounted = !0, this._loadModule()
                    }, n.prototype._loadModule = function() {
                        var e = this;
                        if (this.context.loadable && Array.isArray(g.modules) && g.modules.forEach((function(t) {
                                e.context.loadable.report(t)
                            })), h.loading) {
                            "number" == typeof g.delay && (0 === g.delay ? this.setState({
                                pastDelay: !0
                            }) : this._delay = setTimeout((function() {
                                e.setState({
                                    pastDelay: !0
                                })
                            }), g.delay)), "number" == typeof g.timeout && (this._timeout = setTimeout((function() {
                                e.setState({
                                    timedOut: !0
                                })
                            }), g.timeout));
                            var t = function() {
                                e._mounted && (e.setState({
                                    error: h.error,
                                    loaded: h.loaded,
                                    loading: h.loading
                                }), e._clearTimeouts())
                            };
                            h.promise.then((function() {
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
                        return this.state.loading || this.state.error ? s.createElement(g.loading, {
                            isLoading: this.state.loading,
                            pastDelay: this.state.pastDelay,
                            timedOut: this.state.timedOut,
                            error: this.state.error,
                            retry: this.retry
                        }) : this.state.loaded ? g.render(this.state.loaded, this.props) : null
                    }, n
                }(s.Component), r.contextTypes = {
                    loadable: u.shape({
                        report: u.func.isRequired
                    })
                }, f
            }

            function m(e) {
                return h(f, e)
            }
            m.Map = function(e) {
                if ("function" != typeof e.render) throw new Error("LoadableMap requires a `render(loaded, props)` function");
                return h(g, e)
            };
            var _ = function(e) {
                function t() {
                    return i(this, t), l(this, e.apply(this, arguments))
                }
                return a(t, e), t.prototype.getChildContext = function() {
                    return {
                        loadable: {
                            report: this.props.report
                        }
                    }
                }, t.prototype.render = function() {
                    return s.Children.only(this.props.children)
                }, t
            }(s.Component);

            function y(e) {
                for (var t = []; e.length;) {
                    var n = e.pop();
                    t.push(n())
                }
                return r.all(t).then((function() {
                    if (e.length) return y(e)
                }))
            }
            _.propTypes = {
                report: u.func.isRequired
            }, _.childContextTypes = {
                loadable: u.shape({
                    report: u.func.isRequired
                }).isRequired
            }, m.Capture = _, m.preloadAll = function() {
                return new r((function(e, t) {
                    y(c).then(e, t)
                }))
            }, m.preloadReady = function() {
                return new r((function(e, t) {
                    y(d).then(e, e)
                }))
            }, e.exports = m
        },
        733988: e => {
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
            var r, o = n(322275),
                i = (r = o) && r.__esModule ? r : {
                    default: r
                };
            t.default = {
                pauseVideo: {
                    acceptableStates: [i.default.ENDED, i.default.PAUSED],
                    stateChangeRequired: !1
                },
                playVideo: {
                    acceptableStates: [i.default.ENDED, i.default.PLAYING],
                    stateChangeRequired: !1
                },
                seekTo: {
                    acceptableStates: [i.default.ENDED, i.default.PLAYING, i.default.PAUSED],
                    stateChangeRequired: !0,
                    timeout: 3e3
                }
            }, e.exports = t.default
        },
        989125: (e, t, n) => {
            "use strict";
            var r = n(263026).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = s(n(409215)),
                i = s(n(28255)),
                l = s(n(165279)),
                a = s(n(66006));

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
                            i = void 0;
                        try {
                            for (var a, s = l.default[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                                n(a.value)
                            }
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return t
                    },
                    promisifyPlayer: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = {},
                            o = function(o) {
                                t && a.default[o] ? n[o] = function() {
                                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                                    return e.then((function(e) {
                                        var t = a.default[o],
                                            i = e.getPlayerState(),
                                            l = e[o].apply(e, n);
                                        return t.stateChangeRequired || Array.isArray(t.acceptableStates) && -1 === t.acceptableStates.indexOf(i) ? new r((function(n) {
                                            e.addEventListener("onStateChange", (function r() {
                                                var o = e.getPlayerState(),
                                                    i = void 0;
                                                "number" == typeof t.timeout && (i = setTimeout((function() {
                                                    e.removeEventListener("onStateChange", r), n()
                                                }), t.timeout)), Array.isArray(t.acceptableStates) && -1 !== t.acceptableStates.indexOf(o) && (e.removeEventListener("onStateChange", r), clearTimeout(i), n())
                                            }))
                                        })).then((function() {
                                            return l
                                        })) : l
                                    }))
                                } : n[o] = function() {
                                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    return e.then((function(e) {
                                        return e[o].apply(e, n)
                                    }))
                                }
                            },
                            l = !0,
                            s = !1,
                            u = void 0;
                        try {
                            for (var c, d = i.default[Symbol.iterator](); !(l = (c = d.next()).done); l = !0) {
                                var f = c.value;
                                o(f)
                            }
                        } catch (e) {
                            s = !0, u = e
                        } finally {
                            try {
                                !l && d.return && d.return()
                            } finally {
                                if (s) throw u
                            }
                        }
                        return n
                    }
                };
            t.default = c, e.exports = t.default
        },
        322275: (e, t) => {
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
        165279: (e, t) => {
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
        311062: (e, t, n) => {
            "use strict";
            var r = n(263026).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                i = s(n(733988)),
                l = s(n(855900)),
                a = s(n(989125));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = void 0;
            t.default = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = (0, i.default)();
                if (u || (u = (0, l.default)(s)), t.events) throw new Error("Event handlers cannot be overwritten.");
                if ("string" == typeof e && !document.getElementById(e)) throw new Error('Element "' + e + '" does not exist.');
                t.events = a.default.proxyEvents(s);
                var c = new r((function(n) {
                        "object" === (void 0 === e ? "undefined" : o(e)) && e.playVideo instanceof Function ? n(e) : u.then((function(r) {
                            var o = new r.Player(e, t);
                            return s.on("ready", (function() {
                                n(o)
                            })), null
                        }))
                    })),
                    d = a.default.promisifyPlayer(c, n);
                return d.on = s.on, d.off = s.off, d
            }, e.exports = t.default
        },
        855900: (e, t, n) => {
            "use strict";
            var r = n(263026).default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o, i = n(49090),
                l = (o = i) && o.__esModule ? o : {
                    default: o
                };
            t.default = function(e) {
                return new r((function(t) {
                    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) t(window.YT);
                    else {
                        var n = "http:" === window.location.protocol ? "http:" : "https:";
                        (0, l.default)(n + "//www.youtube.com/iframe_api", (function(t) {
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
        409215: (e, t, n) => {
            function r() {
                var e;
                try {
                    e = t.storage.debug
                } catch (e) {}
                return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
            }(t = e.exports = n(655046)).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }, t.formatArgs = function(e) {
                var n = this.useColors;
                if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
                var r = "color: " + this.color;
                e.splice(1, 0, r, "color: inherit");
                var o = 0,
                    i = 0;
                e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                    "%%" !== e && (o++, "%c" === e && (i = o))
                })), e.splice(i, 0, r)
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
        655046: (e, t, n) => {
            var r;

            function o(e) {
                function n() {
                    if (n.enabled) {
                        var e = n,
                            o = +new Date,
                            i = o - (r || o);
                        e.diff = i, e.prev = r, e.curr = o, r = o;
                        for (var l = new Array(arguments.length), a = 0; a < l.length; a++) l[a] = arguments[a];
                        l[0] = t.coerce(l[0]), "string" != typeof l[0] && l.unshift("%O");
                        var s = 0;
                        l[0] = l[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
                            if ("%%" === n) return n;
                            s++;
                            var o = t.formatters[r];
                            if ("function" == typeof o) {
                                var i = l[s];
                                n = o.call(e, i), l.splice(s, 1), s--
                            }
                            return n
                        })), t.formatArgs.call(e, l);
                        var u = n.log || t.log || console.log.bind(console);
                        u.apply(e, l)
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
            }, t.humanize = n(814680), t.names = [], t.skips = [], t.formatters = {}
        },
        814680: e => {
            var t = 1e3,
                n = 60 * t,
                r = 60 * n,
                o = 24 * r,
                i = 365.25 * o;

            function l(e, t, n) {
                if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
            }
            e.exports = function(e, a) {
                a = a || {};
                var s, u = typeof e;
                if ("string" === u && e.length > 0) return function(e) {
                    if ((e = String(e)).length > 100) return;
                    var l = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (!l) return;
                    var a = parseFloat(l[1]);
                    switch ((l[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return a * i;
                        case "days":
                        case "day":
                        case "d":
                            return a * o;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return a * r;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return a * n;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return a * t;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return a;
                        default:
                            return
                    }
                }(e);
                if ("number" === u && !1 === isNaN(e)) return a.long ? l(s = e, o, "day") || l(s, r, "hour") || l(s, n, "minute") || l(s, t, "second") || s + " ms" : function(e) {
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