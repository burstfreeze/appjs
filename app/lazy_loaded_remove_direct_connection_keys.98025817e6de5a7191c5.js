/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [2191], {
        735585: (e, r, t) => {
            "use strict";
            var n = t(595318);
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.removeDirectConnectionKeys = function(e) {
                if ((0, o.supportsDirectConnection)()) return s.default.removeCypher(e);
                return Promise.resolve()
            };
            var s = n(t(619567)),
                o = t(516053)
        }
    }
]);