$(document).foundation(),
    (function () {
        "use strict";
        function e(e) {
            e.addEventListener("click", function (e) {
                e.preventDefault(), this.classList.contains("is-active") === !0 ? this.classList.remove("is-active") : this.classList.add("is-active");
            });
        }
        for (var n = document.querySelectorAll(".dropdown-icon"), t = n.length - 1; t >= 0; t--) {
            var i = n[t];
            e(i);
        }
    })(),
    $(document).ready(function () {
        $(function () {
            $(".toggle").click(function () {
                var e = $(this).attr("data-animation-element");
                $("#" + e).slideToggle();
            });
        });
    }),
    !(function (e, n, t) {
        function i(e, n) {
            return typeof e === n;
        }
        function o() {
            var e, n, t, o, r, s, a;
            for (var l in C)
                if (C.hasOwnProperty(l)) {
                    if (((e = []), (n = C[l]), n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                    for (o = i(n.fn, "function") ? n.fn() : n.fn, r = 0; r < e.length; r++)
                        (s = e[r]), (a = s.split(".")), 1 === a.length ? (x[a[0]] = o) : (!x[a[0]] || x[a[0]] instanceof Boolean || (x[a[0]] = new Boolean(x[a[0]])), (x[a[0]][a[1]] = o)), g.push((o ? "" : "no-") + a.join("-"));
                }
        }
        function r(e) {
            var n = b.className,
                t = x._config.classPrefix || "";
            if ((S && (n = n.baseVal), x._config.enableJSClass)) {
                var i = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
                n = n.replace(i, "$1" + t + "js$2");
            }
            x._config.enableClasses && ((n += " " + t + e.join(" " + t)), S ? (b.className.baseVal = n) : (b.className = n));
        }
        function s(e) {
            return e
                .replace(/([a-z])-([a-z])/g, function (e, n, t) {
                    return n + t.toUpperCase();
                })
                .replace(/^-/, "");
        }
        function a(e, n) {
            return !!~("" + e).indexOf(n);
        }
        function l() {
            return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
        }
        function f(e, n) {
            return function () {
                return e.apply(n, arguments);
            };
        }
        function c(e, n, t) {
            var o;
            for (var r in e) if (e[r] in n) return t === !1 ? e[r] : ((o = n[e[r]]), i(o, "function") ? f(o, t || n) : o);
            return !1;
        }
        function u(e) {
            return e
                .replace(/([A-Z])/g, function (e, n) {
                    return "-" + n.toLowerCase();
                })
                .replace(/^ms-/, "-ms-");
        }
        function d() {
            var e = n.body;
            return e || ((e = l(S ? "svg" : "body")), (e.fake = !0)), e;
        }
        function p(e, t, i, o) {
            var r,
                s,
                a,
                f,
                c = "modernizr",
                u = l("div"),
                p = d();
            if (parseInt(i, 10)) for (; i--; ) (a = l("div")), (a.id = o ? o[i] : c + (i + 1)), u.appendChild(a);
            return (
                (r = l("style")),
                (r.type = "text/css"),
                (r.id = "s" + c),
                (p.fake ? p : u).appendChild(r),
                p.appendChild(u),
                r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(n.createTextNode(e)),
                (u.id = c),
                p.fake && ((p.style.background = ""), (p.style.overflow = "hidden"), (f = b.style.overflow), (b.style.overflow = "hidden"), b.appendChild(p)),
                (s = t(u, e)),
                p.fake ? (p.parentNode.removeChild(p), (b.style.overflow = f), b.offsetHeight) : u.parentNode.removeChild(u),
                !!s
            );
        }
        function v(n, i) {
            var o = n.length;
            if ("CSS" in e && "supports" in e.CSS) {
                for (; o--; ) if (e.CSS.supports(u(n[o]), i)) return !0;
                return !1;
            }
            if ("CSSSupportsRule" in e) {
                for (var r = []; o--; ) r.push("(" + u(n[o]) + ":" + i + ")");
                return (
                    (r = r.join(" or ")),
                    p("@supports (" + r + ") { #modernizr { position: absolute; } }", function (e) {
                        return "absolute" == getComputedStyle(e, null).position;
                    })
                );
            }
            return t;
        }
        function m(e, n, o, r) {
            function f() {
                u && (delete L.style, delete L.modElem);
            }
            if (((r = !i(r, "undefined") && r), !i(o, "undefined"))) {
                var c = v(e, o);
                if (!i(c, "undefined")) return c;
            }
            for (var u, d, p, m, y, h = ["modernizr", "tspan"]; !L.style; ) (u = !0), (L.modElem = l(h.shift())), (L.style = L.modElem.style);
            for (p = e.length, d = 0; p > d; d++)
                if (((m = e[d]), (y = L.style[m]), a(m, "-") && (m = s(m)), L.style[m] !== t)) {
                    if (r || i(o, "undefined")) return f(), "pfx" != n || m;
                    try {
                        L.style[m] = o;
                    } catch (g) {}
                    if (L.style[m] != y) return f(), "pfx" != n || m;
                }
            return f(), !1;
        }
        function y(e, n, t, o, r) {
            var s = e.charAt(0).toUpperCase() + e.slice(1),
                a = (e + " " + E.join(s + " ") + s).split(" ");
            return i(n, "string") || i(n, "undefined") ? m(a, n, o, r) : ((a = (e + " " + _.join(s + " ") + s).split(" ")), c(a, n, t));
        }
        function h(e, n, i) {
            return y(e, t, t, n, i);
        }
        var g = [],
            C = [],
            w = {
                _version: "3.2.0",
                _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
                _q: [],
                on: function (e, n) {
                    var t = this;
                    setTimeout(function () {
                        n(t[e]);
                    }, 0);
                },
                addTest: function (e, n, t) {
                    C.push({ name: e, fn: n, options: t });
                },
                addAsyncTest: function (e) {
                    C.push({ name: null, fn: e });
                },
            },
            x = function () {};
        (x.prototype = w), (x = new x());
        var b = n.documentElement,
            S = "svg" === b.nodeName.toLowerCase(),
            $ = "Moz O ms Webkit",
            E = w._config.usePrefixes ? $.split(" ") : [];
        w._cssomPrefixes = E;
        var T = function (n) {
            var i,
                o = prefixes.length,
                r = e.CSSRule;
            if ("undefined" == typeof r) return t;
            if (!n) return !1;
            if (((n = n.replace(/^@/, "")), (i = n.replace(/-/g, "_").toUpperCase() + "_RULE"), i in r)) return "@" + n;
            for (var s = 0; o > s; s++) {
                var a = prefixes[s],
                    l = a.toUpperCase() + "_" + i;
                if (l in r) return "@-" + a.toLowerCase() + "-" + n;
            }
            return !1;
        };
        w.atRule = T;
        var _ = w._config.usePrefixes ? $.toLowerCase().split(" ") : [];
        w._domPrefixes = _;
        var k = { elem: l("modernizr") };
        x._q.push(function () {
            delete k.elem;
        });
        var L = { style: k.elem.style };
        x._q.unshift(function () {
            delete L.style;
        }),
            (w.testAllProps = y),
            (w.prefixed = function (e, n, t) {
                return 0 === e.indexOf("@") ? T(e) : (-1 != e.indexOf("-") && (e = s(e)), n ? y(e, n, t) : y(e, "pfx"));
            }),
            (w.testAllProps = h),
            x.addTest("csstransitions", h("transition", "all", !0)),
            o(),
            r(g),
            delete w.addTest,
            delete w.addAsyncTest;
        for (var z = 0; z < x._q.length; z++) x._q[z]();
        e.Modernizr = x;
    })(window, document),
    (function () {
        function e() {
            if (classie.has(t, "open")) {
                classie.remove(t, "open"), classie.add(t, "close");
                var e = function (n) {
                    if (r.transitions) {
                        if ("visibility" !== n.propertyName) return;
                        this.removeEventListener(o, e);
                    }
                    classie.remove(t, "close");
                };
                r.transitions ? t.addEventListener(o, e) : e();
            } else classie.has(t, "close") || classie.add(t, "open");
        }
        var n = document.getElementById("trigger-overlay"),
            t = document.querySelector("div.overlay"),
            i = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", msTransition: "MSTransitionEnd", transition: "transitionend" },
            o = i[Modernizr.prefixed("transition")],
            r = { transitions: Modernizr.csstransitions };
        n.addEventListener("click", e);
    })(),
    $(".overlay")
        .find("a")
        .on("click", function (e) {
            $(".overlay").removeClass("open"), $(".dropdown-icon").removeClass("is-active");
        });
        new Swiper("#swiper-1", {
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            });
        Fancybox.bind('[data-fancybox="gallery-img"]',{
              thumbs: false,
              hash: false,
              touch: false,
              animationEffect: "fade",
          });
        Fancybox.bind('[data-fancybox="presentationModal"]',{
            animationEffect: "fade",
        });
        Fancybox.bind('[data-fancybox="forumModal"]',{
            animationEffect: "fade",
        });
/*         $('.scroll-down a[href^="#"]').on("click",function(event){
            event.preventDefault();
            var id = $(this).attr('href'),
            top = $(id).offset().top - 110;
            $('body,html').animate({scrollTop: top}, 350, 'easeInOutQuad');
        }); */