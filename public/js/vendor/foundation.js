/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function (e, t, n, r) {
    "use strict";

    function l(e) {
        if (typeof e == "string" || e instanceof String) e = e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "");
        return e
    }
    var i = function (t) {
        var n = t.length,
            r = e("head");
        while (n--) e("head").has("." + t[n]).length === 0 && e("head").append('<meta class="' + t[n] + '" />')
    };
    i(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), e(function () {
        typeof FastClick != "undefined" && typeof n.body != "undefined" && FastClick.attach(n.body)
    });
    var s = function (t, r) {
        if (typeof t == "string") {
            if (r) {
                var i;
                if (r.jquery) {
                    i = r[0];
                    if (!i) return r
                } else i = r;
                return e(i.querySelectorAll(t))
            }
            return e(n.querySelectorAll(t))
        }
        return e(t, r)
    }, o = function (e) {
        var t = [];
        return e || t.push("data"), this.namespace.length > 0 && t.push(this.namespace), t.push(this.name), t.join("-")
    }, u = function (e) {
        var t = e.split("-"),
            n = t.length,
            r = [];
        while (n--) n !== 0 ? r.push(t[n]) : this.namespace.length > 0 ? r.push(this.namespace, t[n]) : r.push(t[n]);
        return r.reverse().join("-")
    }, a = function (t, n) {
        var r = this,
            i = !s(this).data(this.attr_name(!0));
        if (typeof t == "string") return this[t].call(this, n);
        s(this.scope).is("[" + this.attr_name() + "]") ? (s(this.scope).data(this.attr_name(!0) + "-init", e.extend({}, this.settings, n || t, this.data_options(s(this.scope)))), i && this.events(this.scope)) : s("[" + this.attr_name() + "]", this.scope).each(function () {
            var i = !s(this).data(r.attr_name(!0) + "-init");
            s(this).data(r.attr_name(!0) + "-init", e.extend({}, r.settings, n || t, r.data_options(s(this)))), i && r.events(this)
        })
    }, f = function (e, t) {
        function n() {
            t(e[0])
        }

        function r() {
            this.one("load", n);
            if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var e = this.attr("src"),
                    t = e.match(/\?/) ? "&" : "?";
                t += "random=" + (new Date).getTime(), this.attr("src", e + t)
            }
        }
        if (!e.attr("src")) {
            n();
            return
        }
        e[0].complete || e[0].readyState === 4 ? n() : r.call(e)
    };
    t.matchMedia = t.matchMedia || function (e, t) {
        var n, r = e.documentElement,
            i = r.firstElementChild || r.firstChild,
            s = e.createElement("body"),
            o = e.createElement("div");
        return o.id = "mq-test-1", o.style.cssText = "position:absolute;top:-100em", s.style.background = "none", s.appendChild(o),
            function (e) {
                return o.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', r.insertBefore(s, i), n = o.offsetWidth === 42, r.removeChild(s), {
                    matches: n,
                    media: e
                }
            }
    }(n),
        function (e) {
            function a() {
                n && (s(a), u && jQuery.fx.tick())
            }
            var n, r = 0,
                i = ["webkit", "moz"],
                s = t.requestAnimationFrame,
                o = t.cancelAnimationFrame,
                u = "undefined" != typeof jQuery.fx;
            for (; r < i.length && !s; r++) s = t[i[r] + "RequestAnimationFrame"], o = o || t[i[r] + "CancelAnimationFrame"] || t[i[r] + "CancelRequestAnimationFrame"];
            s ? (t.requestAnimationFrame = s, t.cancelAnimationFrame = o, u && (jQuery.fx.timer = function (e) {
                e() && jQuery.timers.push(e) && !n && (n = !0, a())
            }, jQuery.fx.stop = function () {
                n = !1
            })) : (t.requestAnimationFrame = function (e, n) {
                var i = (new Date).getTime(),
                    s = Math.max(0, 16 - (i - r)),
                    o = t.setTimeout(function () {
                        e(i + s)
                    }, s);
                return r = i + s, o
            }, t.cancelAnimationFrame = function (e) {
                clearTimeout(e)
            })
        }(jQuery), t.Foundation = {
        name: "Foundation",
        version: "5.2.0",
        media_queries: {
            small: s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            medium: s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: e("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: ""
        },
        init: function (e, t, n, r, i) {
            var o, u = [e, n, r, i],
                a = [];
            this.rtl = /rtl/i.test(s("html").attr("dir")), this.scope = e || this.scope, this.set_namespace();
            if (t && typeof t == "string" && !/reflow/i.test(t)) this.libs.hasOwnProperty(t) && a.push(this.init_lib(t, u));
            else
                for (var f in this.libs) a.push(this.init_lib(f, t));
            return e
        },
        init_lib: function (t, n) {
            return this.libs.hasOwnProperty(t) ? (this.patch(this.libs[t]), n && n.hasOwnProperty(t) ? (typeof this.libs[t].settings != "undefined" ? e.extend(!0, this.libs[t].settings, n[t]) : typeof this.libs[t].defaults != "undefined" && e.extend(!0, this.libs[t].defaults, n[t]), this.libs[t].init.apply(this.libs[t], [this.scope, n[t]])) : (n = n instanceof Array ? n : Array(n), this.libs[t].init.apply(this.libs[t], n))) : function () {}
        },
        patch: function (e) {
            e.scope = this.scope, e.namespace = this.global.namespace, e.rtl = this.rtl, e.data_options = this.utils.data_options, e.attr_name = o, e.add_namespace = u, e.bindings = a, e.S = this.utils.S
        },
        inherit: function (e, t) {
            var n = t.split(" "),
                r = n.length;
            while (r--) this.utils.hasOwnProperty(n[r]) && (e[n[r]] = this.utils[n[r]])
        },
        set_namespace: function () {
            var t = this.global.namespace || e(".foundation-data-attribute-namespace").css("font-family");
            if (/false/i.test(t)) return;
            this.global.namespace = t
        },
        libs: {},
        utils: {
            S: s,
            throttle: function (e, t) {
                var n = null;
                return function () {
                    var r = this,
                        i = arguments;
                    clearTimeout(n), n = setTimeout(function () {
                        e.apply(r, i)
                    }, t)
                }
            },
            debounce: function (e, t, n) {
                var r, i;
                return function () {
                    var s = this,
                        o = arguments,
                        u = function () {
                            r = null, n || (i = e.apply(s, o))
                        }, a = n && !r;
                    return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
                }
            },
            data_options: function (t) {
                function a(e) {
                    return !isNaN(e - 0) && e !== null && e !== "" && e !== !1 && e !== !0
                }

                function f(t) {
                    return typeof t == "string" ? e.trim(t) : t
                }
                var n = {}, r, i, s, o = function (e) {
                    var t = Foundation.global.namespace;
                    return t.length > 0 ? e.data(t + "-options") : e.data("options")
                }, u = o(t);
                if (typeof u == "object") return u;
                s = (u || ":").split(";"), r = s.length;
                while (r--) i = s[r].split(":"), /true/i.test(i[1]) && (i[1] = !0), /false/i.test(i[1]) && (i[1] = !1), a(i[1]) && (i[1].indexOf(".") === -1 ? i[1] = parseInt(i[1], 10) : i[1] = parseFloat(i[1], 10)), i.length === 2 && i[0].length > 0 && (n[f(i[0])] = f(i[1]));
                return n
            },
            register_media: function (t, n) {
                Foundation.media_queries[t] === r && (e("head").append('<meta class="' + n + '">'), Foundation.media_queries[t] = l(e("." + n).css("font-family")))
            },
            add_custom_rule: function (e, t) {
                if (t === r) Foundation.stylesheet.insertRule(e, Foundation.stylesheet.cssRules.length);
                else {
                    var n = Foundation.media_queries[t];
                    n !== r && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[t] + "{ " + e + " }")
                }
            },
            image_loaded: function (e, t) {
                var n = this,
                    r = e.length;
                r === 0 && t(e), e.each(function () {
                    f(n.S(this), function () {
                        r -= 1, r === 0 && t(e)
                    })
                })
            },
            random_str: function () {
                return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+(new Date)).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
            }
        }
    }, e.fn.foundation = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            return Foundation.init.apply(Foundation, [this].concat(e)), this
        })
    }
})(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        Foundation.libs.slider = {
            name: "slider",
            version: "5.2.0",
            settings: {
                start: 0,
                end: 100,
                step: 1,
                initial: null,
                display_selector: "",
                on_change: function () {}
            },
            cache: {},
            init: function (e, t, n) {
                Foundation.inherit(this, "throttle"), this.bindings(t, n), this.reflow()
            },
            events: function () {
                var n = this;
                e(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + n.attr_name() + "] .range-slider-handle", function (t) {
                    n.cache.active || n.set_active_slider(e(t.target))
                }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function (e) {
                        !n.cache.active || (e.preventDefault(), n.calculate_position(n.cache.active, e.pageX || e.originalEvent.touches[0].clientX || e.currentPoint.x))
                    }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function (e) {
                        n.remove_active_slider()
                    }).on("change.fndtn.slider", function (e) {
                        n.settings.on_change
                    }), n.S(t).on("resize.fndtn.slider", n.throttle(function (e) {
                    n.reflow()
                }, 300))
            },
            set_active_slider: function (e) {
                this.cache.active = e
            },
            remove_active_slider: function () {
                this.cache.active = null
            },
            calculate_position: function (t, n) {
                var r = this,
                    i = e.extend({}, r.settings, r.data_options(t.parent())),
                    s = e.data(t[0], "handle_w"),
                    o = e.data(t[0], "handle_o"),
                    u = e.data(t[0], "bar_w"),
                    a = e.data(t[0], "bar_o");
                requestAnimationFrame(function () {
                    var e = r.limit_to((n - a) / u, 0, 1),
                        s = r.normalized_value(e, i.start, i.end, i.step);
                    r.set_ui(t, s)
                })
            },
            set_ui: function (t, n) {
                var r = e.extend({}, this.settings, this.data_options(t.parent())),
                    i = e.data(t[0], "handle_w"),
                    s = e.data(t[0], "bar_w"),
                    o = this.normalized_percentage(n, r.start, r.end),
                    u = o * (s - i) - 1,
                    a = o * 100;
                this.set_translate(t, u), t.siblings(".range-slider-active-segment").css("width", a + "%"), t.parent().attr(this.attr_name(), n), t.parent().trigger("change"), t.parent().children("input[type=hidden]").val(n), r.input_id != "" && e(r.display_selector).each(function () {
                    this.hasOwnProperty("value") ? e(this).val(n) : e(this).text(n)
                })
            },
            normalized_percentage: function (e, t, n) {
                return e / (n - t)
            },
            normalized_value: function (e, t, n, r) {
                var i = n - t,
                    r = r,
                    s = e * i,
                    o = (s - s % r) / r,
                    u = s % r,
                    a = u >= r * .5 ? r : 0;
                return o * r + a
            },
            set_translate: function (t, n, r) {
                r ? e(t).css("-webkit-transform", "translateY(" + n + "px)").css("-moz-transform", "translateY(" + n + "px)").css("-ms-transform", "translateY(" + n + "px)").css("-o-transform", "translateY(" + n + "px)").css("transform", "translateY(" + n + "px)") : e(t).css("-webkit-transform", "translateX(" + n + "px)").css("-moz-transform", "translateX(" + n + "px)").css("-ms-transform", "translateX(" + n + "px)").css("-o-transform", "translateX(" + n + "px)").css("transform", "translateX(" + n + "px)")
            },
            limit_to: function (e, t, n) {
                return Math.min(Math.max(e, t), n)
            },
            initialize_settings: function (t) {
                e.data(t, "bar", e(t).parent()), e.data(t, "bar_o", e(t).parent().offset().left), e.data(t, "bar_w", e(t).parent().outerWidth()), e.data(t, "handle_o", e(t).offset().left), e.data(t, "handle_w", e(t).outerWidth()), e.data(t, "settings", e.extend({}, this.settings, this.data_options(e(t).parent())))
            },
            set_initial_position: function (t) {
                var n = e.data(t.children(".range-slider-handle")[0], "settings"),
                    r = n.initial ? n.initial : Math.floor((n.end - n.start) * .5 / n.step) * n.step,
                    i = t.children(".range-slider-handle");
                this.set_ui(i, r)
            },
            set_value: function (t) {
                var n = this;
                e("[" + n.attr_name() + "]", this.scope).each(function () {
                    e(this).attr(n.attr_name(), t)
                }), !e(this.scope).attr(n.attr_name()) || e(this.scope).attr(n.attr_name(), t), n.reflow()
            },
            reflow: function () {
                var t = this;
                t.S("[" + this.attr_name() + "]").each(function () {
                    var n = e(this).children(".range-slider-handle")[0],
                        r = e(this).attr(t.attr_name());
                    t.initialize_settings(n), r ? t.set_ui(e(n), parseInt(r)) : t.set_initial_position(e(this))
                })
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        var i = i || !1;
        Foundation.libs.joyride = {
            name: "joyride",
            version: "5.2.0",
            defaults: {
                expose: !1,
                modal: !0,
                tip_location: "bottom",
                nub_position: "auto",
                scroll_speed: 1500,
                scroll_animation: "linear",
                timer: 0,
                start_timer_on_click: !0,
                start_offset: 0,
                next_button: !0,
                tip_animation: "fade",
                pause_after: [],
                exposed: [],
                tip_animation_fade_speed: 300,
                cookie_monster: !1,
                cookie_name: "joyride",
                cookie_domain: !1,
                cookie_expires: 365,
                tip_container: "body",
                tip_location_patterns: {
                    top: ["bottom"],
                    bottom: [],
                    left: ["right", "top", "bottom"],
                    right: ["left", "top", "bottom"]
                },
                post_ride_callback: function () {},
                post_step_callback: function () {},
                pre_step_callback: function () {},
                pre_ride_callback: function () {},
                post_expose_callback: function () {},
                template: {
                    link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                    timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                    tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                    wrapper: '<div class="joyride-content-wrapper"></div>',
                    button: '<a href="#" class="small button joyride-next-tip"></a>',
                    modal: '<div class="joyride-modal-bg"></div>',
                    expose: '<div class="joyride-expose-wrapper"></div>',
                    expose_cover: '<div class="joyride-expose-cover"></div>'
                },
                expose_add_class: ""
            },
            init: function (t, n, r) {
                Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || e.extend({}, this.defaults, r || n), this.bindings(n, r)
            },
            events: function () {
                var n = this;
                e(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function (e) {
                        e.preventDefault(), this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
                    }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function (e) {
                        e.preventDefault(), this.end()
                    }.bind(this)), e(t).off(".joyride").on("resize.fndtn.joyride", n.throttle(function () {
                    if (e("[" + n.attr_name() + "]").length > 0 && n.settings.$next_tip) {
                        if (n.settings.exposed.length > 0) {
                            var t = e(n.settings.exposed);
                            t.each(function () {
                                var t = e(this);
                                n.un_expose(t), n.expose(t)
                            })
                        }
                        n.is_phone() ? n.pos_phone() : n.pos_default(!1, !0)
                    }
                }, 100))
            },
            start: function () {
                var t = this,
                    n = e("[" + this.attr_name() + "]", this.scope),
                    r = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                    i = r.length;
                if (!n.length > 0) return;
                this.settings.init || this.events(), this.settings = n.data(this.attr_name(!0) + "-init"), this.settings.$content_el = n, this.settings.$body = e(this.settings.tip_container), this.settings.body_offset = e(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, typeof e.cookie != "function" && (this.settings.cookie_monster = !1);
                if (!this.settings.cookie_monster || this.settings.cookie_monster && !e.cookie(this.settings.cookie_name)) this.settings.$tip_content.each(function (n) {
                    var s = e(this);
                    this.settings = e.extend({}, t.defaults, t.data_options(s));
                    var o = i;
                    while (o--) t.settings[r[o]] = parseInt(t.settings[r[o]], 10);
                    t.create({
                        $li: s,
                        index: n
                    })
                }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")
            },
            resume: function () {
                this.set_li(), this.show()
            },
            tip_template: function (t) {
                var n, r;
                return t.tip_class = t.tip_class || "", n = e(this.settings.template.tip).addClass(t.tip_class), r = e.trim(e(t.li).html()) + this.button_text(t.button_text) + this.settings.template.link + this.timer_instance(t.index), n.append(e(this.settings.template.wrapper)), n.first().attr(this.add_namespace("data-index"), t.index), e(".joyride-content-wrapper", n).append(r), n[0]
            },
            timer_instance: function (t) {
                var n;
                return t === 0 && this.settings.start_timer_on_click && this.settings.timer > 0 || this.settings.timer === 0 ? n = "" : n = e(this.settings.template.timer)[0].outerHTML, n
            },
            button_text: function (t) {
                return this.settings.next_button ? (t = e.trim(t) || "Next", t = e(this.settings.template.button).append(t)[0].outerHTML) : t = "", t
            },
            create: function (t) {
                var n = t.$li.attr(this.add_namespace("data-button")) || t.$li.attr(this.add_namespace("data-text")),
                    r = t.$li.attr("class"),
                    i = e(this.tip_template({
                        tip_class: r,
                        index: t.index,
                        button_text: n,
                        li: t.$li
                    }));
                e(this.settings.tip_container).append(i)
            },
            show: function (t) {
                var n = null;
                this.settings.$li === r || e.inArray(this.settings.$li.index(), this.settings.pause_after) === -1 ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(t), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (t && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = e.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), n = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (n.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function () {
                    n.animate({
                        width: n.parent().width()
                    }, this.settings.timer, "linear")
                }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (n.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function () {
                    n.animate({
                        width: n.parent().width()
                    }, this.settings.timer, "linear")
                }.bind(this), this.settings.tip_animation_fadeSpeed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip) : this.settings.$li && this.settings.$target.length < 1 ? this.show() : this.end()) : this.settings.paused = !0
            },
            is_phone: function () {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            hide: function () {
                this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || e(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(e.proxy(function () {
                    this.hide(), this.css("visibility", "visible")
                }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
            },
            set_li: function (e) {
                e ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = this.settings.$li.next(), this.set_next_tip()), this.set_target()
            },
            set_next_tip: function () {
                this.settings.$next_tip = e(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
            },
            set_target: function () {
                var t = this.settings.$li.attr(this.add_namespace("data-class")),
                    r = this.settings.$li.attr(this.add_namespace("data-id")),
                    i = function () {
                        return r ? e(n.getElementById(r)) : t ? e("." + t).first() : e("body")
                    };
                this.settings.$target = i()
            },
            scroll_to: function () {
                var n, r;
                n = e(t).height() / 2, r = Math.ceil(this.settings.$target.offset().top - n + this.settings.$next_tip.outerHeight()), r != 0 && e("html, body").animate({
                    scrollTop: r
                }, this.settings.scroll_speed, "swing")
            },
            paused: function () {
                return e.inArray(this.settings.$li.index() + 1, this.settings.pause_after) === -1
            },
            restart: function () {
                this.hide(), this.settings.$li = r, this.show("init")
            },
            pos_default: function (n, r) {
                var i = Math.ceil(e(t).height() / 2),
                    s = this.settings.$next_tip.offset(),
                    o = this.settings.$next_tip.find(".joyride-nub"),
                    u = Math.ceil(o.outerWidth() / 2),
                    a = Math.ceil(o.outerHeight() / 2),
                    f = n || !1;
                f && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), typeof r == "undefined" && (r = !1), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(o) : (this.bottom() ? (this.rtl ? this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + a + this.settings.$target.outerHeight(),
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                }) : this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + a + this.settings.$target.outerHeight(),
                    left: this.settings.$target.offset().left
                }), this.nub_position(o, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.rtl ? this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - a,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                }) : this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - a,
                    left: this.settings.$target.offset().left
                }), this.nub_position(o, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top,
                    left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + u
                }), this.nub_position(o, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top,
                    left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - u
                }), this.nub_position(o, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (o.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())), f && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_phone: function (t) {
                var n = this.settings.$next_tip.outerHeight(),
                    r = this.settings.$next_tip.offset(),
                    i = this.settings.$target.outerHeight(),
                    s = e(".joyride-nub", this.settings.$next_tip),
                    o = Math.ceil(s.outerHeight() / 2),
                    u = t || !1;
                s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), u && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(s) : this.top() ? (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top - n - o
                }), s.addClass("bottom")) : (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top + i + o
                }), s.addClass("top")), u && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_modal: function (e) {
                this.center(), e.hide(), this.show_modal()
            },
            show_modal: function () {
                if (!this.settings.$next_tip.data("closed")) {
                    var t = e(".joyride-modal-bg");
                    t.length < 1 && e("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? t.show() : t.fadeIn(this.settings.tip_animation_fade_speed)
                }
            },
            expose: function () {
                var n, r, i, s, o, u = "expose-" + this.random_str(6);
                if (arguments.length > 0 && arguments[0] instanceof e) i = arguments[0];
                else {
                    if (!this.settings.$target || !! /body/i.test(this.settings.$target.selector)) return !1;
                    i = this.settings.$target
                } if (i.length < 1) return t.console && console.error("element not valid", i), !1;
                n = e(this.settings.template.expose), this.settings.$body.append(n), n.css({
                    top: i.offset().top,
                    left: i.offset().left,
                    width: i.outerWidth(!0),
                    height: i.outerHeight(!0)
                }), r = e(this.settings.template.expose_cover), s = {
                    zIndex: i.css("z-index"),
                    position: i.css("position")
                }, o = i.attr("class") == null ? "" : i.attr("class"), i.css("z-index", parseInt(n.css("z-index")) + 1), s.position == "static" && i.css("position", "relative"), i.data("expose-css", s), i.data("orig-class", o), i.attr("class", o + " " + this.settings.expose_add_class), r.css({
                    top: i.offset().top,
                    left: i.offset().left,
                    width: i.outerWidth(!0),
                    height: i.outerHeight(!0)
                }), this.settings.modal && this.show_modal(), this.settings.$body.append(r), n.addClass(u), r.addClass(u), i.data("expose", u), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, i), this.add_exposed(i)
            },
            un_expose: function () {
                var n, r, i, s, o, u = !1;
                if (arguments.length > 0 && arguments[0] instanceof e) r = arguments[0];
                else {
                    if (!this.settings.$target || !! /body/i.test(this.settings.$target.selector)) return !1;
                    r = this.settings.$target
                } if (r.length < 1) return t.console && console.error("element not valid", r), !1;
                n = r.data("expose"), i = e("." + n), arguments.length > 1 && (u = arguments[1]), u === !0 ? e(".joyride-expose-wrapper,.joyride-expose-cover").remove() : i.remove(), s = r.data("expose-css"), s.zIndex == "auto" ? r.css("z-index", "") : r.css("z-index", s.zIndex), s.position != r.css("position") && (s.position == "static" ? r.css("position", "") : r.css("position", s.position)), o = r.data("orig-class"), r.attr("class", o), r.removeData("orig-classes"), r.removeData("expose"), r.removeData("expose-z-index"), this.remove_exposed(r)
            },
            add_exposed: function (t) {
                this.settings.exposed = this.settings.exposed || [], t instanceof e || typeof t == "object" ? this.settings.exposed.push(t[0]) : typeof t == "string" && this.settings.exposed.push(t)
            },
            remove_exposed: function (t) {
                var n, r;
                t instanceof e ? n = t[0] : typeof t == "string" && (n = t), this.settings.exposed = this.settings.exposed || [], r = this.settings.exposed.length;
                while (r--)
                    if (this.settings.exposed[r] == n) {
                        this.settings.exposed.splice(r, 1);
                        return
                    }
            },
            center: function () {
                var n = e(t);
                return this.settings.$next_tip.css({
                    top: (n.height() - this.settings.$next_tip.outerHeight()) / 2 + n.scrollTop(),
                    left: (n.width() - this.settings.$next_tip.outerWidth()) / 2 + n.scrollLeft()
                }), !0
            },
            bottom: function () {
                return /bottom/i.test(this.settings.tip_settings.tip_location)
            },
            top: function () {
                return /top/i.test(this.settings.tip_settings.tip_location)
            },
            right: function () {
                return /right/i.test(this.settings.tip_settings.tip_location)
            },
            left: function () {
                return /left/i.test(this.settings.tip_settings.tip_location)
            },
            corners: function (n) {
                var r = e(t),
                    i = r.height() / 2,
                    s = Math.ceil(this.settings.$target.offset().top - i + this.settings.$next_tip.outerHeight()),
                    o = r.width() + r.scrollLeft(),
                    u = r.height() + s,
                    a = r.height() + r.scrollTop(),
                    f = r.scrollTop();
                return s < f && (s < 0 ? f = 0 : f = s), u > a && (a = u), [n.offset().top < f, o < n.offset().left + n.outerWidth(), a < n.offset().top + n.outerHeight(), r.scrollLeft() > n.offset().left]
            },
            visible: function (e) {
                var t = e.length;
                while (t--)
                    if (e[t]) return !1;
                return !0
            },
            nub_position: function (e, t, n) {
                t === "auto" ? e.addClass(n) : e.addClass(t)
            },
            startTimer: function () {
                this.settings.$li.length ? this.settings.automate = setTimeout(function () {
                    this.hide(), this.show(), this.startTimer()
                }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
            },
            end: function () {
                this.settings.cookie_monster && e.cookie(this.settings.cookie_name, "ridden", {
                    expires: this.settings.cookie_expires,
                    domain: this.settings.cookie_domain
                }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), this.settings.$next_tip.data("closed", !0), e(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip), e(".joyride-tip-guide").remove()
            },
            off: function () {
                e(this.scope).off(".joyride"), e(t).off(".joyride"), e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), e(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        Foundation.libs.equalizer = {
            name: "equalizer",
            version: "5.2.0",
            settings: {
                use_tallest: !0,
                before_height_change: e.noop,
                after_height_change: e.noop
            },
            init: function (e, t, n) {
                this.bindings(t, n), this.reflow()
            },
            events: function () {
                this.S(t).off(".equalizer").on("resize.fndtn.equalizer", function (e) {
                    this.reflow()
                }.bind(this))
            },
            equalize: function (t) {
                var n = !1,
                    r = t.find("[" + this.attr_name() + "-watch]"),
                    i = r.first().offset().top,
                    s = t.data(this.attr_name(!0) + "-init");
                if (r.length === 0) return;
                s.before_height_change(), t.trigger("before-height-change"), r.height("inherit"), r.each(function () {
                    var t = e(this);
                    t.offset().top !== i && (n = !0)
                });
                if (n) return;
                var o = r.map(function () {
                    return e(this).outerHeight()
                }).get();
                if (s.use_tallest) {
                    var u = Math.max.apply(null, o);
                    r.css("height", u)
                } else {
                    var a = Math.min.apply(null, o);
                    r.css("height", a)
                }
                s.after_height_change(), t.trigger("after-height-change")
            },
            reflow: function () {
                var t = this;
                this.S("[" + this.attr_name() + "]", this.scope).each(function () {
                    t.equalize(e(this))
                })
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        Foundation.libs.dropdown = {
            name: "dropdown",
            version: "5.2.0",
            settings: {
                active_class: "open",
                align: "bottom",
                is_hover: !1,
                opened: function () {},
                closed: function () {}
            },
            init: function (e, t, n) {
                Foundation.inherit(this, "throttle"), this.bindings(t, n)
            },
            events: function (n) {
                var r = this,
                    i = r.S;
                i(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function (e) {
                    var t = i(this).data(r.attr_name(!0) + "-init") || r.settings;
                    e.preventDefault(), (!t.is_hover || Modernizr.touch) && r.toggle(i(this))
                }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function (e) {
                        var t = i(this);
                        clearTimeout(r.timeout);
                        if (t.data(r.data_attr())) var n = i("#" + t.data(r.data_attr())),
                            s = t;
                        else {
                            var n = t;
                            s = i("[" + r.attr_name() + "='" + n.attr("id") + "']")
                        }
                        var o = s.data(r.attr_name(!0) + "-init") || r.settings;
                        i(e.target).data(r.data_attr()) && o.is_hover && r.closeall.call(r), o.is_hover && r.open.apply(r, [n, s])
                    }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function (e) {
                        var t = i(this);
                        r.timeout = setTimeout(function () {
                            if (t.data(r.data_attr())) {
                                var e = t.data(r.data_attr(!0) + "-init") || r.settings;
                                e.is_hover && r.close.call(r, i("#" + t.data(r.data_attr())))
                            } else {
                                var n = i("[" + r.attr_name() + '="' + i(this).attr("id") + '"]'),
                                    e = n.data(r.attr_name(!0) + "-init") || r.settings;
                                e.is_hover && r.close.call(r, t)
                            }
                        }.bind(this), 150)
                    }).on("click.fndtn.dropdown", function (t) {
                        var n = i(t.target).closest("[" + r.attr_name() + "-content]");
                        if (i(t.target).data(r.data_attr()) || i(t.target).parent().data(r.data_attr())) return;
                        if (!i(t.target).data("revealId") && n.length > 0 && (i(t.target).is("[" + r.attr_name() + "-content]") || e.contains(n.first()[0], t.target))) {
                            t.stopPropagation();
                            return
                        }
                        r.close.call(r, i("[" + r.attr_name() + "-content]"))
                    }).on("opened.fndtn.dropdown", "[" + r.attr_name() + "-content]", function () {
                        r.settings.opened.call(this)
                    }).on("closed.fndtn.dropdown", "[" + r.attr_name() + "-content]", function () {
                        r.settings.closed.call(this)
                    }), i(t).off(".dropdown").on("resize.fndtn.dropdown", r.throttle(function () {
                    r.resize.call(r)
                }, 50)), this.resize()
            },
            close: function (e) {
                var t = this;
                e.each(function () {
                    t.S(this).hasClass(t.settings.active_class) && (t.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").removeClass(t.settings.active_class), t.S(this).trigger("closed", [e]))
                })
            },
            closeall: function () {
                var t = this;
                e.each(t.S("[" + this.attr_name() + "-content]"), function () {
                    t.close.call(t, t.S(this))
                })
            },
            open: function (e, t) {
                this.css(e.addClass(this.settings.active_class), t), e.trigger("opened", [e, t])
            },
            data_attr: function () {
                return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
            },
            toggle: function (e) {
                var t = this.S("#" + e.data(this.data_attr()));
                if (t.length === 0) return;
                this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(t)), t.hasClass(this.settings.active_class) ? this.close.call(this, t) : (this.close.call(this, this.S("[" + this.attr_name() + "-content]")), this.open.call(this, t, e))
            },
            resize: function () {
                var e = this.S("[" + this.attr_name() + "-content].open"),
                    t = this.S("[" + this.attr_name() + "='" + e.attr("id") + "']");
                e.length && t.length && this.css(e, t)
            },
            css: function (e, t) {
                this.clear_idx();
                if (this.small()) {
                    var n = this.dirs.bottom.call(e, t);
                    e.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                        position: "absolute",
                        width: "95%",
                        "max-width": "none",
                        top: n.top
                    }), e.css(Foundation.rtl ? "right" : "left", "2.5%")
                } else {
                    var r = t.data(this.attr_name(!0) + "-init") || this.settings;
                    this.style(e, t, r)
                }
                return e
            },
            style: function (t, n, r) {
                var i = e.extend({
                    position: "absolute"
                }, this.dirs[r.align].call(t, n, r));
                t.attr("style", "").css(i)
            },
            dirs: {
                _base: function (e) {
                    var t = this.offsetParent(),
                        n = t.offset(),
                        r = e.offset();
                    return r.top -= n.top, r.left -= n.left, r
                },
                top: function (e, t) {
                    var n = Foundation.libs.dropdown,
                        r = n.dirs._base.call(this, e),
                        i = e.outerWidth() / 2 - 8;
                    return this.addClass("drop-top"), (e.outerWidth() < this.outerWidth() || n.small()) && n.adjust_pip(i, r), Foundation.rtl ? {
                        left: r.left - this.outerWidth() + e.outerWidth(),
                        top: r.top - this.outerHeight()
                    } : {
                        left: r.left,
                        top: r.top - this.outerHeight()
                    }
                },
                bottom: function (e, t) {
                    var n = Foundation.libs.dropdown,
                        r = n.dirs._base.call(this, e),
                        i = e.outerWidth() / 2 - 8;
                    return (e.outerWidth() < this.outerWidth() || n.small()) && n.adjust_pip(i, r), n.rtl ? {
                        left: r.left - this.outerWidth() + e.outerWidth(),
                        top: r.top + e.outerHeight()
                    } : {
                        left: r.left,
                        top: r.top + e.outerHeight()
                    }
                },
                left: function (e, t) {
                    var n = Foundation.libs.dropdown.dirs._base.call(this, e);
                    return this.addClass("drop-left"), {
                        left: n.left - this.outerWidth(),
                        top: n.top
                    }
                },
                right: function (e, t) {
                    var n = Foundation.libs.dropdown.dirs._base.call(this, e);
                    return this.addClass("drop-right"), {
                        left: n.left + e.outerWidth(),
                        top: n.top
                    }
                }
            },
            adjust_pip: function (e, t) {
                var n = Foundation.stylesheet;
                this.small() && (e += t.left - 8), this.rule_idx = n.cssRules.length;
                var r = ".f-dropdown.open:before",
                    i = ".f-dropdown.open:after",
                    s = "left: " + e + "px;",
                    o = "left: " + (e - 1) + "px;";
                n.insertRule ? (n.insertRule([r, "{", s, "}"].join(" "), this.rule_idx), n.insertRule([i, "{", o, "}"].join(" "), this.rule_idx + 1)) : (n.addRule(r, s, this.rule_idx), n.addRule(i, o, this.rule_idx + 1))
            },
            clear_idx: function () {
                var e = Foundation.stylesheet;
                this.rule_idx && (e.deleteRule(this.rule_idx), e.deleteRule(this.rule_idx), delete this.rule_idx)
            },
            small: function () {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            off: function () {
                this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(t).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        Foundation.libs.clearing = {
            name: "clearing",
            version: "5.2.0",
            settings: {
                templates: {
                    viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
                },
                close_selectors: ".clearing-close",
                touch_label: "&larr;&nbsp;Swipe to Advance&nbsp;&rarr;",
                init: !1,
                locked: !1
            },
            init: function (e, t, n) {
                var r = this;
                Foundation.inherit(this, "throttle image_loaded"), this.bindings(t, n), r.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(r.S("li", this.scope)) : r.S("[" + this.attr_name() + "]", this.scope).each(function () {
                    r.assemble(r.S("li", this))
                })
            },
            events: function (r) {
                var i = this,
                    s = i.S;
                e(".scroll-container").length > 0 && (this.scope = e(".scroll-container")), s(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li", function (e, t, n) {
                    var t = t || s(this),
                        n = n || t,
                        r = t.next("li"),
                        o = t.closest("[" + i.attr_name() + "]").data(i.attr_name(!0) + "-init"),
                        u = s(e.target);
                    e.preventDefault(), o || (i.init(), o = t.closest("[" + i.attr_name() + "]").data(i.attr_name(!0) + "-init")), n.hasClass("visible") && t[0] === n[0] && r.length > 0 && i.is_open(t) && (n = r, u = s("img", n)), i.open(u, t, n), i.update_paddles(n)
                }).on("click.fndtn.clearing", ".clearing-main-next", function (e) {
                        i.nav(e, "next")
                    }).on("click.fndtn.clearing", ".clearing-main-prev", function (e) {
                        i.nav(e, "prev")
                    }).on("click.fndtn.clearing", this.settings.close_selectors, function (e) {
                        Foundation.libs.clearing.close(e, this)
                    }), e(n).on("keydown.fndtn.clearing", function (e) {
                    i.keydown(e)
                }), s(t).off(".clearing").on("resize.fndtn.clearing", function () {
                    i.resize()
                }), this.swipe_events(r)
            },
            swipe_events: function (e) {
                var t = this,
                    n = t.S;
                n(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function (e) {
                    e.touches || (e = e.originalEvent);
                    var t = {
                        start_page_x: e.touches[0].pageX,
                        start_page_y: e.touches[0].pageY,
                        start_time: (new Date).getTime(),
                        delta_x: 0,
                        is_scrolling: r
                    };
                    n(this).data("swipe-transition", t), e.stopPropagation()
                }).on("touchmove.fndtn.clearing", ".visible-img", function (e) {
                        e.touches || (e = e.originalEvent);
                        if (e.touches.length > 1 || e.scale && e.scale !== 1) return;
                        var r = n(this).data("swipe-transition");
                        typeof r == "undefined" && (r = {}), r.delta_x = e.touches[0].pageX - r.start_page_x, typeof r.is_scrolling == "undefined" && (r.is_scrolling = !! (r.is_scrolling || Math.abs(r.delta_x) < Math.abs(e.touches[0].pageY - r.start_page_y)));
                        if (!r.is_scrolling && !r.active) {
                            e.preventDefault();
                            var i = r.delta_x < 0 ? "next" : "prev";
                            r.active = !0, t.nav(e, i)
                        }
                    }).on("touchend.fndtn.clearing", ".visible-img", function (e) {
                        n(this).data("swipe-transition", {}), e.stopPropagation()
                    })
            },
            assemble: function (t) {
                var n = t.parent();
                if (n.parent().hasClass("carousel")) return;
                n.after('<div id="foundationClearingHolder"></div>');
                var r = this.S("#foundationClearingHolder"),
                    i = n.data(this.attr_name(!0) + "-init"),
                    s = n.detach(),
                    o = {
                        grid: '<div class="carousel">' + s[0].outerHTML + "</div>",
                        viewing: i.templates.viewing
                    }, u = '<div class="clearing-assembled"><div>' + o.viewing + o.grid + "</div></div>",
                    a = this.settings.touch_label;
                Modernizr.touch && (u = e(u).find(".clearing-touch-label").html(a).end()), r.after(u).remove()
            },
            open: function (t, r, i) {
                function p() {
                    setTimeout(function () {
                        this.image_loaded(l, function () {
                            l.outerWidth() === 1 && !h ? p.call(this) : d.call(this, l)
                        }.bind(this))
                    }.bind(this), 50)
                }

                function d(t) {
                    var n = e(t);
                    t.css("visibility", "visible"), o.css("overflow", "hidden"), u.addClass("clearing-blackout"), a.addClass("clearing-container"), f.show(), this.fix_height(i).caption(s.S(".clearing-caption", f), n).center_and_label(t, c).shift(r, i, function () {
                        i.siblings().removeClass("visible"), i.addClass("visible")
                    })
                }
                var s = this,
                    o = e(n.body),
                    u = i.closest(".clearing-assembled"),
                    a = e("div", u).first(),
                    f = e(".visible-img", a),
                    l = e("img", f).not(t),
                    c = e(".clearing-touch-label", ".clearing-blackout"),
                    h = !1;
                l.error(function () {
                    h = !0
                }), this.locked() || (l.attr("src", this.load(t)).css("visibility", "hidden"), p.call(this))
            },
            close: function (t, r) {
                t.preventDefault();
                var i = function (e) {
                        return /blackout/.test(e.selector) ? e : e.closest(".clearing-blackout")
                    }(e(r)),
                    s = e(n.body),
                    o, u;
                return r === t.target && i && (s.css("overflow", ""), o = e("div", i).first(), u = e(".visible-img", o), this.settings.prev_index = 0, e("ul[" + this.attr_name() + "]", i).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), o.removeClass("clearing-container"), u.hide()), !1
            },
            is_open: function (e) {
                return e.parent().prop("style").length > 0
            },
            keydown: function (t) {
                var n = e(".clearing-blackout ul[" + this.attr_name() + "]"),
                    r = this.rtl ? 37 : 39,
                    i = this.rtl ? 39 : 37,
                    s = 27;
                t.which === r && this.go(n, "next"), t.which === i && this.go(n, "prev"), t.which === s && this.S("a.clearing-close").trigger("click")
            },
            nav: function (t, n) {
                var r = e("ul[" + this.attr_name() + "]", ".clearing-blackout");
                t.preventDefault(), this.go(r, n)
            },
            resize: function () {
                var t = e("img", ".clearing-blackout .visible-img"),
                    n = e(".clearing-touch-label", ".clearing-blackout");
                t.length && this.center_and_label(t, n)
            },
            fix_height: function (e) {
                var t = e.parent().children(),
                    n = this;
                return t.each(function () {
                    var e = n.S(this),
                        t = e.find("img");
                    e.height() > t.outerHeight() && e.addClass("fix-height")
                }).closest("ul").width(t.length * 100 + "%"), this
            },
            update_paddles: function (e) {
                var t = e.closest(".carousel").siblings(".visible-img");
                e.next().length > 0 ? this.S(".clearing-main-next", t).removeClass("disabled") : this.S(".clearing-main-next", t).addClass("disabled"), e.prev().length > 0 ? this.S(".clearing-main-prev", t).removeClass("disabled") : this.S(".clearing-main-prev", t).addClass("disabled")
            },
            center_and_label: function (e, t) {
                return this.rtl ? (e.css({
                    marginRight: -(e.outerWidth() / 2),
                    marginTop: -(e.outerHeight() / 2),
                    left: "auto",
                    right: "50%"
                }), t.length > 0 && t.css({
                    marginRight: -(t.outerWidth() / 2),
                    marginTop: -(e.outerHeight() / 2) - t.outerHeight() - 10,
                    left: "auto",
                    right: "50%"
                })) : (e.css({
                    marginLeft: -(e.outerWidth() / 2),
                    marginTop: -(e.outerHeight() / 2)
                }), t.length > 0 && t.css({
                    marginLeft: -(t.outerWidth() / 2),
                    marginTop: -(e.outerHeight() / 2) - t.outerHeight() - 10
                })), this
            },
            load: function (e) {
                if (e[0].nodeName === "A") var t = e.attr("href");
                else var t = e.parent().attr("href");
                return this.preload(e), t ? t : e.attr("src")
            },
            preload: function (e) {
                this.img(e.closest("li").next()).img(e.closest("li").prev())
            },
            img: function (e) {
                if (e.length) {
                    var t = new Image,
                        n = this.S("a", e);
                    n.length ? t.src = n.attr("href") : t.src = this.S("img", e).attr("src")
                }
                return this
            },
            caption: function (e, t) {
                var n = t.data("caption");
                return n ? e.html(n).show() : e.text("").hide(), this
            },
            go: function (e, t) {
                var n = this.S(".visible", e),
                    r = n[t]();
                r.length && this.S("img", r).trigger("click", [n, r])
            },
            shift: function (e, t, n) {
                var r = t.parent(),
                    i = this.settings.prev_index || t.index(),
                    s = this.direction(r, e, t),
                    o = this.rtl ? "right" : "left",
                    u = parseInt(r.css("left"), 10),
                    a = t.outerWidth(),
                    f, l = {};
                t.index() !== i && !/skip/.test(s) ? /left/.test(s) ? (this.lock(), l[o] = u + a, r.animate(l, 300, this.unlock())) : /right/.test(s) && (this.lock(), l[o] = u - a, r.animate(l, 300, this.unlock())) : /skip/.test(s) && (f = t.index() - this.settings.up_count, this.lock(), f > 0 ? (l[o] = -(f * a), r.animate(l, 300, this.unlock())) : (l[o] = 0, r.animate(l, 300, this.unlock()))), n()
            },
            direction: function (e, t, n) {
                var r = this.S("li", e),
                    i = r.outerWidth() + r.outerWidth() / 4,
                    s = Math.floor(this.S(".clearing-container").outerWidth() / i) - 1,
                    o = r.index(n),
                    u;
                return this.settings.up_count = s, this.adjacent(this.settings.prev_index, o) ? o > s && o > this.settings.prev_index ? u = "right" : o > s - 1 && o <= this.settings.prev_index ? u = "left" : u = !1 : u = "skip", this.settings.prev_index = o, u
            },
            adjacent: function (e, t) {
                for (var n = t + 1; n >= t - 1; n--)
                    if (n === e) return !0;
                return !1
            },
            lock: function () {
                this.settings.locked = !0
            },
            unlock: function () {
                this.settings.locked = !1
            },
            locked: function () {
                return this.settings.locked
            },
            off: function () {
                this.S(this.scope).off(".fndtn.clearing"), this.S(t).off(".fndtn.clearing")
            },
            reflow: function () {
                this.init()
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        var i = function () {}, s = function (r, i) {
            if (r.hasClass(i.slides_container_class)) return this;
            var s = this,
                a, f = r,
                l, c, h, p = 0,
                d, v = !1;
            s.cache = {}, s.slides = function () {
                return f.children(i.slide_selector)
            }, s.slides().first().addClass(i.active_slide_class), s.update_slide_number = function (t) {
                i.slide_number && (l.find("span:first").text(parseInt(t) + 1), l.find("span:last").text(s.slides().length)), i.bullets && (c.children().removeClass(i.bullets_active_class), e(c.children().get(t)).addClass(i.bullets_active_class))
            }, s.update_active_link = function (t) {
                var n = e('a[data-orbit-link="' + s.slides().eq(t).attr("data-orbit-slide") + '"]');
                n.siblings().removeClass(i.bullets_active_class), n.addClass(i.bullets_active_class)
            }, s.build_markup = function () {
                f.wrap('<div class="' + i.container_class + '"></div>'), a = f.parent(), f.addClass(i.slides_container_class), i.navigation_arrows && (a.append(e('<a href="#"><span></span></a>').addClass(i.prev_class)), a.append(e('<a href="#"><span></span></a>').addClass(i.next_class))), i.timer && (h = e("<div>").addClass(i.timer_container_class), h.append("<span>"), h.append(e("<div>").addClass(i.timer_progress_class)), h.addClass(i.timer_paused_class), a.append(h)), i.slide_number && (l = e("<div>").addClass(i.slide_number_class), l.append("<span></span> " + i.slide_number_text + " <span></span>"), a.append(l)), i.bullets && (c = e("<ol>").addClass(i.bullets_container_class), a.append(c), c.wrap('<div class="orbit-bullets-container"></div>'), s.slides().each(function (t, n) {
                    var r = e("<li>").attr("data-orbit-slide", t);
                    c.append(r)
                })), i.stack_on_small && a.addClass(i.stack_on_small_class)
            }, s._prepare_direction = function (t, n) {
                var r = "next";
                t <= p && (r = "prev"), i.animation === "slide" && setTimeout(function () {
                    f.removeClass("swipe-prev swipe-next"), r === "next" ? f.addClass("swipe-next") : r === "prev" && f.addClass("swipe-prev")
                }, 0);
                var o = s.slides();
                if (t >= o.length) {
                    if (!i.circular) return !1;
                    t = 0
                } else if (t < 0) {
                    if (!i.circular) return !1;
                    t = o.length - 1
                }
                var u = e(o.get(p)),
                    a = e(o.get(t));
                return [r, u, a, t]
            }, s._goto = function (e, t) {
                if (e === null) return !1;
                if (s.cache.animating) return !1;
                if (e === p) return !1;
                typeof s.cache.timer == "object" && s.cache.timer.restart();
                var n = s.slides();
                s.cache.animating = !0;
                var r = s._prepare_direction(e),
                    o = r[0],
                    u = r[1],
                    a = r[2],
                    e = r[3];
                f.trigger("before-slide-change.fndtn.orbit"), i.before_slide_change(), p = e, u.css("transitionDuration", i.animation_speed + "ms"), a.css("transitionDuration", i.animation_speed + "ms");
                var l = function () {
                    var r = function () {
                        t === !0 && s.cache.timer.restart(), s.update_slide_number(p), a.addClass(i.active_slide_class), s.update_active_link(e), f.trigger("after-slide-change.fndtn.orbit", [{
                            slide_number: p,
                            total_slides: n.length
                        }]), i.after_slide_change(p, n.length), setTimeout(function () {
                            s.cache.animating = !1
                        }, 100)
                    };
                    f.height() != a.height() && i.variable_height ? f.animate({
                        height: a.height()
                    }, 250, "linear", r) : r()
                };
                if (n.length === 1) return l(), !1;
                var c = function () {
                    o === "next" && d.next(u, a, l), o === "prev" && d.prev(u, a, l)
                };
                a.height() > f.height() && i.variable_height ? f.animate({
                    height: a.height()
                }, 250, "linear", c) : c()
            }, s.next = function (e) {
                e.stopImmediatePropagation(), e.preventDefault(), s._prepare_direction(p + 1), setTimeout(function () {
                    s._goto(p + 1)
                }, 100)
            }, s.prev = function (e) {
                e.stopImmediatePropagation(), e.preventDefault(), s._prepare_direction(p - 1), setTimeout(function () {
                    s._goto(p - 1)
                }, 100)
            }, s.link_custom = function (t) {
                t.preventDefault();
                var n = e(this).attr("data-orbit-link");
                if (typeof n == "string" && (n = e.trim(n)) != "") {
                    var r = a.find("[data-orbit-slide=" + n + "]");
                    r.index() != -1 && setTimeout(function () {
                        s._goto(r.index())
                    }, 100)
                }
            }, s.link_bullet = function (t) {
                var n = e(this).attr("data-orbit-slide");
                if (typeof n == "string" && (n = e.trim(n)) != "")
                    if (isNaN(parseInt(n))) {
                        var r = a.find("[data-orbit-slide=" + n + "]");
                        r.index() != -1 && setTimeout(function () {
                            s._goto(r.index() + 1)
                        }, 100)
                    } else setTimeout(function () {
                        s._goto(parseInt(n))
                    }, 100)
            }, s.timer_callback = function () {
                s._goto(p + 1, !0)
            }, s.compute_dimensions = function () {
                var t = e(s.slides().get(p)),
                    n = t.height();
                i.variable_height || s.slides().each(function () {
                    e(this).height() > n && (n = e(this).height())
                }), f.height(n)
            }, s.create_timer = function () {
                var e = new o(a.find("." + i.timer_container_class), i, s.timer_callback);
                return e
            }, s.stop_timer = function () {
                typeof s.cache.timer == "object" && s.cache.timer.stop()
            }, s.toggle_timer = function () {
                var e = a.find("." + i.timer_container_class);
                e.hasClass(i.timer_paused_class) ? (typeof s.cache.timer == "undefined" && (s.cache.timer = s.create_timer()), s.cache.timer.start()) : typeof s.cache.timer == "object" && s.cache.timer.stop()
            }, s.init = function () {
                s.build_markup(), i.timer && (s.cache.timer = s.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), s.cache.timer.start)), i.animation === "fade" && f.addClass("fade"), d = new u(i, f), a.on("click", "." + i.next_class, s.next), a.on("click", "." + i.prev_class, s.prev), a.on("click", "[data-orbit-slide]", s.link_bullet), a.on("click", s.toggle_timer), i.swipe && f.on("touchstart.fndtn.orbit", function (e) {
                    e.preventDefault(), e.stopPropagation();
                    if (s.cache.animating) return;
                    e.touches || (e = e.originalEvent), s.cache.start_page_x = e.touches[0].pageX, s.cache.start_page_y = e.touches[0].pageY, s.cache.start_time = (new Date).getTime(), s.cache.delta_x = 0, s.cache.is_scrolling = null, s.cache.direction = null, s.stop_timer()
                }).on("touchmove.fndtn.orbit", function (e) {
                        if (s.cache.animating) return;
                        e.preventDefault(), e.stopPropagation(), requestAnimationFrame(function () {
                            e.touches || (e = e.originalEvent);
                            if (e.touches.length > 1 || e.scale && e.scale !== 1) return;
                            s.cache.delta_x = e.touches[0].pageX - s.cache.start_page_x, s.cache.is_scrolling === null && (s.cache.is_scrolling = !! (s.cache.is_scrolling || Math.abs(s.cache.delta_x) < Math.abs(e.touches[0].pageY - s.cache.start_page_y)));
                            if (s.cache.is_scrolling) return;
                            var t = s.cache.delta_x < 0 ? p + 1 : p - 1;
                            if (s.cache.direction !== t) {
                                var n = s._prepare_direction(t);
                                s.cache.direction = t, s.cache.dir = n[0], s.cache.current = n[1], s.cache.next = n[2]
                            }
                            if (i.animation === "slide") {
                                var r, o;
                                r = s.cache.delta_x / a.width() * 100, r >= 0 ? o = -(100 - r) : o = 100 + r, s.cache.current.css("transform", "translate3d(" + r + "%,0,0)"), s.cache.next.css("transform", "translate3d(" + o + "%,0,0)")
                            }
                        })
                    }).on("touchend.fndtn.orbit", function (e) {
                        if (s.cache.animating) return;
                        e.preventDefault(), e.stopPropagation(), setTimeout(function () {
                            s._goto(s.cache.direction)
                        }, 50)
                    }), a.on("mouseenter.fndtn.orbit", function (e) {
                    i.timer && i.pause_on_hover && s.stop_timer()
                }).on("mouseleave.fndtn.orbit", function (e) {
                        i.timer && i.resume_on_mouseout && s.cache.timer.start()
                    }), e(n).on("click", "[data-orbit-link]", s.link_custom), e(t).on("resize", s.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), s.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function () {
                    a.prev(".preloader").css("display", "none"), s.update_slide_number(0), s.update_active_link(0), f.trigger("ready.fndtn.orbit")
                })
            }, s.init()
        }, o = function (e, t, n) {
            var r = this,
                i = t.timer_speed,
                s = e.find("." + t.timer_progress_class),
                o, u, a = -1;
            this.update_progress = function (e) {
                var t = s.clone();
                t.attr("style", ""), t.css("width", e + "%"), s.replaceWith(t), s = t
            }, this.restart = function () {
                clearTimeout(u), e.addClass(t.timer_paused_class), a = -1, r.update_progress(0)
            }, this.start = function () {
                if (!e.hasClass(t.timer_paused_class)) return !0;
                a = a === -1 ? i : a, e.removeClass(t.timer_paused_class), o = (new Date).getTime(), s.animate({
                    width: "100%"
                }, a, "linear"), u = setTimeout(function () {
                    r.restart(), n()
                }, a), e.trigger("timer-started.fndtn.orbit")
            }, this.stop = function () {
                if (e.hasClass(t.timer_paused_class)) return !0;
                clearTimeout(u), e.addClass(t.timer_paused_class);
                var n = (new Date).getTime();
                a -= n - o;
                var s = 100 - a / i * 100;
                r.update_progress(s), e.trigger("timer-stopped.fndtn.orbit")
            }
        }, u = function (e, t) {
            var n = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";
            this.next = function (e, r, i) {
                r.on(n, function (t) {
                    r.unbind(n), e.removeClass("active animate-out"), r.removeClass("animate-in"), i()
                }), t.children().css({
                    transform: "",
                    transitionDuration: ""
                }), e.addClass("animate-out"), r.addClass("animate-in")
            }, this.prev = function (e, t, r) {
                t.on(n, function (i) {
                    t.unbind(n), e.removeClass("active animate-out"), t.removeClass("animate-in"), r()
                }), e.css({
                    transform: "",
                    transitionDuration: ""
                }).addClass("animate-out"), t.css({
                    transform: "",
                    transitionDuration: ""
                }).addClass("animate-in")
            }
        };
        Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
            name: "orbit",
            version: "5.2.0",
            settings: {
                animation: "slide",
                timer_speed: 1e4,
                pause_on_hover: !0,
                resume_on_mouseout: !1,
                animation_speed: 500,
                stack_on_small: !1,
                navigation_arrows: !0,
                slide_number: !0,
                slide_number_text: "of",
                container_class: "orbit-container",
                stack_on_small_class: "orbit-stack-on-small",
                next_class: "orbit-next",
                prev_class: "orbit-prev",
                timer_container_class: "orbit-timer",
                timer_paused_class: "paused",
                timer_progress_class: "orbit-progress",
                slides_container_class: "orbit-slides-container",
                slide_selector: "*",
                bullets_container_class: "orbit-bullets",
                bullets_active_class: "active",
                slide_number_class: "orbit-slide-number",
                caption_class: "orbit-caption",
                active_slide_class: "active",
                orbit_transition_class: "orbit-transitioning",
                bullets: !0,
                circular: !0,
                timer: !0,
                variable_height: !1,
                swipe: !0,
                before_slide_change: i,
                after_slide_change: i
            },
            init: function (e, t, n) {
                var r = this;
                this.bindings(t, n)
            },
            events: function (e) {
                var t = new s(this.S(e), this.S(e).data("orbit-init"));
                this.S(e).data(self.name + "-instance", t)
            },
            reflow: function () {
                var e = this;
                if (e.S(e.scope).is("[data-orbit]")) {
                    var t = e.S(e.scope),
                        n = t.data(e.name + "-instance");
                    n.compute_dimensions()
                } else e.S("[data-orbit]", e.scope).each(function (t, n) {
                    var r = e.S(n),
                        i = e.data_options(r),
                        s = r.data(e.name + "-instance");
                    s.compute_dimensions()
                })
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        Foundation.libs.offcanvas = {
            name: "offcanvas",
            version: "5.2.0",
            settings: {},
            init: function (e, t, n) {
                this.events()
            },
            events: function () {
                var n = this.S;
                n(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function (e) {
                    e.preventDefault(), n(this).closest(".off-canvas-wrap").toggleClass("move-right")
                }).on("click.fndtn.offcanvas", ".exit-off-canvas", function (e) {
                        e.preventDefault(), n(".off-canvas-wrap").removeClass("move-right")
                    }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function (r) {
                        r.preventDefault();
                        var i = e(this).attr("href");
                        n(".off-canvas-wrap").on("transitionend webkitTransitionEnd oTransitionEnd", function (e) {
                            t.location = i, n(".off-canvas-wrap").off("transitionend webkitTransitionEnd oTransitionEnd")
                        }), n(".off-canvas-wrap").removeClass("move-right")
                    }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function (e) {
                        e.preventDefault(), n(this).closest(".off-canvas-wrap").toggleClass("move-left")
                    }).on("click.fndtn.offcanvas", ".exit-off-canvas", function (e) {
                        e.preventDefault(), n(".off-canvas-wrap").removeClass("move-left")
                    }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function (r) {
                        r.preventDefault();
                        var i = e(this).attr("href");
                        n(".off-canvas-wrap").on("transitionend webkitTransitionEnd oTransitionEnd", function (e) {
                            t.location = i, n(".off-canvas-wrap").off("transitionend webkitTransitionEnd oTransitionEnd")
                        }), n(".off-canvas-wrap").removeClass("move-left")
                    })
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        Foundation.libs.alert = {
            name: "alert",
            version: "5.2.0",
            settings: {
                animation: "fadeOut",
                speed: 300,
                callback: function () {}
            },
            init: function (e, t, n) {
                this.bindings(t, n)
            },
            events: function () {
                var t = this,
                    n = this.S;
                e(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] a.close", function (e) {
                    var r = n(this).closest("[" + t.attr_name() + "]"),
                        i = r.data(t.attr_name(!0) + "-init") || t.settings;
                    e.preventDefault(), r[i.animation](i.speed, function () {
                        n(this).trigger("closed").remove(), i.callback()
                    })
                })
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";

        function i(e) {
            var t = /fade/i.test(e),
                n = /pop/i.test(e);
            return {
                animate: t || n,
                pop: n,
                fade: t
            }
        }
        Foundation.libs.reveal = {
            name: "reveal",
            version: "5.2.0",
            locked: !1,
            settings: {
                animation: "fadeAndPop",
                animation_speed: 250,
                close_on_background_click: !0,
                close_on_esc: !0,
                dismiss_modal_class: "close-reveal-modal",
                bg_class: "reveal-modal-bg",
                open: function () {},
                opened: function () {},
                close: function () {},
                closed: function () {},
                bg: e(".reveal-modal-bg"),
                css: {
                    open: {
                        opacity: 0,
                        visibility: "visible",
                        display: "block"
                    },
                    close: {
                        opacity: 1,
                        visibility: "hidden",
                        display: "none"
                    }
                }
            },
            init: function (t, n, r) {
                e.extend(!0, this.settings, n, r), this.bindings(n, r)
            },
            events: function (e) {
                var t = this,
                    r = t.S;
                return r(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]", function (e) {
                    e.preventDefault();
                    if (!t.locked) {
                        var n = r(this),
                            i = n.data(t.data_attr("reveal-ajax"));
                        t.locked = !0;
                        if (typeof i == "undefined") t.open.call(t, n);
                        else {
                            var s = i === !0 ? n.attr("href") : i;
                            t.open.call(t, n, {
                                url: s
                            })
                        }
                    }
                }), r(n).on("touchend.fndtn.reveal click.fndtn.reveal", this.close_targets(), function (e) {
                    e.preventDefault();
                    if (!t.locked) {
                        var n = r("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init"),
                            i = r(e.target)[0] === r("." + n.bg_class)[0];
                        if (i) {
                            if (!n.close_on_background_click) return;
                            e.stopPropagation()
                        }
                        t.locked = !0, t.close.call(t, i ? r("[" + t.attr_name() + "].open") : r(this).closest("[" + t.attr_name() + "]"))
                    }
                }), r("[" + t.attr_name() + "]", this.scope).length > 0 ? r(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : r(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video), !0
            },
            key_up_on: function (e) {
                var t = this;
                return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function (e) {
                    var n = t.S("[" + t.attr_name() + "].open"),
                        r = n.data(t.attr_name(!0) + "-init");
                    r && e.which === 27 && r.close_on_esc && !t.locked && t.close.call(t, n)
                }), !0
            },
            key_up_off: function (e) {
                return this.S("body").off("keyup.fndtn.reveal"), !0
            },
            open: function (t, n) {
                var r = this;
                if (t)
                    if (typeof t.selector != "undefined") var i = r.S("#" + t.data(r.data_attr("reveal-id")));
                    else {
                        var i = r.S(this.scope);
                        n = t
                    } else var i = r.S(this.scope);
                var s = i.data(r.attr_name(!0) + "-init");
                if (!i.hasClass("open")) {
                    var o = r.S("[" + r.attr_name() + "].open");
                    typeof i.data("css-top") == "undefined" && i.data("css-top", parseInt(i.css("top"), 10)).data("offset", this.cache_offset(i)), this.key_up_on(i), i.trigger("open"), o.length < 1 && this.toggle_bg(i), typeof n == "string" && (n = {
                        url: n
                    });
                    if (typeof n == "undefined" || !n.url) o.length > 0 && this.hide(o, s.css.close), this.show(i, s.css.open);
                    else {
                        var u = typeof n.success != "undefined" ? n.success : null;
                        e.extend(n, {
                            success: function (t, n, a) {
                                e.isFunction(u) && u(t, n, a), i.html(t), r.S(i).foundation("section", "reflow"), o.length > 0 && r.hide(o, s.css.close), r.show(i, s.css.open)
                            }
                        }), e.ajax(n)
                    }
                }
            },
            close: function (e) {
                var e = e && e.length ? e : this.S(this.scope),
                    t = this.S("[" + this.attr_name() + "].open"),
                    n = e.data(this.attr_name(!0) + "-init");
                t.length > 0 && (this.locked = !0, this.key_up_off(e), e.trigger("close"), this.toggle_bg(e), this.hide(t, n.css.close, n))
            },
            close_targets: function () {
                var e = "." + this.settings.dismiss_modal_class;
                return this.settings.close_on_background_click ? e + ", ." + this.settings.bg_class : e
            },
            toggle_bg: function (t) {
                var n = t.data(this.attr_name(!0));
                this.S("." + this.settings.bg_class).length === 0 && (this.settings.bg = e("<div />", {
                    "class": this.settings.bg_class
                }).appendTo("body").hide()), this.settings.bg.filter(":visible").length > 0 ? this.hide(this.settings.bg) : this.show(this.settings.bg)
            },
            show: function (n, r) {
                if (r) {
                    var s = n.data(this.attr_name(!0) + "-init");
                    if (n.parent("body").length === 0) {
                        var o = n.wrap('<div style="display: none;" />').parent(),
                            u = this.settings.rootElement || "body";
                        n.on("closed.fndtn.reveal.wrapped", function () {
                            n.detach().appendTo(o), n.unwrap().unbind("closed.fndtn.reveal.wrapped")
                        }), n.detach().appendTo(u)
                    }
                    var a = i(s.animation);
                    a.animate || (this.locked = !1);
                    if (a.pop) {
                        r.top = e(t).scrollTop() - n.data("offset") + "px";
                        var f = {
                            top: e(t).scrollTop() + n.data("css-top") + "px",
                            opacity: 1
                        };
                        return setTimeout(function () {
                            return n.css(r).animate(f, s.animation_speed, "linear", function () {
                                this.locked = !1, n.trigger("opened")
                            }.bind(this)).addClass("open")
                        }.bind(this), s.animation_speed / 2)
                    }
                    if (a.fade) {
                        r.top = e(t).scrollTop() + n.data("css-top") + "px";
                        var f = {
                            opacity: 1
                        };
                        return setTimeout(function () {
                            return n.css(r).animate(f, s.animation_speed, "linear", function () {
                                this.locked = !1, n.trigger("opened")
                            }.bind(this)).addClass("open")
                        }.bind(this), s.animation_speed / 2)
                    }
                    return n.css(r).show().css({
                        opacity: 1
                    }).addClass("open").trigger("opened")
                }
                var s = this.settings;
                return i(s.animation).fade ? n.fadeIn(s.animation_speed / 2) : (this.locked = !1, n.show())
            },
            hide: function (n, r) {
                if (r) {
                    var s = n.data(this.attr_name(!0) + "-init"),
                        o = i(s.animation);
                    o.animate || (this.locked = !1);
                    if (o.pop) {
                        var u = {
                            top: -e(t).scrollTop() - n.data("offset") + "px",
                            opacity: 0
                        };
                        return setTimeout(function () {
                            return n.animate(u, s.animation_speed, "linear", function () {
                                this.locked = !1, n.css(r).trigger("closed")
                            }.bind(this)).removeClass("open")
                        }.bind(this), s.animation_speed / 2)
                    }
                    if (o.fade) {
                        var u = {
                            opacity: 0
                        };
                        return setTimeout(function () {
                            return n.animate(u, s.animation_speed, "linear", function () {
                                this.locked = !1, n.css(r).trigger("closed")
                            }.bind(this)).removeClass("open")
                        }.bind(this), s.animation_speed / 2)
                    }
                    return n.hide().css(r).removeClass("open").trigger("closed")
                }
                var s = this.settings;
                return i(s.animation).fade ? n.fadeOut(s.animation_speed / 2) : n.hide()
            },
            close_video: function (t) {
                var n = e(".flex-video", t.target),
                    r = e("iframe", n);
                r.length > 0 && (r.attr("data-src", r[0].src), r.attr("src", "about:blank"), n.hide())
            },
            open_video: function (t) {
                var n = e(".flex-video", t.target),
                    i = n.find("iframe");
                if (i.length > 0) {
                    var s = i.attr("data-src");
                    if (typeof s == "string") i[0].src = i.attr("data-src");
                    else {
                        var o = i[0].src;
                        i[0].src = r, i[0].src = o
                    }
                    n.show()
                }
            },
            data_attr: function (e) {
                return this.namespace.length > 0 ? this.namespace + "-" + e : e
            },
            cache_offset: function (e) {
                var t = e.show().height() + parseInt(e.css("top"), 10);
                return e.hide(), t
            },
            off: function () {
                e(this.scope).off(".fndtn.reveal")
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        Foundation.libs.interchange = {
            name: "interchange",
            version: "5.2.0",
            cache: {},
            images_loaded: !1,
            nodes_loaded: !1,
            settings: {
                load_attr: "interchange",
                named_queries: {
                    "default": Foundation.media_queries.small,
                    small: Foundation.media_queries.small,
                    medium: Foundation.media_queries.medium,
                    large: Foundation.media_queries.large,
                    xlarge: Foundation.media_queries.xlarge,
                    xxlarge: Foundation.media_queries.xxlarge,
                    landscape: "only screen and (orientation: landscape)",
                    portrait: "only screen and (orientation: portrait)",
                    retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
                },
                directives: {
                    replace: function (t, n, r) {
                        if (/IMG/.test(t[0].nodeName)) {
                            var i = t[0].src;
                            if ((new RegExp(n, "i")).test(i)) return;
                            return t[0].src = n, r(t[0].src)
                        }
                        var s = t.data(this.data_attr + "-last-path");
                        if (s == n) return;
                        var o = "/^.(.jpg|.jpeg|.png|.gif|.tiff|.bmp)??|#?./";
                        return (new RegExp(o, "i")).test(n) ? (e(t).css("background-image", "url(" + n + ")"), t.data("interchange-last-path", n), r(n)) : e.get(n, function (e) {
                            t.html(e), t.data(this.data_attr + "-last-path", n), r()
                        })
                    }
                }
            },
            init: function (t, n, r) {
                Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), e.extend(!0, this.settings, n, r), this.bindings(n, r), this.load("images"), this.load("nodes")
            },
            get_media_hash: function () {
                var e = "";
                for (var t in this.settings.named_queries) e += matchMedia(this.settings.named_queries[t]).matches.toString();
                return e
            },
            events: function () {
                var n = this,
                    r;
                return e(t).off(".interchange").on("resize.fndtn.interchange", n.throttle(function () {
                    var e = n.get_media_hash();
                    e !== r && n.resize(), r = e
                }, 50)), this
            },
            resize: function () {
                var t = this.cache;
                if (!this.images_loaded || !this.nodes_loaded) {
                    setTimeout(e.proxy(this.resize, this), 50);
                    return
                }
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var r = this.results(n, t[n]);
                        r && this.settings.directives[r.scenario[1]].call(this, r.el, r.scenario[0], function () {
                            if (arguments[0] instanceof Array) var e = arguments[0];
                            else var e = Array.prototype.slice.call(arguments, 0);
                            r.el.trigger(r.scenario[1], e)
                        })
                    }
            },
            results: function (e, t) {
                var n = t.length;
                if (n > 0) {
                    var r = this.S("[" + this.add_namespace("data-uuid") + '="' + e + '"]');
                    while (n--) {
                        var i, s = t[n][2];
                        this.settings.named_queries.hasOwnProperty(s) ? i = matchMedia(this.settings.named_queries[s]) : i = matchMedia(s);
                        if (i.matches) return {
                            el: r,
                            scenario: t[n]
                        }
                    }
                }
                return !1
            },
            load: function (e, t) {
                return (typeof this["cached_" + e] == "undefined" || t) && this["update_" + e](), this["cached_" + e]
            },
            update_images: function () {
                var e = this.S("img[" + this.data_attr + "]"),
                    t = e.length,
                    n = t,
                    r = 0,
                    i = this.data_attr;
                this.cache = {}, this.cached_images = [], this.images_loaded = t === 0;
                while (n--) {
                    r++;
                    if (e[n]) {
                        var s = e[n].getAttribute(i) || "";
                        s.length > 0 && this.cached_images.push(e[n])
                    }
                    r === t && (this.images_loaded = !0, this.enhance("images"))
                }
                return this
            },
            update_nodes: function () {
                var e = this.S("[" + this.data_attr + "]").not("img"),
                    t = e.length,
                    n = t,
                    r = 0,
                    i = this.data_attr;
                this.cached_nodes = [], this.nodes_loaded = t === 0;
                while (n--) {
                    r++;
                    var s = e[n].getAttribute(i) || "";
                    s.length > 0 && this.cached_nodes.push(e[n]), r === t && (this.nodes_loaded = !0, this.enhance("nodes"))
                }
                return this
            },
            enhance: function (n) {
                var r = this["cached_" + n].length;
                while (r--) this.object(e(this["cached_" + n][r]));
                return e(t).trigger("resize")
            },
            parse_params: function (e, t, n) {
                return [this.trim(e), this.convert_directive(t), this.trim(n)]
            },
            convert_directive: function (e) {
                var t = this.trim(e);
                return t.length > 0 ? t : "replace"
            },
            object: function (e) {
                var t = this.parse_data_attr(e),
                    n = [],
                    r = t.length;
                if (r > 0)
                    while (r--) {
                        var i = t[r].split(/\((.*?)(\))$/);
                        if (i.length > 1) {
                            var s = i[0].split(","),
                                o = this.parse_params(s[0], s[1], i[1]);
                            n.push(o)
                        }
                    }
                return this.store(e, n)
            },
            store: function (e, t) {
                var n = this.random_str(),
                    r = e.data(this.add_namespace("uuid", !0));
                return this.cache[r] ? this.cache[r] : (e.attr(this.add_namespace("data-uuid"), n), this.cache[n] = t)
            },
            trim: function (t) {
                return typeof t == "string" ? e.trim(t) : t
            },
            set_data_attr: function (e) {
                return e ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
            },
            parse_data_attr: function (e) {
                var t = e.attr(this.attr_name()).split(/\[(.*?)\]/),
                    n = t.length,
                    r = [];
                while (n--) t[n].replace(/[\W\d]+/, "").length > 4 && r.push(t[n]);
                return r
            },
            reflow: function () {
                this.load("images", !0), this.load("nodes", !0)
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        Foundation.libs["magellan-expedition"] = {
            name: "magellan-expedition",
            version: "5.2.0",
            settings: {
                active_class: "active",
                threshold: 0,
                destination_threshold: 20,
                throttle_delay: 30
            },
            init: function (e, t, n) {
                Foundation.inherit(this, "throttle"), this.bindings(t, n)
            },
            events: function () {
                var n = this,
                    r = n.S,
                    i = n.settings;
                n.set_expedition_position(), r(n.scope).off(".magellan").on("click.fndtn.magellan", "[" + n.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function (r) {
                    r.preventDefault();
                    var i = e(this).closest("[" + n.attr_name() + "]"),
                        s = i.data("magellan-expedition-init"),
                        o = this.hash.split("#").join(""),
                        u = e("a[name=" + o + "]");
                    u.length === 0 && (u = e("#" + o));
                    var a = u.offset().top;
                    i.css("position") === "fixed" && (a -= i.outerHeight()), e("html, body").stop().animate({
                        scrollTop: a
                    }, 700, "swing", function () {
                        t.location.hash = "#" + o
                    })
                }).on("scroll.fndtn.magellan", n.throttle(this.check_for_arrivals.bind(this), i.throttle_delay)), e(t).on("resize.fndtn.magellan", n.throttle(this.set_expedition_position.bind(this), i.throttle_delay))
            },
            check_for_arrivals: function () {
                var e = this;
                e.update_arrivals(), e.update_expedition_positions()
            },
            set_expedition_position: function () {
                var t = this;
                e("[" + this.attr_name() + "=fixed]", t.scope).each(function (n, r) {
                    var i = e(this),
                        s = i.attr("styles"),
                        o;
                    i.attr("style", ""), o = i.offset().top, i.data(t.data_attr("magellan-top-offset"), o), i.attr("style", s)
                })
            },
            update_expedition_positions: function () {
                var n = this,
                    r = e(t).scrollTop();
                e("[" + this.attr_name() + "=fixed]", n.scope).each(function () {
                    var t = e(this),
                        i = t.data("magellan-top-offset");
                    if (r >= i) {
                        var s = t.prev("[" + n.add_namespace("data-magellan-expedition-clone") + "]");
                        s.length === 0 && (s = t.clone(), s.removeAttr(n.attr_name()), s.attr(n.add_namespace("data-magellan-expedition-clone"), ""), t.before(s)), t.css({
                            position: "fixed",
                            top: 0
                        })
                    } else t.prev("[" + n.add_namespace("data-magellan-expedition-clone") + "]").remove(), t.attr("style", "")
                })
            },
            update_arrivals: function () {
                var n = this,
                    r = e(t).scrollTop();
                e("[" + this.attr_name() + "]", n.scope).each(function () {
                    var t = e(this),
                        i = i = t.data(n.attr_name(!0) + "-init"),
                        s = n.offsets(t, r),
                        o = t.find("[" + n.add_namespace("data-magellan-arrival") + "]"),
                        u = !1;
                    s.each(function (e, r) {
                        if (r.viewport_offset >= r.top_offset) {
                            var s = t.find("[" + n.add_namespace("data-magellan-arrival") + "]");
                            return s.not(r.arrival).removeClass(i.active_class), r.arrival.addClass(i.active_class), u = !0, !0
                        }
                    }), u || o.removeClass(i.active_class)
                })
            },
            offsets: function (t, n) {
                var r = this,
                    i = t.data(r.attr_name(!0) + "-init"),
                    s = n + i.destination_threshold;
                return t.find("[" + r.add_namespace("data-magellan-arrival") + "]").map(function (t, n) {
                    var i = e(this).data(r.data_attr("magellan-arrival")),
                        o = e("[" + r.add_namespace("data-magellan-destination") + "=" + i + "]");
                    if (o.length > 0) {
                        var u = o.offset().top;
                        return {
                            destination: o,
                            arrival: e(this),
                            top_offset: u,
                            viewport_offset: s
                        }
                    }
                }).sort(function (e, t) {
                        return e.top_offset < t.top_offset ? -1 : e.top_offset > t.top_offset ? 1 : 0
                    })
            },
            data_attr: function (e) {
                return this.namespace.length > 0 ? this.namespace + "-" + e : e
            },
            off: function () {
                this.S(this.scope).off(".magellan"), this.S(t).off(".magellan")
            },
            reflow: function () {
                var t = this;
                e("[" + t.add_namespace("data-magellan-expedition-clone") + "]", t.scope).remove()
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        Foundation.libs.accordion = {
            name: "accordion",
            version: "5.2.0",
            settings: {
                active_class: "active",
                toggleable: !0
            },
            init: function (e, t, n) {
                this.bindings(t, n)
            },
            events: function () {
                var t = this,
                    n = this.S;
                n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] dd > a", function (r) {
                    var i = n(this).closest("[" + t.attr_name() + "]"),
                        s = n("#" + this.href.split("#")[1]),
                        o = n("dd > .content", i),
                        u = e("> dd", i),
                        a = i.data(t.attr_name(!0) + "-init"),
                        f = n("dd > .content." + a.active_class, i),
                        l = n("dd." + a.active_class, i);
                    r.preventDefault();
                    if (!n(this).closest("dl").is(i)) return;
                    if (f[0] == s[0] && a.toggleable) return l.toggleClass(a.active_class, !1), s.toggleClass(a.active_class, !1);
                    o.removeClass(a.active_class), u.removeClass(a.active_class), s.addClass(a.active_class).parent().addClass(a.active_class)
                })
            },
            off: function () {},
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        Foundation.libs.topbar = {
            name: "topbar",
            version: "5.2.0",
            settings: {
                index: 0,
                sticky_class: "sticky",
                custom_back_text: !0,
                back_text: "Back",
                is_hover: !0,
                mobile_show_parent_link: !1,
                scrolltop: !0,
                sticky_on: "all"
            },
            init: function (t, n, r) {
                Foundation.inherit(this, "add_custom_rule register_media throttle");
                var i = this;
                i.register_media("topbar", "foundation-mq-topbar"), this.bindings(n, r), i.S("[" + this.attr_name() + "]", this.scope).each(function () {
                    var t = e(this),
                        n = t.data(i.attr_name(!0) + "-init"),
                        r = i.S("section", this),
                        s = t.children().filter("ul").first();
                    t.data("index", 0);
                    var o = t.parent();
                    o.hasClass("fixed") || i.is_sticky(t, o, n) ? (i.settings.sticky_class = n.sticky_class, i.settings.sticky_topbar = t, t.data("height", o.outerHeight()), t.data("stickyoffset", o.offset().top)) : t.data("height", t.outerHeight()), n.assembled || i.assemble(t), n.is_hover ? i.S(".has-dropdown", t).addClass("not-click") : i.S(".has-dropdown", t).removeClass("not-click"), i.add_custom_rule(".f-topbar-fixed { padding-top: " + t.data("height") + "px }"), o.hasClass("fixed") && i.S("body").addClass("f-topbar-fixed")
                })
            },
            is_sticky: function (e, t, n) {
                var r = t.hasClass(n.sticky_class);
                return r && n.sticky_on === "all" ? !0 : r && this.small() && n.sticky_on === "small" ? !0 : r && this.medium() && n.sticky_on === "medium" ? !0 : r && this.large() && n.sticky_on === "large" ? !0 : !1
            },
            toggle: function (n) {
                var r = this;
                if (n) var i = r.S(n).closest("[" + this.attr_name() + "]");
                else var i = r.S("[" + this.attr_name() + "]");
                var s = i.data(this.attr_name(!0) + "-init"),
                    o = r.S("section, .section", i);
                r.breakpoint() && (r.rtl ? (o.css({
                    right: "0%"
                }), e(">.name", o).css({
                    right: "100%"
                })) : (o.css({
                    left: "0%"
                }), e(">.name", o).css({
                    left: "100%"
                })), r.S("li.moved", o).removeClass("moved"), i.data("index", 0), i.toggleClass("expanded").css("height", "")), s.scrolltop ? i.hasClass("expanded") ? i.parent().hasClass("fixed") && (s.scrolltop ? (i.parent().removeClass("fixed"), i.addClass("fixed"), r.S("body").removeClass("f-topbar-fixed"), t.scrollTo(0, 0)) : i.parent().removeClass("expanded")) : i.hasClass("fixed") && (i.parent().addClass("fixed"), i.removeClass("fixed"), r.S("body").addClass("f-topbar-fixed")) : (r.is_sticky(i, i.parent(), s) && i.parent().addClass("fixed"), i.parent().hasClass("fixed") && (i.hasClass("expanded") ? (i.addClass("fixed"), i.parent().addClass("expanded"), r.S("body").addClass("f-topbar-fixed")) : (i.removeClass("fixed"), i.parent().removeClass("expanded"), r.update_sticky_positioning())))
            },
            timer: null,
            events: function (n) {
                var r = this,
                    i = this.S;
                i(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function (e) {
                    e.preventDefault(), r.toggle(this)
                }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function (t) {
                        var n = e(this).closest("li");
                        r.breakpoint() && !n.hasClass("back") && !n.hasClass("has-dropdown") && r.toggle()
                    }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function (e) {
                        var t = i(this),
                            n = i(e.target),
                            s = t.closest("[" + r.attr_name() + "]"),
                            o = s.data(r.attr_name(!0) + "-init");
                        if (n.data("revealId")) {
                            r.toggle();
                            return
                        }
                        if (r.breakpoint()) return;
                        if (o.is_hover && !Modernizr.touch) return;
                        e.stopImmediatePropagation(), t.hasClass("hover") ? (t.removeClass("hover").find("li").removeClass("hover"), t.parents("li.hover").removeClass("hover")) : (t.addClass("hover"), n[0].nodeName === "A" && n.parent().hasClass("has-dropdown") && e.preventDefault())
                    }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function (e) {
                        if (r.breakpoint()) {
                            e.preventDefault();
                            var t = i(this),
                                n = t.closest("[" + r.attr_name() + "]"),
                                s = n.find("section, .section"),
                                o = t.next(".dropdown").outerHeight(),
                                u = t.closest("li");
                            n.data("index", n.data("index") + 1), u.addClass("moved"), r.rtl ? (s.css({
                                right: -(100 * n.data("index")) + "%"
                            }), s.find(">.name").css({
                                right: 100 * n.data("index") + "%"
                            })) : (s.css({
                                left: -(100 * n.data("index")) + "%"
                            }), s.find(">.name").css({
                                left: 100 * n.data("index") + "%"
                            })), n.css("height", t.siblings("ul").outerHeight(!0) + n.data("height"))
                        }
                    }), i(t).off(".topbar").on("resize.fndtn.topbar", r.throttle(function () {
                    r.resize.call(r)
                }, 50)).trigger("resize"), i("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar", function (e) {
                    var t = i(e.target).closest("li").closest("li.hover");
                    if (t.length > 0) return;
                    i("[" + r.attr_name() + "] li").removeClass("hover")
                }), i(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function (e) {
                    e.preventDefault();
                    var t = i(this),
                        n = t.closest("[" + r.attr_name() + "]"),
                        s = n.find("section, .section"),
                        o = n.data(r.attr_name(!0) + "-init"),
                        u = t.closest("li.moved"),
                        a = u.parent();
                    n.data("index", n.data("index") - 1), r.rtl ? (s.css({
                        right: -(100 * n.data("index")) + "%"
                    }), s.find(">.name").css({
                        right: 100 * n.data("index") + "%"
                    })) : (s.css({
                        left: -(100 * n.data("index")) + "%"
                    }), s.find(">.name").css({
                        left: 100 * n.data("index") + "%"
                    })), n.data("index") === 0 ? n.css("height", "") : n.css("height", a.outerHeight(!0) + n.data("height")), setTimeout(function () {
                        u.removeClass("moved")
                    }, 300)
                })
            },
            resize: function () {
                var e = this;
                e.S("[" + this.attr_name() + "]").each(function () {
                    var t = e.S(this),
                        r = t.data(e.attr_name(!0) + "-init"),
                        i = t.parent("." + e.settings.sticky_class),
                        s;
                    if (!e.breakpoint()) {
                        var o = t.hasClass("expanded");
                        t.css("height", "").removeClass("expanded").find("li").removeClass("hover"), o && e.toggle(t)
                    }
                    e.is_sticky(t, i, r) && (i.hasClass("fixed") ? (i.removeClass("fixed"), s = i.offset().top, e.S(n.body).hasClass("f-topbar-fixed") && (s -= t.data("height")), t.data("stickyoffset", s), i.addClass("fixed")) : (s = i.offset().top, t.data("stickyoffset", s)))
                })
            },
            breakpoint: function () {
                return !matchMedia(Foundation.media_queries.topbar).matches
            },
            small: function () {
                return matchMedia(Foundation.media_queries.small).matches
            },
            medium: function () {
                return matchMedia(Foundation.media_queries.medium).matches
            },
            large: function () {
                return matchMedia(Foundation.media_queries.large).matches
            },
            assemble: function (t) {
                var n = this,
                    r = t.data(this.attr_name(!0) + "-init"),
                    i = n.S("section", t),
                    s = e(this).children().filter("ul").first();
                i.detach(), n.S(".has-dropdown>a", i).each(function () {
                    var t = n.S(this),
                        i = t.siblings(".dropdown"),
                        s = t.attr("href");
                    if (!i.find(".title.back").length) {
                        if (r.mobile_show_parent_link && s && s.length > 1) var o = e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li><a class="parent-link js-generated" href="' + s + '">' + t.text() + "</a></li>");
                        else var o = e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>');
                        r.custom_back_text == 1 ? e("h5>a", o).html(r.back_text) : e("h5>a", o).html("&laquo; " + t.html()), i.prepend(o)
                    }
                }), i.appendTo(t), this.sticky(), this.assembled(t)
            },
            assembled: function (t) {
                t.data(this.attr_name(!0), e.extend({}, t.data(this.attr_name(!0)), {
                    assembled: !0
                }))
            },
            height: function (t) {
                var n = 0,
                    r = this;
                return e("> li", t).each(function () {
                    n += r.S(this).outerHeight(!0)
                }), n
            },
            sticky: function () {
                var e = this.S(t),
                    n = this;
                this.S(t).on("scroll", function () {
                    n.update_sticky_positioning()
                })
            },
            update_sticky_positioning: function () {
                var e = "." + this.settings.sticky_class,
                    n = this.S(t),
                    r = this;
                if (r.settings.sticky_topbar && r.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                    var i = this.settings.sticky_topbar.data("stickyoffset");
                    r.S(e).hasClass("expanded") || (n.scrollTop() > i ? r.S(e).hasClass("fixed") || (r.S(e).addClass("fixed"), r.S("body").addClass("f-topbar-fixed")) : n.scrollTop() <= i && r.S(e).hasClass("fixed") && (r.S(e).removeClass("fixed"), r.S("body").removeClass("f-topbar-fixed")))
                }
            },
            off: function () {
                this.S(this.scope).off(".fndtn.topbar"), this.S(t).off(".fndtn.topbar")
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        Foundation.libs.tab = {
            name: "tab",
            version: "5.2.0",
            settings: {
                active_class: "active",
                callback: function () {},
                deep_linking: !1,
                scroll_to_content: !0
            },
            default_tab_hashes: [],
            init: function (e, t, n) {
                var r = this,
                    i = this.S;
                this.bindings(t, n), this.handle_location_hash_change(), i("[" + this.attr_name() + "] > dd.active > a", this.scope).each(function () {
                    r.default_tab_hashes.push(this.hash)
                })
            },
            events: function () {
                var e = this,
                    n = this.S;
                n(this.scope).off(".tab").on("click.fndtn.tab", "[" + this.attr_name() + "] > dd > a", function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle_active_tab(n(this).parent())
                }), n(t).on("hashchange.fndtn.tab", function (t) {
                    t.preventDefault(), e.handle_location_hash_change()
                })
            },
            handle_location_hash_change: function () {
                var t = this,
                    n = this.S;
                n("[" + this.attr_name() + "]", this.scope).each(function () {
                    var i = n(this).data(t.attr_name(!0) + "-init");
                    if (i.deep_linking) {
                        var s = t.scope.location.hash;
                        if (s != "") {
                            var o = n(s);
                            if (o.hasClass("content") && o.parent().hasClass("tab-content")) t.toggle_active_tab(e("[" + t.attr_name() + "] > dd > a[href=" + s + "]").parent());
                            else {
                                var u = o.closest(".content").attr("id");
                                u != r && t.toggle_active_tab(e("[" + t.attr_name() + "] > dd > a[href=#" + u + "]").parent(), s)
                            }
                        } else
                            for (var a in t.default_tab_hashes) t.toggle_active_tab(e("[" + t.attr_name() + "] > dd > a[href=" + t.default_tab_hashes[a] + "]").parent())
                    }
                })
            },
            toggle_active_tab: function (n, i) {
                var s = this.S,
                    o = n.closest("[" + this.attr_name() + "]"),
                    u = n.children("a").first(),
                    a = "#" + u.attr("href").split("#")[1],
                    f = s(a),
                    l = n.siblings(),
                    c = o.data(this.attr_name(!0) + "-init");
                s(this).data(this.data_attr("tab-content")) && (a = "#" + s(this).data(this.data_attr("tab-content")).split("#")[1], f = s(a));
                if (c.deep_linking) {
                    var h = e("body,html").scrollTop();
                    i != r ? t.location.hash = i : t.location.hash = a, c.scroll_to_content ? i == r || i == a ? n.parent()[0].scrollIntoView() : s(a)[0].scrollIntoView() : (i == r || i == a) && e("body,html").scrollTop(h)
                }
                n.addClass(c.active_class).triggerHandler("opened"), l.removeClass(c.active_class), f.siblings().removeClass(c.active_class).end().addClass(c.active_class), c.callback(n), o.triggerHandler("toggled", [n])
            },
            data_attr: function (e) {
                return this.namespace.length > 0 ? this.namespace + "-" + e : e
            },
            off: function () {},
            reflow: function () {}
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        Foundation.libs.abide = {
            name: "abide",
            version: "5.2.0",
            settings: {
                live_validate: !0,
                focus_on_invalid: !0,
                error_labels: !0,
                timeout: 1e3,
                patterns: {
                    alpha: /^[a-zA-Z]+$/,
                    alpha_numeric: /^[a-zA-Z0-9]+$/,
                    integer: /^\d+$/,
                    number: /-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?/,
                    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                    cvv: /^([0-9]){3,4}$/,
                    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    url: /(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?/,
                    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                    datetime: /([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))/,
                    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,
                    time: /(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}/,
                    dateISO: /\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/,
                    month_day_year: /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/,
                    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
                }
            },
            timer: null,
            init: function (e, t, n) {
                this.bindings(t, n)
            },
            events: function (t) {
                var n = this,
                    r = n.S(t).attr("novalidate", "novalidate"),
                    i = r.data(this.attr_name(!0) + "-init");
                this.invalid_attr = this.add_namespace("data-invalid"), r.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function (e) {
                    var t = /ajax/i.test(n.S(this).attr(n.attr_name()));
                    return n.validate(n.S(this).find("input, textarea, select").get(), e, t)
                }).on("reset", function () {
                        return n.reset(e(this))
                    }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function (e) {
                        n.validate([this], e)
                    }).on("keydown.fndtn.abide", function (t) {
                        var r = e(this).closest("form").data(n.attr_name(!0) + "-init");
                        r.live_validate === !0 && (clearTimeout(n.timer), n.timer = setTimeout(function () {
                            n.validate([this], t)
                        }.bind(this), r.timeout))
                    })
            },
            reset: function (t) {
                t.removeAttr(this.invalid_attr), e(this.invalid_attr, t).removeAttr(this.invalid_attr), e(".error", t).not("small").removeClass("error")
            },
            validate: function (e, t, n) {
                var r = this.parse_patterns(e),
                    i = r.length,
                    s = this.S(e[0]).closest("form"),
                    o = /submit/.test(t.type);
                for (var u = 0; u < i; u++)
                    if (!r[u] && (o || n)) return this.settings.focus_on_invalid && e[u].focus(), s.trigger("invalid"), this.S(e[u]).closest("form").attr(this.invalid_attr, ""), !1;
                return (o || n) && s.trigger("valid"), s.removeAttr(this.invalid_attr), n ? !1 : !0
            },
            parse_patterns: function (e) {
                var t = e.length,
                    n = [];
                while (t--) n.push(this.pattern(e[t]));
                return this.check_validation_and_apply_styles(n)
            },
            pattern: function (e) {
                var t = e.getAttribute("type"),
                    n = typeof e.getAttribute("required") == "string",
                    r = e.getAttribute("pattern") || "";
                return this.settings.patterns.hasOwnProperty(r) && r.length > 0 ? [e, this.settings.patterns[r], n] : r.length > 0 ? [e, new RegExp(r), n] : this.settings.patterns.hasOwnProperty(t) ? [e, this.settings.patterns[t], n] : (r = /.*/, [e, r, n])
            },
            check_validation_and_apply_styles: function (t) {
                var n = t.length,
                    r = [];
                while (n--) {
                    var i = t[n][0],
                        s = t[n][2],
                        o = i.value,
                        u = this.S(i).parent(),
                        a = i.getAttribute(this.add_namespace("data-equalto")),
                        f = i.type === "radio",
                        l = i.type === "checkbox",
                        c = this.S('label[for="' + i.getAttribute("id") + '"]'),
                        h = s ? i.value.length > 0 : !0,
                        p;
                    u.is("label") ? p = u.parent() : p = u, f && s ? r.push(this.valid_radio(i, s)) : l && s ? r.push(this.valid_checkbox(i, s)) : a && s ? r.push(this.valid_equal(i, s, p)) : t[n][1].test(o) && h || !s && i.value.length < 1 || e(i).attr("disabled") ? (this.S(i).removeAttr(this.invalid_attr), p.removeClass("error"), c.length > 0 && this.settings.error_labels && c.removeClass("error"), r.push(!0), e(i).triggerHandler("valid")) : (this.S(i).attr(this.invalid_attr, ""), p.addClass("error"), c.length > 0 && this.settings.error_labels && c.addClass("error"), r.push(!1), e(i).triggerHandler("invalid"))
                }
                return r
            },
            valid_checkbox: function (e, t) {
                var e = this.S(e),
                    n = e.is(":checked") || !t;
                return n ? e.removeAttr(this.invalid_attr).parent().removeClass("error") : e.attr(this.invalid_attr, "").parent().addClass("error"), n
            },
            valid_radio: function (e, t) {
                var r = e.getAttribute("name"),
                    i = n.getElementsByName(r),
                    s = i.length,
                    o = !1;
                for (var u = 0; u < s; u++) i[u].checked && (o = !0);
                for (var u = 0; u < s; u++) o ? this.S(i[u]).removeAttr(this.invalid_attr).parent().removeClass("error") : this.S(i[u]).attr(this.invalid_attr, "").parent().addClass("error");
                return o
            },
            valid_equal: function (e, t, r) {
                var i = n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,
                    s = e.value,
                    o = i === s;
                return o ? (this.S(e).removeAttr(this.invalid_attr), r.removeClass("error")) : (this.S(e).attr(this.invalid_attr, ""), r.addClass("error")), o
            }
        }
    }(jQuery, this, this.document),
    function (e, t, n, r) {
        "use strict";
        Foundation.libs.tooltip = {
            name: "tooltip",
            version: "5.2.0",
            settings: {
                additional_inheritable_classes: [],
                tooltip_class: ".tooltip",
                append_to: "body",
                touch_close_text: "Tap To Close",
                disable_for_touch: !1,
                hover_delay: 200,
                tip_template: function (e, t) {
                    return '<span data-selector="' + e + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '">' + t + '<span class="nub"></span></span>'
                }
            },
            cache: {},
            init: function (e, t, n) {
                Foundation.inherit(this, "random_str"), this.bindings(t, n)
            },
            events: function (t) {
                var n = this,
                    r = n.S;
                n.create(this.S(t)), e(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]:not(a)", function (t) {
                    var i = r(this),
                        s = e.extend({}, n.settings, n.data_options(i)),
                        o = !1;
                    if (/mouse/i.test(t.type) && n.ie_touch(t)) return !1;
                    if (i.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && t.preventDefault(), n.hide(i);
                    else {
                        if (s.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type)) return;
                        !s.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && (t.preventDefault(), r(s.tooltip_class + ".open").hide(), o = !0), /enter|over/i.test(t.type) ? this.timer = setTimeout(function () {
                            var e = n.showTip(i)
                        }.bind(this), n.settings.hover_delay) : t.type === "mouseout" || t.type === "mouseleave" ? (clearTimeout(this.timer), n.hide(i)) : n.showTip(i)
                    }
                }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function (t) {
                        if (/mouse/i.test(t.type) && n.ie_touch(t)) return !1;
                        if (e(this).data("tooltip-open-event-type") == "touch" && t.type == "mouseleave") return;
                        e(this).data("tooltip-open-event-type") == "mouse" && /MSPointerDown|touchstart/i.test(t.type) ? n.convert_to_touch(e(this)) : n.hide(e(this))
                    }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function (e) {
                        n.hide(r(this))
                    })
            },
            ie_touch: function (e) {
                return !1
            },
            showTip: function (e) {
                var t = this.getTip(e);
                return this.show(e)
            },
            getTip: function (t) {
                var n = this.selector(t),
                    r = e.extend({}, this.settings, this.data_options(t)),
                    i = null;
                return n && (i = this.S('span[data-selector="' + n + '"]' + r.tooltip_class)), typeof i == "object" ? i : !1
            },
            selector: function (e) {
                var t = e.attr("id"),
                    n = e.attr(this.attr_name()) || e.attr("data-selector");
                return (t && t.length < 1 || !t) && typeof n != "string" && (n = this.random_str(6), e.attr("data-selector", n)), t && t.length > 0 ? t : n
            },
            create: function (n) {
                var r = this,
                    i = e.extend({}, this.settings, this.data_options(n)),
                    s = this.settings.tip_template;
                typeof i.tip_template == "string" && t.hasOwnProperty(i.tip_template) && (s = t[i.tip_template]);
                var o = e(s(this.selector(n), e("<div></div>").html(n.attr("title")).html())),
                    u = this.inheritable_classes(n);
                o.addClass(u).appendTo(i.append_to), Modernizr.touch && (o.append('<span class="tap-to-close">' + i.touch_close_text + "</span>"), o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function (e) {
                    r.hide(n)
                })), n.removeAttr("title").attr("title", "")
            },
            reposition: function (t, n, r) {
                var i, s, o, u, a, f;
                n.css("visibility", "hidden").show(), i = t.data("width"), s = n.children(".nub"), o = s.outerHeight(), u = s.outerHeight(), this.small() ? n.css({
                    width: "100%"
                }) : n.css({
                    width: i ? i : "auto"
                }), f = function (e, t, n, r, i, s) {
                    return e.css({
                        top: t ? t : "auto",
                        bottom: r ? r : "auto",
                        left: i ? i : "auto",
                        right: n ? n : "auto"
                    }).end()
                }, f(n, t.offset().top + t.outerHeight() + 10, "auto", "auto", t.offset().left);
                if (this.small()) f(n, t.offset().top + t.outerHeight() + 10, "auto", "auto", 12.5, e(this.scope).width()), n.addClass("tip-override"), f(s, -o, "auto", "auto", t.offset().left);
                else {
                    var l = t.offset().left;
                    Foundation.rtl && (s.addClass("rtl"), l = t.offset().left + t.outerWidth() - n.outerWidth()), f(n, t.offset().top + t.outerHeight() + 10, "auto", "auto", l), n.removeClass("tip-override"), r && r.indexOf("tip-top") > -1 ? (Foundation.rtl && s.addClass("rtl"), f(n, t.offset().top - n.outerHeight(), "auto", "auto", l).removeClass("tip-override")) : r && r.indexOf("tip-left") > -1 ? (f(n, t.offset().top + t.outerHeight() / 2 - n.outerHeight() / 2, "auto", "auto", t.offset().left - n.outerWidth() - o).removeClass("tip-override"), s.removeClass("rtl")) : r && r.indexOf("tip-right") > -1 && (f(n, t.offset().top + t.outerHeight() / 2 - n.outerHeight() / 2, "auto", "auto", t.offset().left + t.outerWidth() + o).removeClass("tip-override"), s.removeClass("rtl"))
                }
                n.css("visibility", "visible").hide()
            },
            small: function () {
                return matchMedia(Foundation.media_queries.small).matches
            },
            inheritable_classes: function (t) {
                var n = e.extend({}, this.settings, this.data_options(t)),
                    r = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(n.additional_inheritable_classes),
                    i = t.attr("class"),
                    s = i ? e.map(i.split(" "), function (t, n) {
                        if (e.inArray(t, r) !== -1) return t
                    }).join(" ") : "";
                return e.trim(s)
            },
            convert_to_touch: function (t) {
                var n = this,
                    r = n.getTip(t),
                    i = e.extend({}, n.settings, n.data_options(t));
                r.find(".tap-to-close").length === 0 && (r.append('<span class="tap-to-close">' + i.touch_close_text + "</span>"), r.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function (e) {
                    n.hide(t)
                })), t.data("tooltip-open-event-type", "touch")
            },
            show: function (e) {
                var t = this.getTip(e);
                e.data("tooltip-open-event-type") == "touch" && this.convert_to_touch(e), this.reposition(e, t, e.attr("class")), e.addClass("open"), t.fadeIn(150)
            },
            hide: function (e) {
                var t = this.getTip(e);
                t.fadeOut(150, function () {
                    t.find(".tap-to-close").remove(), t.off("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), e.removeClass("open")
                })
            },
            off: function () {
                var t = this;
                this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function (n) {
                    e("[" + t.attr_name() + "]").get(n).attr("title", e(this).text())
                }).remove()
            },
            reflow: function () {}
        }
    }(jQuery, this, this.document);