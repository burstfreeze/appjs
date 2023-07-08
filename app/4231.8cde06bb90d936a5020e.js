/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [4231], {
        865267: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                HexBlock: () => o,
                ValueBlock: () => u,
                BaseBlock: () => h,
                Primitive: () => f,
                Constructed: () => d,
                EndOfContent: () => y,
                Boolean: () => v,
                Sequence: () => w,
                Set: () => S,
                Null: () => k,
                OctetString: () => C,
                BitString: () => P,
                Integer: () => V,
                Enumerated: () => N,
                ObjectIdentifier: () => O,
                Utf8String: () => j,
                RelativeObjectIdentifier: () => T,
                BmpString: () => L,
                UniversalString: () => U,
                NumericString: () => _,
                PrintableString: () => M,
                TeletexString: () => F,
                VideotexString: () => W,
                IA5String: () => G,
                GraphicString: () => Q,
                VisibleString: () => z,
                GeneralString: () => Z,
                CharacterString: () => X,
                UTCTime: () => Y,
                GeneralizedTime: () => ee,
                DATE: () => te,
                TimeOfDay: () => re,
                DateTime: () => se,
                Duration: () => ae,
                TIME: () => ne,
                Choice: () => ie,
                Any: () => oe,
                Repeated: () => le,
                RawData: () => ce,
                fromBER: () => he,
                compareSchema: () => me,
                verifySchema: () => fe,
                fromJSON: () => ge
            });
            var s = r(929595);
            const a = [new Uint8Array([1])],
                n = "0123456789";
            class i {
                constructor(e = {}) {
                    this.blockLength = (0, s.getParametersValue)(e, "blockLength", 0), this.error = (0, s.getParametersValue)(e, "error", ""), this.warnings = (0, s.getParametersValue)(e, "warnings", []), this.valueBeforeDecode = "valueBeforeDecode" in e ? e.valueBeforeDecode.slice(0) : new ArrayBuffer(0)
                }
                static blockName() {
                    return "baseBlock"
                }
                toJSON() {
                    return {
                        blockName: this.constructor.blockName(),
                        blockLength: this.blockLength,
                        error: this.error,
                        warnings: this.warnings,
                        valueBeforeDecode: (0, s.bufferToHexCodes)(this.valueBeforeDecode, 0, this.valueBeforeDecode.byteLength)
                    }
                }
            }
            const o = e => class extends e {
                constructor(e = {}) {
                    super(e), this.isHexOnly = (0, s.getParametersValue)(e, "isHexOnly", !1), this.valueHex = "valueHex" in e ? e.valueHex.slice(0) : new ArrayBuffer(0)
                }
                static blockName() {
                    return "hexBlock"
                }
                fromBER(e, t, r) {
                    if (!1 === (0, s.checkBufferParams)(this, e, t, r)) return -1;
                    return 0 === new Uint8Array(e, t, r).length ? (this.warnings.push("Zero buffer length"), t) : (this.valueHex = e.slice(t, t + r), this.blockLength = r, t + r)
                }
                toBER(e = !1) {
                    return !0 !== this.isHexOnly ? (this.error = 'Flag "isHexOnly" is not set, abort', new ArrayBuffer(0)) : !0 === e ? new ArrayBuffer(this.valueHex.byteLength) : this.valueHex.slice(0)
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.blockName = this.constructor.blockName(), e.isHexOnly = this.isHexOnly, e.valueHex = (0, s.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), e
                }
            };
            class l extends(o(i)) {
                constructor(e = {}) {
                    super(), "idBlock" in e ? (this.isHexOnly = (0, s.getParametersValue)(e.idBlock, "isHexOnly", !1), this.valueHex = (0, s.getParametersValue)(e.idBlock, "valueHex", new ArrayBuffer(0)), this.tagClass = (0, s.getParametersValue)(e.idBlock, "tagClass", -1), this.tagNumber = (0, s.getParametersValue)(e.idBlock, "tagNumber", -1), this.isConstructed = (0, s.getParametersValue)(e.idBlock, "isConstructed", !1)) : (this.tagClass = -1, this.tagNumber = -1, this.isConstructed = !1)
                }
                static blockName() {
                    return "identificationBlock"
                }
                toBER(e = !1) {
                    let t, r, a = 0;
                    switch (this.tagClass) {
                        case 1:
                            a |= 0;
                            break;
                        case 2:
                            a |= 64;
                            break;
                        case 3:
                            a |= 128;
                            break;
                        case 4:
                            a |= 192;
                            break;
                        default:
                            return this.error = "Unknown tag class", new ArrayBuffer(0)
                    }
                    if (this.isConstructed && (a |= 32), this.tagNumber < 31 && !this.isHexOnly) {
                        if (t = new ArrayBuffer(1), r = new Uint8Array(t), !e) {
                            let e = this.tagNumber;
                            e &= 31, a |= e, r[0] = a
                        }
                        return t
                    }
                    if (!1 === this.isHexOnly) {
                        const n = (0, s.utilToBase)(this.tagNumber, 7),
                            i = new Uint8Array(n),
                            o = n.byteLength;
                        if (t = new ArrayBuffer(o + 1), r = new Uint8Array(t), r[0] = 31 | a, !e) {
                            for (let e = 0; e < o - 1; e++) r[e + 1] = 128 | i[e];
                            r[o] = i[o - 1]
                        }
                        return t
                    }
                    if (t = new ArrayBuffer(this.valueHex.byteLength + 1), r = new Uint8Array(t), r[0] = 31 | a, !1 === e) {
                        const e = new Uint8Array(this.valueHex);
                        for (let t = 0; t < e.length - 1; t++) r[t + 1] = 128 | e[t];
                        r[this.valueHex.byteLength] = e[e.length - 1]
                    }
                    return t
                }
                fromBER(e, t, r) {
                    if (!1 === (0, s.checkBufferParams)(this, e, t, r)) return -1;
                    const a = new Uint8Array(e, t, r);
                    if (0 === a.length) return this.error = "Zero buffer length", -1;
                    switch (192 & a[0]) {
                        case 0:
                            this.tagClass = 1;
                            break;
                        case 64:
                            this.tagClass = 2;
                            break;
                        case 128:
                            this.tagClass = 3;
                            break;
                        case 192:
                            this.tagClass = 4;
                            break;
                        default:
                            return this.error = "Unknown tag class", -1
                    }
                    this.isConstructed = 32 == (32 & a[0]), this.isHexOnly = !1;
                    const n = 31 & a[0];
                    if (31 !== n) this.tagNumber = n, this.blockLength = 1;
                    else {
                        let e = 1;
                        this.valueHex = new ArrayBuffer(255);
                        let t = 255,
                            r = new Uint8Array(this.valueHex);
                        for (; 128 & a[e];) {
                            if (r[e - 1] = 127 & a[e], e++, e >= a.length) return this.error = "End of input reached before message was fully decoded", -1;
                            if (e === t) {
                                t += 255;
                                const e = new ArrayBuffer(t),
                                    s = new Uint8Array(e);
                                for (let e = 0; e < r.length; e++) s[e] = r[e];
                                this.valueHex = new ArrayBuffer(t), r = new Uint8Array(this.valueHex)
                            }
                        }
                        this.blockLength = e + 1, r[e - 1] = 127 & a[e];
                        const n = new ArrayBuffer(e),
                            i = new Uint8Array(n);
                        for (let t = 0; t < e; t++) i[t] = r[t];
                        this.valueHex = new ArrayBuffer(e), r = new Uint8Array(this.valueHex), r.set(i), this.blockLength <= 9 ? this.tagNumber = (0, s.utilFromBase)(r, 7) : (this.isHexOnly = !0, this.warnings.push("Tag too long, represented as hex-coded"))
                    }
                    if (1 === this.tagClass && this.isConstructed) switch (this.tagNumber) {
                        case 1:
                        case 2:
                        case 5:
                        case 6:
                        case 9:
                        case 13:
                        case 14:
                        case 23:
                        case 24:
                        case 31:
                        case 32:
                        case 33:
                        case 34:
                            return this.error = "Constructed encoding used for primitive type", -1
                    }
                    return t + this.blockLength
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.blockName = this.constructor.blockName(), e.tagClass = this.tagClass, e.tagNumber = this.tagNumber, e.isConstructed = this.isConstructed, e
                }
            }
            class c extends i {
                constructor(e = {}) {
                    super(), "lenBlock" in e ? (this.isIndefiniteForm = (0, s.getParametersValue)(e.lenBlock, "isIndefiniteForm", !1), this.longFormUsed = (0, s.getParametersValue)(e.lenBlock, "longFormUsed", !1), this.length = (0, s.getParametersValue)(e.lenBlock, "length", 0)) : (this.isIndefiniteForm = !1, this.longFormUsed = !1, this.length = 0)
                }
                static blockName() {
                    return "lengthBlock"
                }
                fromBER(e, t, r) {
                    if (!1 === (0, s.checkBufferParams)(this, e, t, r)) return -1;
                    const a = new Uint8Array(e, t, r);
                    if (0 === a.length) return this.error = "Zero buffer length", -1;
                    if (255 === a[0]) return this.error = "Length block 0xFF is reserved by standard", -1;
                    if (this.isIndefiniteForm = 128 === a[0], !0 === this.isIndefiniteForm) return this.blockLength = 1, t + this.blockLength;
                    if (this.longFormUsed = !!(128 & a[0]), !1 === this.longFormUsed) return this.length = a[0], this.blockLength = 1, t + this.blockLength;
                    const n = 127 & a[0];
                    if (n > 8) return this.error = "Too big integer", -1;
                    if (n + 1 > a.length) return this.error = "End of input reached before message was fully decoded", -1;
                    const i = new Uint8Array(n);
                    for (let e = 0; e < n; e++) i[e] = a[e + 1];
                    return 0 === i[n - 1] && this.warnings.push("Needlessly long encoded length"), this.length = (0, s.utilFromBase)(i, 8), this.longFormUsed && this.length <= 127 && this.warnings.push("Unnecessary usage of long length form"), this.blockLength = n + 1, t + this.blockLength
                }
                toBER(e = !1) {
                    let t, r;
                    if (this.length > 127 && (this.longFormUsed = !0), this.isIndefiniteForm) return t = new ArrayBuffer(1), !1 === e && (r = new Uint8Array(t), r[0] = 128), t;
                    if (!0 === this.longFormUsed) {
                        const a = (0, s.utilToBase)(this.length, 8);
                        if (a.byteLength > 127) return this.error = "Too big length", new ArrayBuffer(0);
                        if (t = new ArrayBuffer(a.byteLength + 1), !0 === e) return t;
                        const n = new Uint8Array(a);
                        r = new Uint8Array(t), r[0] = 128 | a.byteLength;
                        for (let e = 0; e < a.byteLength; e++) r[e + 1] = n[e];
                        return t
                    }
                    return t = new ArrayBuffer(1), !1 === e && (r = new Uint8Array(t), r[0] = this.length), t
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.blockName = this.constructor.blockName(), e.isIndefiniteForm = this.isIndefiniteForm, e.longFormUsed = this.longFormUsed, e.length = this.length, e
                }
            }
            class u extends i {
                constructor(e = {}) {
                    super(e)
                }
                static blockName() {
                    return "valueBlock"
                }
                fromBER(e, t, r) {
                    throw TypeError('User need to make a specific function in a class which extends "ValueBlock"')
                }
                toBER(e = !1) {
                    throw TypeError('User need to make a specific function in a class which extends "ValueBlock"')
                }
            }
            class h extends i {
                constructor(e = {}, t = u) {
                    super(e), "name" in e && (this.name = e.name), "optional" in e && (this.optional = e.optional), "primitiveSchema" in e && (this.primitiveSchema = e.primitiveSchema), this.idBlock = new l(e), this.lenBlock = new c(e), this.valueBlock = new t(e)
                }
                static blockName() {
                    return "BaseBlock"
                }
                fromBER(e, t, r) {
                    const s = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
                    return -1 === s ? (this.error = this.valueBlock.error, s) : (0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), s)
                }
                toBER(e = !1) {
                    let t;
                    const r = this.idBlock.toBER(e),
                        a = this.valueBlock.toBER(!0);
                    this.lenBlock.length = a.byteLength;
                    const n = this.lenBlock.toBER(e);
                    let i;
                    if (t = (0, s.utilConcatBuf)(r, n), i = !1 === e ? this.valueBlock.toBER(e) : new ArrayBuffer(this.lenBlock.length), t = (0, s.utilConcatBuf)(t, i), !0 === this.lenBlock.isIndefiniteForm) {
                        const r = new ArrayBuffer(2);
                        if (!1 === e) {
                            const e = new Uint8Array(r);
                            e[0] = 0, e[1] = 0
                        }
                        t = (0, s.utilConcatBuf)(t, r)
                    }
                    return t
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.idBlock = this.idBlock.toJSON(), e.lenBlock = this.lenBlock.toJSON(), e.valueBlock = this.valueBlock.toJSON(), "name" in this && (e.name = this.name), "optional" in this && (e.optional = this.optional), "primitiveSchema" in this && (e.primitiveSchema = this.primitiveSchema.toJSON()), e
                }
                toString() {
                    return `${this.constructor.blockName()} : ${(0,s.bufferToHexCodes)(this.valueBlock.valueHex)}`
                }
            }
            class m extends u {
                constructor(e = {}) {
                    super(e), this.valueHex = "valueHex" in e ? e.valueHex.slice(0) : new ArrayBuffer(0), this.isHexOnly = (0, s.getParametersValue)(e, "isHexOnly", !0)
                }
                fromBER(e, t, r) {
                    if (!1 === (0, s.checkBufferParams)(this, e, t, r)) return -1;
                    const a = new Uint8Array(e, t, r);
                    if (0 === a.length) return this.warnings.push("Zero buffer length"), t;
                    this.valueHex = new ArrayBuffer(a.length);
                    const n = new Uint8Array(this.valueHex);
                    for (let e = 0; e < a.length; e++) n[e] = a[e];
                    return this.blockLength = r, t + r
                }
                toBER(e = !1) {
                    return this.valueHex.slice(0)
                }
                static blockName() {
                    return "PrimitiveValueBlock"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.valueHex = (0, s.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), e.isHexOnly = this.isHexOnly, e
                }
            }
            class f extends h {
                constructor(e = {}) {
                    super(e, m), this.idBlock.isConstructed = !1
                }
                static blockName() {
                    return "PRIMITIVE"
                }
            }
            class g extends u {
                constructor(e = {}) {
                    super(e), this.value = (0, s.getParametersValue)(e, "value", []), this.isIndefiniteForm = (0, s.getParametersValue)(e, "isIndefiniteForm", !1)
                }
                fromBER(e, t, r) {
                    const a = t,
                        n = r;
                    if (!1 === (0, s.checkBufferParams)(this, e, t, r)) return -1;
                    if (0 === new Uint8Array(e, t, r).length) return this.warnings.push("Zero buffer length"), t;
                    let i = t;
                    for (; o = this.isIndefiniteForm, l = r, (!0 === o ? 1 : l) > 0;) {
                        const t = ue(e, i, r);
                        if (-1 === t.offset) return this.error = t.result.error, this.warnings.concat(t.result.warnings), -1;
                        if (i = t.offset, this.blockLength += t.result.blockLength, r -= t.result.blockLength, this.value.push(t.result), !0 === this.isIndefiniteForm && t.result.constructor.blockName() === y.blockName()) break
                    }
                    var o, l;
                    return !0 === this.isIndefiniteForm && (this.value[this.value.length - 1].constructor.blockName() === y.blockName() ? this.value.pop() : this.warnings.push("No EndOfContent block encoded")), this.valueBeforeDecode = e.slice(a, a + n), i
                }
                toBER(e = !1) {
                    let t = new ArrayBuffer(0);
                    for (let r = 0; r < this.value.length; r++) {
                        const a = this.value[r].toBER(e);
                        t = (0, s.utilConcatBuf)(t, a)
                    }
                    return t
                }
                static blockName() {
                    return "ConstructedValueBlock"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    e.isIndefiniteForm = this.isIndefiniteForm, e.value = [];
                    for (let t = 0; t < this.value.length; t++) e.value.push(this.value[t].toJSON());
                    return e
                }
            }
            class d extends h {
                constructor(e = {}) {
                    super(e, g), this.idBlock.isConstructed = !0
                }
                static blockName() {
                    return "CONSTRUCTED"
                }
                fromBER(e, t, r) {
                    this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm;
                    const s = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
                    return -1 === s ? (this.error = this.valueBlock.error, s) : (0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), s)
                }
                toString() {
                    const e = [];
                    for (const t of this.valueBlock.value) e.push(t.toString().split("\n").map((e => `  ${e}`)).join("\n"));
                    const t = 3 === this.idBlock.tagClass ? `[${this.idBlock.tagNumber}]` : this.constructor.blockName();
                    return e.length ? `${t} :\n${e.join("\n")}` : `${t} :`
                }
            }
            class p extends u {
                constructor(e = {}) {
                    super(e)
                }
                fromBER(e, t, r) {
                    return t
                }
                toBER(e = !1) {
                    return new ArrayBuffer(0)
                }
                static blockName() {
                    return "EndOfContentValueBlock"
                }
            }
            class y extends h {
                constructor(e = {}) {
                    super(e, p), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 0
                }
                static blockName() {
                    return "EndOfContent"
                }
            }
            class b extends u {
                constructor(e = {}) {
                    if (super(e), this.value = (0, s.getParametersValue)(e, "value", !1), this.isHexOnly = (0, s.getParametersValue)(e, "isHexOnly", !1), "valueHex" in e) this.valueHex = e.valueHex.slice(0);
                    else if (this.valueHex = new ArrayBuffer(1), !0 === this.value) {
                        new Uint8Array(this.valueHex)[0] = 255
                    }
                }
                fromBER(e, t, r) {
                    if (!1 === (0, s.checkBufferParams)(this, e, t, r)) return -1;
                    const a = new Uint8Array(e, t, r);
                    r > 1 && this.warnings.push("Boolean value encoded in more then 1 octet"), this.isHexOnly = !0, this.valueHex = new ArrayBuffer(a.length);
                    const n = new Uint8Array(this.valueHex);
                    for (let e = 0; e < a.length; e++) n[e] = a[e];
                    return 0 !== s.utilDecodeTC.call(this) ? this.value = !0 : this.value = !1, this.blockLength = r, t + r
                }
                toBER(e = !1) {
                    return this.valueHex
                }
                static blockName() {
                    return "BooleanValueBlock"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.value = this.value, e.isHexOnly = this.isHexOnly, e.valueHex = (0, s.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), e
                }
            }
            class v extends h {
                constructor(e = {}) {
                    super(e, b), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 1
                }
                static blockName() {
                    return "BOOLEAN"
                }
                toString() {
                    return `${this.constructor.blockName()} : ${this.valueBlock.value}`
                }
            }
            class w extends d {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 16
                }
                static blockName() {
                    return "SEQUENCE"
                }
            }
            class S extends d {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 17
                }
                static blockName() {
                    return "SET"
                }
            }
            class k extends h {
                constructor(e = {}) {
                    super(e, i), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 5
                }
                static blockName() {
                    return "NULL"
                }
                fromBER(e, t, r) {
                    return this.lenBlock.length > 0 && this.warnings.push("Non-zero length of value block for Null type"), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), this.blockLength += r, t + r > e.byteLength ? (this.error = "End of input reached before message was fully decoded (inconsistent offset and length values)", -1) : t + r
                }
                toBER(e = !1) {
                    const t = new ArrayBuffer(2);
                    if (!0 === e) return t;
                    const r = new Uint8Array(t);
                    return r[0] = 5, r[1] = 0, t
                }
                toString() {
                    return `${this.constructor.blockName()}`
                }
            }
            class A extends(o(g)) {
                constructor(e = {}) {
                    super(e), this.isConstructed = (0, s.getParametersValue)(e, "isConstructed", !1)
                }
                fromBER(e, t, r) {
                    let s = 0;
                    if (!0 === this.isConstructed) {
                        if (this.isHexOnly = !1, s = g.prototype.fromBER.call(this, e, t, r), -1 === s) return s;
                        for (let e = 0; e < this.value.length; e++) {
                            const t = this.value[e].constructor.blockName();
                            if (t === y.blockName()) {
                                if (!0 === this.isIndefiniteForm) break;
                                return this.error = "EndOfContent is unexpected, OCTET STRING may consists of OCTET STRINGs only", -1
                            }
                            if (t !== C.blockName()) return this.error = "OCTET STRING may consists of OCTET STRINGs only", -1
                        }
                    } else this.isHexOnly = !0, s = super.fromBER(e, t, r), this.blockLength = r;
                    return s
                }
                toBER(e = !1) {
                    if (!0 === this.isConstructed) return g.prototype.toBER.call(this, e);
                    let t = new ArrayBuffer(this.valueHex.byteLength);
                    return !0 === e || 0 === this.valueHex.byteLength || (t = this.valueHex.slice(0)), t
                }
                static blockName() {
                    return "OctetStringValueBlock"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.isConstructed = this.isConstructed, e.isHexOnly = this.isHexOnly, e.valueHex = (0, s.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), e
                }
            }
            class C extends h {
                constructor(e = {}) {
                    super(e, A), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 4
                }
                fromBER(e, t, r) {
                    if (this.valueBlock.isConstructed = this.idBlock.isConstructed, this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm, 0 === r) return 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), t;
                    if (!this.valueBlock.isConstructed) {
                        const s = e.slice(t, t + r);
                        try {
                            const e = he(s); - 1 !== e.offset && e.offset === r && (this.valueBlock.value = [e.result])
                        } catch (e) {}
                    }
                    return super.fromBER(e, t, r)
                }
                static blockName() {
                    return "OCTET STRING"
                }
                isEqual(e) {
                    return e instanceof C != !1 && JSON.stringify(this) === JSON.stringify(e)
                }
                toString() {
                    return this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length ? d.prototype.toString.call(this) : `${this.constructor.blockName()} : ${(0,s.bufferToHexCodes)(this.valueBlock.valueHex)}`
                }
            }
            class I extends(o(g)) {
                constructor(e = {}) {
                    super(e), this.unusedBits = (0, s.getParametersValue)(e, "unusedBits", 0), this.isConstructed = (0, s.getParametersValue)(e, "isConstructed", !1), this.blockLength = this.valueHex.byteLength
                }
                fromBER(e, t, r) {
                    if (0 === r) return t;
                    let a = -1;
                    if (!0 === this.isConstructed) {
                        if (a = g.prototype.fromBER.call(this, e, t, r), -1 === a) return a;
                        for (let e = 0; e < this.value.length; e++) {
                            const t = this.value[e].constructor.blockName();
                            if (t === y.blockName()) {
                                if (!0 === this.isIndefiniteForm) break;
                                return this.error = "EndOfContent is unexpected, BIT STRING may consists of BIT STRINGs only", -1
                            }
                            if (t !== P.blockName()) return this.error = "BIT STRING may consists of BIT STRINGs only", -1;
                            if (this.unusedBits > 0 && this.value[e].valueBlock.unusedBits > 0) return this.error = 'Using of "unused bits" inside constructive BIT STRING allowed for least one only', -1;
                            if (this.unusedBits = this.value[e].valueBlock.unusedBits, this.unusedBits > 7) return this.error = "Unused bits for BitString must be in range 0-7", -1
                        }
                        return a
                    }
                    if (!1 === (0, s.checkBufferParams)(this, e, t, r)) return -1;
                    const n = new Uint8Array(e, t, r);
                    if (this.unusedBits = n[0], this.unusedBits > 7) return this.error = "Unused bits for BitString must be in range 0-7", -1;
                    if (!this.unusedBits) {
                        const s = e.slice(t + 1, t + r);
                        try {
                            const e = he(s); - 1 !== e.offset && e.offset === r - 1 && (this.value = [e.result])
                        } catch (e) {}
                    }
                    this.valueHex = new ArrayBuffer(n.length - 1);
                    const i = new Uint8Array(this.valueHex);
                    for (let e = 0; e < r - 1; e++) i[e] = n[e + 1];
                    return this.blockLength = n.length, t + r
                }
                toBER(e = !1) {
                    if (!0 === this.isConstructed) return g.prototype.toBER.call(this, e);
                    if (!0 === e) return new ArrayBuffer(this.valueHex.byteLength + 1);
                    if (0 === this.valueHex.byteLength) return new ArrayBuffer(0);
                    const t = new Uint8Array(this.valueHex),
                        r = new ArrayBuffer(this.valueHex.byteLength + 1),
                        s = new Uint8Array(r);
                    s[0] = this.unusedBits;
                    for (let e = 0; e < this.valueHex.byteLength; e++) s[e + 1] = t[e];
                    return r
                }
                static blockName() {
                    return "BitStringValueBlock"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.unusedBits = this.unusedBits, e.isConstructed = this.isConstructed, e.isHexOnly = this.isHexOnly, e.valueHex = (0, s.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength), e
                }
            }
            class P extends h {
                constructor(e = {}) {
                    super(e, I), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 3
                }
                static blockName() {
                    return "BIT STRING"
                }
                fromBER(e, t, r) {
                    return 0 === r ? t : (this.valueBlock.isConstructed = this.idBlock.isConstructed, this.valueBlock.isIndefiniteForm = this.lenBlock.isIndefiniteForm, super.fromBER(e, t, r))
                }
                isEqual(e) {
                    return e instanceof P != !1 && JSON.stringify(this) === JSON.stringify(e)
                }
                toString() {
                    if (this.valueBlock.isConstructed || this.valueBlock.value && this.valueBlock.value.length) return d.prototype.toString.call(this); {
                        const e = [],
                            t = new Uint8Array(this.valueBlock.valueHex);
                        for (const r of t) e.push(r.toString(2).padStart(8, "0"));
                        return `${this.constructor.blockName()} : ${e.join("")}`
                    }
                }
            }
            class B extends(o(u)) {
                constructor(e = {}) {
                    super(e), "value" in e && (this.valueDec = e.value)
                }
                set valueHex(e) {
                    this._valueHex = e.slice(0), e.byteLength >= 4 ? (this.warnings.push("Too big Integer for decoding, hex only"), this.isHexOnly = !0, this._valueDec = 0) : (this.isHexOnly = !1, e.byteLength > 0 && (this._valueDec = s.utilDecodeTC.call(this)))
                }
                get valueHex() {
                    return this._valueHex
                }
                set valueDec(e) {
                    this._valueDec = e, this.isHexOnly = !1, this._valueHex = (0, s.utilEncodeTC)(e)
                }
                get valueDec() {
                    return this._valueDec
                }
                fromDER(e, t, r, s = 0) {
                    const a = this.fromBER(e, t, r);
                    if (-1 === a) return a;
                    const n = new Uint8Array(this._valueHex);
                    if (0 === n[0] && 0 != (128 & n[1])) {
                        const e = new ArrayBuffer(this._valueHex.byteLength - 1);
                        new Uint8Array(e).set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1)), this._valueHex = e.slice(0)
                    } else if (0 !== s && this._valueHex.byteLength < s) {
                        s - this._valueHex.byteLength > 1 && (s = this._valueHex.byteLength + 1);
                        const e = new ArrayBuffer(s);
                        new Uint8Array(e).set(n, s - this._valueHex.byteLength), this._valueHex = e.slice(0)
                    }
                    return a
                }
                toDER(e = !1) {
                    const t = new Uint8Array(this._valueHex);
                    switch (!0) {
                        case 0 != (128 & t[0]): {
                            const e = new ArrayBuffer(this._valueHex.byteLength + 1),
                                r = new Uint8Array(e);
                            r[0] = 0, r.set(t, 1), this._valueHex = e.slice(0)
                        }
                        break;
                    case 0 === t[0] && 0 == (128 & t[1]): {
                        const e = new ArrayBuffer(this._valueHex.byteLength - 1);
                        new Uint8Array(e).set(new Uint8Array(this._valueHex, 1, this._valueHex.byteLength - 1)), this._valueHex = e.slice(0)
                    }
                    }
                    return this.toBER(e)
                }
                fromBER(e, t, r) {
                    const s = super.fromBER(e, t, r);
                    return -1 === s ? s : (this.blockLength = r, t + r)
                }
                toBER(e = !1) {
                    return this.valueHex.slice(0)
                }
                static blockName() {
                    return "IntegerValueBlock"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.valueDec = this.valueDec, e
                }
                toString() {
                    function e(e, t) {
                        const r = new Uint8Array([0]);
                        let a = new Uint8Array(e),
                            n = new Uint8Array(t),
                            i = a.slice(0);
                        const o = i.length - 1;
                        let l = n.slice(0);
                        const c = l.length - 1;
                        let u = 0;
                        let h = 0;
                        for (let e = c < o ? o : c; e >= 0; e--, h++) {
                            switch (!0) {
                                case h < l.length:
                                    u = i[o - h] + l[c - h] + r[0];
                                    break;
                                default:
                                    u = i[o - h] + r[0]
                            }
                            switch (r[0] = u / 10, !0) {
                                case h >= i.length:
                                    i = (0, s.utilConcatView)(new Uint8Array([u % 10]), i);
                                    break;
                                default:
                                    i[o - h] = u % 10
                            }
                        }
                        return r[0] > 0 && (i = (0, s.utilConcatView)(r, i)), i.slice(0)
                    }

                    function t(e) {
                        if (e >= a.length)
                            for (let t = a.length; t <= e; t++) {
                                const e = new Uint8Array([0]);
                                let r = a[t - 1].slice(0);
                                for (let t = r.length - 1; t >= 0; t--) {
                                    const s = new Uint8Array([(r[t] << 1) + e[0]]);
                                    e[0] = s[0] / 10, r[t] = s[0] % 10
                                }
                                e[0] > 0 && (r = (0, s.utilConcatView)(e, r)), a.push(r)
                            }
                        return a[e]
                    }

                    function r(e, t) {
                        let r = 0,
                            s = new Uint8Array(e),
                            a = new Uint8Array(t),
                            n = s.slice(0);
                        const i = n.length - 1;
                        let o = a.slice(0);
                        const l = o.length - 1;
                        let c, u = 0;
                        for (let e = l; e >= 0; e--, u++) switch (c = n[i - u] - o[l - u] - r, !0) {
                            case c < 0:
                                r = 1, n[i - u] = c + 10;
                                break;
                            default:
                                r = 0, n[i - u] = c
                        }
                        if (r > 0)
                            for (let e = i - l + 1; e >= 0; e--, u++) {
                                if (c = n[i - u] - r, !(c < 0)) {
                                    r = 0, n[i - u] = c;
                                    break
                                }
                                r = 1, n[i - u] = c + 10
                            }
                        return n.slice()
                    }
                    const i = 8 * this._valueHex.byteLength - 1;
                    let o, l = new Uint8Array(8 * this._valueHex.byteLength / 3),
                        c = 0;
                    const u = new Uint8Array(this._valueHex);
                    let h = "",
                        m = !1;
                    for (let s = this._valueHex.byteLength - 1; s >= 0; s--) {
                        o = u[s];
                        for (let s = 0; s < 8; s++) {
                            if (1 == (1 & o)) switch (c) {
                                case i:
                                    l = r(t(c), l), h = "-";
                                    break;
                                default:
                                    l = e(l, t(c))
                            }
                            c++, o >>= 1
                        }
                    }
                    for (let e = 0; e < l.length; e++) l[e] && (m = !0), m && (h += n.charAt(l[e]));
                    return !1 === m && (h += n.charAt(0)), h
                }
            }
            class V extends h {
                constructor(e = {}) {
                    super(e, B), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 2
                }
                static blockName() {
                    return "INTEGER"
                }
                isEqual(e) {
                    return e instanceof V ? this.valueBlock.isHexOnly && e.valueBlock.isHexOnly ? (0, s.isEqualBuffer)(this.valueBlock.valueHex, e.valueBlock.valueHex) : this.valueBlock.isHexOnly === e.valueBlock.isHexOnly && this.valueBlock.valueDec === e.valueBlock.valueDec : e instanceof ArrayBuffer && (0, s.isEqualBuffer)(this.valueBlock.valueHex, e)
                }
                convertToDER() {
                    const e = new V({
                        valueHex: this.valueBlock.valueHex
                    });
                    return e.valueBlock.toDER(), e
                }
                convertFromDER() {
                    const e = this.valueBlock.valueHex.byteLength % 2 ? this.valueBlock.valueHex.byteLength + 1 : this.valueBlock.valueHex.byteLength,
                        t = new V({
                            valueHex: this.valueBlock.valueHex
                        });
                    return t.valueBlock.fromDER(t.valueBlock.valueHex, 0, t.valueBlock.valueHex.byteLength, e), t
                }
                toString() {
                    const e = (0, s.bufferToHexCodes)(this.valueBlock.valueHex),
                        t = BigInt(`0x${e}`);
                    return `${this.constructor.blockName()} : ${t.toString()}`
                }
            }
            class N extends V {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 10
                }
                static blockName() {
                    return "ENUMERATED"
                }
            }
            class E extends(o(i)) {
                constructor(e = {}) {
                    super(e), this.valueDec = (0, s.getParametersValue)(e, "valueDec", -1), this.isFirstSid = (0, s.getParametersValue)(e, "isFirstSid", !1)
                }
                static blockName() {
                    return "sidBlock"
                }
                fromBER(e, t, r) {
                    if (0 === r) return t;
                    if (!1 === (0, s.checkBufferParams)(this, e, t, r)) return -1;
                    const a = new Uint8Array(e, t, r);
                    this.valueHex = new ArrayBuffer(r);
                    let n = new Uint8Array(this.valueHex);
                    for (let e = 0; e < r && (n[e] = 127 & a[e], this.blockLength++, 0 != (128 & a[e])); e++);
                    const i = new ArrayBuffer(this.blockLength),
                        o = new Uint8Array(i);
                    for (let e = 0; e < this.blockLength; e++) o[e] = n[e];
                    return this.valueHex = i.slice(0), n = new Uint8Array(this.valueHex), 0 != (128 & a[this.blockLength - 1]) ? (this.error = "End of input reached before message was fully decoded", -1) : (0 === n[0] && this.warnings.push("Needlessly long format of SID encoding"), this.blockLength <= 8 ? this.valueDec = (0, s.utilFromBase)(n, 7) : (this.isHexOnly = !0, this.warnings.push("Too big SID for decoding, hex only")), t + this.blockLength)
                }
                toBER(e = !1) {
                    let t, r;
                    if (this.isHexOnly) {
                        if (!0 === e) return new ArrayBuffer(this.valueHex.byteLength);
                        const s = new Uint8Array(this.valueHex);
                        t = new ArrayBuffer(this.blockLength), r = new Uint8Array(t);
                        for (let e = 0; e < this.blockLength - 1; e++) r[e] = 128 | s[e];
                        return r[this.blockLength - 1] = s[this.blockLength - 1], t
                    }
                    const a = (0, s.utilToBase)(this.valueDec, 7);
                    if (0 === a.byteLength) return this.error = "Error during encoding SID value", new ArrayBuffer(0);
                    if (t = new ArrayBuffer(a.byteLength), !1 === e) {
                        const e = new Uint8Array(a);
                        r = new Uint8Array(t);
                        for (let t = 0; t < a.byteLength - 1; t++) r[t] = 128 | e[t];
                        r[a.byteLength - 1] = e[a.byteLength - 1]
                    }
                    return t
                }
                toString() {
                    let e = "";
                    if (!0 === this.isHexOnly) e = (0, s.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength);
                    else if (this.isFirstSid) {
                        let t = this.valueDec;
                        this.valueDec <= 39 ? e = "0." : this.valueDec <= 79 ? (e = "1.", t -= 40) : (e = "2.", t -= 80), e += t.toString()
                    } else e = this.valueDec.toString();
                    return e
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.valueDec = this.valueDec, e.isFirstSid = this.isFirstSid, e
                }
            }
            class x extends u {
                constructor(e = {}) {
                    super(e), this.fromString((0, s.getParametersValue)(e, "value", ""))
                }
                fromBER(e, t, r) {
                    let s = t;
                    for (; r > 0;) {
                        const t = new E;
                        if (s = t.fromBER(e, s, r), -1 === s) return this.blockLength = 0, this.error = t.error, s;
                        0 === this.value.length && (t.isFirstSid = !0), this.blockLength += t.blockLength, r -= t.blockLength, this.value.push(t)
                    }
                    return s
                }
                toBER(e = !1) {
                    let t = new ArrayBuffer(0);
                    for (let r = 0; r < this.value.length; r++) {
                        const a = this.value[r].toBER(e);
                        if (0 === a.byteLength) return this.error = this.value[r].error, new ArrayBuffer(0);
                        t = (0, s.utilConcatBuf)(t, a)
                    }
                    return t
                }
                fromString(e) {
                    this.value = [];
                    let t = 0,
                        r = 0,
                        s = "",
                        a = !1;
                    do {
                        if (r = e.indexOf(".", t), s = -1 === r ? e.substr(t) : e.substr(t, r - t), t = r + 1, a) {
                            const e = this.value[0];
                            let t = 0;
                            switch (e.valueDec) {
                                case 0:
                                    break;
                                case 1:
                                    t = 40;
                                    break;
                                case 2:
                                    t = 80;
                                    break;
                                default:
                                    return this.value = [], !1
                            }
                            const r = parseInt(s, 10);
                            if (isNaN(r)) return !0;
                            e.valueDec = r + t, a = !1
                        } else {
                            const e = new E;
                            if (e.valueDec = parseInt(s, 10), isNaN(e.valueDec)) return !0;
                            0 === this.value.length && (e.isFirstSid = !0, a = !0), this.value.push(e)
                        }
                    } while (-1 !== r);
                    return !0
                }
                toString() {
                    let e = "",
                        t = !1;
                    for (let r = 0; r < this.value.length; r++) {
                        t = this.value[r].isHexOnly;
                        let s = this.value[r].toString();
                        0 !== r && (e = `${e}.`), t ? (s = `{${s}}`, this.value[r].isFirstSid ? e = `2.{${s} - 80}` : e += s) : e += s
                    }
                    return e
                }
                static blockName() {
                    return "ObjectIdentifierValueBlock"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    e.value = this.toString(), e.sidArray = [];
                    for (let t = 0; t < this.value.length; t++) e.sidArray.push(this.value[t].toJSON());
                    return e
                }
            }
            class O extends h {
                constructor(e = {}) {
                    super(e, x), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 6
                }
                static blockName() {
                    return "OBJECT IDENTIFIER"
                }
                toString() {
                    return `${this.constructor.blockName()} : ${this.valueBlock.toString()}`
                }
            }
            class D extends(o(i)) {
                constructor(e = {}) {
                    super(e), this.isHexOnly = !0, this.value = ""
                }
                static blockName() {
                    return "Utf8StringValueBlock"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.value = this.value, e
                }
            }
            class j extends h {
                constructor(e = {}) {
                    super(e, D), "value" in e && this.fromString(e.value), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 12
                }
                static blockName() {
                    return "UTF8String"
                }
                fromBER(e, t, r) {
                    const s = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
                    return -1 === s ? (this.error = this.valueBlock.error, s) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), s)
                }
                fromBuffer(e) {
                    this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(e));
                    try {
                        this.valueBlock.value = decodeURIComponent(escape(this.valueBlock.value))
                    } catch (e) {
                        this.warnings.push(`Error during "decodeURIComponent": ${e}, using raw string`)
                    }
                }
                fromString(e) {
                    const t = unescape(encodeURIComponent(e)),
                        r = t.length;
                    this.valueBlock.valueHex = new ArrayBuffer(r);
                    const s = new Uint8Array(this.valueBlock.valueHex);
                    for (let e = 0; e < r; e++) s[e] = t.charCodeAt(e);
                    this.valueBlock.value = e
                }
                toString() {
                    return `${this.constructor.blockName()} : ${this.valueBlock.value}`
                }
            }
            class R extends(o(i)) {
                constructor(e = {}) {
                    super(e), this.valueDec = (0, s.getParametersValue)(e, "valueDec", -1)
                }
                static blockName() {
                    return "relativeSidBlock"
                }
                fromBER(e, t, r) {
                    if (0 === r) return t;
                    if (!1 === (0, s.checkBufferParams)(this, e, t, r)) return -1;
                    const a = new Uint8Array(e, t, r);
                    this.valueHex = new ArrayBuffer(r);
                    let n = new Uint8Array(this.valueHex);
                    for (let e = 0; e < r && (n[e] = 127 & a[e], this.blockLength++, 0 != (128 & a[e])); e++);
                    const i = new ArrayBuffer(this.blockLength),
                        o = new Uint8Array(i);
                    for (let e = 0; e < this.blockLength; e++) o[e] = n[e];
                    return this.valueHex = i.slice(0), n = new Uint8Array(this.valueHex), 0 != (128 & a[this.blockLength - 1]) ? (this.error = "End of input reached before message was fully decoded", -1) : (0 === n[0] && this.warnings.push("Needlessly long format of SID encoding"), this.blockLength <= 8 ? this.valueDec = (0, s.utilFromBase)(n, 7) : (this.isHexOnly = !0, this.warnings.push("Too big SID for decoding, hex only")), t + this.blockLength)
                }
                toBER(e = !1) {
                    let t, r;
                    if (this.isHexOnly) {
                        if (!0 === e) return new ArrayBuffer(this.valueHex.byteLength);
                        const s = new Uint8Array(this.valueHex);
                        t = new ArrayBuffer(this.blockLength), r = new Uint8Array(t);
                        for (let e = 0; e < this.blockLength - 1; e++) r[e] = 128 | s[e];
                        return r[this.blockLength - 1] = s[this.blockLength - 1], t
                    }
                    const a = (0, s.utilToBase)(this.valueDec, 7);
                    if (0 === a.byteLength) return this.error = "Error during encoding SID value", new ArrayBuffer(0);
                    if (t = new ArrayBuffer(a.byteLength), !1 === e) {
                        const e = new Uint8Array(a);
                        r = new Uint8Array(t);
                        for (let t = 0; t < a.byteLength - 1; t++) r[t] = 128 | e[t];
                        r[a.byteLength - 1] = e[a.byteLength - 1]
                    }
                    return t
                }
                toString() {
                    let e = "";
                    return e = !0 === this.isHexOnly ? (0, s.bufferToHexCodes)(this.valueHex, 0, this.valueHex.byteLength) : this.valueDec.toString(), e
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.valueDec = this.valueDec, e
                }
            }
            class q extends u {
                constructor(e = {}) {
                    super(e), this.fromString((0, s.getParametersValue)(e, "value", ""))
                }
                fromBER(e, t, r) {
                    let s = t;
                    for (; r > 0;) {
                        const t = new R;
                        if (s = t.fromBER(e, s, r), -1 === s) return this.blockLength = 0, this.error = t.error, s;
                        this.blockLength += t.blockLength, r -= t.blockLength, this.value.push(t)
                    }
                    return s
                }
                toBER(e = !1) {
                    let t = new ArrayBuffer(0);
                    for (let r = 0; r < this.value.length; r++) {
                        const a = this.value[r].toBER(e);
                        if (0 === a.byteLength) return this.error = this.value[r].error, new ArrayBuffer(0);
                        t = (0, s.utilConcatBuf)(t, a)
                    }
                    return t
                }
                fromString(e) {
                    this.value = [];
                    let t = 0,
                        r = 0,
                        s = "";
                    do {
                        r = e.indexOf(".", t), s = -1 === r ? e.substr(t) : e.substr(t, r - t), t = r + 1;
                        const a = new R;
                        if (a.valueDec = parseInt(s, 10), isNaN(a.valueDec)) return !0;
                        this.value.push(a)
                    } while (-1 !== r);
                    return !0
                }
                toString() {
                    let e = "",
                        t = !1;
                    for (let r = 0; r < this.value.length; r++) {
                        t = this.value[r].isHexOnly;
                        let s = this.value[r].toString();
                        0 !== r && (e = `${e}.`), t ? (s = `{${s}}`, e += s) : e += s
                    }
                    return e
                }
                static blockName() {
                    return "RelativeObjectIdentifierValueBlock"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    e.value = this.toString(), e.sidArray = [];
                    for (let t = 0; t < this.value.length; t++) e.sidArray.push(this.value[t].toJSON());
                    return e
                }
            }
            class T extends h {
                constructor(e = {}) {
                    super(e, q), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 13
                }
                static blockName() {
                    return "RelativeObjectIdentifier"
                }
            }
            class H extends(o(i)) {
                constructor(e = {}) {
                    super(e), this.isHexOnly = !0, this.value = ""
                }
                static blockName() {
                    return "BmpStringValueBlock"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.value = this.value, e
                }
            }
            class L extends h {
                constructor(e = {}) {
                    super(e, H), "value" in e && this.fromString(e.value), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 30
                }
                static blockName() {
                    return "BMPString"
                }
                fromBER(e, t, r) {
                    const s = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
                    return -1 === s ? (this.error = this.valueBlock.error, s) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), s)
                }
                fromBuffer(e) {
                    const t = e.slice(0),
                        r = new Uint8Array(t);
                    for (let e = 0; e < r.length; e += 2) {
                        const t = r[e];
                        r[e] = r[e + 1], r[e + 1] = t
                    }
                    this.valueBlock.value = String.fromCharCode.apply(null, new Uint16Array(t))
                }
                fromString(e) {
                    const t = e.length;
                    this.valueBlock.valueHex = new ArrayBuffer(2 * t);
                    const r = new Uint8Array(this.valueBlock.valueHex);
                    for (let a = 0; a < t; a++) {
                        const t = (0, s.utilToBase)(e.charCodeAt(a), 8),
                            n = new Uint8Array(t);
                        if (n.length > 2) continue;
                        const i = 2 - n.length;
                        for (let e = n.length - 1; e >= 0; e--) r[2 * a + e + i] = n[e]
                    }
                    this.valueBlock.value = e
                }
                toString() {
                    return `${this.constructor.blockName()} : ${this.valueBlock.value}`
                }
            }
            class K extends(o(i)) {
                constructor(e = {}) {
                    super(e), this.isHexOnly = !0, this.value = ""
                }
                static blockName() {
                    return "UniversalStringValueBlock"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.value = this.value, e
                }
            }
            class U extends h {
                constructor(e = {}) {
                    super(e, K), "value" in e && this.fromString(e.value), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 28
                }
                static blockName() {
                    return "UniversalString"
                }
                fromBER(e, t, r) {
                    const s = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
                    return -1 === s ? (this.error = this.valueBlock.error, s) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), s)
                }
                fromBuffer(e) {
                    const t = e.slice(0),
                        r = new Uint8Array(t);
                    for (let e = 0; e < r.length; e += 4) r[e] = r[e + 3], r[e + 1] = r[e + 2], r[e + 2] = 0, r[e + 3] = 0;
                    this.valueBlock.value = String.fromCharCode.apply(null, new Uint32Array(t))
                }
                fromString(e) {
                    const t = e.length;
                    this.valueBlock.valueHex = new ArrayBuffer(4 * t);
                    const r = new Uint8Array(this.valueBlock.valueHex);
                    for (let a = 0; a < t; a++) {
                        const t = (0, s.utilToBase)(e.charCodeAt(a), 8),
                            n = new Uint8Array(t);
                        if (n.length > 4) continue;
                        const i = 4 - n.length;
                        for (let e = n.length - 1; e >= 0; e--) r[4 * a + e + i] = n[e]
                    }
                    this.valueBlock.value = e
                }
                toString() {
                    return `${this.constructor.blockName()} : ${this.valueBlock.value}`
                }
            }
            class J extends(o(i)) {
                constructor(e = {}) {
                    super(e), this.value = "", this.isHexOnly = !0
                }
                static blockName() {
                    return "SimpleStringValueBlock"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.value = this.value, e
                }
            }
            class $ extends h {
                constructor(e = {}) {
                    super(e, J), "value" in e && this.fromString(e.value)
                }
                static blockName() {
                    return "SIMPLESTRING"
                }
                fromBER(e, t, r) {
                    const s = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
                    return -1 === s ? (this.error = this.valueBlock.error, s) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), s)
                }
                fromBuffer(e) {
                    this.valueBlock.value = String.fromCharCode.apply(null, new Uint8Array(e))
                }
                fromString(e) {
                    const t = e.length;
                    this.valueBlock.valueHex = new ArrayBuffer(t);
                    const r = new Uint8Array(this.valueBlock.valueHex);
                    for (let s = 0; s < t; s++) r[s] = e.charCodeAt(s);
                    this.valueBlock.value = e
                }
                toString() {
                    return `${this.constructor.blockName()} : ${this.valueBlock.value}`
                }
            }
            class _ extends $ {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 18
                }
                static blockName() {
                    return "NumericString"
                }
            }
            class M extends $ {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 19
                }
                static blockName() {
                    return "PrintableString"
                }
            }
            class F extends $ {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 20
                }
                static blockName() {
                    return "TeletexString"
                }
            }
            class W extends $ {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 21
                }
                static blockName() {
                    return "VideotexString"
                }
            }
            class G extends $ {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 22
                }
                static blockName() {
                    return "IA5String"
                }
            }
            class Q extends $ {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 25
                }
                static blockName() {
                    return "GraphicString"
                }
            }
            class z extends $ {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 26
                }
                static blockName() {
                    return "VisibleString"
                }
            }
            class Z extends $ {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 27
                }
                static blockName() {
                    return "GeneralString"
                }
            }
            class X extends $ {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 29
                }
                static blockName() {
                    return "CharacterString"
                }
            }
            class Y extends z {
                constructor(e = {}) {
                    if (super(e), this.year = 0, this.month = 0, this.day = 0, this.hour = 0, this.minute = 0, this.second = 0, "value" in e) {
                        this.fromString(e.value), this.valueBlock.valueHex = new ArrayBuffer(e.value.length);
                        const t = new Uint8Array(this.valueBlock.valueHex);
                        for (let r = 0; r < e.value.length; r++) t[r] = e.value.charCodeAt(r)
                    }
                    "valueDate" in e && (this.fromDate(e.valueDate), this.valueBlock.valueHex = this.toBuffer()), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 23
                }
                fromBER(e, t, r) {
                    const s = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
                    return -1 === s ? (this.error = this.valueBlock.error, s) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), s)
                }
                fromBuffer(e) {
                    this.fromString(String.fromCharCode.apply(null, new Uint8Array(e)))
                }
                toBuffer() {
                    const e = this.toString(),
                        t = new ArrayBuffer(e.length),
                        r = new Uint8Array(t);
                    for (let t = 0; t < e.length; t++) r[t] = e.charCodeAt(t);
                    return t
                }
                fromDate(e) {
                    this.year = e.getUTCFullYear(), this.month = e.getUTCMonth() + 1, this.day = e.getUTCDate(), this.hour = e.getUTCHours(), this.minute = e.getUTCMinutes(), this.second = e.getUTCSeconds()
                }
                toDate() {
                    return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second))
                }
                fromString(e) {
                    const t = /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})Z/gi.exec(e);
                    if (null === t) return void(this.error = "Wrong input string for convertion");
                    const r = parseInt(t[1], 10);
                    this.year = r >= 50 ? 1900 + r : 2e3 + r, this.month = parseInt(t[2], 10), this.day = parseInt(t[3], 10), this.hour = parseInt(t[4], 10), this.minute = parseInt(t[5], 10), this.second = parseInt(t[6], 10)
                }
                toString() {
                    const e = new Array(7);
                    return e[0] = (0, s.padNumber)(this.year < 2e3 ? this.year - 1900 : this.year - 2e3, 2), e[1] = (0, s.padNumber)(this.month, 2), e[2] = (0, s.padNumber)(this.day, 2), e[3] = (0, s.padNumber)(this.hour, 2), e[4] = (0, s.padNumber)(this.minute, 2), e[5] = (0, s.padNumber)(this.second, 2), e[6] = "Z", e.join("")
                }
                static blockName() {
                    return "UTCTime"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.year = this.year, e.month = this.month, e.day = this.day, e.hour = this.hour, e.minute = this.minute, e.second = this.second, e
                }
            }
            class ee extends z {
                constructor(e = {}) {
                    if (super(e), this.year = 0, this.month = 0, this.day = 0, this.hour = 0, this.minute = 0, this.second = 0, this.millisecond = 0, "value" in e) {
                        this.fromString(e.value), this.valueBlock.valueHex = new ArrayBuffer(e.value.length);
                        const t = new Uint8Array(this.valueBlock.valueHex);
                        for (let r = 0; r < e.value.length; r++) t[r] = e.value.charCodeAt(r)
                    }
                    "valueDate" in e && (this.fromDate(e.valueDate), this.valueBlock.valueHex = this.toBuffer()), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 24
                }
                fromBER(e, t, r) {
                    const s = this.valueBlock.fromBER(e, t, !0 === this.lenBlock.isIndefiniteForm ? r : this.lenBlock.length);
                    return -1 === s ? (this.error = this.valueBlock.error, s) : (this.fromBuffer(this.valueBlock.valueHex), 0 === this.idBlock.error.length && (this.blockLength += this.idBlock.blockLength), 0 === this.lenBlock.error.length && (this.blockLength += this.lenBlock.blockLength), 0 === this.valueBlock.error.length && (this.blockLength += this.valueBlock.blockLength), s)
                }
                fromBuffer(e) {
                    this.fromString(String.fromCharCode.apply(null, new Uint8Array(e)))
                }
                toBuffer() {
                    const e = this.toString(),
                        t = new ArrayBuffer(e.length),
                        r = new Uint8Array(t);
                    for (let t = 0; t < e.length; t++) r[t] = e.charCodeAt(t);
                    return t
                }
                fromDate(e) {
                    this.year = e.getUTCFullYear(), this.month = e.getUTCMonth() + 1, this.day = e.getUTCDate(), this.hour = e.getUTCHours(), this.minute = e.getUTCMinutes(), this.second = e.getUTCSeconds(), this.millisecond = e.getUTCMilliseconds()
                }
                toDate() {
                    return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond))
                }
                fromString(e) {
                    let t, r = !1,
                        s = "",
                        a = "",
                        n = 0,
                        i = 0,
                        o = 0;
                    if ("Z" === e[e.length - 1]) s = e.substr(0, e.length - 1), r = !0;
                    else {
                        const t = new Number(e[e.length - 1]);
                        if (isNaN(t.valueOf())) throw new Error("Wrong input string for convertion");
                        s = e
                    }
                    if (r) {
                        if (-1 !== s.indexOf("+")) throw new Error("Wrong input string for convertion");
                        if (-1 !== s.indexOf("-")) throw new Error("Wrong input string for convertion")
                    } else {
                        let e = 1,
                            t = s.indexOf("+"),
                            r = "";
                        if (-1 === t && (t = s.indexOf("-"), e = -1), -1 !== t) {
                            if (r = s.substr(t + 1), s = s.substr(0, t), 2 !== r.length && 4 !== r.length) throw new Error("Wrong input string for convertion");
                            let a = new Number(r.substr(0, 2));
                            if (isNaN(a.valueOf())) throw new Error("Wrong input string for convertion");
                            if (i = e * a, 4 === r.length) {
                                if (a = new Number(r.substr(2, 2)), isNaN(a.valueOf())) throw new Error("Wrong input string for convertion");
                                o = e * a
                            }
                        }
                    }
                    let l = s.indexOf(".");
                    if (-1 === l && (l = s.indexOf(",")), -1 !== l) {
                        const e = new Number(`0${s.substr(l)}`);
                        if (isNaN(e.valueOf())) throw new Error("Wrong input string for convertion");
                        n = e.valueOf(), a = s.substr(0, l)
                    } else a = s;
                    switch (!0) {
                        case 8 === a.length:
                            if (t = /(\d{4})(\d{2})(\d{2})/gi, -1 !== l) throw new Error("Wrong input string for convertion");
                            break;
                        case 10 === a.length:
                            if (t = /(\d{4})(\d{2})(\d{2})(\d{2})/gi, -1 !== l) {
                                let e = 60 * n;
                                this.minute = Math.floor(e), e = 60 * (e - this.minute), this.second = Math.floor(e), e = 1e3 * (e - this.second), this.millisecond = Math.floor(e)
                            }
                            break;
                        case 12 === a.length:
                            if (t = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})/gi, -1 !== l) {
                                let e = 60 * n;
                                this.second = Math.floor(e), e = 1e3 * (e - this.second), this.millisecond = Math.floor(e)
                            }
                            break;
                        case 14 === a.length:
                            if (t = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/gi, -1 !== l) {
                                const e = 1e3 * n;
                                this.millisecond = Math.floor(e)
                            }
                            break;
                        default:
                            throw new Error("Wrong input string for convertion")
                    }
                    const c = t.exec(a);
                    if (null === c) throw new Error("Wrong input string for convertion");
                    for (let e = 1; e < c.length; e++) switch (e) {
                        case 1:
                            this.year = parseInt(c[e], 10);
                            break;
                        case 2:
                            this.month = parseInt(c[e], 10);
                            break;
                        case 3:
                            this.day = parseInt(c[e], 10);
                            break;
                        case 4:
                            this.hour = parseInt(c[e], 10) + i;
                            break;
                        case 5:
                            this.minute = parseInt(c[e], 10) + o;
                            break;
                        case 6:
                            this.second = parseInt(c[e], 10);
                            break;
                        default:
                            throw new Error("Wrong input string for convertion")
                    }
                    if (!1 === r) {
                        const e = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond);
                        this.year = e.getUTCFullYear(), this.month = e.getUTCMonth(), this.day = e.getUTCDay(), this.hour = e.getUTCHours(), this.minute = e.getUTCMinutes(), this.second = e.getUTCSeconds(), this.millisecond = e.getUTCMilliseconds()
                    }
                }
                toString() {
                    const e = [];
                    return e.push((0, s.padNumber)(this.year, 4)), e.push((0, s.padNumber)(this.month, 2)), e.push((0, s.padNumber)(this.day, 2)), e.push((0, s.padNumber)(this.hour, 2)), e.push((0, s.padNumber)(this.minute, 2)), e.push((0, s.padNumber)(this.second, 2)), 0 !== this.millisecond && (e.push("."), e.push((0, s.padNumber)(this.millisecond, 3))), e.push("Z"), e.join("")
                }
                static blockName() {
                    return "GeneralizedTime"
                }
                toJSON() {
                    let e = {};
                    try {
                        e = super.toJSON()
                    } catch (e) {}
                    return e.year = this.year, e.month = this.month, e.day = this.day, e.hour = this.hour, e.minute = this.minute, e.second = this.second, e.millisecond = this.millisecond, e
                }
            }
            class te extends j {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 31
                }
                static blockName() {
                    return "DATE"
                }
            }
            class re extends j {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 32
                }
                static blockName() {
                    return "TimeOfDay"
                }
            }
            class se extends j {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 33
                }
                static blockName() {
                    return "DateTime"
                }
            }
            class ae extends j {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 34
                }
                static blockName() {
                    return "Duration"
                }
            }
            class ne extends j {
                constructor(e = {}) {
                    super(e), this.idBlock.tagClass = 1, this.idBlock.tagNumber = 14
                }
                static blockName() {
                    return "TIME"
                }
            }
            class ie {
                constructor(e = {}) {
                    this.value = (0, s.getParametersValue)(e, "value", []), this.optional = (0, s.getParametersValue)(e, "optional", !1)
                }
            }
            class oe {
                constructor(e = {}) {
                    this.name = (0, s.getParametersValue)(e, "name", ""), this.optional = (0, s.getParametersValue)(e, "optional", !1)
                }
            }
            class le {
                constructor(e = {}) {
                    this.name = (0, s.getParametersValue)(e, "name", ""), this.optional = (0, s.getParametersValue)(e, "optional", !1), this.value = (0, s.getParametersValue)(e, "value", new oe), this.local = (0, s.getParametersValue)(e, "local", !1)
                }
            }
            class ce {
                constructor(e = {}) {
                    this.data = (0, s.getParametersValue)(e, "data", new ArrayBuffer(0))
                }
                fromBER(e, t, r) {
                    return this.data = e.slice(t, r), t + r
                }
                toBER(e = !1) {
                    return this.data
                }
            }

            function ue(e, t, r) {
                const a = t;
                let n = new h({}, Object);
                const o = new i;
                if (!1 === (0, s.checkBufferParams)(o, e, t, r)) return n.error = o.error, {
                    offset: -1,
                    result: n
                };
                if (0 === new Uint8Array(e, t, r).length) return n.error = "Zero buffer length", {
                    offset: -1,
                    result: n
                };
                let l = n.idBlock.fromBER(e, t, r);
                if (n.warnings.concat(n.idBlock.warnings), -1 === l) return n.error = n.idBlock.error, {
                    offset: -1,
                    result: n
                };
                if (t = l, r -= n.idBlock.blockLength, l = n.lenBlock.fromBER(e, t, r), n.warnings.concat(n.lenBlock.warnings), -1 === l) return n.error = n.lenBlock.error, {
                    offset: -1,
                    result: n
                };
                if (t = l, r -= n.lenBlock.blockLength, !1 === n.idBlock.isConstructed && !0 === n.lenBlock.isIndefiniteForm) return n.error = "Indefinite length form used for primitive encoding form", {
                    offset: -1,
                    result: n
                };
                let c = h;
                switch (n.idBlock.tagClass) {
                    case 1:
                        if (n.idBlock.tagNumber >= 37 && !1 === n.idBlock.isHexOnly) return n.error = "UNIVERSAL 37 and upper tags are reserved by ASN.1 standard", {
                            offset: -1,
                            result: n
                        };
                        switch (n.idBlock.tagNumber) {
                            case 0:
                                if (!0 === n.idBlock.isConstructed && n.lenBlock.length > 0) return n.error = "Type [UNIVERSAL 0] is reserved", {
                                    offset: -1,
                                    result: n
                                };
                                c = y;
                                break;
                            case 1:
                                c = v;
                                break;
                            case 2:
                                c = V;
                                break;
                            case 3:
                                c = P;
                                break;
                            case 4:
                                c = C;
                                break;
                            case 5:
                                c = k;
                                break;
                            case 6:
                                c = O;
                                break;
                            case 10:
                                c = N;
                                break;
                            case 12:
                                c = j;
                                break;
                            case 13:
                                c = T;
                                break;
                            case 14:
                                c = ne;
                                break;
                            case 15:
                                return n.error = "[UNIVERSAL 15] is reserved by ASN.1 standard", {
                                    offset: -1,
                                    result: n
                                };
                            case 16:
                                c = w;
                                break;
                            case 17:
                                c = S;
                                break;
                            case 18:
                                c = _;
                                break;
                            case 19:
                                c = M;
                                break;
                            case 20:
                                c = F;
                                break;
                            case 21:
                                c = W;
                                break;
                            case 22:
                                c = G;
                                break;
                            case 23:
                                c = Y;
                                break;
                            case 24:
                                c = ee;
                                break;
                            case 25:
                                c = Q;
                                break;
                            case 26:
                                c = z;
                                break;
                            case 27:
                                c = Z;
                                break;
                            case 28:
                                c = U;
                                break;
                            case 29:
                                c = X;
                                break;
                            case 30:
                                c = L;
                                break;
                            case 31:
                                c = te;
                                break;
                            case 32:
                                c = re;
                                break;
                            case 33:
                                c = se;
                                break;
                            case 34:
                                c = ae;
                                break;
                            default: {
                                let e;
                                e = !0 === n.idBlock.isConstructed ? new d : new f, e.idBlock = n.idBlock, e.lenBlock = n.lenBlock, e.warnings = n.warnings, n = e
                            }
                        }
                        break;
                    case 2:
                    case 3:
                    case 4:
                    default:
                        c = !0 === n.idBlock.isConstructed ? d : f
                }
                return n = function(e, t) {
                    if (e instanceof t) return e;
                    const r = new t;
                    return r.idBlock = e.idBlock, r.lenBlock = e.lenBlock, r.warnings = e.warnings, r.valueBeforeDecode = e.valueBeforeDecode.slice(0), r
                }(n, c), l = n.fromBER(e, t, !0 === n.lenBlock.isIndefiniteForm ? r : n.lenBlock.length), n.valueBeforeDecode = e.slice(a, a + n.blockLength), {
                    offset: l,
                    result: n
                }
            }

            function he(e) {
                if (0 === e.byteLength) {
                    const e = new h({}, Object);
                    return e.error = "Input buffer has zero length", {
                        offset: -1,
                        result: e
                    }
                }
                return ue(e, 0, e.byteLength)
            }

            function me(e, t, r) {
                if (r instanceof ie) {
                    const s = !1;
                    for (let s = 0; s < r.value.length; s++) {
                        if (!0 === me(e, t, r.value[s]).verified) return {
                            verified: !0,
                            result: e
                        }
                    }
                    if (!1 === s) {
                        const e = {
                            verified: !1,
                            result: {
                                error: "Wrong values for Choice type"
                            }
                        };
                        return r.hasOwnProperty("name") && (e.name = r.name), e
                    }
                }
                if (r instanceof oe) return r.hasOwnProperty("name") && (e[r.name] = t), {
                    verified: !0,
                    result: e
                };
                if (e instanceof Object == !1) return {
                    verified: !1,
                    result: {
                        error: "Wrong root object"
                    }
                };
                if (t instanceof Object == !1) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 data"
                    }
                };
                if (r instanceof Object == !1) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
                if ("idBlock" in r == !1) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
                if ("fromBER" in r.idBlock == !1) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
                if ("toBER" in r.idBlock == !1) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
                const s = r.idBlock.toBER(!1);
                if (0 === s.byteLength) return {
                    verified: !1,
                    result: {
                        error: "Error encoding idBlock for ASN.1 schema"
                    }
                };
                if (-1 === r.idBlock.fromBER(s, 0, s.byteLength)) return {
                    verified: !1,
                    result: {
                        error: "Error decoding idBlock for ASN.1 schema"
                    }
                };
                if (!1 === r.idBlock.hasOwnProperty("tagClass")) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
                if (r.idBlock.tagClass !== t.idBlock.tagClass) return {
                    verified: !1,
                    result: e
                };
                if (!1 === r.idBlock.hasOwnProperty("tagNumber")) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
                if (r.idBlock.tagNumber !== t.idBlock.tagNumber) return {
                    verified: !1,
                    result: e
                };
                if (!1 === r.idBlock.hasOwnProperty("isConstructed")) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
                if (r.idBlock.isConstructed !== t.idBlock.isConstructed) return {
                    verified: !1,
                    result: e
                };
                if ("isHexOnly" in r.idBlock == !1) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema"
                    }
                };
                if (r.idBlock.isHexOnly !== t.idBlock.isHexOnly) return {
                    verified: !1,
                    result: e
                };
                if (!0 === r.idBlock.isHexOnly) {
                    if ("valueHex" in r.idBlock == !1) return {
                        verified: !1,
                        result: {
                            error: "Wrong ASN.1 schema"
                        }
                    };
                    const s = new Uint8Array(r.idBlock.valueHex),
                        a = new Uint8Array(t.idBlock.valueHex);
                    if (s.length !== a.length) return {
                        verified: !1,
                        result: e
                    };
                    for (let t = 0; t < s.length; t++)
                        if (s[t] !== a[1]) return {
                            verified: !1,
                            result: e
                        }
                }
                if (r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && (e[r.name] = t)), !0 === r.idBlock.isConstructed) {
                    let s = 0,
                        a = {
                            verified: !1
                        },
                        n = r.valueBlock.value.length;
                    if (n > 0 && r.valueBlock.value[0] instanceof le && (n = t.valueBlock.value.length), 0 === n) return {
                        verified: !0,
                        result: e
                    };
                    if (0 === t.valueBlock.value.length && 0 !== r.valueBlock.value.length) {
                        let t = !0;
                        for (let e = 0; e < r.valueBlock.value.length; e++) t = t && (r.valueBlock.value[e].optional || !1);
                        return !0 === t ? {
                            verified: !0,
                            result: e
                        } : (r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && delete e[r.name]), e.error = "Inconsistent object length", {
                            verified: !1,
                            result: e
                        })
                    }
                    for (let i = 0; i < n; i++)
                        if (i - s >= t.valueBlock.value.length) {
                            if (!1 === r.valueBlock.value[i].optional) {
                                const t = {
                                    verified: !1,
                                    result: e
                                };
                                return e.error = "Inconsistent length between ASN.1 data and schema", r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && (delete e[r.name], t.name = r.name)), t
                            }
                        } else if (r.valueBlock.value[0] instanceof le) {
                        if (a = me(e, t.valueBlock.value[i], r.valueBlock.value[0].value), !1 === a.verified) {
                            if (!0 !== r.valueBlock.value[0].optional) return r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && delete e[r.name]), a;
                            s++
                        }
                        if ("name" in r.valueBlock.value[0] && r.valueBlock.value[0].name.length > 0) {
                            let s = {};
                            s = "local" in r.valueBlock.value[0] && !0 === r.valueBlock.value[0].local ? t : e, void 0 === s[r.valueBlock.value[0].name] && (s[r.valueBlock.value[0].name] = []), s[r.valueBlock.value[0].name].push(t.valueBlock.value[i])
                        }
                    } else if (a = me(e, t.valueBlock.value[i - s], r.valueBlock.value[i]), !1 === a.verified) {
                        if (!0 !== r.valueBlock.value[i].optional) return r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && delete e[r.name]), a;
                        s++
                    }
                    if (!1 === a.verified) {
                        const t = {
                            verified: !1,
                            result: e
                        };
                        return r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && (delete e[r.name], t.name = r.name)), t
                    }
                    return {
                        verified: !0,
                        result: e
                    }
                }
                if ("primitiveSchema" in r && "valueHex" in t.valueBlock) {
                    const s = he(t.valueBlock.valueHex);
                    if (-1 === s.offset) {
                        const t = {
                            verified: !1,
                            result: s.result
                        };
                        return r.hasOwnProperty("name") && (r.name = r.name.replace(/^\s+|\s+$/g, ""), "" !== r.name && (delete e[r.name], t.name = r.name)), t
                    }
                    return me(e, s.result, r.primitiveSchema)
                }
                return {
                    verified: !0,
                    result: e
                }
            }

            function fe(e, t) {
                if (t instanceof Object == !1) return {
                    verified: !1,
                    result: {
                        error: "Wrong ASN.1 schema type"
                    }
                };
                const r = he(e);
                return -1 === r.offset ? {
                    verified: !1,
                    result: r.result
                } : me(r.result, r.result, t)
            }

            function ge(e) {}
        },
        614231: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                AccessDescription: () => K,
                Accuracy: () => U,
                AlgorithmIdentifier: () => n,
                AltName: () => J,
                Attribute: () => c,
                AttributeTypeAndValue: () => j,
                AuthenticatedSafe: () => ht,
                AuthorityKeyIdentifier: () => oe,
                BasicConstraints: () => Q,
                BasicOCSPResponse: () => pt,
                CAVersion: () => ye,
                CRLBag: () => Te,
                CRLDistributionPoints: () => te,
                CertBag: () => De,
                CertID: () => mt,
                Certificate: () => Ae,
                CertificateChainValidationEngine: () => dt,
                CertificatePolicies: () => ae,
                CertificateRevocationList: () => qe,
                CertificateSet: () => Je,
                CertificateTemplate: () => pe,
                CertificationRequest: () => bt,
                ContentInfo: () => $,
                CryptoEngine: () => v,
                DigestInfo: () => vt,
                DistributionPoint: () => ee,
                ECCCMSSharedInfo: () => ct,
                ECPrivateKey: () => u,
                ECPublicKey: () => i,
                EncapsulatedContentInfo: () => wt,
                EncryptedContentInfo: () => g,
                EncryptedData: () => _,
                EnvelopedData: () => ut,
                ExtKeyUsage: () => ce,
                Extension: () => we,
                Extensions: () => Se,
                GeneralName: () => L,
                GeneralNames: () => Z,
                GeneralSubtree: () => X,
                InfoAccess: () => ue,
                IssuerAndSerialNumber: () => Fe,
                IssuingDistributionPoint: () => z,
                KEKIdentifier: () => st,
                KEKRecipientInfo: () => at,
                KeyAgreeRecipientIdentifier: () => Ye,
                KeyAgreeRecipientInfo: () => rt,
                KeyBag: () => St,
                KeyTransRecipientInfo: () => Ge,
                MacData: () => kt,
                MessageImprint: () => At,
                NameConstraints: () => Y,
                OCSPRequest: () => Bt,
                OCSPResponse: () => Nt,
                OriginatorIdentifierOrKey: () => ze,
                OriginatorInfo: () => Me,
                OriginatorPublicKey: () => Qe,
                OtherCertificateFormat: () => Ue,
                OtherKeyAttribute: () => Ze,
                OtherPrimeInfo: () => h,
                OtherRecipientInfo: () => it,
                OtherRevocationInfoFormat: () => $e,
                PBES2Params: () => y,
                PBKDF2Params: () => p,
                PFX: () => jt,
                PKCS8ShroudedKeyBag: () => M,
                PKIStatusInfo: () => Rt,
                PasswordRecipientinfo: () => nt,
                PolicyConstraints: () => le,
                PolicyInformation: () => se,
                PolicyMapping: () => ne,
                PolicyMappings: () => ie,
                PolicyQualifierInfo: () => re,
                PrivateKeyInfo: () => f,
                PrivateKeyUsagePeriod: () => G,
                PublicKeyInfo: () => l,
                QCStatement: () => be,
                QCStatements: () => ve,
                RSAESOAEPParams: () => lt,
                RSAPrivateKey: () => m,
                RSAPublicKey: () => o,
                RSASSAPSSParams: () => d,
                RecipientEncryptedKey: () => et,
                RecipientEncryptedKeys: () => tt,
                RecipientIdentifier: () => We,
                RecipientInfo: () => ot,
                RecipientKeyIdentifier: () => Xe,
                RelativeDistinguishedNames: () => R,
                Request: () => Ct,
                ResponseBytes: () => Vt,
                ResponseData: () => gt,
                RevocationInfoChoices: () => _e,
                RevokedCertificate: () => je,
                SafeBag: () => Le,
                SafeContents: () => Ke,
                SecretBag: () => He,
                Signature: () => Pt,
                SignedAndUnsignedAttributes: () => Et,
                SignedCertificateTimestamp: () => fe,
                SignedCertificateTimestampList: () => ge,
                SignedData: () => Dt,
                SignerInfo: () => xt,
                SingleResponse: () => ft,
                SubjectDirectoryAttributes: () => W,
                TBSRequest: () => It,
                TSTInfo: () => Ot,
                Time: () => F,
                TimeStampReq: () => qt,
                TimeStampResp: () => Tt,
                createCMSECDSASignature: () => B,
                createECDSASignatureFromCMS: () => N,
                getAlgorithmByOID: () => E,
                getAlgorithmParameters: () => P,
                getCrypto: () => A,
                getEngine: () => k,
                getHashAlgorithm: () => x,
                getOIDByAlgorithm: () => I,
                getRandomValues: () => C,
                kdf: () => D,
                kdfWithCounter: () => O,
                setEngine: () => S,
                stringPrep: () => V,
                verifySCTsForCertificate: () => de
            });
            var s = r(865267),
                a = r(929595);
            class n {
                constructor(e = {}) {
                    this.algorithmId = (0, a.getParametersValue)(e, "algorithmId", n.defaultValues("algorithmId")), "algorithmParams" in e && (this.algorithmParams = (0, a.getParametersValue)(e, "algorithmParams", n.defaultValues("algorithmParams"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "algorithmId":
                            return "";
                        case "algorithmParams":
                            return new s.Any;
                        default:
                            throw new Error(`Invalid member name for AlgorithmIdentifier class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "algorithmId":
                            return "" === t;
                        case "algorithmParams":
                            return t instanceof s.Any;
                        default:
                            throw new Error(`Invalid member name for AlgorithmIdentifier class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        optional: t.optional || !1,
                        value: [new s.ObjectIdentifier({
                            name: t.algorithmIdentifier || ""
                        }), new s.Any({
                            name: t.algorithmParams || "",
                            optional: !0
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["algorithm", "params"]);
                    const t = s.compareSchema(e, e, n.schema({
                        names: {
                            algorithmIdentifier: "algorithm",
                            algorithmParams: "params"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for AlgorithmIdentifier");
                    this.algorithmId = t.result.algorithm.valueBlock.toString(), "params" in t.result && (this.algorithmParams = t.result.params)
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.ObjectIdentifier({
                        value: this.algorithmId
                    })), "algorithmParams" in this && this.algorithmParams instanceof s.Any == !1 && e.push(this.algorithmParams), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        algorithmId: this.algorithmId
                    };
                    return "algorithmParams" in this && this.algorithmParams instanceof s.Any == !1 && (e.algorithmParams = this.algorithmParams.toJSON()), e
                }
                isEqual(e) {
                    return e instanceof n != !1 && (this.algorithmId === e.algorithmId && ("algorithmParams" in this ? "algorithmParams" in e && JSON.stringify(this.algorithmParams) === JSON.stringify(e.algorithmParams) : !("algorithmParams" in e)))
                }
            }
            class i {
                constructor(e = {}) {
                    this.x = (0, a.getParametersValue)(e, "x", i.defaultValues("x")), this.y = (0, a.getParametersValue)(e, "y", i.defaultValues("y")), this.namedCurve = (0, a.getParametersValue)(e, "namedCurve", i.defaultValues("namedCurve")), "schema" in e && this.fromSchema(e.schema), "json" in e && this.fromJSON(e.json)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "x":
                        case "y":
                            return new ArrayBuffer(0);
                        case "namedCurve":
                            return "";
                        default:
                            throw new Error(`Invalid member name for ECCPublicKey class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "x":
                        case "y":
                            return (0, a.isEqualBuffer)(t, i.defaultValues(e));
                        case "namedCurve":
                            return "" === t;
                        default:
                            throw new Error(`Invalid member name for ECCPublicKey class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    return new s.RawData
                }
                fromSchema(e) {
                    if (e instanceof ArrayBuffer == !1) throw new Error("Object's schema was not verified against input data for ECPublicKey");
                    if (4 !== new Uint8Array(e)[0]) throw new Error("Object's schema was not verified against input data for ECPublicKey");
                    let t;
                    switch (this.namedCurve) {
                        case "1.2.840.10045.3.1.7":
                            t = 32;
                            break;
                        case "1.3.132.0.34":
                            t = 48;
                            break;
                        case "1.3.132.0.35":
                            t = 66;
                            break;
                        default:
                            throw new Error(`Incorrect curve OID: ${this.namedCurve}`)
                    }
                    if (e.byteLength !== 2 * t + 1) throw new Error("Object's schema was not verified against input data for ECPublicKey");
                    this.x = e.slice(1, t + 1), this.y = e.slice(1 + t, 2 * t + 1)
                }
                toSchema() {
                    return new s.RawData({
                        data: (0, a.utilConcatBuf)(new Uint8Array([4]).buffer, this.x, this.y)
                    })
                }
                toJSON() {
                    let e = "";
                    switch (this.namedCurve) {
                        case "1.2.840.10045.3.1.7":
                            e = "P-256";
                            break;
                        case "1.3.132.0.34":
                            e = "P-384";
                            break;
                        case "1.3.132.0.35":
                            e = "P-521"
                    }
                    return {
                        crv: e,
                        x: (0, a.toBase64)((0, a.arrayBufferToString)(this.x), !0, !0, !1),
                        y: (0, a.toBase64)((0, a.arrayBufferToString)(this.y), !0, !0, !1)
                    }
                }
                fromJSON(e) {
                    let t = 0;
                    if (!("crv" in e)) throw new Error('Absent mandatory parameter "crv"');
                    switch (e.crv.toUpperCase()) {
                        case "P-256":
                            this.namedCurve = "1.2.840.10045.3.1.7", t = 32;
                            break;
                        case "P-384":
                            this.namedCurve = "1.3.132.0.34", t = 48;
                            break;
                        case "P-521":
                            this.namedCurve = "1.3.132.0.35", t = 66
                    }
                    if (!("x" in e)) throw new Error('Absent mandatory parameter "x"'); {
                        const r = (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.x, !0));
                        if (r.byteLength < t) {
                            this.x = new ArrayBuffer(t);
                            const e = new Uint8Array(this.x),
                                s = new Uint8Array(r);
                            e.set(s, 1)
                        } else this.x = r.slice(0, t)
                    }
                    if (!("y" in e)) throw new Error('Absent mandatory parameter "y"'); {
                        const r = (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.y, !0));
                        if (r.byteLength < t) {
                            this.y = new ArrayBuffer(t);
                            const e = new Uint8Array(this.y),
                                s = new Uint8Array(r);
                            e.set(s, 1)
                        } else this.y = r.slice(0, t)
                    }
                }
            }
            class o {
                constructor(e = {}) {
                    this.modulus = (0, a.getParametersValue)(e, "modulus", o.defaultValues("modulus")), this.publicExponent = (0, a.getParametersValue)(e, "publicExponent", o.defaultValues("publicExponent")), "schema" in e && this.fromSchema(e.schema), "json" in e && this.fromJSON(e.json)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "modulus":
                        case "publicExponent":
                            return new s.Integer;
                        default:
                            throw new Error(`Invalid member name for RSAPublicKey class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.modulus || ""
                        }), new s.Integer({
                            name: t.publicExponent || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["modulus", "publicExponent"]);
                    const t = s.compareSchema(e, e, o.schema({
                        names: {
                            modulus: "modulus",
                            publicExponent: "publicExponent"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for RSAPublicKey");
                    this.modulus = t.result.modulus.convertFromDER(256), this.publicExponent = t.result.publicExponent
                }
                toSchema() {
                    return new s.Sequence({
                        value: [this.modulus.convertToDER(), this.publicExponent]
                    })
                }
                toJSON() {
                    return {
                        n: (0, a.toBase64)((0, a.arrayBufferToString)(this.modulus.valueBlock.valueHex), !0, !0, !0),
                        e: (0, a.toBase64)((0, a.arrayBufferToString)(this.publicExponent.valueBlock.valueHex), !0, !0, !0)
                    }
                }
                fromJSON(e) {
                    if (!("n" in e)) throw new Error('Absent mandatory parameter "n"'); {
                        const t = (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.n, !0));
                        this.modulus = new s.Integer({
                            valueHex: t.slice(0, Math.pow(2, (0, a.nearestPowerOf2)(t.byteLength)))
                        })
                    }
                    if (!("e" in e)) throw new Error('Absent mandatory parameter "e"');
                    this.publicExponent = new s.Integer({
                        valueHex: (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.e, !0)).slice(0, 3)
                    })
                }
            }
            class l {
                constructor(e = {}) {
                    this.algorithm = (0, a.getParametersValue)(e, "algorithm", l.defaultValues("algorithm")), this.subjectPublicKey = (0, a.getParametersValue)(e, "subjectPublicKey", l.defaultValues("subjectPublicKey")), "parsedKey" in e && (this.parsedKey = (0, a.getParametersValue)(e, "parsedKey", l.defaultValues("parsedKey"))), "schema" in e && this.fromSchema(e.schema), "json" in e && this.fromJSON(e.json)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "algorithm":
                            return new n;
                        case "subjectPublicKey":
                            return new s.BitString;
                        default:
                            throw new Error(`Invalid member name for PublicKeyInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [n.schema(t.algorithm || {}), new s.BitString({
                            name: t.subjectPublicKey || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["algorithm", "subjectPublicKey"]);
                    const t = s.compareSchema(e, e, l.schema({
                        names: {
                            algorithm: {
                                names: {
                                    blockName: "algorithm"
                                }
                            },
                            subjectPublicKey: "subjectPublicKey"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PublicKeyInfo");
                    switch (this.algorithm = new n({
                            schema: t.result.algorithm
                        }), this.subjectPublicKey = t.result.subjectPublicKey, this.algorithm.algorithmId) {
                        case "1.2.840.10045.2.1":
                            if ("algorithmParams" in this.algorithm && this.algorithm.algorithmParams.constructor.blockName() === s.ObjectIdentifier.blockName()) try {
                                this.parsedKey = new i({
                                    namedCurve: this.algorithm.algorithmParams.valueBlock.toString(),
                                    schema: this.subjectPublicKey.valueBlock.valueHex
                                })
                            } catch (e) {}
                            break;
                        case "1.2.840.113549.1.1.1": {
                            const e = s.fromBER(this.subjectPublicKey.valueBlock.valueHex);
                            if (-1 !== e.offset) try {
                                this.parsedKey = new o({
                                    schema: e.result
                                })
                            } catch (e) {}
                        }
                    }
                }
                toSchema() {
                    return new s.Sequence({
                        value: [this.algorithm.toSchema(), this.subjectPublicKey]
                    })
                }
                toJSON() {
                    if ("parsedKey" in this == !1) return {
                        algorithm: this.algorithm.toJSON(),
                        subjectPublicKey: this.subjectPublicKey.toJSON()
                    };
                    const e = {};
                    switch (this.algorithm.algorithmId) {
                        case "1.2.840.10045.2.1":
                            e.kty = "EC";
                            break;
                        case "1.2.840.113549.1.1.1":
                            e.kty = "RSA"
                    }
                    const t = this.parsedKey.toJSON();
                    for (const r of Object.keys(t)) e[r] = t[r];
                    return e
                }
                fromJSON(e) {
                    if ("kty" in e) {
                        switch (e.kty.toUpperCase()) {
                            case "EC":
                                this.parsedKey = new i({
                                    json: e
                                }), this.algorithm = new n({
                                    algorithmId: "1.2.840.10045.2.1",
                                    algorithmParams: new s.ObjectIdentifier({
                                        value: this.parsedKey.namedCurve
                                    })
                                });
                                break;
                            case "RSA":
                                this.parsedKey = new o({
                                    json: e
                                }), this.algorithm = new n({
                                    algorithmId: "1.2.840.113549.1.1.1",
                                    algorithmParams: new s.Null
                                });
                                break;
                            default:
                                throw new Error(`Invalid value for "kty" parameter: ${e.kty}`)
                        }
                        this.subjectPublicKey = new s.BitString({
                            valueHex: this.parsedKey.toSchema().toBER(!1)
                        })
                    }
                }
                importKey(e) {
                    let t = Promise.resolve();
                    const r = this;
                    if (void 0 === e) return Promise.reject("Need to provide publicKey input parameter");
                    const a = A();
                    return void 0 === a ? Promise.reject("Unable to create WebCrypto object") : (t = t.then((() => a.exportKey("spki", e))), t = t.then((e => {
                        const t = s.fromBER(e);
                        try {
                            r.fromSchema(t.result)
                        } catch (e) {
                            return Promise.reject("Error during initializing object from schema")
                        }
                    }), (e => Promise.reject(`Error during exporting public key: ${e}`))), t)
                }
            }
            class c {
                constructor(e = {}) {
                    this.type = (0, a.getParametersValue)(e, "type", c.defaultValues("type")), this.values = (0, a.getParametersValue)(e, "values", c.defaultValues("values")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "type":
                            return "";
                        case "values":
                            return [];
                        default:
                            throw new Error(`Invalid member name for Attribute class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "type":
                            return "" === t;
                        case "values":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for Attribute class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.type || ""
                        }), new s.Set({
                            name: t.setName || "",
                            value: [new s.Repeated({
                                name: t.values || "",
                                value: new s.Any
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["type", "values"]);
                    const t = s.compareSchema(e, e, c.schema({
                        names: {
                            type: "type",
                            values: "values"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for Attribute");
                    this.type = t.result.type.valueBlock.toString(), this.values = t.result.values
                }
                toSchema() {
                    return new s.Sequence({
                        value: [new s.ObjectIdentifier({
                            value: this.type
                        }), new s.Set({
                            value: this.values
                        })]
                    })
                }
                toJSON() {
                    return {
                        type: this.type,
                        values: Array.from(this.values, (e => e.toJSON()))
                    }
                }
            }
            class u {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", u.defaultValues("version")), this.privateKey = (0, a.getParametersValue)(e, "privateKey", u.defaultValues("privateKey")), "namedCurve" in e && (this.namedCurve = (0, a.getParametersValue)(e, "namedCurve", u.defaultValues("namedCurve"))), "publicKey" in e && (this.publicKey = (0, a.getParametersValue)(e, "publicKey", u.defaultValues("publicKey"))), "schema" in e && this.fromSchema(e.schema), "json" in e && this.fromJSON(e.json)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 1;
                        case "privateKey":
                            return new s.OctetString;
                        case "namedCurve":
                            return "";
                        case "publicKey":
                            return new i;
                        default:
                            throw new Error(`Invalid member name for ECCPrivateKey class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "version":
                            return t === u.defaultValues(e);
                        case "privateKey":
                            return t.isEqual(u.defaultValues(e));
                        case "namedCurve":
                            return "" === t;
                        case "publicKey":
                            return i.compareWithDefault("namedCurve", t.namedCurve) && i.compareWithDefault("x", t.x) && i.compareWithDefault("y", t.y);
                        default:
                            throw new Error(`Invalid member name for ECCPrivateKey class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.version || ""
                        }), new s.OctetString({
                            name: t.privateKey || ""
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.ObjectIdentifier({
                                name: t.namedCurve || ""
                            })]
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [new s.BitString({
                                name: t.publicKey || ""
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["version", "privateKey", "namedCurve", "publicKey"]);
                    const t = s.compareSchema(e, e, u.schema({
                        names: {
                            version: "version",
                            privateKey: "privateKey",
                            namedCurve: "namedCurve",
                            publicKey: "publicKey"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for ECPrivateKey");
                    if (this.version = t.result.version.valueBlock.valueDec, this.privateKey = t.result.privateKey, "namedCurve" in t.result && (this.namedCurve = t.result.namedCurve.valueBlock.toString()), "publicKey" in t.result) {
                        const e = {
                            schema: t.result.publicKey.valueBlock.valueHex
                        };
                        "namedCurve" in this && (e.namedCurve = this.namedCurve), this.publicKey = new i(e)
                    }
                }
                toSchema() {
                    const e = [new s.Integer({
                        value: this.version
                    }), this.privateKey];
                    return "namedCurve" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [new s.ObjectIdentifier({
                            value: this.namedCurve
                        })]
                    })), "publicKey" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: [new s.BitString({
                            valueHex: this.publicKey.toSchema().toBER(!1)
                        })]
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    if ("namedCurve" in this == !1 || u.compareWithDefault("namedCurve", this.namedCurve)) throw new Error('Not enough information for making JSON: absent "namedCurve" value');
                    let e = "";
                    switch (this.namedCurve) {
                        case "1.2.840.10045.3.1.7":
                            e = "P-256";
                            break;
                        case "1.3.132.0.34":
                            e = "P-384";
                            break;
                        case "1.3.132.0.35":
                            e = "P-521"
                    }
                    const t = {
                        crv: e,
                        d: (0, a.toBase64)((0, a.arrayBufferToString)(this.privateKey.valueBlock.valueHex), !0, !0, !1)
                    };
                    if ("publicKey" in this) {
                        const e = this.publicKey.toJSON();
                        t.x = e.x, t.y = e.y
                    }
                    return t
                }
                fromJSON(e) {
                    let t = 0;
                    if (!("crv" in e)) throw new Error('Absent mandatory parameter "crv"');
                    switch (e.crv.toUpperCase()) {
                        case "P-256":
                            this.namedCurve = "1.2.840.10045.3.1.7", t = 32;
                            break;
                        case "P-384":
                            this.namedCurve = "1.3.132.0.34", t = 48;
                            break;
                        case "P-521":
                            this.namedCurve = "1.3.132.0.35", t = 66
                    }
                    if (!("d" in e)) throw new Error('Absent mandatory parameter "d"'); {
                        const r = (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.d, !0));
                        if (r.byteLength < t) {
                            const e = new ArrayBuffer(t),
                                a = new Uint8Array(e),
                                n = new Uint8Array(r);
                            a.set(n, 1), this.privateKey = new s.OctetString({
                                valueHex: e
                            })
                        } else this.privateKey = new s.OctetString({
                            valueHex: r.slice(0, t)
                        })
                    }
                    "x" in e && "y" in e && (this.publicKey = new i({
                        json: e
                    }))
                }
            }
            class h {
                constructor(e = {}) {
                    this.prime = (0, a.getParametersValue)(e, "prime", h.defaultValues("prime")), this.exponent = (0, a.getParametersValue)(e, "exponent", h.defaultValues("exponent")), this.coefficient = (0, a.getParametersValue)(e, "coefficient", h.defaultValues("coefficient")), "schema" in e && this.fromSchema(e.schema), "json" in e && this.fromJSON(e.json)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "prime":
                        case "exponent":
                        case "coefficient":
                            return new s.Integer;
                        default:
                            throw new Error(`Invalid member name for OtherPrimeInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.prime || ""
                        }), new s.Integer({
                            name: t.exponent || ""
                        }), new s.Integer({
                            name: t.coefficient || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["prime", "exponent", "coefficient"]);
                    const t = s.compareSchema(e, e, h.schema({
                        names: {
                            prime: "prime",
                            exponent: "exponent",
                            coefficient: "coefficient"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for OtherPrimeInfo");
                    this.prime = t.result.prime.convertFromDER(), this.exponent = t.result.exponent.convertFromDER(), this.coefficient = t.result.coefficient.convertFromDER()
                }
                toSchema() {
                    return new s.Sequence({
                        value: [this.prime.convertToDER(), this.exponent.convertToDER(), this.coefficient.convertToDER()]
                    })
                }
                toJSON() {
                    return {
                        r: (0, a.toBase64)((0, a.arrayBufferToString)(this.prime.valueBlock.valueHex), !0, !0),
                        d: (0, a.toBase64)((0, a.arrayBufferToString)(this.exponent.valueBlock.valueHex), !0, !0),
                        t: (0, a.toBase64)((0, a.arrayBufferToString)(this.coefficient.valueBlock.valueHex), !0, !0)
                    }
                }
                fromJSON(e) {
                    if (!("r" in e)) throw new Error('Absent mandatory parameter "r"');
                    if (this.prime = new s.Integer({
                            valueHex: (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.r, !0))
                        }), !("d" in e)) throw new Error('Absent mandatory parameter "d"');
                    if (this.exponent = new s.Integer({
                            valueHex: (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.d, !0))
                        }), !("t" in e)) throw new Error('Absent mandatory parameter "t"');
                    this.coefficient = new s.Integer({
                        valueHex: (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.t, !0))
                    })
                }
            }
            class m {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", m.defaultValues("version")), this.modulus = (0, a.getParametersValue)(e, "modulus", m.defaultValues("modulus")), this.publicExponent = (0, a.getParametersValue)(e, "publicExponent", m.defaultValues("publicExponent")), this.privateExponent = (0, a.getParametersValue)(e, "privateExponent", m.defaultValues("privateExponent")), this.prime1 = (0, a.getParametersValue)(e, "prime1", m.defaultValues("prime1")), this.prime2 = (0, a.getParametersValue)(e, "prime2", m.defaultValues("prime2")), this.exponent1 = (0, a.getParametersValue)(e, "exponent1", m.defaultValues("exponent1")), this.exponent2 = (0, a.getParametersValue)(e, "exponent2", m.defaultValues("exponent2")), this.coefficient = (0, a.getParametersValue)(e, "coefficient", m.defaultValues("coefficient")), "otherPrimeInfos" in e && (this.otherPrimeInfos = (0, a.getParametersValue)(e, "otherPrimeInfos", m.defaultValues("otherPrimeInfos"))), "schema" in e && this.fromSchema(e.schema), "json" in e && this.fromJSON(e.json)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 0;
                        case "modulus":
                        case "publicExponent":
                        case "privateExponent":
                        case "prime1":
                        case "prime2":
                        case "exponent1":
                        case "exponent2":
                        case "coefficient":
                            return new s.Integer;
                        case "otherPrimeInfos":
                            return [];
                        default:
                            throw new Error(`Invalid member name for RSAPrivateKey class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.version || ""
                        }), new s.Integer({
                            name: t.modulus || ""
                        }), new s.Integer({
                            name: t.publicExponent || ""
                        }), new s.Integer({
                            name: t.privateExponent || ""
                        }), new s.Integer({
                            name: t.prime1 || ""
                        }), new s.Integer({
                            name: t.prime2 || ""
                        }), new s.Integer({
                            name: t.exponent1 || ""
                        }), new s.Integer({
                            name: t.exponent2 || ""
                        }), new s.Integer({
                            name: t.coefficient || ""
                        }), new s.Sequence({
                            optional: !0,
                            value: [new s.Repeated({
                                name: t.otherPrimeInfosName || "",
                                value: h.schema(t.otherPrimeInfo || {})
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["version", "modulus", "publicExponent", "privateExponent", "prime1", "prime2", "exponent1", "exponent2", "coefficient", "otherPrimeInfos"]);
                    const t = s.compareSchema(e, e, m.schema({
                        names: {
                            version: "version",
                            modulus: "modulus",
                            publicExponent: "publicExponent",
                            privateExponent: "privateExponent",
                            prime1: "prime1",
                            prime2: "prime2",
                            exponent1: "exponent1",
                            exponent2: "exponent2",
                            coefficient: "coefficient",
                            otherPrimeInfo: {
                                names: {
                                    blockName: "otherPrimeInfos"
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for RSAPrivateKey");
                    this.version = t.result.version.valueBlock.valueDec, this.modulus = t.result.modulus.convertFromDER(256), this.publicExponent = t.result.publicExponent, this.privateExponent = t.result.privateExponent.convertFromDER(256), this.prime1 = t.result.prime1.convertFromDER(128), this.prime2 = t.result.prime2.convertFromDER(128), this.exponent1 = t.result.exponent1.convertFromDER(128), this.exponent2 = t.result.exponent2.convertFromDER(128), this.coefficient = t.result.coefficient.convertFromDER(128), "otherPrimeInfos" in t.result && (this.otherPrimeInfos = Array.from(t.result.otherPrimeInfos, (e => new h({
                        schema: e
                    }))))
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.Integer({
                        value: this.version
                    })), e.push(this.modulus.convertToDER()), e.push(this.publicExponent), e.push(this.privateExponent.convertToDER()), e.push(this.prime1.convertToDER()), e.push(this.prime2.convertToDER()), e.push(this.exponent1.convertToDER()), e.push(this.exponent2.convertToDER()), e.push(this.coefficient.convertToDER()), "otherPrimeInfos" in this && e.push(new s.Sequence({
                        value: Array.from(this.otherPrimeInfos, (e => e.toSchema()))
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        n: (0, a.toBase64)((0, a.arrayBufferToString)(this.modulus.valueBlock.valueHex), !0, !0, !0),
                        e: (0, a.toBase64)((0, a.arrayBufferToString)(this.publicExponent.valueBlock.valueHex), !0, !0, !0),
                        d: (0, a.toBase64)((0, a.arrayBufferToString)(this.privateExponent.valueBlock.valueHex), !0, !0, !0),
                        p: (0, a.toBase64)((0, a.arrayBufferToString)(this.prime1.valueBlock.valueHex), !0, !0, !0),
                        q: (0, a.toBase64)((0, a.arrayBufferToString)(this.prime2.valueBlock.valueHex), !0, !0, !0),
                        dp: (0, a.toBase64)((0, a.arrayBufferToString)(this.exponent1.valueBlock.valueHex), !0, !0, !0),
                        dq: (0, a.toBase64)((0, a.arrayBufferToString)(this.exponent2.valueBlock.valueHex), !0, !0, !0),
                        qi: (0, a.toBase64)((0, a.arrayBufferToString)(this.coefficient.valueBlock.valueHex), !0, !0, !0)
                    };
                    return "otherPrimeInfos" in this && (e.oth = Array.from(this.otherPrimeInfos, (e => e.toJSON()))), e
                }
                fromJSON(e) {
                    if (!("n" in e)) throw new Error('Absent mandatory parameter "n"');
                    if (this.modulus = new s.Integer({
                            valueHex: (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.n, !0, !0))
                        }), !("e" in e)) throw new Error('Absent mandatory parameter "e"');
                    if (this.publicExponent = new s.Integer({
                            valueHex: (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.e, !0, !0))
                        }), !("d" in e)) throw new Error('Absent mandatory parameter "d"');
                    if (this.privateExponent = new s.Integer({
                            valueHex: (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.d, !0, !0))
                        }), !("p" in e)) throw new Error('Absent mandatory parameter "p"');
                    if (this.prime1 = new s.Integer({
                            valueHex: (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.p, !0, !0))
                        }), !("q" in e)) throw new Error('Absent mandatory parameter "q"');
                    if (this.prime2 = new s.Integer({
                            valueHex: (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.q, !0, !0))
                        }), !("dp" in e)) throw new Error('Absent mandatory parameter "dp"');
                    if (this.exponent1 = new s.Integer({
                            valueHex: (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.dp, !0, !0))
                        }), !("dq" in e)) throw new Error('Absent mandatory parameter "dq"');
                    if (this.exponent2 = new s.Integer({
                            valueHex: (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.dq, !0, !0))
                        }), !("qi" in e)) throw new Error('Absent mandatory parameter "qi"');
                    this.coefficient = new s.Integer({
                        valueHex: (0, a.stringToArrayBuffer)((0, a.fromBase64)(e.qi, !0, !0))
                    }), "oth" in e && (this.otherPrimeInfos = Array.from(e.oth, (e => new h({
                        json: e
                    }))))
                }
            }
            class f {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", f.defaultValues("version")), this.privateKeyAlgorithm = (0, a.getParametersValue)(e, "privateKeyAlgorithm", f.defaultValues("privateKeyAlgorithm")), this.privateKey = (0, a.getParametersValue)(e, "privateKey", f.defaultValues("privateKey")), "attributes" in e && (this.attributes = (0, a.getParametersValue)(e, "attributes", f.defaultValues("attributes"))), "parsedKey" in e && (this.parsedKey = (0, a.getParametersValue)(e, "parsedKey", f.defaultValues("parsedKey"))), "schema" in e && this.fromSchema(e.schema), "json" in e && this.fromJSON(e.json)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 0;
                        case "privateKeyAlgorithm":
                            return new n;
                        case "privateKey":
                            return new s.OctetString;
                        case "attributes":
                            return [];
                        case "parsedKey":
                            return {};
                        default:
                            throw new Error(`Invalid member name for PrivateKeyInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.version || ""
                        }), n.schema(t.privateKeyAlgorithm || {}), new s.OctetString({
                            name: t.privateKey || ""
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Repeated({
                                name: t.attributes || "",
                                value: c.schema()
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["version", "privateKeyAlgorithm", "privateKey", "attributes"]);
                    const t = s.compareSchema(e, e, f.schema({
                        names: {
                            version: "version",
                            privateKeyAlgorithm: {
                                names: {
                                    blockName: "privateKeyAlgorithm"
                                }
                            },
                            privateKey: "privateKey",
                            attributes: "attributes"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PrivateKeyInfo");
                    switch (this.version = t.result.version.valueBlock.valueDec, this.privateKeyAlgorithm = new n({
                            schema: t.result.privateKeyAlgorithm
                        }), this.privateKey = t.result.privateKey, "attributes" in t.result && (this.attributes = Array.from(t.result.attributes, (e => new c({
                            schema: e
                        })))), this.privateKeyAlgorithm.algorithmId) {
                        case "1.2.840.113549.1.1.1": {
                            const e = s.fromBER(this.privateKey.valueBlock.valueHex); - 1 !== e.offset && (this.parsedKey = new m({
                                schema: e.result
                            }))
                        }
                        break;
                    case "1.2.840.10045.2.1":
                        if ("algorithmParams" in this.privateKeyAlgorithm && this.privateKeyAlgorithm.algorithmParams instanceof s.ObjectIdentifier) {
                            const e = s.fromBER(this.privateKey.valueBlock.valueHex); - 1 !== e.offset && (this.parsedKey = new u({
                                namedCurve: this.privateKeyAlgorithm.algorithmParams.valueBlock.toString(),
                                schema: e.result
                            }))
                        }
                    }
                }
                toSchema() {
                    const e = [new s.Integer({
                        value: this.version
                    }), this.privateKeyAlgorithm.toSchema(), this.privateKey];
                    return "attributes" in this && e.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: Array.from(this.attributes, (e => e.toSchema()))
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    if ("parsedKey" in this == !1) {
                        const e = {
                            version: this.version,
                            privateKeyAlgorithm: this.privateKeyAlgorithm.toJSON(),
                            privateKey: this.privateKey.toJSON()
                        };
                        return "attributes" in this && (e.attributes = Array.from(this.attributes, (e => e.toJSON()))), e
                    }
                    const e = {};
                    switch (this.privateKeyAlgorithm.algorithmId) {
                        case "1.2.840.10045.2.1":
                            e.kty = "EC";
                            break;
                        case "1.2.840.113549.1.1.1":
                            e.kty = "RSA"
                    }
                    const t = this.parsedKey.toJSON();
                    for (const r of Object.keys(t)) e[r] = t[r];
                    return e
                }
                fromJSON(e) {
                    if ("kty" in e) {
                        switch (e.kty.toUpperCase()) {
                            case "EC":
                                this.parsedKey = new u({
                                    json: e
                                }), this.privateKeyAlgorithm = new n({
                                    algorithmId: "1.2.840.10045.2.1",
                                    algorithmParams: new s.ObjectIdentifier({
                                        value: this.parsedKey.namedCurve
                                    })
                                });
                                break;
                            case "RSA":
                                this.parsedKey = new m({
                                    json: e
                                }), this.privateKeyAlgorithm = new n({
                                    algorithmId: "1.2.840.113549.1.1.1",
                                    algorithmParams: new s.Null
                                });
                                break;
                            default:
                                throw new Error(`Invalid value for "kty" parameter: ${e.kty}`)
                        }
                        this.privateKey = new s.OctetString({
                            valueHex: this.parsedKey.toSchema().toBER(!1)
                        })
                    }
                }
            }
            class g {
                constructor(e = {}) {
                    if (this.contentType = (0, a.getParametersValue)(e, "contentType", g.defaultValues("contentType")), this.contentEncryptionAlgorithm = (0, a.getParametersValue)(e, "contentEncryptionAlgorithm", g.defaultValues("contentEncryptionAlgorithm")), "encryptedContent" in e && (this.encryptedContent = e.encryptedContent, 1 === this.encryptedContent.idBlock.tagClass && 4 === this.encryptedContent.idBlock.tagNumber && !1 === this.encryptedContent.idBlock.isConstructed)) {
                        const e = new s.OctetString({
                            idBlock: {
                                isConstructed: !0
                            },
                            isConstructed: !0
                        });
                        let t = 0,
                            r = this.encryptedContent.valueBlock.valueHex.byteLength;
                        for (; r > 0;) {
                            const a = new Uint8Array(this.encryptedContent.valueBlock.valueHex, t, t + 1024 > this.encryptedContent.valueBlock.valueHex.byteLength ? this.encryptedContent.valueBlock.valueHex.byteLength - t : 1024),
                                n = new ArrayBuffer(a.length),
                                i = new Uint8Array(n);
                            for (let e = 0; e < i.length; e++) i[e] = a[e];
                            e.valueBlock.value.push(new s.OctetString({
                                valueHex: n
                            })), r -= a.length, t += a.length
                        }
                        this.encryptedContent = e
                    }
                    "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "contentType":
                            return "";
                        case "contentEncryptionAlgorithm":
                            return new n;
                        case "encryptedContent":
                            return new s.OctetString;
                        default:
                            throw new Error(`Invalid member name for EncryptedContentInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "contentType":
                            return "" === t;
                        case "contentEncryptionAlgorithm":
                            return "" === t.algorithmId && "algorithmParams" in t == !1;
                        case "encryptedContent":
                            return t.isEqual(g.defaultValues(e));
                        default:
                            throw new Error(`Invalid member name for EncryptedContentInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.contentType || ""
                        }), n.schema(t.contentEncryptionAlgorithm || {}), new s.Choice({
                            value: [new s.Constructed({
                                name: t.encryptedContent || "",
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 0
                                },
                                value: [new s.Repeated({
                                    value: new s.OctetString
                                })]
                            }), new s.Primitive({
                                name: t.encryptedContent || "",
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 0
                                }
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["contentType", "contentEncryptionAlgorithm", "encryptedContent"]);
                    const t = s.compareSchema(e, e, g.schema({
                        names: {
                            contentType: "contentType",
                            contentEncryptionAlgorithm: {
                                names: {
                                    blockName: "contentEncryptionAlgorithm"
                                }
                            },
                            encryptedContent: "encryptedContent"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for EncryptedContentInfo");
                    this.contentType = t.result.contentType.valueBlock.toString(), this.contentEncryptionAlgorithm = new n({
                        schema: t.result.contentEncryptionAlgorithm
                    }), "encryptedContent" in t.result && (this.encryptedContent = t.result.encryptedContent, this.encryptedContent.idBlock.tagClass = 1, this.encryptedContent.idBlock.tagNumber = 4)
                }
                toSchema() {
                    const e = {
                            isIndefiniteForm: !1
                        },
                        t = [];
                    if (t.push(new s.ObjectIdentifier({
                            value: this.contentType
                        })), t.push(this.contentEncryptionAlgorithm.toSchema()), "encryptedContent" in this) {
                        e.isIndefiniteForm = this.encryptedContent.idBlock.isConstructed;
                        const r = this.encryptedContent;
                        r.idBlock.tagClass = 3, r.idBlock.tagNumber = 0, r.lenBlock.isIndefiniteForm = this.encryptedContent.idBlock.isConstructed, t.push(r)
                    }
                    return new s.Sequence({
                        lenBlock: e,
                        value: t
                    })
                }
                toJSON() {
                    const e = {
                        contentType: this.contentType,
                        contentEncryptionAlgorithm: this.contentEncryptionAlgorithm.toJSON()
                    };
                    return "encryptedContent" in this && (e.encryptedContent = this.encryptedContent.toJSON()), e
                }
            }
            class d {
                constructor(e = {}) {
                    this.hashAlgorithm = (0, a.getParametersValue)(e, "hashAlgorithm", d.defaultValues("hashAlgorithm")), this.maskGenAlgorithm = (0, a.getParametersValue)(e, "maskGenAlgorithm", d.defaultValues("maskGenAlgorithm")), this.saltLength = (0, a.getParametersValue)(e, "saltLength", d.defaultValues("saltLength")), this.trailerField = (0, a.getParametersValue)(e, "trailerField", d.defaultValues("trailerField")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "hashAlgorithm":
                            return new n({
                                algorithmId: "1.3.14.3.2.26",
                                algorithmParams: new s.Null
                            });
                        case "maskGenAlgorithm":
                            return new n({
                                algorithmId: "1.2.840.113549.1.1.8",
                                algorithmParams: new n({
                                    algorithmId: "1.3.14.3.2.26",
                                    algorithmParams: new s.Null
                                }).toSchema()
                            });
                        case "saltLength":
                            return 20;
                        case "trailerField":
                            return 1;
                        default:
                            throw new Error(`Invalid member name for RSASSAPSSParams class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            optional: !0,
                            value: [n.schema(t.hashAlgorithm || {})]
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            optional: !0,
                            value: [n.schema(t.maskGenAlgorithm || {})]
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            },
                            optional: !0,
                            value: [new s.Integer({
                                name: t.saltLength || ""
                            })]
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 3
                            },
                            optional: !0,
                            value: [new s.Integer({
                                name: t.trailerField || ""
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["hashAlgorithm", "maskGenAlgorithm", "saltLength", "trailerField"]);
                    const t = s.compareSchema(e, e, d.schema({
                        names: {
                            hashAlgorithm: {
                                names: {
                                    blockName: "hashAlgorithm"
                                }
                            },
                            maskGenAlgorithm: {
                                names: {
                                    blockName: "maskGenAlgorithm"
                                }
                            },
                            saltLength: "saltLength",
                            trailerField: "trailerField"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for RSASSAPSSParams");
                    "hashAlgorithm" in t.result && (this.hashAlgorithm = new n({
                        schema: t.result.hashAlgorithm
                    })), "maskGenAlgorithm" in t.result && (this.maskGenAlgorithm = new n({
                        schema: t.result.maskGenAlgorithm
                    })), "saltLength" in t.result && (this.saltLength = t.result.saltLength.valueBlock.valueDec), "trailerField" in t.result && (this.trailerField = t.result.trailerField.valueBlock.valueDec)
                }
                toSchema() {
                    const e = [];
                    return this.hashAlgorithm.isEqual(d.defaultValues("hashAlgorithm")) || e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [this.hashAlgorithm.toSchema()]
                    })), this.maskGenAlgorithm.isEqual(d.defaultValues("maskGenAlgorithm")) || e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: [this.maskGenAlgorithm.toSchema()]
                    })), this.saltLength !== d.defaultValues("saltLength") && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 2
                        },
                        value: [new s.Integer({
                            value: this.saltLength
                        })]
                    })), this.trailerField !== d.defaultValues("trailerField") && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 3
                        },
                        value: [new s.Integer({
                            value: this.trailerField
                        })]
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {};
                    return this.hashAlgorithm.isEqual(d.defaultValues("hashAlgorithm")) || (e.hashAlgorithm = this.hashAlgorithm.toJSON()), this.maskGenAlgorithm.isEqual(d.defaultValues("maskGenAlgorithm")) || (e.maskGenAlgorithm = this.maskGenAlgorithm.toJSON()), this.saltLength !== d.defaultValues("saltLength") && (e.saltLength = this.saltLength), this.trailerField !== d.defaultValues("trailerField") && (e.trailerField = this.trailerField), e
                }
            }
            class p {
                constructor(e = {}) {
                    this.salt = (0, a.getParametersValue)(e, "salt", p.defaultValues("salt")), this.iterationCount = (0, a.getParametersValue)(e, "iterationCount", p.defaultValues("iterationCount")), "keyLength" in e && (this.keyLength = (0, a.getParametersValue)(e, "keyLength", p.defaultValues("keyLength"))), "prf" in e && (this.prf = (0, a.getParametersValue)(e, "prf", p.defaultValues("prf"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "salt":
                            return {};
                        case "iterationCount":
                            return -1;
                        case "keyLength":
                            return 0;
                        case "prf":
                            return new n({
                                algorithmId: "1.3.14.3.2.26",
                                algorithmParams: new s.Null
                            });
                        default:
                            throw new Error(`Invalid member name for PBKDF2Params class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Choice({
                            value: [new s.OctetString({
                                name: t.saltPrimitive || ""
                            }), n.schema(t.saltConstructed || {})]
                        }), new s.Integer({
                            name: t.iterationCount || ""
                        }), new s.Integer({
                            name: t.keyLength || "",
                            optional: !0
                        }), n.schema(t.prf || {
                            names: {
                                optional: !0
                            }
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["salt", "iterationCount", "keyLength", "prf"]);
                    const t = s.compareSchema(e, e, p.schema({
                        names: {
                            saltPrimitive: "salt",
                            saltConstructed: {
                                names: {
                                    blockName: "salt"
                                }
                            },
                            iterationCount: "iterationCount",
                            keyLength: "keyLength",
                            prf: {
                                names: {
                                    blockName: "prf",
                                    optional: !0
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PBKDF2Params");
                    this.salt = t.result.salt, this.iterationCount = t.result.iterationCount.valueBlock.valueDec, "keyLength" in t.result && (this.keyLength = t.result.keyLength.valueBlock.valueDec), "prf" in t.result && (this.prf = new n({
                        schema: t.result.prf
                    }))
                }
                toSchema() {
                    const e = [];
                    return e.push(this.salt), e.push(new s.Integer({
                        value: this.iterationCount
                    })), "keyLength" in this && p.defaultValues("keyLength") !== this.keyLength && e.push(new s.Integer({
                        value: this.keyLength
                    })), "prf" in this && !1 === p.defaultValues("prf").isEqual(this.prf) && e.push(this.prf.toSchema()), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        salt: this.salt.toJSON(),
                        iterationCount: this.iterationCount
                    };
                    return "keyLength" in this && p.defaultValues("keyLength") !== this.keyLength && (e.keyLength = this.keyLength), "prf" in this && !1 === p.defaultValues("prf").isEqual(this.prf) && (e.prf = this.prf.toJSON()), e
                }
            }
            class y {
                constructor(e = {}) {
                    this.keyDerivationFunc = (0, a.getParametersValue)(e, "keyDerivationFunc", y.defaultValues("keyDerivationFunc")), this.encryptionScheme = (0, a.getParametersValue)(e, "encryptionScheme", y.defaultValues("encryptionScheme")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "keyDerivationFunc":
                        case "encryptionScheme":
                            return new n;
                        default:
                            throw new Error(`Invalid member name for PBES2Params class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [n.schema(t.keyDerivationFunc || {}), n.schema(t.encryptionScheme || {})]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["keyDerivationFunc", "encryptionScheme"]);
                    const t = s.compareSchema(e, e, y.schema({
                        names: {
                            keyDerivationFunc: {
                                names: {
                                    blockName: "keyDerivationFunc"
                                }
                            },
                            encryptionScheme: {
                                names: {
                                    blockName: "encryptionScheme"
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PBES2Params");
                    this.keyDerivationFunc = new n({
                        schema: t.result.keyDerivationFunc
                    }), this.encryptionScheme = new n({
                        schema: t.result.encryptionScheme
                    })
                }
                toSchema() {
                    return new s.Sequence({
                        value: [this.keyDerivationFunc.toSchema(), this.encryptionScheme.toSchema()]
                    })
                }
                toJSON() {
                    return {
                        keyDerivationFunc: this.keyDerivationFunc.toJSON(),
                        encryptionScheme: this.encryptionScheme.toJSON()
                    }
                }
            }

            function b(e, t, r, s, a, n) {
                let i, o;
                const l = [];
                switch (t.toUpperCase()) {
                    case "SHA-1":
                        i = 20, o = 64;
                        break;
                    case "SHA-256":
                        i = 32, o = 64;
                        break;
                    case "SHA-384":
                        i = 48, o = 128;
                        break;
                    case "SHA-512":
                        i = 64, o = 128;
                        break;
                    default:
                        throw new Error("Unsupported hashing algorithm")
                }
                const c = new Uint8Array(s),
                    u = new ArrayBuffer(2 * s.byteLength + 2),
                    h = new Uint8Array(u);
                for (let e = 0; e < c.length; e++) h[2 * e] = 0, h[2 * e + 1] = c[e];
                h[h.length - 2] = 0, h[h.length - 1] = 0, s = u.slice(0);
                const m = new ArrayBuffer(o),
                    f = new Uint8Array(m);
                for (let e = 0; e < m.byteLength; e++) f[e] = 3;
                const g = a.byteLength,
                    d = o * Math.ceil(g / o),
                    p = new ArrayBuffer(d),
                    y = new Uint8Array(p),
                    b = new Uint8Array(a);
                for (let e = 0; e < d; e++) y[e] = b[e % g];
                const v = s.byteLength,
                    w = o * Math.ceil(v / o),
                    S = new ArrayBuffer(w),
                    k = new Uint8Array(S),
                    A = new Uint8Array(s);
                for (let e = 0; e < w; e++) k[e] = A[e % v];
                const C = p.byteLength + S.byteLength;
                let I = new ArrayBuffer(C),
                    P = new Uint8Array(I);
                P.set(y), P.set(k, y.length);
                const B = Math.ceil((r >> 3) / i);
                let V = Promise.resolve(I);
                for (let r = 0; r <= B; r++) {
                    V = V.then((e => {
                        const t = new ArrayBuffer(m.byteLength + e.byteLength),
                            r = new Uint8Array(t);
                        return r.set(f), r.set(P, f.length), t
                    }));
                    for (let r = 0; r < n; r++) V = V.then((r => e.digest({
                        name: t
                    }, new Uint8Array(r))));
                    V = V.then((e => {
                        const t = new ArrayBuffer(o),
                            r = new Uint8Array(t);
                        for (let s = 0; s < t.byteLength; s++) r[s] = e[s % e.length];
                        const s = Math.ceil(g / o) + Math.ceil(v / o),
                            a = [];
                        let n = 0,
                            i = o;
                        for (let e = 0; e < s; e++) {
                            const e = Array.from(new Uint8Array(I.slice(n, n + i)));
                            n += o, n + o > I.byteLength && (i = I.byteLength - n);
                            let s = 511;
                            for (let a = t.byteLength - 1; a >= 0; a--) s >>= 8, s += r[a] + e[a], e[a] = 255 & s;
                            a.push(...e)
                        }
                        return I = new ArrayBuffer(a.length), P = new Uint8Array(I), P.set(a), l.push(...new Uint8Array(e)), I
                    }))
                }
                return V = V.then((() => {
                    const e = new ArrayBuffer(r >> 3);
                    return new Uint8Array(e).set(new Uint8Array(l).slice(0, r >> 3)), e
                })), V
            }
            class v {
                constructor(e = {}) {
                    this.crypto = (0, a.getParametersValue)(e, "crypto", {}), this.subtle = (0, a.getParametersValue)(e, "subtle", {}), this.name = (0, a.getParametersValue)(e, "name", "")
                }
                importKey(e, t, r, n, i) {
                    let o = {};
                    switch (t instanceof Uint8Array && (t = t.buffer), e.toLowerCase()) {
                        case "raw":
                            return this.subtle.importKey("raw", t, r, n, i);
                        case "spki": {
                            const e = s.fromBER(t);
                            if (-1 === e.offset) return Promise.reject("Incorrect keyData");
                            const a = new l;
                            try {
                                a.fromSchema(e.result)
                            } catch (e) {
                                return Promise.reject("Incorrect keyData")
                            }
                            switch (r.name.toUpperCase()) {
                                case "RSA-PSS":
                                    switch (r.hash.name.toUpperCase()) {
                                        case "SHA-1":
                                            o.alg = "PS1";
                                            break;
                                        case "SHA-256":
                                            o.alg = "PS256";
                                            break;
                                        case "SHA-384":
                                            o.alg = "PS384";
                                            break;
                                        case "SHA-512":
                                            o.alg = "PS512";
                                            break;
                                        default:
                                            return Promise.reject(`Incorrect hash algorithm: ${r.hash.name.toUpperCase()}`)
                                    }
                                    case "RSASSA-PKCS1-V1_5": {
                                        if (i = ["verify"], o.kty = "RSA", o.ext = n, o.key_ops = i, "1.2.840.113549.1.1.1" !== a.algorithm.algorithmId) return Promise.reject(`Incorrect public key algorithm: ${a.algorithm.algorithmId}`);
                                        if ("alg" in o == !1) switch (r.hash.name.toUpperCase()) {
                                            case "SHA-1":
                                                o.alg = "RS1";
                                                break;
                                            case "SHA-256":
                                                o.alg = "RS256";
                                                break;
                                            case "SHA-384":
                                                o.alg = "RS384";
                                                break;
                                            case "SHA-512":
                                                o.alg = "RS512";
                                                break;
                                            default:
                                                return Promise.reject(`Incorrect hash algorithm: ${r.hash.name.toUpperCase()}`)
                                        }
                                        const e = a.toJSON();
                                        for (const t of Object.keys(e)) o[t] = e[t]
                                    }
                                    break;
                                case "ECDSA":
                                    i = ["verify"];
                                case "ECDH": {
                                    if (o = {
                                            kty: "EC",
                                            ext: n,
                                            key_ops: i
                                        }, "1.2.840.10045.2.1" !== a.algorithm.algorithmId) return Promise.reject(`Incorrect public key algorithm: ${a.algorithm.algorithmId}`);
                                    const e = a.toJSON();
                                    for (const t of Object.keys(e)) o[t] = e[t]
                                }
                                break;
                            case "RSA-OAEP": {
                                if (o.kty = "RSA", o.ext = n, o.key_ops = i, "safari" === this.name.toLowerCase()) o.alg = "RSA-OAEP";
                                else switch (r.hash.name.toUpperCase()) {
                                    case "SHA-1":
                                        o.alg = "RSA-OAEP";
                                        break;
                                    case "SHA-256":
                                        o.alg = "RSA-OAEP-256";
                                        break;
                                    case "SHA-384":
                                        o.alg = "RSA-OAEP-384";
                                        break;
                                    case "SHA-512":
                                        o.alg = "RSA-OAEP-512";
                                        break;
                                    default:
                                        return Promise.reject(`Incorrect hash algorithm: ${r.hash.name.toUpperCase()}`)
                                }
                                const e = a.toJSON();
                                for (const t of Object.keys(e)) o[t] = e[t]
                            }
                            break;
                            case "RSAES-PKCS1-V1_5": {
                                o.kty = "RSA", o.ext = n, o.key_ops = i, o.alg = "PS1";
                                const e = a.toJSON();
                                for (const t of Object.keys(e)) o[t] = e[t]
                            }
                            break;
                            default:
                                return Promise.reject(`Incorrect algorithm name: ${r.name.toUpperCase()}`)
                            }
                        }
                        break;
                    case "pkcs8": {
                        const e = new f,
                            a = s.fromBER(t);
                        if (-1 === a.offset) return Promise.reject("Incorrect keyData");
                        try {
                            e.fromSchema(a.result)
                        } catch (e) {
                            return Promise.reject("Incorrect keyData")
                        }
                        if ("parsedKey" in e == !1) return Promise.reject("Incorrect keyData");
                        switch (r.name.toUpperCase()) {
                            case "RSA-PSS":
                                switch (r.hash.name.toUpperCase()) {
                                    case "SHA-1":
                                        o.alg = "PS1";
                                        break;
                                    case "SHA-256":
                                        o.alg = "PS256";
                                        break;
                                    case "SHA-384":
                                        o.alg = "PS384";
                                        break;
                                    case "SHA-512":
                                        o.alg = "PS512";
                                        break;
                                    default:
                                        return Promise.reject(`Incorrect hash algorithm: ${r.hash.name.toUpperCase()}`)
                                }
                                case "RSASSA-PKCS1-V1_5": {
                                    if (i = ["sign"], o.kty = "RSA", o.ext = n, o.key_ops = i, "1.2.840.113549.1.1.1" !== e.privateKeyAlgorithm.algorithmId) return Promise.reject(`Incorrect private key algorithm: ${e.privateKeyAlgorithm.algorithmId}`);
                                    if ("alg" in o == !1) switch (r.hash.name.toUpperCase()) {
                                        case "SHA-1":
                                            o.alg = "RS1";
                                            break;
                                        case "SHA-256":
                                            o.alg = "RS256";
                                            break;
                                        case "SHA-384":
                                            o.alg = "RS384";
                                            break;
                                        case "SHA-512":
                                            o.alg = "RS512";
                                            break;
                                        default:
                                            return Promise.reject(`Incorrect hash algorithm: ${r.hash.name.toUpperCase()}`)
                                    }
                                    const t = e.toJSON();
                                    for (const e of Object.keys(t)) o[e] = t[e]
                                }
                                break;
                            case "ECDSA":
                                i = ["sign"];
                            case "ECDH": {
                                if (o = {
                                        kty: "EC",
                                        ext: n,
                                        key_ops: i
                                    }, "1.2.840.10045.2.1" !== e.privateKeyAlgorithm.algorithmId) return Promise.reject(`Incorrect algorithm: ${e.privateKeyAlgorithm.algorithmId}`);
                                const t = e.toJSON();
                                for (const e of Object.keys(t)) o[e] = t[e]
                            }
                            break;
                        case "RSA-OAEP": {
                            if (o.kty = "RSA", o.ext = n, o.key_ops = i, "safari" === this.name.toLowerCase()) o.alg = "RSA-OAEP";
                            else switch (r.hash.name.toUpperCase()) {
                                case "SHA-1":
                                    o.alg = "RSA-OAEP";
                                    break;
                                case "SHA-256":
                                    o.alg = "RSA-OAEP-256";
                                    break;
                                case "SHA-384":
                                    o.alg = "RSA-OAEP-384";
                                    break;
                                case "SHA-512":
                                    o.alg = "RSA-OAEP-512";
                                    break;
                                default:
                                    return Promise.reject(`Incorrect hash algorithm: ${r.hash.name.toUpperCase()}`)
                            }
                            const t = e.toJSON();
                            for (const e of Object.keys(t)) o[e] = t[e]
                        }
                        break;
                        case "RSAES-PKCS1-V1_5": {
                            i = ["decrypt"], o.kty = "RSA", o.ext = n, o.key_ops = i, o.alg = "PS1";
                            const t = e.toJSON();
                            for (const e of Object.keys(t)) o[e] = t[e]
                        }
                        break;
                        default:
                            return Promise.reject(`Incorrect algorithm name: ${r.name.toUpperCase()}`)
                        }
                    }
                    break;
                    case "jwk":
                        o = t;
                        break;
                    default:
                        return Promise.reject(`Incorrect format: ${e}`)
                    }
                    return "safari" === this.name.toLowerCase() ? Promise.resolve().then((() => this.subtle.importKey("jwk", (0, a.stringToArrayBuffer)(JSON.stringify(o)), r, n, i))).then((e => e), (() => this.subtle.importKey("jwk", o, r, n, i))) : this.subtle.importKey("jwk", o, r, n, i)
                }
                exportKey(e, t) {
                    let r = this.subtle.exportKey("jwk", t);
                    switch ("safari" === this.name.toLowerCase() && (r = r.then((e => e instanceof ArrayBuffer ? JSON.parse((0, a.arrayBufferToString)(e)) : e))), e.toLowerCase()) {
                        case "raw":
                            return this.subtle.exportKey("raw", t);
                        case "spki":
                            r = r.then((e => {
                                const t = new l;
                                try {
                                    t.fromJSON(e)
                                } catch (e) {
                                    return Promise.reject("Incorrect key data")
                                }
                                return t.toSchema().toBER(!1)
                            }));
                            break;
                        case "pkcs8":
                            r = r.then((e => {
                                const t = new f;
                                try {
                                    t.fromJSON(e)
                                } catch (e) {
                                    return Promise.reject("Incorrect key data")
                                }
                                return t.toSchema().toBER(!1)
                            }));
                            break;
                        case "jwk":
                            break;
                        default:
                            return Promise.reject(`Incorrect format: ${e}`)
                    }
                    return r
                }
                convert(e, t, r, s, a, n) {
                    switch (e.toLowerCase()) {
                        case "raw":
                            switch (t.toLowerCase()) {
                                case "raw":
                                    return Promise.resolve(r);
                                case "spki":
                                    return Promise.resolve().then((() => this.importKey("raw", r, s, a, n))).then((e => this.exportKey("spki", e)));
                                case "pkcs8":
                                    return Promise.resolve().then((() => this.importKey("raw", r, s, a, n))).then((e => this.exportKey("pkcs8", e)));
                                case "jwk":
                                    return Promise.resolve().then((() => this.importKey("raw", r, s, a, n))).then((e => this.exportKey("jwk", e)));
                                default:
                                    return Promise.reject(`Incorrect outputFormat: ${t}`)
                            }
                            case "spki":
                                switch (t.toLowerCase()) {
                                    case "raw":
                                        return Promise.resolve().then((() => this.importKey("spki", r, s, a, n))).then((e => this.exportKey("raw", e)));
                                    case "spki":
                                        return Promise.resolve(r);
                                    case "pkcs8":
                                        return Promise.reject("Impossible to convert between SPKI/PKCS8");
                                    case "jwk":
                                        return Promise.resolve().then((() => this.importKey("spki", r, s, a, n))).then((e => this.exportKey("jwk", e)));
                                    default:
                                        return Promise.reject(`Incorrect outputFormat: ${t}`)
                                }
                                case "pkcs8":
                                    switch (t.toLowerCase()) {
                                        case "raw":
                                            return Promise.resolve().then((() => this.importKey("pkcs8", r, s, a, n))).then((e => this.exportKey("raw", e)));
                                        case "spki":
                                            return Promise.reject("Impossible to convert between SPKI/PKCS8");
                                        case "pkcs8":
                                            return Promise.resolve(r);
                                        case "jwk":
                                            return Promise.resolve().then((() => this.importKey("pkcs8", r, s, a, n))).then((e => this.exportKey("jwk", e)));
                                        default:
                                            return Promise.reject(`Incorrect outputFormat: ${t}`)
                                    }
                                    case "jwk":
                                        switch (t.toLowerCase()) {
                                            case "raw":
                                                return Promise.resolve().then((() => this.importKey("jwk", r, s, a, n))).then((e => this.exportKey("raw", e)));
                                            case "spki":
                                                return Promise.resolve().then((() => this.importKey("jwk", r, s, a, n))).then((e => this.exportKey("spki", e)));
                                            case "pkcs8":
                                                return Promise.resolve().then((() => this.importKey("jwk", r, s, a, n))).then((e => this.exportKey("pkcs8", e)));
                                            case "jwk":
                                                return Promise.resolve(r);
                                            default:
                                                return Promise.reject(`Incorrect outputFormat: ${t}`)
                                        }
                                        default:
                                            return Promise.reject(`Incorrect inputFormat: ${e}`)
                    }
                }
                encrypt(...e) {
                    return this.subtle.encrypt(...e)
                }
                decrypt(...e) {
                    return this.subtle.decrypt(...e)
                }
                sign(...e) {
                    return this.subtle.sign(...e)
                }
                verify(...e) {
                    return this.subtle.verify(...e)
                }
                digest(...e) {
                    return this.subtle.digest(...e)
                }
                generateKey(...e) {
                    return this.subtle.generateKey(...e)
                }
                deriveKey(...e) {
                    return this.subtle.deriveKey(...e)
                }
                deriveBits(...e) {
                    return this.subtle.deriveBits(...e)
                }
                wrapKey(...e) {
                    return this.subtle.wrapKey(...e)
                }
                unwrapKey(...e) {
                    return this.subtle.unwrapKey(...e)
                }
                getRandomValues(e) {
                    if ("getRandomValues" in this.crypto == !1) throw new Error("No support for getRandomValues");
                    return this.crypto.getRandomValues(e)
                }
                getAlgorithmByOID(e) {
                    switch (e) {
                        case "1.2.840.113549.1.1.1":
                            return {
                                name: "RSAES-PKCS1-v1_5"
                            };
                        case "1.2.840.113549.1.1.5":
                            return {
                                name: "RSASSA-PKCS1-v1_5", hash: {
                                    name: "SHA-1"
                                }
                            };
                        case "1.2.840.113549.1.1.11":
                            return {
                                name: "RSASSA-PKCS1-v1_5", hash: {
                                    name: "SHA-256"
                                }
                            };
                        case "1.2.840.113549.1.1.12":
                            return {
                                name: "RSASSA-PKCS1-v1_5", hash: {
                                    name: "SHA-384"
                                }
                            };
                        case "1.2.840.113549.1.1.13":
                            return {
                                name: "RSASSA-PKCS1-v1_5", hash: {
                                    name: "SHA-512"
                                }
                            };
                        case "1.2.840.113549.1.1.10":
                            return {
                                name: "RSA-PSS"
                            };
                        case "1.2.840.113549.1.1.7":
                            return {
                                name: "RSA-OAEP"
                            };
                        case "1.2.840.10045.2.1":
                        case "1.2.840.10045.4.1":
                            return {
                                name: "ECDSA", hash: {
                                    name: "SHA-1"
                                }
                            };
                        case "1.2.840.10045.4.3.2":
                            return {
                                name: "ECDSA", hash: {
                                    name: "SHA-256"
                                }
                            };
                        case "1.2.840.10045.4.3.3":
                            return {
                                name: "ECDSA", hash: {
                                    name: "SHA-384"
                                }
                            };
                        case "1.2.840.10045.4.3.4":
                            return {
                                name: "ECDSA", hash: {
                                    name: "SHA-512"
                                }
                            };
                        case "1.3.133.16.840.63.0.2":
                            return {
                                name: "ECDH", kdf: "SHA-1"
                            };
                        case "1.3.132.1.11.1":
                            return {
                                name: "ECDH", kdf: "SHA-256"
                            };
                        case "1.3.132.1.11.2":
                            return {
                                name: "ECDH", kdf: "SHA-384"
                            };
                        case "1.3.132.1.11.3":
                            return {
                                name: "ECDH", kdf: "SHA-512"
                            };
                        case "2.16.840.1.101.3.4.1.2":
                            return {
                                name: "AES-CBC", length: 128
                            };
                        case "2.16.840.1.101.3.4.1.22":
                            return {
                                name: "AES-CBC", length: 192
                            };
                        case "2.16.840.1.101.3.4.1.42":
                            return {
                                name: "AES-CBC", length: 256
                            };
                        case "2.16.840.1.101.3.4.1.6":
                            return {
                                name: "AES-GCM", length: 128
                            };
                        case "2.16.840.1.101.3.4.1.26":
                            return {
                                name: "AES-GCM", length: 192
                            };
                        case "2.16.840.1.101.3.4.1.46":
                            return {
                                name: "AES-GCM", length: 256
                            };
                        case "2.16.840.1.101.3.4.1.4":
                            return {
                                name: "AES-CFB", length: 128
                            };
                        case "2.16.840.1.101.3.4.1.24":
                            return {
                                name: "AES-CFB", length: 192
                            };
                        case "2.16.840.1.101.3.4.1.44":
                            return {
                                name: "AES-CFB", length: 256
                            };
                        case "2.16.840.1.101.3.4.1.5":
                            return {
                                name: "AES-KW", length: 128
                            };
                        case "2.16.840.1.101.3.4.1.25":
                            return {
                                name: "AES-KW", length: 192
                            };
                        case "2.16.840.1.101.3.4.1.45":
                            return {
                                name: "AES-KW", length: 256
                            };
                        case "1.2.840.113549.2.7":
                            return {
                                name: "HMAC", hash: {
                                    name: "SHA-1"
                                }
                            };
                        case "1.2.840.113549.2.9":
                            return {
                                name: "HMAC", hash: {
                                    name: "SHA-256"
                                }
                            };
                        case "1.2.840.113549.2.10":
                            return {
                                name: "HMAC", hash: {
                                    name: "SHA-384"
                                }
                            };
                        case "1.2.840.113549.2.11":
                            return {
                                name: "HMAC", hash: {
                                    name: "SHA-512"
                                }
                            };
                        case "1.2.840.113549.1.9.16.3.5":
                            return {
                                name: "DH"
                            };
                        case "1.3.14.3.2.26":
                            return {
                                name: "SHA-1"
                            };
                        case "2.16.840.1.101.3.4.2.1":
                            return {
                                name: "SHA-256"
                            };
                        case "2.16.840.1.101.3.4.2.2":
                            return {
                                name: "SHA-384"
                            };
                        case "2.16.840.1.101.3.4.2.3":
                            return {
                                name: "SHA-512"
                            };
                        case "1.2.840.113549.1.5.12":
                            return {
                                name: "PBKDF2"
                            };
                        case "1.2.840.10045.3.1.7":
                            return {
                                name: "P-256"
                            };
                        case "1.3.132.0.34":
                            return {
                                name: "P-384"
                            };
                        case "1.3.132.0.35":
                            return {
                                name: "P-521"
                            }
                    }
                    return {}
                }
                getOIDByAlgorithm(e) {
                    let t = "";
                    switch (e.name.toUpperCase()) {
                        case "RSAES-PKCS1-V1_5":
                            t = "1.2.840.113549.1.1.1";
                            break;
                        case "RSASSA-PKCS1-V1_5":
                            switch (e.hash.name.toUpperCase()) {
                                case "SHA-1":
                                    t = "1.2.840.113549.1.1.5";
                                    break;
                                case "SHA-256":
                                    t = "1.2.840.113549.1.1.11";
                                    break;
                                case "SHA-384":
                                    t = "1.2.840.113549.1.1.12";
                                    break;
                                case "SHA-512":
                                    t = "1.2.840.113549.1.1.13"
                            }
                            break;
                        case "RSA-PSS":
                            t = "1.2.840.113549.1.1.10";
                            break;
                        case "RSA-OAEP":
                            t = "1.2.840.113549.1.1.7";
                            break;
                        case "ECDSA":
                            switch (e.hash.name.toUpperCase()) {
                                case "SHA-1":
                                    t = "1.2.840.10045.4.1";
                                    break;
                                case "SHA-256":
                                    t = "1.2.840.10045.4.3.2";
                                    break;
                                case "SHA-384":
                                    t = "1.2.840.10045.4.3.3";
                                    break;
                                case "SHA-512":
                                    t = "1.2.840.10045.4.3.4"
                            }
                            break;
                        case "ECDH":
                            switch (e.kdf.toUpperCase()) {
                                case "SHA-1":
                                    t = "1.3.133.16.840.63.0.2";
                                    break;
                                case "SHA-256":
                                    t = "1.3.132.1.11.1";
                                    break;
                                case "SHA-384":
                                    t = "1.3.132.1.11.2";
                                    break;
                                case "SHA-512":
                                    t = "1.3.132.1.11.3"
                            }
                            break;
                        case "AES-CTR":
                            break;
                        case "AES-CBC":
                            switch (e.length) {
                                case 128:
                                    t = "2.16.840.1.101.3.4.1.2";
                                    break;
                                case 192:
                                    t = "2.16.840.1.101.3.4.1.22";
                                    break;
                                case 256:
                                    t = "2.16.840.1.101.3.4.1.42"
                            }
                            break;
                        case "AES-CMAC":
                            break;
                        case "AES-GCM":
                            switch (e.length) {
                                case 128:
                                    t = "2.16.840.1.101.3.4.1.6";
                                    break;
                                case 192:
                                    t = "2.16.840.1.101.3.4.1.26";
                                    break;
                                case 256:
                                    t = "2.16.840.1.101.3.4.1.46"
                            }
                            break;
                        case "AES-CFB":
                            switch (e.length) {
                                case 128:
                                    t = "2.16.840.1.101.3.4.1.4";
                                    break;
                                case 192:
                                    t = "2.16.840.1.101.3.4.1.24";
                                    break;
                                case 256:
                                    t = "2.16.840.1.101.3.4.1.44"
                            }
                            break;
                        case "AES-KW":
                            switch (e.length) {
                                case 128:
                                    t = "2.16.840.1.101.3.4.1.5";
                                    break;
                                case 192:
                                    t = "2.16.840.1.101.3.4.1.25";
                                    break;
                                case 256:
                                    t = "2.16.840.1.101.3.4.1.45"
                            }
                            break;
                        case "HMAC":
                            switch (e.hash.name.toUpperCase()) {
                                case "SHA-1":
                                    t = "1.2.840.113549.2.7";
                                    break;
                                case "SHA-256":
                                    t = "1.2.840.113549.2.9";
                                    break;
                                case "SHA-384":
                                    t = "1.2.840.113549.2.10";
                                    break;
                                case "SHA-512":
                                    t = "1.2.840.113549.2.11"
                            }
                            break;
                        case "DH":
                            t = "1.2.840.113549.1.9.16.3.5";
                            break;
                        case "SHA-1":
                            t = "1.3.14.3.2.26";
                            break;
                        case "SHA-256":
                            t = "2.16.840.1.101.3.4.2.1";
                            break;
                        case "SHA-384":
                            t = "2.16.840.1.101.3.4.2.2";
                            break;
                        case "SHA-512":
                            t = "2.16.840.1.101.3.4.2.3";
                            break;
                        case "CONCAT":
                        case "HKDF":
                            break;
                        case "PBKDF2":
                            t = "1.2.840.113549.1.5.12";
                            break;
                        case "P-256":
                            t = "1.2.840.10045.3.1.7";
                            break;
                        case "P-384":
                            t = "1.3.132.0.34";
                            break;
                        case "P-521":
                            t = "1.3.132.0.35"
                    }
                    return t
                }
                getAlgorithmParameters(e, t) {
                    let r = {
                        algorithm: {},
                        usages: []
                    };
                    switch (e.toUpperCase()) {
                        case "RSAES-PKCS1-V1_5":
                        case "RSASSA-PKCS1-V1_5":
                            switch (t.toLowerCase()) {
                                case "generatekey":
                                    r = {
                                        algorithm: {
                                            name: "RSASSA-PKCS1-v1_5",
                                            modulusLength: 2048,
                                            publicExponent: new Uint8Array([1, 0, 1]),
                                            hash: {
                                                name: "SHA-256"
                                            }
                                        },
                                        usages: ["sign", "verify"]
                                    };
                                    break;
                                case "verify":
                                case "sign":
                                case "importkey":
                                    r = {
                                        algorithm: {
                                            name: "RSASSA-PKCS1-v1_5",
                                            hash: {
                                                name: "SHA-256"
                                            }
                                        },
                                        usages: ["verify"]
                                    };
                                    break;
                                case "exportkey":
                                default:
                                    return {
                                        algorithm: {
                                            name: "RSASSA-PKCS1-v1_5"
                                        }, usages: []
                                    }
                            }
                            break;
                        case "RSA-PSS":
                            switch (t.toLowerCase()) {
                                case "sign":
                                case "verify":
                                    r = {
                                        algorithm: {
                                            name: "RSA-PSS",
                                            hash: {
                                                name: "SHA-1"
                                            },
                                            saltLength: 20
                                        },
                                        usages: ["sign", "verify"]
                                    };
                                    break;
                                case "generatekey":
                                    r = {
                                        algorithm: {
                                            name: "RSA-PSS",
                                            modulusLength: 2048,
                                            publicExponent: new Uint8Array([1, 0, 1]),
                                            hash: {
                                                name: "SHA-1"
                                            }
                                        },
                                        usages: ["sign", "verify"]
                                    };
                                    break;
                                case "importkey":
                                    r = {
                                        algorithm: {
                                            name: "RSA-PSS",
                                            hash: {
                                                name: "SHA-1"
                                            }
                                        },
                                        usages: ["verify"]
                                    };
                                    break;
                                case "exportkey":
                                default:
                                    return {
                                        algorithm: {
                                            name: "RSA-PSS"
                                        }, usages: []
                                    }
                            }
                            break;
                        case "RSA-OAEP":
                            switch (t.toLowerCase()) {
                                case "encrypt":
                                case "decrypt":
                                    r = {
                                        algorithm: {
                                            name: "RSA-OAEP"
                                        },
                                        usages: ["encrypt", "decrypt"]
                                    };
                                    break;
                                case "generatekey":
                                    r = {
                                        algorithm: {
                                            name: "RSA-OAEP",
                                            modulusLength: 2048,
                                            publicExponent: new Uint8Array([1, 0, 1]),
                                            hash: {
                                                name: "SHA-256"
                                            }
                                        },
                                        usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                                    };
                                    break;
                                case "importkey":
                                    r = {
                                        algorithm: {
                                            name: "RSA-OAEP",
                                            hash: {
                                                name: "SHA-256"
                                            }
                                        },
                                        usages: ["encrypt"]
                                    };
                                    break;
                                case "exportkey":
                                default:
                                    return {
                                        algorithm: {
                                            name: "RSA-OAEP"
                                        }, usages: []
                                    }
                            }
                            break;
                        case "ECDSA":
                            switch (t.toLowerCase()) {
                                case "generatekey":
                                    r = {
                                        algorithm: {
                                            name: "ECDSA",
                                            namedCurve: "P-256"
                                        },
                                        usages: ["sign", "verify"]
                                    };
                                    break;
                                case "importkey":
                                    r = {
                                        algorithm: {
                                            name: "ECDSA",
                                            namedCurve: "P-256"
                                        },
                                        usages: ["verify"]
                                    };
                                    break;
                                case "verify":
                                case "sign":
                                    r = {
                                        algorithm: {
                                            name: "ECDSA",
                                            hash: {
                                                name: "SHA-256"
                                            }
                                        },
                                        usages: ["sign"]
                                    };
                                    break;
                                default:
                                    return {
                                        algorithm: {
                                            name: "ECDSA"
                                        }, usages: []
                                    }
                            }
                            break;
                        case "ECDH":
                            switch (t.toLowerCase()) {
                                case "exportkey":
                                case "importkey":
                                case "generatekey":
                                    r = {
                                        algorithm: {
                                            name: "ECDH",
                                            namedCurve: "P-256"
                                        },
                                        usages: ["deriveKey", "deriveBits"]
                                    };
                                    break;
                                case "derivekey":
                                case "derivebits":
                                    r = {
                                        algorithm: {
                                            name: "ECDH",
                                            namedCurve: "P-256",
                                            public: []
                                        },
                                        usages: ["encrypt", "decrypt"]
                                    };
                                    break;
                                default:
                                    return {
                                        algorithm: {
                                            name: "ECDH"
                                        }, usages: []
                                    }
                            }
                            break;
                        case "AES-CTR":
                            switch (t.toLowerCase()) {
                                case "importkey":
                                case "exportkey":
                                case "generatekey":
                                    r = {
                                        algorithm: {
                                            name: "AES-CTR",
                                            length: 256
                                        },
                                        usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                                    };
                                    break;
                                case "decrypt":
                                case "encrypt":
                                    r = {
                                        algorithm: {
                                            name: "AES-CTR",
                                            counter: new Uint8Array(16),
                                            length: 10
                                        },
                                        usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                                    };
                                    break;
                                default:
                                    return {
                                        algorithm: {
                                            name: "AES-CTR"
                                        }, usages: []
                                    }
                            }
                            break;
                        case "AES-CBC":
                            switch (t.toLowerCase()) {
                                case "importkey":
                                case "exportkey":
                                case "generatekey":
                                    r = {
                                        algorithm: {
                                            name: "AES-CBC",
                                            length: 256
                                        },
                                        usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                                    };
                                    break;
                                case "decrypt":
                                case "encrypt":
                                    r = {
                                        algorithm: {
                                            name: "AES-CBC",
                                            iv: this.getRandomValues(new Uint8Array(16))
                                        },
                                        usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                                    };
                                    break;
                                default:
                                    return {
                                        algorithm: {
                                            name: "AES-CBC"
                                        }, usages: []
                                    }
                            }
                            break;
                        case "AES-GCM":
                            switch (t.toLowerCase()) {
                                case "importkey":
                                case "exportkey":
                                case "generatekey":
                                    r = {
                                        algorithm: {
                                            name: "AES-GCM",
                                            length: 256
                                        },
                                        usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                                    };
                                    break;
                                case "decrypt":
                                case "encrypt":
                                    r = {
                                        algorithm: {
                                            name: "AES-GCM",
                                            iv: this.getRandomValues(new Uint8Array(16))
                                        },
                                        usages: ["encrypt", "decrypt", "wrapKey", "unwrapKey"]
                                    };
                                    break;
                                default:
                                    return {
                                        algorithm: {
                                            name: "AES-GCM"
                                        }, usages: []
                                    }
                            }
                            break;
                        case "AES-KW":
                            switch (t.toLowerCase()) {
                                case "importkey":
                                case "exportkey":
                                case "generatekey":
                                case "wrapkey":
                                case "unwrapkey":
                                    r = {
                                        algorithm: {
                                            name: "AES-KW",
                                            length: 256
                                        },
                                        usages: ["wrapKey", "unwrapKey"]
                                    };
                                    break;
                                default:
                                    return {
                                        algorithm: {
                                            name: "AES-KW"
                                        }, usages: []
                                    }
                            }
                            break;
                        case "HMAC":
                            switch (t.toLowerCase()) {
                                case "sign":
                                case "verify":
                                    r = {
                                        algorithm: {
                                            name: "HMAC"
                                        },
                                        usages: ["sign", "verify"]
                                    };
                                    break;
                                case "importkey":
                                case "exportkey":
                                case "generatekey":
                                    r = {
                                        algorithm: {
                                            name: "HMAC",
                                            length: 32,
                                            hash: {
                                                name: "SHA-256"
                                            }
                                        },
                                        usages: ["sign", "verify"]
                                    };
                                    break;
                                default:
                                    return {
                                        algorithm: {
                                            name: "HMAC"
                                        }, usages: []
                                    }
                            }
                            break;
                        case "HKDF":
                            switch (t.toLowerCase()) {
                                case "derivekey":
                                    r = {
                                        algorithm: {
                                            name: "HKDF",
                                            hash: "SHA-256",
                                            salt: new Uint8Array([]),
                                            info: new Uint8Array([])
                                        },
                                        usages: ["encrypt", "decrypt"]
                                    };
                                    break;
                                default:
                                    return {
                                        algorithm: {
                                            name: "HKDF"
                                        }, usages: []
                                    }
                            }
                            break;
                        case "PBKDF2":
                            switch (t.toLowerCase()) {
                                case "derivekey":
                                    r = {
                                        algorithm: {
                                            name: "PBKDF2",
                                            hash: {
                                                name: "SHA-256"
                                            },
                                            salt: new Uint8Array([]),
                                            iterations: 1e4
                                        },
                                        usages: ["encrypt", "decrypt"]
                                    };
                                    break;
                                default:
                                    return {
                                        algorithm: {
                                            name: "PBKDF2"
                                        }, usages: []
                                    }
                            }
                    }
                    return r
                }
                getHashAlgorithm(e) {
                    let t = "";
                    switch (e.algorithmId) {
                        case "1.2.840.10045.4.1":
                        case "1.2.840.113549.1.1.5":
                            t = "SHA-1";
                            break;
                        case "1.2.840.10045.4.3.2":
                        case "1.2.840.113549.1.1.11":
                            t = "SHA-256";
                            break;
                        case "1.2.840.10045.4.3.3":
                        case "1.2.840.113549.1.1.12":
                            t = "SHA-384";
                            break;
                        case "1.2.840.10045.4.3.4":
                        case "1.2.840.113549.1.1.13":
                            t = "SHA-512";
                            break;
                        case "1.2.840.113549.1.1.10":
                            try {
                                const r = new d({
                                    schema: e.algorithmParams
                                });
                                if ("hashAlgorithm" in r) {
                                    const e = this.getAlgorithmByOID(r.hashAlgorithm.algorithmId);
                                    if ("name" in e == !1) return "";
                                    t = e.name
                                } else t = "SHA-1"
                            } catch (e) {}
                    }
                    return t
                }
                encryptEncryptedContentInfo(e) {
                    if (e instanceof Object == !1) return Promise.reject('Parameters must have type "Object"');
                    if ("password" in e == !1) return Promise.reject('Absent mandatory parameter "password"');
                    if ("contentEncryptionAlgorithm" in e == !1) return Promise.reject('Absent mandatory parameter "contentEncryptionAlgorithm"');
                    if ("hmacHashAlgorithm" in e == !1) return Promise.reject('Absent mandatory parameter "hmacHashAlgorithm"');
                    if ("iterationCount" in e == !1) return Promise.reject('Absent mandatory parameter "iterationCount"');
                    if ("contentToEncrypt" in e == !1) return Promise.reject('Absent mandatory parameter "contentToEncrypt"');
                    if ("contentType" in e == !1) return Promise.reject('Absent mandatory parameter "contentType"');
                    const t = this.getOIDByAlgorithm(e.contentEncryptionAlgorithm);
                    if ("" === t) return Promise.reject('Wrong "contentEncryptionAlgorithm" value');
                    const r = this.getOIDByAlgorithm({
                        name: "PBKDF2"
                    });
                    if ("" === r) return Promise.reject("Can not find OID for PBKDF2");
                    const a = this.getOIDByAlgorithm({
                        name: "HMAC",
                        hash: {
                            name: e.hmacHashAlgorithm
                        }
                    });
                    if ("" === a) return Promise.reject(`Incorrect value for "hmacHashAlgorithm": ${e.hmacHashAlgorithm}`);
                    let i = Promise.resolve();
                    const o = new ArrayBuffer(16),
                        l = new Uint8Array(o);
                    this.getRandomValues(l);
                    const c = new ArrayBuffer(64),
                        u = new Uint8Array(c);
                    this.getRandomValues(u);
                    const h = new Uint8Array(e.contentToEncrypt),
                        m = new p({
                            salt: new s.OctetString({
                                valueHex: c
                            }),
                            iterationCount: e.iterationCount,
                            prf: new n({
                                algorithmId: a,
                                algorithmParams: new s.Null
                            })
                        });
                    return i = i.then((() => {
                        const t = new Uint8Array(e.password);
                        return this.importKey("raw", t, "PBKDF2", !1, ["deriveKey"])
                    }), (e => Promise.reject(e))), i = i.then((t => this.deriveKey({
                        name: "PBKDF2",
                        hash: {
                            name: e.hmacHashAlgorithm
                        },
                        salt: u,
                        iterations: e.iterationCount
                    }, t, e.contentEncryptionAlgorithm, !1, ["encrypt"])), (e => Promise.reject(e))), i = i.then((t => this.encrypt({
                        name: e.contentEncryptionAlgorithm.name,
                        iv: l
                    }, t, h)), (e => Promise.reject(e))), i = i.then((a => {
                        const i = new y({
                            keyDerivationFunc: new n({
                                algorithmId: r,
                                algorithmParams: m.toSchema()
                            }),
                            encryptionScheme: new n({
                                algorithmId: t,
                                algorithmParams: new s.OctetString({
                                    valueHex: o
                                })
                            })
                        });
                        return new g({
                            contentType: e.contentType,
                            contentEncryptionAlgorithm: new n({
                                algorithmId: "1.2.840.113549.1.5.13",
                                algorithmParams: i.toSchema()
                            }),
                            encryptedContent: new s.OctetString({
                                valueHex: a
                            })
                        })
                    }), (e => Promise.reject(e))), i
                }
                decryptEncryptedContentInfo(e) {
                    if (e instanceof Object == !1) return Promise.reject('Parameters must have type "Object"');
                    if ("password" in e == !1) return Promise.reject('Absent mandatory parameter "password"');
                    if ("encryptedContentInfo" in e == !1) return Promise.reject('Absent mandatory parameter "encryptedContentInfo"');
                    if ("1.2.840.113549.1.5.13" !== e.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId) return Promise.reject(`Unknown "contentEncryptionAlgorithm": ${e.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId}`);
                    let t, r, s = Promise.resolve();
                    try {
                        t = new y({
                            schema: e.encryptedContentInfo.contentEncryptionAlgorithm.algorithmParams
                        })
                    } catch (e) {
                        return Promise.reject('Incorrectly encoded "pbes2Parameters"')
                    }
                    try {
                        r = new p({
                            schema: t.keyDerivationFunc.algorithmParams
                        })
                    } catch (e) {
                        return Promise.reject('Incorrectly encoded "pbkdf2Params"')
                    }
                    const n = this.getAlgorithmByOID(t.encryptionScheme.algorithmId);
                    if ("name" in n == !1) return Promise.reject(`Incorrect OID for "contentEncryptionAlgorithm": ${t.encryptionScheme.algorithmId}`);
                    const i = t.encryptionScheme.algorithmParams.valueBlock.valueHex,
                        o = new Uint8Array(i),
                        l = r.salt.valueBlock.valueHex,
                        c = new Uint8Array(l),
                        u = r.iterationCount;
                    let h = "SHA-1";
                    if ("prf" in r) {
                        const e = this.getAlgorithmByOID(r.prf.algorithmId);
                        if ("name" in e == !1) return Promise.reject("Incorrect OID for HMAC hash algorithm");
                        h = e.hash.name
                    }
                    return s = s.then((() => this.importKey("raw", e.password, "PBKDF2", !1, ["deriveKey"])), (e => Promise.reject(e))), s = s.then((e => this.deriveKey({
                        name: "PBKDF2",
                        hash: {
                            name: h
                        },
                        salt: c,
                        iterations: u
                    }, e, n, !1, ["decrypt"])), (e => Promise.reject(e))), s = s.then((t => {
                        let r = new ArrayBuffer(0);
                        if (!1 === e.encryptedContentInfo.encryptedContent.idBlock.isConstructed) r = e.encryptedContentInfo.encryptedContent.valueBlock.valueHex;
                        else
                            for (const t of e.encryptedContentInfo.encryptedContent.valueBlock.value) r = (0, a.utilConcatBuf)(r, t.valueBlock.valueHex);
                        return this.decrypt({
                            name: n.name,
                            iv: o
                        }, t, r)
                    }), (e => Promise.reject(e))), s
                }
                stampDataWithPassword(e) {
                    if (e instanceof Object == !1) return Promise.reject('Parameters must have type "Object"');
                    if ("password" in e == !1) return Promise.reject('Absent mandatory parameter "password"');
                    if ("hashAlgorithm" in e == !1) return Promise.reject('Absent mandatory parameter "hashAlgorithm"');
                    if ("salt" in e == !1) return Promise.reject('Absent mandatory parameter "iterationCount"');
                    if ("iterationCount" in e == !1) return Promise.reject('Absent mandatory parameter "salt"');
                    if ("contentToStamp" in e == !1) return Promise.reject('Absent mandatory parameter "contentToStamp"');
                    let t;
                    switch (e.hashAlgorithm.toLowerCase()) {
                        case "sha-1":
                            t = 160;
                            break;
                        case "sha-256":
                            t = 256;
                            break;
                        case "sha-384":
                            t = 384;
                            break;
                        case "sha-512":
                            t = 512;
                            break;
                        default:
                            return Promise.reject(`Incorrect "parameters.hashAlgorithm" parameter: ${e.hashAlgorithm}`)
                    }
                    let r = Promise.resolve();
                    const s = {
                        name: "HMAC",
                        length: t,
                        hash: {
                            name: e.hashAlgorithm
                        }
                    };
                    return r = r.then((() => b(this, e.hashAlgorithm, t, e.password, e.salt, e.iterationCount))), r = r.then((e => this.importKey("raw", new Uint8Array(e), s, !1, ["sign"]))), r = r.then((t => this.sign(s, t, new Uint8Array(e.contentToStamp))), (e => Promise.reject(e))), r
                }
                verifyDataStampedWithPassword(e) {
                    if (e instanceof Object == !1) return Promise.reject('Parameters must have type "Object"');
                    if ("password" in e == !1) return Promise.reject('Absent mandatory parameter "password"');
                    if ("hashAlgorithm" in e == !1) return Promise.reject('Absent mandatory parameter "hashAlgorithm"');
                    if ("salt" in e == !1) return Promise.reject('Absent mandatory parameter "iterationCount"');
                    if ("iterationCount" in e == !1) return Promise.reject('Absent mandatory parameter "salt"');
                    if ("contentToVerify" in e == !1) return Promise.reject('Absent mandatory parameter "contentToVerify"');
                    if ("signatureToVerify" in e == !1) return Promise.reject('Absent mandatory parameter "signatureToVerify"');
                    let t;
                    switch (e.hashAlgorithm.toLowerCase()) {
                        case "sha-1":
                            t = 160;
                            break;
                        case "sha-256":
                            t = 256;
                            break;
                        case "sha-384":
                            t = 384;
                            break;
                        case "sha-512":
                            t = 512;
                            break;
                        default:
                            return Promise.reject(`Incorrect "parameters.hashAlgorithm" parameter: ${e.hashAlgorithm}`)
                    }
                    let r = Promise.resolve();
                    const s = {
                        name: "HMAC",
                        length: t,
                        hash: {
                            name: e.hashAlgorithm
                        }
                    };
                    return r = r.then((() => b(this, e.hashAlgorithm, t, e.password, e.salt, e.iterationCount))), r = r.then((e => this.importKey("raw", new Uint8Array(e), s, !1, ["verify"]))), r = r.then((t => this.verify(s, t, new Uint8Array(e.signatureToVerify), new Uint8Array(e.contentToVerify))), (e => Promise.reject(e))), r
                }
                getSignatureParameters(e, t = "SHA-1") {
                    if ("" === this.getOIDByAlgorithm({
                            name: t
                        })) return Promise.reject(`Unsupported hash algorithm: ${t}`);
                    const r = new n,
                        a = this.getAlgorithmParameters(e.algorithm.name, "sign");
                    switch (a.algorithm.hash.name = t, e.algorithm.name.toUpperCase()) {
                        case "RSASSA-PKCS1-V1_5":
                        case "ECDSA":
                            r.algorithmId = this.getOIDByAlgorithm(a.algorithm);
                            break;
                        case "RSA-PSS": {
                            switch (t.toUpperCase()) {
                                case "SHA-256":
                                    a.algorithm.saltLength = 32;
                                    break;
                                case "SHA-384":
                                    a.algorithm.saltLength = 48;
                                    break;
                                case "SHA-512":
                                    a.algorithm.saltLength = 64
                            }
                            const e = {};
                            if ("SHA-1" !== t.toUpperCase()) {
                                const r = this.getOIDByAlgorithm({
                                    name: t
                                });
                                if ("" === r) return Promise.reject(`Unsupported hash algorithm: ${t}`);
                                e.hashAlgorithm = new n({
                                    algorithmId: r,
                                    algorithmParams: new s.Null
                                }), e.maskGenAlgorithm = new n({
                                    algorithmId: "1.2.840.113549.1.1.8",
                                    algorithmParams: e.hashAlgorithm.toSchema()
                                })
                            }
                            20 !== a.algorithm.saltLength && (e.saltLength = a.algorithm.saltLength);
                            const i = new d(e);
                            r.algorithmId = "1.2.840.113549.1.1.10", r.algorithmParams = i.toSchema()
                        }
                        break;
                    default:
                        return Promise.reject(`Unsupported signature algorithm: ${e.algorithm.name}`)
                    }
                    return Promise.resolve().then((() => ({
                        signatureAlgorithm: r,
                        parameters: a
                    })))
                }
                signWithPrivateKey(e, t, r) {
                    return this.sign(r.algorithm, t, new Uint8Array(e)).then((e => ("ECDSA" === r.algorithm.name && (e = B(e)), e)), (e => Promise.reject(`Signing error: ${e}`)))
                }
                fillPublicKeyParameters(e, t) {
                    const r = {},
                        s = this.getHashAlgorithm(t);
                    if ("" === s) return Promise.reject(`Unsupported signature algorithm: ${t.algorithmId}`);
                    let a;
                    a = "1.2.840.113549.1.1.10" === t.algorithmId ? t.algorithmId : e.algorithm.algorithmId;
                    const n = this.getAlgorithmByOID(a);
                    if ("name" in n === "") return Promise.reject(`Unsupported public key algorithm: ${t.algorithmId}`);
                    if (r.algorithm = this.getAlgorithmParameters(n.name, "importkey"), "hash" in r.algorithm.algorithm && (r.algorithm.algorithm.hash.name = s), "ECDSA" === n.name) {
                        let t = !1;
                        if ("algorithmParams" in e.algorithm == !0 && "idBlock" in e.algorithm.algorithmParams && 1 === e.algorithm.algorithmParams.idBlock.tagClass && 6 === e.algorithm.algorithmParams.idBlock.tagNumber && (t = !0), !1 === t) return Promise.reject("Incorrect type for ECDSA public key parameters");
                        const s = this.getAlgorithmByOID(e.algorithm.algorithmParams.valueBlock.toString());
                        if ("name" in s == !1) return Promise.reject(`Unsupported named curve algorithm: ${e.algorithm.algorithmParams.valueBlock.toString()}`);
                        r.algorithm.algorithm.namedCurve = s.name
                    }
                    return r
                }
                getPublicKey(e, t, r = null) {
                    null === r && (r = this.fillPublicKeyParameters(e, t));
                    const s = e.toSchema().toBER(!1),
                        a = new Uint8Array(s);
                    return this.importKey("spki", a, r.algorithm.algorithm, !0, r.algorithm.usages)
                }
                verifyWithPublicKey(e, t, r, a, n = null) {
                    let i = Promise.resolve();
                    if (null === n) {
                        if ("" === (n = this.getHashAlgorithm(a))) return Promise.reject(`Unsupported signature algorithm: ${a.algorithmId}`);
                        i = i.then((() => this.getPublicKey(r, a)))
                    } else {
                        const e = {};
                        let t;
                        t = "1.2.840.113549.1.1.10" === a.algorithmId ? a.algorithmId : r.algorithm.algorithmId;
                        const s = this.getAlgorithmByOID(t);
                        if ("name" in s === "") return Promise.reject(`Unsupported public key algorithm: ${a.algorithmId}`);
                        if (e.algorithm = this.getAlgorithmParameters(s.name, "importkey"), "hash" in e.algorithm.algorithm && (e.algorithm.algorithm.hash.name = n), "ECDSA" === s.name) {
                            let t = !1;
                            if ("algorithmParams" in r.algorithm == !0 && "idBlock" in r.algorithm.algorithmParams && 1 === r.algorithm.algorithmParams.idBlock.tagClass && 6 === r.algorithm.algorithmParams.idBlock.tagNumber && (t = !0), !1 === t) return Promise.reject("Incorrect type for ECDSA public key parameters");
                            const s = this.getAlgorithmByOID(r.algorithm.algorithmParams.valueBlock.toString());
                            if ("name" in s == !1) return Promise.reject(`Unsupported named curve algorithm: ${r.algorithm.algorithmParams.valueBlock.toString()}`);
                            e.algorithm.algorithm.namedCurve = s.name
                        }
                        i = i.then((() => this.getPublicKey(r, null, e)))
                    }
                    return i = i.then((r => {
                        const i = this.getAlgorithmParameters(r.algorithm.name, "verify");
                        "hash" in i.algorithm && (i.algorithm.hash.name = n);
                        let o = t.valueBlock.valueHex;
                        if ("ECDSA" === r.algorithm.name) {
                            o = N(s.fromBER(o).result)
                        }
                        if ("RSA-PSS" === r.algorithm.name) {
                            let e;
                            try {
                                e = new d({
                                    schema: a.algorithmParams
                                })
                            } catch (e) {
                                return Promise.reject(e)
                            }
                            i.algorithm.saltLength = "saltLength" in e ? e.saltLength : 20;
                            let t = "SHA-1";
                            if ("hashAlgorithm" in e) {
                                const r = this.getAlgorithmByOID(e.hashAlgorithm.algorithmId);
                                if ("name" in r == !1) return Promise.reject(`Unrecognized hash algorithm: ${e.hashAlgorithm.algorithmId}`);
                                t = r.name
                            }
                            i.algorithm.hash.name = t
                        }
                        return this.verify(i.algorithm, r, new Uint8Array(o), new Uint8Array(e))
                    })), i
                }
            }
            let w = {
                name: "none",
                crypto: null,
                subtle: null
            };

            function S(e, t, s) {
                if ("undefined" != typeof process && "pid" in process && void 0 !== r.g && "undefined" == typeof window) {
                    if (void 0 === r.g[process.pid]) r.g[process.pid] = {};
                    else if ("object" != typeof r.g[process.pid]) throw new Error(`Name global.${process.pid} already exists and it is not an object`);
                    if (void 0 === r.g[process.pid].pkijs) r.g[process.pid].pkijs = {};
                    else if ("object" != typeof r.g[process.pid].pkijs) throw new Error(`Name global.${process.pid}.pkijs already exists and it is not an object`);
                    r.g[process.pid].pkijs.engine = {
                        name: e,
                        crypto: t,
                        subtle: s
                    }
                } else w.name !== e && (w = {
                    name: e,
                    crypto: t,
                    subtle: s
                })
            }

            function k() {
                if ("undefined" != typeof process && "pid" in process && void 0 !== r.g && "undefined" == typeof window) {
                    let e;
                    try {
                        e = r.g[process.pid].pkijs.engine
                    } catch (e) {
                        throw new Error('Please call "setEngine" before call to "getEngine"')
                    }
                    return e
                }
                return w
            }

            function A() {
                const e = k();
                if (null !== e.subtle) return e.subtle
            }

            function C(e) {
                return k().subtle.getRandomValues(e)
            }

            function I(e) {
                return k().subtle.getOIDByAlgorithm(e)
            }

            function P(e, t) {
                return k().subtle.getAlgorithmParameters(e, t)
            }

            function B(e) {
                if (e.byteLength % 2 != 0) return new ArrayBuffer(0);
                const t = e.byteLength / 2,
                    r = new ArrayBuffer(t);
                new Uint8Array(r).set(new Uint8Array(e, 0, t));
                const a = new s.Integer({
                        valueHex: r
                    }),
                    n = new ArrayBuffer(t);
                new Uint8Array(n).set(new Uint8Array(e, t, t));
                const i = new s.Integer({
                    valueHex: n
                });
                return new s.Sequence({
                    value: [a.convertToDER(), i.convertToDER()]
                }).toBER(!1)
            }

            function V(e) {
                let t = !1,
                    r = "";
                const s = e.trim();
                for (let e = 0; e < s.length; e++) 32 === s.charCodeAt(e) ? !1 === t && (t = !0) : (t && (r += " ", t = !1), r += s[e]);
                return r.toLowerCase()
            }

            function N(e) {
                if (e instanceof s.Sequence == !1) return new ArrayBuffer(0);
                if (2 !== e.valueBlock.value.length) return new ArrayBuffer(0);
                if (e.valueBlock.value[0] instanceof s.Integer == !1) return new ArrayBuffer(0);
                if (e.valueBlock.value[1] instanceof s.Integer == !1) return new ArrayBuffer(0);
                const t = e.valueBlock.value[0].convertFromDER(),
                    r = e.valueBlock.value[1].convertFromDER();
                switch (!0) {
                    case t.valueBlock.valueHex.byteLength < r.valueBlock.valueHex.byteLength: {
                        if (r.valueBlock.valueHex.byteLength - t.valueBlock.valueHex.byteLength != 1) throw new Error("Incorrect DER integer decoding");
                        const e = r.valueBlock.valueHex.byteLength,
                            s = new Uint8Array(t.valueBlock.valueHex),
                            n = new ArrayBuffer(e),
                            i = new Uint8Array(n);
                        return i.set(s, 1), i[0] = 0, (0, a.utilConcatBuf)(n, r.valueBlock.valueHex)
                    }
                    case t.valueBlock.valueHex.byteLength > r.valueBlock.valueHex.byteLength: {
                        if (t.valueBlock.valueHex.byteLength - r.valueBlock.valueHex.byteLength != 1) throw new Error("Incorrect DER integer decoding");
                        const e = t.valueBlock.valueHex.byteLength,
                            s = new Uint8Array(r.valueBlock.valueHex),
                            n = new ArrayBuffer(e),
                            i = new Uint8Array(n);
                        return i.set(s, 1), i[0] = 0, (0, a.utilConcatBuf)(t.valueBlock.valueHex, n)
                    }
                    default:
                        if (t.valueBlock.valueHex.byteLength % 2) {
                            const e = t.valueBlock.valueHex.byteLength + 1,
                                s = new Uint8Array(t.valueBlock.valueHex),
                                n = new ArrayBuffer(e),
                                i = new Uint8Array(n);
                            i.set(s, 1), i[0] = 0;
                            const o = new Uint8Array(r.valueBlock.valueHex),
                                l = new ArrayBuffer(e),
                                c = new Uint8Array(l);
                            return c.set(o, 1), c[0] = 0, (0, a.utilConcatBuf)(n, l)
                        }
                }
                return (0, a.utilConcatBuf)(t.valueBlock.valueHex, r.valueBlock.valueHex)
            }

            function E(e) {
                return k().subtle.getAlgorithmByOID(e)
            }

            function x(e) {
                return k().subtle.getHashAlgorithm(e)
            }

            function O(e, t, r, s) {
                switch (e.toUpperCase()) {
                    case "SHA-1":
                    case "SHA-256":
                    case "SHA-384":
                    case "SHA-512":
                        break;
                    default:
                        return Promise.reject(`Unknown hash function: ${e}`)
                }
                if (t instanceof ArrayBuffer == !1) return Promise.reject('Please set "Zbuffer" as "ArrayBuffer"');
                if (0 === t.byteLength) return Promise.reject('"Zbuffer" has zero length, error');
                if (s instanceof ArrayBuffer == !1) return Promise.reject('Please set "SharedInfo" as "ArrayBuffer"');
                if (r > 255) return Promise.reject('Please set "Counter" variable to value less or equal to 255');
                const n = new ArrayBuffer(4),
                    i = new Uint8Array(n);
                i[0] = 0, i[1] = 0, i[2] = 0, i[3] = r;
                let o = new ArrayBuffer(0);
                const l = A();
                return void 0 === l ? Promise.reject("Unable to create WebCrypto object") : (o = (0, a.utilConcatBuf)(o, t), o = (0, a.utilConcatBuf)(o, n), o = (0, a.utilConcatBuf)(o, s), l.digest({
                    name: e
                }, o).then((e => ({
                    counter: r,
                    result: e
                }))))
            }

            function D(e, t, r, s) {
                let n = 0,
                    i = 1;
                const o = [];
                switch (e.toUpperCase()) {
                    case "SHA-1":
                        n = 160;
                        break;
                    case "SHA-256":
                        n = 256;
                        break;
                    case "SHA-384":
                        n = 384;
                        break;
                    case "SHA-512":
                        n = 512;
                        break;
                    default:
                        return Promise.reject(`Unknown hash function: ${e}`)
                }
                if (t instanceof ArrayBuffer == !1) return Promise.reject('Please set "Zbuffer" as "ArrayBuffer"');
                if (0 === t.byteLength) return Promise.reject('"Zbuffer" has zero length, error');
                if (s instanceof ArrayBuffer == !1) return Promise.reject('Please set "SharedInfo" as "ArrayBuffer"');
                const l = r / n;
                Math.floor(l) > 0 && (i = Math.floor(l), l - i > 0 && i++);
                for (let r = 1; r <= i; r++) o.push(O(e, t, r, s));
                return Promise.all(o).then((e => {
                    let t = new ArrayBuffer(0),
                        s = 1,
                        n = !0;
                    for (; n;) {
                        n = !1;
                        for (const r of e)
                            if (r.counter === s) {
                                t = (0, a.utilConcatBuf)(t, r.result), n = !0;
                                break
                            } s++
                    }
                    if (r >>= 3, t.byteLength > r) {
                        const e = new ArrayBuffer(r),
                            s = new Uint8Array(e),
                            a = new Uint8Array(t);
                        for (let e = 0; e < r; e++) s[e] = a[e];
                        return e
                    }
                    return t
                }))
            }! function() {
                if ("undefined" != typeof self && "crypto" in self) {
                    let e = "webcrypto";
                    const t = self.crypto;
                    let r;
                    if ("webkitSubtle" in self.crypto) {
                        try {
                            r = self.crypto.webkitSubtle
                        } catch (e) {
                            r = self.crypto.subtle
                        }
                        e = "safari"
                    }
                    "subtle" in self.crypto && (r = self.crypto.subtle), w = void 0 === r ? {
                        name: e,
                        crypto: t,
                        subtle: null
                    } : {
                        name: e,
                        crypto: t,
                        subtle: new v({
                            name: e,
                            crypto: self.crypto,
                            subtle: r
                        })
                    }
                }
                S(w.name, w.crypto, w.subtle)
            }();
            class j {
                constructor(e = {}) {
                    this.type = (0, a.getParametersValue)(e, "type", j.defaultValues("type")), this.value = (0, a.getParametersValue)(e, "value", j.defaultValues("value")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "type":
                            return "";
                        case "value":
                            return {};
                        default:
                            throw new Error(`Invalid member name for AttributeTypeAndValue class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.type || ""
                        }), new s.Any({
                            name: t.value || ""
                        })]
                    })
                }
                static blockName() {
                    return "AttributeTypeAndValue"
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["type", "typeValue"]);
                    const t = s.compareSchema(e, e, j.schema({
                        names: {
                            type: "type",
                            value: "typeValue"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for AttributeTypeAndValue");
                    this.type = t.result.type.valueBlock.toString(), this.value = t.result.typeValue
                }
                toSchema() {
                    return new s.Sequence({
                        value: [new s.ObjectIdentifier({
                            value: this.type
                        }), this.value]
                    })
                }
                toJSON() {
                    const e = {
                        type: this.type
                    };
                    return 0 !== Object.keys(this.value).length ? e.value = this.value.toJSON() : e.value = this.value, e
                }
                isEqual(e) {
                    const t = [s.Utf8String.blockName(), s.BmpString.blockName(), s.UniversalString.blockName(), s.NumericString.blockName(), s.PrintableString.blockName(), s.TeletexString.blockName(), s.VideotexString.blockName(), s.IA5String.blockName(), s.GraphicString.blockName(), s.VisibleString.blockName(), s.GeneralString.blockName(), s.CharacterString.blockName()];
                    if (e.constructor.blockName() === j.blockName()) {
                        if (this.type !== e.type) return !1;
                        let r = [!1, !1];
                        const s = this.value.constructor.blockName();
                        for (const a of t) s === a && (r[0] = !0), e.value.constructor.blockName() === a && (r[1] = !0);
                        if (r[0] ^ r[1]) return !1;
                        if (r = r[0] && r[1], r) {
                            const t = V(this.value.valueBlock.value),
                                r = V(e.value.valueBlock.value);
                            if (0 !== t.localeCompare(r)) return !1
                        } else if (!1 === (0, a.isEqualBuffer)(this.value.valueBeforeDecode, e.value.valueBeforeDecode)) return !1;
                        return !0
                    }
                    return e instanceof ArrayBuffer && (0, a.isEqualBuffer)(this.value.valueBeforeDecode, e)
                }
            }
            class R {
                constructor(e = {}) {
                    this.typesAndValues = (0, a.getParametersValue)(e, "typesAndValues", R.defaultValues("typesAndValues")), this.valueBeforeDecode = (0, a.getParametersValue)(e, "valueBeforeDecode", R.defaultValues("valueBeforeDecode")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "typesAndValues":
                            return [];
                        case "valueBeforeDecode":
                            return new ArrayBuffer(0);
                        default:
                            throw new Error(`Invalid member name for RelativeDistinguishedNames class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "typesAndValues":
                            return 0 === t.length;
                        case "valueBeforeDecode":
                            return 0 === t.byteLength;
                        default:
                            throw new Error(`Invalid member name for RelativeDistinguishedNames class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.repeatedSequence || "",
                            value: new s.Set({
                                value: [new s.Repeated({
                                    name: t.repeatedSet || "",
                                    value: j.schema(t.typeAndValue || {})
                                })]
                            })
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["RDN", "typesAndValues"]);
                    const t = s.compareSchema(e, e, R.schema({
                        names: {
                            blockName: "RDN",
                            repeatedSet: "typesAndValues"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for RelativeDistinguishedNames");
                    "typesAndValues" in t.result && (this.typesAndValues = Array.from(t.result.typesAndValues, (e => new j({
                        schema: e
                    })))), this.valueBeforeDecode = t.result.RDN.valueBeforeDecode
                }
                toSchema() {
                    if (0 === this.valueBeforeDecode.byteLength) return new s.Sequence({
                        value: [new s.Set({
                            value: Array.from(this.typesAndValues, (e => e.toSchema()))
                        })]
                    });
                    return s.fromBER(this.valueBeforeDecode).result
                }
                toJSON() {
                    return {
                        typesAndValues: Array.from(this.typesAndValues, (e => e.toJSON()))
                    }
                }
                isEqual(e) {
                    if (e instanceof R) {
                        if (this.typesAndValues.length !== e.typesAndValues.length) return !1;
                        for (const [t, r] of this.typesAndValues.entries())
                            if (!1 === r.isEqual(e.typesAndValues[t])) return !1;
                        return !0
                    }
                    return e instanceof ArrayBuffer && (0, a.isEqualBuffer)(this.valueBeforeDecode, e)
                }
            }

            function q(e = {}, t = !1) {
                const r = (0, a.getParametersValue)(e, "names", {});
                return new s.Sequence({
                    optional: t,
                    value: [new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 2,
                            tagNumber: 1
                        },
                        name: r.country_name || "",
                        value: [new s.Choice({
                            value: [new s.NumericString, new s.PrintableString]
                        })]
                    }), new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 2,
                            tagNumber: 2
                        },
                        name: r.administration_domain_name || "",
                        value: [new s.Choice({
                            value: [new s.NumericString, new s.PrintableString]
                        })]
                    }), new s.Primitive({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        name: r.network_address || "",
                        isHexOnly: !0
                    }), new s.Primitive({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        name: r.terminal_identifier || "",
                        isHexOnly: !0
                    }), new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 2
                        },
                        name: r.private_domain_name || "",
                        value: [new s.Choice({
                            value: [new s.NumericString, new s.PrintableString]
                        })]
                    }), new s.Primitive({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 3
                        },
                        name: r.organization_name || "",
                        isHexOnly: !0
                    }), new s.Primitive({
                        optional: !0,
                        name: r.numeric_user_identifier || "",
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 4
                        },
                        isHexOnly: !0
                    }), new s.Constructed({
                        optional: !0,
                        name: r.personal_name || "",
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 5
                        },
                        value: [new s.Primitive({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            isHexOnly: !0
                        }), new s.Primitive({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            isHexOnly: !0
                        }), new s.Primitive({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            },
                            isHexOnly: !0
                        }), new s.Primitive({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 3
                            },
                            isHexOnly: !0
                        })]
                    }), new s.Constructed({
                        optional: !0,
                        name: r.organizational_unit_names || "",
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 6
                        },
                        value: [new s.Repeated({
                            value: new s.PrintableString
                        })]
                    })]
                })
            }

            function T(e = !1) {
                return new s.Sequence({
                    optional: e,
                    value: [new s.PrintableString, new s.PrintableString]
                })
            }

            function H(e = !1) {
                return new s.Set({
                    optional: e,
                    value: [new s.Primitive({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        isHexOnly: !0
                    }), new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: [new s.Any]
                    })]
                })
            }
            class L {
                constructor(e = {}) {
                    this.type = (0, a.getParametersValue)(e, "type", L.defaultValues("type")), this.value = (0, a.getParametersValue)(e, "value", L.defaultValues("value")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "type":
                            return 9;
                        case "value":
                            return {};
                        default:
                            throw new Error(`Invalid member name for GeneralName class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "type":
                            return t === L.defaultValues(e);
                        case "value":
                            return 0 === Object.keys(t).length;
                        default:
                            throw new Error(`Invalid member name for GeneralName class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Choice({
                        value: [new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            name: t.blockName || "",
                            value: [new s.ObjectIdentifier, new s.Constructed({
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 0
                                },
                                value: [new s.Any]
                            })]
                        }), new s.Primitive({
                            name: t.blockName || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            }
                        }), new s.Primitive({
                            name: t.blockName || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            }
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 3
                            },
                            name: t.blockName || "",
                            value: [q(t.builtInStandardAttributes || {}, !1), T(!0), H(!0)]
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 4
                            },
                            name: t.blockName || "",
                            value: [R.schema(t.directoryName || {})]
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 5
                            },
                            name: t.blockName || "",
                            value: [new s.Constructed({
                                optional: !0,
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 0
                                },
                                value: [new s.Choice({
                                    value: [new s.TeletexString, new s.PrintableString, new s.UniversalString, new s.Utf8String, new s.BmpString]
                                })]
                            }), new s.Constructed({
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 1
                                },
                                value: [new s.Choice({
                                    value: [new s.TeletexString, new s.PrintableString, new s.UniversalString, new s.Utf8String, new s.BmpString]
                                })]
                            })]
                        }), new s.Primitive({
                            name: t.blockName || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 6
                            }
                        }), new s.Primitive({
                            name: t.blockName || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 7
                            }
                        }), new s.Primitive({
                            name: t.blockName || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 8
                            }
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["blockName", "otherName", "rfc822Name", "dNSName", "x400Address", "directoryName", "ediPartyName", "uniformResourceIdentifier", "iPAddress", "registeredID"]);
                    const t = s.compareSchema(e, e, L.schema({
                        names: {
                            blockName: "blockName",
                            otherName: "otherName",
                            rfc822Name: "rfc822Name",
                            dNSName: "dNSName",
                            x400Address: "x400Address",
                            directoryName: {
                                names: {
                                    blockName: "directoryName"
                                }
                            },
                            ediPartyName: "ediPartyName",
                            uniformResourceIdentifier: "uniformResourceIdentifier",
                            iPAddress: "iPAddress",
                            registeredID: "registeredID"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for GeneralName");
                    switch (this.type = t.result.blockName.idBlock.tagNumber, this.type) {
                        case 0:
                            this.value = t.result.blockName;
                            break;
                        case 1:
                        case 2:
                        case 6: {
                            const e = t.result.blockName;
                            e.idBlock.tagClass = 1, e.idBlock.tagNumber = 22;
                            const r = e.toBER(!1);
                            this.value = s.fromBER(r).result.valueBlock.value
                        }
                        break;
                    case 3:
                        this.value = t.result.blockName;
                        break;
                    case 4:
                        this.value = new R({
                            schema: t.result.directoryName
                        });
                        break;
                    case 5:
                        this.value = t.result.ediPartyName;
                        break;
                    case 7:
                        this.value = new s.OctetString({
                            valueHex: t.result.blockName.valueBlock.valueHex
                        });
                        break;
                    case 8: {
                        const e = t.result.blockName;
                        e.idBlock.tagClass = 1, e.idBlock.tagNumber = 6;
                        const r = e.toBER(!1);
                        this.value = s.fromBER(r).result.valueBlock.toString()
                    }
                    }
                }
                toSchema() {
                    switch (this.type) {
                        case 0:
                        case 3:
                        case 5:
                            return new s.Constructed({
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: this.type
                                },
                                value: [this.value]
                            });
                        case 1:
                        case 2:
                        case 6: {
                            const e = new s.IA5String({
                                value: this.value
                            });
                            return e.idBlock.tagClass = 3, e.idBlock.tagNumber = this.type, e
                        }
                        case 4:
                            return new s.Constructed({
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 4
                                },
                                value: [this.value.toSchema()]
                            });
                        case 7: {
                            const e = this.value;
                            return e.idBlock.tagClass = 3, e.idBlock.tagNumber = this.type, e
                        }
                        case 8: {
                            const e = new s.ObjectIdentifier({
                                value: this.value
                            });
                            return e.idBlock.tagClass = 3, e.idBlock.tagNumber = this.type, e
                        }
                        default:
                            return L.schema()
                    }
                }
                toJSON() {
                    const e = {
                        type: this.type,
                        value: ""
                    };
                    if ("string" == typeof this.value) e.value = this.value;
                    else try {
                        e.value = this.value.toJSON()
                    } catch (e) {}
                    return e
                }
            }
            class K {
                constructor(e = {}) {
                    this.accessMethod = (0, a.getParametersValue)(e, "accessMethod", K.defaultValues("accessMethod")), this.accessLocation = (0, a.getParametersValue)(e, "accessLocation", K.defaultValues("accessLocation")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "accessMethod":
                            return "";
                        case "accessLocation":
                            return new L;
                        default:
                            throw new Error(`Invalid member name for AccessDescription class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.accessMethod || ""
                        }), L.schema(t.accessLocation || {})]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["accessMethod", "accessLocation"]);
                    const t = s.compareSchema(e, e, K.schema({
                        names: {
                            accessMethod: "accessMethod",
                            accessLocation: {
                                names: {
                                    blockName: "accessLocation"
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for AccessDescription");
                    this.accessMethod = t.result.accessMethod.valueBlock.toString(), this.accessLocation = new L({
                        schema: t.result.accessLocation
                    })
                }
                toSchema() {
                    return new s.Sequence({
                        value: [new s.ObjectIdentifier({
                            value: this.accessMethod
                        }), this.accessLocation.toSchema()]
                    })
                }
                toJSON() {
                    return {
                        accessMethod: this.accessMethod,
                        accessLocation: this.accessLocation.toJSON()
                    }
                }
            }
            class U {
                constructor(e = {}) {
                    "seconds" in e && (this.seconds = (0, a.getParametersValue)(e, "seconds", U.defaultValues("seconds"))), "millis" in e && (this.millis = (0, a.getParametersValue)(e, "millis", U.defaultValues("millis"))), "micros" in e && (this.micros = (0, a.getParametersValue)(e, "micros", U.defaultValues("micros"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "seconds":
                        case "millis":
                        case "micros":
                            return 0;
                        default:
                            throw new Error(`Invalid member name for Accuracy class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "seconds":
                        case "millis":
                        case "micros":
                            return t === U.defaultValues(e);
                        default:
                            throw new Error(`Invalid member name for Accuracy class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        optional: !0,
                        value: [new s.Integer({
                            optional: !0,
                            name: t.seconds || ""
                        }), new s.Primitive({
                            name: t.millis || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            }
                        }), new s.Primitive({
                            name: t.micros || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            }
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["seconds", "millis", "micros"]);
                    const t = s.compareSchema(e, e, U.schema({
                        names: {
                            seconds: "seconds",
                            millis: "millis",
                            micros: "micros"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for Accuracy");
                    if ("seconds" in t.result && (this.seconds = t.result.seconds.valueBlock.valueDec), "millis" in t.result) {
                        const e = new s.Integer({
                            valueHex: t.result.millis.valueBlock.valueHex
                        });
                        this.millis = e.valueBlock.valueDec
                    }
                    if ("micros" in t.result) {
                        const e = new s.Integer({
                            valueHex: t.result.micros.valueBlock.valueHex
                        });
                        this.micros = e.valueBlock.valueDec
                    }
                }
                toSchema() {
                    const e = [];
                    if ("seconds" in this && e.push(new s.Integer({
                            value: this.seconds
                        })), "millis" in this) {
                        const t = new s.Integer({
                            value: this.millis
                        });
                        e.push(new s.Primitive({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            valueHex: t.valueBlock.valueHex
                        }))
                    }
                    if ("micros" in this) {
                        const t = new s.Integer({
                            value: this.micros
                        });
                        e.push(new s.Primitive({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            valueHex: t.valueBlock.valueHex
                        }))
                    }
                    return new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {};
                    return "seconds" in this && (e.seconds = this.seconds), "millis" in this && (e.millis = this.millis), "micros" in this && (e.micros = this.micros), e
                }
            }
            class J {
                constructor(e = {}) {
                    this.altNames = (0, a.getParametersValue)(e, "altNames", J.defaultValues("altNames")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "altNames":
                            return [];
                        default:
                            throw new Error(`Invalid member name for AltName class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.altNames || "",
                            value: L.schema()
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["altNames"]);
                    const t = s.compareSchema(e, e, J.schema({
                        names: {
                            altNames: "altNames"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for AltName");
                    "altNames" in t.result && (this.altNames = Array.from(t.result.altNames, (e => new L({
                        schema: e
                    }))))
                }
                toSchema() {
                    return new s.Sequence({
                        value: Array.from(this.altNames, (e => e.toSchema()))
                    })
                }
                toJSON() {
                    return {
                        altNames: Array.from(this.altNames, (e => e.toJSON()))
                    }
                }
            }
            class $ {
                constructor(e = {}) {
                    this.contentType = (0, a.getParametersValue)(e, "contentType", $.defaultValues("contentType")), this.content = (0, a.getParametersValue)(e, "content", $.defaultValues("content")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "contentType":
                            return "";
                        case "content":
                            return new s.Any;
                        default:
                            throw new Error(`Invalid member name for ContentInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "contentType":
                            return "" === t;
                        case "content":
                            return t instanceof s.Any;
                        default:
                            throw new Error(`Invalid member name for ContentInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return "optional" in t == !1 && (t.optional = !1), new s.Sequence({
                        name: t.blockName || "ContentInfo",
                        optional: t.optional,
                        value: [new s.ObjectIdentifier({
                            name: t.contentType || "contentType"
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Any({
                                name: t.content || "content"
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["contentType", "content"]);
                    const t = s.compareSchema(e, e, $.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for ContentInfo");
                    this.contentType = t.result.contentType.valueBlock.toString(), this.content = t.result.content
                }
                toSchema() {
                    return new s.Sequence({
                        value: [new s.ObjectIdentifier({
                            value: this.contentType
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [this.content]
                        })]
                    })
                }
                toJSON() {
                    const e = {
                        contentType: this.contentType
                    };
                    return this.content instanceof s.Any || (e.content = this.content.toJSON()), e
                }
            }
            class _ {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", _.defaultValues("version")), this.encryptedContentInfo = (0, a.getParametersValue)(e, "encryptedContentInfo", _.defaultValues("encryptedContentInfo")), "unprotectedAttrs" in e && (this.unprotectedAttrs = (0, a.getParametersValue)(e, "unprotectedAttrs", _.defaultValues("unprotectedAttrs"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 0;
                        case "encryptedContentInfo":
                            return new g;
                        case "unprotectedAttrs":
                            return [];
                        default:
                            throw new Error(`Invalid member name for EncryptedData class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "version":
                            return 0 === t;
                        case "encryptedContentInfo":
                            return g.compareWithDefault("contentType", t.contentType) && g.compareWithDefault("contentEncryptionAlgorithm", t.contentEncryptionAlgorithm) && g.compareWithDefault("encryptedContent", t.encryptedContent);
                        case "unprotectedAttrs":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for EncryptedData class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.version || ""
                        }), g.schema(t.encryptedContentInfo || {}), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [new s.Repeated({
                                name: t.unprotectedAttrs || "",
                                value: c.schema()
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["version", "encryptedContentInfo", "unprotectedAttrs"]);
                    const t = s.compareSchema(e, e, _.schema({
                        names: {
                            version: "version",
                            encryptedContentInfo: {
                                names: {
                                    blockName: "encryptedContentInfo"
                                }
                            },
                            unprotectedAttrs: "unprotectedAttrs"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for EncryptedData");
                    this.version = t.result.version.valueBlock.valueDec, this.encryptedContentInfo = new g({
                        schema: t.result.encryptedContentInfo
                    }), "unprotectedAttrs" in t.result && (this.unprotectedAttrs = Array.from(t.result.unprotectedAttrs, (e => new c({
                        schema: e
                    }))))
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.Integer({
                        value: this.version
                    })), e.push(this.encryptedContentInfo.toSchema()), "unprotectedAttrs" in this && e.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: Array.from(this.unprotectedAttrs, (e => e.toSchema()))
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        version: this.version,
                        encryptedContentInfo: this.encryptedContentInfo.toJSON()
                    };
                    return "unprotectedAttrs" in this && (e.unprotectedAttrs = Array.from(this.unprotectedAttrs, (e => e.toJSON()))), e
                }
                encrypt(e) {
                    if (e instanceof Object == !1) return Promise.reject('Parameters must have type "Object"');
                    const t = k();
                    return void 0 === t ? Promise.reject("Unable to initialize cryptographic engine") : (e.contentType = "1.2.840.113549.1.7.1", "encryptEncryptedContentInfo" in t.subtle ? t.subtle.encryptEncryptedContentInfo(e).then((e => {
                        this.encryptedContentInfo = e
                    })) : Promise.reject(`No support for "encryptEncryptedContentInfo" in current crypto engine ${t.name}`))
                }
                decrypt(e) {
                    if (e instanceof Object == !1) return Promise.reject('Parameters must have type "Object"');
                    const t = k();
                    return void 0 === t ? Promise.reject("Unable to initialize cryptographic engine") : (e.encryptedContentInfo = this.encryptedContentInfo, "decryptEncryptedContentInfo" in t.subtle ? t.subtle.decryptEncryptedContentInfo(e) : Promise.reject(`No support for "decryptEncryptedContentInfo" in current crypto engine ${t.name}`))
                }
            }
            class M {
                constructor(e = {}) {
                    this.encryptionAlgorithm = (0, a.getParametersValue)(e, "encryptionAlgorithm", M.defaultValues("encryptionAlgorithm")), this.encryptedData = (0, a.getParametersValue)(e, "encryptedData", M.defaultValues("encryptedData")), "parsedValue" in e && (this.parsedValue = (0, a.getParametersValue)(e, "parsedValue", M.defaultValues("parsedValue"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "encryptionAlgorithm":
                            return new n;
                        case "encryptedData":
                            return new s.OctetString;
                        case "parsedValue":
                            return {};
                        default:
                            throw new Error(`Invalid member name for PKCS8ShroudedKeyBag class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "encryptionAlgorithm":
                            return n.compareWithDefault("algorithmId", t.algorithmId) && "algorithmParams" in t == !1;
                        case "encryptedData":
                            return t.isEqual(M.defaultValues(e));
                        case "parsedValue":
                            return t instanceof Object && 0 === Object.keys(t).length;
                        default:
                            throw new Error(`Invalid member name for PKCS8ShroudedKeyBag class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [n.schema(t.encryptionAlgorithm || {
                            names: {
                                blockName: "encryptionAlgorithm"
                            }
                        }), new s.Choice({
                            value: [new s.OctetString({
                                name: t.encryptedData || "encryptedData"
                            }), new s.OctetString({
                                idBlock: {
                                    isConstructed: !0
                                },
                                name: t.encryptedData || "encryptedData"
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["encryptionAlgorithm", "encryptedData"]);
                    const t = s.compareSchema(e, e, M.schema({
                        names: {
                            encryptionAlgorithm: {
                                names: {
                                    blockName: "encryptionAlgorithm"
                                }
                            },
                            encryptedData: "encryptedData"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PKCS8ShroudedKeyBag");
                    this.encryptionAlgorithm = new n({
                        schema: t.result.encryptionAlgorithm
                    }), this.encryptedData = t.result.encryptedData
                }
                toSchema() {
                    return new s.Sequence({
                        value: [this.encryptionAlgorithm.toSchema(), this.encryptedData]
                    })
                }
                toJSON() {
                    return {
                        encryptionAlgorithm: this.encryptionAlgorithm.toJSON(),
                        encryptedData: this.encryptedData.toJSON()
                    }
                }
                parseInternalValues(e) {
                    let t = Promise.resolve();
                    const r = new _({
                        encryptedContentInfo: new g({
                            contentEncryptionAlgorithm: this.encryptionAlgorithm,
                            encryptedContent: this.encryptedData
                        })
                    });
                    return t = t.then((() => r.decrypt(e)), (e => Promise.reject(e))), t = t.then((e => {
                        const t = s.fromBER(e);
                        return -1 === t.offset ? Promise.reject("Error during parsing ASN.1 data") : (this.parsedValue = new f({
                            schema: t.result
                        }), Promise.resolve())
                    }), (e => Promise.reject(e))), t
                }
                makeInternalValues(e) {
                    if ("parsedValue" in this == !1) return Promise.reject('Please initialize "parsedValue" first');
                    let t = Promise.resolve();
                    const r = new _;
                    return t = t.then((() => (e.contentToEncrypt = this.parsedValue.toSchema().toBER(!1), r.encrypt(e))), (e => Promise.reject(e))), t = t.then((() => {
                        this.encryptionAlgorithm = r.encryptedContentInfo.contentEncryptionAlgorithm, this.encryptedData = r.encryptedContentInfo.encryptedContent
                    })), t
                }
            }
            class F {
                constructor(e = {}) {
                    this.type = (0, a.getParametersValue)(e, "type", F.defaultValues("type")), this.value = (0, a.getParametersValue)(e, "value", F.defaultValues("value")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "type":
                            return 0;
                        case "value":
                            return new Date(0, 0, 0);
                        default:
                            throw new Error(`Invalid member name for Time class: ${e}`)
                    }
                }
                static schema(e = {}, t = !1) {
                    const r = (0, a.getParametersValue)(e, "names", {});
                    return new s.Choice({
                        optional: t,
                        value: [new s.UTCTime({
                            name: r.utcTimeName || ""
                        }), new s.GeneralizedTime({
                            name: r.generalTimeName || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["utcTimeName", "generalTimeName"]);
                    const t = s.compareSchema(e, e, F.schema({
                        names: {
                            utcTimeName: "utcTimeName",
                            generalTimeName: "generalTimeName"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for Time");
                    "utcTimeName" in t.result && (this.type = 0, this.value = t.result.utcTimeName.toDate()), "generalTimeName" in t.result && (this.type = 1, this.value = t.result.generalTimeName.toDate())
                }
                toSchema() {
                    let e = {};
                    return 0 === this.type && (e = new s.UTCTime({
                        valueDate: this.value
                    })), 1 === this.type && (e = new s.GeneralizedTime({
                        valueDate: this.value
                    })), e
                }
                toJSON() {
                    return {
                        type: this.type,
                        value: this.value
                    }
                }
            }
            class W {
                constructor(e = {}) {
                    this.attributes = (0, a.getParametersValue)(e, "attributes", W.defaultValues("attributes")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "attributes":
                            return [];
                        default:
                            throw new Error(`Invalid member name for SubjectDirectoryAttributes class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.attributes || "",
                            value: c.schema()
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["attributes"]);
                    const t = s.compareSchema(e, e, W.schema({
                        names: {
                            attributes: "attributes"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for SubjectDirectoryAttributes");
                    this.attributes = Array.from(t.result.attributes, (e => new c({
                        schema: e
                    })))
                }
                toSchema() {
                    return new s.Sequence({
                        value: Array.from(this.attributes, (e => e.toSchema()))
                    })
                }
                toJSON() {
                    return {
                        attributes: Array.from(this.attributes, (e => e.toJSON()))
                    }
                }
            }
            class G {
                constructor(e = {}) {
                    "notBefore" in e && (this.notBefore = (0, a.getParametersValue)(e, "notBefore", G.defaultValues("notBefore"))), "notAfter" in e && (this.notAfter = (0, a.getParametersValue)(e, "notAfter", G.defaultValues("notAfter"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "notBefore":
                        case "notAfter":
                            return new Date;
                        default:
                            throw new Error(`Invalid member name for PrivateKeyUsagePeriod class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Primitive({
                            name: t.notBefore || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            }
                        }), new s.Primitive({
                            name: t.notAfter || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            }
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["notBefore", "notAfter"]);
                    const t = s.compareSchema(e, e, G.schema({
                        names: {
                            notBefore: "notBefore",
                            notAfter: "notAfter"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PrivateKeyUsagePeriod");
                    if ("notBefore" in t.result) {
                        const e = new s.GeneralizedTime;
                        e.fromBuffer(t.result.notBefore.valueBlock.valueHex), this.notBefore = e.toDate()
                    }
                    if ("notAfter" in t.result) {
                        const e = new s.GeneralizedTime({
                            valueHex: t.result.notAfter.valueBlock.valueHex
                        });
                        e.fromBuffer(t.result.notAfter.valueBlock.valueHex), this.notAfter = e.toDate()
                    }
                }
                toSchema() {
                    const e = [];
                    return "notBefore" in this && e.push(new s.Primitive({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        valueHex: new s.GeneralizedTime({
                            valueDate: this.notBefore
                        }).valueBlock.valueHex
                    })), "notAfter" in this && e.push(new s.Primitive({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        valueHex: new s.GeneralizedTime({
                            valueDate: this.notAfter
                        }).valueBlock.valueHex
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {};
                    return "notBefore" in this && (e.notBefore = this.notBefore), "notAfter" in this && (e.notAfter = this.notAfter), e
                }
            }
            class Q {
                constructor(e = {}) {
                    this.cA = (0, a.getParametersValue)(e, "cA", !1), "pathLenConstraint" in e && (this.pathLenConstraint = (0, a.getParametersValue)(e, "pathLenConstraint", 0)), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "cA":
                            return !1;
                        default:
                            throw new Error(`Invalid member name for BasicConstraints class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Boolean({
                            optional: !0,
                            name: t.cA || ""
                        }), new s.Integer({
                            optional: !0,
                            name: t.pathLenConstraint || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["cA", "pathLenConstraint"]);
                    const t = s.compareSchema(e, e, Q.schema({
                        names: {
                            cA: "cA",
                            pathLenConstraint: "pathLenConstraint"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for BasicConstraints");
                    "cA" in t.result && (this.cA = t.result.cA.valueBlock.value), "pathLenConstraint" in t.result && (t.result.pathLenConstraint.valueBlock.isHexOnly ? this.pathLenConstraint = t.result.pathLenConstraint : this.pathLenConstraint = t.result.pathLenConstraint.valueBlock.valueDec)
                }
                toSchema() {
                    const e = [];
                    return this.cA !== Q.defaultValues("cA") && e.push(new s.Boolean({
                        value: this.cA
                    })), "pathLenConstraint" in this && (this.pathLenConstraint instanceof s.Integer ? e.push(this.pathLenConstraint) : e.push(new s.Integer({
                        value: this.pathLenConstraint
                    }))), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {};
                    return this.cA !== Q.defaultValues("cA") && (e.cA = this.cA), "pathLenConstraint" in this && (this.pathLenConstraint instanceof s.Integer ? e.pathLenConstraint = this.pathLenConstraint.toJSON() : e.pathLenConstraint = this.pathLenConstraint), e
                }
            }
            class z {
                constructor(e = {}) {
                    "distributionPoint" in e && (this.distributionPoint = (0, a.getParametersValue)(e, "distributionPoint", z.defaultValues("distributionPoint"))), this.onlyContainsUserCerts = (0, a.getParametersValue)(e, "onlyContainsUserCerts", z.defaultValues("onlyContainsUserCerts")), this.onlyContainsCACerts = (0, a.getParametersValue)(e, "onlyContainsCACerts", z.defaultValues("onlyContainsCACerts")), "onlySomeReasons" in e && (this.onlySomeReasons = (0, a.getParametersValue)(e, "onlySomeReasons", z.defaultValues("onlySomeReasons"))), this.indirectCRL = (0, a.getParametersValue)(e, "indirectCRL", z.defaultValues("indirectCRL")), this.onlyContainsAttributeCerts = (0, a.getParametersValue)(e, "onlyContainsAttributeCerts", z.defaultValues("onlyContainsAttributeCerts")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "distributionPoint":
                            return [];
                        case "onlyContainsUserCerts":
                        case "onlyContainsCACerts":
                            return !1;
                        case "onlySomeReasons":
                            return 0;
                        case "indirectCRL":
                        case "onlyContainsAttributeCerts":
                            return !1;
                        default:
                            throw new Error(`Invalid member name for IssuingDistributionPoint class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Choice({
                                value: [new s.Constructed({
                                    name: t.distributionPoint || "",
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: 0
                                    },
                                    value: [new s.Repeated({
                                        name: t.distributionPointNames || "",
                                        value: L.schema()
                                    })]
                                }), new s.Constructed({
                                    name: t.distributionPoint || "",
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: 1
                                    },
                                    value: R.schema().valueBlock.value
                                })]
                            })]
                        }), new s.Primitive({
                            name: t.onlyContainsUserCerts || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            }
                        }), new s.Primitive({
                            name: t.onlyContainsCACerts || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            }
                        }), new s.Primitive({
                            name: t.onlySomeReasons || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 3
                            }
                        }), new s.Primitive({
                            name: t.indirectCRL || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 4
                            }
                        }), new s.Primitive({
                            name: t.onlyContainsAttributeCerts || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 5
                            }
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["distributionPoint", "distributionPointNames", "onlyContainsUserCerts", "onlyContainsCACerts", "onlySomeReasons", "indirectCRL", "onlyContainsAttributeCerts"]);
                    const t = s.compareSchema(e, e, z.schema({
                        names: {
                            distributionPoint: "distributionPoint",
                            distributionPointNames: "distributionPointNames",
                            onlyContainsUserCerts: "onlyContainsUserCerts",
                            onlyContainsCACerts: "onlyContainsCACerts",
                            onlySomeReasons: "onlySomeReasons",
                            indirectCRL: "indirectCRL",
                            onlyContainsAttributeCerts: "onlyContainsAttributeCerts"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for IssuingDistributionPoint");
                    if ("distributionPoint" in t.result) switch (!0) {
                        case 0 === t.result.distributionPoint.idBlock.tagNumber:
                            this.distributionPoint = Array.from(t.result.distributionPointNames, (e => new L({
                                schema: e
                            })));
                            break;
                        case 1 === t.result.distributionPoint.idBlock.tagNumber:
                            this.distributionPoint = new R({
                                schema: new s.Sequence({
                                    value: t.result.distributionPoint.valueBlock.value
                                })
                            });
                            break;
                        default:
                            throw new Error("Unknown tagNumber for distributionPoint: {$asn1.result.distributionPoint.idBlock.tagNumber}")
                    }
                    if ("onlyContainsUserCerts" in t.result) {
                        const e = new Uint8Array(t.result.onlyContainsUserCerts.valueBlock.valueHex);
                        this.onlyContainsUserCerts = 0 !== e[0]
                    }
                    if ("onlyContainsCACerts" in t.result) {
                        const e = new Uint8Array(t.result.onlyContainsCACerts.valueBlock.valueHex);
                        this.onlyContainsCACerts = 0 !== e[0]
                    }
                    if ("onlySomeReasons" in t.result) {
                        const e = new Uint8Array(t.result.onlySomeReasons.valueBlock.valueHex);
                        this.onlySomeReasons = e[0]
                    }
                    if ("indirectCRL" in t.result) {
                        const e = new Uint8Array(t.result.indirectCRL.valueBlock.valueHex);
                        this.indirectCRL = 0 !== e[0]
                    }
                    if ("onlyContainsAttributeCerts" in t.result) {
                        const e = new Uint8Array(t.result.onlyContainsAttributeCerts.valueBlock.valueHex);
                        this.onlyContainsAttributeCerts = 0 !== e[0]
                    }
                }
                toSchema() {
                    const e = [];
                    if ("distributionPoint" in this) {
                        let t;
                        this.distributionPoint instanceof Array ? t = new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: Array.from(this.distributionPoint, (e => e.toSchema()))
                        }) : (t = this.distributionPoint.toSchema(), t.idBlock.tagClass = 3, t.idBlock.tagNumber = 1), e.push(new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [t]
                        }))
                    }
                    if (this.onlyContainsUserCerts !== z.defaultValues("onlyContainsUserCerts") && e.push(new s.Primitive({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            valueHex: new Uint8Array([255]).buffer
                        })), this.onlyContainsCACerts !== z.defaultValues("onlyContainsCACerts") && e.push(new s.Primitive({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            },
                            valueHex: new Uint8Array([255]).buffer
                        })), "onlySomeReasons" in this) {
                        const t = new ArrayBuffer(1);
                        new Uint8Array(t)[0] = this.onlySomeReasons, e.push(new s.Primitive({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 3
                            },
                            valueHex: t
                        }))
                    }
                    return this.indirectCRL !== z.defaultValues("indirectCRL") && e.push(new s.Primitive({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 4
                        },
                        valueHex: new Uint8Array([255]).buffer
                    })), this.onlyContainsAttributeCerts !== z.defaultValues("onlyContainsAttributeCerts") && e.push(new s.Primitive({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 5
                        },
                        valueHex: new Uint8Array([255]).buffer
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {};
                    return "distributionPoint" in this && (this.distributionPoint instanceof Array ? e.distributionPoint = Array.from(this.distributionPoint, (e => e.toJSON())) : e.distributionPoint = this.distributionPoint.toJSON()), this.onlyContainsUserCerts !== z.defaultValues("onlyContainsUserCerts") && (e.onlyContainsUserCerts = this.onlyContainsUserCerts), this.onlyContainsCACerts !== z.defaultValues("onlyContainsCACerts") && (e.onlyContainsCACerts = this.onlyContainsCACerts), "onlySomeReasons" in this && (e.onlySomeReasons = this.onlySomeReasons), this.indirectCRL !== z.defaultValues("indirectCRL") && (e.indirectCRL = this.indirectCRL), this.onlyContainsAttributeCerts !== z.defaultValues("onlyContainsAttributeCerts") && (e.onlyContainsAttributeCerts = this.onlyContainsAttributeCerts), e
                }
            }
            class Z {
                constructor(e = {}) {
                    this.names = (0, a.getParametersValue)(e, "names", Z.defaultValues("names")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "names":
                            return [];
                        default:
                            throw new Error(`Invalid member name for GeneralNames class: ${e}`)
                    }
                }
                static schema(e = {}, t = !1) {
                    const r = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        optional: t,
                        name: r.blockName || "",
                        value: [new s.Repeated({
                            name: r.generalNames || "",
                            value: L.schema()
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["names", "generalNames"]);
                    const t = s.compareSchema(e, e, Z.schema({
                        names: {
                            blockName: "names",
                            generalNames: "generalNames"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for GeneralNames");
                    this.names = Array.from(t.result.generalNames, (e => new L({
                        schema: e
                    })))
                }
                toSchema() {
                    return new s.Sequence({
                        value: Array.from(this.names, (e => e.toSchema()))
                    })
                }
                toJSON() {
                    return {
                        names: Array.from(this.names, (e => e.toJSON()))
                    }
                }
            }
            class X {
                constructor(e = {}) {
                    this.base = (0, a.getParametersValue)(e, "base", X.defaultValues("base")), this.minimum = (0, a.getParametersValue)(e, "minimum", X.defaultValues("minimum")), "maximum" in e && (this.maximum = (0, a.getParametersValue)(e, "maximum", X.defaultValues("maximum"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "base":
                            return new L;
                        case "minimum":
                        case "maximum":
                            return 0;
                        default:
                            throw new Error(`Invalid member name for GeneralSubtree class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [L.schema(t.base || {}), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Integer({
                                name: t.minimum || ""
                            })]
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [new s.Integer({
                                name: t.maximum || ""
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["base", "minimum", "maximum"]);
                    const t = s.compareSchema(e, e, X.schema({
                        names: {
                            base: {
                                names: {
                                    blockName: "base"
                                }
                            },
                            minimum: "minimum",
                            maximum: "maximum"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for GeneralSubtree");
                    this.base = new L({
                        schema: t.result.base
                    }), "minimum" in t.result && (t.result.minimum.valueBlock.isHexOnly ? this.minimum = t.result.minimum : this.minimum = t.result.minimum.valueBlock.valueDec), "maximum" in t.result && (t.result.maximum.valueBlock.isHexOnly ? this.maximum = t.result.maximum : this.maximum = t.result.maximum.valueBlock.valueDec)
                }
                toSchema() {
                    const e = [];
                    if (e.push(this.base.toSchema()), 0 !== this.minimum) {
                        let t = 0;
                        t = this.minimum instanceof s.Integer ? this.minimum : new s.Integer({
                            value: this.minimum
                        }), e.push(new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [t]
                        }))
                    }
                    if ("maximum" in this) {
                        let t = 0;
                        t = this.maximum instanceof s.Integer ? this.maximum : new s.Integer({
                            value: this.maximum
                        }), e.push(new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [t]
                        }))
                    }
                    return new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        base: this.base.toJSON()
                    };
                    return 0 !== this.minimum && ("number" == typeof this.minimum ? e.minimum = this.minimum : e.minimum = this.minimum.toJSON()), "maximum" in this && ("number" == typeof this.maximum ? e.maximum = this.maximum : e.maximum = this.maximum.toJSON()), e
                }
            }
            class Y {
                constructor(e = {}) {
                    "permittedSubtrees" in e && (this.permittedSubtrees = (0, a.getParametersValue)(e, "permittedSubtrees", Y.defaultValues("permittedSubtrees"))), "excludedSubtrees" in e && (this.excludedSubtrees = (0, a.getParametersValue)(e, "excludedSubtrees", Y.defaultValues("excludedSubtrees"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "permittedSubtrees":
                        case "excludedSubtrees":
                            return [];
                        default:
                            throw new Error(`Invalid member name for NameConstraints class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Repeated({
                                name: t.permittedSubtrees || "",
                                value: X.schema()
                            })]
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [new s.Repeated({
                                name: t.excludedSubtrees || "",
                                value: X.schema()
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["permittedSubtrees", "excludedSubtrees"]);
                    const t = s.compareSchema(e, e, Y.schema({
                        names: {
                            permittedSubtrees: "permittedSubtrees",
                            excludedSubtrees: "excludedSubtrees"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for NameConstraints");
                    "permittedSubtrees" in t.result && (this.permittedSubtrees = Array.from(t.result.permittedSubtrees, (e => new X({
                        schema: e
                    })))), "excludedSubtrees" in t.result && (this.excludedSubtrees = Array.from(t.result.excludedSubtrees, (e => new X({
                        schema: e
                    }))))
                }
                toSchema() {
                    const e = [];
                    return "permittedSubtrees" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: Array.from(this.permittedSubtrees, (e => e.toSchema()))
                    })), "excludedSubtrees" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: Array.from(this.excludedSubtrees, (e => e.toSchema()))
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {};
                    return "permittedSubtrees" in this && (e.permittedSubtrees = Array.from(this.permittedSubtrees, (e => e.toJSON()))), "excludedSubtrees" in this && (e.excludedSubtrees = Array.from(this.excludedSubtrees, (e => e.toJSON()))), e
                }
            }
            class ee {
                constructor(e = {}) {
                    "distributionPoint" in e && (this.distributionPoint = (0, a.getParametersValue)(e, "distributionPoint", ee.defaultValues("distributionPoint"))), "reasons" in e && (this.reasons = (0, a.getParametersValue)(e, "reasons", ee.defaultValues("reasons"))), "cRLIssuer" in e && (this.cRLIssuer = (0, a.getParametersValue)(e, "cRLIssuer", ee.defaultValues("cRLIssuer"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "distributionPoint":
                            return [];
                        case "reasons":
                            return new s.BitString;
                        case "cRLIssuer":
                            return [];
                        default:
                            throw new Error(`Invalid member name for DistributionPoint class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Choice({
                                value: [new s.Constructed({
                                    name: t.distributionPoint || "",
                                    optional: !0,
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: 0
                                    },
                                    value: [new s.Repeated({
                                        name: t.distributionPointNames || "",
                                        value: L.schema()
                                    })]
                                }), new s.Constructed({
                                    name: t.distributionPoint || "",
                                    optional: !0,
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: 1
                                    },
                                    value: R.schema().valueBlock.value
                                })]
                            })]
                        }), new s.Primitive({
                            name: t.reasons || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            }
                        }), new s.Constructed({
                            name: t.cRLIssuer || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            },
                            value: [new s.Repeated({
                                name: t.cRLIssuerNames || "",
                                value: L.schema()
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["distributionPoint", "distributionPointNames", "reasons", "cRLIssuer", "cRLIssuerNames"]);
                    const t = s.compareSchema(e, e, ee.schema({
                        names: {
                            distributionPoint: "distributionPoint",
                            distributionPointNames: "distributionPointNames",
                            reasons: "reasons",
                            cRLIssuer: "cRLIssuer",
                            cRLIssuerNames: "cRLIssuerNames"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for DistributionPoint");
                    "distributionPoint" in t.result && (0 === t.result.distributionPoint.idBlock.tagNumber && (this.distributionPoint = Array.from(t.result.distributionPointNames, (e => new L({
                        schema: e
                    })))), 1 === t.result.distributionPoint.idBlock.tagNumber && (this.distributionPoint = new R({
                        schema: new s.Sequence({
                            value: t.result.distributionPoint.valueBlock.value
                        })
                    }))), "reasons" in t.result && (this.reasons = new s.BitString({
                        valueHex: t.result.reasons.valueBlock.valueHex
                    })), "cRLIssuer" in t.result && (this.cRLIssuer = Array.from(t.result.cRLIssuerNames, (e => new L({
                        schema: e
                    }))))
                }
                toSchema() {
                    const e = [];
                    if ("distributionPoint" in this) {
                        let t;
                        t = this.distributionPoint instanceof Array ? new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: Array.from(this.distributionPoint, (e => e.toSchema()))
                        }) : new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [this.distributionPoint.toSchema()]
                        }), e.push(new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [t]
                        }))
                    }
                    return "reasons" in this && e.push(new s.Primitive({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        valueHex: this.reasons.valueBlock.valueHex
                    })), "cRLIssuer" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 2
                        },
                        value: Array.from(this.cRLIssuer, (e => e.toSchema()))
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {};
                    return "distributionPoint" in this && (this.distributionPoint instanceof Array ? e.distributionPoint = Array.from(this.distributionPoint, (e => e.toJSON())) : e.distributionPoint = this.distributionPoint.toJSON()), "reasons" in this && (e.reasons = this.reasons.toJSON()), "cRLIssuer" in this && (e.cRLIssuer = Array.from(this.cRLIssuer, (e => e.toJSON()))), e
                }
            }
            class te {
                constructor(e = {}) {
                    this.distributionPoints = (0, a.getParametersValue)(e, "distributionPoints", te.defaultValues("distributionPoints")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "distributionPoints":
                            return [];
                        default:
                            throw new Error(`Invalid member name for CRLDistributionPoints class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.distributionPoints || "",
                            value: ee.schema()
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["distributionPoints"]);
                    const t = s.compareSchema(e, e, te.schema({
                        names: {
                            distributionPoints: "distributionPoints"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for CRLDistributionPoints");
                    this.distributionPoints = Array.from(t.result.distributionPoints, (e => new ee({
                        schema: e
                    })))
                }
                toSchema() {
                    return new s.Sequence({
                        value: Array.from(this.distributionPoints, (e => e.toSchema()))
                    })
                }
                toJSON() {
                    return {
                        distributionPoints: Array.from(this.distributionPoints, (e => e.toJSON()))
                    }
                }
            }
            class re {
                constructor(e = {}) {
                    this.policyQualifierId = (0, a.getParametersValue)(e, "policyQualifierId", re.defaultValues("policyQualifierId")), this.qualifier = (0, a.getParametersValue)(e, "qualifier", re.defaultValues("qualifier")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "policyQualifierId":
                            return "";
                        case "qualifier":
                            return new s.Any;
                        default:
                            throw new Error(`Invalid member name for PolicyQualifierInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.policyQualifierId || ""
                        }), new s.Any({
                            name: t.qualifier || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["policyQualifierId", "qualifier"]);
                    const t = s.compareSchema(e, e, re.schema({
                        names: {
                            policyQualifierId: "policyQualifierId",
                            qualifier: "qualifier"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PolicyQualifierInfo");
                    this.policyQualifierId = t.result.policyQualifierId.valueBlock.toString(), this.qualifier = t.result.qualifier
                }
                toSchema() {
                    return new s.Sequence({
                        value: [new s.ObjectIdentifier({
                            value: this.policyQualifierId
                        }), this.qualifier]
                    })
                }
                toJSON() {
                    return {
                        policyQualifierId: this.policyQualifierId,
                        qualifier: this.qualifier.toJSON()
                    }
                }
            }
            class se {
                constructor(e = {}) {
                    this.policyIdentifier = (0, a.getParametersValue)(e, "policyIdentifier", se.defaultValues("policyIdentifier")), "policyQualifiers" in e && (this.policyQualifiers = (0, a.getParametersValue)(e, "policyQualifiers", se.defaultValues("policyQualifiers"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "policyIdentifier":
                            return "";
                        case "policyQualifiers":
                            return [];
                        default:
                            throw new Error(`Invalid member name for PolicyInformation class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.policyIdentifier || ""
                        }), new s.Sequence({
                            optional: !0,
                            value: [new s.Repeated({
                                name: t.policyQualifiers || "",
                                value: re.schema()
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["policyIdentifier", "policyQualifiers"]);
                    const t = s.compareSchema(e, e, se.schema({
                        names: {
                            policyIdentifier: "policyIdentifier",
                            policyQualifiers: "policyQualifiers"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PolicyInformation");
                    this.policyIdentifier = t.result.policyIdentifier.valueBlock.toString(), "policyQualifiers" in t.result && (this.policyQualifiers = Array.from(t.result.policyQualifiers, (e => new re({
                        schema: e
                    }))))
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.ObjectIdentifier({
                        value: this.policyIdentifier
                    })), "policyQualifiers" in this && e.push(new s.Sequence({
                        value: Array.from(this.policyQualifiers, (e => e.toSchema()))
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        policyIdentifier: this.policyIdentifier
                    };
                    return "policyQualifiers" in this && (e.policyQualifiers = Array.from(this.policyQualifiers, (e => e.toJSON()))), e
                }
            }
            class ae {
                constructor(e = {}) {
                    this.certificatePolicies = (0, a.getParametersValue)(e, "certificatePolicies", ae.defaultValues("certificatePolicies")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "certificatePolicies":
                            return [];
                        default:
                            throw new Error(`Invalid member name for CertificatePolicies class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.certificatePolicies || "",
                            value: se.schema()
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["certificatePolicies"]);
                    const t = s.compareSchema(e, e, ae.schema({
                        names: {
                            certificatePolicies: "certificatePolicies"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for CertificatePolicies");
                    this.certificatePolicies = Array.from(t.result.certificatePolicies, (e => new se({
                        schema: e
                    })))
                }
                toSchema() {
                    return new s.Sequence({
                        value: Array.from(this.certificatePolicies, (e => e.toSchema()))
                    })
                }
                toJSON() {
                    return {
                        certificatePolicies: Array.from(this.certificatePolicies, (e => e.toJSON()))
                    }
                }
            }
            class ne {
                constructor(e = {}) {
                    this.issuerDomainPolicy = (0, a.getParametersValue)(e, "issuerDomainPolicy", ne.defaultValues("issuerDomainPolicy")), this.subjectDomainPolicy = (0, a.getParametersValue)(e, "subjectDomainPolicy", ne.defaultValues("subjectDomainPolicy")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "issuerDomainPolicy":
                        case "subjectDomainPolicy":
                            return "";
                        default:
                            throw new Error(`Invalid member name for PolicyMapping class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.issuerDomainPolicy || ""
                        }), new s.ObjectIdentifier({
                            name: t.subjectDomainPolicy || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["issuerDomainPolicy", "subjectDomainPolicy"]);
                    const t = s.compareSchema(e, e, ne.schema({
                        names: {
                            issuerDomainPolicy: "issuerDomainPolicy",
                            subjectDomainPolicy: "subjectDomainPolicy"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PolicyMapping");
                    this.issuerDomainPolicy = t.result.issuerDomainPolicy.valueBlock.toString(), this.subjectDomainPolicy = t.result.subjectDomainPolicy.valueBlock.toString()
                }
                toSchema() {
                    return new s.Sequence({
                        value: [new s.ObjectIdentifier({
                            value: this.issuerDomainPolicy
                        }), new s.ObjectIdentifier({
                            value: this.subjectDomainPolicy
                        })]
                    })
                }
                toJSON() {
                    return {
                        issuerDomainPolicy: this.issuerDomainPolicy,
                        subjectDomainPolicy: this.subjectDomainPolicy
                    }
                }
            }
            class ie {
                constructor(e = {}) {
                    this.mappings = (0, a.getParametersValue)(e, "mappings", ie.defaultValues("mappings")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "mappings":
                            return [];
                        default:
                            throw new Error(`Invalid member name for PolicyMappings class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.mappings || "",
                            value: ne.schema()
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["mappings"]);
                    const t = s.compareSchema(e, e, ie.schema({
                        names: {
                            mappings: "mappings"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PolicyMappings");
                    this.mappings = Array.from(t.result.mappings, (e => new ne({
                        schema: e
                    })))
                }
                toSchema() {
                    return new s.Sequence({
                        value: Array.from(this.mappings, (e => e.toSchema()))
                    })
                }
                toJSON() {
                    return {
                        mappings: Array.from(this.mappings, (e => e.toJSON()))
                    }
                }
            }
            class oe {
                constructor(e = {}) {
                    "keyIdentifier" in e && (this.keyIdentifier = (0, a.getParametersValue)(e, "keyIdentifier", oe.defaultValues("keyIdentifier"))), "authorityCertIssuer" in e && (this.authorityCertIssuer = (0, a.getParametersValue)(e, "authorityCertIssuer", oe.defaultValues("authorityCertIssuer"))), "authorityCertSerialNumber" in e && (this.authorityCertSerialNumber = (0, a.getParametersValue)(e, "authorityCertSerialNumber", oe.defaultValues("authorityCertSerialNumber"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "keyIdentifier":
                            return new s.OctetString;
                        case "authorityCertIssuer":
                            return [];
                        case "authorityCertSerialNumber":
                            return new s.Integer;
                        default:
                            throw new Error(`Invalid member name for AuthorityKeyIdentifier class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Primitive({
                            name: t.keyIdentifier || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            }
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [new s.Repeated({
                                name: t.authorityCertIssuer || "",
                                value: L.schema()
                            })]
                        }), new s.Primitive({
                            name: t.authorityCertSerialNumber || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            }
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["keyIdentifier", "authorityCertIssuer", "authorityCertSerialNumber"]);
                    const t = s.compareSchema(e, e, oe.schema({
                        names: {
                            keyIdentifier: "keyIdentifier",
                            authorityCertIssuer: "authorityCertIssuer",
                            authorityCertSerialNumber: "authorityCertSerialNumber"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for AuthorityKeyIdentifier");
                    "keyIdentifier" in t.result && (this.keyIdentifier = new s.OctetString({
                        valueHex: t.result.keyIdentifier.valueBlock.valueHex
                    })), "authorityCertIssuer" in t.result && (this.authorityCertIssuer = Array.from(t.result.authorityCertIssuer, (e => new L({
                        schema: e
                    })))), "authorityCertSerialNumber" in t.result && (this.authorityCertSerialNumber = new s.Integer({
                        valueHex: t.result.authorityCertSerialNumber.valueBlock.valueHex
                    }))
                }
                toSchema() {
                    const e = [];
                    return "keyIdentifier" in this && e.push(new s.Primitive({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        valueHex: this.keyIdentifier.valueBlock.valueHex
                    })), "authorityCertIssuer" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: Array.from(this.authorityCertIssuer, (e => e.toSchema()))
                    })), "authorityCertSerialNumber" in this && e.push(new s.Primitive({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 2
                        },
                        valueHex: this.authorityCertSerialNumber.valueBlock.valueHex
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {};
                    return "keyIdentifier" in this && (e.keyIdentifier = this.keyIdentifier.toJSON()), "authorityCertIssuer" in this && (e.authorityCertIssuer = Array.from(this.authorityCertIssuer, (e => e.toJSON()))), "authorityCertSerialNumber" in this && (e.authorityCertSerialNumber = this.authorityCertSerialNumber.toJSON()), e
                }
            }
            class le {
                constructor(e = {}) {
                    "requireExplicitPolicy" in e && (this.requireExplicitPolicy = (0, a.getParametersValue)(e, "requireExplicitPolicy", le.defaultValues("requireExplicitPolicy"))), "inhibitPolicyMapping" in e && (this.inhibitPolicyMapping = (0, a.getParametersValue)(e, "inhibitPolicyMapping", le.defaultValues("inhibitPolicyMapping"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "requireExplicitPolicy":
                        case "inhibitPolicyMapping":
                            return 0;
                        default:
                            throw new Error(`Invalid member name for PolicyConstraints class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Primitive({
                            name: t.requireExplicitPolicy || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            }
                        }), new s.Primitive({
                            name: t.inhibitPolicyMapping || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            }
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["requireExplicitPolicy", "inhibitPolicyMapping"]);
                    const t = s.compareSchema(e, e, le.schema({
                        names: {
                            requireExplicitPolicy: "requireExplicitPolicy",
                            inhibitPolicyMapping: "inhibitPolicyMapping"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PolicyConstraints");
                    if ("requireExplicitPolicy" in t.result) {
                        const e = t.result.requireExplicitPolicy;
                        e.idBlock.tagClass = 1, e.idBlock.tagNumber = 2;
                        const r = e.toBER(!1),
                            a = s.fromBER(r);
                        this.requireExplicitPolicy = a.result.valueBlock.valueDec
                    }
                    if ("inhibitPolicyMapping" in t.result) {
                        const e = t.result.inhibitPolicyMapping;
                        e.idBlock.tagClass = 1, e.idBlock.tagNumber = 2;
                        const r = e.toBER(!1),
                            a = s.fromBER(r);
                        this.inhibitPolicyMapping = a.result.valueBlock.valueDec
                    }
                }
                toSchema() {
                    const e = [];
                    if ("requireExplicitPolicy" in this) {
                        const t = new s.Integer({
                            value: this.requireExplicitPolicy
                        });
                        t.idBlock.tagClass = 3, t.idBlock.tagNumber = 0, e.push(t)
                    }
                    if ("inhibitPolicyMapping" in this) {
                        const t = new s.Integer({
                            value: this.inhibitPolicyMapping
                        });
                        t.idBlock.tagClass = 3, t.idBlock.tagNumber = 1, e.push(t)
                    }
                    return new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {};
                    return "requireExplicitPolicy" in this && (e.requireExplicitPolicy = this.requireExplicitPolicy), "inhibitPolicyMapping" in this && (e.inhibitPolicyMapping = this.inhibitPolicyMapping), e
                }
            }
            class ce {
                constructor(e = {}) {
                    this.keyPurposes = (0, a.getParametersValue)(e, "keyPurposes", ce.defaultValues("keyPurposes")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "keyPurposes":
                            return [];
                        default:
                            throw new Error(`Invalid member name for ExtKeyUsage class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.keyPurposes || "",
                            value: new s.ObjectIdentifier
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["keyPurposes"]);
                    const t = s.compareSchema(e, e, ce.schema({
                        names: {
                            keyPurposes: "keyPurposes"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for ExtKeyUsage");
                    this.keyPurposes = Array.from(t.result.keyPurposes, (e => e.valueBlock.toString()))
                }
                toSchema() {
                    return new s.Sequence({
                        value: Array.from(this.keyPurposes, (e => new s.ObjectIdentifier({
                            value: e
                        })))
                    })
                }
                toJSON() {
                    return {
                        keyPurposes: Array.from(this.keyPurposes)
                    }
                }
            }
            class ue {
                constructor(e = {}) {
                    this.accessDescriptions = (0, a.getParametersValue)(e, "accessDescriptions", ue.defaultValues("accessDescriptions")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "accessDescriptions":
                            return [];
                        default:
                            throw new Error(`Invalid member name for InfoAccess class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.accessDescriptions || "",
                            value: K.schema()
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["accessDescriptions"]);
                    const t = s.compareSchema(e, e, ue.schema({
                        names: {
                            accessDescriptions: "accessDescriptions"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for InfoAccess");
                    this.accessDescriptions = Array.from(t.result.accessDescriptions, (e => new K({
                        schema: e
                    })))
                }
                toSchema() {
                    return new s.Sequence({
                        value: Array.from(this.accessDescriptions, (e => e.toSchema()))
                    })
                }
                toJSON() {
                    return {
                        accessDescriptions: Array.from(this.accessDescriptions, (e => e.toJSON()))
                    }
                }
            }
            class he {
                constructor(e = {}) {
                    this.clear();
                    for (const t of Object.keys(e)) switch (t) {
                        case "length":
                            this.length = e.length;
                            break;
                        case "stub":
                            for (let t = 0; t < this._view.length; t++) this._view[t] = e.stub;
                            break;
                        case "view":
                            this.fromUint8Array(e.view);
                            break;
                        case "buffer":
                            this.fromArrayBuffer(e.buffer);
                            break;
                        case "string":
                            this.fromString(e.string);
                            break;
                        case "hexstring":
                            this.fromHexString(e.hexstring)
                    }
                }
                set buffer(e) {
                    this._buffer = e.slice(0), this._view = new Uint8Array(this._buffer)
                }
                get buffer() {
                    return this._buffer
                }
                set view(e) {
                    this._buffer = new ArrayBuffer(e.length), this._view = new Uint8Array(this._buffer), this._view.set(e)
                }
                get view() {
                    return this._view
                }
                get length() {
                    return this._buffer.byteLength
                }
                set length(e) {
                    this._buffer = new ArrayBuffer(e), this._view = new Uint8Array(this._buffer)
                }
                clear() {
                    this._buffer = new ArrayBuffer(0), this._view = new Uint8Array(this._buffer)
                }
                fromArrayBuffer(e) {
                    this.buffer = e
                }
                fromUint8Array(e) {
                    this._buffer = new ArrayBuffer(e.length), this._view = new Uint8Array(this._buffer), this._view.set(e)
                }
                fromString(e) {
                    const t = e.length;
                    this.length = t;
                    for (let r = 0; r < t; r++) this.view[r] = e.charCodeAt(r)
                }
                toString(e = 0, t = this.view.length - e) {
                    let r = "";
                    (e >= this.view.length || e < 0) && (e = 0), (t >= this.view.length || t < 0) && (t = this.view.length - e);
                    for (let s = e; s < e + t; s++) r += String.fromCharCode(this.view[s]);
                    return r
                }
                fromHexString(e) {
                    const t = e.length;
                    this.buffer = new ArrayBuffer(t >> 1), this.view = new Uint8Array(this.buffer);
                    const r = new Map;
                    r.set("0", 0), r.set("1", 1), r.set("2", 2), r.set("3", 3), r.set("4", 4), r.set("5", 5), r.set("6", 6), r.set("7", 7), r.set("8", 8), r.set("9", 9), r.set("A", 10), r.set("a", 10), r.set("B", 11), r.set("b", 11), r.set("C", 12), r.set("c", 12), r.set("D", 13), r.set("d", 13), r.set("E", 14), r.set("e", 14), r.set("F", 15), r.set("f", 15);
                    let s = 0,
                        a = 0;
                    for (let n = 0; n < t; n++) n % 2 ? (a |= r.get(e.charAt(n)), this.view[s] = a, s++) : a = r.get(e.charAt(n)) << 4
                }
                toHexString(e = 0, t = this.view.length - e) {
                    let r = "";
                    (e >= this.view.length || e < 0) && (e = 0), (t >= this.view.length || t < 0) && (t = this.view.length - e);
                    for (let s = e; s < e + t; s++) {
                        const e = this.view[s].toString(16).toUpperCase();
                        r = r + (1 == e.length ? "0" : "") + e
                    }
                    return r
                }
                copy(e = 0, t = this._buffer.byteLength - e) {
                    if (0 === e && 0 === this._buffer.byteLength) return new he;
                    if (e < 0 || e > this._buffer.byteLength - 1) throw new Error(`Wrong start position: ${e}`);
                    const r = new he;
                    return r._buffer = this._buffer.slice(e, e + t), r._view = new Uint8Array(r._buffer), r
                }
                slice(e = 0, t = this._buffer.byteLength) {
                    if (0 === e && 0 === this._buffer.byteLength) return new he;
                    if (e < 0 || e > this._buffer.byteLength - 1) throw new Error(`Wrong start position: ${e}`);
                    const r = new he;
                    return r._buffer = this._buffer.slice(e, t), r._view = new Uint8Array(r._buffer), r
                }
                realloc(e) {
                    const t = new ArrayBuffer(e),
                        r = new Uint8Array(t);
                    e > this._view.length ? r.set(this._view) : r.set(new Uint8Array(this._buffer, 0, e)), this._buffer = t.slice(0), this._view = new Uint8Array(this._buffer)
                }
                append(e) {
                    const t = this._buffer.byteLength,
                        r = e._buffer.byteLength,
                        s = e._view.slice();
                    this.realloc(t + r), this._view.set(s, t)
                }
                insert(e, t = 0, r = this._buffer.byteLength - t) {
                    return !(t > this._buffer.byteLength - 1) && (r > this._buffer.byteLength - t && (r = this._buffer.byteLength - t), r > e._buffer.byteLength && (r = e._buffer.byteLength), r == e._buffer.byteLength ? this._view.set(e._view, t) : this._view.set(e._view.slice(0, r), t), !0)
                }
                isEqual(e) {
                    if (this._buffer.byteLength != e._buffer.byteLength) return !1;
                    for (let t = 0; t < e._buffer.byteLength; t++)
                        if (this.view[t] != e.view[t]) return !1;
                    return !0
                }
                isEqualView(e) {
                    if (e.length != this.view.length) return !1;
                    for (let t = 0; t < e.length; t++)
                        if (this.view[t] != e[t]) return !1;
                    return !0
                }
                findPattern(e, t = null, r = null, s = !1) {
                    null == t && (t = s ? this.buffer.byteLength : 0), t > this.buffer.byteLength && (t = this.buffer.byteLength), s ? (null == r && (r = t), r > t && (r = t)) : (null == r && (r = this.buffer.byteLength - t), r > this.buffer.byteLength - t && (r = this.buffer.byteLength - t));
                    const a = e.buffer.byteLength;
                    if (a > r) return -1;
                    const n = [];
                    for (let t = 0; t < a; t++) n.push(e.view[t]);
                    for (let e = 0; e <= r - a; e++) {
                        let r = !0;
                        const i = s ? t - a - e : t + e;
                        for (let e = 0; e < a; e++)
                            if (this.view[e + i] != n[e]) {
                                r = !1;
                                break
                            } if (r) return s ? t - a - e : t + a + e
                    }
                    return -1
                }
                findFirstIn(e, t = null, r = null, s = !1) {
                    null == t && (t = s ? this.buffer.byteLength : 0), t > this.buffer.byteLength && (t = this.buffer.byteLength), s ? (null == r && (r = t), r > t && (r = t)) : (null == r && (r = this.buffer.byteLength - t), r > this.buffer.byteLength - t && (r = this.buffer.byteLength - t));
                    const a = {
                        id: -1,
                        position: s ? 0 : t + r,
                        length: 0
                    };
                    for (let n = 0; n < e.length; n++) {
                        const i = this.findPattern(e[n], t, r, s);
                        if (-1 != i) {
                            let t = !1;
                            const r = e[n].length;
                            s ? i - r >= a.position - a.length && (t = !0) : i - r <= a.position - a.length && (t = !0), t && (a.position = i, a.id = n, a.length = r)
                        }
                    }
                    return a
                }
                findAllIn(e, t = 0, r = this.buffer.byteLength - t) {
                    const s = [];
                    if (null == t && (t = 0), t > this.buffer.byteLength - 1) return s;
                    null == r && (r = this.buffer.byteLength - t), r > this.buffer.byteLength - t && (r = this.buffer.byteLength - t);
                    let a = {
                        id: -1,
                        position: t
                    };
                    for (;;) {
                        const t = a.position;
                        if (a = this.findFirstIn(e, a.position, r), -1 == a.id) break;
                        r -= a.position - t, s.push({
                            id: a.id,
                            position: a.position
                        })
                    }
                    return s
                }
                findAllPatternIn(e, t = 0, r = this.buffer.byteLength - t) {
                    null == t && (t = 0), t > this.buffer.byteLength && (t = this.buffer.byteLength), null == r && (r = this.buffer.byteLength - t), r > this.buffer.byteLength - t && (r = this.buffer.byteLength - t);
                    const s = [],
                        a = e.buffer.byteLength;
                    if (a > r) return -1;
                    const n = Array.from(e.view);
                    for (let e = 0; e <= r - a; e++) {
                        let r = !0;
                        const i = t + e;
                        for (let e = 0; e < a; e++)
                            if (this.view[e + i] != n[e]) {
                                r = !1;
                                break
                            } r && (s.push(t + a + e), e += a - 1)
                    }
                    return s
                }
                findFirstNotIn(e, t = null, r = null, s = !1) {
                    null == t && (t = s ? this.buffer.byteLength : 0), t > this.buffer.byteLength && (t = this.buffer.byteLength), s ? (null == r && (r = t), r > t && (r = t)) : (null == r && (r = this.buffer.byteLength - t), r > this.buffer.byteLength - t && (r = this.buffer.byteLength - t));
                    const a = {
                        left: {
                            id: -1,
                            position: t
                        },
                        right: {
                            id: -1,
                            position: 0
                        },
                        value: new he
                    };
                    let n = r;
                    for (; n > 0;) {
                        if (a.right = this.findFirstIn(e, s ? t - r + n : t + r - n, n, s), -1 == a.right.id) {
                            r = n, s ? t -= r : t = a.left.position, a.value = new he, a.value._buffer = this._buffer.slice(t, t + r), a.value._view = new Uint8Array(a.value._buffer);
                            break
                        }
                        if (a.right.position != (s ? a.left.position - e[a.right.id].buffer.byteLength : a.left.position + e[a.right.id].buffer.byteLength)) {
                            s ? (t = a.right.position + e[a.right.id].buffer.byteLength, r = a.left.position - a.right.position - e[a.right.id].buffer.byteLength) : (t = a.left.position, r = a.right.position - a.left.position - e[a.right.id].buffer.byteLength), a.value = new he, a.value._buffer = this._buffer.slice(t, t + r), a.value._view = new Uint8Array(a.value._buffer);
                            break
                        }
                        a.left = a.right, n -= e[a.right.id]._buffer.byteLength
                    }
                    if (s) {
                        const e = a.right;
                        a.right = a.left, a.left = e
                    }
                    return a
                }
                findAllNotIn(e, t = null, r = null) {
                    const s = [];
                    if (null == t && (t = 0), t > this.buffer.byteLength - 1) return s;
                    null == r && (r = this.buffer.byteLength - t), r > this.buffer.byteLength - t && (r = this.buffer.byteLength - t);
                    let a = {
                        left: {
                            id: -1,
                            position: t
                        },
                        right: {
                            id: -1,
                            position: t
                        },
                        value: new he
                    };
                    do {
                        const t = a.right.position;
                        a = this.findFirstNotIn(e, a.right.position, r), r -= a.right.position - t, s.push({
                            left: {
                                id: a.left.id,
                                position: a.left.position
                            },
                            right: {
                                id: a.right.id,
                                position: a.right.position
                            },
                            value: a.value
                        })
                    } while (-1 != a.right.id);
                    return s
                }
                findFirstSequence(e, t = null, r = null, s = !1) {
                    null == t && (t = s ? this.buffer.byteLength : 0), t > this.buffer.byteLength && (t = this.buffer.byteLength), s ? (null == r && (r = t), r > t && (r = t)) : (null == r && (r = this.buffer.byteLength - t), r > this.buffer.byteLength - t && (r = this.buffer.byteLength - t));
                    const a = this.skipNotPatterns(e, t, r, s);
                    if (-1 == a) return {
                        position: -1,
                        value: new he
                    };
                    const n = this.skipPatterns(e, a, r - (s ? t - a : a - t), s);
                    s ? (t = n, r = a - n) : (t = a, r = n - a);
                    const i = new he;
                    return i._buffer = this._buffer.slice(t, t + r), i._view = new Uint8Array(i._buffer), {
                        position: n,
                        value: i
                    }
                }
                findAllSequences(e, t = null, r = null) {
                    const s = [];
                    if (null == t && (t = 0), t > this.buffer.byteLength - 1) return s;
                    null == r && (r = this.buffer.byteLength - t), r > this.buffer.byteLength - t && (r = this.buffer.byteLength - t);
                    let a = {
                        position: t,
                        value: new he
                    };
                    do {
                        const t = a.position;
                        a = this.findFirstSequence(e, a.position, r), -1 != a.position && (r -= a.position - t, s.push({
                            position: a.position,
                            value: a.value
                        }))
                    } while (-1 != a.position);
                    return s
                }
                findPairedPatterns(e, t, r = null, s = null) {
                    const a = [];
                    if (e.isEqual(t)) return a;
                    if (null == r && (r = 0), r > this.buffer.byteLength - 1) return a;
                    null == s && (s = this.buffer.byteLength - r), s > this.buffer.byteLength - r && (s = this.buffer.byteLength - r);
                    let n = 0;
                    const i = this.findAllPatternIn(e, r, s);
                    if (0 == i.length) return a;
                    const o = this.findAllPatternIn(t, r, s);
                    if (0 == o.length) return a;
                    for (; n < i.length && 0 != o.length;)
                        if (i[0] != o[0]) {
                            if (i[n] > o[0]) break;
                            for (; i[n] < o[0] && (n++, !(n >= i.length)););
                            a.push({
                                left: i[n - 1],
                                right: o[0]
                            }), i.splice(n - 1, 1), o.splice(0, 1), n = 0
                        } else a.push({
                            left: i[0],
                            right: o[0]
                        }), i.splice(0, 1), o.splice(0, 1);
                    return a.sort(((e, t) => e.left - t.left)), a
                }
                findPairedArrays(e, t, r = null, s = null) {
                    const a = [];
                    if (null == r && (r = 0), r > this.buffer.byteLength - 1) return a;
                    null == s && (s = this.buffer.byteLength - r), s > this.buffer.byteLength - r && (s = this.buffer.byteLength - r);
                    let n = 0;
                    const i = this.findAllIn(e, r, s);
                    if (0 == i.length) return a;
                    const o = this.findAllIn(t, r, s);
                    if (0 == o.length) return a;
                    for (; n < i.length && 0 != o.length;)
                        if (i[0].position != o[0].position) {
                            if (i[n].position > o[0].position) break;
                            for (; i[n].position < o[0].position && (n++, !(n >= i.length)););
                            a.push({
                                left: i[n - 1],
                                right: o[0]
                            }), i.splice(n - 1, 1), o.splice(0, 1), n = 0
                        } else a.push({
                            left: i[0],
                            right: o[0]
                        }), i.splice(0, 1), o.splice(0, 1);
                    return a.sort(((e, t) => e.left.position - t.left.position)), a
                }
                replacePattern(e, t, r = null, s = null, a = null) {
                    let n, i;
                    const o = {
                        status: -1,
                        searchPatternPositions: [],
                        replacePatternPositions: []
                    };
                    if (null == r && (r = 0), r > this.buffer.byteLength - 1) return !1;
                    if (null == s && (s = this.buffer.byteLength - r), s > this.buffer.byteLength - r && (s = this.buffer.byteLength - r), null == a) {
                        if (n = this.findAllIn([e], r, s), 0 == n.length) return o
                    } else n = a;
                    o.searchPatternPositions.push(...Array.from(n, (e => e.position)));
                    const l = e.buffer.byteLength - t.buffer.byteLength,
                        c = new ArrayBuffer(this.view.length - n.length * l),
                        u = new Uint8Array(c);
                    for (u.set(new Uint8Array(this.buffer, 0, r)), i = 0; i < n.length; i++) {
                        const s = 0 == i ? r : n[i - 1].position;
                        u.set(new Uint8Array(this.buffer, s, n[i].position - e.buffer.byteLength - s), s - i * l), u.set(t.view, n[i].position - e.buffer.byteLength - i * l), o.replacePatternPositions.push(n[i].position - e.buffer.byteLength - i * l)
                    }
                    return i--, u.set(new Uint8Array(this.buffer, n[i].position, this.buffer.byteLength - n[i].position), n[i].position - e.buffer.byteLength + t.buffer.byteLength - i * l), this.buffer = c, this.view = new Uint8Array(this.buffer), o.status = 1, o
                }
                skipPatterns(e, t = null, r = null, s = !1) {
                    null == t && (t = s ? this.buffer.byteLength : 0), t > this.buffer.byteLength && (t = this.buffer.byteLength), s ? (null == r && (r = t), r > t && (r = t)) : (null == r && (r = this.buffer.byteLength - t), r > this.buffer.byteLength - t && (r = this.buffer.byteLength - t));
                    let a = t;
                    for (let n = 0; n < e.length; n++) {
                        const i = e[n].buffer.byteLength,
                            o = s ? a - i : a;
                        let l = !0;
                        for (let t = 0; t < i; t++)
                            if (this.view[t + o] != e[n].view[t]) {
                                l = !1;
                                break
                            } if (l)
                            if (n = -1, s) {
                                if (a -= i, a <= 0) return a
                            } else if (a += i, a >= t + r) return a
                    }
                    return a
                }
                skipNotPatterns(e, t = null, r = null, s = !1) {
                    null == t && (t = s ? this.buffer.byteLength : 0), t > this.buffer.byteLength && (t = this.buffer.byteLength), s ? (null == r && (r = t), r > t && (r = t)) : (null == r && (r = this.buffer.byteLength - t), r > this.buffer.byteLength - t && (r = this.buffer.byteLength - t));
                    let a = -1;
                    for (let n = 0; n < r; n++) {
                        for (let r = 0; r < e.length; r++) {
                            const i = e[r].buffer.byteLength,
                                o = s ? t - n - i : t + n;
                            let l = !0;
                            for (let t = 0; t < i; t++)
                                if (this.view[t + o] != e[r].view[t]) {
                                    l = !1;
                                    break
                                } if (l) {
                                a = s ? t - n : t + n;
                                break
                            }
                        }
                        if (-1 != a) break
                    }
                    return a
                }
            }
            class me {
                constructor(e = {}) {
                    this.stream = new he, this._length = 0, this.backward = !1, this._start = 0, this.appendBlock = 0, this.prevLength = 0, this.prevStart = 0;
                    for (const t of Object.keys(e)) switch (t) {
                        case "stream":
                            this.stream = e.stream;
                            break;
                        case "backward":
                            this.backward = e.backward, this._start = this.stream.buffer.byteLength;
                            break;
                        case "length":
                            this._length = e.length;
                            break;
                        case "start":
                            this._start = e.start;
                            break;
                        case "appendBlock":
                            this.appendBlock = e.appendBlock;
                            break;
                        case "view":
                            this.stream = new he({
                                view: e.view
                            });
                            break;
                        case "buffer":
                            this.stream = new he({
                                buffer: e.buffer
                            });
                            break;
                        case "string":
                            this.stream = new he({
                                string: e.string
                            });
                            break;
                        case "hexstring":
                            this.stream = new he({
                                hexstring: e.hexstring
                            })
                    }
                }
                set stream(e) {
                    this._stream = e, this.prevLength = this._length, this._length = e._buffer.byteLength, this.prevStart = this._start, this._start = 0
                }
                get stream() {
                    return this._stream
                }
                set length(e) {
                    this.prevLength = this._length, this._length = e
                }
                get length() {
                    return this.appendBlock ? this.start : this._length
                }
                set start(e) {
                    e > this.stream.buffer.byteLength || (this.prevStart = this._start, this.prevLength = this._length, this._length -= this.backward ? this._start - e : e - this._start, this._start = e)
                }
                get start() {
                    return this._start
                }
                get buffer() {
                    return this._stream._buffer.slice(0, this._length)
                }
                resetPosition() {
                    this._start = this.prevStart, this._length = this.prevLength
                }
                findPattern(e, t = null) {
                    (null == t || t > this.length) && (t = this.length);
                    const r = this.stream.findPattern(e, this.start, this.length, this.backward);
                    if (-1 == r) return r;
                    if (this.backward) {
                        if (r < this.start - e.buffer.byteLength - t) return -1
                    } else if (r > this.start + e.buffer.byteLength + t) return -1;
                    return this.start = r, r
                }
                findFirstIn(e, t = null) {
                    (null == t || t > this.length) && (t = this.length);
                    const r = this.stream.findFirstIn(e, this.start, this.length, this.backward);
                    if (-1 == r.id) return r;
                    if (this.backward) {
                        if (r.position < this.start - e[r.id].buffer.byteLength - t) return {
                            id: -1,
                            position: this.backward ? 0 : this.start + this.length
                        }
                    } else if (r.position > this.start + e[r.id].buffer.byteLength + t) return {
                        id: -1,
                        position: this.backward ? 0 : this.start + this.length
                    };
                    return this.start = r.position, r
                }
                findAllIn(e) {
                    const t = this.backward ? this.start - this.length : this.start;
                    return this.stream.findAllIn(e, t, this.length)
                }
                findFirstNotIn(e, t = null) {
                    (null == t || t > this._length) && (t = this._length);
                    const r = this._stream.findFirstNotIn(e, this._start, this._length, this.backward);
                    if (-1 == r.left.id && -1 == r.right.id) return r;
                    if (this.backward) {
                        if (-1 != r.right.id && r.right.position < this._start - e[r.right.id]._buffer.byteLength - t) return {
                            left: {
                                id: -1,
                                position: this._start
                            },
                            right: {
                                id: -1,
                                position: 0
                            },
                            value: new he
                        }
                    } else if (-1 != r.left.id && r.left.position > this._start + e[r.left.id]._buffer.byteLength + t) return {
                        left: {
                            id: -1,
                            position: this._start
                        },
                        right: {
                            id: -1,
                            position: 0
                        },
                        value: new he
                    };
                    return this.backward ? -1 == r.left.id ? this.start = 0 : this.start = r.left.position : -1 == r.right.id ? this.start = this._start + this._length : this.start = r.right.position, r
                }
                findAllNotIn(e) {
                    const t = this.backward ? this._start - this._length : this._start;
                    return this._stream.findAllNotIn(e, t, this._length)
                }
                findFirstSequence(e, t = null, r = null) {
                    (null == t || t > this._length) && (t = this._length), (null == r || r > t) && (r = t);
                    const s = this._stream.findFirstSequence(e, this._start, t, this.backward);
                    if (0 == s.value.buffer.byteLength) return s;
                    if (this.backward) {
                        if (s.position < this._start - s.value._buffer.byteLength - r) return {
                            position: -1,
                            value: new he
                        }
                    } else if (s.position > this._start + s.value._buffer.byteLength + r) return {
                        position: -1,
                        value: new he
                    };
                    return this.start = s.position, s
                }
                findAllSequences(e) {
                    const t = this.backward ? this.start - this.length : this.start;
                    return this.stream.findAllSequences(e, t, this.length)
                }
                findPairedPatterns(e, t, r = null) {
                    (null == r || r > this.length) && (r = this.length);
                    const s = this.backward ? this.start - this.length : this.start,
                        a = this.stream.findPairedPatterns(e, t, s, this.length);
                    if (a.length)
                        if (this.backward) {
                            if (a[0].right < this.start - t.buffer.byteLength - r) return []
                        } else if (a[0].left > this.start + e.buffer.byteLength + r) return [];
                    return a
                }
                findPairedArrays(e, t, r = null) {
                    (null == r || r > this.length) && (r = this.length);
                    const s = this.backward ? this.start - this.length : this.start,
                        a = this.stream.findPairedArrays(e, t, s, this.length);
                    if (a.length)
                        if (this.backward) {
                            if (a[0].right.position < this.start - t[a[0].right.id].buffer.byteLength - r) return []
                        } else if (a[0].left.position > this.start + e[a[0].left.id].buffer.byteLength + r) return [];
                    return a
                }
                replacePattern(e, t) {
                    const r = this.backward ? this.start - this.length : this.start;
                    return this.stream.replacePattern(e, t, r, this.length)
                }
                skipPatterns(e) {
                    const t = this.stream.skipPatterns(e, this.start, this.length, this.backward);
                    return this.start = t, t
                }
                skipNotPatterns(e) {
                    const t = this.stream.skipNotPatterns(e, this.start, this.length, this.backward);
                    return -1 == t ? -1 : (this.start = t, t)
                }
                append(e) {
                    this._start + e._buffer.byteLength > this._stream._buffer.byteLength && (e._buffer.byteLength > this.appendBlock && (this.appendBlock = e._buffer.byteLength + 1e3), this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock)), this._stream._view.set(e._view, this._start), this._length += 2 * e._buffer.byteLength, this.start = this._start + e._buffer.byteLength, this.prevLength -= 2 * e._buffer.byteLength
                }
                appendView(e) {
                    this._start + e.length > this._stream._buffer.byteLength && (e.length > this.appendBlock && (this.appendBlock = e.length + 1e3), this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock)), this._stream._view.set(e, this._start), this._length += 2 * e.length, this.start = this._start + e.length, this.prevLength -= 2 * e.length
                }
                appendChar(e) {
                    this._start + 1 > this._stream._buffer.byteLength && (1 > this.appendBlock && (this.appendBlock = 1e3), this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock)), this._stream._view[this._start] = e, this._length += 2, this.start = this._start + 1, this.prevLength -= 2
                }
                appendUint16(e) {
                    this._start + 2 > this._stream._buffer.byteLength && (2 > this.appendBlock && (this.appendBlock = 1e3), this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock));
                    const t = new Uint16Array([e]),
                        r = new Uint8Array(t.buffer);
                    this._stream._view[this._start] = r[1], this._stream._view[this._start + 1] = r[0], this._length += 4, this.start = this._start + 2, this.prevLength -= 4
                }
                appendUint24(e) {
                    this._start + 3 > this._stream._buffer.byteLength && (3 > this.appendBlock && (this.appendBlock = 1e3), this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock));
                    const t = new Uint32Array([e]),
                        r = new Uint8Array(t.buffer);
                    this._stream._view[this._start] = r[2], this._stream._view[this._start + 1] = r[1], this._stream._view[this._start + 2] = r[0], this._length += 6, this.start = this._start + 3, this.prevLength -= 6
                }
                appendUint32(e) {
                    this._start + 4 > this._stream._buffer.byteLength && (4 > this.appendBlock && (this.appendBlock = 1e3), this._stream.realloc(this._stream._buffer.byteLength + this.appendBlock));
                    const t = new Uint32Array([e]),
                        r = new Uint8Array(t.buffer);
                    this._stream._view[this._start] = r[3], this._stream._view[this._start + 1] = r[2], this._stream._view[this._start + 2] = r[1], this._stream._view[this._start + 3] = r[0], this._length += 8, this.start = this._start + 4, this.prevLength -= 8
                }
                getBlock(e, t = !0) {
                    if (this._length <= 0) return [];
                    let r;
                    if (this._length < e && (e = this._length), this.backward) {
                        const t = this._stream._buffer.slice(this._length - e, this._length),
                            s = new Uint8Array(t);
                        r = new Array(e);
                        for (let t = 0; t < e; t++) r[e - 1 - t] = s[t]
                    } else {
                        const t = this._stream._buffer.slice(this._start, this._start + e);
                        r = Array.from(new Uint8Array(t))
                    }
                    return t && (this.start += this.backward ? -1 * e : e), r
                }
                getUint16(e = !0) {
                    const t = this.getBlock(2, e);
                    if (t.length < 2) return 0;
                    const r = new Uint16Array(1),
                        s = new Uint8Array(r.buffer);
                    return s[0] = t[1], s[1] = t[0], r[0]
                }
                getInt16(e = !0) {
                    const t = this.getBlock(2, e);
                    if (t.length < 2) return 0;
                    const r = new Int16Array(1),
                        s = new Uint8Array(r.buffer);
                    return s[0] = t[1], s[1] = t[0], r[0]
                }
                getUint24(e = !0) {
                    const t = this.getBlock(3, e);
                    if (t.length < 3) return 0;
                    const r = new Uint32Array(1),
                        s = new Uint8Array(r.buffer);
                    for (let e = 3; e >= 1; e--) s[3 - e] = t[e - 1];
                    return r[0]
                }
                getUint32(e = !0) {
                    const t = this.getBlock(4, e);
                    if (t.length < 4) return 0;
                    const r = new Uint32Array(1),
                        s = new Uint8Array(r.buffer);
                    for (let e = 3; e >= 0; e--) s[3 - e] = t[e];
                    return r[0]
                }
                getInt32(e = !0) {
                    const t = this.getBlock(4, e);
                    if (t.length < 4) return 0;
                    const r = new Int32Array(1),
                        s = new Uint8Array(r.buffer);
                    for (let e = 3; e >= 0; e--) s[3 - e] = t[e];
                    return r[0]
                }
            }
            class fe {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", fe.defaultValues("version")), this.logID = (0, a.getParametersValue)(e, "logID", fe.defaultValues("logID")), this.timestamp = (0, a.getParametersValue)(e, "timestamp", fe.defaultValues("timestamp")), this.extensions = (0, a.getParametersValue)(e, "extensions", fe.defaultValues("extensions")), this.hashAlgorithm = (0, a.getParametersValue)(e, "hashAlgorithm", fe.defaultValues("hashAlgorithm")), this.signatureAlgorithm = (0, a.getParametersValue)(e, "signatureAlgorithm", fe.defaultValues("signatureAlgorithm")), this.signature = (0, a.getParametersValue)(e, "signature", fe.defaultValues("signature")), "schema" in e && this.fromSchema(e.schema), "stream" in e && this.fromStream(e.stream)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 0;
                        case "logID":
                        case "extensions":
                            return new ArrayBuffer(0);
                        case "timestamp":
                            return new Date(0);
                        case "hashAlgorithm":
                        case "signatureAlgorithm":
                            return "";
                        case "signature":
                            return new s.Any;
                        default:
                            throw new Error(`Invalid member name for SignedCertificateTimestamp class: ${e}`)
                    }
                }
                fromSchema(e) {
                    if (e instanceof s.RawData == !1) throw new Error("Object's schema was not verified against input data for SignedCertificateTimestamp");
                    const t = new me({
                        stream: new he({
                            buffer: e.data
                        })
                    });
                    this.fromStream(t)
                }
                fromStream(e) {
                    const t = e.getUint16();
                    if (this.version = e.getBlock(1)[0], 0 === this.version) {
                        this.logID = new Uint8Array(e.getBlock(32)).buffer.slice(0), this.timestamp = new Date((0, a.utilFromBase)(new Uint8Array(e.getBlock(8)), 8));
                        const r = e.getUint16();
                        switch (this.extensions = new Uint8Array(e.getBlock(r)).buffer.slice(0), e.getBlock(1)[0]) {
                            case 0:
                                this.hashAlgorithm = "none";
                                break;
                            case 1:
                                this.hashAlgorithm = "md5";
                                break;
                            case 2:
                                this.hashAlgorithm = "sha1";
                                break;
                            case 3:
                                this.hashAlgorithm = "sha224";
                                break;
                            case 4:
                                this.hashAlgorithm = "sha256";
                                break;
                            case 5:
                                this.hashAlgorithm = "sha384";
                                break;
                            case 6:
                                this.hashAlgorithm = "sha512";
                                break;
                            default:
                                throw new Error("Object's stream was not correct for SignedCertificateTimestamp")
                        }
                        switch (e.getBlock(1)[0]) {
                            case 0:
                                this.signatureAlgorithm = "anonymous";
                                break;
                            case 1:
                                this.signatureAlgorithm = "rsa";
                                break;
                            case 2:
                                this.signatureAlgorithm = "dsa";
                                break;
                            case 3:
                                this.signatureAlgorithm = "ecdsa";
                                break;
                            default:
                                throw new Error("Object's stream was not correct for SignedCertificateTimestamp")
                        }
                        const n = e.getUint16(),
                            i = new Uint8Array(e.getBlock(n)).buffer.slice(0),
                            o = s.fromBER(i);
                        if (-1 === o.offset) throw new Error("Object's stream was not correct for SignedCertificateTimestamp");
                        if (this.signature = o.result, t !== 47 + r + n) throw new Error("Object's stream was not correct for SignedCertificateTimestamp")
                    }
                }
                toSchema() {
                    const e = this.toStream();
                    return new s.RawData({
                        data: e.stream.buffer
                    })
                }
                toStream() {
                    const e = new me;
                    e.appendUint16(47 + this.extensions.byteLength + this.signature.valueBeforeDecode.byteLength), e.appendChar(this.version), e.appendView(new Uint8Array(this.logID));
                    const t = new ArrayBuffer(8),
                        r = new Uint8Array(t),
                        s = (0, a.utilToBase)(this.timestamp.valueOf(), 8);
                    let n, i;
                    switch (r.set(new Uint8Array(s), 8 - s.byteLength), e.appendView(r), e.appendUint16(this.extensions.byteLength), this.extensions.byteLength && e.appendView(new Uint8Array(this.extensions)), this.hashAlgorithm.toLowerCase()) {
                        case "none":
                            n = 0;
                            break;
                        case "md5":
                            n = 1;
                            break;
                        case "sha1":
                            n = 2;
                            break;
                        case "sha224":
                            n = 3;
                            break;
                        case "sha256":
                            n = 4;
                            break;
                        case "sha384":
                            n = 5;
                            break;
                        case "sha512":
                            n = 6;
                            break;
                        default:
                            throw new Error(`Incorrect data for hashAlgorithm: ${this.hashAlgorithm}`)
                    }
                    switch (e.appendChar(n), this.signatureAlgorithm.toLowerCase()) {
                        case "anonymous":
                            i = 0;
                            break;
                        case "rsa":
                            i = 1;
                            break;
                        case "dsa":
                            i = 2;
                            break;
                        case "ecdsa":
                            i = 3;
                            break;
                        default:
                            throw new Error(`Incorrect data for signatureAlgorithm: ${this.signatureAlgorithm}`)
                    }
                    e.appendChar(i);
                    const o = this.signature.toBER(!1);
                    return e.appendUint16(o.byteLength), e.appendView(new Uint8Array(o)), e
                }
                toJSON() {
                    return {
                        version: this.version,
                        logID: (0, a.bufferToHexCodes)(this.logID),
                        timestamp: this.timestamp,
                        extensions: (0, a.bufferToHexCodes)(this.extensions),
                        hashAlgorithm: this.hashAlgorithm,
                        signatureAlgorithm: this.signatureAlgorithm,
                        signature: this.signature.toJSON()
                    }
                }
                async verify(e, t, r = 0) {
                    let n, i = (0, a.toBase64)((0, a.arrayBufferToString)(this.logID)),
                        o = null,
                        c = new me;
                    for (const t of e)
                        if (t.log_id === i) {
                            o = t.key;
                            break
                        } if (null === o) throw new Error(`Public key not found for CT with logId: ${i}`);
                    const u = s.fromBER((0, a.stringToArrayBuffer)((0, a.fromBase64)(o)));
                    if (-1 === u.offset) throw new Error(`Incorrect key value for CT Log with logId: ${i}`);
                    n = new l({
                        schema: u.result
                    }), c.appendChar(0), c.appendChar(0);
                    const h = new ArrayBuffer(8),
                        m = new Uint8Array(h),
                        f = (0, a.utilToBase)(this.timestamp.valueOf(), 8);
                    return m.set(new Uint8Array(f), 8 - f.byteLength), c.appendView(m), c.appendUint16(r), 0 === r && c.appendUint24(t.byteLength), c.appendView(new Uint8Array(t)), c.appendUint16(this.extensions.byteLength), 0 !== this.extensions.byteLength && c.appendView(new Uint8Array(this.extensions)), k().subtle.verifyWithPublicKey(c._stream._buffer.slice(0, c._length), {
                        valueBlock: {
                            valueHex: this.signature.toBER(!1)
                        }
                    }, n, {
                        algorithmId: ""
                    }, "SHA-256")
                }
            }
            class ge {
                constructor(e = {}) {
                    this.timestamps = (0, a.getParametersValue)(e, "timestamps", ge.defaultValues("timestamps")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "timestamps":
                            return [];
                        default:
                            throw new Error(`Invalid member name for SignedCertificateTimestampList class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "timestamps":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for SignedCertificateTimestampList class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return "optional" in t == !1 && (t.optional = !1), new s.OctetString({
                        name: t.blockName || "SignedCertificateTimestampList",
                        optional: t.optional
                    })
                }
                fromSchema(e) {
                    if (e instanceof s.OctetString == !1) throw new Error("Object's schema was not verified against input data for SignedCertificateTimestampList");
                    const t = new me({
                        stream: new he({
                            buffer: e.valueBlock.valueHex
                        })
                    });
                    if (t.getUint16() !== t.length) throw new Error("Object's schema was not verified against input data for SignedCertificateTimestampList");
                    for (; t.length;) this.timestamps.push(new fe({
                        stream: t
                    }))
                }
                toSchema() {
                    const e = new me;
                    let t = 0;
                    const r = [];
                    for (const e of this.timestamps) {
                        const s = e.toStream();
                        r.push(s), t += s.stream.buffer.byteLength
                    }
                    e.appendUint16(t);
                    for (const t of r) e.appendView(t.stream.view);
                    return new s.OctetString({
                        valueHex: e.stream.buffer.slice(0)
                    })
                }
                toJSON() {
                    return {
                        timestamps: Array.from(this.timestamps, (e => e.toJSON()))
                    }
                }
            }
            async function de(e, t, r, s = -1) {
                let a, n, i = null;
                const o = new me;
                let l;
                const c = A();
                if (void 0 === c) return Promise.reject("Unable to create WebCrypto object");
                for (let t = 0; t < e.extensions.length; t++) switch (e.extensions[t].extnID) {
                    case "1.3.6.1.4.1.11129.2.4.2":
                        if (i = e.extensions[t].parsedValue, 0 === i.timestamps.length) throw new Error("Nothing to verify in the certificate");
                        e.extensions.splice(t, 1)
                }
                if (null === i) throw new Error("No SignedCertificateTimestampList extension in the specified certificate");
                if (a = e.encodeTBS().toBER(!1), n = await c.digest({
                        name: "SHA-256"
                    }, new Uint8Array(t.subjectPublicKeyInfo.toSchema().toBER(!1))), o.appendView(new Uint8Array(n)), o.appendUint24(a.byteLength), o.appendView(new Uint8Array(a)), l = o._stream._buffer.slice(0, o._length), -1 === s) {
                    const e = [];
                    for (const t of i.timestamps) {
                        const s = await t.verify(r, l, 1);
                        e.push(s)
                    }
                    return e
                }
                return s >= i.timestamps.length && (s = i.timestamps.length - 1), [await i.timestamps[s].verify(r, l, 1)]
            }
            class pe {
                constructor(e = {}) {
                    this.templateID = (0, a.getParametersValue)(e, "templateID", pe.defaultValues("templateID")), "templateMajorVersion" in e && (this.templateMajorVersion = (0, a.getParametersValue)(e, "templateMajorVersion", pe.defaultValues("templateMajorVersion"))), "templateMinorVersion" in e && (this.templateMinorVersion = (0, a.getParametersValue)(e, "templateMinorVersion", pe.defaultValues("templateMinorVersion"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "templateID":
                            return "";
                        case "templateMajorVersion":
                        case "templateMinorVersion":
                            return 0;
                        default:
                            throw new Error(`Invalid member name for CertificateTemplate class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.templateID || ""
                        }), new s.Integer({
                            name: t.templateMajorVersion || "",
                            optional: !0
                        }), new s.Integer({
                            name: t.templateMinorVersion || "",
                            optional: !0
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["templateID", "templateMajorVersion", "templateMinorVersion"]);
                    let t = s.compareSchema(e, e, pe.schema({
                        names: {
                            templateID: "templateID",
                            templateMajorVersion: "templateMajorVersion",
                            templateMinorVersion: "templateMinorVersion"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for CertificateTemplate");
                    this.templateID = t.result.templateID.valueBlock.toString(), "templateMajorVersion" in t.result && (this.templateMajorVersion = t.result.templateMajorVersion.valueBlock.valueDec), "templateMinorVersion" in t.result && (this.templateMinorVersion = t.result.templateMinorVersion.valueBlock.valueDec)
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.ObjectIdentifier({
                        value: this.templateID
                    })), "templateMajorVersion" in this && e.push(new s.Integer({
                        value: this.templateMajorVersion
                    })), "templateMinorVersion" in this && e.push(new s.Integer({
                        value: this.templateMinorVersion
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        extnID: this.templateID
                    };
                    return "templateMajorVersion" in this && (e.templateMajorVersion = this.templateMajorVersion), "templateMinorVersion" in this && (e.templateMinorVersion = this.templateMinorVersion), e
                }
            }
            class ye {
                constructor(e = {}) {
                    this.certificateIndex = (0, a.getParametersValue)(e, "certificateIndex", ye.defaultValues("certificateIndex")), this.keyIndex = (0, a.getParametersValue)(e, "keyIndex", ye.defaultValues("keyIndex")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "certificateIndex":
                        case "keyIndex":
                            return 0;
                        default:
                            throw new Error(`Invalid member name for CAVersion class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    return new s.Integer
                }
                fromSchema(e) {
                    if (e.constructor.blockName() !== s.Integer.blockName()) throw new Error("Object's schema was not verified against input data for CAVersion");
                    let t = e.valueBlock.valueHex.slice(0);
                    const r = new Uint8Array(t);
                    switch (!0) {
                        case t.byteLength < 4: {
                            const e = new ArrayBuffer(4);
                            new Uint8Array(e).set(r, 4 - t.byteLength), t = e.slice(0)
                        }
                        break;
                    case t.byteLength > 4: {
                        const e = new ArrayBuffer(4);
                        new Uint8Array(e).set(r.slice(0, 4)), t = e.slice(0)
                    }
                    }
                    const a = t.slice(0, 2),
                        n = new Uint8Array(a);
                    let i = n[0];
                    n[0] = n[1], n[1] = i;
                    const o = new Uint16Array(a);
                    this.keyIndex = o[0];
                    const l = t.slice(2),
                        c = new Uint8Array(l);
                    i = c[0], c[0] = c[1], c[1] = i;
                    const u = new Uint16Array(l);
                    this.certificateIndex = u[0]
                }
                toSchema() {
                    const e = new ArrayBuffer(2);
                    new Uint16Array(e)[0] = this.certificateIndex;
                    const t = new Uint8Array(e);
                    let r = t[0];
                    t[0] = t[1], t[1] = r;
                    const n = new ArrayBuffer(2);
                    new Uint16Array(n)[0] = this.keyIndex;
                    const i = new Uint8Array(n);
                    return r = i[0], i[0] = i[1], i[1] = r, new s.Integer({
                        valueHex: (0, a.utilConcatBuf)(n, e)
                    })
                }
                toJSON() {
                    return {
                        certificateIndex: this.certificateIndex,
                        keyIndex: this.keyIndex
                    }
                }
            }
            class be {
                constructor(e = {}) {
                    this.id = (0, a.getParametersValue)(e, "id", be.defaultValues("id")), "type" in e && (this.type = (0, a.getParametersValue)(e, "type", be.defaultValues("type"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "id":
                            return "";
                        case "type":
                            return new s.Null;
                        default:
                            throw new Error(`Invalid member name for QCStatement class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "id":
                            return "" === t;
                        case "type":
                            return t instanceof s.Null;
                        default:
                            throw new Error(`Invalid member name for QCStatement class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.id || ""
                        }), new s.Any({
                            name: t.type || "",
                            optional: !0
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["id", "type"]);
                    const t = s.compareSchema(e, e, be.schema({
                        names: {
                            id: "id",
                            type: "type"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for QCStatement");
                    this.id = t.result.id.valueBlock.toString(), "type" in t.result && (this.type = t.result.type)
                }
                toSchema() {
                    const e = [new s.ObjectIdentifier({
                        value: this.id
                    })];
                    return "type" in this && e.push(this.type), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        id: this.id
                    };
                    return "type" in this && (e.type = this.type.toJSON()), e
                }
            }
            class ve {
                constructor(e = {}) {
                    this.values = (0, a.getParametersValue)(e, "values", ve.defaultValues("values")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "values":
                            return [];
                        default:
                            throw new Error(`Invalid member name for QCStatements class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "values":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for QCStatements class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.values || "",
                            value: be.schema(t.value || {})
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["values"]);
                    const t = s.compareSchema(e, e, ve.schema({
                        names: {
                            values: "values"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for QCStatements");
                    this.values = Array.from(t.result.values, (e => new be({
                        schema: e
                    })))
                }
                toSchema() {
                    return new s.Sequence({
                        value: Array.from(this.values, (e => e.toSchema()))
                    })
                }
                toJSON() {
                    return {
                        extensions: Array.from(this.values, (e => e.toJSON()))
                    }
                }
            }
            class we {
                constructor(e = {}) {
                    this.extnID = (0, a.getParametersValue)(e, "extnID", we.defaultValues("extnID")), this.critical = (0, a.getParametersValue)(e, "critical", we.defaultValues("critical")), this.extnValue = "extnValue" in e ? new s.OctetString({
                        valueHex: e.extnValue
                    }) : we.defaultValues("extnValue"), "parsedValue" in e && (this.parsedValue = (0, a.getParametersValue)(e, "parsedValue", we.defaultValues("parsedValue"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "extnID":
                            return "";
                        case "critical":
                            return !1;
                        case "extnValue":
                            return new s.OctetString;
                        case "parsedValue":
                            return {};
                        default:
                            throw new Error(`Invalid member name for Extension class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.extnID || ""
                        }), new s.Boolean({
                            name: t.critical || "",
                            optional: !0
                        }), new s.OctetString({
                            name: t.extnValue || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["extnID", "critical", "extnValue"]);
                    let t = s.compareSchema(e, e, we.schema({
                        names: {
                            extnID: "extnID",
                            critical: "critical",
                            extnValue: "extnValue"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for Extension");
                    if (this.extnID = t.result.extnID.valueBlock.toString(), "critical" in t.result && (this.critical = t.result.critical.valueBlock.value), this.extnValue = t.result.extnValue, t = s.fromBER(this.extnValue.valueBlock.valueHex), -1 !== t.offset) switch (this.extnID) {
                        case "2.5.29.9":
                            try {
                                this.parsedValue = new W({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new W, this.parsedValue.parsingError = "Incorrectly formated SubjectDirectoryAttributes"
                            }
                            break;
                        case "2.5.29.14":
                        case "2.5.29.15":
                            this.parsedValue = t.result;
                            break;
                        case "2.5.29.16":
                            try {
                                this.parsedValue = new G({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new G, this.parsedValue.parsingError = "Incorrectly formated PrivateKeyUsagePeriod"
                            }
                            break;
                        case "2.5.29.17":
                        case "2.5.29.18":
                            try {
                                this.parsedValue = new J({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new J, this.parsedValue.parsingError = "Incorrectly formated AltName"
                            }
                            break;
                        case "2.5.29.19":
                            try {
                                this.parsedValue = new Q({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new Q, this.parsedValue.parsingError = "Incorrectly formated BasicConstraints"
                            }
                            break;
                        case "2.5.29.20":
                        case "2.5.29.27":
                        case "2.5.29.21":
                        case "2.5.29.24":
                            this.parsedValue = t.result;
                            break;
                        case "2.5.29.28":
                            try {
                                this.parsedValue = new z({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new z, this.parsedValue.parsingError = "Incorrectly formated IssuingDistributionPoint"
                            }
                            break;
                        case "2.5.29.29":
                            try {
                                this.parsedValue = new Z({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new Z, this.parsedValue.parsingError = "Incorrectly formated GeneralNames"
                            }
                            break;
                        case "2.5.29.30":
                            try {
                                this.parsedValue = new Y({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new Y, this.parsedValue.parsingError = "Incorrectly formated NameConstraints"
                            }
                            break;
                        case "2.5.29.31":
                        case "2.5.29.46":
                            try {
                                this.parsedValue = new te({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new te, this.parsedValue.parsingError = "Incorrectly formated CRLDistributionPoints"
                            }
                            break;
                        case "2.5.29.32":
                        case "1.3.6.1.4.1.311.21.10":
                            try {
                                this.parsedValue = new ae({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new ae, this.parsedValue.parsingError = "Incorrectly formated CertificatePolicies"
                            }
                            break;
                        case "2.5.29.33":
                            try {
                                this.parsedValue = new ie({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new ie, this.parsedValue.parsingError = "Incorrectly formated CertificatePolicies"
                            }
                            break;
                        case "2.5.29.35":
                            try {
                                this.parsedValue = new oe({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new oe, this.parsedValue.parsingError = "Incorrectly formated AuthorityKeyIdentifier"
                            }
                            break;
                        case "2.5.29.36":
                            try {
                                this.parsedValue = new le({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new le, this.parsedValue.parsingError = "Incorrectly formated PolicyConstraints"
                            }
                            break;
                        case "2.5.29.37":
                            try {
                                this.parsedValue = new ce({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new ce, this.parsedValue.parsingError = "Incorrectly formated ExtKeyUsage"
                            }
                            break;
                        case "2.5.29.54":
                            this.parsedValue = t.result;
                            break;
                        case "1.3.6.1.5.5.7.1.1":
                        case "1.3.6.1.5.5.7.1.11":
                            try {
                                this.parsedValue = new ue({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new ue, this.parsedValue.parsingError = "Incorrectly formated InfoAccess"
                            }
                            break;
                        case "1.3.6.1.4.1.11129.2.4.2":
                            try {
                                this.parsedValue = new ge({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new ge, this.parsedValue.parsingError = "Incorrectly formated SignedCertificateTimestampList"
                            }
                            break;
                        case "1.3.6.1.4.1.311.20.2":
                        case "1.3.6.1.4.1.311.21.2":
                            this.parsedValue = t.result;
                            break;
                        case "1.3.6.1.4.1.311.21.7":
                            try {
                                this.parsedValue = new pe({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new pe, this.parsedValue.parsingError = "Incorrectly formated CertificateTemplate"
                            }
                            break;
                        case "1.3.6.1.4.1.311.21.1":
                            try {
                                this.parsedValue = new ye({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new ye, this.parsedValue.parsingError = "Incorrectly formated CAVersion"
                            }
                            break;
                        case "1.3.6.1.5.5.7.1.3":
                            try {
                                this.parsedValue = new ve({
                                    schema: t.result
                                })
                            } catch (e) {
                                this.parsedValue = new ve, this.parsedValue.parsingError = "Incorrectly formated QCStatements"
                            }
                    }
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.ObjectIdentifier({
                        value: this.extnID
                    })), this.critical !== we.defaultValues("critical") && e.push(new s.Boolean({
                        value: this.critical
                    })), e.push(this.extnValue), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        extnID: this.extnID,
                        extnValue: this.extnValue.toJSON()
                    };
                    return this.critical !== we.defaultValues("critical") && (e.critical = this.critical), "parsedValue" in this && "toJSON" in this.parsedValue && (e.parsedValue = this.parsedValue.toJSON()), e
                }
            }
            class Se {
                constructor(e = {}) {
                    this.extensions = (0, a.getParametersValue)(e, "extensions", Se.defaultValues("extensions")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "extensions":
                            return [];
                        default:
                            throw new Error(`Invalid member name for Extensions class: ${e}`)
                    }
                }
                static schema(e = {}, t = !1) {
                    const r = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        optional: t,
                        name: r.blockName || "",
                        value: [new s.Repeated({
                            name: r.extensions || "",
                            value: we.schema(r.extension || {})
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["extensions"]);
                    const t = s.compareSchema(e, e, Se.schema({
                        names: {
                            extensions: "extensions"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for Extensions");
                    this.extensions = Array.from(t.result.extensions, (e => new we({
                        schema: e
                    })))
                }
                toSchema() {
                    return new s.Sequence({
                        value: Array.from(this.extensions, (e => e.toSchema()))
                    })
                }
                toJSON() {
                    return {
                        extensions: Array.from(this.extensions, (e => e.toJSON()))
                    }
                }
            }

            function ke(e = {}) {
                const t = (0, a.getParametersValue)(e, "names", {});
                return new s.Sequence({
                    name: t.blockName || "tbsCertificate",
                    value: [new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [new s.Integer({
                            name: t.tbsCertificateVersion || "tbsCertificate.version"
                        })]
                    }), new s.Integer({
                        name: t.tbsCertificateSerialNumber || "tbsCertificate.serialNumber"
                    }), n.schema(t.signature || {
                        names: {
                            blockName: "tbsCertificate.signature"
                        }
                    }), R.schema(t.issuer || {
                        names: {
                            blockName: "tbsCertificate.issuer"
                        }
                    }), new s.Sequence({
                        name: t.tbsCertificateValidity || "tbsCertificate.validity",
                        value: [F.schema(t.notBefore || {
                            names: {
                                utcTimeName: "tbsCertificate.notBefore",
                                generalTimeName: "tbsCertificate.notBefore"
                            }
                        }), F.schema(t.notAfter || {
                            names: {
                                utcTimeName: "tbsCertificate.notAfter",
                                generalTimeName: "tbsCertificate.notAfter"
                            }
                        })]
                    }), R.schema(t.subject || {
                        names: {
                            blockName: "tbsCertificate.subject"
                        }
                    }), l.schema(t.subjectPublicKeyInfo || {
                        names: {
                            blockName: "tbsCertificate.subjectPublicKeyInfo"
                        }
                    }), new s.Primitive({
                        name: t.tbsCertificateIssuerUniqueID || "tbsCertificate.issuerUniqueID",
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        }
                    }), new s.Primitive({
                        name: t.tbsCertificateSubjectUniqueID || "tbsCertificate.subjectUniqueID",
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 2
                        }
                    }), new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 3
                        },
                        value: [Se.schema(t.extensions || {
                            names: {
                                blockName: "tbsCertificate.extensions"
                            }
                        })]
                    })]
                })
            }
            class Ae {
                constructor(e = {}) {
                    this.tbs = (0, a.getParametersValue)(e, "tbs", Ae.defaultValues("tbs")), this.version = (0, a.getParametersValue)(e, "version", Ae.defaultValues("version")), this.serialNumber = (0, a.getParametersValue)(e, "serialNumber", Ae.defaultValues("serialNumber")), this.signature = (0, a.getParametersValue)(e, "signature", Ae.defaultValues("signature")), this.issuer = (0, a.getParametersValue)(e, "issuer", Ae.defaultValues("issuer")), this.notBefore = (0, a.getParametersValue)(e, "notBefore", Ae.defaultValues("notBefore")), this.notAfter = (0, a.getParametersValue)(e, "notAfter", Ae.defaultValues("notAfter")), this.subject = (0, a.getParametersValue)(e, "subject", Ae.defaultValues("subject")), this.subjectPublicKeyInfo = (0, a.getParametersValue)(e, "subjectPublicKeyInfo", Ae.defaultValues("subjectPublicKeyInfo")), "issuerUniqueID" in e && (this.issuerUniqueID = (0, a.getParametersValue)(e, "issuerUniqueID", Ae.defaultValues("issuerUniqueID"))), "subjectUniqueID" in e && (this.subjectUniqueID = (0, a.getParametersValue)(e, "subjectUniqueID", Ae.defaultValues("subjectUniqueID"))), "extensions" in e && (this.extensions = (0, a.getParametersValue)(e, "extensions", Ae.defaultValues("extensions"))), this.signatureAlgorithm = (0, a.getParametersValue)(e, "signatureAlgorithm", Ae.defaultValues("signatureAlgorithm")), this.signatureValue = (0, a.getParametersValue)(e, "signatureValue", Ae.defaultValues("signatureValue")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "tbs":
                            return new ArrayBuffer(0);
                        case "version":
                            return 0;
                        case "serialNumber":
                            return new s.Integer;
                        case "signature":
                            return new n;
                        case "issuer":
                            return new R;
                        case "notBefore":
                        case "notAfter":
                            return new F;
                        case "subject":
                            return new R;
                        case "subjectPublicKeyInfo":
                            return new l;
                        case "issuerUniqueID":
                        case "subjectUniqueID":
                            return new ArrayBuffer(0);
                        case "extensions":
                            return [];
                        case "signatureAlgorithm":
                            return new n;
                        case "signatureValue":
                            return new s.BitString;
                        default:
                            throw new Error(`Invalid member name for Certificate class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [ke(t.tbsCertificate), n.schema(t.signatureAlgorithm || {
                            names: {
                                blockName: "signatureAlgorithm"
                            }
                        }), new s.BitString({
                            name: t.signatureValue || "signatureValue"
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["tbsCertificate", "tbsCertificate.extensions", "tbsCertificate.version", "tbsCertificate.serialNumber", "tbsCertificate.signature", "tbsCertificate.issuer", "tbsCertificate.notBefore", "tbsCertificate.notAfter", "tbsCertificate.subject", "tbsCertificate.subjectPublicKeyInfo", "tbsCertificate.issuerUniqueID", "tbsCertificate.subjectUniqueID", "signatureAlgorithm", "signatureValue"]);
                    const t = s.compareSchema(e, e, Ae.schema({
                        names: {
                            tbsCertificate: {
                                names: {
                                    extensions: {
                                        names: {
                                            extensions: "tbsCertificate.extensions"
                                        }
                                    }
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for Certificate");
                    this.tbs = t.result.tbsCertificate.valueBeforeDecode, "tbsCertificate.version" in t.result && (this.version = t.result["tbsCertificate.version"].valueBlock.valueDec), this.serialNumber = t.result["tbsCertificate.serialNumber"], this.signature = new n({
                        schema: t.result["tbsCertificate.signature"]
                    }), this.issuer = new R({
                        schema: t.result["tbsCertificate.issuer"]
                    }), this.notBefore = new F({
                        schema: t.result["tbsCertificate.notBefore"]
                    }), this.notAfter = new F({
                        schema: t.result["tbsCertificate.notAfter"]
                    }), this.subject = new R({
                        schema: t.result["tbsCertificate.subject"]
                    }), this.subjectPublicKeyInfo = new l({
                        schema: t.result["tbsCertificate.subjectPublicKeyInfo"]
                    }), "tbsCertificate.issuerUniqueID" in t.result && (this.issuerUniqueID = t.result["tbsCertificate.issuerUniqueID"].valueBlock.valueHex), "tbsCertificate.subjectUniqueID" in t.result && (this.subjectUniqueID = t.result["tbsCertificate.subjectUniqueID"].valueBlock.valueHex), "tbsCertificate.extensions" in t.result && (this.extensions = Array.from(t.result["tbsCertificate.extensions"], (e => new we({
                        schema: e
                    })))), this.signatureAlgorithm = new n({
                        schema: t.result.signatureAlgorithm
                    }), this.signatureValue = t.result.signatureValue
                }
                encodeTBS() {
                    const e = [];
                    return "version" in this && this.version !== Ae.defaultValues("version") && e.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [new s.Integer({
                            value: this.version
                        })]
                    })), e.push(this.serialNumber), e.push(this.signature.toSchema()), e.push(this.issuer.toSchema()), e.push(new s.Sequence({
                        value: [this.notBefore.toSchema(), this.notAfter.toSchema()]
                    })), e.push(this.subject.toSchema()), e.push(this.subjectPublicKeyInfo.toSchema()), "issuerUniqueID" in this && e.push(new s.Primitive({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        valueHex: this.issuerUniqueID
                    })), "subjectUniqueID" in this && e.push(new s.Primitive({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 2
                        },
                        valueHex: this.subjectUniqueID
                    })), "extensions" in this && e.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 3
                        },
                        value: [new s.Sequence({
                            value: Array.from(this.extensions, (e => e.toSchema()))
                        })]
                    })), new s.Sequence({
                        value: e
                    })
                }
                toSchema(e = !1) {
                    let t = {};
                    if (!1 === e) {
                        if (0 === this.tbs.length) return Ae.schema().value[0];
                        t = s.fromBER(this.tbs).result
                    } else t = this.encodeTBS();
                    return new s.Sequence({
                        value: [t, this.signatureAlgorithm.toSchema(), this.signatureValue]
                    })
                }
                toJSON() {
                    const e = {
                        tbs: (0, a.bufferToHexCodes)(this.tbs, 0, this.tbs.byteLength),
                        serialNumber: this.serialNumber.toJSON(),
                        signature: this.signature.toJSON(),
                        issuer: this.issuer.toJSON(),
                        notBefore: this.notBefore.toJSON(),
                        notAfter: this.notAfter.toJSON(),
                        subject: this.subject.toJSON(),
                        subjectPublicKeyInfo: this.subjectPublicKeyInfo.toJSON(),
                        signatureAlgorithm: this.signatureAlgorithm.toJSON(),
                        signatureValue: this.signatureValue.toJSON()
                    };
                    return "version" in this && this.version !== Ae.defaultValues("version") && (e.version = this.version), "issuerUniqueID" in this && (e.issuerUniqueID = (0, a.bufferToHexCodes)(this.issuerUniqueID, 0, this.issuerUniqueID.byteLength)), "subjectUniqueID" in this && (e.subjectUniqueID = (0, a.bufferToHexCodes)(this.subjectUniqueID, 0, this.subjectUniqueID.byteLength)), "extensions" in this && (e.extensions = Array.from(this.extensions, (e => e.toJSON()))), e
                }
                getPublicKey(e = null) {
                    return k().subtle.getPublicKey(this.subjectPublicKeyInfo, this.signatureAlgorithm, e)
                }
                getKeyHash(e = "SHA-1") {
                    const t = A();
                    return void 0 === t ? Promise.reject("Unable to create WebCrypto object") : t.digest({
                        name: e
                    }, new Uint8Array(this.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex))
                }
                sign(e, t = "SHA-1") {
                    if (void 0 === e) return Promise.reject("Need to provide a private key for signing");
                    let r, a = Promise.resolve();
                    const n = k();
                    return a = a.then((() => n.subtle.getSignatureParameters(e, t))), a = a.then((e => {
                        r = e.parameters, this.signature = e.signatureAlgorithm, this.signatureAlgorithm = e.signatureAlgorithm
                    })), a = a.then((() => {
                        this.tbs = this.encodeTBS().toBER(!1)
                    })), a = a.then((() => n.subtle.signWithPrivateKey(this.tbs, e, r))), a = a.then((e => {
                        this.signatureValue = new s.BitString({
                            valueHex: e
                        })
                    })), a
                }
                verify(e = null) {
                    let t = {};
                    return null !== e ? t = e.subjectPublicKeyInfo : this.issuer.isEqual(this.subject) && (t = this.subjectPublicKeyInfo), t instanceof l == !1 ? Promise.reject("Please provide issuer certificate as a parameter") : k().subtle.verifyWithPublicKey(this.tbs, this.signatureValue, t, this.signatureAlgorithm)
                }
            }
            class Ce {
                constructor(e = {}) {
                    this.notBeforeTime = (0, a.getParametersValue)(e, "notBeforeTime", Ce.defaultValues("notBeforeTime")), this.notAfterTime = (0, a.getParametersValue)(e, "notAfterTime", Ce.defaultValues("notAfterTime")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "notBeforeTime":
                        case "notAfterTime":
                            return new Date(0, 0, 0);
                        default:
                            throw new Error(`Invalid member name for AttCertValidityPeriod class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.GeneralizedTime({
                            name: t.notBeforeTime || ""
                        }), new s.GeneralizedTime({
                            name: t.notAfterTime || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["notBeforeTime", "notAfterTime"]);
                    const t = s.compareSchema(e, e, Ce.schema({
                        names: {
                            notBeforeTime: "notBeforeTime",
                            notAfterTime: "notAfterTime"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for AttCertValidityPeriod");
                    this.notBeforeTime = t.result.notBeforeTime.toDate(), this.notAfterTime = t.result.notAfterTime.toDate()
                }
                toSchema() {
                    return new s.Sequence({
                        value: [new s.GeneralizedTime({
                            valueDate: this.notBeforeTime
                        }), new s.GeneralizedTime({
                            valueDate: this.notAfterTime
                        })]
                    })
                }
                toJSON() {
                    return {
                        notBeforeTime: this.notBeforeTime,
                        notAfterTime: this.notAfterTime
                    }
                }
            }
            class Ie {
                constructor(e = {}) {
                    this.issuer = (0, a.getParametersValue)(e, "issuer", Ie.defaultValues("issuer")), this.serialNumber = (0, a.getParametersValue)(e, "serialNumber", Ie.defaultValues("serialNumber")), "issuerUID" in e && (this.issuerUID = (0, a.getParametersValue)(e, "issuerUID", Ie.defaultValues("issuerUID"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "issuer":
                            return new Z;
                        case "serialNumber":
                            return new s.Integer;
                        case "issuerUID":
                            return new s.BitString;
                        default:
                            throw new Error(`Invalid member name for IssuerSerial class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [Z.schema(t.issuer || {}), new s.Integer({
                            name: t.serialNumber || ""
                        }), new s.BitString({
                            optional: !0,
                            name: t.issuerUID || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["issuer", "serialNumber", "issuerUID"]);
                    const t = s.compareSchema(e, e, Ie.schema({
                        names: {
                            issuer: {
                                names: {
                                    blockName: "issuer"
                                }
                            },
                            serialNumber: "serialNumber",
                            issuerUID: "issuerUID"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for IssuerSerial");
                    this.issuer = new Z({
                        schema: t.result.issuer
                    }), this.serialNumber = t.result.serialNumber, "issuerUID" in t.result && (this.issuerUID = t.result.issuerUID)
                }
                toSchema() {
                    const e = new s.Sequence({
                        value: [this.issuer.toSchema(), this.serialNumber]
                    });
                    return "issuerUID" in this && e.valueBlock.value.push(this.issuerUID), e
                }
                toJSON() {
                    const e = {
                        issuer: this.issuer.toJSON(),
                        serialNumber: this.serialNumber.toJSON()
                    };
                    return "issuerUID" in this && (e.issuerUID = this.issuerUID.toJSON()), e
                }
            }
            class Pe {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", Pe.defaultValues("version")), "baseCertificateID" in e && (this.baseCertificateID = (0, a.getParametersValue)(e, "baseCertificateID", Pe.defaultValues("baseCertificateID"))), "subjectName" in e && (this.subjectName = (0, a.getParametersValue)(e, "subjectName", Pe.defaultValues("subjectName"))), this.issuer = (0, a.getParametersValue)(e, "issuer", Pe.defaultValues("issuer")), this.signature = (0, a.getParametersValue)(e, "signature", Pe.defaultValues("signature")), this.serialNumber = (0, a.getParametersValue)(e, "serialNumber", Pe.defaultValues("serialNumber")), this.attrCertValidityPeriod = (0, a.getParametersValue)(e, "attrCertValidityPeriod", Pe.defaultValues("attrCertValidityPeriod")), this.attributes = (0, a.getParametersValue)(e, "attributes", Pe.defaultValues("attributes")), "issuerUniqueID" in e && (this.issuerUniqueID = (0, a.getParametersValue)(e, "issuerUniqueID", Pe.defaultValues("issuerUniqueID"))), "extensions" in e && (this.extensions = (0, a.getParametersValue)(e, "extensions", Pe.defaultValues("extensions"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 0;
                        case "baseCertificateID":
                            return new Ie;
                        case "subjectName":
                            return new Z;
                        case "issuer":
                            return {};
                        case "signature":
                            return new n;
                        case "serialNumber":
                            return new s.Integer;
                        case "attrCertValidityPeriod":
                            return new Ce;
                        case "attributes":
                            return [];
                        case "issuerUniqueID":
                            return new s.BitString;
                        case "extensions":
                            return new Se;
                        default:
                            throw new Error(`Invalid member name for AttributeCertificateInfoV1 class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.version || ""
                        }), new s.Choice({
                            value: [new s.Constructed({
                                name: t.baseCertificateID || "",
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 0
                                },
                                value: Ie.schema().valueBlock.value
                            }), new s.Constructed({
                                name: t.subjectName || "",
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 1
                                },
                                value: Z.schema().valueBlock.value
                            })]
                        }), Z.schema({
                            names: {
                                blockName: t.issuer || ""
                            }
                        }), n.schema(t.signature || {}), new s.Integer({
                            name: t.serialNumber || ""
                        }), Ce.schema(t.attrCertValidityPeriod || {}), new s.Sequence({
                            name: t.attributes || "",
                            value: [new s.Repeated({
                                value: c.schema()
                            })]
                        }), new s.BitString({
                            optional: !0,
                            name: t.issuerUniqueID || ""
                        }), Se.schema(t.extensions || {}, !0)]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["version", "baseCertificateID", "subjectName", "issuer", "signature", "serialNumber", "attrCertValidityPeriod", "attributes", "issuerUniqueID", "extensions"]);
                    const t = s.compareSchema(e, e, Pe.schema({
                        names: {
                            version: "version",
                            baseCertificateID: "baseCertificateID",
                            subjectName: "subjectName",
                            issuer: "issuer",
                            signature: {
                                names: {
                                    blockName: "signature"
                                }
                            },
                            serialNumber: "serialNumber",
                            attrCertValidityPeriod: {
                                names: {
                                    blockName: "attrCertValidityPeriod"
                                }
                            },
                            attributes: "attributes",
                            issuerUniqueID: "issuerUniqueID",
                            extensions: {
                                names: {
                                    blockName: "extensions"
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for AttributeCertificateInfoV1");
                    this.version = t.result.version.valueBlock.valueDec, "baseCertificateID" in t.result && (this.baseCertificateID = new Ie({
                        schema: new s.Sequence({
                            value: t.result.baseCertificateID.valueBlock.value
                        })
                    })), "subjectName" in t.result && (this.subjectName = new Z({
                        schema: new s.Sequence({
                            value: t.result.subjectName.valueBlock.value
                        })
                    })), this.issuer = t.result.issuer, this.signature = new n({
                        schema: t.result.signature
                    }), this.serialNumber = t.result.serialNumber, this.attrCertValidityPeriod = new Ce({
                        schema: t.result.attrCertValidityPeriod
                    }), this.attributes = Array.from(t.result.attributes.valueBlock.value, (e => new c({
                        schema: e
                    }))), "issuerUniqueID" in t.result && (this.issuerUniqueID = t.result.issuerUniqueID), "extensions" in t.result && (this.extensions = new Se({
                        schema: t.result.extensions
                    }))
                }
                toSchema() {
                    const e = new s.Sequence({
                        value: [new s.Integer({
                            value: this.version
                        })]
                    });
                    return "baseCertificateID" in this && e.valueBlock.value.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: this.baseCertificateID.toSchema().valueBlock.value
                    })), "subjectName" in this && e.valueBlock.value.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: this.subjectName.toSchema().valueBlock.value
                    })), e.valueBlock.value.push(this.issuer.toSchema()), e.valueBlock.value.push(this.signature.toSchema()), e.valueBlock.value.push(this.serialNumber), e.valueBlock.value.push(this.attrCertValidityPeriod.toSchema()), e.valueBlock.value.push(new s.Sequence({
                        value: Array.from(this.attributes, (e => e.toSchema()))
                    })), "issuerUniqueID" in this && e.valueBlock.value.push(this.issuerUniqueID), "extensions" in this && e.valueBlock.value.push(this.extensions.toSchema()), e
                }
                toJSON() {
                    const e = {
                        version: this.version
                    };
                    return "baseCertificateID" in this && (e.baseCertificateID = this.baseCertificateID.toJSON()), "subjectName" in this && (e.subjectName = this.subjectName.toJSON()), e.issuer = this.issuer.toJSON(), e.signature = this.signature.toJSON(), e.serialNumber = this.serialNumber.toJSON(), e.attrCertValidityPeriod = this.attrCertValidityPeriod.toJSON(), e.attributes = Array.from(this.attributes, (e => e.toJSON())), "issuerUniqueID" in this && (e.issuerUniqueID = this.issuerUniqueID.toJSON()), "extensions" in this && (e.extensions = this.extensions.toJSON()), e
                }
            }
            class Be {
                constructor(e = {}) {
                    this.acinfo = (0, a.getParametersValue)(e, "acinfo", Be.defaultValues("acinfo")), this.signatureAlgorithm = (0, a.getParametersValue)(e, "signatureAlgorithm", Be.defaultValues("signatureAlgorithm")), this.signatureValue = (0, a.getParametersValue)(e, "signatureValue", Be.defaultValues("signatureValue")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "acinfo":
                            return new Pe;
                        case "signatureAlgorithm":
                            return new n;
                        case "signatureValue":
                            return new s.BitString;
                        default:
                            throw new Error(`Invalid member name for AttributeCertificateV1 class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [Pe.schema(t.acinfo || {}), n.schema(t.signatureAlgorithm || {}), new s.BitString({
                            name: t.signatureValue || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["acinfo", "signatureValue", "signatureAlgorithm"]);
                    const t = s.compareSchema(e, e, Be.schema({
                        names: {
                            acinfo: {
                                names: {
                                    blockName: "acinfo"
                                }
                            },
                            signatureAlgorithm: {
                                names: {
                                    blockName: "signatureAlgorithm"
                                }
                            },
                            signatureValue: "signatureValue"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for AttributeCertificateV1");
                    this.acinfo = new Pe({
                        schema: t.result.acinfo
                    }), this.signatureAlgorithm = new n({
                        schema: t.result.signatureAlgorithm
                    }), this.signatureValue = t.result.signatureValue
                }
                toSchema() {
                    return new s.Sequence({
                        value: [this.acinfo.toSchema(), this.signatureAlgorithm.toSchema(), this.signatureValue]
                    })
                }
                toJSON() {
                    return {
                        acinfo: this.acinfo.toJSON(),
                        signatureAlgorithm: this.signatureAlgorithm.toJSON(),
                        signatureValue: this.signatureValue.toJSON()
                    }
                }
            }
            class Ve {
                constructor(e = {}) {
                    this.digestedObjectType = (0, a.getParametersValue)(e, "digestedObjectType", Ve.defaultValues("digestedObjectType")), "otherObjectTypeID" in e && (this.otherObjectTypeID = (0, a.getParametersValue)(e, "otherObjectTypeID", Ve.defaultValues("otherObjectTypeID"))), this.digestAlgorithm = (0, a.getParametersValue)(e, "digestAlgorithm", Ve.defaultValues("digestAlgorithm")), this.objectDigest = (0, a.getParametersValue)(e, "objectDigest", Ve.defaultValues("objectDigest")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "digestedObjectType":
                            return new s.Enumerated;
                        case "otherObjectTypeID":
                            return new s.ObjectIdentifier;
                        case "digestAlgorithm":
                            return new n;
                        case "objectDigest":
                            return new s.BitString;
                        default:
                            throw new Error(`Invalid member name for ObjectDigestInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Enumerated({
                            name: t.digestedObjectType || ""
                        }), new s.ObjectIdentifier({
                            optional: !0,
                            name: t.otherObjectTypeID || ""
                        }), n.schema(t.digestAlgorithm || {}), new s.BitString({
                            name: t.objectDigest || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["digestedObjectType", "otherObjectTypeID", "digestAlgorithm", "objectDigest"]);
                    const t = s.compareSchema(e, e, Ve.schema({
                        names: {
                            digestedObjectType: "digestedObjectType",
                            otherObjectTypeID: "otherObjectTypeID",
                            digestAlgorithm: {
                                names: {
                                    blockName: "digestAlgorithm"
                                }
                            },
                            objectDigest: "objectDigest"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for ObjectDigestInfo");
                    this.digestedObjectType = t.result.digestedObjectType, "otherObjectTypeID" in t.result && (this.otherObjectTypeID = t.result.otherObjectTypeID), this.digestAlgorithm = new n({
                        schema: t.result.digestAlgorithm
                    }), this.objectDigest = t.result.objectDigest
                }
                toSchema() {
                    const e = new s.Sequence({
                        value: [this.digestedObjectType]
                    });
                    return "otherObjectTypeID" in this && e.value.push(this.otherObjectTypeID), e.value.push(this.digestAlgorithm.toSchema()), e.value.push(this.objectDigest), e
                }
                toJSON() {
                    const e = {
                        digestedObjectType: this.digestedObjectType.toJSON()
                    };
                    return "otherObjectTypeID" in this && (e.otherObjectTypeID = this.otherObjectTypeID.toJSON()), e.digestAlgorithm = this.digestAlgorithm.toJSON(), e.objectDigest = this.objectDigest.toJSON(), e
                }
            }
            class Ne {
                constructor(e = {}) {
                    "issuerName" in e && (this.issuerName = (0, a.getParametersValue)(e, "issuerName", Ne.defaultValues("issuerName"))), "baseCertificateID" in e && (this.baseCertificateID = (0, a.getParametersValue)(e, "baseCertificateID", Ne.defaultValues("baseCertificateID"))), "objectDigestInfo" in e && (this.objectDigestInfo = (0, a.getParametersValue)(e, "objectDigestInfo", Ne.defaultValues("objectDigestInfo"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "issuerName":
                            return new Z;
                        case "baseCertificateID":
                            return new Ie;
                        case "objectDigestInfo":
                            return new Ve;
                        default:
                            throw new Error(`Invalid member name for V2Form class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [Z.schema({
                            names: {
                                blockName: t.issuerName
                            }
                        }, !0), new s.Constructed({
                            optional: !0,
                            name: t.baseCertificateID || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: Ie.schema().valueBlock.value
                        }), new s.Constructed({
                            optional: !0,
                            name: t.objectDigestInfo || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: Ve.schema().valueBlock.value
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["issuerName", "baseCertificateID", "objectDigestInfo"]);
                    const t = s.compareSchema(e, e, Ne.schema({
                        names: {
                            issuerName: "issuerName",
                            baseCertificateID: "baseCertificateID",
                            objectDigestInfo: "objectDigestInfo"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for V2Form");
                    "issuerName" in t.result && (this.issuerName = new Z({
                        schema: t.result.issuerName
                    })), "baseCertificateID" in t.result && (this.baseCertificateID = new Ie({
                        schema: new s.Sequence({
                            value: t.result.baseCertificateID.valueBlock.value
                        })
                    })), "objectDigestInfo" in t.result && (this.objectDigestInfo = new Ve({
                        schema: new s.Sequence({
                            value: t.result.objectDigestInfo.valueBlock.value
                        })
                    }))
                }
                toSchema() {
                    const e = new s.Sequence;
                    return "issuerName" in this && e.valueBlock.value.push(this.issuerName.toSchema()), "baseCertificateID" in this && e.valueBlock.value.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: this.baseCertificateID.toSchema().valueBlock.value
                    })), "objectDigestInfo" in this && e.valueBlock.value.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: this.objectDigestInfo.toSchema().valueBlock.value
                    })), e
                }
                toJSON() {
                    const e = {};
                    return "issuerName" in this && (e.issuerName = this.issuerName.toJSON()), "baseCertificateID" in this && (e.baseCertificateID = this.baseCertificateID.toJSON()), "objectDigestInfo" in this && (e.objectDigestInfo = this.objectDigestInfo.toJSON()), e
                }
            }
            class Ee {
                constructor(e = {}) {
                    "baseCertificateID" in e && (this.baseCertificateID = (0, a.getParametersValue)(e, "baseCertificateID", Ee.defaultValues("baseCertificateID"))), "entityName" in e && (this.entityName = (0, a.getParametersValue)(e, "entityName", Ee.defaultValues("entityName"))), "objectDigestInfo" in e && (this.objectDigestInfo = (0, a.getParametersValue)(e, "objectDigestInfo", Ee.defaultValues("objectDigestInfo"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "baseCertificateID":
                            return new Ie;
                        case "entityName":
                            return new Z;
                        case "objectDigestInfo":
                            return new Ve;
                        default:
                            throw new Error(`Invalid member name for Holder class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Constructed({
                            optional: !0,
                            name: t.baseCertificateID || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: Ie.schema().valueBlock.value
                        }), new s.Constructed({
                            optional: !0,
                            name: t.entityName || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: Z.schema().valueBlock.value
                        }), new s.Constructed({
                            optional: !0,
                            name: t.objectDigestInfo || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            },
                            value: Ve.schema().valueBlock.value
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["baseCertificateID", "entityName", "objectDigestInfo"]);
                    const t = s.compareSchema(e, e, Ee.schema({
                        names: {
                            baseCertificateID: "baseCertificateID",
                            entityName: "entityName",
                            objectDigestInfo: "objectDigestInfo"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for Holder");
                    "baseCertificateID" in t.result && (this.baseCertificateID = new Ie({
                        schema: new s.Sequence({
                            value: t.result.baseCertificateID.valueBlock.value
                        })
                    })), "entityName" in t.result && (this.entityName = new Z({
                        schema: new s.Sequence({
                            value: t.result.entityName.valueBlock.value
                        })
                    })), "objectDigestInfo" in t.result && (this.objectDigestInfo = new Ve({
                        schema: new s.Sequence({
                            value: t.result.objectDigestInfo.valueBlock.value
                        })
                    }))
                }
                toSchema() {
                    const e = new s.Sequence;
                    return "baseCertificateID" in this && e.valueBlock.value.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: this.baseCertificateID.toSchema().valueBlock.value
                    })), "entityName" in this && e.valueBlock.value.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: this.entityName.toSchema().valueBlock.value
                    })), "objectDigestInfo" in this && e.valueBlock.value.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 2
                        },
                        value: this.objectDigestInfo.toSchema().valueBlock.value
                    })), e
                }
                toJSON() {
                    const e = {};
                    return "baseCertificateID" in this && (e.baseCertificateID = this.baseCertificateID.toJSON()), "entityName" in this && (e.entityName = this.entityName.toJSON()), "objectDigestInfo" in this && (e.objectDigestInfo = this.objectDigestInfo.toJSON()), e
                }
            }
            class xe {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", xe.defaultValues("version")), this.holder = (0, a.getParametersValue)(e, "holder", xe.defaultValues("holder")), this.issuer = (0, a.getParametersValue)(e, "issuer", xe.defaultValues("issuer")), this.signature = (0, a.getParametersValue)(e, "signature", xe.defaultValues("signature")), this.serialNumber = (0, a.getParametersValue)(e, "serialNumber", xe.defaultValues("serialNumber")), this.attrCertValidityPeriod = (0, a.getParametersValue)(e, "attrCertValidityPeriod", xe.defaultValues("attrCertValidityPeriod")), this.attributes = (0, a.getParametersValue)(e, "attributes", xe.defaultValues("attributes")), "issuerUniqueID" in e && (this.issuerUniqueID = (0, a.getParametersValue)(e, "issuerUniqueID", xe.defaultValues("issuerUniqueID"))), "extensions" in e && (this.extensions = (0, a.getParametersValue)(e, "extensions", xe.defaultValues("extensions"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 1;
                        case "holder":
                            return new Ee;
                        case "issuer":
                            return {};
                        case "signature":
                            return new n;
                        case "serialNumber":
                            return new s.Integer;
                        case "attrCertValidityPeriod":
                            return new Ce;
                        case "attributes":
                            return [];
                        case "issuerUniqueID":
                            return new s.BitString;
                        case "extensions":
                            return new Se;
                        default:
                            throw new Error(`Invalid member name for AttributeCertificateInfoV2 class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.version || ""
                        }), Ee.schema(t.holder || {}), new s.Choice({
                            value: [Z.schema({
                                names: {
                                    blockName: t.issuer || ""
                                }
                            }), new s.Constructed({
                                name: t.issuer || "",
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 0
                                },
                                value: Ne.schema().valueBlock.value
                            })]
                        }), n.schema(t.signature || {}), new s.Integer({
                            name: t.serialNumber || ""
                        }), Ce.schema(t.attrCertValidityPeriod || {}), new s.Sequence({
                            name: t.attributes || "",
                            value: [new s.Repeated({
                                value: c.schema()
                            })]
                        }), new s.BitString({
                            optional: !0,
                            name: t.issuerUniqueID || ""
                        }), Se.schema(t.extensions || {}, !0)]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["version", "holder", "issuer", "signature", "serialNumber", "attrCertValidityPeriod", "attributes", "issuerUniqueID", "extensions"]);
                    const t = s.compareSchema(e, e, xe.schema({
                        names: {
                            version: "version",
                            holder: {
                                names: {
                                    blockName: "holder"
                                }
                            },
                            issuer: "issuer",
                            signature: {
                                names: {
                                    blockName: "signature"
                                }
                            },
                            serialNumber: "serialNumber",
                            attrCertValidityPeriod: {
                                names: {
                                    blockName: "attrCertValidityPeriod"
                                }
                            },
                            attributes: "attributes",
                            issuerUniqueID: "issuerUniqueID",
                            extensions: {
                                names: {
                                    blockName: "extensions"
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for AttributeCertificateInfoV2");
                    switch (this.version = t.result.version.valueBlock.valueDec, this.holder = new Ee({
                            schema: t.result.holder
                        }), t.result.issuer.idBlock.tagClass) {
                        case 3:
                            this.issuer = new Ne({
                                schema: new s.Sequence({
                                    value: t.result.issuer.valueBlock.value
                                })
                            });
                            break;
                        case 1:
                        default:
                            throw new Error("Incorect value for 'issuer' in AttributeCertificateInfoV2")
                    }
                    this.signature = new n({
                        schema: t.result.signature
                    }), this.serialNumber = t.result.serialNumber, this.attrCertValidityPeriod = new Ce({
                        schema: t.result.attrCertValidityPeriod
                    }), this.attributes = Array.from(t.result.attributes.valueBlock.value, (e => new c({
                        schema: e
                    }))), "issuerUniqueID" in t.result && (this.issuerUniqueID = t.result.issuerUniqueID), "extensions" in t.result && (this.extensions = new Se({
                        schema: t.result.extensions
                    }))
                }
                toSchema() {
                    const e = new s.Sequence({
                        value: [new s.Integer({
                            value: this.version
                        }), this.holder.toSchema(), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: this.issuer.toSchema().valueBlock.value
                        }), this.signature.toSchema(), this.serialNumber, this.attrCertValidityPeriod.toSchema(), new s.Sequence({
                            value: Array.from(this.attributes, (e => e.toSchema()))
                        })]
                    });
                    return "issuerUniqueID" in this && e.valueBlock.value.push(this.issuerUniqueID), "extensions" in this && e.valueBlock.value.push(this.extensions.toSchema()), e
                }
                toJSON() {
                    const e = {
                        version: this.version,
                        holder: this.holder.toJSON(),
                        issuer: this.issuer.toJSON(),
                        signature: this.signature.toJSON(),
                        serialNumber: this.serialNumber.toJSON(),
                        attrCertValidityPeriod: this.attrCertValidityPeriod.toJSON(),
                        attributes: Array.from(this.attributes, (e => e.toJSON()))
                    };
                    return "issuerUniqueID" in this && (e.issuerUniqueID = this.issuerUniqueID.toJSON()), "extensions" in this && (e.extensions = this.extensions.toJSON()), e
                }
            }
            class Oe {
                constructor(e = {}) {
                    this.acinfo = (0, a.getParametersValue)(e, "acinfo", Oe.defaultValues("acinfo")), this.signatureAlgorithm = (0, a.getParametersValue)(e, "signatureAlgorithm", Oe.defaultValues("signatureAlgorithm")), this.signatureValue = (0, a.getParametersValue)(e, "signatureValue", Oe.defaultValues("signatureValue")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "acinfo":
                            return new xe;
                        case "signatureAlgorithm":
                            return new n;
                        case "signatureValue":
                            return new s.BitString;
                        default:
                            throw new Error(`Invalid member name for AttributeCertificateV2 class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [xe.schema(t.acinfo || {}), n.schema(t.signatureAlgorithm || {}), new s.BitString({
                            name: t.signatureValue || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["acinfo", "signatureAlgorithm", "signatureValue"]);
                    const t = s.compareSchema(e, e, Oe.schema({
                        names: {
                            acinfo: {
                                names: {
                                    blockName: "acinfo"
                                }
                            },
                            signatureAlgorithm: {
                                names: {
                                    blockName: "signatureAlgorithm"
                                }
                            },
                            signatureValue: "signatureValue"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for AttributeCertificateV2");
                    this.acinfo = new xe({
                        schema: t.result.acinfo
                    }), this.signatureAlgorithm = new n({
                        schema: t.result.signatureAlgorithm
                    }), this.signatureValue = t.result.signatureValue
                }
                toSchema() {
                    return new s.Sequence({
                        value: [this.acinfo.toSchema(), this.signatureAlgorithm.toSchema(), this.signatureValue]
                    })
                }
                toJSON() {
                    return {
                        acinfo: this.acinfo.toJSON(),
                        signatureAlgorithm: this.signatureAlgorithm.toJSON(),
                        signatureValue: this.signatureValue.toJSON()
                    }
                }
            }
            class De {
                constructor(e = {}) {
                    this.certId = (0, a.getParametersValue)(e, "certId", De.defaultValues("certId")), this.certValue = (0, a.getParametersValue)(e, "certValue", De.defaultValues("certValue")), "parsedValue" in e && (this.parsedValue = (0, a.getParametersValue)(e, "parsedValue", De.defaultValues("parsedValue"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "certId":
                            return "";
                        case "certValue":
                            return new s.Any;
                        case "parsedValue":
                            return {};
                        default:
                            throw new Error(`Invalid member name for CertBag class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "certId":
                            return "" === t;
                        case "certValue":
                            return t instanceof s.Any;
                        case "parsedValue":
                            return t instanceof Object && 0 === Object.keys(t).length;
                        default:
                            throw new Error(`Invalid member name for CertBag class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.id || "id"
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Any({
                                name: t.value || "value"
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["certId", "certValue"]);
                    const t = s.compareSchema(e, e, De.schema({
                        names: {
                            id: "certId",
                            value: "certValue"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for CertBag");
                    switch (this.certId = t.result.certId.valueBlock.toString(), this.certValue = t.result.certValue, this.certId) {
                        case "1.2.840.113549.1.9.22.1": {
                            const e = s.fromBER(this.certValue.valueBlock.valueHex);
                            try {
                                this.parsedValue = new Ae({
                                    schema: e.result
                                })
                            } catch (t) {
                                this.parsedValue = new Oe({
                                    schema: e.result
                                })
                            }
                        }
                        break;
                    case "1.2.840.113549.1.9.22.3": {
                        const e = s.fromBER(this.certValue.valueBlock.valueHex);
                        this.parsedValue = new Oe({
                            schema: e.result
                        })
                    }
                    break;
                    case "1.2.840.113549.1.9.22.2":
                    default:
                        throw new Error(`Incorrect "certId" value in CertBag: ${this.certId}`)
                    }
                }
                toSchema() {
                    return "parsedValue" in this && ("acinfo" in this.parsedValue ? this.certId = "1.2.840.113549.1.9.22.3" : this.certId = "1.2.840.113549.1.9.22.1", this.certValue = new s.OctetString({
                        valueHex: this.parsedValue.toSchema().toBER(!1)
                    })), new s.Sequence({
                        value: [new s.ObjectIdentifier({
                            value: this.certId
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: ["toSchema" in this.certValue ? this.certValue.toSchema() : this.certValue]
                        })]
                    })
                }
                toJSON() {
                    return {
                        certId: this.certId,
                        certValue: this.certValue.toJSON()
                    }
                }
            }
            class je {
                constructor(e = {}) {
                    this.userCertificate = (0, a.getParametersValue)(e, "userCertificate", je.defaultValues("userCertificate")), this.revocationDate = (0, a.getParametersValue)(e, "revocationDate", je.defaultValues("revocationDate")), "crlEntryExtensions" in e && (this.crlEntryExtensions = (0, a.getParametersValue)(e, "crlEntryExtensions", je.defaultValues("crlEntryExtensions"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "userCertificate":
                            return new s.Integer;
                        case "revocationDate":
                            return new F;
                        case "crlEntryExtensions":
                            return new Se;
                        default:
                            throw new Error(`Invalid member name for RevokedCertificate class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.userCertificate || "userCertificate"
                        }), F.schema({
                            names: {
                                utcTimeName: t.revocationDate || "revocationDate",
                                generalTimeName: t.revocationDate || "revocationDate"
                            }
                        }), Se.schema({
                            names: {
                                blockName: t.crlEntryExtensions || "crlEntryExtensions"
                            }
                        }, !0)]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["userCertificate", "revocationDate", "crlEntryExtensions"]);
                    const t = s.compareSchema(e, e, je.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for RevokedCertificate");
                    this.userCertificate = t.result.userCertificate, this.revocationDate = new F({
                        schema: t.result.revocationDate
                    }), "crlEntryExtensions" in t.result && (this.crlEntryExtensions = new Se({
                        schema: t.result.crlEntryExtensions
                    }))
                }
                toSchema() {
                    const e = [this.userCertificate, this.revocationDate.toSchema()];
                    return "crlEntryExtensions" in this && e.push(this.crlEntryExtensions.toSchema()), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        userCertificate: this.userCertificate.toJSON(),
                        revocationDate: this.revocationDate.toJSON
                    };
                    return "crlEntryExtensions" in this && (e.crlEntryExtensions = this.crlEntryExtensions.toJSON()), e
                }
            }

            function Re(e = {}) {
                const t = (0, a.getParametersValue)(e, "names", {});
                return new s.Sequence({
                    name: t.blockName || "tbsCertList",
                    value: [new s.Integer({
                        optional: !0,
                        name: t.tbsCertListVersion || "tbsCertList.version",
                        value: 2
                    }), n.schema(t.signature || {
                        names: {
                            blockName: "tbsCertList.signature"
                        }
                    }), R.schema(t.issuer || {
                        names: {
                            blockName: "tbsCertList.issuer"
                        }
                    }), F.schema(t.tbsCertListThisUpdate || {
                        names: {
                            utcTimeName: "tbsCertList.thisUpdate",
                            generalTimeName: "tbsCertList.thisUpdate"
                        }
                    }), F.schema(t.tbsCertListNextUpdate || {
                        names: {
                            utcTimeName: "tbsCertList.nextUpdate",
                            generalTimeName: "tbsCertList.nextUpdate"
                        }
                    }, !0), new s.Sequence({
                        optional: !0,
                        value: [new s.Repeated({
                            name: t.tbsCertListRevokedCertificates || "tbsCertList.revokedCertificates",
                            value: new s.Sequence({
                                value: [new s.Integer, F.schema(), Se.schema({}, !0)]
                            })
                        })]
                    }), new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [Se.schema(t.crlExtensions || {
                            names: {
                                blockName: "tbsCertList.extensions"
                            }
                        })]
                    })]
                })
            }
            class qe {
                constructor(e = {}) {
                    this.tbs = (0, a.getParametersValue)(e, "tbs", qe.defaultValues("tbs")), this.version = (0, a.getParametersValue)(e, "version", qe.defaultValues("version")), this.signature = (0, a.getParametersValue)(e, "signature", qe.defaultValues("signature")), this.issuer = (0, a.getParametersValue)(e, "issuer", qe.defaultValues("issuer")), this.thisUpdate = (0, a.getParametersValue)(e, "thisUpdate", qe.defaultValues("thisUpdate")), "nextUpdate" in e && (this.nextUpdate = (0, a.getParametersValue)(e, "nextUpdate", qe.defaultValues("nextUpdate"))), "revokedCertificates" in e && (this.revokedCertificates = (0, a.getParametersValue)(e, "revokedCertificates", qe.defaultValues("revokedCertificates"))), "crlExtensions" in e && (this.crlExtensions = (0, a.getParametersValue)(e, "crlExtensions", qe.defaultValues("crlExtensions"))), this.signatureAlgorithm = (0, a.getParametersValue)(e, "signatureAlgorithm", qe.defaultValues("signatureAlgorithm")), this.signatureValue = (0, a.getParametersValue)(e, "signatureValue", qe.defaultValues("signatureValue")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "tbs":
                            return new ArrayBuffer(0);
                        case "version":
                            return 1;
                        case "signature":
                            return new n;
                        case "issuer":
                            return new R;
                        case "thisUpdate":
                        case "nextUpdate":
                            return new F;
                        case "revokedCertificates":
                            return [];
                        case "crlExtensions":
                            return new Se;
                        case "signatureAlgorithm":
                            return new n;
                        case "signatureValue":
                            return new s.BitString;
                        default:
                            throw new Error(`Invalid member name for CertificateRevocationList class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "CertificateList",
                        value: [Re(e), n.schema(t.signatureAlgorithm || {
                            names: {
                                blockName: "signatureAlgorithm"
                            }
                        }), new s.BitString({
                            name: t.signatureValue || "signatureValue"
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["tbsCertList", "tbsCertList.version", "tbsCertList.signature", "tbsCertList.issuer", "tbsCertList.thisUpdate", "tbsCertList.nextUpdate", "tbsCertList.revokedCertificates", "tbsCertList.extensions", "signatureAlgorithm", "signatureValue"]);
                    const t = s.compareSchema(e, e, qe.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for CertificateRevocationList");
                    this.tbs = t.result.tbsCertList.valueBeforeDecode, "tbsCertList.version" in t.result && (this.version = t.result["tbsCertList.version"].valueBlock.valueDec), this.signature = new n({
                        schema: t.result["tbsCertList.signature"]
                    }), this.issuer = new R({
                        schema: t.result["tbsCertList.issuer"]
                    }), this.thisUpdate = new F({
                        schema: t.result["tbsCertList.thisUpdate"]
                    }), "tbsCertList.nextUpdate" in t.result && (this.nextUpdate = new F({
                        schema: t.result["tbsCertList.nextUpdate"]
                    })), "tbsCertList.revokedCertificates" in t.result && (this.revokedCertificates = Array.from(t.result["tbsCertList.revokedCertificates"], (e => new je({
                        schema: e
                    })))), "tbsCertList.extensions" in t.result && (this.crlExtensions = new Se({
                        schema: t.result["tbsCertList.extensions"]
                    })), this.signatureAlgorithm = new n({
                        schema: t.result.signatureAlgorithm
                    }), this.signatureValue = t.result.signatureValue
                }
                encodeTBS() {
                    const e = [];
                    return this.version !== qe.defaultValues("version") && e.push(new s.Integer({
                        value: this.version
                    })), e.push(this.signature.toSchema()), e.push(this.issuer.toSchema()), e.push(this.thisUpdate.toSchema()), "nextUpdate" in this && e.push(this.nextUpdate.toSchema()), "revokedCertificates" in this && e.push(new s.Sequence({
                        value: Array.from(this.revokedCertificates, (e => e.toSchema()))
                    })), "crlExtensions" in this && e.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [this.crlExtensions.toSchema()]
                    })), new s.Sequence({
                        value: e
                    })
                }
                toSchema(e = !1) {
                    let t;
                    if (!1 === e) {
                        if (0 === this.tbs.length) return qe.schema();
                        t = s.fromBER(this.tbs).result
                    } else t = this.encodeTBS();
                    return new s.Sequence({
                        value: [t, this.signatureAlgorithm.toSchema(), this.signatureValue]
                    })
                }
                toJSON() {
                    const e = {
                        tbs: (0, a.bufferToHexCodes)(this.tbs, 0, this.tbs.byteLength),
                        signature: this.signature.toJSON(),
                        issuer: this.issuer.toJSON(),
                        thisUpdate: this.thisUpdate.toJSON(),
                        signatureAlgorithm: this.signatureAlgorithm.toJSON(),
                        signatureValue: this.signatureValue.toJSON()
                    };
                    return this.version !== qe.defaultValues("version") && (e.version = this.version), "nextUpdate" in this && (e.nextUpdate = this.nextUpdate.toJSON()), "revokedCertificates" in this && (e.revokedCertificates = Array.from(this.revokedCertificates, (e => e.toJSON()))), "crlExtensions" in this && (e.crlExtensions = this.crlExtensions.toJSON()), e
                }
                isCertificateRevoked(e) {
                    if (!1 === this.issuer.isEqual(e.issuer)) return !1;
                    if ("revokedCertificates" in this == !1) return !1;
                    for (const t of this.revokedCertificates)
                        if (t.userCertificate.isEqual(e.serialNumber)) return !0;
                    return !1
                }
                sign(e, t = "SHA-1") {
                    if (void 0 === e) return Promise.reject("Need to provide a private key for signing");
                    let r, a = Promise.resolve();
                    const n = k();
                    return a = a.then((() => n.subtle.getSignatureParameters(e, t))), a = a.then((e => {
                        r = e.parameters, this.signature = e.signatureAlgorithm, this.signatureAlgorithm = e.signatureAlgorithm
                    })), a = a.then((() => {
                        this.tbs = this.encodeTBS().toBER(!1)
                    })), a = a.then((() => n.subtle.signWithPrivateKey(this.tbs, e, r))), a = a.then((e => {
                        this.signatureValue = new s.BitString({
                            valueHex: e
                        })
                    })), a
                }
                verify(e = {}) {
                    let t = Promise.resolve(),
                        r = -1;
                    const s = k();
                    if ("issuerCertificate" in e && (r = e.issuerCertificate.subjectPublicKeyInfo, !1 === this.issuer.isEqual(e.issuerCertificate.subject))) return Promise.resolve(!1);
                    if ("publicKeyInfo" in e && (r = e.publicKeyInfo), "subjectPublicKey" in r == !1) return Promise.reject("Issuer's certificate must be provided as an input parameter");
                    if ("crlExtensions" in this)
                        for (const e of this.crlExtensions.extensions)
                            if (e.critical && "parsedValue" in e == !1) return Promise.resolve(!1);
                    return t = t.then((() => s.subtle.verifyWithPublicKey(this.tbs, this.signatureValue, r, this.signatureAlgorithm))), t
                }
            }
            class Te {
                constructor(e = {}) {
                    this.crlId = (0, a.getParametersValue)(e, "crlId", Te.defaultValues("crlId")), this.crlValue = (0, a.getParametersValue)(e, "crlValue", Te.defaultValues("crlValue")), "parsedValue" in e && (this.parsedValue = (0, a.getParametersValue)(e, "parsedValue", Te.defaultValues("parsedValue"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "crlId":
                            return "";
                        case "crlValue":
                            return new s.Any;
                        case "parsedValue":
                            return {};
                        default:
                            throw new Error(`Invalid member name for CRLBag class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "crlId":
                            return "" === t;
                        case "crlValue":
                            return t instanceof s.Any;
                        case "parsedValue":
                            return t instanceof Object && 0 === Object.keys(t).length;
                        default:
                            throw new Error(`Invalid member name for CRLBag class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.id || "id"
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Any({
                                name: t.value || "value"
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["crlId", "crlValue"]);
                    const t = s.compareSchema(e, e, Te.schema({
                        names: {
                            id: "crlId",
                            value: "crlValue"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for CRLBag");
                    switch (this.crlId = t.result.crlId.valueBlock.toString(), this.crlValue = t.result.crlValue, this.crlId) {
                        case "1.2.840.113549.1.9.23.1": {
                            const e = s.fromBER(this.certValue.valueBlock.valueHex);
                            this.parsedValue = new qe({
                                schema: e.result
                            })
                        }
                        break;
                    default:
                        throw new Error(`Incorrect "crlId" value in CRLBag: ${this.crlId}`)
                    }
                }
                toSchema() {
                    return "parsedValue" in this && (this.certId = "1.2.840.113549.1.9.23.1", this.certValue = new s.OctetString({
                        valueHex: this.parsedValue.toSchema().toBER(!1)
                    })), new s.Sequence({
                        value: [new s.ObjectIdentifier({
                            value: this.crlId
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [this.crlValue.toSchema()]
                        })]
                    })
                }
                toJSON() {
                    return {
                        crlId: this.crlId,
                        crlValue: this.crlValue.toJSON()
                    }
                }
            }
            class He {
                constructor(e = {}) {
                    this.secretTypeId = (0, a.getParametersValue)(e, "secretTypeId", He.defaultValues("secretTypeId")), this.secretValue = (0, a.getParametersValue)(e, "secretValue", He.defaultValues("secretValue")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "secretTypeId":
                            return "";
                        case "secretValue":
                            return new s.Any;
                        default:
                            throw new Error(`Invalid member name for SecretBag class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "secretTypeId":
                            return "" === t;
                        case "secretValue":
                            return t instanceof s.Any;
                        default:
                            throw new Error(`Invalid member name for SecretBag class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.id || "id"
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Any({
                                name: t.value || "value"
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["secretTypeId", "secretValue"]);
                    const t = s.compareSchema(e, e, He.schema({
                        names: {
                            id: "secretTypeId",
                            value: "secretValue"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for SecretBag");
                    this.secretTypeId = t.result.secretTypeId.valueBlock.toString(), this.secretValue = t.result.secretValue
                }
                toSchema() {
                    return new s.Sequence({
                        value: [new s.ObjectIdentifier({
                            value: this.secretTypeId
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [this.secretValue.toSchema()]
                        })]
                    })
                }
                toJSON() {
                    return {
                        secretTypeId: this.secretTypeId,
                        secretValue: this.secretValue.toJSON()
                    }
                }
            }
            class Le {
                constructor(e = {}) {
                    this.bagId = (0, a.getParametersValue)(e, "bagId", Le.defaultValues("bagId")), this.bagValue = (0, a.getParametersValue)(e, "bagValue", Le.defaultValues("bagValue")), "bagAttributes" in e && (this.bagAttributes = (0, a.getParametersValue)(e, "bagAttributes", Le.defaultValues("bagAttributes"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "bagId":
                            return "";
                        case "bagValue":
                            return new s.Any;
                        case "bagAttributes":
                            return [];
                        default:
                            throw new Error(`Invalid member name for SafeBag class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "bagId":
                            return "" === t;
                        case "bagValue":
                            return t instanceof s.Any;
                        case "bagAttributes":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for SafeBag class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.bagId || "bagId"
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Any({
                                name: t.bagValue || "bagValue"
                            })]
                        }), new s.Set({
                            optional: !0,
                            value: [new s.Repeated({
                                name: t.bagAttributes || "bagAttributes",
                                value: c.schema()
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["bagId", "bagValue", "bagAttributes"]);
                    const t = s.compareSchema(e, e, Le.schema({
                        names: {
                            bagId: "bagId",
                            bagValue: "bagValue",
                            bagAttributes: "bagAttributes"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for SafeBag");
                    switch (this.bagId = t.result.bagId.valueBlock.toString(), this.bagId) {
                        case "1.2.840.113549.1.12.10.1.1":
                            this.bagValue = new f({
                                schema: t.result.bagValue
                            });
                            break;
                        case "1.2.840.113549.1.12.10.1.2":
                            this.bagValue = new M({
                                schema: t.result.bagValue
                            });
                            break;
                        case "1.2.840.113549.1.12.10.1.3":
                            this.bagValue = new De({
                                schema: t.result.bagValue
                            });
                            break;
                        case "1.2.840.113549.1.12.10.1.4":
                            this.bagValue = new Te({
                                schema: t.result.bagValue
                            });
                            break;
                        case "1.2.840.113549.1.12.10.1.5":
                            this.bagValue = new He({
                                schema: t.result.bagValue
                            });
                            break;
                        case "1.2.840.113549.1.12.10.1.6":
                            this.bagValue = new Ke({
                                schema: t.result.bagValue
                            });
                            break;
                        default:
                            throw new Error(`Invalid "bagId" for SafeBag: ${this.bagId}`)
                    }
                    "bagAttributes" in t.result && (this.bagAttributes = Array.from(t.result.bagAttributes, (e => new c({
                        schema: e
                    }))))
                }
                toSchema() {
                    const e = [new s.ObjectIdentifier({
                        value: this.bagId
                    }), new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [this.bagValue.toSchema()]
                    })];
                    return "bagAttributes" in this && e.push(new s.Set({
                        value: Array.from(this.bagAttributes, (e => e.toSchema()))
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        bagId: this.bagId,
                        bagValue: this.bagValue.toJSON()
                    };
                    return "bagAttributes" in this && (e.bagAttributes = Array.from(this.bagAttributes, (e => e.toJSON()))), e
                }
            }
            class Ke {
                constructor(e = {}) {
                    this.safeBags = (0, a.getParametersValue)(e, "safeBags", Ke.defaultValues("safeBags")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "safeBags":
                            return [];
                        default:
                            throw new Error(`Invalid member name for SafeContents class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "safeBags":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for SafeContents class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.safeBags || "",
                            value: Le.schema()
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["safeBags"]);
                    const t = s.compareSchema(e, e, Ke.schema({
                        names: {
                            safeBags: "safeBags"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for SafeContents");
                    this.safeBags = Array.from(t.result.safeBags, (e => new Le({
                        schema: e
                    })))
                }
                toSchema() {
                    return new s.Sequence({
                        value: Array.from(this.safeBags, (e => e.toSchema()))
                    })
                }
                toJSON() {
                    return {
                        safeBags: Array.from(this.safeBags, (e => e.toJSON()))
                    }
                }
            }
            class Ue {
                constructor(e = {}) {
                    this.otherCertFormat = (0, a.getParametersValue)(e, "otherCertFormat", Ue.defaultValues("otherCertFormat")), this.otherCert = (0, a.getParametersValue)(e, "otherCert", Ue.defaultValues("otherCert")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "otherCertFormat":
                            return "";
                        case "otherCert":
                            return new s.Any;
                        default:
                            throw new Error(`Invalid member name for OtherCertificateFormat class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.otherCertFormat || "otherCertFormat"
                        }), new s.Any({
                            name: t.otherCert || "otherCert"
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["otherCertFormat", "otherCert"]);
                    const t = s.compareSchema(e, e, Ue.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for OtherCertificateFormat");
                    this.otherCertFormat = t.result.otherCertFormat.valueBlock.toString(), this.otherCert = t.result.otherCert
                }
                toSchema() {
                    return new s.Sequence({
                        value: [new s.ObjectIdentifier({
                            value: this.otherCertFormat
                        }), this.otherCert]
                    })
                }
                toJSON() {
                    const e = {
                        otherCertFormat: this.otherCertFormat
                    };
                    return this.otherCert instanceof s.Any || (e.otherCert = this.otherCert.toJSON()), e
                }
            }
            class Je {
                constructor(e = {}) {
                    this.certificates = (0, a.getParametersValue)(e, "certificates", Je.defaultValues("certificates")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "certificates":
                            return [];
                        default:
                            throw new Error(`Invalid member name for Attribute class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Set({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.certificates || "certificates",
                            value: new s.Choice({
                                value: [Ae.schema(), new s.Constructed({
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: 0
                                    },
                                    value: [new s.Any]
                                }), new s.Constructed({
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: 1
                                    },
                                    value: Be.schema().valueBlock.value
                                }), new s.Constructed({
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: 2
                                    },
                                    value: Oe.schema().valueBlock.value
                                }), new s.Constructed({
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: 3
                                    },
                                    value: Ue.schema().valueBlock.value
                                })]
                            })
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["certificates"]);
                    const t = s.compareSchema(e, e, Je.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for CertificateSet");
                    this.certificates = Array.from(t.result.certificates || [], (e => {
                        const t = e.idBlock.tagNumber;
                        if (1 === e.idBlock.tagClass) return new Ae({
                            schema: e
                        });
                        const r = new s.Sequence({
                            value: e.valueBlock.value
                        });
                        switch (t) {
                            case 1:
                                return new Be({
                                    schema: r
                                });
                            case 2:
                                return new Oe({
                                    schema: r
                                });
                            case 3:
                                return new Ue({
                                    schema: r
                                })
                        }
                        return e
                    }))
                }
                toSchema() {
                    return new s.Set({
                        value: Array.from(this.certificates, (e => {
                            switch (!0) {
                                case e instanceof Ae:
                                    return e.toSchema();
                                case e instanceof Be:
                                    return new s.Constructed({
                                        idBlock: {
                                            tagClass: 3,
                                            tagNumber: 1
                                        },
                                        value: e.toSchema().valueBlock.value
                                    });
                                case e instanceof Oe:
                                    return new s.Constructed({
                                        idBlock: {
                                            tagClass: 3,
                                            tagNumber: 2
                                        },
                                        value: e.toSchema().valueBlock.value
                                    });
                                case e instanceof Ue:
                                    return new s.Constructed({
                                        idBlock: {
                                            tagClass: 3,
                                            tagNumber: 3
                                        },
                                        value: e.toSchema().valueBlock.value
                                    })
                            }
                            return e
                        }))
                    })
                }
                toJSON() {
                    return {
                        certificates: Array.from(this.certificates, (e => e.toJSON()))
                    }
                }
            }
            class $e {
                constructor(e = {}) {
                    this.otherRevInfoFormat = (0, a.getParametersValue)(e, "otherRevInfoFormat", $e.defaultValues("otherRevInfoFormat")), this.otherRevInfo = (0, a.getParametersValue)(e, "otherRevInfo", $e.defaultValues("otherRevInfo")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "otherRevInfoFormat":
                            return "";
                        case "otherRevInfo":
                            return new s.Any;
                        default:
                            throw new Error(`Invalid member name for OtherRevocationInfoFormat class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.otherRevInfoFormat || "otherRevInfoFormat"
                        }), new s.Any({
                            name: t.otherRevInfo || "otherRevInfo"
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["otherRevInfoFormat", "otherRevInfo"]);
                    const t = s.compareSchema(e, e, $e.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for OtherRevocationInfoFormat");
                    this.otherRevInfoFormat = t.result.otherRevInfoFormat.valueBlock.toString(), this.otherRevInfo = t.result.otherRevInfo
                }
                toSchema() {
                    return new s.Sequence({
                        value: [new s.ObjectIdentifier({
                            value: this.otherRevInfoFormat
                        }), this.otherRevInfo]
                    })
                }
                toJSON() {
                    const e = {
                        otherRevInfoFormat: this.otherRevInfoFormat
                    };
                    return this.otherRevInfo instanceof s.Any || (e.otherRevInfo = this.otherRevInfo.toJSON()), e
                }
            }
            class _e {
                constructor(e = {}) {
                    this.crls = (0, a.getParametersValue)(e, "crls", _e.defaultValues("crls")), this.otherRevocationInfos = (0, a.getParametersValue)(e, "otherRevocationInfos", _e.defaultValues("otherRevocationInfos")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "crls":
                        case "otherRevocationInfos":
                            return [];
                        default:
                            throw new Error(`Invalid member name for RevocationInfoChoices class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Set({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.crls || "",
                            value: new s.Choice({
                                value: [qe.schema(), new s.Constructed({
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: 1
                                    },
                                    value: [new s.ObjectIdentifier, new s.Any]
                                })]
                            })
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["crls"]);
                    const t = s.compareSchema(e, e, _e.schema({
                        names: {
                            crls: "crls"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for RevocationInfoChoices");
                    for (const e of t.result.crls) 1 === e.idBlock.tagClass ? this.crls.push(new qe({
                        schema: e
                    })) : this.otherRevocationInfos.push(new $e({
                        schema: e
                    }))
                }
                toSchema() {
                    const e = [];
                    return e.push(...Array.from(this.crls, (e => e.toSchema()))), e.push(...Array.from(this.otherRevocationInfos, (e => {
                        const t = e.toSchema();
                        return t.idBlock.tagClass = 3, t.idBlock.tagNumber = 1, t
                    }))), new s.Set({
                        value: e
                    })
                }
                toJSON() {
                    return {
                        crls: Array.from(this.crls, (e => e.toJSON())),
                        otherRevocationInfos: Array.from(this.otherRevocationInfos, (e => e.toJSON()))
                    }
                }
            }
            class Me {
                constructor(e = {}) {
                    "certs" in e && (this.certs = (0, a.getParametersValue)(e, "certs", Me.defaultValues("certs"))), "crls" in e && (this.crls = (0, a.getParametersValue)(e, "crls", Me.defaultValues("crls"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "certs":
                            return new Je;
                        case "crls":
                            return new _e;
                        default:
                            throw new Error(`Invalid member name for OriginatorInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "certs":
                            return 0 === t.certificates.length;
                        case "crls":
                            return 0 === t.crls.length && 0 === t.otherRevocationInfos.length;
                        default:
                            throw new Error(`Invalid member name for OriginatorInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Constructed({
                            name: t.certs || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: Je.schema().valueBlock.value
                        }), new s.Constructed({
                            name: t.crls || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: _e.schema().valueBlock.value
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["certs", "crls"]);
                    const t = s.compareSchema(e, e, Me.schema({
                        names: {
                            certs: "certs",
                            crls: "crls"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for OriginatorInfo");
                    "certs" in t.result && (this.certs = new Je({
                        schema: new s.Set({
                            value: t.result.certs.valueBlock.value
                        })
                    })), "crls" in t.result && (this.crls = new _e({
                        schema: new s.Set({
                            value: t.result.crls.valueBlock.value
                        })
                    }))
                }
                toSchema() {
                    const e = [];
                    return "certs" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: this.certs.toSchema().valueBlock.value
                    })), "crls" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: this.crls.toSchema().valueBlock.value
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {};
                    return "certs" in this && (e.certs = this.certs.toJSON()), "crls" in this && (e.crls = this.crls.toJSON()), e
                }
            }
            class Fe {
                constructor(e = {}) {
                    this.issuer = (0, a.getParametersValue)(e, "issuer", Fe.defaultValues("issuer")), this.serialNumber = (0, a.getParametersValue)(e, "serialNumber", Fe.defaultValues("serialNumber")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "issuer":
                            return new R;
                        case "serialNumber":
                            return new s.Integer;
                        default:
                            throw new Error(`Invalid member name for IssuerAndSerialNumber class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [R.schema(t.issuer || {}), new s.Integer({
                            name: t.serialNumber || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["issuer", "serialNumber"]);
                    const t = s.compareSchema(e, e, Fe.schema({
                        names: {
                            issuer: {
                                names: {
                                    blockName: "issuer"
                                }
                            },
                            serialNumber: "serialNumber"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for IssuerAndSerialNumber");
                    this.issuer = new R({
                        schema: t.result.issuer
                    }), this.serialNumber = t.result.serialNumber
                }
                toSchema() {
                    return new s.Sequence({
                        value: [this.issuer.toSchema(), this.serialNumber]
                    })
                }
                toJSON() {
                    return {
                        issuer: this.issuer.toJSON(),
                        serialNumber: this.serialNumber.toJSON()
                    }
                }
            }
            class We {
                constructor(e = {}) {
                    this.variant = (0, a.getParametersValue)(e, "variant", We.defaultValues("variant")), "value" in e && (this.value = (0, a.getParametersValue)(e, "value", We.defaultValues("value"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "variant":
                            return -1;
                        case "value":
                            return {};
                        default:
                            throw new Error(`Invalid member name for RecipientIdentifier class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "variant":
                            return -1 === t;
                        case "values":
                            return 0 === Object.keys(t).length;
                        default:
                            throw new Error(`Invalid member name for RecipientIdentifier class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Choice({
                        value: [Fe.schema({
                            names: {
                                blockName: t.blockName || ""
                            }
                        }), new s.Primitive({
                            name: t.blockName || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            }
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["blockName"]);
                    const t = s.compareSchema(e, e, We.schema({
                        names: {
                            blockName: "blockName"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for RecipientIdentifier");
                    1 === t.result.blockName.idBlock.tagClass ? (this.variant = 1, this.value = new Fe({
                        schema: t.result.blockName
                    })) : (this.variant = 2, this.value = new s.OctetString({
                        valueHex: t.result.blockName.valueBlock.valueHex
                    }))
                }
                toSchema() {
                    switch (this.variant) {
                        case 1:
                            return this.value.toSchema();
                        case 2:
                            return new s.Primitive({
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 0
                                },
                                valueHex: this.value.valueBlock.valueHex
                            });
                        default:
                            return new s.Any
                    }
                }
                toJSON() {
                    const e = {
                        variant: this.variant
                    };
                    return 1 !== this.variant && 2 !== this.variant || (e.value = this.value.toJSON()), e
                }
            }
            class Ge {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", Ge.defaultValues("version")), this.rid = (0, a.getParametersValue)(e, "rid", Ge.defaultValues("rid")), this.keyEncryptionAlgorithm = (0, a.getParametersValue)(e, "keyEncryptionAlgorithm", Ge.defaultValues("keyEncryptionAlgorithm")), this.encryptedKey = (0, a.getParametersValue)(e, "encryptedKey", Ge.defaultValues("encryptedKey")), this.recipientCertificate = (0, a.getParametersValue)(e, "recipientCertificate", Ge.defaultValues("recipientCertificate")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return -1;
                        case "rid":
                            return {};
                        case "keyEncryptionAlgorithm":
                            return new n;
                        case "encryptedKey":
                            return new s.OctetString;
                        case "recipientCertificate":
                            return new Ae;
                        default:
                            throw new Error(`Invalid member name for KeyTransRecipientInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "version":
                            return t === Ge.defaultValues("version");
                        case "rid":
                            return 0 === Object.keys(t).length;
                        case "keyEncryptionAlgorithm":
                        case "encryptedKey":
                            return t.isEqual(Ge.defaultValues(e));
                        case "recipientCertificate":
                            return !1;
                        default:
                            throw new Error(`Invalid member name for KeyTransRecipientInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.version || ""
                        }), We.schema(t.rid || {}), n.schema(t.keyEncryptionAlgorithm || {}), new s.OctetString({
                            name: t.encryptedKey || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["version", "rid", "keyEncryptionAlgorithm", "encryptedKey"]);
                    const t = s.compareSchema(e, e, Ge.schema({
                        names: {
                            version: "version",
                            rid: {
                                names: {
                                    blockName: "rid"
                                }
                            },
                            keyEncryptionAlgorithm: {
                                names: {
                                    blockName: "keyEncryptionAlgorithm"
                                }
                            },
                            encryptedKey: "encryptedKey"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for KeyTransRecipientInfo");
                    this.version = t.result.version.valueBlock.valueDec, 3 === t.result.rid.idBlock.tagClass ? this.rid = new s.OctetString({
                        valueHex: t.result.rid.valueBlock.valueHex
                    }) : this.rid = new Fe({
                        schema: t.result.rid
                    }), this.keyEncryptionAlgorithm = new n({
                        schema: t.result.keyEncryptionAlgorithm
                    }), this.encryptedKey = t.result.encryptedKey
                }
                toSchema() {
                    const e = [];
                    return this.rid instanceof Fe ? (this.version = 0, e.push(new s.Integer({
                        value: this.version
                    })), e.push(this.rid.toSchema())) : (this.version = 2, e.push(new s.Integer({
                        value: this.version
                    })), e.push(new s.Primitive({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        valueHex: this.rid.valueBlock.valueHex
                    }))), e.push(this.keyEncryptionAlgorithm.toSchema()), e.push(this.encryptedKey), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    return {
                        version: this.version,
                        rid: this.rid.toJSON(),
                        keyEncryptionAlgorithm: this.keyEncryptionAlgorithm.toJSON(),
                        encryptedKey: this.encryptedKey.toJSON()
                    }
                }
            }
            class Qe {
                constructor(e = {}) {
                    this.algorithm = (0, a.getParametersValue)(e, "algorithm", Qe.defaultValues("algorithm")), this.publicKey = (0, a.getParametersValue)(e, "publicKey", Qe.defaultValues("publicKey")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "algorithm":
                            return new n;
                        case "publicKey":
                            return new s.BitString;
                        default:
                            throw new Error(`Invalid member name for OriginatorPublicKey class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "algorithm":
                        case "publicKey":
                            return t.isEqual(Qe.defaultValues(e));
                        default:
                            throw new Error(`Invalid member name for OriginatorPublicKey class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [n.schema(t.algorithm || {}), new s.BitString({
                            name: t.publicKey || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["algorithm", "publicKey"]);
                    const t = s.compareSchema(e, e, Qe.schema({
                        names: {
                            algorithm: {
                                names: {
                                    blockName: "algorithm"
                                }
                            },
                            publicKey: "publicKey"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for OriginatorPublicKey");
                    this.algorithm = new n({
                        schema: t.result.algorithm
                    }), this.publicKey = t.result.publicKey
                }
                toSchema() {
                    return new s.Sequence({
                        value: [this.algorithm.toSchema(), this.publicKey]
                    })
                }
                toJSON() {
                    return {
                        algorithm: this.algorithm.toJSON(),
                        publicKey: this.publicKey.toJSON()
                    }
                }
            }
            class ze {
                constructor(e = {}) {
                    this.variant = (0, a.getParametersValue)(e, "variant", ze.defaultValues("variant")), "value" in e && (this.value = (0, a.getParametersValue)(e, "value", ze.defaultValues("value"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "variant":
                            return -1;
                        case "value":
                            return {};
                        default:
                            throw new Error(`Invalid member name for OriginatorIdentifierOrKey class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "variant":
                            return -1 === t;
                        case "value":
                            return 0 === Object.keys(t).length;
                        default:
                            throw new Error(`Invalid member name for OriginatorIdentifierOrKey class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Choice({
                        value: [Fe.schema({
                            names: {
                                blockName: t.blockName || ""
                            }
                        }), new s.Primitive({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            name: t.blockName || ""
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            name: t.blockName || "",
                            value: Qe.schema().valueBlock.value
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["blockName"]);
                    const t = s.compareSchema(e, e, ze.schema({
                        names: {
                            blockName: "blockName"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for OriginatorIdentifierOrKey");
                    1 === t.result.blockName.idBlock.tagClass ? (this.variant = 1, this.value = new Fe({
                        schema: t.result.blockName
                    })) : 0 === t.result.blockName.idBlock.tagNumber ? (t.result.blockName.idBlock.tagClass = 1, t.result.blockName.idBlock.tagNumber = 4, this.variant = 2, this.value = t.result.blockName) : (this.variant = 3, this.value = new Qe({
                        schema: new s.Sequence({
                            value: t.result.blockName.valueBlock.value
                        })
                    }))
                }
                toSchema() {
                    switch (this.variant) {
                        case 1:
                            return this.value.toSchema();
                        case 2:
                            return this.value.idBlock.tagClass = 3, this.value.idBlock.tagNumber = 0, this.value;
                        case 3: {
                            const e = this.value.toSchema();
                            return e.idBlock.tagClass = 3, e.idBlock.tagNumber = 1, e
                        }
                        default:
                            return new s.Any
                    }
                }
                toJSON() {
                    const e = {
                        variant: this.variant
                    };
                    return 1 !== this.variant && 2 !== this.variant && 3 !== this.variant || (e.value = this.value.toJSON()), e
                }
            }
            class Ze {
                constructor(e = {}) {
                    this.keyAttrId = (0, a.getParametersValue)(e, "keyAttrId", Ze.defaultValues("keyAttrId")), "keyAttr" in e && (this.keyAttr = (0, a.getParametersValue)(e, "keyAttr", Ze.defaultValues("keyAttr"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "keyAttrId":
                            return "";
                        case "keyAttr":
                            return {};
                        default:
                            throw new Error(`Invalid member name for OtherKeyAttribute class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "keyAttrId":
                            return "" === t;
                        case "keyAttr":
                            return 0 === Object.keys(t).length;
                        default:
                            throw new Error(`Invalid member name for OtherKeyAttribute class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        optional: t.optional || !0,
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.keyAttrId || ""
                        }), new s.Any({
                            optional: !0,
                            name: t.keyAttr || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["keyAttrId", "keyAttr"]);
                    const t = s.compareSchema(e, e, Ze.schema({
                        names: {
                            keyAttrId: "keyAttrId",
                            keyAttr: "keyAttr"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for OtherKeyAttribute");
                    this.keyAttrId = t.result.keyAttrId.valueBlock.toString(), "keyAttr" in t.result && (this.keyAttr = t.result.keyAttr)
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.ObjectIdentifier({
                        value: this.keyAttrId
                    })), "keyAttr" in this && e.push(this.keyAttr), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        keyAttrId: this.keyAttrId
                    };
                    return "keyAttr" in this && (e.keyAttr = this.keyAttr.toJSON()), e
                }
            }
            class Xe {
                constructor(e = {}) {
                    this.subjectKeyIdentifier = (0, a.getParametersValue)(e, "subjectKeyIdentifier", Xe.defaultValues("subjectKeyIdentifier")), "date" in e && (this.date = (0, a.getParametersValue)(e, "date", Xe.defaultValues("date"))), "other" in e && (this.other = (0, a.getParametersValue)(e, "other", Xe.defaultValues("other"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "subjectKeyIdentifier":
                            return new s.OctetString;
                        case "date":
                            return new s.GeneralizedTime;
                        case "other":
                            return new Ze;
                        default:
                            throw new Error(`Invalid member name for RecipientKeyIdentifier class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "subjectKeyIdentifier":
                            return t.isEqual(Xe.defaultValues("subjectKeyIdentifier"));
                        case "date":
                            return 0 === t.year && 0 === t.month && 0 === t.day && 0 === t.hour && 0 === t.minute && 0 === t.second && 0 === t.millisecond;
                        case "other":
                            return "" === t.keyAttrId && "keyAttr" in t == !1;
                        default:
                            throw new Error(`Invalid member name for RecipientKeyIdentifier class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.OctetString({
                            name: t.subjectKeyIdentifier || ""
                        }), new s.GeneralizedTime({
                            optional: !0,
                            name: t.date || ""
                        }), Ze.schema(t.other || {})]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["subjectKeyIdentifier", "date", "other"]);
                    const t = s.compareSchema(e, e, Xe.schema({
                        names: {
                            subjectKeyIdentifier: "subjectKeyIdentifier",
                            date: "date",
                            other: {
                                names: {
                                    blockName: "other"
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for RecipientKeyIdentifier");
                    this.subjectKeyIdentifier = t.result.subjectKeyIdentifier, "date" in t.result && (this.date = t.result.date), "other" in t.result && (this.other = new Ze({
                        schema: t.result.other
                    }))
                }
                toSchema() {
                    const e = [];
                    return e.push(this.subjectKeyIdentifier), "date" in this && e.push(this.date), "other" in this && e.push(this.other.toSchema()), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        subjectKeyIdentifier: this.subjectKeyIdentifier.toJSON()
                    };
                    return "date" in this && (e.date = this.date), "other" in this && (e.other = this.other.toJSON()), e
                }
            }
            class Ye {
                constructor(e = {}) {
                    this.variant = (0, a.getParametersValue)(e, "variant", Ye.defaultValues("variant")), this.value = (0, a.getParametersValue)(e, "value", Ye.defaultValues("value")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "variant":
                            return -1;
                        case "value":
                            return {};
                        default:
                            throw new Error(`Invalid member name for KeyAgreeRecipientIdentifier class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "variant":
                            return -1 === t;
                        case "value":
                            return 0 === Object.keys(t).length;
                        default:
                            throw new Error(`Invalid member name for KeyAgreeRecipientIdentifier class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Choice({
                        value: [Fe.schema(t.issuerAndSerialNumber || {
                            names: {
                                blockName: t.blockName || ""
                            }
                        }), new s.Constructed({
                            name: t.blockName || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: Xe.schema(t.rKeyId || {
                                names: {
                                    blockName: t.blockName || ""
                                }
                            }).valueBlock.value
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["blockName"]);
                    const t = s.compareSchema(e, e, Ye.schema({
                        names: {
                            blockName: "blockName"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for KeyAgreeRecipientIdentifier");
                    1 === t.result.blockName.idBlock.tagClass ? (this.variant = 1, this.value = new Fe({
                        schema: t.result.blockName
                    })) : (this.variant = 2, this.value = new Xe({
                        schema: new s.Sequence({
                            value: t.result.blockName.valueBlock.value
                        })
                    }))
                }
                toSchema() {
                    switch (this.variant) {
                        case 1:
                            return this.value.toSchema();
                        case 2:
                            return new s.Constructed({
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 0
                                },
                                value: this.value.toSchema().valueBlock.value
                            });
                        default:
                            return new s.Any
                    }
                }
                toJSON() {
                    const e = {
                        variant: this.variant
                    };
                    return 1 !== this.variant && 2 !== this.variant || (e.value = this.value.toJSON()), e
                }
            }
            class et {
                constructor(e = {}) {
                    this.rid = (0, a.getParametersValue)(e, "rid", et.defaultValues("rid")), this.encryptedKey = (0, a.getParametersValue)(e, "encryptedKey", et.defaultValues("encryptedKey")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "rid":
                            return new Ye;
                        case "encryptedKey":
                            return new s.OctetString;
                        default:
                            throw new Error(`Invalid member name for RecipientEncryptedKey class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "rid":
                            return -1 === t.variant && "value" in t == !1;
                        case "encryptedKey":
                            return t.isEqual(et.defaultValues("encryptedKey"));
                        default:
                            throw new Error(`Invalid member name for RecipientEncryptedKey class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [Ye.schema(t.rid || {}), new s.OctetString({
                            name: t.encryptedKey || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["rid", "encryptedKey"]);
                    const t = s.compareSchema(e, e, et.schema({
                        names: {
                            rid: {
                                names: {
                                    blockName: "rid"
                                }
                            },
                            encryptedKey: "encryptedKey"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for RecipientEncryptedKey");
                    this.rid = new Ye({
                        schema: t.result.rid
                    }), this.encryptedKey = t.result.encryptedKey
                }
                toSchema() {
                    return new s.Sequence({
                        value: [this.rid.toSchema(), this.encryptedKey]
                    })
                }
                toJSON() {
                    return {
                        rid: this.rid.toJSON(),
                        encryptedKey: this.encryptedKey.toJSON()
                    }
                }
            }
            class tt {
                constructor(e = {}) {
                    this.encryptedKeys = (0, a.getParametersValue)(e, "encryptedKeys", tt.defaultValues("encryptedKeys")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "encryptedKeys":
                            return [];
                        default:
                            throw new Error(`Invalid member name for RecipientEncryptedKeys class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "encryptedKeys":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for RecipientEncryptedKeys class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.RecipientEncryptedKeys || "",
                            value: et.schema()
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["RecipientEncryptedKeys"]);
                    const t = s.compareSchema(e, e, tt.schema({
                        names: {
                            RecipientEncryptedKeys: "RecipientEncryptedKeys"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for RecipientEncryptedKeys");
                    this.encryptedKeys = Array.from(t.result.RecipientEncryptedKeys, (e => new et({
                        schema: e
                    })))
                }
                toSchema() {
                    return new s.Sequence({
                        value: Array.from(this.encryptedKeys, (e => e.toSchema()))
                    })
                }
                toJSON() {
                    return {
                        encryptedKeys: Array.from(this.encryptedKeys, (e => e.toJSON()))
                    }
                }
            }
            class rt {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", rt.defaultValues("version")), this.originator = (0, a.getParametersValue)(e, "originator", rt.defaultValues("originator")), "ukm" in e && (this.ukm = (0, a.getParametersValue)(e, "ukm", rt.defaultValues("ukm"))), this.keyEncryptionAlgorithm = (0, a.getParametersValue)(e, "keyEncryptionAlgorithm", rt.defaultValues("keyEncryptionAlgorithm")), this.recipientEncryptedKeys = (0, a.getParametersValue)(e, "recipientEncryptedKeys", rt.defaultValues("recipientEncryptedKeys")), this.recipientCertificate = (0, a.getParametersValue)(e, "recipientCertificate", rt.defaultValues("recipientCertificate")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 0;
                        case "originator":
                            return new ze;
                        case "ukm":
                            return new s.OctetString;
                        case "keyEncryptionAlgorithm":
                            return new n;
                        case "recipientEncryptedKeys":
                            return new tt;
                        case "recipientCertificate":
                            return new Ae;
                        default:
                            throw new Error(`Invalid member name for KeyAgreeRecipientInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "version":
                            return 0 === t;
                        case "originator":
                            return -1 === t.variant && "value" in t == !1;
                        case "ukm":
                            return t.isEqual(rt.defaultValues("ukm"));
                        case "keyEncryptionAlgorithm":
                            return "" === t.algorithmId && "algorithmParams" in t == !1;
                        case "recipientEncryptedKeys":
                            return 0 === t.encryptedKeys.length;
                        case "recipientCertificate":
                            return !1;
                        default:
                            throw new Error(`Invalid member name for KeyAgreeRecipientInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.version || ""
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [ze.schema(t.originator || {})]
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [new s.OctetString({
                                name: t.ukm || ""
                            })]
                        }), n.schema(t.keyEncryptionAlgorithm || {}), tt.schema(t.recipientEncryptedKeys || {})]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["version", "originator", "ukm", "keyEncryptionAlgorithm", "recipientEncryptedKeys"]);
                    const t = s.compareSchema(e, e, rt.schema({
                        names: {
                            version: "version",
                            originator: {
                                names: {
                                    blockName: "originator"
                                }
                            },
                            ukm: "ukm",
                            keyEncryptionAlgorithm: {
                                names: {
                                    blockName: "keyEncryptionAlgorithm"
                                }
                            },
                            recipientEncryptedKeys: {
                                names: {
                                    blockName: "recipientEncryptedKeys"
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for KeyAgreeRecipientInfo");
                    this.version = t.result.version.valueBlock.valueDec, this.originator = new ze({
                        schema: t.result.originator
                    }), "ukm" in t.result && (this.ukm = t.result.ukm), this.keyEncryptionAlgorithm = new n({
                        schema: t.result.keyEncryptionAlgorithm
                    }), this.recipientEncryptedKeys = new tt({
                        schema: t.result.recipientEncryptedKeys
                    })
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.Integer({
                        value: this.version
                    })), e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [this.originator.toSchema()]
                    })), "ukm" in this && e.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: [this.ukm]
                    })), e.push(this.keyEncryptionAlgorithm.toSchema()), e.push(this.recipientEncryptedKeys.toSchema()), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        version: this.version,
                        originator: this.originator.toJSON()
                    };
                    return "ukm" in this && (e.ukm = this.ukm.toJSON()), e.keyEncryptionAlgorithm = this.keyEncryptionAlgorithm.toJSON(), e.recipientEncryptedKeys = this.recipientEncryptedKeys.toJSON(), e
                }
            }
            class st {
                constructor(e = {}) {
                    this.keyIdentifier = (0, a.getParametersValue)(e, "keyIdentifier", st.defaultValues("keyIdentifier")), "date" in e && (this.date = (0, a.getParametersValue)(e, "date", st.defaultValues("date"))), "other" in e && (this.other = (0, a.getParametersValue)(e, "other", st.defaultValues("other"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "keyIdentifier":
                            return new s.OctetString;
                        case "date":
                            return new s.GeneralizedTime;
                        case "other":
                            return new Ze;
                        default:
                            throw new Error(`Invalid member name for KEKIdentifier class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "keyIdentifier":
                            return t.isEqual(st.defaultValues("keyIdentifier"));
                        case "date":
                            return 0 === t.year && 0 === t.month && 0 === t.day && 0 === t.hour && 0 === t.minute && 0 === t.second && 0 === t.millisecond;
                        case "other":
                            return t.compareWithDefault("keyAttrId", t.keyAttrId) && "keyAttr" in t == !1;
                        default:
                            throw new Error(`Invalid member name for KEKIdentifier class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.OctetString({
                            name: t.keyIdentifier || ""
                        }), new s.GeneralizedTime({
                            optional: !0,
                            name: t.date || ""
                        }), Ze.schema(t.other || {})]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["keyIdentifier", "date", "other"]);
                    const t = s.compareSchema(e, e, st.schema({
                        names: {
                            keyIdentifier: "keyIdentifier",
                            date: "date",
                            other: {
                                names: {
                                    blockName: "other"
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for KEKIdentifier");
                    this.keyIdentifier = t.result.keyIdentifier, "date" in t.result && (this.date = t.result.date), "other" in t.result && (this.other = new Ze({
                        schema: t.result.other
                    }))
                }
                toSchema() {
                    const e = [];
                    return e.push(this.keyIdentifier), "date" in this && e.push(this.date), "other" in this && e.push(this.other.toSchema()), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        keyIdentifier: this.keyIdentifier.toJSON()
                    };
                    return "date" in this && (e.date = this.date), "other" in this && (e.other = this.other.toJSON()), e
                }
            }
            class at {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", at.defaultValues("version")), this.kekid = (0, a.getParametersValue)(e, "kekid", at.defaultValues("kekid")), this.keyEncryptionAlgorithm = (0, a.getParametersValue)(e, "keyEncryptionAlgorithm", at.defaultValues("keyEncryptionAlgorithm")), this.encryptedKey = (0, a.getParametersValue)(e, "encryptedKey", at.defaultValues("encryptedKey")), this.preDefinedKEK = (0, a.getParametersValue)(e, "preDefinedKEK", at.defaultValues("preDefinedKEK")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 0;
                        case "kekid":
                            return new st;
                        case "keyEncryptionAlgorithm":
                            return new n;
                        case "encryptedKey":
                            return new s.OctetString;
                        case "preDefinedKEK":
                            return new ArrayBuffer(0);
                        default:
                            throw new Error(`Invalid member name for KEKRecipientInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "KEKRecipientInfo":
                            return t === at.defaultValues("version");
                        case "kekid":
                            return t.compareWithDefault("keyIdentifier", t.keyIdentifier) && "date" in t == !1 && "other" in t == !1;
                        case "keyEncryptionAlgorithm":
                            return "" === t.algorithmId && "algorithmParams" in t == !1;
                        case "encryptedKey":
                            return t.isEqual(at.defaultValues("encryptedKey"));
                        case "preDefinedKEK":
                            return 0 === t.byteLength;
                        default:
                            throw new Error(`Invalid member name for KEKRecipientInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.version || ""
                        }), st.schema(t.kekid || {}), n.schema(t.keyEncryptionAlgorithm || {}), new s.OctetString({
                            name: t.encryptedKey || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["version", "kekid", "keyEncryptionAlgorithm", "encryptedKey"]);
                    const t = s.compareSchema(e, e, at.schema({
                        names: {
                            version: "version",
                            kekid: {
                                names: {
                                    blockName: "kekid"
                                }
                            },
                            keyEncryptionAlgorithm: {
                                names: {
                                    blockName: "keyEncryptionAlgorithm"
                                }
                            },
                            encryptedKey: "encryptedKey"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for KEKRecipientInfo");
                    this.version = t.result.version.valueBlock.valueDec, this.kekid = new st({
                        schema: t.result.kekid
                    }), this.keyEncryptionAlgorithm = new n({
                        schema: t.result.keyEncryptionAlgorithm
                    }), this.encryptedKey = t.result.encryptedKey
                }
                toSchema() {
                    return new s.Sequence({
                        value: [new s.Integer({
                            value: this.version
                        }), this.kekid.toSchema(), this.keyEncryptionAlgorithm.toSchema(), this.encryptedKey]
                    })
                }
                toJSON() {
                    return {
                        version: this.version,
                        kekid: this.kekid.toJSON(),
                        keyEncryptionAlgorithm: this.keyEncryptionAlgorithm.toJSON(),
                        encryptedKey: this.encryptedKey.toJSON()
                    }
                }
            }
            class nt {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", nt.defaultValues("version")), "keyDerivationAlgorithm" in e && (this.keyDerivationAlgorithm = (0, a.getParametersValue)(e, "keyDerivationAlgorithm", nt.defaultValues("keyDerivationAlgorithm"))), this.keyEncryptionAlgorithm = (0, a.getParametersValue)(e, "keyEncryptionAlgorithm", nt.defaultValues("keyEncryptionAlgorithm")), this.encryptedKey = (0, a.getParametersValue)(e, "encryptedKey", nt.defaultValues("encryptedKey")), this.password = (0, a.getParametersValue)(e, "password", nt.defaultValues("password")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return -1;
                        case "keyDerivationAlgorithm":
                        case "keyEncryptionAlgorithm":
                            return new n;
                        case "encryptedKey":
                            return new s.OctetString;
                        case "password":
                            return new ArrayBuffer(0);
                        default:
                            throw new Error(`Invalid member name for PasswordRecipientinfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "version":
                            return -1 === t;
                        case "keyDerivationAlgorithm":
                        case "keyEncryptionAlgorithm":
                            return "" === t.algorithmId && "algorithmParams" in t == !1;
                        case "encryptedKey":
                            return t.isEqual(nt.defaultValues("encryptedKey"));
                        case "password":
                            return 0 === t.byteLength;
                        default:
                            throw new Error(`Invalid member name for PasswordRecipientinfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.version || ""
                        }), new s.Constructed({
                            name: t.keyDerivationAlgorithm || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: n.schema().valueBlock.value
                        }), n.schema(t.keyEncryptionAlgorithm || {}), new s.OctetString({
                            name: t.encryptedKey || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["version", "keyDerivationAlgorithm", "keyEncryptionAlgorithm", "encryptedKey"]);
                    const t = s.compareSchema(e, e, nt.schema({
                        names: {
                            version: "version",
                            keyDerivationAlgorithm: "keyDerivationAlgorithm",
                            keyEncryptionAlgorithm: {
                                names: {
                                    blockName: "keyEncryptionAlgorithm"
                                }
                            },
                            encryptedKey: "encryptedKey"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PasswordRecipientinfo");
                    this.version = t.result.version.valueBlock.valueDec, "keyDerivationAlgorithm" in t.result && (this.keyDerivationAlgorithm = new n({
                        schema: new s.Sequence({
                            value: t.result.keyDerivationAlgorithm.valueBlock.value
                        })
                    })), this.keyEncryptionAlgorithm = new n({
                        schema: t.result.keyEncryptionAlgorithm
                    }), this.encryptedKey = t.result.encryptedKey
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.Integer({
                        value: this.version
                    })), "keyDerivationAlgorithm" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: this.keyDerivationAlgorithm.toSchema().valueBlock.value
                    })), e.push(this.keyEncryptionAlgorithm.toSchema()), e.push(this.encryptedKey), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    return {
                        version: this.version,
                        keyDerivationAlgorithm: this.keyDerivationAlgorithm.toJSON(),
                        keyEncryptionAlgorithm: this.keyEncryptionAlgorithm.toJSON(),
                        encryptedKey: this.encryptedKey.toJSON()
                    }
                }
            }
            class it {
                constructor(e = {}) {
                    this.oriType = (0, a.getParametersValue)(e, "oriType", it.defaultValues("oriType")), this.oriValue = (0, a.getParametersValue)(e, "oriValue", it.defaultValues("oriValue")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "oriType":
                            return "";
                        case "oriValue":
                            return {};
                        default:
                            throw new Error(`Invalid member name for OtherRecipientInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "oriType":
                            return "" === t;
                        case "oriValue":
                            return 0 === Object.keys(t).length;
                        default:
                            throw new Error(`Invalid member name for OtherRecipientInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.oriType || ""
                        }), new s.Any({
                            name: t.oriValue || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["oriType", "oriValue"]);
                    const t = s.compareSchema(e, e, it.schema({
                        names: {
                            oriType: "oriType",
                            oriValue: "oriValue"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for OtherRecipientInfo");
                    this.oriType = t.result.oriType.valueBlock.toString(), this.oriValue = t.result.oriValue
                }
                toSchema() {
                    return new s.Sequence({
                        value: [new s.ObjectIdentifier({
                            value: this.oriType
                        }), this.oriValue]
                    })
                }
                toJSON() {
                    const e = {
                        oriType: this.oriType
                    };
                    return !1 === it.compareWithDefault("oriValue", this.oriValue) && (e.oriValue = this.oriValue.toJSON()), e
                }
            }
            class ot {
                constructor(e = {}) {
                    this.variant = (0, a.getParametersValue)(e, "variant", ot.defaultValues("variant")), "value" in e && (this.value = (0, a.getParametersValue)(e, "value", ot.defaultValues("value"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "variant":
                            return -1;
                        case "value":
                            return {};
                        default:
                            throw new Error(`Invalid member name for RecipientInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "variant":
                            return t === ot.defaultValues(e);
                        case "value":
                            return 0 === Object.keys(t).length;
                        default:
                            throw new Error(`Invalid member name for RecipientInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Choice({
                        value: [Ge.schema({
                            names: {
                                blockName: t.blockName || ""
                            }
                        }), new s.Constructed({
                            name: t.blockName || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: rt.schema().valueBlock.value
                        }), new s.Constructed({
                            name: t.blockName || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            },
                            value: at.schema().valueBlock.value
                        }), new s.Constructed({
                            name: t.blockName || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 3
                            },
                            value: nt.schema().valueBlock.value
                        }), new s.Constructed({
                            name: t.blockName || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 4
                            },
                            value: it.schema().valueBlock.value
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["blockName"]);
                    const t = s.compareSchema(e, e, ot.schema({
                        names: {
                            blockName: "blockName"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for RecipientInfo");
                    if (1 === t.result.blockName.idBlock.tagClass) this.variant = 1, this.value = new Ge({
                        schema: t.result.blockName
                    });
                    else {
                        const e = new s.Sequence({
                            value: t.result.blockName.valueBlock.value
                        });
                        switch (t.result.blockName.idBlock.tagNumber) {
                            case 1:
                                this.variant = 2, this.value = new rt({
                                    schema: e
                                });
                                break;
                            case 2:
                                this.variant = 3, this.value = new at({
                                    schema: e
                                });
                                break;
                            case 3:
                                this.variant = 4, this.value = new nt({
                                    schema: e
                                });
                                break;
                            case 4:
                                this.variant = 5, this.value = new it({
                                    schema: e
                                });
                                break;
                            default:
                                throw new Error("Incorrect structure of RecipientInfo block")
                        }
                    }
                }
                toSchema() {
                    const e = this.value.toSchema();
                    switch (this.variant) {
                        case 1:
                            return e;
                        case 2:
                        case 3:
                        case 4:
                            return e.idBlock.tagClass = 3, e.idBlock.tagNumber = this.variant - 1, e;
                        default:
                            return new s.Any
                    }
                }
                toJSON() {
                    const e = {
                        variant: this.variant
                    };
                    return this.variant >= 1 && this.variant <= 4 && (e.value = this.value.toJSON()), e
                }
            }
            class lt {
                constructor(e = {}) {
                    this.hashAlgorithm = (0, a.getParametersValue)(e, "hashAlgorithm", lt.defaultValues("hashAlgorithm")), this.maskGenAlgorithm = (0, a.getParametersValue)(e, "maskGenAlgorithm", lt.defaultValues("maskGenAlgorithm")), this.pSourceAlgorithm = (0, a.getParametersValue)(e, "pSourceAlgorithm", lt.defaultValues("pSourceAlgorithm")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "hashAlgorithm":
                            return new n({
                                algorithmId: "1.3.14.3.2.26",
                                algorithmParams: new s.Null
                            });
                        case "maskGenAlgorithm":
                            return new n({
                                algorithmId: "1.2.840.113549.1.1.8",
                                algorithmParams: new n({
                                    algorithmId: "1.3.14.3.2.26",
                                    algorithmParams: new s.Null
                                }).toSchema()
                            });
                        case "pSourceAlgorithm":
                            return new n({
                                algorithmId: "1.2.840.113549.1.1.9",
                                algorithmParams: new s.OctetString({
                                    valueHex: new Uint8Array([218, 57, 163, 238, 94, 107, 75, 13, 50, 85, 191, 239, 149, 96, 24, 144, 175, 216, 7, 9]).buffer
                                })
                            });
                        default:
                            throw new Error(`Invalid member name for RSAESOAEPParams class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            optional: !0,
                            value: [n.schema(t.hashAlgorithm || {})]
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            optional: !0,
                            value: [n.schema(t.maskGenAlgorithm || {})]
                        }), new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            },
                            optional: !0,
                            value: [n.schema(t.pSourceAlgorithm || {})]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["hashAlgorithm", "maskGenAlgorithm", "pSourceAlgorithm"]);
                    const t = s.compareSchema(e, e, lt.schema({
                        names: {
                            hashAlgorithm: {
                                names: {
                                    blockName: "hashAlgorithm"
                                }
                            },
                            maskGenAlgorithm: {
                                names: {
                                    blockName: "maskGenAlgorithm"
                                }
                            },
                            pSourceAlgorithm: {
                                names: {
                                    blockName: "pSourceAlgorithm"
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for RSAESOAEPParams");
                    "hashAlgorithm" in t.result && (this.hashAlgorithm = new n({
                        schema: t.result.hashAlgorithm
                    })), "maskGenAlgorithm" in t.result && (this.maskGenAlgorithm = new n({
                        schema: t.result.maskGenAlgorithm
                    })), "pSourceAlgorithm" in t.result && (this.pSourceAlgorithm = new n({
                        schema: t.result.pSourceAlgorithm
                    }))
                }
                toSchema() {
                    const e = [];
                    return this.hashAlgorithm.isEqual(lt.defaultValues("hashAlgorithm")) || e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [this.hashAlgorithm.toSchema()]
                    })), this.maskGenAlgorithm.isEqual(lt.defaultValues("maskGenAlgorithm")) || e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: [this.maskGenAlgorithm.toSchema()]
                    })), this.pSourceAlgorithm.isEqual(lt.defaultValues("pSourceAlgorithm")) || e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 2
                        },
                        value: [this.pSourceAlgorithm.toSchema()]
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {};
                    return this.hashAlgorithm.isEqual(lt.defaultValues("hashAlgorithm")) || (e.hashAlgorithm = this.hashAlgorithm.toJSON()), this.maskGenAlgorithm.isEqual(lt.defaultValues("maskGenAlgorithm")) || (e.maskGenAlgorithm = this.maskGenAlgorithm.toJSON()), this.pSourceAlgorithm.isEqual(lt.defaultValues("pSourceAlgorithm")) || (e.pSourceAlgorithm = this.pSourceAlgorithm.toJSON()), e
                }
            }
            class ct {
                constructor(e = {}) {
                    this.keyInfo = (0, a.getParametersValue)(e, "keyInfo", ct.defaultValues("keyInfo")), "entityUInfo" in e && (this.entityUInfo = (0, a.getParametersValue)(e, "entityUInfo", ct.defaultValues("entityUInfo"))), this.suppPubInfo = (0, a.getParametersValue)(e, "suppPubInfo", ct.defaultValues("suppPubInfo")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "keyInfo":
                            return new n;
                        case "entityUInfo":
                        case "suppPubInfo":
                            return new s.OctetString;
                        default:
                            throw new Error(`Invalid member name for ECCCMSSharedInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "keyInfo":
                        case "entityUInfo":
                        case "suppPubInfo":
                            return t.isEqual(ct.defaultValues(e));
                        default:
                            throw new Error(`Invalid member name for ECCCMSSharedInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [n.schema(t.keyInfo || {}), new s.Constructed({
                            name: t.entityUInfo || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            optional: !0,
                            value: [new s.OctetString]
                        }), new s.Constructed({
                            name: t.suppPubInfo || "",
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            },
                            value: [new s.OctetString]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["keyInfo", "entityUInfo", "suppPubInfo"]);
                    const t = s.compareSchema(e, e, ct.schema({
                        names: {
                            keyInfo: {
                                names: {
                                    blockName: "keyInfo"
                                }
                            },
                            entityUInfo: "entityUInfo",
                            suppPubInfo: "suppPubInfo"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for ECCCMSSharedInfo");
                    this.keyInfo = new n({
                        schema: t.result.keyInfo
                    }), "entityUInfo" in t.result && (this.entityUInfo = t.result.entityUInfo.valueBlock.value[0]), this.suppPubInfo = t.result.suppPubInfo.valueBlock.value[0]
                }
                toSchema() {
                    const e = [];
                    return e.push(this.keyInfo.toSchema()), "entityUInfo" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [this.entityUInfo]
                    })), e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 2
                        },
                        value: [this.suppPubInfo]
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        keyInfo: this.keyInfo.toJSON()
                    };
                    return "entityUInfo" in this && (e.entityUInfo = this.entityUInfo.toJSON()), e.suppPubInfo = this.suppPubInfo.toJSON(), e
                }
            }
            class ut {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", ut.defaultValues("version")), "originatorInfo" in e && (this.originatorInfo = (0, a.getParametersValue)(e, "originatorInfo", ut.defaultValues("originatorInfo"))), this.recipientInfos = (0, a.getParametersValue)(e, "recipientInfos", ut.defaultValues("recipientInfos")), this.encryptedContentInfo = (0, a.getParametersValue)(e, "encryptedContentInfo", ut.defaultValues("encryptedContentInfo")), "unprotectedAttrs" in e && (this.unprotectedAttrs = (0, a.getParametersValue)(e, "unprotectedAttrs", ut.defaultValues("unprotectedAttrs"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 0;
                        case "originatorInfo":
                            return new Me;
                        case "recipientInfos":
                            return [];
                        case "encryptedContentInfo":
                            return new g;
                        case "unprotectedAttrs":
                            return [];
                        default:
                            throw new Error(`Invalid member name for EnvelopedData class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "version":
                            return t === ut.defaultValues(e);
                        case "originatorInfo":
                            return 0 === t.certs.certificates.length && 0 === t.crls.crls.length;
                        case "recipientInfos":
                        case "unprotectedAttrs":
                            return 0 === t.length;
                        case "encryptedContentInfo":
                            return g.compareWithDefault("contentType", t.contentType) && g.compareWithDefault("contentEncryptionAlgorithm", t.contentEncryptionAlgorithm) && g.compareWithDefault("encryptedContent", t.encryptedContent);
                        default:
                            throw new Error(`Invalid member name for EnvelopedData class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.version || ""
                        }), new s.Constructed({
                            name: t.originatorInfo || "",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: Me.schema().valueBlock.value
                        }), new s.Set({
                            value: [new s.Repeated({
                                name: t.recipientInfos || "",
                                value: ot.schema()
                            })]
                        }), g.schema(t.encryptedContentInfo || {}), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [new s.Repeated({
                                name: t.unprotectedAttrs || "",
                                value: c.schema()
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["version", "originatorInfo", "recipientInfos", "encryptedContentInfo", "unprotectedAttrs"]);
                    const t = s.compareSchema(e, e, ut.schema({
                        names: {
                            version: "version",
                            originatorInfo: "originatorInfo",
                            recipientInfos: "recipientInfos",
                            encryptedContentInfo: {
                                names: {
                                    blockName: "encryptedContentInfo"
                                }
                            },
                            unprotectedAttrs: "unprotectedAttrs"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for EnvelopedData");
                    this.version = t.result.version.valueBlock.valueDec, "originatorInfo" in t.result && (this.originatorInfo = new Me({
                        schema: new s.Sequence({
                            value: t.result.originatorInfo.valueBlock.value
                        })
                    })), this.recipientInfos = Array.from(t.result.recipientInfos, (e => new ot({
                        schema: e
                    }))), this.encryptedContentInfo = new g({
                        schema: t.result.encryptedContentInfo
                    }), "unprotectedAttrs" in t.result && (this.unprotectedAttrs = Array.from(t.result.unprotectedAttrs, (e => new c({
                        schema: e
                    }))))
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.Integer({
                        value: this.version
                    })), "originatorInfo" in this && e.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: this.originatorInfo.toSchema().valueBlock.value
                    })), e.push(new s.Set({
                        value: Array.from(this.recipientInfos, (e => e.toSchema()))
                    })), e.push(this.encryptedContentInfo.toSchema()), "unprotectedAttrs" in this && e.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: Array.from(this.unprotectedAttrs, (e => e.toSchema()))
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        version: this.version
                    };
                    return "originatorInfo" in this && (e.originatorInfo = this.originatorInfo.toJSON()), e.recipientInfos = Array.from(this.recipientInfos, (e => e.toJSON())), e.encryptedContentInfo = this.encryptedContentInfo.toJSON(), "unprotectedAttrs" in this && (e.unprotectedAttrs = Array.from(this.unprotectedAttrs, (e => e.toJSON()))), e
                }
                addRecipientByCertificate(e, t, r) {
                    const a = t || {};
                    if (-1 !== e.subjectPublicKeyInfo.algorithm.algorithmId.indexOf("1.2.840.113549")) r = 1;
                    else {
                        if (-1 === e.subjectPublicKeyInfo.algorithm.algorithmId.indexOf("1.2.840.10045")) throw new Error(`Unknown type of certificate's public key: ${e.subjectPublicKeyInfo.algorithm.algorithmId}`);
                        r = 2
                    }
                    switch ("oaepHashAlgorithm" in a == !1 && (a.oaepHashAlgorithm = "SHA-512"), "kdfAlgorithm" in a == !1 && (a.kdfAlgorithm = "SHA-512"), "kekEncryptionLength" in a == !1 && (a.kekEncryptionLength = 256), "useOAEP" in a == !1 && (a.useOAEP = !0), r) {
                        case 1: {
                            let t, r;
                            if (!0 === a.useOAEP) {
                                if (t = I({
                                        name: "RSA-OAEP"
                                    }), "" === t) throw new Error("Can not find OID for RSA-OAEP");
                                const e = I({
                                    name: a.oaepHashAlgorithm
                                });
                                if ("" === e) throw new Error(`Unknown OAEP hash algorithm: ${a.oaepHashAlgorithm}`);
                                const i = new n({
                                    algorithmId: e,
                                    algorithmParams: new s.Null
                                });
                                r = new lt({
                                    hashAlgorithm: i,
                                    maskGenAlgorithm: new n({
                                        algorithmId: "1.2.840.113549.1.1.8",
                                        algorithmParams: i.toSchema()
                                    })
                                }).toSchema()
                            } else {
                                if (t = I({
                                        name: "RSAES-PKCS1-v1_5"
                                    }), "" === t) throw new Error("Can not find OID for RSAES-PKCS1-v1_5");
                                r = new s.Null
                            }
                            const i = new Ge({
                                version: 0,
                                rid: new Fe({
                                    issuer: e.issuer,
                                    serialNumber: e.serialNumber
                                }),
                                keyEncryptionAlgorithm: new n({
                                    algorithmId: t,
                                    algorithmParams: r
                                }),
                                recipientCertificate: e
                            });
                            this.recipientInfos.push(new ot({
                                variant: 1,
                                value: i
                            }))
                        }
                        break;
                    case 2: {
                        const t = new et({
                                rid: new Ye({
                                    variant: 1,
                                    value: new Fe({
                                        issuer: e.issuer,
                                        serialNumber: e.serialNumber
                                    })
                                })
                            }),
                            r = I({
                                name: "AES-KW",
                                length: a.kekEncryptionLength
                            });
                        if ("" === r) throw new Error(`Unknown length for key encryption algorithm: ${a.kekEncryptionLength}`);
                        const i = new n({
                                algorithmId: r,
                                algorithmParams: new s.Null
                            }),
                            o = I({
                                name: "ECDH",
                                kdf: a.kdfAlgorithm
                            });
                        if ("" === o) throw new Error(`Unknown KDF algorithm: ${a.kdfAlgorithm}`);
                        const l = new ArrayBuffer(64);
                        C(new Uint8Array(l));
                        const c = new rt({
                            version: 3,
                            ukm: new s.OctetString({
                                valueHex: l
                            }),
                            keyEncryptionAlgorithm: new n({
                                algorithmId: o,
                                algorithmParams: i.toSchema()
                            }),
                            recipientEncryptedKeys: new tt({
                                encryptedKeys: [t]
                            }),
                            recipientCertificate: e
                        });
                        this.recipientInfos.push(new ot({
                            variant: 2,
                            value: c
                        }))
                    }
                    break;
                    default:
                        throw new Error(`Unknown "variant" value: ${r}`)
                    }
                    return !0
                }
                addRecipientByPreDefinedData(e, t, r) {
                    const a = t || {};
                    if (e instanceof ArrayBuffer == !1) throw new Error('Please pass "preDefinedData" in ArrayBuffer type');
                    if (0 === e.byteLength) throw new Error("Pre-defined data could have zero length");
                    if ("keyIdentifier" in a == !1) {
                        const e = new ArrayBuffer(16);
                        C(new Uint8Array(e)), a.keyIdentifier = e
                    }
                    switch ("hmacHashAlgorithm" in a == !1 && (a.hmacHashAlgorithm = "SHA-512"), "iterationCount" in a == !1 && (a.iterationCount = 2048), "keyEncryptionAlgorithm" in a == !1 && (a.keyEncryptionAlgorithm = {
                            name: "AES-KW",
                            length: 256
                        }), "keyEncryptionAlgorithmParams" in a == !1 && (a.keyEncryptionAlgorithmParams = new s.Null), r) {
                        case 1: {
                            const t = I(a.keyEncryptionAlgorithm);
                            if ("" === t) throw new Error('Incorrect value for "keyEncryptionAlgorithm"');
                            const r = new at({
                                version: 4,
                                kekid: new st({
                                    keyIdentifier: new s.OctetString({
                                        valueHex: a.keyIdentifier
                                    })
                                }),
                                keyEncryptionAlgorithm: new n({
                                    algorithmId: t,
                                    algorithmParams: a.keyEncryptionAlgorithmParams
                                }),
                                preDefinedKEK: e
                            });
                            this.recipientInfos.push(new ot({
                                variant: 3,
                                value: r
                            }))
                        }
                        break;
                    case 2: {
                        const t = I({
                            name: "PBKDF2"
                        });
                        if ("" === t) throw new Error("Can not find OID for PBKDF2");
                        const r = new ArrayBuffer(64);
                        C(new Uint8Array(r));
                        const i = I({
                            name: "HMAC",
                            hash: {
                                name: a.hmacHashAlgorithm
                            }
                        });
                        if ("" === i) throw new Error(`Incorrect value for "hmacHashAlgorithm": ${a.hmacHashAlgorithm}`);
                        const o = new p({
                                salt: new s.OctetString({
                                    valueHex: r
                                }),
                                iterationCount: a.iterationCount,
                                prf: new n({
                                    algorithmId: i,
                                    algorithmParams: new s.Null
                                })
                            }),
                            l = I(a.keyEncryptionAlgorithm);
                        if ("" === l) throw new Error('Incorrect value for "keyEncryptionAlgorithm"');
                        const c = new nt({
                            version: 0,
                            keyDerivationAlgorithm: new n({
                                algorithmId: t,
                                algorithmParams: o.toSchema()
                            }),
                            keyEncryptionAlgorithm: new n({
                                algorithmId: l,
                                algorithmParams: a.keyEncryptionAlgorithmParams
                            }),
                            password: e
                        });
                        this.recipientInfos.push(new ot({
                            variant: 4,
                            value: c
                        }))
                    }
                    break;
                    default:
                        throw new Error(`Unknown value for "variant": ${r}`)
                    }
                }
                encrypt(e, t) {
                    let r = Promise.resolve();
                    const a = new ArrayBuffer(16),
                        i = new Uint8Array(a);
                    C(i);
                    const o = new Uint8Array(t);
                    let l, c, u;
                    const h = [],
                        m = this,
                        f = I(e);
                    if ("" === f) return Promise.reject('Wrong "contentEncryptionAlgorithm" value');
                    const d = A();
                    if (void 0 === d) return Promise.reject("Unable to create WebCrypto object");

                    function y(e) {
                        let t, r, a, i, o, c = Promise.resolve();
                        return c = c.then((() => {
                            const t = m.recipientInfos[e].value.recipientCertificate.subjectPublicKeyInfo.algorithm.algorithmParams;
                            if (t.constructor.blockName() !== s.ObjectIdentifier.blockName()) return Promise.reject(`Incorrect "recipientCertificate" for index ${e}`);
                            switch (t.valueBlock.toString()) {
                                case "1.2.840.10045.3.1.7":
                                    a = "P-256", i = 256;
                                    break;
                                case "1.3.132.0.34":
                                    a = "P-384", i = 384;
                                    break;
                                case "1.3.132.0.35":
                                    a = "P-521", i = 528;
                                    break;
                                default:
                                    return Promise.reject(`Incorrect curve OID for index ${e}`)
                            }
                            return a
                        }), (e => Promise.reject(e))), c = c.then((e => d.generateKey({
                            name: "ECDH",
                            namedCurve: e
                        }, !0, ["deriveBits"])), (e => Promise.reject(e))), c = c.then((e => (t = e.publicKey, r = e.privateKey, d.exportKey("spki", t))), (e => Promise.reject(e))), c = c.then((t => (o = t, m.recipientInfos[e].value.recipientCertificate.getPublicKey({
                            algorithm: {
                                algorithm: {
                                    name: "ECDH",
                                    namedCurve: a
                                },
                                usages: []
                            }
                        }))), (e => Promise.reject(e))), c = c.then((e => d.deriveBits({
                            name: "ECDH",
                            public: e
                        }, r, i)), (e => Promise.reject(e))), c = c.then((t => {
                            const r = new n({
                                    schema: m.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmParams
                                }),
                                a = E(r.algorithmId);
                            if ("name" in a == !1) return Promise.reject(`Incorrect OID for key encryption algorithm: ${r.algorithmId}`);
                            let i = a.length;
                            const o = new ArrayBuffer(4),
                                l = new Uint8Array(o);
                            for (let e = 3; e >= 0; e--) l[e] = i, i >>= 8;
                            const c = new ct({
                                    keyInfo: new n({
                                        algorithmId: r.algorithmId,
                                        algorithmParams: new s.Null
                                    }),
                                    entityUInfo: m.recipientInfos[e].value.ukm,
                                    suppPubInfo: new s.OctetString({
                                        valueHex: o
                                    })
                                }).toSchema().toBER(!1),
                                u = E(m.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId);
                            return "name" in u == !1 ? Promise.reject(`Incorrect OID for key encryption algorithm: ${m.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId}`) : D(u.kdf, t, a.length, c)
                        }), (e => Promise.reject(e))), c = c.then((e => d.importKey("raw", e, {
                            name: "AES-KW"
                        }, !0, ["wrapKey"])), (e => Promise.reject(e))), c = c.then((e => d.wrapKey("raw", l, e, {
                            name: "AES-KW"
                        })), (e => Promise.reject(e))), c = c.then((t => {
                            const a = s.fromBER(o),
                                n = new ze;
                            return n.variant = 3, n.value = new Qe({
                                schema: a.result
                            }), "algorithmParams" in n.value.algorithm && delete n.value.algorithm.algorithmParams, m.recipientInfos[e].value.originator = n, m.recipientInfos[e].value.recipientEncryptedKeys.encryptedKeys[0].encryptedKey = new s.OctetString({
                                valueHex: t
                            }), {
                                ecdhPrivateKey: r
                            }
                        }), (e => Promise.reject(e))), c
                    }
                    async function b(e) {
                        const t = E(m.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId);
                        if ("name" in t == !1) throw new Error(`Unknown keyEncryptionAlgorithm: ${m.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId}`);
                        if ("RSA-OAEP" === t.name) {
                            const r = m.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmParams,
                                s = new lt({
                                    schema: r
                                });
                            if (t.hash = E(s.hashAlgorithm.algorithmId), "name" in t.hash == !1) throw new Error(`Incorrect OID for hash algorithm: ${s.hashAlgorithm.algorithmId}`)
                        }
                        try {
                            const r = await m.recipientInfos[e].value.recipientCertificate.getPublicKey({
                                    algorithm: {
                                        algorithm: t,
                                        usages: ["encrypt", "wrapKey"]
                                    }
                                }),
                                a = await d.encrypt(r.algorithm, r, u);
                            m.recipientInfos[e].value.encryptedKey = new s.OctetString({
                                valueHex: a
                            })
                        } catch (e) {}
                    }

                    function v(e) {
                        let t, r = Promise.resolve();
                        return r = r.then((() => (t = E(m.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId), "name" in t == !1 ? Promise.reject(`Incorrect OID for "keyEncryptionAlgorithm": ${m.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId}`) : d.importKey("raw", new Uint8Array(m.recipientInfos[e].value.preDefinedKEK), t, !0, ["wrapKey"]))), (e => Promise.reject(e))), r = r.then((e => d.wrapKey("raw", l, e, t)), (e => Promise.reject(e))), r = r.then((t => {
                            m.recipientInfos[e].value.encryptedKey = new s.OctetString({
                                valueHex: t
                            })
                        }), (e => Promise.reject(e))), r
                    }

                    function w(e) {
                        let t, r, a = Promise.resolve();
                        return a = a.then((() => {
                            if ("keyDerivationAlgorithm" in m.recipientInfos[e].value == !1) return Promise.reject('Please append encoded "keyDerivationAlgorithm"');
                            if ("algorithmParams" in m.recipientInfos[e].value.keyDerivationAlgorithm == !1) return Promise.reject('Incorrectly encoded "keyDerivationAlgorithm"');
                            try {
                                t = new p({
                                    schema: m.recipientInfos[e].value.keyDerivationAlgorithm.algorithmParams
                                })
                            } catch (e) {
                                return Promise.reject('Incorrectly encoded "keyDerivationAlgorithm"')
                            }
                            return Promise.resolve()
                        }), (e => Promise.reject(e))), a = a.then((() => {
                            const t = new Uint8Array(m.recipientInfos[e].value.password);
                            return d.importKey("raw", t, "PBKDF2", !1, ["deriveKey"])
                        }), (e => Promise.reject(e))), a = a.then((s => {
                            if (r = E(m.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId), "name" in r == !1) return Promise.reject(`Incorrect OID for "keyEncryptionAlgorithm": ${m.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId}`);
                            let a = "SHA-1";
                            if ("prf" in t) {
                                const e = E(t.prf.algorithmId);
                                if ("name" in e == !1) return Promise.reject("Incorrect OID for HMAC hash algorithm");
                                a = e.hash.name
                            }
                            const n = new Uint8Array(t.salt.valueBlock.valueHex),
                                i = t.iterationCount;
                            return d.deriveKey({
                                name: "PBKDF2",
                                hash: {
                                    name: a
                                },
                                salt: n,
                                iterations: i
                            }, s, r, !0, ["wrapKey"])
                        }), (e => Promise.reject(e))), a = a.then((e => d.wrapKey("raw", l, e, r)), (e => Promise.reject(e))), a = a.then((t => {
                            m.recipientInfos[e].value.encryptedKey = new s.OctetString({
                                valueHex: t
                            })
                        }), (e => Promise.reject(e))), a
                    }
                    return r = r.then((() => d.generateKey(e, !0, ["encrypt"]))), r = r.then((t => (l = t, d.encrypt({
                        name: e.name,
                        iv: i
                    }, l, o))), (e => Promise.reject(e))), r = r.then((e => (c = e, d.exportKey("raw", l))), (e => Promise.reject(e))).then((e => (u = e, !0)), (e => Promise.reject(e))), r = r.then((() => {
                        this.version = 2, this.encryptedContentInfo = new g({
                            contentType: "1.2.840.113549.1.7.1",
                            contentEncryptionAlgorithm: new n({
                                algorithmId: f,
                                algorithmParams: new s.OctetString({
                                    valueHex: a
                                })
                            }),
                            encryptedContent: new s.OctetString({
                                valueHex: c
                            })
                        })
                    }), (e => Promise.reject(e))), r = r.then((() => {
                        for (let e = 0; e < this.recipientInfos.length; e++) {
                            let t = Promise.resolve();
                            switch (this.recipientInfos[e].variant) {
                                case 1:
                                    t = b(e);
                                    break;
                                case 2:
                                    t = y(e);
                                    break;
                                case 3:
                                    t = v(e);
                                    break;
                                case 4:
                                    t = w(e);
                                    break;
                                default:
                                    return Promise.reject(`Uknown recipient type in array with index ${e}`)
                            }
                            h.push(t)
                        }
                        return Promise.all(h)
                    }), (e => Promise.reject(e))), r
                }
                decrypt(e, t) {
                    let r = Promise.resolve();
                    const i = t || {},
                        o = this;
                    if (e + 1 > this.recipientInfos.length) return Promise.reject('Maximum value for "index" is: ' + (this.recipientInfos.length - 1));
                    const l = A();
                    if (void 0 === l) return Promise.reject("Unable to create WebCrypto object");
                    return r = r.then((() => {
                        let t = Promise.resolve();
                        switch (this.recipientInfos[e].variant) {
                            case 1:
                                t = async function(e) {
                                    if ("recipientPrivateKey" in i == 0) throw new Error('Parameter "recipientPrivateKey" is mandatory for "KeyTransRecipientInfo"');
                                    const t = E(o.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId);
                                    if ("name" in t == 0) throw new Error(`Unknown keyEncryptionAlgorithm: ${o.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId}`);
                                    if ("RSA-OAEP" === t.name) {
                                        const r = o.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmParams,
                                            s = new lt({
                                                schema: r
                                            });
                                        if (t.hash = E(s.hashAlgorithm.algorithmId), "name" in t.hash == 0) throw new Error(`Incorrect OID for hash algorithm: ${s.hashAlgorithm.algorithmId}`)
                                    }
                                    const r = await l.importKey("pkcs8", i.recipientPrivateKey, t, !0, ["decrypt"]),
                                        s = await l.decrypt(r.algorithm, r, o.recipientInfos[e].value.encryptedKey.valueBlock.valueHex),
                                        a = E(o.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId);
                                    if ("name" in a == 0) throw new Error(`Incorrect "contentEncryptionAlgorithm": ${o.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId}`);
                                    return l.importKey("raw", s, a, !0, ["decrypt"])
                                }(e);
                                break;
                            case 2:
                                t = function(e) {
                                    let t, r, a, c, u = Promise.resolve();
                                    return u = u.then((() => {
                                        if ("recipientCertificate" in i == 0) return Promise.reject('Parameter "recipientCertificate" is mandatory for "KeyAgreeRecipientInfo"');
                                        if ("recipientPrivateKey" in i == 0) return Promise.reject('Parameter "recipientPrivateKey" is mandatory for "KeyAgreeRecipientInfo"');
                                        const n = i.recipientCertificate.subjectPublicKeyInfo.algorithm.algorithmParams;
                                        if (n.constructor.blockName() !== s.ObjectIdentifier.blockName()) return Promise.reject(`Incorrect "recipientCertificate" for index ${e}`);
                                        switch (a = n.valueBlock.toString(), a) {
                                            case "1.2.840.10045.3.1.7":
                                                t = "P-256", r = 256;
                                                break;
                                            case "1.3.132.0.34":
                                                t = "P-384", r = 384;
                                                break;
                                            case "1.3.132.0.35":
                                                t = "P-521", r = 528;
                                                break;
                                            default:
                                                return Promise.reject(`Incorrect curve OID for index ${e}`)
                                        }
                                        return l.importKey("pkcs8", i.recipientPrivateKey, {
                                            name: "ECDH",
                                            namedCurve: t
                                        }, !0, ["deriveBits"])
                                    }), (e => Promise.reject(e))), u = u.then((r => {
                                        c = r, "algorithmParams" in o.recipientInfos[e].value.originator.value.algorithm == 0 && (o.recipientInfos[e].value.originator.value.algorithm.algorithmParams = new s.ObjectIdentifier({
                                            value: a
                                        }));
                                        const n = o.recipientInfos[e].value.originator.value.toSchema().toBER(!1);
                                        return l.importKey("spki", n, {
                                            name: "ECDH",
                                            namedCurve: t
                                        }, !0, [])
                                    }), (e => Promise.reject(e))), u = u.then((e => l.deriveBits({
                                        name: "ECDH",
                                        public: e
                                    }, c, r)), (e => Promise.reject(e))), u = u.then((t => {
                                        const r = new n({
                                                schema: o.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmParams
                                            }),
                                            a = E(r.algorithmId);
                                        if ("name" in a == 0) return Promise.reject(`Incorrect OID for key encryption algorithm: ${r.algorithmId}`);
                                        let i = a.length;
                                        const l = new ArrayBuffer(4),
                                            c = new Uint8Array(l);
                                        for (let e = 3; e >= 0; e--) c[e] = i, i >>= 8;
                                        const u = new ct({
                                                keyInfo: new n({
                                                    algorithmId: r.algorithmId,
                                                    algorithmParams: new s.Null
                                                }),
                                                entityUInfo: o.recipientInfos[e].value.ukm,
                                                suppPubInfo: new s.OctetString({
                                                    valueHex: l
                                                })
                                            }).toSchema().toBER(!1),
                                            h = E(o.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId);
                                        return "name" in h == 0 ? Promise.reject(`Incorrect OID for key encryption algorithm: ${o.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId}`) : D(h.kdf, t, a.length, u)
                                    }), (e => Promise.reject(e))), u = u.then((e => l.importKey("raw", e, {
                                        name: "AES-KW"
                                    }, !0, ["unwrapKey"])), (e => Promise.reject(e))), u = u.then((t => {
                                        const r = E(o.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId);
                                        return "name" in r == 0 ? Promise.reject(`Incorrect "contentEncryptionAlgorithm": ${o.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId}`) : l.unwrapKey("raw", o.recipientInfos[e].value.recipientEncryptedKeys.encryptedKeys[0].encryptedKey.valueBlock.valueHex, t, {
                                            name: "AES-KW"
                                        }, r, !0, ["decrypt"])
                                    }), (e => Promise.reject(e))), u
                                }(e);
                                break;
                            case 3:
                                t = function(e) {
                                    let t, r = Promise.resolve();
                                    return r = r.then((() => "preDefinedData" in i == 0 ? Promise.reject('Parameter "preDefinedData" is mandatory for "KEKRecipientInfo"') : (t = E(o.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId), "name" in t == 0 ? Promise.reject(`Incorrect OID for "keyEncryptionAlgorithm": ${o.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId}`) : l.importKey("raw", i.preDefinedData, t, !0, ["unwrapKey"]))), (e => Promise.reject(e))), r = r.then((r => {
                                        const s = E(o.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId);
                                        return "name" in s == 0 ? Promise.reject(`Incorrect "contentEncryptionAlgorithm": ${o.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId}`) : l.unwrapKey("raw", o.recipientInfos[e].value.encryptedKey.valueBlock.valueHex, r, t, s, !0, ["decrypt"])
                                    }), (e => Promise.reject(e))), r
                                }(e);
                                break;
                            case 4:
                                t = function(e) {
                                    let t, r, s = Promise.resolve();
                                    return s = s.then((() => {
                                        if ("preDefinedData" in i == 0) return Promise.reject('Parameter "preDefinedData" is mandatory for "KEKRecipientInfo"');
                                        if ("keyDerivationAlgorithm" in o.recipientInfos[e].value == 0) return Promise.reject('Please append encoded "keyDerivationAlgorithm"');
                                        if ("algorithmParams" in o.recipientInfos[e].value.keyDerivationAlgorithm == 0) return Promise.reject('Incorrectly encoded "keyDerivationAlgorithm"');
                                        try {
                                            t = new p({
                                                schema: o.recipientInfos[e].value.keyDerivationAlgorithm.algorithmParams
                                            })
                                        } catch (e) {
                                            return Promise.reject('Incorrectly encoded "keyDerivationAlgorithm"')
                                        }
                                        return l.importKey("raw", i.preDefinedData, "PBKDF2", !1, ["deriveKey"])
                                    }), (e => Promise.reject(e))), s = s.then((s => {
                                        if (r = E(o.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId), "name" in r == 0) return Promise.reject(`Incorrect OID for "keyEncryptionAlgorithm": ${o.recipientInfos[e].value.keyEncryptionAlgorithm.algorithmId}`);
                                        let a = "SHA-1";
                                        if ("prf" in t) {
                                            const e = E(t.prf.algorithmId);
                                            if ("name" in e == 0) return Promise.reject("Incorrect OID for HMAC hash algorithm");
                                            a = e.hash.name
                                        }
                                        const n = new Uint8Array(t.salt.valueBlock.valueHex),
                                            i = t.iterationCount;
                                        return l.deriveKey({
                                            name: "PBKDF2",
                                            hash: {
                                                name: a
                                            },
                                            salt: n,
                                            iterations: i
                                        }, s, r, !0, ["unwrapKey"])
                                    }), (e => Promise.reject(e))), s = s.then((t => {
                                        const s = E(o.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId);
                                        return "name" in s == 0 ? Promise.reject(`Incorrect "contentEncryptionAlgorithm": ${o.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId}`) : l.unwrapKey("raw", o.recipientInfos[e].value.encryptedKey.valueBlock.valueHex, t, r, s, !0, ["decrypt"])
                                    }), (e => Promise.reject(e))), s
                                }(e);
                                break;
                            default:
                                return Promise.reject(`Uknown recipient type in array with index ${e}`)
                        }
                        return t
                    }), (e => Promise.reject(e))), r = r.then((e => {
                        const t = E(this.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId);
                        if ("name" in t == !1) return Promise.reject(`Incorrect "contentEncryptionAlgorithm": ${this.encryptedContentInfo.contentEncryptionAlgorithm.algorithmId}`);
                        const r = this.encryptedContentInfo.contentEncryptionAlgorithm.algorithmParams.valueBlock.valueHex,
                            s = new Uint8Array(r);
                        let n = new ArrayBuffer(0);
                        if (!1 === this.encryptedContentInfo.encryptedContent.idBlock.isConstructed) n = this.encryptedContentInfo.encryptedContent.valueBlock.valueHex;
                        else
                            for (const e of this.encryptedContentInfo.encryptedContent.valueBlock.value) n = (0, a.utilConcatBuf)(n, e.valueBlock.valueHex);
                        return l.decrypt({
                            name: t.name,
                            iv: s
                        }, e, n)
                    }), (e => Promise.reject(e))), r
                }
            }
            class ht {
                constructor(e = {}) {
                    this.safeContents = (0, a.getParametersValue)(e, "safeContents", ht.defaultValues("safeContents")), "parsedValue" in e && (this.parsedValue = (0, a.getParametersValue)(e, "parsedValue", ht.defaultValues("parsedValue"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "safeContents":
                            return [];
                        case "parsedValue":
                            return {};
                        default:
                            throw new Error(`Invalid member name for AuthenticatedSafe class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "safeContents":
                            return 0 === t.length;
                        case "parsedValue":
                            return t instanceof Object && 0 === Object.keys(t).length;
                        default:
                            throw new Error(`Invalid member name for AuthenticatedSafe class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Repeated({
                            name: t.contentInfos || "",
                            value: $.schema()
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["contentInfos"]);
                    const t = s.compareSchema(e, e, ht.schema({
                        names: {
                            contentInfos: "contentInfos"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for AuthenticatedSafe");
                    this.safeContents = Array.from(t.result.contentInfos, (e => new $({
                        schema: e
                    })))
                }
                toSchema() {
                    return new s.Sequence({
                        value: Array.from(this.safeContents, (e => e.toSchema()))
                    })
                }
                toJSON() {
                    return {
                        safeContents: Array.from(this.safeContents, (e => e.toJSON()))
                    }
                }
                parseInternalValues(e) {
                    if (e instanceof Object == !1) return Promise.reject('The "parameters" must has "Object" type');
                    if ("safeContents" in e == !1) return Promise.reject('Absent mandatory parameter "safeContents"');
                    if (e.safeContents instanceof Array == !1) return Promise.reject('The "parameters.safeContents" must has "Array" type');
                    if (e.safeContents.length !== this.safeContents.length) return Promise.reject('Length of "parameters.safeContents" must be equal to "this.safeContents.length"');
                    let t = Promise.resolve();
                    this.parsedValue = {
                        safeContents: []
                    };
                    for (const [r, n] of this.safeContents.entries()) switch (n.contentType) {
                        case "1.2.840.113549.1.7.1": {
                            if (n.content instanceof s.OctetString == !1) return Promise.reject('Wrong type of "this.safeContents[j].content"');
                            let e = new ArrayBuffer(0);
                            if (n.content.valueBlock.isConstructed)
                                for (const t of n.content.valueBlock.value) e = (0, a.utilConcatBuf)(e, t.valueBlock.valueHex);
                            else e = n.content.valueBlock.valueHex;
                            const t = s.fromBER(e);
                            if (-1 === t.offset) return Promise.reject('Error during parsing of ASN.1 data inside "content.content"');
                            this.parsedValue.safeContents.push({
                                privacyMode: 0,
                                value: new Ke({
                                    schema: t.result
                                })
                            })
                        }
                        break;
                    case "1.2.840.113549.1.7.3": {
                        const a = new ut({
                            schema: n.content
                        });
                        if ("recipientCertificate" in e.safeContents[r] == !1) return Promise.reject('Absent mandatory parameter "recipientCertificate" in "parameters.safeContents[j]"');
                        const i = e.safeContents[r].recipientCertificate;
                        if ("recipientKey" in e.safeContents[r] == !1) return Promise.reject('Absent mandatory parameter "recipientKey" in "parameters.safeContents[j]"');
                        const o = e.safeContents[r].recipientKey;
                        t = t.then((() => a.decrypt(0, {
                            recipientCertificate: i,
                            recipientPrivateKey: o
                        }))), t = t.then((e => {
                            const t = s.fromBER(e);
                            return -1 === t.offset ? Promise.reject("Error during parsing of decrypted data") : (this.parsedValue.safeContents.push({
                                privacyMode: 2,
                                value: new Ke({
                                    schema: t.result
                                })
                            }), Promise.resolve())
                        }))
                    }
                    break;
                    case "1.2.840.113549.1.7.6": {
                        const a = new _({
                            schema: n.content
                        });
                        if ("password" in e.safeContents[r] == !1) return Promise.reject('Absent mandatory parameter "password" in "parameters.safeContents[j]"');
                        const i = e.safeContents[r].password;
                        t = t.then((() => a.decrypt({
                            password: i
                        })), (e => Promise.reject(e))), t = t.then((e => {
                            const t = s.fromBER(e);
                            return -1 === t.offset ? Promise.reject("Error during parsing of decrypted data") : (this.parsedValue.safeContents.push({
                                privacyMode: 1,
                                value: new Ke({
                                    schema: t.result
                                })
                            }), Promise.resolve())
                        }), (e => Promise.reject(e)))
                    }
                    break;
                    default:
                        throw new Error(`Unknown "contentType" for AuthenticatedSafe: " ${n.contentType}`)
                    }
                    return t
                }
                makeInternalValues(e) {
                    if ("parsedValue" in this == !1) return Promise.reject('Please run "parseValues" first or add "parsedValue" manually');
                    if (this.parsedValue instanceof Object == !1) return Promise.reject('The "this.parsedValue" must has "Object" type');
                    if (this.parsedValue.safeContents instanceof Array == !1) return Promise.reject('The "this.parsedValue.safeContents" must has "Array" type');
                    if (e instanceof Object == !1) return Promise.reject('The "parameters" must has "Object" type');
                    if ("safeContents" in e == !1) return Promise.reject('Absent mandatory parameter "safeContents"');
                    if (e.safeContents instanceof Array == !1) return Promise.reject('The "parameters.safeContents" must has "Array" type');
                    if (e.safeContents.length !== this.parsedValue.safeContents.length) return Promise.reject('Length of "parameters.safeContents" must be equal to "this.parsedValue.safeContents"');
                    let t = Promise.resolve();
                    this.safeContents = [];
                    for (const [r, a] of this.parsedValue.safeContents.entries()) {
                        if ("privacyMode" in a == !1) return Promise.reject('The "privacyMode" is a mandatory parameter for "content"');
                        if ("value" in a == !1) return Promise.reject('The "value" is a mandatory parameter for "content"');
                        if (a.value instanceof Ke == !1) return Promise.reject('The "content.value" must has "SafeContents" type');
                        switch (a.privacyMode) {
                            case 0: {
                                const e = a.value.toSchema().toBER(!1);
                                t = t.then((() => {
                                    this.safeContents.push(new $({
                                        contentType: "1.2.840.113549.1.7.1",
                                        content: new s.OctetString({
                                            valueHex: e
                                        })
                                    }))
                                }))
                            }
                            break;
                        case 1: {
                            const s = new _,
                                n = e.safeContents[r];
                            n.contentToEncrypt = a.value.toSchema().toBER(!1), t = t.then((() => s.encrypt(n)), (e => Promise.reject(e))), t = t.then((() => {
                                this.safeContents.push(new $({
                                    contentType: "1.2.840.113549.1.7.6",
                                    content: s.toSchema()
                                }))
                            }), (e => Promise.reject(e)))
                        }
                        break;
                        case 2: {
                            const s = new ut,
                                n = a.value.toSchema().toBER(!1);
                            if ("encryptingCertificate" in e.safeContents[r] == !1) return Promise.reject('Absent mandatory parameter "encryptingCertificate" in "parameters.safeContents[i]"');
                            if ("encryptionAlgorithm" in e.safeContents[r] == !1) return Promise.reject('Absent mandatory parameter "encryptionAlgorithm" in "parameters.safeContents[i]"');
                            switch (!0) {
                                case "aes-cbc" === e.safeContents[r].encryptionAlgorithm.name.toLowerCase():
                                case "aes-gcm" === e.safeContents[r].encryptionAlgorithm.name.toLowerCase():
                                    break;
                                default:
                                    return Promise.reject(`Incorrect parameter "encryptionAlgorithm" in "parameters.safeContents[i]": ${e.safeContents[r].encryptionAlgorithm}`)
                            }
                            switch (!0) {
                                case 128 === e.safeContents[r].encryptionAlgorithm.length:
                                case 192 === e.safeContents[r].encryptionAlgorithm.length:
                                case 256 === e.safeContents[r].encryptionAlgorithm.length:
                                    break;
                                default:
                                    return Promise.reject(`Incorrect parameter "encryptionAlgorithm.length" in "parameters.safeContents[i]": ${e.safeContents[r].encryptionAlgorithm.length}`)
                            }
                            const i = e.safeContents[r].encryptionAlgorithm;
                            s.addRecipientByCertificate(e.safeContents[r].encryptingCertificate), t = t.then((() => s.encrypt(i, n))), t = t.then((() => {
                                this.safeContents.push(new $({
                                    contentType: "1.2.840.113549.1.7.3",
                                    content: s.toSchema()
                                }))
                            }))
                        }
                        break;
                        default:
                            return Promise.reject(`Incorrect value for "content.privacyMode": ${a.privacyMode}`)
                        }
                    }
                    return t.then((() => this), (e => Promise.reject(`Error during parsing: ${e}`)))
                }
            }
            class mt {
                constructor(e = {}) {
                    this.hashAlgorithm = (0, a.getParametersValue)(e, "hashAlgorithm", mt.defaultValues("hashAlgorithm")), this.issuerNameHash = (0, a.getParametersValue)(e, "issuerNameHash", mt.defaultValues("issuerNameHash")), this.issuerKeyHash = (0, a.getParametersValue)(e, "issuerKeyHash", mt.defaultValues("issuerKeyHash")), this.serialNumber = (0, a.getParametersValue)(e, "serialNumber", mt.defaultValues("serialNumber")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "hashAlgorithm":
                            return new n;
                        case "issuerNameHash":
                        case "issuerKeyHash":
                            return new s.OctetString;
                        case "serialNumber":
                            return new s.Integer;
                        default:
                            throw new Error(`Invalid member name for CertID class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "hashAlgorithm":
                            return "" === t.algorithmId && "algorithmParams" in t == !1;
                        case "issuerNameHash":
                        case "issuerKeyHash":
                        case "serialNumber":
                            return t.isEqual(mt.defaultValues(e));
                        default:
                            throw new Error(`Invalid member name for CertID class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [n.schema(t.hashAlgorithmObject || {
                            names: {
                                blockName: t.hashAlgorithm || ""
                            }
                        }), new s.OctetString({
                            name: t.issuerNameHash || ""
                        }), new s.OctetString({
                            name: t.issuerKeyHash || ""
                        }), new s.Integer({
                            name: t.serialNumber || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["hashAlgorithm", "issuerNameHash", "issuerKeyHash", "serialNumber"]);
                    const t = s.compareSchema(e, e, mt.schema({
                        names: {
                            hashAlgorithm: "hashAlgorithm",
                            issuerNameHash: "issuerNameHash",
                            issuerKeyHash: "issuerKeyHash",
                            serialNumber: "serialNumber"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for CertID");
                    this.hashAlgorithm = new n({
                        schema: t.result.hashAlgorithm
                    }), this.issuerNameHash = t.result.issuerNameHash, this.issuerKeyHash = t.result.issuerKeyHash, this.serialNumber = t.result.serialNumber
                }
                toSchema() {
                    return new s.Sequence({
                        value: [this.hashAlgorithm.toSchema(), this.issuerNameHash, this.issuerKeyHash, this.serialNumber]
                    })
                }
                toJSON() {
                    return {
                        hashAlgorithm: this.hashAlgorithm.toJSON(),
                        issuerNameHash: this.issuerNameHash.toJSON(),
                        issuerKeyHash: this.issuerKeyHash.toJSON(),
                        serialNumber: this.serialNumber.toJSON()
                    }
                }
                isEqual(e) {
                    return !this.hashAlgorithm.algorithmId !== e.hashAlgorithm.algorithmId && (!1 !== (0, a.isEqualBuffer)(this.issuerNameHash.valueBlock.valueHex, e.issuerNameHash.valueBlock.valueHex) && (!1 !== (0, a.isEqualBuffer)(this.issuerKeyHash.valueBlock.valueHex, e.issuerKeyHash.valueBlock.valueHex) && !!this.serialNumber.isEqual(e.serialNumber)))
                }
                createForCertificate(e, t) {
                    let r, a = Promise.resolve();
                    const i = A();
                    if (void 0 === i) return Promise.reject("Unable to create WebCrypto object");
                    if ("hashAlgorithm" in t == !1) return Promise.reject('Parameter "hashAlgorithm" is mandatory for "OCSP_REQUEST.createForCertificate"');
                    const o = I({
                        name: t.hashAlgorithm
                    });
                    return "" === o ? Promise.reject(`Incorrect "hashAlgorithm": ${this.hashAlgorithm}`) : (this.hashAlgorithm = new n({
                        algorithmId: o,
                        algorithmParams: new s.Null
                    }), "issuerCertificate" in t ? (r = t.issuerCertificate, this.serialNumber = e.serialNumber, a = a.then((() => i.digest({
                        name: t.hashAlgorithm
                    }, r.subject.toSchema().toBER(!1))), (e => Promise.reject(e))), a = a.then((e => {
                        this.issuerNameHash = new s.OctetString({
                            valueHex: e
                        });
                        const a = r.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex;
                        return i.digest({
                            name: t.hashAlgorithm
                        }, a)
                    }), (e => Promise.reject(e))).then((e => {
                        this.issuerKeyHash = new s.OctetString({
                            valueHex: e
                        })
                    }), (e => Promise.reject(e))), a) : Promise.reject('Parameter "issuerCertificate" is mandatory for "OCSP_REQUEST.createForCertificate"'))
                }
            }
            class ft {
                constructor(e = {}) {
                    this.certID = (0, a.getParametersValue)(e, "certID", ft.defaultValues("certID")), this.certStatus = (0, a.getParametersValue)(e, "certStatus", ft.defaultValues("certStatus")), this.thisUpdate = (0, a.getParametersValue)(e, "thisUpdate", ft.defaultValues("thisUpdate")), "nextUpdate" in e && (this.nextUpdate = (0, a.getParametersValue)(e, "nextUpdate", ft.defaultValues("nextUpdate"))), "singleExtensions" in e && (this.singleExtensions = (0, a.getParametersValue)(e, "singleExtensions", ft.defaultValues("singleExtensions"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "certID":
                            return new mt;
                        case "certStatus":
                            return {};
                        case "thisUpdate":
                        case "nextUpdate":
                            return new Date(0, 0, 0);
                        case "singleExtensions":
                            return [];
                        default:
                            throw new Error(`Invalid member name for SingleResponse class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "certID":
                            return mt.compareWithDefault("hashAlgorithm", t.hashAlgorithm) && mt.compareWithDefault("issuerNameHash", t.issuerNameHash) && mt.compareWithDefault("issuerKeyHash", t.issuerKeyHash) && mt.compareWithDefault("serialNumber", t.serialNumber);
                        case "certStatus":
                            return 0 === Object.keys(t).length;
                        case "thisUpdate":
                        case "nextUpdate":
                            return t === ft.defaultValues(e);
                        default:
                            throw new Error(`Invalid member name for SingleResponse class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [mt.schema(t.certID || {}), new s.Choice({
                            value: [new s.Primitive({
                                name: t.certStatus || "",
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 0
                                },
                                lenBlockLength: 1
                            }), new s.Constructed({
                                name: t.certStatus || "",
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 1
                                },
                                value: [new s.GeneralizedTime, new s.Constructed({
                                    optional: !0,
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: 0
                                    },
                                    value: [new s.Enumerated]
                                })]
                            }), new s.Primitive({
                                name: t.certStatus || "",
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 2
                                },
                                lenBlock: {
                                    length: 1
                                }
                            })]
                        }), new s.GeneralizedTime({
                            name: t.thisUpdate || ""
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.GeneralizedTime({
                                name: t.nextUpdate || ""
                            })]
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [Se.schema(t.singleExtensions || {})]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["certID", "certStatus", "thisUpdate", "nextUpdate", "singleExtensions"]);
                    const t = s.compareSchema(e, e, ft.schema({
                        names: {
                            certID: {
                                names: {
                                    blockName: "certID"
                                }
                            },
                            certStatus: "certStatus",
                            thisUpdate: "thisUpdate",
                            nextUpdate: "nextUpdate",
                            singleExtensions: {
                                names: {
                                    blockName: "singleExtensions"
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for SingleResponse");
                    this.certID = new mt({
                        schema: t.result.certID
                    }), this.certStatus = t.result.certStatus, this.thisUpdate = t.result.thisUpdate.toDate(), "nextUpdate" in t.result && (this.nextUpdate = t.result.nextUpdate.toDate()), "singleExtensions" in t.result && (this.singleExtensions = Array.from(t.result.singleExtensions.valueBlock.value, (e => new we({
                        schema: e
                    }))))
                }
                toSchema() {
                    const e = [];
                    return e.push(this.certID.toSchema()), e.push(this.certStatus), e.push(new s.GeneralizedTime({
                        valueDate: this.thisUpdate
                    })), "nextUpdate" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [new s.GeneralizedTime({
                            valueDate: this.nextUpdate
                        })]
                    })), "singleExtensions" in this && e.push(new s.Sequence({
                        value: Array.from(this.singleExtensions, (e => e.toSchema()))
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        certID: this.certID.toJSON(),
                        certStatus: this.certStatus.toJSON(),
                        thisUpdate: this.thisUpdate
                    };
                    return "nextUpdate" in this && (e.nextUpdate = this.nextUpdate), "singleExtensions" in this && (e.singleExtensions = Array.from(this.singleExtensions, (e => e.toJSON()))), e
                }
            }
            class gt {
                constructor(e = {}) {
                    this.tbs = (0, a.getParametersValue)(e, "tbs", gt.defaultValues("tbs")), this.responderID = (0, a.getParametersValue)(e, "responderID", gt.defaultValues("responderID")), this.producedAt = (0, a.getParametersValue)(e, "producedAt", gt.defaultValues("producedAt")), this.responses = (0, a.getParametersValue)(e, "responses", gt.defaultValues("responses")), "responseExtensions" in e && (this.responseExtensions = (0, a.getParametersValue)(e, "responseExtensions", gt.defaultValues("responseExtensions"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "tbs":
                            return new ArrayBuffer(0);
                        case "responderID":
                            return {};
                        case "producedAt":
                            return new Date(0, 0, 0);
                        case "responses":
                        case "responseExtensions":
                            return [];
                        default:
                            throw new Error(`Invalid member name for ResponseData class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "tbs":
                            return 0 === t.byteLength;
                        case "responderID":
                            return 0 === Object.keys(t).length;
                        case "producedAt":
                            return t === gt.defaultValues(e);
                        case "responses":
                        case "responseExtensions":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for ResponseData class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "ResponseData",
                        value: [new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Integer({
                                name: t.version || "ResponseData.version"
                            })]
                        }), new s.Choice({
                            value: [new s.Constructed({
                                name: t.responderID || "ResponseData.responderID",
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 1
                                },
                                value: [R.schema(t.ResponseDataByName || {
                                    names: {
                                        blockName: "ResponseData.byName"
                                    }
                                })]
                            }), new s.Constructed({
                                name: t.responderID || "ResponseData.responderID",
                                idBlock: {
                                    tagClass: 3,
                                    tagNumber: 2
                                },
                                value: [new s.OctetString({
                                    name: t.ResponseDataByKey || "ResponseData.byKey"
                                })]
                            })]
                        }), new s.GeneralizedTime({
                            name: t.producedAt || "ResponseData.producedAt"
                        }), new s.Sequence({
                            value: [new s.Repeated({
                                name: "ResponseData.responses",
                                value: ft.schema(t.response || {})
                            })]
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [Se.schema(t.extensions || {
                                names: {
                                    blockName: "ResponseData.responseExtensions"
                                }
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["ResponseData", "ResponseData.version", "ResponseData.responderID", "ResponseData.producedAt", "ResponseData.responses", "ResponseData.responseExtensions"]);
                    const t = s.compareSchema(e, e, gt.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for ResponseData");
                    this.tbs = t.result.ResponseData.valueBeforeDecode, "ResponseData.version" in t.result && (this.version = t.result["ResponseData.version"].valueBlock.valueDec), 1 === t.result["ResponseData.responderID"].idBlock.tagNumber ? this.responderID = new R({
                        schema: t.result["ResponseData.responderID"].valueBlock.value[0]
                    }) : this.responderID = t.result["ResponseData.responderID"].valueBlock.value[0], this.producedAt = t.result["ResponseData.producedAt"].toDate(), this.responses = Array.from(t.result["ResponseData.responses"], (e => new ft({
                        schema: e
                    }))), "ResponseData.responseExtensions" in t.result && (this.responseExtensions = Array.from(t.result["ResponseData.responseExtensions"].valueBlock.value, (e => new we({
                        schema: e
                    }))))
                }
                toSchema(e = !1) {
                    let t;
                    if (!1 === e) {
                        if (0 === this.tbs.length) return gt.schema();
                        t = s.fromBER(this.tbs).result
                    } else {
                        const e = [];
                        "version" in this && e.push(new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Integer({
                                value: this.version
                            })]
                        })), this.responderID instanceof R ? e.push(new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [this.responderID.toSchema()]
                        })) : e.push(new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            },
                            value: [this.responderID]
                        })), e.push(new s.GeneralizedTime({
                            valueDate: this.producedAt
                        })), e.push(new s.Sequence({
                            value: Array.from(this.responses, (e => e.toSchema()))
                        })), "responseExtensions" in this && e.push(new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [new s.Sequence({
                                value: Array.from(this.responseExtensions, (e => e.toSchema()))
                            })]
                        })), t = new s.Sequence({
                            value: e
                        })
                    }
                    return t
                }
                toJSON() {
                    const e = {};
                    return "version" in this && (e.version = this.version), "responderID" in this && (e.responderID = this.responderID), "producedAt" in this && (e.producedAt = this.producedAt), "responses" in this && (e.responses = Array.from(this.responses, (e => e.toJSON()))), "responseExtensions" in this && (e.responseExtensions = Array.from(this.responseExtensions, (e => e.toJSON()))), e
                }
            }
            class dt {
                constructor(e = {}) {
                    this.trustedCerts = (0, a.getParametersValue)(e, "trustedCerts", this.defaultValues("trustedCerts")), this.certs = (0, a.getParametersValue)(e, "certs", this.defaultValues("certs")), this.crls = (0, a.getParametersValue)(e, "crls", this.defaultValues("crls")), this.ocsps = (0, a.getParametersValue)(e, "ocsps", this.defaultValues("ocsps")), this.checkDate = (0, a.getParametersValue)(e, "checkDate", this.defaultValues("checkDate")), this.findOrigin = (0, a.getParametersValue)(e, "findOrigin", this.defaultValues("findOrigin")), this.findIssuer = (0, a.getParametersValue)(e, "findIssuer", this.defaultValues("findIssuer"))
                }
                static defaultFindOrigin(e, t) {
                    0 === e.tbs.byteLength && (e.tbs = e.encodeTBS());
                    for (const r of t.certs)
                        if (0 === r.tbs.byteLength && (r.tbs = r.encodeTBS()), (0, a.isEqualBuffer)(e.tbs, r.tbs)) return "Intermediate Certificates";
                    for (const r of t.trustedCerts)
                        if (0 === r.tbs.byteLength && (r.tbs = r.encodeTBS()), (0, a.isEqualBuffer)(e.tbs, r.tbs)) return "Trusted Certificates";
                    return "Unknown"
                }
                async defaultFindIssuer(e, t) {
                    let r = [],
                        s = null,
                        n = null,
                        i = null;
                    if (e.subject.isEqual(e.issuer)) try {
                        if (!0 === await e.verify()) return [e]
                    } catch (e) {}
                    if ("extensions" in e)
                        for (const t of e.extensions)
                            if ("2.5.29.35" === t.extnID) {
                                "keyIdentifier" in t.parsedValue ? s = t.parsedValue.keyIdentifier : ("authorityCertIssuer" in t.parsedValue && (n = t.parsedValue.authorityCertIssuer), "authorityCertSerialNumber" in t.parsedValue && (i = t.parsedValue.authorityCertSerialNumber));
                                break
                            }
                    function o(t) {
                        if (null !== s && "extensions" in t) {
                            let e = !1;
                            for (const n of t.extensions)
                                if ("2.5.29.14" === n.extnID) {
                                    e = !0, (0, a.isEqualBuffer)(n.parsedValue.valueBlock.valueHex, s.valueBlock.valueHex) && r.push(t);
                                    break
                                } if (e) return
                        }
                        let o = !1;
                        null !== i && (o = t.serialNumber.isEqual(i)), null !== n ? t.subject.isEqual(n) && o && r.push(t) : e.issuer.isEqual(t.subject) && r.push(t)
                    }
                    for (const e of t.trustedCerts) o(e);
                    for (const e of t.certs) o(e);
                    for (let t = 0; t < r.length; t++) try {
                        !1 === await e.verify(r[t]) && r.splice(t, 1)
                    } catch (e) {
                        r.splice(t, 1)
                    }
                    return r
                }
                defaultValues(e) {
                    switch (e) {
                        case "trustedCerts":
                        case "certs":
                        case "crls":
                        case "ocsps":
                            return [];
                        case "checkDate":
                            return new Date;
                        case "findOrigin":
                            return dt.defaultFindOrigin;
                        case "findIssuer":
                            return this.defaultFindIssuer;
                        default:
                            throw new Error(`Invalid member name for CertificateChainValidationEngine class: ${e}`)
                    }
                }
                async sort(e = !1) {
                    const t = [],
                        r = this;
                    async function s(e) {
                        const s = [],
                            a = [],
                            n = [];
                        if (s.push(...t.filter((t => e.issuer.isEqual(t.subject)))), 0 === s.length) return {
                            status: 1,
                            statusMessage: "No certificate's issuers"
                        };
                        if (a.push(...r.crls.filter((t => t.issuer.isEqual(e.issuer)))), 0 === a.length) return {
                            status: 2,
                            statusMessage: "No CRLs for specific certificate issuer"
                        };
                        for (let e = 0; e < a.length; e++)
                            if (!(a[e].nextUpdate.value < r.checkDate))
                                for (let t = 0; t < s.length; t++) try {
                                    if (await a[e].verify({
                                            issuerCertificate: s[t]
                                        })) {
                                        n.push({
                                            crl: a[e],
                                            certificate: s[t]
                                        });
                                        break
                                    }
                                } catch (e) {}
                        return n.length ? {
                            status: 0,
                            statusMessage: "",
                            result: n
                        } : {
                            status: 3,
                            statusMessage: "No valid CRLs found"
                        }
                    }
                    async function n(e, t) {
                        const s = E(e.signatureAlgorithm.algorithmId);
                        if ("name" in s == !1) return 1;
                        if ("hash" in s == !1) return 1;
                        for (let s = 0; s < r.ocsps.length; s++) {
                            const a = await r.ocsps[s].getCertificateStatus(e, t);
                            if (a.isForCertificate) return 0 === a.status ? 0 : 1
                        }
                        return 2
                    }
                    async function i(e, t = !1) {
                        let r = !1,
                            s = !1,
                            a = !1,
                            n = !1;
                        if ("extensions" in e) {
                            for (let t = 0; t < e.extensions.length; t++) {
                                if (!0 === e.extensions[t].critical && "parsedValue" in e.extensions[t] == !1) return {
                                    result: !1,
                                    resultCode: 6,
                                    resultMessage: `Unable to parse critical certificate extension: ${e.extensions[t].extnID}`
                                };
                                if ("2.5.29.15" === e.extensions[t].extnID) {
                                    a = !0;
                                    const r = new Uint8Array(e.extensions[t].parsedValue.valueBlock.valueHex);
                                    4 == (4 & r[0]) && (s = !0), 2 == (2 & r[0]) && (n = !0)
                                }
                                "2.5.29.19" === e.extensions[t].extnID && "cA" in e.extensions[t].parsedValue && !0 === e.extensions[t].parsedValue.cA && (r = !0)
                            }
                            if (!0 === s && !1 === r) return {
                                result: !1,
                                resultCode: 3,
                                resultMessage: 'Unable to build certificate chain - using "keyCertSign" flag set without BasicConstaints'
                            };
                            if (!0 === a && !0 === r && !1 === s) return {
                                result: !1,
                                resultCode: 4,
                                resultMessage: 'Unable to build certificate chain - "keyCertSign" flag was not set'
                            };
                            if (!0 === r && !0 === a && t && !1 === n) return {
                                result: !1,
                                resultCode: 5,
                                resultMessage: 'Unable to build certificate chain - intermediate certificate must have "cRLSign" key usage flag'
                            }
                        }
                        return !1 === r ? {
                            result: !1,
                            resultCode: 7,
                            resultMessage: "Unable to build certificate chain - more than one possible end-user certificate"
                        } : {
                            result: !0,
                            resultCode: 0,
                            resultMessage: ""
                        }
                    }
                    t.push(...r.trustedCerts), t.push(...r.certs);
                    for (let e = 0; e < t.length; e++)
                        for (let r = 0; r < t.length; r++)
                            if (e !== r && (0, a.isEqualBuffer)(t[e].tbs, t[r].tbs)) {
                                t.splice(r, 1), e = 0;
                                break
                            } let o;
                    const l = [t[t.length - 1]];
                    if (o = await async function e(t) {
                            const s = [];

                            function n(e) {
                                let t = !0;
                                for (let r = 0; r < e.length; r++) {
                                    for (let s = 0; s < e.length; s++)
                                        if (s !== r && e[r] === e[s]) {
                                            t = !1;
                                            break
                                        } if (!t) break
                                }
                                return t
                            }
                            const i = await r.findIssuer(t, r);
                            if (0 === i.length) throw new Error("No valid certificate paths found");
                            for (let r = 0; r < i.length; r++) {
                                if ((0, a.isEqualBuffer)(i[r].tbs, t.tbs)) {
                                    s.push([i[r]]);
                                    continue
                                }
                                const o = await e(i[r]);
                                for (let e = 0; e < o.length; e++) {
                                    const t = o[e].slice();
                                    t.splice(0, 0, i[r]), n(t) ? s.push(t) : s.push(o[e])
                                }
                            }
                            return s
                        }(t[t.length - 1]), 0 === o.length) return {
                        result: !1,
                        resultCode: 60,
                        resultMessage: "Unable to find certificate path"
                    };
                    for (let e = 0; e < o.length; e++) {
                        let t = !1;
                        for (let s = 0; s < o[e].length; s++) {
                            const n = o[e][s];
                            for (let e = 0; e < r.trustedCerts.length; e++)
                                if ((0, a.isEqualBuffer)(n.tbs, r.trustedCerts[e].tbs)) {
                                    t = !0;
                                    break
                                } if (t) break
                        }
                        t || (o.splice(e, 1), e = 0)
                    }
                    if (0 === o.length) throw {
                        result: !1,
                        resultCode: 97,
                        resultMessage: "No valid certificate paths found"
                    };
                    let c = o[0].length,
                        u = 0;
                    for (let e = 0; e < o.length; e++) o[e].length < c && (c = o[e].length, u = e);
                    for (let e = 0; e < o[u].length; e++) l.push(o[u][e]);
                    if (o = await async function(t, a) {
                            for (let e = 0; e < t.length; e++)
                                if (t[e].notBefore.value > a || t[e].notAfter.value < a) return {
                                    result: !1,
                                    resultCode: 8,
                                    resultMessage: "The certificate is either not yet valid or expired"
                                };
                            if (t.length < 2) return {
                                result: !1,
                                resultCode: 9,
                                resultMessage: "Too short certificate path"
                            };
                            for (let e = t.length - 2; e >= 0; e--)
                                if (!1 === t[e].issuer.isEqual(t[e].subject) && !1 === t[e].issuer.isEqual(t[e + 1].subject)) return {
                                    result: !1,
                                    resultCode: 10,
                                    resultMessage: "Incorrect name chaining"
                                };
                            if (0 !== r.crls.length || 0 !== r.ocsps.length)
                                for (let a = 0; a < t.length - 1; a++) {
                                    let o = 2,
                                        l = {
                                            status: 0,
                                            statusMessage: ""
                                        };
                                    if (0 !== r.ocsps.length) switch (o = await n(t[a], t[a + 1]), o) {
                                        case 0:
                                            continue;
                                        case 1:
                                            return {
                                                result: !1, resultCode: 12, resultMessage: "One of certificates was revoked via OCSP response"
                                            }
                                    }
                                    if (0 !== r.crls.length) {
                                        if (l = await s(t[a]), 0 === l.status)
                                            for (let e = 0; e < l.result.length; e++) {
                                                if (l.result[e].crl.isCertificateRevoked(t[a])) return {
                                                    result: !1,
                                                    resultCode: 12,
                                                    resultMessage: "One of certificates had been revoked"
                                                };
                                                if (!1 === (await i(l.result[e].certificate, !0)).result) return {
                                                    result: !1,
                                                    resultCode: 13,
                                                    resultMessage: "CRL issuer certificate is not a CA certificate or does not have crlSign flag"
                                                }
                                            } else if (!1 === e) throw {
                                                result: !1,
                                                resultCode: 11,
                                                resultMessage: `No revocation values found for one of certificates: ${l.statusMessage}`
                                            }
                                    } else if (2 === o) return {
                                        result: !1,
                                        resultCode: 11,
                                        resultMessage: "No revocation values found for one of certificates"
                                    };
                                    if (2 === o && 2 === l.status && e) {
                                        const e = t[a + 1];
                                        let r = !1;
                                        if ("extensions" in e)
                                            for (const t of e.extensions) switch (t.extnID) {
                                                case "2.5.29.31":
                                                case "2.5.29.46":
                                                case "1.3.6.1.5.5.7.1.1":
                                                    r = !0
                                            }
                                        if (r) throw {
                                            result: !1,
                                            resultCode: 11,
                                            resultMessage: `No revocation values found for one of certificates: ${l.statusMessage}`
                                        }
                                    }
                                }
                            for (let e = 1; e < t.length; e++) {
                                if (!1 === (await i(t[e])).result) return {
                                    result: !1,
                                    resultCode: 14,
                                    resultMessage: "One of intermediate certificates is not a CA certificate"
                                }
                            }
                            return {
                                result: !0
                            }
                        }(l, r.checkDate), !1 === o.result) throw o;
                    return l
                }
                async verify(e = {}) {
                    function t(e, t) {
                        const r = V(e),
                            s = V(t),
                            a = r.split("."),
                            n = s.split("."),
                            i = a.length,
                            o = n.length;
                        if (0 === i || 0 === o || i < o) return !1;
                        for (let e = 0; e < i; e++)
                            if (0 === a[e].length) return !1;
                        for (let e = 0; e < o; e++)
                            if (0 === n[e].length) {
                                if (0 === e) {
                                    if (1 === o) return !1;
                                    continue
                                }
                                return !1
                            } for (let e = 0; e < o; e++)
                            if (0 !== n[o - 1 - e].length && 0 !== a[i - 1 - e].localeCompare(n[o - 1 - e])) return !1;
                        return !0
                    }

                    function r(e, r) {
                        const s = V(e),
                            a = V(r),
                            n = s.split("@"),
                            i = a.split("@");
                        if (0 === n.length || 0 === i.length || n.length < i.length) return !1;
                        if (1 === i.length) {
                            if (t(n[1], i[0])) {
                                const e = n[1].split("."),
                                    t = i[0].split(".");
                                return 0 === t[0].length || e.length === t.length
                            }
                            return !1
                        }
                        return 0 === s.localeCompare(a)
                    }

                    function s(e, r) {
                        let s = V(e);
                        const a = V(r),
                            n = s.split("/");
                        if (a.split("/").length > 1) return !1;
                        if (n.length > 1)
                            for (let e = 0; e < n.length; e++)
                                if (n[e].length > 0 && ":" !== n[e].charAt(n[e].length - 1)) {
                                    s = n[e].split(":")[0];
                                    break
                                } if (t(s, a)) {
                            const e = s.split("."),
                                t = a.split(".");
                            return 0 === t[0].length || e.length === t.length
                        }
                        return !1
                    }

                    function a(e, t) {
                        const r = new Uint8Array(e.valueBlock.valueHex),
                            s = new Uint8Array(t.valueBlock.valueHex);
                        if (4 === r.length && 8 === s.length) {
                            for (let e = 0; e < 4; e++)
                                if ((r[e] ^ s[e]) & s[e + 4]) return !1;
                            return !0
                        }
                        if (16 === r.length && 32 === s.length) {
                            for (let e = 0; e < 16; e++)
                                if ((r[e] ^ s[e]) & s[e + 16]) return !1;
                            return !0
                        }
                        return !1
                    }

                    function n(e, t) {
                        if (0 === e.typesAndValues.length || 0 === t.typesAndValues.length) return !0;
                        if (e.typesAndValues.length < t.typesAndValues.length) return !1;
                        let r = !0,
                            s = 0;
                        for (let a = 0; a < t.typesAndValues.length; a++) {
                            let n = !1;
                            for (let i = s; i < e.typesAndValues.length; i++)
                                if (n = e.typesAndValues[i].isEqual(t.typesAndValues[a]), e.typesAndValues[i].type === t.typesAndValues[a].type && (r = r && n), !0 === n) {
                                    if (0 === s || s === i) {
                                        s = i + 1;
                                        break
                                    }
                                    return !1
                                } if (!1 === n) return !1
                        }
                        return 0 !== s && r
                    }
                    try {
                        if (0 === this.certs.length) throw "Empty certificate array";
                        let i = !1;
                        "passedWhenNotRevValues" in e && (i = e.passedWhenNotRevValues);
                        let o = [];
                        o.push("2.5.29.32.0");
                        let l = !1,
                            c = !1,
                            u = !1,
                            h = [],
                            m = [],
                            f = [];
                        "initialPolicySet" in e && (o = e.initialPolicySet), "initialExplicitPolicy" in e && (l = e.initialExplicitPolicy), "initialPolicyMappingInhibit" in e && (c = e.initialPolicyMappingInhibit), "initialInhibitPolicy" in e && (u = e.initialInhibitPolicy), "initialPermittedSubtreesSet" in e && (h = e.initialPermittedSubtreesSet), "initialExcludedSubtreesSet" in e && (m = e.initialExcludedSubtreesSet), "initialRequiredNameForms" in e && (f = e.initialRequiredNameForms);
                        let g = l,
                            d = c,
                            p = u;
                        const y = new Array(3);
                        y[0] = !1, y[1] = !1, y[2] = !1;
                        let b = 0,
                            v = 0,
                            w = 0,
                            S = h,
                            k = m;
                        const A = f;
                        let C = 1;
                        this.certs = await this.sort(i);
                        const I = [];
                        I.push("2.5.29.32.0");
                        const P = [],
                            B = new Array(this.certs.length - 1);
                        for (let e = 0; e < this.certs.length - 1; e++) B[e] = !0;
                        P.push(B);
                        const V = new Array(this.certs.length - 1),
                            N = new Array(this.certs.length - 1);
                        let E = g ? this.certs.length - 1 : -1;
                        for (let e = this.certs.length - 2; e >= 0; e--, C++)
                            if ("extensions" in this.certs[e]) {
                                for (let t = 0; t < this.certs[e].extensions.length; t++) {
                                    if ("2.5.29.32" === this.certs[e].extensions[t].extnID) {
                                        N[e] = this.certs[e].extensions[t].parsedValue;
                                        for (let t = 0; t < I.length; t++)
                                            if ("2.5.29.32.0" === I[t]) {
                                                delete P[t][e];
                                                break
                                            } for (let r = 0; r < this.certs[e].extensions[t].parsedValue.certificatePolicies.length; r++) {
                                            let s = -1;
                                            for (let a = 0; a < I.length; a++)
                                                if (this.certs[e].extensions[t].parsedValue.certificatePolicies[r].policyIdentifier === I[a]) {
                                                    s = a;
                                                    break
                                                } if (-1 === s) {
                                                I.push(this.certs[e].extensions[t].parsedValue.certificatePolicies[r].policyIdentifier);
                                                const s = new Array(this.certs.length - 1);
                                                s[e] = !0, P.push(s)
                                            } else P[s][e] = !0
                                        }
                                    }
                                    if ("2.5.29.33" === this.certs[e].extensions[t].extnID) {
                                        if (d) return {
                                            result: !1,
                                            resultCode: 98,
                                            resultMessage: "Policy mapping prohibited"
                                        };
                                        V[e] = this.certs[e].extensions[t].parsedValue
                                    }
                                    "2.5.29.36" === this.certs[e].extensions[t].extnID && !1 === g && (0 === this.certs[e].extensions[t].parsedValue.requireExplicitPolicy ? (g = !0, E = e) : !1 === y[0] ? (y[0] = !0, b = this.certs[e].extensions[t].parsedValue.requireExplicitPolicy) : b = b > this.certs[e].extensions[t].parsedValue.requireExplicitPolicy ? this.certs[e].extensions[t].parsedValue.requireExplicitPolicy : b, 0 === this.certs[e].extensions[t].parsedValue.inhibitPolicyMapping ? d = !0 : !1 === y[1] ? (y[1] = !0, v = this.certs[e].extensions[t].parsedValue.inhibitPolicyMapping + 1) : v = v > this.certs[e].extensions[t].parsedValue.inhibitPolicyMapping + 1 ? this.certs[e].extensions[t].parsedValue.inhibitPolicyMapping + 1 : v), "2.5.29.54" === this.certs[e].extensions[t].extnID && !1 === p && (0 === this.certs[e].extensions[t].parsedValue.valueBlock.valueDec ? p = !0 : !1 === y[2] ? (y[2] = !0, w = this.certs[e].extensions[t].parsedValue.valueBlock.valueDec) : w = w > this.certs[e].extensions[t].parsedValue.valueBlock.valueDec ? this.certs[e].extensions[t].parsedValue.valueBlock.valueDec : w)
                                }
                                if (!0 === p) {
                                    let t = -1;
                                    for (let e = 0; e < I.length; e++)
                                        if ("2.5.29.32.0" === I[e]) {
                                            t = e;
                                            break
                                        } - 1 !== t && delete P[0][e]
                                }!1 === g && !0 === y[0] && (b--, 0 === b && (g = !0, E = e, y[0] = !1)), !1 === d && !0 === y[1] && (v--, 0 === v && (d = !0, y[1] = !1)), !1 === p && !0 === y[2] && (w--, 0 === w && (p = !0, y[2] = !1))
                            } for (let e = 0; e < this.certs.length - 1; e++)
                            if (e < this.certs.length - 2 && void 0 !== V[e + 1])
                                for (let t = 0; t < V[e + 1].mappings.length; t++) {
                                    if ("2.5.29.32.0" === V[e + 1].mappings[t].issuerDomainPolicy || "2.5.29.32.0" === V[e + 1].mappings[t].subjectDomainPolicy) return {
                                        result: !1,
                                        resultCode: 99,
                                        resultMessage: 'The "anyPolicy" should not be a part of policy mapping scheme'
                                    };
                                    let r = -1,
                                        s = -1;
                                    for (let a = 0; a < I.length; a++) I[a] === V[e + 1].mappings[t].issuerDomainPolicy && (r = a), I[a] === V[e + 1].mappings[t].subjectDomainPolicy && (s = a);
                                    void 0 !== P[r][e] && delete P[r][e];
                                    for (let a = 0; a < N[e].certificatePolicies.length; a++)
                                        if (V[e + 1].mappings[t].subjectDomainPolicy === N[e].certificatePolicies[a].policyIdentifier && -1 !== r && -1 !== s)
                                            for (let t = 0; t <= e; t++) void 0 !== P[s][t] && (P[r][t] = !0, delete P[s][t])
                                }
                        for (let e = 0; e < I.length; e++)
                            if ("2.5.29.32.0" === I[e])
                                for (let t = 0; t < E; t++) delete P[e][t];
                        const x = [];
                        for (let e = 0; e < P.length; e++) {
                            let t = !0;
                            for (let r = 0; r < this.certs.length - 1; r++) {
                                let s = !1;
                                if (r < E && "2.5.29.32.0" === I[e] && I.length > 1) {
                                    t = !1;
                                    break
                                }
                                if (void 0 === P[e][r]) {
                                    if (r >= E)
                                        for (let e = 0; e < I.length; e++)
                                            if ("2.5.29.32.0" === I[e]) {
                                                !0 === P[e][r] && (s = !0);
                                                break
                                            } if (!s) {
                                        t = !1;
                                        break
                                    }
                                }
                            }!0 === t && x.push(I[e])
                        }
                        let O = [];
                        if (1 === o.length && "2.5.29.32.0" === o[0] && !1 === g) O = o;
                        else if (1 === x.length && "2.5.29.32.0" === x[0]) O = o;
                        else
                            for (let e = 0; e < x.length; e++)
                                for (let t = 0; t < o.length; t++)
                                    if (o[t] === x[e] || "2.5.29.32.0" === o[t]) {
                                        O.push(x[e]);
                                        break
                                    } const D = {
                            result: O.length > 0,
                            resultCode: 0,
                            resultMessage: O.length > 0 ? "" : 'Zero "userConstrPolicies" array, no intersections with "authConstrPolicies"',
                            authConstrPolicies: x,
                            userConstrPolicies: O,
                            explicitPolicyIndicator: g,
                            policyMappings: V,
                            certificatePath: this.certs
                        };
                        if (0 === O.length) return D;
                        if (!1 === D.result) return D;
                        C = 1;
                        for (let e = this.certs.length - 2; e >= 0; e--, C++) {
                            let i = [],
                                o = [],
                                l = [];
                            if ("extensions" in this.certs[e])
                                for (let t = 0; t < this.certs[e].extensions.length; t++) "2.5.29.30" === this.certs[e].extensions[t].extnID && ("permittedSubtrees" in this.certs[e].extensions[t].parsedValue && (o = o.concat(this.certs[e].extensions[t].parsedValue.permittedSubtrees)), "excludedSubtrees" in this.certs[e].extensions[t].parsedValue && (l = l.concat(this.certs[e].extensions[t].parsedValue.excludedSubtrees))), "2.5.29.17" === this.certs[e].extensions[t].extnID && (i = i.concat(this.certs[e].extensions[t].parsedValue.altNames));
                            let c = A.length <= 0;
                            for (let t = 0; t < A.length; t++) switch (A[t].base.type) {
                                case 4:
                                    if (A[t].base.value.typesAndValues.length !== this.certs[e].subject.typesAndValues.length) continue;
                                    c = !0;
                                    for (let r = 0; r < this.certs[e].subject.typesAndValues.length; r++)
                                        if (this.certs[e].subject.typesAndValues[r].type !== A[t].base.value.typesAndValues[r].type) {
                                            c = !1;
                                            break
                                        } if (!0 === c) break
                            }
                            if (!1 === c) throw D.result = !1, D.resultCode = 21, D.resultMessage = "No neccessary name form found", D;
                            const u = [];
                            u[0] = [], u[1] = [], u[2] = [], u[3] = [], u[4] = [];
                            for (let e = 0; e < S.length; e++) switch (S[e].base.type) {
                                case 1:
                                    u[0].push(S[e]);
                                    break;
                                case 2:
                                    u[1].push(S[e]);
                                    break;
                                case 4:
                                    u[2].push(S[e]);
                                    break;
                                case 6:
                                    u[3].push(S[e]);
                                    break;
                                case 7:
                                    u[4].push(S[e])
                            }
                            for (let o = 0; o < 5; o++) {
                                let l = !1,
                                    c = !1;
                                const h = u[o];
                                for (let u = 0; u < h.length; u++) {
                                    switch (o) {
                                        case 0:
                                            if (i.length > 0)
                                                for (let e = 0; e < i.length; e++) 1 === i[e].type && (c = !0, l = l || r(i[e].value, h[u].base.value));
                                            else
                                                for (let t = 0; t < this.certs[e].subject.typesAndValues.length; t++) "1.2.840.113549.1.9.1" !== this.certs[e].subject.typesAndValues[t].type && "0.9.2342.19200300.100.1.3" !== this.certs[e].subject.typesAndValues[t].type || (c = !0, l = l || r(this.certs[e].subject.typesAndValues[t].value.valueBlock.value, h[u].base.value));
                                            break;
                                        case 1:
                                            if (i.length > 0)
                                                for (let e = 0; e < i.length; e++) 2 === i[e].type && (c = !0, l = l || t(i[e].value, h[u].base.value));
                                            break;
                                        case 2:
                                            c = !0, l = n(this.certs[e].subject, h[u].base.value);
                                            break;
                                        case 3:
                                            if (i.length > 0)
                                                for (let e = 0; e < i.length; e++) 6 === i[e].type && (c = !0, l = l || s(i[e].value, h[u].base.value));
                                            break;
                                        case 4:
                                            if (i.length > 0)
                                                for (let e = 0; e < i.length; e++) 7 === i[e].type && (c = !0, l = l || a(i[e].value, h[u].base.value))
                                    }
                                    if (l) break
                                }
                                if (!1 === l && h.length > 0 && c) throw D.result = !1, D.resultCode = 41, D.resultMessage = 'Failed to meet "permitted sub-trees" name constraint', D
                            }
                            let h = !1;
                            for (let o = 0; o < k.length; o++) {
                                switch (k[o].base.type) {
                                    case 1:
                                        if (i.length >= 0)
                                            for (let e = 0; e < i.length; e++) 1 === i[e].type && (h = h || r(i[e].value, k[o].base.value));
                                        else
                                            for (let t = 0; t < this.certs[e].subject.typesAndValues.length; t++) "1.2.840.113549.1.9.1" !== this.certs[e].subject.typesAndValues[t].type && "0.9.2342.19200300.100.1.3" !== this.certs[e].subject.typesAndValues[t].type || (h = h || r(this.certs[e].subject.typesAndValues[t].value.valueBlock.value, k[o].base.value));
                                        break;
                                    case 2:
                                        if (i.length > 0)
                                            for (let e = 0; e < i.length; e++) 2 === i[e].type && (h = h || t(i[e].value, k[o].base.value));
                                        break;
                                    case 4:
                                        h = h || n(this.certs[e].subject, k[o].base.value);
                                        break;
                                    case 6:
                                        if (i.length > 0)
                                            for (let e = 0; e < i.length; e++) 6 === i[e].type && (h = h || s(i[e].value, k[o].base.value));
                                        break;
                                    case 7:
                                        if (i.length > 0)
                                            for (let e = 0; e < i.length; e++) 7 === i[e].type && (h = h || a(i[e].value, k[o].base.value))
                                }
                                if (h) break
                            }
                            if (!0 === h) throw D.result = !1, D.resultCode = 42, D.resultMessage = 'Failed to meet "excluded sub-trees" name constraint', D;
                            S = S.concat(o), k = k.concat(l)
                        }
                        return D
                    } catch (e) {
                        if (e instanceof Object) {
                            if ("resultMessage" in e) return e;
                            if ("message" in e) return {
                                result: !1,
                                resultCode: -1,
                                resultMessage: e.message
                            }
                        }
                        return {
                            result: !1,
                            resultCode: -1,
                            resultMessage: e
                        }
                    }
                }
            }
            class pt {
                constructor(e = {}) {
                    this.tbsResponseData = (0, a.getParametersValue)(e, "tbsResponseData", pt.defaultValues("tbsResponseData")), this.signatureAlgorithm = (0, a.getParametersValue)(e, "signatureAlgorithm", pt.defaultValues("signatureAlgorithm")), this.signature = (0, a.getParametersValue)(e, "signature", pt.defaultValues("signature")), "certs" in e && (this.certs = (0, a.getParametersValue)(e, "certs", pt.defaultValues("certs"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "tbsResponseData":
                            return new gt;
                        case "signatureAlgorithm":
                            return new n;
                        case "signature":
                            return new s.BitString;
                        case "certs":
                            return [];
                        default:
                            throw new Error(`Invalid member name for BasicOCSPResponse class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "type": {
                            let e = gt.compareWithDefault("tbs", t.tbs) && gt.compareWithDefault("responderID", t.responderID) && gt.compareWithDefault("producedAt", t.producedAt) && gt.compareWithDefault("responses", t.responses);
                            return "responseExtensions" in t && (e = e && gt.compareWithDefault("responseExtensions", t.responseExtensions)), e
                        }
                        case "signatureAlgorithm":
                            return "" === t.algorithmId && "algorithmParams" in t == !1;
                        case "signature":
                            return t.isEqual(pt.defaultValues(e));
                        case "certs":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for BasicOCSPResponse class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "BasicOCSPResponse",
                        value: [gt.schema(t.tbsResponseData || {
                            names: {
                                blockName: "BasicOCSPResponse.tbsResponseData"
                            }
                        }), n.schema(t.signatureAlgorithm || {
                            names: {
                                blockName: "BasicOCSPResponse.signatureAlgorithm"
                            }
                        }), new s.BitString({
                            name: t.signature || "BasicOCSPResponse.signature"
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Sequence({
                                value: [new s.Repeated({
                                    name: "BasicOCSPResponse.certs",
                                    value: Ae.schema(t.certs || {})
                                })]
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["BasicOCSPResponse.tbsResponseData", "BasicOCSPResponse.signatureAlgorithm", "BasicOCSPResponse.signature", "BasicOCSPResponse.certs"]);
                    const t = s.compareSchema(e, e, pt.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for BasicOCSPResponse");
                    this.tbsResponseData = new gt({
                        schema: t.result["BasicOCSPResponse.tbsResponseData"]
                    }), this.signatureAlgorithm = new n({
                        schema: t.result["BasicOCSPResponse.signatureAlgorithm"]
                    }), this.signature = t.result["BasicOCSPResponse.signature"], "BasicOCSPResponse.certs" in t.result && (this.certs = Array.from(t.result["BasicOCSPResponse.certs"], (e => new Ae({
                        schema: e
                    }))))
                }
                toSchema() {
                    const e = [];
                    return e.push(this.tbsResponseData.toSchema()), e.push(this.signatureAlgorithm.toSchema()), e.push(this.signature), "certs" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [new s.Sequence({
                            value: Array.from(this.certs, (e => e.toSchema()))
                        })]
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        tbsResponseData: this.tbsResponseData.toJSON(),
                        signatureAlgorithm: this.signatureAlgorithm.toJSON(),
                        signature: this.signature.toJSON()
                    };
                    return "certs" in this && (e.certs = Array.from(this.certs, (e => e.toJSON()))), e
                }
                getCertificateStatus(e, t) {
                    let r = Promise.resolve();
                    const s = {
                            isForCertificate: !1,
                            status: 2
                        },
                        a = {},
                        n = [],
                        i = [];
                    for (const r of this.tbsResponseData.responses) {
                        const s = E(r.certID.hashAlgorithm.algorithmId);
                        if ("name" in s == !1) return Promise.reject(`Wrong CertID hashing algorithm: ${r.certID.hashAlgorithm.algorithmId}`);
                        if (s.name in a == !1) {
                            a[s.name] = 1;
                            const r = new mt;
                            n.push(r), i.push(r.createForCertificate(e, {
                                hashAlgorithm: s.name,
                                issuerCertificate: t
                            }))
                        }
                    }
                    return r = r.then((() => Promise.all(i))), r = r.then((() => {
                        for (const e of this.tbsResponseData.responses)
                            for (const t of n)
                                if (e.certID.isEqual(t)) {
                                    s.isForCertificate = !0;
                                    try {
                                        switch (e.certStatus.idBlock.isConstructed) {
                                            case !0:
                                                1 === e.certStatus.idBlock.tagNumber && (s.status = 1);
                                                break;
                                            case !1:
                                                switch (e.certStatus.idBlock.tagNumber) {
                                                    case 0:
                                                        s.status = 0;
                                                        break;
                                                    case 2:
                                                        s.status = 2
                                                }
                                        }
                                    } catch (e) {}
                                    return s
                                } return s
                    })), r
                }
                sign(e, t = "SHA-1") {
                    if (void 0 === e) return Promise.reject("Need to provide a private key for signing");
                    let r, a = Promise.resolve();
                    const n = k();
                    return a = a.then((() => n.subtle.getSignatureParameters(e, t))), a = a.then((e => {
                        r = e.parameters, this.signatureAlgorithm = e.signatureAlgorithm
                    })), a = a.then((() => {
                        this.tbsResponseData.tbs = this.tbsResponseData.toSchema(!0).toBER(!1)
                    })), a = a.then((() => n.subtle.signWithPrivateKey(this.tbsResponseData.tbs, e, r))), a = a.then((e => {
                        this.signature = new s.BitString({
                            valueHex: e
                        })
                    })), a
                }
                verify(e = {}) {
                    let t = null,
                        r = -1,
                        n = Promise.resolve(),
                        i = [];
                    const o = this,
                        l = k();
                    if ("certs" in this == !1) return Promise.reject("No certificates attached to the BasicOCSPResponce");
                    "trustedCerts" in e && (i = e.trustedCerts);
                    const c = A();
                    if (void 0 === c) return Promise.reject("Unable to create WebCrypto object");
                    switch (!0) {
                        case this.tbsResponseData.responderID instanceof R:
                            n = n.then((() => {
                                for (const [e, t] of o.certs.entries())
                                    if (t.subject.isEqual(o.tbsResponseData.responderID)) {
                                        r = e;
                                        break
                                    }
                            }));
                            break;
                        case this.tbsResponseData.responderID instanceof s.OctetString:
                            n = n.then((() => Promise.all(Array.from(o.certs, (e => c.digest({
                                name: "sha-1"
                            }, new Uint8Array(e.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex))))).then((e => {
                                for (const [t] of o.certs.entries())
                                    if ((0, a.isEqualBuffer)(e[t], o.tbsResponseData.responderID.valueBlock.valueHex)) {
                                        r = t;
                                        break
                                    }
                            }))));
                            break;
                        default:
                            return Promise.reject("Wrong value for responderID")
                    }
                    return n = n.then((() => -1 === r ? Promise.reject("Correct certificate was not found in OCSP response") : (t = this.certs[r], Promise.all(Array.from(o.certs, (e => function(e) {
                        if (!0 === e.issuer.isEqual(t.issuer) && !0 === e.serialNumber.isEqual(t.serialNumber)) return null;
                        let r = !1;
                        for (const t of e.extensions) "2.5.29.19" === t.extnID && "cA" in t.parsedValue && !0 === t.parsedValue.cA && (r = !0);
                        return r ? e : null
                    }(e)))).then((e => {
                        const r = [];
                        r.push(t);
                        for (const t of e) null !== t && r.push(t);
                        return new dt({
                            certs: r,
                            trustedCerts: i
                        }).verify().then((e => !0 === e.result ? Promise.resolve() : Promise.reject("Validation of signer's certificate failed")), (e => Promise.reject(`Validation of signer's certificate failed with error: ${e instanceof Object?e.resultMessage:e}`)))
                    }), (e => Promise.reject(`Error during checking certificates for CA flag: ${e}`)))))), n = n.then((() => l.subtle.verifyWithPublicKey(this.tbsResponseData.tbs, this.signature, this.certs[r].subjectPublicKeyInfo, this.signatureAlgorithm))), n
                }
            }

            function yt(e = {}) {
                const t = (0, a.getParametersValue)(e, "names", {});
                return new s.Sequence({
                    name: t.CertificationRequestInfo || "CertificationRequestInfo",
                    value: [new s.Integer({
                        name: t.CertificationRequestInfoVersion || "CertificationRequestInfo.version"
                    }), R.schema(t.subject || {
                        names: {
                            blockName: "CertificationRequestInfo.subject"
                        }
                    }), l.schema({
                        names: {
                            blockName: "CertificationRequestInfo.subjectPublicKeyInfo"
                        }
                    }), new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [new s.Repeated({
                            optional: !0,
                            name: t.CertificationRequestInfoAttributes || "CertificationRequestInfo.attributes",
                            value: c.schema(t.attributes || {})
                        })]
                    })]
                })
            }
            class bt {
                constructor(e = {}) {
                    this.tbs = (0, a.getParametersValue)(e, "tbs", bt.defaultValues("tbs")), this.version = (0, a.getParametersValue)(e, "version", bt.defaultValues("version")), this.subject = (0, a.getParametersValue)(e, "subject", bt.defaultValues("subject")), this.subjectPublicKeyInfo = (0, a.getParametersValue)(e, "subjectPublicKeyInfo", bt.defaultValues("subjectPublicKeyInfo")), "attributes" in e && (this.attributes = (0, a.getParametersValue)(e, "attributes", bt.defaultValues("attributes"))), this.signatureAlgorithm = (0, a.getParametersValue)(e, "signatureAlgorithm", bt.defaultValues("signatureAlgorithm")), this.signatureValue = (0, a.getParametersValue)(e, "signatureValue", bt.defaultValues("signatureValue")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "tbs":
                            return new ArrayBuffer(0);
                        case "version":
                            return 0;
                        case "subject":
                            return new R;
                        case "subjectPublicKeyInfo":
                            return new l;
                        case "attributes":
                            return [];
                        case "signatureAlgorithm":
                            return new n;
                        case "signatureValue":
                            return new s.BitString;
                        default:
                            throw new Error(`Invalid member name for CertificationRequest class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        value: [yt(t.certificationRequestInfo || {}), new s.Sequence({
                            name: t.signatureAlgorithm || "signatureAlgorithm",
                            value: [new s.ObjectIdentifier, new s.Any({
                                optional: !0
                            })]
                        }), new s.BitString({
                            name: t.signatureValue || "signatureValue"
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["CertificationRequestInfo", "CertificationRequestInfo.version", "CertificationRequestInfo.subject", "CertificationRequestInfo.subjectPublicKeyInfo", "CertificationRequestInfo.attributes", "signatureAlgorithm", "signatureValue"]);
                    const t = s.compareSchema(e, e, bt.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for CertificationRequest");
                    this.tbs = t.result.CertificationRequestInfo.valueBeforeDecode, this.version = t.result["CertificationRequestInfo.version"].valueBlock.valueDec, this.subject = new R({
                        schema: t.result["CertificationRequestInfo.subject"]
                    }), this.subjectPublicKeyInfo = new l({
                        schema: t.result["CertificationRequestInfo.subjectPublicKeyInfo"]
                    }), "CertificationRequestInfo.attributes" in t.result && (this.attributes = Array.from(t.result["CertificationRequestInfo.attributes"], (e => new c({
                        schema: e
                    })))), this.signatureAlgorithm = new n({
                        schema: t.result.signatureAlgorithm
                    }), this.signatureValue = t.result.signatureValue
                }
                encodeTBS() {
                    const e = [new s.Integer({
                        value: this.version
                    }), this.subject.toSchema(), this.subjectPublicKeyInfo.toSchema()];
                    return "attributes" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: Array.from(this.attributes, (e => e.toSchema()))
                    })), new s.Sequence({
                        value: e
                    })
                }
                toSchema(e = !1) {
                    let t;
                    if (!1 === e) {
                        if (0 === this.tbs.byteLength) return bt.schema();
                        t = s.fromBER(this.tbs).result
                    } else t = this.encodeTBS();
                    return new s.Sequence({
                        value: [t, this.signatureAlgorithm.toSchema(), this.signatureValue]
                    })
                }
                toJSON() {
                    const e = {
                        tbs: (0, a.bufferToHexCodes)(this.tbs, 0, this.tbs.byteLength),
                        version: this.version,
                        subject: this.subject.toJSON(),
                        subjectPublicKeyInfo: this.subjectPublicKeyInfo.toJSON(),
                        signatureAlgorithm: this.signatureAlgorithm.toJSON(),
                        signatureValue: this.signatureValue.toJSON()
                    };
                    return "attributes" in this && (e.attributes = Array.from(this.attributes, (e => e.toJSON()))), e
                }
                sign(e, t = "SHA-1") {
                    if (void 0 === e) return Promise.reject("Need to provide a private key for signing");
                    let r, a = Promise.resolve();
                    const n = k();
                    return a = a.then((() => n.subtle.getSignatureParameters(e, t))), a = a.then((e => {
                        r = e.parameters, this.signatureAlgorithm = e.signatureAlgorithm
                    })), a = a.then((() => {
                        this.tbs = this.encodeTBS().toBER(!1)
                    })), a = a.then((() => n.subtle.signWithPrivateKey(this.tbs, e, r))), a = a.then((e => {
                        this.signatureValue = new s.BitString({
                            valueHex: e
                        })
                    })), a
                }
                verify() {
                    return k().subtle.verifyWithPublicKey(this.tbs, this.signatureValue, this.subjectPublicKeyInfo, this.signatureAlgorithm)
                }
                getPublicKey(e = null) {
                    return k().getPublicKey(this.subjectPublicKeyInfo, this.signatureAlgorithm, e)
                }
            }
            class vt {
                constructor(e = {}) {
                    this.digestAlgorithm = (0, a.getParametersValue)(e, "digestAlgorithm", vt.defaultValues("digestAlgorithm")), this.digest = (0, a.getParametersValue)(e, "digest", vt.defaultValues("digest")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "digestAlgorithm":
                            return new n;
                        case "digest":
                            return new s.OctetString;
                        default:
                            throw new Error(`Invalid member name for DigestInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "digestAlgorithm":
                            return n.compareWithDefault("algorithmId", t.algorithmId) && "algorithmParams" in t == !1;
                        case "digest":
                            return t.isEqual(vt.defaultValues(e));
                        default:
                            throw new Error(`Invalid member name for DigestInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [n.schema(t.digestAlgorithm || {
                            names: {
                                blockName: "digestAlgorithm"
                            }
                        }), new s.OctetString({
                            name: t.digest || "digest"
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["digestAlgorithm", "digest"]);
                    const t = s.compareSchema(e, e, vt.schema({
                        names: {
                            digestAlgorithm: {
                                names: {
                                    blockName: "digestAlgorithm"
                                }
                            },
                            digest: "digest"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for DigestInfo");
                    this.digestAlgorithm = new n({
                        schema: t.result.digestAlgorithm
                    }), this.digest = t.result.digest
                }
                toSchema() {
                    return new s.Sequence({
                        value: [this.digestAlgorithm.toSchema(), this.digest]
                    })
                }
                toJSON() {
                    return {
                        digestAlgorithm: this.digestAlgorithm.toJSON(),
                        digest: this.digest.toJSON()
                    }
                }
            }
            class wt {
                constructor(e = {}) {
                    if (this.eContentType = (0, a.getParametersValue)(e, "eContentType", wt.defaultValues("eContentType")), "eContent" in e && (this.eContent = (0, a.getParametersValue)(e, "eContent", wt.defaultValues("eContent")), 1 === this.eContent.idBlock.tagClass && 4 === this.eContent.idBlock.tagNumber && !1 === this.eContent.idBlock.isConstructed)) {
                        const e = new s.OctetString({
                            idBlock: {
                                isConstructed: !0
                            },
                            isConstructed: !0
                        });
                        let t = 0,
                            r = this.eContent.valueBlock.valueHex.byteLength;
                        for (; r > 0;) {
                            const a = new Uint8Array(this.eContent.valueBlock.valueHex, t, t + 65536 > this.eContent.valueBlock.valueHex.byteLength ? this.eContent.valueBlock.valueHex.byteLength - t : 65536),
                                n = new ArrayBuffer(a.length),
                                i = new Uint8Array(n);
                            for (let e = 0; e < i.length; e++) i[e] = a[e];
                            e.valueBlock.value.push(new s.OctetString({
                                valueHex: n
                            })), r -= a.length, t += a.length
                        }
                        this.eContent = e
                    }
                    "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "eContentType":
                            return "";
                        case "eContent":
                            return new s.OctetString;
                        default:
                            throw new Error(`Invalid member name for EncapsulatedContentInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "eContentType":
                            return "" === t;
                        case "eContent":
                            return 1 === t.idBlock.tagClass && 4 === t.idBlock.tagNumber && t.isEqual(wt.defaultValues("eContent"));
                        default:
                            throw new Error(`Invalid member name for EncapsulatedContentInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.eContentType || ""
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Any({
                                name: t.eContent || ""
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["eContentType", "eContent"]);
                    const t = s.compareSchema(e, e, wt.schema({
                        names: {
                            eContentType: "eContentType",
                            eContent: "eContent"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for EncapsulatedContentInfo");
                    this.eContentType = t.result.eContentType.valueBlock.toString(), "eContent" in t.result && (this.eContent = t.result.eContent)
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.ObjectIdentifier({
                        value: this.eContentType
                    })), "eContent" in this && !1 === wt.compareWithDefault("eContent", this.eContent) && e.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [this.eContent]
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        eContentType: this.eContentType
                    };
                    return "eContent" in this && !1 === wt.compareWithDefault("eContent", this.eContent) && (e.eContent = this.eContent.toJSON()), e
                }
            }
            class St extends f {
                constructor(e = {}) {
                    super(e)
                }
            }
            class kt {
                constructor(e = {}) {
                    this.mac = (0, a.getParametersValue)(e, "mac", kt.defaultValues("mac")), this.macSalt = (0, a.getParametersValue)(e, "macSalt", kt.defaultValues("macSalt")), "iterations" in e && (this.iterations = (0, a.getParametersValue)(e, "iterations", kt.defaultValues("iterations"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "mac":
                            return new vt;
                        case "macSalt":
                            return new s.OctetString;
                        case "iterations":
                            return 1;
                        default:
                            throw new Error(`Invalid member name for MacData class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "mac":
                            return vt.compareWithDefault("digestAlgorithm", t.digestAlgorithm) && vt.compareWithDefault("digest", t.digest);
                        case "macSalt":
                            return t.isEqual(kt.defaultValues(e));
                        case "iterations":
                            return t === kt.defaultValues(e);
                        default:
                            throw new Error(`Invalid member name for MacData class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        optional: t.optional || !0,
                        value: [vt.schema(t.mac || {
                            names: {
                                blockName: "mac"
                            }
                        }), new s.OctetString({
                            name: t.macSalt || "macSalt"
                        }), new s.Integer({
                            optional: !0,
                            name: t.iterations || "iterations"
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["mac", "macSalt", "iterations"]);
                    const t = s.compareSchema(e, e, kt.schema({
                        names: {
                            mac: {
                                names: {
                                    blockName: "mac"
                                }
                            },
                            macSalt: "macSalt",
                            iterations: "iterations"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for MacData");
                    this.mac = new vt({
                        schema: t.result.mac
                    }), this.macSalt = t.result.macSalt, "iterations" in t.result && (this.iterations = t.result.iterations.valueBlock.valueDec)
                }
                toSchema() {
                    const e = [this.mac.toSchema(), this.macSalt];
                    return "iterations" in this && e.push(new s.Integer({
                        value: this.iterations
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        mac: this.mac.toJSON(),
                        macSalt: this.macSalt.toJSON()
                    };
                    return "iterations" in this && (e.iterations = this.iterations.toJSON()), e
                }
            }
            class At {
                constructor(e = {}) {
                    this.hashAlgorithm = (0, a.getParametersValue)(e, "hashAlgorithm", At.defaultValues("hashAlgorithm")), this.hashedMessage = (0, a.getParametersValue)(e, "hashedMessage", At.defaultValues("hashedMessage")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "hashAlgorithm":
                            return new n;
                        case "hashedMessage":
                            return new s.OctetString;
                        default:
                            throw new Error(`Invalid member name for MessageImprint class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "hashAlgorithm":
                            return "" === t.algorithmId && "algorithmParams" in t == !1;
                        case "hashedMessage":
                            return 0 === t.isEqual(At.defaultValues(e));
                        default:
                            throw new Error(`Invalid member name for MessageImprint class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [n.schema(t.hashAlgorithm || {}), new s.OctetString({
                            name: t.hashedMessage || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["hashAlgorithm", "hashedMessage"]);
                    const t = s.compareSchema(e, e, At.schema({
                        names: {
                            hashAlgorithm: {
                                names: {
                                    blockName: "hashAlgorithm"
                                }
                            },
                            hashedMessage: "hashedMessage"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for MessageImprint");
                    this.hashAlgorithm = new n({
                        schema: t.result.hashAlgorithm
                    }), this.hashedMessage = t.result.hashedMessage
                }
                toSchema() {
                    return new s.Sequence({
                        value: [this.hashAlgorithm.toSchema(), this.hashedMessage]
                    })
                }
                toJSON() {
                    return {
                        hashAlgorithm: this.hashAlgorithm.toJSON(),
                        hashedMessage: this.hashedMessage.toJSON()
                    }
                }
            }
            class Ct {
                constructor(e = {}) {
                    this.reqCert = (0, a.getParametersValue)(e, "reqCert", Ct.defaultValues("reqCert")), "singleRequestExtensions" in e && (this.singleRequestExtensions = (0, a.getParametersValue)(e, "singleRequestExtensions", Ct.defaultValues("singleRequestExtensions"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "reqCert":
                            return new mt;
                        case "singleRequestExtensions":
                            return [];
                        default:
                            throw new Error(`Invalid member name for Request class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "reqCert":
                            return t.isEqual(Ct.defaultValues(e));
                        case "singleRequestExtensions":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for Request class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [mt.schema(t.reqCert || {}), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [we.schema(t.extensions || {
                                names: {
                                    blockName: t.singleRequestExtensions || ""
                                }
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["reqCert", "singleRequestExtensions"]);
                    const t = s.compareSchema(e, e, Ct.schema({
                        names: {
                            reqCert: {
                                names: {
                                    blockName: "reqCert"
                                }
                            },
                            singleRequestExtensions: {
                                names: {
                                    blockName: "singleRequestExtensions"
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for Request");
                    this.reqCert = new mt({
                        schema: t.result.reqCert
                    }), "singleRequestExtensions" in t.result && (this.singleRequestExtensions = Array.from(t.result.singleRequestExtensions.valueBlock.value, (e => new we({
                        schema: e
                    }))))
                }
                toSchema() {
                    const e = [];
                    return e.push(this.reqCert.toSchema()), "singleRequestExtensions" in this && e.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [new s.Sequence({
                            value: Array.from(this.singleRequestExtensions, (e => e.toSchema()))
                        })]
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        reqCert: this.reqCert.toJSON()
                    };
                    return "singleRequestExtensions" in this && (e.singleRequestExtensions = Array.from(this.singleRequestExtensions, (e => e.toJSON()))), e
                }
            }
            class It {
                constructor(e = {}) {
                    this.tbs = (0, a.getParametersValue)(e, "tbs", It.defaultValues("tbs")), "version" in e && (this.version = (0, a.getParametersValue)(e, "version", It.defaultValues("version"))), "requestorName" in e && (this.requestorName = (0, a.getParametersValue)(e, "requestorName", It.defaultValues("requestorName"))), this.requestList = (0, a.getParametersValue)(e, "requestList", It.defaultValues("requestList")), "requestExtensions" in e && (this.requestExtensions = (0, a.getParametersValue)(e, "requestExtensions", It.defaultValues("requestExtensions"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "tbs":
                            return new ArrayBuffer(0);
                        case "version":
                            return 0;
                        case "requestorName":
                            return new L;
                        case "requestList":
                        case "requestExtensions":
                            return [];
                        default:
                            throw new Error(`Invalid member name for TBSRequest class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "tbs":
                            return 0 === t.byteLength;
                        case "version":
                            return t === It.defaultValues(e);
                        case "requestorName":
                            return t.type === L.defaultValues("type") && 0 === Object.keys(t.value).length;
                        case "requestList":
                        case "requestExtensions":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for TBSRequest class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "TBSRequest",
                        value: [new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Integer({
                                name: t.TBSRequestVersion || "TBSRequest.version"
                            })]
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [L.schema(t.requestorName || {
                                names: {
                                    blockName: "TBSRequest.requestorName"
                                }
                            })]
                        }), new s.Sequence({
                            name: t.requestList || "TBSRequest.requestList",
                            value: [new s.Repeated({
                                name: t.requests || "TBSRequest.requests",
                                value: Ct.schema(t.requestNames || {})
                            })]
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            },
                            value: [Se.schema(t.extensions || {
                                names: {
                                    blockName: t.requestExtensions || "TBSRequest.requestExtensions"
                                }
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["TBSRequest", "TBSRequest.version", "TBSRequest.requestorName", "TBSRequest.requests", "TBSRequest.requestExtensions"]);
                    const t = s.compareSchema(e, e, It.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for TBSRequest");
                    this.tbs = t.result.TBSRequest.valueBeforeDecode, "TBSRequest.version" in t.result && (this.version = t.result["TBSRequest.version"].valueBlock.valueDec), "TBSRequest.requestorName" in t.result && (this.requestorName = new L({
                        schema: t.result["TBSRequest.requestorName"]
                    })), this.requestList = Array.from(t.result["TBSRequest.requests"], (e => new Ct({
                        schema: e
                    }))), "TBSRequest.requestExtensions" in t.result && (this.requestExtensions = Array.from(t.result["TBSRequest.requestExtensions"].valueBlock.value, (e => new we({
                        schema: e
                    }))))
                }
                toSchema(e = !1) {
                    let t;
                    if (!1 === e) {
                        if (0 === this.tbs.byteLength) return It.schema();
                        t = s.fromBER(this.tbs).result
                    } else {
                        const e = [];
                        "version" in this && e.push(new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Integer({
                                value: this.version
                            })]
                        })), "requestorName" in this && e.push(new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [this.requestorName.toSchema()]
                        })), e.push(new s.Sequence({
                            value: Array.from(this.requestList, (e => e.toSchema()))
                        })), "requestExtensions" in this && e.push(new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 2
                            },
                            value: [new s.Sequence({
                                value: Array.from(this.requestExtensions, (e => e.toSchema()))
                            })]
                        })), t = new s.Sequence({
                            value: e
                        })
                    }
                    return t
                }
                toJSON() {
                    const e = {};
                    return "version" in this && (e.version = this.version), "requestorName" in this && (e.requestorName = this.requestorName.toJSON()), e.requestList = Array.from(this.requestList, (e => e.toJSON())), "requestExtensions" in this && (e.requestExtensions = Array.from(this.requestExtensions, (e => e.toJSON()))), e
                }
            }
            class Pt {
                constructor(e = {}) {
                    this.signatureAlgorithm = (0, a.getParametersValue)(e, "signatureAlgorithm", Pt.defaultValues("signatureAlgorithm")), this.signature = (0, a.getParametersValue)(e, "signature", Pt.defaultValues("signature")), "certs" in e && (this.certs = (0, a.getParametersValue)(e, "certs", Pt.defaultValues("certs"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "signatureAlgorithm":
                            return new n;
                        case "signature":
                            return new s.BitString;
                        case "certs":
                            return [];
                        default:
                            throw new Error(`Invalid member name for Signature class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "signatureAlgorithm":
                            return "" === t.algorithmId && "algorithmParams" in t == !1;
                        case "signature":
                            return t.isEqual(Pt.defaultValues(e));
                        case "certs":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for Signature class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [n.schema(t.signatureAlgorithm || {}), new s.BitString({
                            name: t.signature || ""
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Sequence({
                                value: [new s.Repeated({
                                    name: t.certs || "",
                                    value: Ae.schema(t.certs || {})
                                })]
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["signatureAlgorithm", "signature", "certs"]);
                    const t = s.compareSchema(e, e, Pt.schema({
                        names: {
                            signatureAlgorithm: {
                                names: {
                                    blockName: "signatureAlgorithm"
                                }
                            },
                            signature: "signature",
                            certs: "certs"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for Signature");
                    this.signatureAlgorithm = new n({
                        schema: t.result.signatureAlgorithm
                    }), this.signature = t.result.signature, "certs" in t.result && (this.certs = Array.from(t.result.certs, (e => new Ae({
                        schema: e
                    }))))
                }
                toSchema() {
                    const e = [];
                    return e.push(this.signatureAlgorithm.toSchema()), e.push(this.signature), "certs" in this && e.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [new s.Sequence({
                            value: Array.from(this.certs, (e => e.toSchema()))
                        })]
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        signatureAlgorithm: this.signatureAlgorithm.toJSON(),
                        signature: this.signature.toJSON()
                    };
                    return "certs" in this && (e.certs = Array.from(this.certs, (e => e.toJSON()))), e
                }
            }
            class Bt {
                constructor(e = {}) {
                    this.tbsRequest = (0, a.getParametersValue)(e, "tbsRequest", Bt.defaultValues("tbsRequest")), "optionalSignature" in e && (this.optionalSignature = (0, a.getParametersValue)(e, "optionalSignature", Bt.defaultValues("optionalSignature"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "tbsRequest":
                            return new It;
                        case "optionalSignature":
                            return new Pt;
                        default:
                            throw new Error(`Invalid member name for OCSPRequest class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "tbsRequest":
                            return It.compareWithDefault("tbs", t.tbs) && It.compareWithDefault("version", t.version) && It.compareWithDefault("requestorName", t.requestorName) && It.compareWithDefault("requestList", t.requestList) && It.compareWithDefault("requestExtensions", t.requestExtensions);
                        case "optionalSignature":
                            return Pt.compareWithDefault("signatureAlgorithm", t.signatureAlgorithm) && Pt.compareWithDefault("signature", t.signature) && Pt.compareWithDefault("certs", t.certs);
                        default:
                            throw new Error(`Invalid member name for OCSPRequest class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "OCSPRequest",
                        value: [It.schema(t.tbsRequest || {
                            names: {
                                blockName: "tbsRequest"
                            }
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [Pt.schema(t.optionalSignature || {
                                names: {
                                    blockName: "optionalSignature"
                                }
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["tbsRequest", "optionalSignature"]);
                    const t = s.compareSchema(e, e, Bt.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for OCSPRequest");
                    this.tbsRequest = new It({
                        schema: t.result.tbsRequest
                    }), "optionalSignature" in t.result && (this.optionalSignature = new Pt({
                        schema: t.result.optionalSignature
                    }))
                }
                toSchema(e = !1) {
                    const t = [];
                    return t.push(this.tbsRequest.toSchema(e)), "optionalSignature" in this && t.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [this.optionalSignature.toSchema()]
                    })), new s.Sequence({
                        value: t
                    })
                }
                toJSON() {
                    const e = {
                        tbsRequest: this.tbsRequest.toJSON()
                    };
                    return "optionalSignature" in this && (e.optionalSignature = this.optionalSignature.toJSON()), e
                }
                createForCertificate(e, t) {
                    let r = Promise.resolve();
                    const s = new mt;
                    return r = r.then((() => s.createForCertificate(e, t))), r = r.then((() => {
                        this.tbsRequest = new It({
                            requestList: [new Ct({
                                reqCert: s
                            })]
                        })
                    }), (e => Promise.reject(e))), r
                }
                sign(e, t = "SHA-1") {
                    if (void 0 === e) return Promise.reject("Need to provide a private key for signing");
                    if ("optionalSignature" in this == !1) return Promise.reject('Need to create "optionalSignature" field before signing');
                    let r, a, n = Promise.resolve();
                    const i = k();
                    return n = n.then((() => i.subtle.getSignatureParameters(e, t))), n = n.then((e => {
                        r = e.parameters, this.optionalSignature.signatureAlgorithm = e.signatureAlgorithm
                    })), n = n.then((() => {
                        a = this.tbsRequest.toSchema(!0).toBER(!1)
                    })), n = n.then((() => i.subtle.signWithPrivateKey(a, e, r))), n = n.then((e => {
                        this.optionalSignature.signature = new s.BitString({
                            valueHex: e
                        })
                    })), n
                }
                verify() {}
            }
            class Vt {
                constructor(e = {}) {
                    this.responseType = (0, a.getParametersValue)(e, "responseType", Vt.defaultValues("responseType")), this.response = (0, a.getParametersValue)(e, "response", Vt.defaultValues("response")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "responseType":
                            return "";
                        case "response":
                            return new s.OctetString;
                        default:
                            throw new Error(`Invalid member name for ResponseBytes class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "responseType":
                            return "" === t;
                        case "response":
                            return t.isEqual(Vt.defaultValues(e));
                        default:
                            throw new Error(`Invalid member name for ResponseBytes class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.ObjectIdentifier({
                            name: t.responseType || ""
                        }), new s.OctetString({
                            name: t.response || ""
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["responseType", "response"]);
                    const t = s.compareSchema(e, e, Vt.schema({
                        names: {
                            responseType: "responseType",
                            response: "response"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for ResponseBytes");
                    this.responseType = t.result.responseType.valueBlock.toString(), this.response = t.result.response
                }
                toSchema() {
                    return new s.Sequence({
                        value: [new s.ObjectIdentifier({
                            value: this.responseType
                        }), this.response]
                    })
                }
                toJSON() {
                    return {
                        responseType: this.responseType,
                        response: this.response.toJSON()
                    }
                }
            }
            class Nt {
                constructor(e = {}) {
                    this.responseStatus = (0, a.getParametersValue)(e, "responseStatus", Nt.defaultValues("responseStatus")), "responseBytes" in e && (this.responseBytes = (0, a.getParametersValue)(e, "responseBytes", Nt.defaultValues("responseBytes"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "responseStatus":
                            return new s.Enumerated;
                        case "responseBytes":
                            return new Vt;
                        default:
                            throw new Error(`Invalid member name for OCSPResponse class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "responseStatus":
                            return t.isEqual(Nt.defaultValues(e));
                        case "responseBytes":
                            return Vt.compareWithDefault("responseType", t.responseType) && Vt.compareWithDefault("response", t.response);
                        default:
                            throw new Error(`Invalid member name for OCSPResponse class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "OCSPResponse",
                        value: [new s.Enumerated({
                            name: t.responseStatus || "responseStatus"
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [Vt.schema(t.responseBytes || {
                                names: {
                                    blockName: "responseBytes"
                                }
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["responseStatus", "responseBytes"]);
                    const t = s.compareSchema(e, e, Nt.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for OCSPResponse");
                    this.responseStatus = t.result.responseStatus, "responseBytes" in t.result && (this.responseBytes = new Vt({
                        schema: t.result.responseBytes
                    }))
                }
                toSchema() {
                    const e = [];
                    return e.push(this.responseStatus), "responseBytes" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [this.responseBytes.toSchema()]
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        responseStatus: this.responseStatus.toJSON()
                    };
                    return "responseBytes" in this && (e.responseBytes = this.responseBytes.toJSON()), e
                }
                getCertificateStatus(e, t) {
                    let r;
                    const a = {
                        isForCertificate: !1,
                        status: 2
                    };
                    if ("responseBytes" in this == !1) return a;
                    if ("1.3.6.1.5.5.7.48.1.1" !== this.responseBytes.responseType) return a;
                    try {
                        const e = s.fromBER(this.responseBytes.response.valueBlock.valueHex);
                        r = new pt({
                            schema: e.result
                        })
                    } catch (e) {
                        return a
                    }
                    return r.getCertificateStatus(e, t)
                }
                sign(e, t) {
                    if ("1.3.6.1.5.5.7.48.1.1" === this.responseBytes.responseType) {
                        const r = s.fromBER(this.responseBytes.response.valueBlock.valueHex);
                        return new pt({
                            schema: r.result
                        }).sign(e, t)
                    }
                    return Promise.reject(`Unknown ResponseBytes type: ${this.responseBytes.responseType}`)
                }
                verify(e = null) {
                    if ("responseBytes" in this == !1) return Promise.reject("Empty ResponseBytes field");
                    if ("1.3.6.1.5.5.7.48.1.1" === this.responseBytes.responseType) {
                        const t = s.fromBER(this.responseBytes.response.valueBlock.valueHex),
                            r = new pt({
                                schema: t.result
                            });
                        return null !== e && ("certs" in r == !1 && (r.certs = []), r.certs.push(e)), r.verify()
                    }
                    return Promise.reject(`Unknown ResponseBytes type: ${this.responseBytes.responseType}`)
                }
            }
            class Et {
                constructor(e = {}) {
                    this.type = (0, a.getParametersValue)(e, "type", Et.defaultValues("type")), this.attributes = (0, a.getParametersValue)(e, "attributes", Et.defaultValues("attributes")), this.encodedValue = (0, a.getParametersValue)(e, "encodedValue", Et.defaultValues("encodedValue")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "type":
                            return -1;
                        case "attributes":
                            return [];
                        case "encodedValue":
                            return new ArrayBuffer(0);
                        default:
                            throw new Error(`Invalid member name for SignedAndUnsignedAttributes class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "type":
                            return t === Et.defaultValues("type");
                        case "attributes":
                            return 0 === t.length;
                        case "encodedValue":
                            return 0 === t.byteLength;
                        default:
                            throw new Error(`Invalid member name for SignedAndUnsignedAttributes class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Constructed({
                        name: t.blockName || "",
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: t.tagNumber
                        },
                        value: [new s.Repeated({
                            name: t.attributes || "",
                            value: c.schema()
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["attributes"]);
                    const t = s.compareSchema(e, e, Et.schema({
                        names: {
                            tagNumber: this.type,
                            attributes: "attributes"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for SignedAndUnsignedAttributes");
                    this.type = t.result.idBlock.tagNumber, this.encodedValue = t.result.valueBeforeDecode;
                    if (new Uint8Array(this.encodedValue)[0] = 49, "attributes" in t.result != !1) this.attributes = Array.from(t.result.attributes, (e => new c({
                        schema: e
                    })));
                    else if (0 === this.type) throw new Error("Wrong structure of SignedUnsignedAttributes")
                }
                toSchema() {
                    if (Et.compareWithDefault("type", this.type) || Et.compareWithDefault("attributes", this.attributes)) throw new Error('Incorrectly initialized "SignedAndUnsignedAttributes" class');
                    return new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: this.type
                        },
                        value: Array.from(this.attributes, (e => e.toSchema()))
                    })
                }
                toJSON() {
                    if (Et.compareWithDefault("type", this.type) || Et.compareWithDefault("attributes", this.attributes)) throw new Error('Incorrectly initialized "SignedAndUnsignedAttributes" class');
                    return {
                        type: this.type,
                        attributes: Array.from(this.attributes, (e => e.toJSON()))
                    }
                }
            }
            class xt {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", xt.defaultValues("version")), this.sid = (0, a.getParametersValue)(e, "sid", xt.defaultValues("sid")), this.digestAlgorithm = (0, a.getParametersValue)(e, "digestAlgorithm", xt.defaultValues("digestAlgorithm")), "signedAttrs" in e && (this.signedAttrs = (0, a.getParametersValue)(e, "signedAttrs", xt.defaultValues("signedAttrs"))), this.signatureAlgorithm = (0, a.getParametersValue)(e, "signatureAlgorithm", xt.defaultValues("signatureAlgorithm")), this.signature = (0, a.getParametersValue)(e, "signature", xt.defaultValues("signature")), "unsignedAttrs" in e && (this.unsignedAttrs = (0, a.getParametersValue)(e, "unsignedAttrs", xt.defaultValues("unsignedAttrs"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 0;
                        case "sid":
                            return new s.Any;
                        case "digestAlgorithm":
                            return new n;
                        case "signedAttrs":
                            return new Et({
                                type: 0
                            });
                        case "signatureAlgorithm":
                            return new n;
                        case "signature":
                            return new s.OctetString;
                        case "unsignedAttrs":
                            return new Et({
                                type: 1
                            });
                        default:
                            throw new Error(`Invalid member name for SignerInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "version":
                            return xt.defaultValues("version") === t;
                        case "sid":
                            return t instanceof s.Any;
                        case "digestAlgorithm":
                            return t instanceof n != !1 && t.isEqual(xt.defaultValues("digestAlgorithm"));
                        case "signedAttrs":
                            return Et.compareWithDefault("type", t.type) && Et.compareWithDefault("attributes", t.attributes) && Et.compareWithDefault("encodedValue", t.encodedValue);
                        case "signatureAlgorithm":
                            return t instanceof n != !1 && t.isEqual(xt.defaultValues("signatureAlgorithm"));
                        case "signature":
                        case "unsignedAttrs":
                            return Et.compareWithDefault("type", t.type) && Et.compareWithDefault("attributes", t.attributes) && Et.compareWithDefault("encodedValue", t.encodedValue);
                        default:
                            throw new Error(`Invalid member name for SignerInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: "SignerInfo",
                        value: [new s.Integer({
                            name: t.version || "SignerInfo.version"
                        }), new s.Choice({
                            value: [Fe.schema(t.sid || {
                                names: {
                                    blockName: "SignerInfo.sid"
                                }
                            }), new s.Choice({
                                value: [new s.Constructed({
                                    optional: !0,
                                    name: t.sid || "SignerInfo.sid",
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: 0
                                    },
                                    value: [new s.OctetString]
                                }), new s.Primitive({
                                    optional: !0,
                                    name: t.sid || "SignerInfo.sid",
                                    idBlock: {
                                        tagClass: 3,
                                        tagNumber: 0
                                    },
                                    value: [new s.OctetString]
                                })]
                            })]
                        }), n.schema(t.digestAlgorithm || {
                            names: {
                                blockName: "SignerInfo.digestAlgorithm"
                            }
                        }), Et.schema(t.signedAttrs || {
                            names: {
                                blockName: "SignerInfo.signedAttrs",
                                tagNumber: 0
                            }
                        }), n.schema(t.signatureAlgorithm || {
                            names: {
                                blockName: "SignerInfo.signatureAlgorithm"
                            }
                        }), new s.OctetString({
                            name: t.signature || "SignerInfo.signature"
                        }), Et.schema(t.unsignedAttrs || {
                            names: {
                                blockName: "SignerInfo.unsignedAttrs",
                                tagNumber: 1
                            }
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["SignerInfo.version", "SignerInfo.sid", "SignerInfo.digestAlgorithm", "SignerInfo.signedAttrs", "SignerInfo.signatureAlgorithm", "SignerInfo.signature", "SignerInfo.unsignedAttrs"]);
                    const t = s.compareSchema(e, e, xt.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for SignerInfo");
                    this.version = t.result["SignerInfo.version"].valueBlock.valueDec;
                    const r = t.result["SignerInfo.sid"];
                    1 === r.idBlock.tagClass ? this.sid = new Fe({
                        schema: r
                    }) : this.sid = r, this.digestAlgorithm = new n({
                        schema: t.result["SignerInfo.digestAlgorithm"]
                    }), "SignerInfo.signedAttrs" in t.result && (this.signedAttrs = new Et({
                        type: 0,
                        schema: t.result["SignerInfo.signedAttrs"]
                    })), this.signatureAlgorithm = new n({
                        schema: t.result["SignerInfo.signatureAlgorithm"]
                    }), this.signature = t.result["SignerInfo.signature"], "SignerInfo.unsignedAttrs" in t.result && (this.unsignedAttrs = new Et({
                        type: 1,
                        schema: t.result["SignerInfo.unsignedAttrs"]
                    }))
                }
                toSchema() {
                    if (xt.compareWithDefault("sid", this.sid)) throw new Error('Incorrectly initialized "SignerInfo" class');
                    const e = [];
                    return e.push(new s.Integer({
                        value: this.version
                    })), this.sid instanceof Fe ? e.push(this.sid.toSchema()) : e.push(this.sid), e.push(this.digestAlgorithm.toSchema()), "signedAttrs" in this && !1 === xt.compareWithDefault("signedAttrs", this.signedAttrs) && e.push(this.signedAttrs.toSchema()), e.push(this.signatureAlgorithm.toSchema()), e.push(this.signature), "unsignedAttrs" in this && !1 === xt.compareWithDefault("unsignedAttrs", this.unsignedAttrs) && e.push(this.unsignedAttrs.toSchema()), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    if (xt.compareWithDefault("sid", this.sid)) throw new Error('Incorrectly initialized "SignerInfo" class');
                    const e = {
                        version: this.version
                    };
                    return this.sid instanceof s.Any || (e.sid = this.sid.toJSON()), e.digestAlgorithm = this.digestAlgorithm.toJSON(), !1 === xt.compareWithDefault("signedAttrs", this.signedAttrs) && (e.signedAttrs = this.signedAttrs.toJSON()), e.signatureAlgorithm = this.signatureAlgorithm.toJSON(), e.signature = this.signature.toJSON(), !1 === xt.compareWithDefault("unsignedAttrs", this.unsignedAttrs) && (e.unsignedAttrs = this.unsignedAttrs.toJSON()), e
                }
            }
            class Ot {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", Ot.defaultValues("version")), this.policy = (0, a.getParametersValue)(e, "policy", Ot.defaultValues("policy")), this.messageImprint = (0, a.getParametersValue)(e, "messageImprint", Ot.defaultValues("messageImprint")), this.serialNumber = (0, a.getParametersValue)(e, "serialNumber", Ot.defaultValues("serialNumber")), this.genTime = (0, a.getParametersValue)(e, "genTime", Ot.defaultValues("genTime")), "accuracy" in e && (this.accuracy = (0, a.getParametersValue)(e, "accuracy", Ot.defaultValues("accuracy"))), "ordering" in e && (this.ordering = (0, a.getParametersValue)(e, "ordering", Ot.defaultValues("ordering"))), "nonce" in e && (this.nonce = (0, a.getParametersValue)(e, "nonce", Ot.defaultValues("nonce"))), "tsa" in e && (this.tsa = (0, a.getParametersValue)(e, "tsa", Ot.defaultValues("tsa"))), "extensions" in e && (this.extensions = (0, a.getParametersValue)(e, "extensions", Ot.defaultValues("extensions"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 0;
                        case "policy":
                            return "";
                        case "messageImprint":
                            return new At;
                        case "serialNumber":
                            return new s.Integer;
                        case "genTime":
                            return new Date(0, 0, 0);
                        case "accuracy":
                            return new U;
                        case "ordering":
                            return !1;
                        case "nonce":
                            return new s.Integer;
                        case "tsa":
                            return new L;
                        case "extensions":
                            return [];
                        default:
                            throw new Error(`Invalid member name for TSTInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "version":
                        case "policy":
                        case "genTime":
                        case "ordering":
                            return t === Ot.defaultValues(e);
                        case "messageImprint":
                            return At.compareWithDefault("hashAlgorithm", t.hashAlgorithm) && At.compareWithDefault("hashedMessage", t.hashedMessage);
                        case "serialNumber":
                        case "nonce":
                            return t.isEqual(Ot.defaultValues(e));
                        case "accuracy":
                            return U.compareWithDefault("seconds", t.seconds) && U.compareWithDefault("millis", t.millis) && U.compareWithDefault("micros", t.micros);
                        case "tsa":
                            return L.compareWithDefault("type", t.type) && L.compareWithDefault("value", t.value);
                        case "extensions":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for TSTInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "TSTInfo",
                        value: [new s.Integer({
                            name: t.version || "TSTInfo.version"
                        }), new s.ObjectIdentifier({
                            name: t.policy || "TSTInfo.policy"
                        }), At.schema(t.messageImprint || {
                            names: {
                                blockName: "TSTInfo.messageImprint"
                            }
                        }), new s.Integer({
                            name: t.serialNumber || "TSTInfo.serialNumber"
                        }), new s.GeneralizedTime({
                            name: t.genTime || "TSTInfo.genTime"
                        }), U.schema(t.accuracy || {
                            names: {
                                blockName: "TSTInfo.accuracy"
                            }
                        }), new s.Boolean({
                            name: t.ordering || "TSTInfo.ordering",
                            optional: !0
                        }), new s.Integer({
                            name: t.nonce || "TSTInfo.nonce",
                            optional: !0
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [L.schema(t.tsa || {
                                names: {
                                    blockName: "TSTInfo.tsa"
                                }
                            })]
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: [new s.Repeated({
                                name: t.extensions || "TSTInfo.extensions",
                                value: we.schema(t.extension || {})
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["TSTInfo.version", "TSTInfo.policy", "TSTInfo.messageImprint", "TSTInfo.serialNumber", "TSTInfo.genTime", "TSTInfo.accuracy", "TSTInfo.ordering", "TSTInfo.nonce", "TSTInfo.tsa", "TSTInfo.extensions"]);
                    const t = s.compareSchema(e, e, Ot.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for TSTInfo");
                    this.version = t.result["TSTInfo.version"].valueBlock.valueDec, this.policy = t.result["TSTInfo.policy"].valueBlock.toString(), this.messageImprint = new At({
                        schema: t.result["TSTInfo.messageImprint"]
                    }), this.serialNumber = t.result["TSTInfo.serialNumber"], this.genTime = t.result["TSTInfo.genTime"].toDate(), "TSTInfo.accuracy" in t.result && (this.accuracy = new U({
                        schema: t.result["TSTInfo.accuracy"]
                    })), "TSTInfo.ordering" in t.result && (this.ordering = t.result["TSTInfo.ordering"].valueBlock.value), "TSTInfo.nonce" in t.result && (this.nonce = t.result["TSTInfo.nonce"]), "TSTInfo.tsa" in t.result && (this.tsa = new L({
                        schema: t.result["TSTInfo.tsa"]
                    })), "TSTInfo.extensions" in t.result && (this.extensions = Array.from(t.result["TSTInfo.extensions"], (e => new we({
                        schema: e
                    }))))
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.Integer({
                        value: this.version
                    })), e.push(new s.ObjectIdentifier({
                        value: this.policy
                    })), e.push(this.messageImprint.toSchema()), e.push(this.serialNumber), e.push(new s.GeneralizedTime({
                        valueDate: this.genTime
                    })), "accuracy" in this && e.push(this.accuracy.toSchema()), "ordering" in this && e.push(new s.Boolean({
                        value: this.ordering
                    })), "nonce" in this && e.push(this.nonce), "tsa" in this && e.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: [this.tsa.toSchema()]
                    })), "extensions" in this && e.push(new s.Constructed({
                        optional: !0,
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: Array.from(this.extensions, (e => e.toSchema()))
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        version: this.version,
                        policy: this.policy,
                        messageImprint: this.messageImprint.toJSON(),
                        serialNumber: this.serialNumber.toJSON(),
                        genTime: this.genTime
                    };
                    return "accuracy" in this && (e.accuracy = this.accuracy.toJSON()), "ordering" in this && (e.ordering = this.ordering), "nonce" in this && (e.nonce = this.nonce.toJSON()), "tsa" in this && (e.tsa = this.tsa.toJSON()), "extensions" in this && (e.extensions = Array.from(this.extensions, (e => e.toJSON()))), e
                }
                verify(e = {}) {
                    let t, r = Promise.resolve(),
                        s = null,
                        n = null;
                    const i = A();
                    if (void 0 === i) return Promise.reject("Unable to create WebCrypto object");
                    if (!("data" in e)) return Promise.reject('"data" is a mandatory attribute for TST_INFO verification');
                    if (t = e.data, "notBefore" in e && (s = e.notBefore), "notAfter" in e && (n = e.notAfter), null !== s && this.genTime < s) return Promise.reject("Generation time for TSTInfo object is less than notBefore value");
                    if (null !== n && this.genTime > n) return Promise.reject("Generation time for TSTInfo object is more than notAfter value");
                    const o = E(this.messageImprint.hashAlgorithm.algorithmId);
                    return "name" in o == !1 ? Promise.reject(`Unsupported signature algorithm: ${this.messageImprint.hashAlgorithm.algorithmId}`) : (r = r.then((() => i.digest(o.name, new Uint8Array(t)))).then((e => (0, a.isEqualBuffer)(e, this.messageImprint.hashedMessage.valueBlock.valueHex))), r)
                }
            }
            class Dt {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", Dt.defaultValues("version")), this.digestAlgorithms = (0, a.getParametersValue)(e, "digestAlgorithms", Dt.defaultValues("digestAlgorithms")), this.encapContentInfo = (0, a.getParametersValue)(e, "encapContentInfo", Dt.defaultValues("encapContentInfo")), "certificates" in e && (this.certificates = (0, a.getParametersValue)(e, "certificates", Dt.defaultValues("certificates"))), "crls" in e && (this.crls = (0, a.getParametersValue)(e, "crls", Dt.defaultValues("crls"))), "ocsps" in e && (this.ocsps = (0, a.getParametersValue)(e, "ocsps", Dt.defaultValues("ocsps"))), this.signerInfos = (0, a.getParametersValue)(e, "signerInfos", Dt.defaultValues("signerInfos")), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 0;
                        case "digestAlgorithms":
                            return [];
                        case "encapContentInfo":
                            return new wt;
                        case "certificates":
                        case "crls":
                        case "ocsps":
                        case "signerInfos":
                            return [];
                        default:
                            throw new Error(`Invalid member name for SignedData class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "version":
                            return t === Dt.defaultValues("version");
                        case "encapContentInfo":
                            return new wt;
                        case "digestAlgorithms":
                        case "certificates":
                        case "crls":
                        case "ocsps":
                        case "signerInfos":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for SignedData class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return "optional" in t == !1 && (t.optional = !1), new s.Sequence({
                        name: t.blockName || "SignedData",
                        optional: t.optional,
                        value: [new s.Integer({
                            name: t.version || "SignedData.version"
                        }), new s.Set({
                            value: [new s.Repeated({
                                name: t.digestAlgorithms || "SignedData.digestAlgorithms",
                                value: n.schema()
                            })]
                        }), wt.schema(t.encapContentInfo || {
                            names: {
                                blockName: "SignedData.encapContentInfo"
                            }
                        }), new s.Constructed({
                            name: t.certificates || "SignedData.certificates",
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: Je.schema().valueBlock.value
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 1
                            },
                            value: _e.schema(t.crls || {
                                names: {
                                    crls: "SignedData.crls"
                                }
                            }).valueBlock.value
                        }), new s.Set({
                            value: [new s.Repeated({
                                name: t.signerInfos || "SignedData.signerInfos",
                                value: xt.schema()
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["SignedData.version", "SignedData.digestAlgorithms", "SignedData.encapContentInfo", "SignedData.certificates", "SignedData.crls", "SignedData.signerInfos"]);
                    const t = s.compareSchema(e, e, Dt.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for SignedData");
                    if (this.version = t.result["SignedData.version"].valueBlock.valueDec, "SignedData.digestAlgorithms" in t.result && (this.digestAlgorithms = Array.from(t.result["SignedData.digestAlgorithms"], (e => new n({
                            schema: e
                        })))), this.encapContentInfo = new wt({
                            schema: t.result["SignedData.encapContentInfo"]
                        }), "SignedData.certificates" in t.result) {
                        const e = new Je({
                            schema: new s.Set({
                                value: t.result["SignedData.certificates"].valueBlock.value
                            })
                        });
                        this.certificates = e.certificates.slice(0)
                    }
                    "SignedData.crls" in t.result && (this.crls = Array.from(t.result["SignedData.crls"], (e => 1 === e.idBlock.tagClass ? new qe({
                        schema: e
                    }) : (e.idBlock.tagClass = 1, e.idBlock.tagNumber = 16, new $e({
                        schema: e
                    }))))), "SignedData.signerInfos" in t.result && (this.signerInfos = Array.from(t.result["SignedData.signerInfos"], (e => new xt({
                        schema: e
                    }))))
                }
                toSchema(e = !1) {
                    const t = [];
                    if (t.push(new s.Integer({
                            value: this.version
                        })), t.push(new s.Set({
                            value: Array.from(this.digestAlgorithms, (t => t.toSchema(e)))
                        })), t.push(this.encapContentInfo.toSchema()), "certificates" in this) {
                        const e = new Je({
                            certificates: this.certificates
                        }).toSchema();
                        t.push(new s.Constructed({
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: e.valueBlock.value
                        }))
                    }
                    return "crls" in this && t.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 1
                        },
                        value: Array.from(this.crls, (t => {
                            if (t instanceof $e) {
                                const r = t.toSchema(e);
                                return r.idBlock.tagClass = 3, r.idBlock.tagNumber = 1, r
                            }
                            return t.toSchema(e)
                        }))
                    })), t.push(new s.Set({
                        value: Array.from(this.signerInfos, (t => t.toSchema(e)))
                    })), new s.Sequence({
                        value: t
                    })
                }
                toJSON() {
                    const e = {
                        version: this.version,
                        digestAlgorithms: Array.from(this.digestAlgorithms, (e => e.toJSON())),
                        encapContentInfo: this.encapContentInfo.toJSON()
                    };
                    return "certificates" in this && (e.certificates = Array.from(this.certificates, (e => e.toJSON()))), "crls" in this && (e.crls = Array.from(this.crls, (e => e.toJSON()))), e.signerInfos = Array.from(this.signerInfos, (e => e.toJSON())), e
                }
                verify({
                    signer: e = -1,
                    data: t = new ArrayBuffer(0),
                    trustedCerts: r = [],
                    checkDate: n = new Date,
                    checkChain: i = !1,
                    extendedMode: o = !1,
                    passedWhenNotRevValues: l = !1,
                    findOrigin: c = null,
                    findIssuer: u = null
                } = {}) {
                    let h = Promise.resolve(),
                        m = new ArrayBuffer(0),
                        f = "",
                        g = {},
                        d = null,
                        p = [];
                    const y = k(),
                        b = A();
                    if (void 0 === b) return Promise.reject("Unable to create WebCrypto object");
                    if (-1 === e) return o ? Promise.reject({
                        date: n,
                        code: 1,
                        message: "Unable to get signer index from input parameters",
                        signatureVerified: null,
                        signerCertificate: null,
                        signerCertificateVerified: null
                    }) : Promise.reject("Unable to get signer index from input parameters");
                    if ("certificates" in this == !1) return o ? Promise.reject({
                        date: n,
                        code: 2,
                        message: "No certificates attached to this signed data",
                        signatureVerified: null,
                        signerCertificate: null,
                        signerCertificateVerified: null
                    }) : Promise.reject("No certificates attached to this signed data");
                    return h = this.signerInfos[e].sid instanceof Fe ? h.then((() => {
                        for (const t of this.certificates)
                            if (t instanceof Ae != !1 && t.issuer.isEqual(this.signerInfos[e].sid.issuer) && t.serialNumber.isEqual(this.signerInfos[e].sid.serialNumber)) return g = t, Promise.resolve();
                        return o ? Promise.reject({
                            date: n,
                            code: 3,
                            message: "Unable to find signer certificate",
                            signatureVerified: null,
                            signerCertificate: null,
                            signerCertificateVerified: null
                        }) : Promise.reject("Unable to find signer certificate")
                    })) : (async () => {
                        try {
                            const t = this.signerInfos[e].sid,
                                r = t.idBlock.isConstructed ? t.valueBlock.value[0].valueBlock.valueHex : t.valueBlock.valueHex;
                            for (const e of this.certificates) {
                                if (!(e instanceof Ae)) continue;
                                const t = await b.digest({
                                    name: "sha-1"
                                }, new Uint8Array(e.subjectPublicKeyInfo.subjectPublicKey.valueBlock.valueHex));
                                if ((0, a.isEqualBuffer)(t, r)) {
                                    g = e;
                                    break
                                }
                            }
                            if (!g) throw new Error("Signing certificate not found")
                        } catch (e) {
                            if (o) return Promise.reject({
                                date: n,
                                code: 3,
                                message: "Unable to find signer certificate",
                                signatureVerified: null,
                                signerCertificate: null,
                                signerCertificateVerified: null
                            });
                            throw "Unable to find signer certificate"
                        }
                    })(), h = h.then((() => {
                        if ("1.2.840.113549.1.9.16.1.4" === this.encapContentInfo.eContentType) {
                            if ("eContent" in this.encapContentInfo == !1) return !1;
                            const e = s.fromBER(this.encapContentInfo.eContent.valueBlock.valueHex);
                            let r;
                            try {
                                r = new Ot({
                                    schema: e.result
                                })
                            } catch (e) {
                                return !1
                            }
                            return n = r.genTime, d = r.serialNumber.valueBlock.valueHex, 0 === t.byteLength ? o ? Promise.reject({
                                date: n,
                                code: 4,
                                message: "Missed detached data input array",
                                signatureVerified: null,
                                signerCertificate: g,
                                signerCertificateVerified: null
                            }) : Promise.reject("Missed detached data input array") : r.verify({
                                data: t
                            })
                        }
                        return !0
                    })), i && (h = h.then((e => {
                        if (!1 === e) return !1;
                        const t = Array.from(this.certificates.filter((e => e instanceof Ae)), (e => function(e) {
                                if (!0 === e.issuer.isEqual(g.issuer) && !0 === e.serialNumber.isEqual(g.serialNumber)) return null;
                                let t = !1;
                                if ("extensions" in e)
                                    for (const r of e.extensions) "2.5.29.19" === r.extnID && "cA" in r.parsedValue && !0 === r.parsedValue.cA && (t = !0);
                                return t ? e : null
                            }(e))),
                            s = {
                                checkDate: n,
                                certs: Array.from(t.filter((e => null !== e))),
                                trustedCerts: r
                            };
                        null !== u && (s.findIssuer = u), null !== c && (s.findOrigin = c);
                        const a = new dt(s);
                        if (a.certs.push(g), "crls" in this)
                            for (const e of this.crls) "thisUpdate" in e ? a.crls.push(e) : "1.3.6.1.5.5.7.48.1.1" === e.otherRevInfoFormat && a.ocsps.push(new pt({
                                schema: e.otherRevInfo
                            }));
                        return "ocsps" in this && a.ocsps.push(...this.ocsps), a.verify({
                            passedWhenNotRevValues: l
                        }).then((e => ("certificatePath" in e && (p = e.certificatePath), !0 === e.result ? Promise.resolve(!0) : o ? Promise.reject({
                            date: n,
                            code: 5,
                            message: `Validation of signer's certificate failed: ${e.resultMessage}`,
                            signatureVerified: null,
                            signerCertificate: g,
                            signerCertificateVerified: !1
                        }) : Promise.reject("Validation of signer's certificate failed"))), (e => o ? Promise.reject({
                            date: n,
                            code: 5,
                            message: `Validation of signer's certificate failed with error: ${e instanceof Object?e.resultMessage:e}`,
                            signatureVerified: null,
                            signerCertificate: g,
                            signerCertificateVerified: !1
                        }) : Promise.reject(`Validation of signer's certificate failed with error: ${e instanceof Object?e.resultMessage:e}`)))
                    }))), h = h.then((t => {
                        if (!1 === t) return !1;
                        const r = E(this.signerInfos[e].digestAlgorithm.algorithmId);
                        return "name" in r == !1 ? o ? Promise.reject({
                            date: n,
                            code: 7,
                            message: `Unsupported signature algorithm: ${this.signerInfos[e].digestAlgorithm.algorithmId}`,
                            signatureVerified: null,
                            signerCertificate: g,
                            signerCertificateVerified: !0
                        }) : Promise.reject(`Unsupported signature algorithm: ${this.signerInfos[e].digestAlgorithm.algorithmId}`) : (f = r.name, !0)
                    })), h = h.then((r => {
                        if (!1 === r) return !1;
                        if ("eContent" in this.encapContentInfo)
                            if (1 === this.encapContentInfo.eContent.idBlock.tagClass && 4 === this.encapContentInfo.eContent.idBlock.tagNumber)
                                if (!1 === this.encapContentInfo.eContent.idBlock.isConstructed) t = this.encapContentInfo.eContent.valueBlock.valueHex;
                                else
                                    for (const e of this.encapContentInfo.eContent.valueBlock.value) t = (0, a.utilConcatBuf)(t, e.valueBlock.valueHex);
                        else t = this.encapContentInfo.eContent.valueBlock.valueBeforeDecode;
                        else if (0 === t.byteLength) return o ? Promise.reject({
                            date: n,
                            code: 8,
                            message: "Missed detached data input array",
                            signatureVerified: null,
                            signerCertificate: g,
                            signerCertificateVerified: !0
                        }) : Promise.reject("Missed detached data input array");
                        if ("signedAttrs" in this.signerInfos[e]) {
                            let t = !1,
                                r = !1;
                            for (const s of this.signerInfos[e].signedAttrs.attributes)
                                if ("1.2.840.113549.1.9.3" === s.type && (t = !0), "1.2.840.113549.1.9.4" === s.type && (r = !0, m = s.values[0].valueBlock.valueHex), t && r) break;
                            if (!1 === t) return o ? Promise.reject({
                                date: n,
                                code: 9,
                                message: 'Attribute "content-type" is a mandatory attribute for "signed attributes"',
                                signatureVerified: null,
                                signerCertificate: g,
                                signerCertificateVerified: !0
                            }) : Promise.reject('Attribute "content-type" is a mandatory attribute for "signed attributes"');
                            if (!1 === r) return o ? Promise.reject({
                                date: n,
                                code: 10,
                                message: 'Attribute "message-digest" is a mandatory attribute for "signed attributes"',
                                signatureVerified: null,
                                signerCertificate: g,
                                signerCertificateVerified: !0
                            }) : Promise.reject('Attribute "message-digest" is a mandatory attribute for "signed attributes"')
                        }
                        return !0
                    })), h = h.then((r => !1 !== r && (!("signedAttrs" in this.signerInfos[e]) || b.digest(f, new Uint8Array(t))))).then((r => !1 !== r && (!("signedAttrs" in this.signerInfos[e]) || !!(0, a.isEqualBuffer)(r, m) && (t = this.signerInfos[e].signedAttrs.encodedValue, !0)))), h = h.then((r => !1 !== r && y.subtle.verifyWithPublicKey(t, this.signerInfos[e].signature, g.subjectPublicKeyInfo, g.signatureAlgorithm, f))), h = h.then((e => o ? {
                        date: n,
                        code: 14,
                        message: "",
                        signatureVerified: e,
                        signerCertificate: g,
                        timestampSerial: d,
                        signerCertificateVerified: !0,
                        certificatePath: p
                    } : e), (e => o ? "code" in e ? Promise.reject(e) : Promise.reject({
                        date: n,
                        code: 15,
                        message: `Error during verification: ${e.message}`,
                        signatureVerified: null,
                        signerCertificate: g,
                        timestampSerial: d,
                        signerCertificateVerified: !0
                    }) : Promise.reject(e))), h
                }
                sign(e, t, r = "SHA-1", i = new ArrayBuffer(0)) {
                    if (void 0 === e) return Promise.reject("Need to provide a private key for signing");
                    let o, l = Promise.resolve();
                    const c = k(),
                        u = I({
                            name: r
                        });
                    return "" === u ? Promise.reject(`Unsupported hash algorithm: ${r}`) : (0 === this.digestAlgorithms.filter((e => e.algorithmId === u)).length && this.digestAlgorithms.push(new n({
                        algorithmId: u,
                        algorithmParams: new s.Null
                    })), this.signerInfos[t].digestAlgorithm = new n({
                        algorithmId: u,
                        algorithmParams: new s.Null
                    }), l = l.then((() => c.subtle.getSignatureParameters(e, r))), l = l.then((e => {
                        o = e.parameters, this.signerInfos[t].signatureAlgorithm = e.signatureAlgorithm
                    })), l = l.then((() => {
                        if ("signedAttrs" in this.signerInfos[t])
                            if (0 !== this.signerInfos[t].signedAttrs.encodedValue.byteLength) i = this.signerInfos[t].signedAttrs.encodedValue;
                            else {
                                i = this.signerInfos[t].signedAttrs.toSchema(!0).toBER(!1);
                                new Uint8Array(i)[0] = 49
                            }
                        else if ("eContent" in this.encapContentInfo)
                            if (1 === this.encapContentInfo.eContent.idBlock.tagClass && 4 === this.encapContentInfo.eContent.idBlock.tagNumber)
                                if (!1 === this.encapContentInfo.eContent.idBlock.isConstructed) i = this.encapContentInfo.eContent.valueBlock.valueHex;
                                else
                                    for (const e of this.encapContentInfo.eContent.valueBlock.value) i = (0, a.utilConcatBuf)(i, e.valueBlock.valueHex);
                        else i = this.encapContentInfo.eContent.valueBlock.valueBeforeDecode;
                        else if (0 === i.byteLength) return Promise.reject("Missed detached data input array");
                        return Promise.resolve()
                    })), l = l.then((() => c.subtle.signWithPrivateKey(i, e, o))), l = l.then((e => (this.signerInfos[t].signature = new s.OctetString({
                        valueHex: e
                    }), e))), l)
                }
            }
            class jt {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", jt.defaultValues("version")), this.authSafe = (0, a.getParametersValue)(e, "authSafe", jt.defaultValues("authSafe")), "macData" in e && (this.macData = (0, a.getParametersValue)(e, "macData", jt.defaultValues("macData"))), "parsedValue" in e && (this.parsedValue = (0, a.getParametersValue)(e, "parsedValue", jt.defaultValues("parsedValue"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 3;
                        case "authSafe":
                            return new $;
                        case "macData":
                            return new kt;
                        case "parsedValue":
                            return {};
                        default:
                            throw new Error(`Invalid member name for PFX class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "version":
                            return t === jt.defaultValues(e);
                        case "authSafe":
                            return $.compareWithDefault("contentType", t.contentType) && $.compareWithDefault("content", t.content);
                        case "macData":
                            return kt.compareWithDefault("mac", t.mac) && kt.compareWithDefault("macSalt", t.macSalt) && kt.compareWithDefault("iterations", t.iterations);
                        case "parsedValue":
                            return t instanceof Object && 0 === Object.keys(t).length;
                        default:
                            throw new Error(`Invalid member name for PFX class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.version || "version"
                        }), $.schema(t.authSafe || {
                            names: {
                                blockName: "authSafe"
                            }
                        }), kt.schema(t.macData || {
                            names: {
                                blockName: "macData",
                                optional: !0
                            }
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["version", "authSafe", "macData"]);
                    const t = s.compareSchema(e, e, jt.schema({
                        names: {
                            version: "version",
                            authSafe: {
                                names: {
                                    blockName: "authSafe"
                                }
                            },
                            macData: {
                                names: {
                                    blockName: "macData"
                                }
                            }
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PFX");
                    this.version = t.result.version.valueBlock.valueDec, this.authSafe = new $({
                        schema: t.result.authSafe
                    }), "macData" in t.result && (this.macData = new kt({
                        schema: t.result.macData
                    }))
                }
                toSchema() {
                    const e = [new s.Integer({
                        value: this.version
                    }), this.authSafe.toSchema()];
                    return "macData" in this && e.push(this.macData.toSchema()), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        version: this.version,
                        authSafe: this.authSafe.toJSON()
                    };
                    return "macData" in this && (e.macData = this.macData.toJSON()), e
                }
                makeInternalValues(e = {}) {
                    if (e instanceof Object == !1) return Promise.reject('The "parameters" must has "Object" type');
                    if ("parsedValue" in this == !1) return Promise.reject('Please call "parseValues" function first in order to make "parsedValue" data');
                    if ("integrityMode" in this.parsedValue == !1) return Promise.reject('Absent mandatory parameter "integrityMode" inside "parsedValue"');
                    let t = Promise.resolve();
                    const r = A();
                    if (void 0 === r) return Promise.reject("Unable to create WebCrypto object");
                    if ("authenticatedSafe" in this.parsedValue == !1) return Promise.reject('Absent mandatory parameter "authenticatedSafe" in "parsedValue"');
                    switch (this.parsedValue.integrityMode) {
                        case 0: {
                            if ("iterations" in e == !1) return Promise.reject('Absent mandatory parameter "iterations"');
                            if ("pbkdf2HashAlgorithm" in e == !1) return Promise.reject('Absent mandatory parameter "pbkdf2HashAlgorithm"');
                            if ("hmacHashAlgorithm" in e == !1) return Promise.reject('Absent mandatory parameter "hmacHashAlgorithm"');
                            if ("password" in e == !1) return Promise.reject('Absent mandatory parameter "password"');
                            const r = new ArrayBuffer(64);
                            C(new Uint8Array(r));
                            const a = this.parsedValue.authenticatedSafe.toSchema().toBER(!1);
                            this.authSafe = new $({
                                contentType: "1.2.840.113549.1.7.1",
                                content: new s.OctetString({
                                    valueHex: a
                                })
                            });
                            const i = k();
                            if ("stampDataWithPassword" in i.subtle == !1) return Promise.reject(`No support for "stampDataWithPassword" in current engine "${i.name}"`);
                            t = t.then((() => i.subtle.stampDataWithPassword({
                                password: e.password,
                                hashAlgorithm: e.hmacHashAlgorithm,
                                salt: r,
                                iterationCount: e.iterations,
                                contentToStamp: a
                            }))), t = t.then((t => {
                                this.macData = new kt({
                                    mac: new vt({
                                        digestAlgorithm: new n({
                                            algorithmId: I({
                                                name: e.hmacHashAlgorithm
                                            })
                                        }),
                                        digest: new s.OctetString({
                                            valueHex: t
                                        })
                                    }),
                                    macSalt: new s.OctetString({
                                        valueHex: r
                                    }),
                                    iterations: e.iterations
                                })
                            }), (e => Promise.reject(e)))
                        }
                        break;
                    case 1: {
                        if ("signingCertificate" in e == !1) return Promise.reject('Absent mandatory parameter "signingCertificate"');
                        if ("privateKey" in e == !1) return Promise.reject('Absent mandatory parameter "privateKey"');
                        if ("hashAlgorithm" in e == !1) return Promise.reject('Absent mandatory parameter "hashAlgorithm"');
                        const a = this.parsedValue.authenticatedSafe.toSchema().toBER(!1),
                            n = new Dt({
                                version: 1,
                                encapContentInfo: new wt({
                                    eContentType: "1.2.840.113549.1.7.1",
                                    eContent: new s.OctetString({
                                        valueHex: a
                                    })
                                }),
                                certificates: [e.signingCertificate]
                            });
                        t = t.then((() => r.digest({
                            name: e.hashAlgorithm
                        }, new Uint8Array(a)))), t = t.then((t => {
                            const r = [];
                            r.push(new c({
                                type: "1.2.840.113549.1.9.3",
                                values: [new s.ObjectIdentifier({
                                    value: "1.2.840.113549.1.7.1"
                                })]
                            })), r.push(new c({
                                type: "1.2.840.113549.1.9.5",
                                values: [new s.UTCTime({
                                    valueDate: new Date
                                })]
                            })), r.push(new c({
                                type: "1.2.840.113549.1.9.4",
                                values: [new s.OctetString({
                                    valueHex: t
                                })]
                            })), n.signerInfos.push(new xt({
                                version: 1,
                                sid: new Fe({
                                    issuer: e.signingCertificate.issuer,
                                    serialNumber: e.signingCertificate.serialNumber
                                }),
                                signedAttrs: new Et({
                                    type: 0,
                                    attributes: r
                                })
                            }))
                        }), (e => Promise.reject(`Error during making digest for message: ${e}`))), t = t.then((() => n.sign(e.privateKey, 0, e.hashAlgorithm))), t = t.then((() => {
                            this.authSafe = new $({
                                contentType: "1.2.840.113549.1.7.2",
                                content: n.toSchema(!0)
                            })
                        }), (e => Promise.reject(`Error during making signature: ${e}`)))
                    }
                    break;
                    default:
                        return Promise.reject(`Parameter "integrityMode" has unknown value: ${e.integrityMode}`)
                    }
                    return t
                }
                parseInternalValues(e) {
                    if (e instanceof Object == !1) return Promise.reject('The "parameters" must has "Object" type');
                    "checkIntegrity" in e == !1 && (e.checkIntegrity = !0);
                    let t = Promise.resolve();
                    if (void 0 === A()) return Promise.reject("Unable to create WebCrypto object");
                    switch (this.parsedValue = {}, this.authSafe.contentType) {
                        case "1.2.840.113549.1.7.1": {
                            if ("password" in e == !1) return Promise.reject('Absent mandatory parameter "password"');
                            if (this.parsedValue.integrityMode = 0, this.authSafe.content instanceof s.OctetString == !1) return Promise.reject('Wrong type of "this.authSafe.content"');
                            let r = new ArrayBuffer(0);
                            if (this.authSafe.content.valueBlock.isConstructed)
                                for (const e of this.authSafe.content.valueBlock.value) r = (0, a.utilConcatBuf)(r, e.valueBlock.valueHex);
                            else r = this.authSafe.content.valueBlock.valueHex;
                            const n = s.fromBER(r);
                            if (-1 === n.offset) return Promise.reject('Error during parsing of ASN.1 data inside "this.authSafe.content"');
                            if (this.parsedValue.authenticatedSafe = new ht({
                                    schema: n.result
                                }), e.checkIntegrity) {
                                if ("macData" in this == !1) return Promise.reject('Absent "macData" value, can not check PKCS#12 data integrity');
                                const s = E(this.macData.mac.digestAlgorithm.algorithmId);
                                if ("name" in s == !1) return Promise.reject(`Unsupported digest algorithm: ${this.macData.mac.digestAlgorithm.algorithmId}`);
                                const a = k();
                                t = t.then((() => a.subtle.verifyDataStampedWithPassword({
                                    password: e.password,
                                    hashAlgorithm: s.name,
                                    salt: this.macData.macSalt.valueBlock.valueHex,
                                    iterationCount: this.macData.iterations,
                                    contentToVerify: r,
                                    signatureToVerify: this.macData.mac.digest.valueBlock.valueHex
                                }))), t = t.then((e => !1 === e ? Promise.reject("Integrity for the PKCS#12 data is broken!") : Promise.resolve()), (e => Promise.reject(e)))
                            }
                        }
                        break;
                    case "1.2.840.113549.1.7.2": {
                        this.parsedValue.integrityMode = 1;
                        const e = new Dt({
                            schema: this.authSafe.content
                        });
                        if ("eContent" in e.encapContentInfo == !1) return Promise.reject('Absent of attached data in "cmsSigned.encapContentInfo"');
                        if (e.encapContentInfo.eContent instanceof s.OctetString == !1) return Promise.reject('Wrong type of "cmsSigned.encapContentInfo.eContent"');
                        let r = new ArrayBuffer(0);
                        if (!1 === e.encapContentInfo.eContent.idBlock.isConstructed) r = e.encapContentInfo.eContent.valueBlock.valueHex;
                        else
                            for (let t = 0; t < e.encapContentInfo.eContent.valueBlock.value.length; t++) r = (0, a.utilConcatBuf)(r, e.encapContentInfo.eContent.valueBlock.value[t].valueBlock.valueHex);
                        const n = s.fromBER(r);
                        if (-1 === n.offset) return Promise.reject('Error during parsing of ASN.1 data inside "this.authSafe.content"');
                        this.parsedValue.authenticatedSafe = new ht({
                            schema: n.result
                        }), t = t.then((() => e.verify({
                            signer: 0,
                            checkChain: !1
                        }))).then((e => !1 === e ? Promise.reject("Integrity for the PKCS#12 data is broken!") : Promise.resolve()), (e => Promise.reject(`Error during integrity verification: ${e}`)))
                    }
                    break;
                    default:
                        return Promise.reject(`Incorrect value for "this.authSafe.contentType": ${this.authSafe.contentType}`)
                    }
                    return t.then((() => this), (e => Promise.reject(`Error during parsing: ${e}`)))
                }
            }
            class Rt {
                constructor(e = {}) {
                    this.status = (0, a.getParametersValue)(e, "status", Rt.defaultValues("status")), "statusStrings" in e && (this.statusStrings = (0, a.getParametersValue)(e, "statusStrings", Rt.defaultValues("statusStrings"))), "failInfo" in e && (this.failInfo = (0, a.getParametersValue)(e, "failInfo", Rt.defaultValues("failInfo"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "status":
                            return 2;
                        case "statusStrings":
                            return [];
                        case "failInfo":
                            return new s.BitString;
                        default:
                            throw new Error(`Invalid member name for PKIStatusInfo class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "status":
                            return t === Rt.defaultValues(e);
                        case "statusStrings":
                            return 0 === t.length;
                        case "failInfo":
                            return t.isEqual(Rt.defaultValues(e));
                        default:
                            throw new Error(`Invalid member name for PKIStatusInfo class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "",
                        value: [new s.Integer({
                            name: t.status || ""
                        }), new s.Sequence({
                            optional: !0,
                            value: [new s.Repeated({
                                name: t.statusStrings || "",
                                value: new s.Utf8String
                            })]
                        }), new s.BitString({
                            name: t.failInfo || "",
                            optional: !0
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["status", "statusStrings", "failInfo"]);
                    const t = s.compareSchema(e, e, Rt.schema({
                        names: {
                            status: "status",
                            statusStrings: "statusStrings",
                            failInfo: "failInfo"
                        }
                    }));
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for PKIStatusInfo");
                    const r = t.result.status;
                    if (!0 === r.valueBlock.isHexOnly || r.valueBlock.valueDec < 0 || r.valueBlock.valueDec > 5) throw new Error('PKIStatusInfo "status" has invalid value');
                    this.status = r.valueBlock.valueDec, "statusStrings" in t.result && (this.statusStrings = t.result.statusStrings), "failInfo" in t.result && (this.failInfo = t.result.failInfo)
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.Integer({
                        value: this.status
                    })), "statusStrings" in this && e.push(new s.Sequence({
                        optional: !0,
                        value: this.statusStrings
                    })), "failInfo" in this && e.push(this.failInfo), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        status: this.status
                    };
                    return "statusStrings" in this && (e.statusStrings = Array.from(this.statusStrings, (e => e.toJSON()))), "failInfo" in this && (e.failInfo = this.failInfo.toJSON()), e
                }
            }
            class qt {
                constructor(e = {}) {
                    this.version = (0, a.getParametersValue)(e, "version", qt.defaultValues("version")), this.messageImprint = (0, a.getParametersValue)(e, "messageImprint", qt.defaultValues("messageImprint")), "reqPolicy" in e && (this.reqPolicy = (0, a.getParametersValue)(e, "reqPolicy", qt.defaultValues("reqPolicy"))), "nonce" in e && (this.nonce = (0, a.getParametersValue)(e, "nonce", qt.defaultValues("nonce"))), "certReq" in e && (this.certReq = (0, a.getParametersValue)(e, "certReq", qt.defaultValues("certReq"))), "extensions" in e && (this.extensions = (0, a.getParametersValue)(e, "extensions", qt.defaultValues("extensions"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "version":
                            return 0;
                        case "messageImprint":
                            return new At;
                        case "reqPolicy":
                            return "";
                        case "nonce":
                            return new s.Integer;
                        case "certReq":
                            return !1;
                        case "extensions":
                            return [];
                        default:
                            throw new Error(`Invalid member name for TimeStampReq class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "version":
                        case "reqPolicy":
                        case "certReq":
                            return t === qt.defaultValues(e);
                        case "messageImprint":
                            return At.compareWithDefault("hashAlgorithm", t.hashAlgorithm) && At.compareWithDefault("hashedMessage", t.hashedMessage);
                        case "nonce":
                            return t.isEqual(qt.defaultValues(e));
                        case "extensions":
                            return 0 === t.length;
                        default:
                            throw new Error(`Invalid member name for TimeStampReq class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "TimeStampReq",
                        value: [new s.Integer({
                            name: t.version || "TimeStampReq.version"
                        }), At.schema(t.messageImprint || {
                            names: {
                                blockName: "TimeStampReq.messageImprint"
                            }
                        }), new s.ObjectIdentifier({
                            name: t.reqPolicy || "TimeStampReq.reqPolicy",
                            optional: !0
                        }), new s.Integer({
                            name: t.nonce || "TimeStampReq.nonce",
                            optional: !0
                        }), new s.Boolean({
                            name: t.certReq || "TimeStampReq.certReq",
                            optional: !0
                        }), new s.Constructed({
                            optional: !0,
                            idBlock: {
                                tagClass: 3,
                                tagNumber: 0
                            },
                            value: [new s.Repeated({
                                name: t.extensions || "TimeStampReq.extensions",
                                value: we.schema()
                            })]
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["TimeStampReq.version", "TimeStampReq.messageImprint", "TimeStampReq.reqPolicy", "TimeStampReq.nonce", "TimeStampReq.certReq", "TimeStampReq.extensions"]);
                    const t = s.compareSchema(e, e, qt.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for TimeStampReq");
                    this.version = t.result["TimeStampReq.version"].valueBlock.valueDec, this.messageImprint = new At({
                        schema: t.result["TimeStampReq.messageImprint"]
                    }), "TimeStampReq.reqPolicy" in t.result && (this.reqPolicy = t.result["TimeStampReq.reqPolicy"].valueBlock.toString()), "TimeStampReq.nonce" in t.result && (this.nonce = t.result["TimeStampReq.nonce"]), "TimeStampReq.certReq" in t.result && (this.certReq = t.result["TimeStampReq.certReq"].valueBlock.value), "TimeStampReq.extensions" in t.result && (this.extensions = Array.from(t.result["TimeStampReq.extensions"], (e => new we({
                        schema: e
                    }))))
                }
                toSchema() {
                    const e = [];
                    return e.push(new s.Integer({
                        value: this.version
                    })), e.push(this.messageImprint.toSchema()), "reqPolicy" in this && e.push(new s.ObjectIdentifier({
                        value: this.reqPolicy
                    })), "nonce" in this && e.push(this.nonce), "certReq" in this && !1 === qt.compareWithDefault("certReq", this.certReq) && e.push(new s.Boolean({
                        value: this.certReq
                    })), "extensions" in this && e.push(new s.Constructed({
                        idBlock: {
                            tagClass: 3,
                            tagNumber: 0
                        },
                        value: Array.from(this.extensions, (e => e.toSchema()))
                    })), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        version: this.version,
                        messageImprint: this.messageImprint.toJSON()
                    };
                    return "reqPolicy" in this && (e.reqPolicy = this.reqPolicy), "nonce" in this && (e.nonce = this.nonce.toJSON()), "certReq" in this && !1 === qt.compareWithDefault("certReq", this.certReq) && (e.certReq = this.certReq), "extensions" in this && (e.extensions = Array.from(this.extensions, (e => e.toJSON()))), e
                }
            }
            class Tt {
                constructor(e = {}) {
                    this.status = (0, a.getParametersValue)(e, "status", Tt.defaultValues("status")), "timeStampToken" in e && (this.timeStampToken = (0, a.getParametersValue)(e, "timeStampToken", Tt.defaultValues("timeStampToken"))), "schema" in e && this.fromSchema(e.schema)
                }
                static defaultValues(e) {
                    switch (e) {
                        case "status":
                            return new Rt;
                        case "timeStampToken":
                            return new $;
                        default:
                            throw new Error(`Invalid member name for TimeStampResp class: ${e}`)
                    }
                }
                static compareWithDefault(e, t) {
                    switch (e) {
                        case "status":
                            return Rt.compareWithDefault("status", t.status) && "statusStrings" in t == !1 && "failInfo" in t == !1;
                        case "timeStampToken":
                            return "" === t.contentType && t.content instanceof s.Any;
                        default:
                            throw new Error(`Invalid member name for TimeStampResp class: ${e}`)
                    }
                }
                static schema(e = {}) {
                    const t = (0, a.getParametersValue)(e, "names", {});
                    return new s.Sequence({
                        name: t.blockName || "TimeStampResp",
                        value: [Rt.schema(t.status || {
                            names: {
                                blockName: "TimeStampResp.status"
                            }
                        }), $.schema(t.timeStampToken || {
                            names: {
                                blockName: "TimeStampResp.timeStampToken",
                                optional: !0
                            }
                        })]
                    })
                }
                fromSchema(e) {
                    (0, a.clearProps)(e, ["TimeStampResp.status", "TimeStampResp.timeStampToken"]);
                    const t = s.compareSchema(e, e, Tt.schema());
                    if (!1 === t.verified) throw new Error("Object's schema was not verified against input data for TimeStampResp");
                    this.status = new Rt({
                        schema: t.result["TimeStampResp.status"]
                    }), "TimeStampResp.timeStampToken" in t.result && (this.timeStampToken = new $({
                        schema: t.result["TimeStampResp.timeStampToken"]
                    }))
                }
                toSchema() {
                    const e = [];
                    return e.push(this.status.toSchema()), "timeStampToken" in this && e.push(this.timeStampToken.toSchema()), new s.Sequence({
                        value: e
                    })
                }
                toJSON() {
                    const e = {
                        status: this.status
                    };
                    return "timeStampToken" in this && (e.timeStampToken = this.timeStampToken.toJSON()), e
                }
                sign(e, t) {
                    if ("timeStampToken" in this == !1) return Promise.reject("timeStampToken is absent in TSP response");
                    if ("1.2.840.113549.1.7.2" !== this.timeStampToken.contentType) return Promise.reject(`Wrong format of timeStampToken: ${this.timeStampToken.contentType}`);
                    return new $({
                        schema: this.timeStampToken.content
                    }).sign(e, 0, t)
                }
                verify(e = {
                    signer: 0,
                    trustedCerts: [],
                    data: new ArrayBuffer(0)
                }) {
                    if ("timeStampToken" in this == !1) return Promise.reject("timeStampToken is absent in TSP response");
                    if ("1.2.840.113549.1.7.2" !== this.timeStampToken.contentType) return Promise.reject(`Wrong format of timeStampToken: ${this.timeStampToken.contentType}`);
                    return new Dt({
                        schema: this.timeStampToken.content
                    }).verify(e)
                }
            }
        }
    }
]);