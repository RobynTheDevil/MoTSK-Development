module.exports = function(e) {
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    var t = {};
    return n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(n) {
                return e[n]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, n.p = "", n(n.s = 1)
}([function(e) {
    e.exports = require("electron")
}, function(e, n, t) {
    "use strict";

    function r() {
        (i = new o.BrowserWindow({
            useContentSize: !0,
            resizable: !0,
            fullscreen: !0,
            icon: __static + "\\app_icon.ico",
            backgroundColor: "#000000"
        })).loadURL(u), i.on("closed", (function() {
            i = null
        }))
    }
    t.r(n);
    var o = t(0);
    t.n(o);
    global.__static = t(2).join(__dirname, "/static").replace(/\\/g, "\\\\");
    var i = void 0,
        u = "file://" + __dirname + "/index.html";
    o.app.on("ready", r), o.app.on("window-all-closed", (function() {
        "darwin" !== process.platform && o.app.quit()
    })), o.app.on("activate", (function() {
        null === i && r()
    }))
}, function(e) {
    e.exports = require("path")
}]);