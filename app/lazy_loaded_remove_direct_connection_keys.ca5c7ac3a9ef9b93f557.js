/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [2191], {
        226026: (e, t, r) => {
            "use strict";
            var n = r(263026).default,
                s = r(595318);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.removeDirectConnectionKeys = function(e) {
                if ((0, a.supportsDirectConnection)()) return u.default.removeCypher(e);
                return n.resolve()
            };
            var u = s(r(619567)),
                a = r(516053)
        }
    }
]);