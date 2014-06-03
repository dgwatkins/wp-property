!function(b, j) {
    if (b.cleanData) {
        var k = b.cleanData;
        b.cleanData = function(a) {
            for (var d, c = 0; null != (d = a[c]); c++) b(d).triggerHandler("remove");
            k(a);
        };
    } else {
        var l = b.fn.remove;
        b.fn.remove = function(a, c) {
            return this.each(function() {
                return c || (!a || b.filter(a, [ this ]).length) && b("*", this).add([ this ]).each(function() {
                    b(this).triggerHandler("remove");
                }), l.call(b(this), a, c);
            });
        };
    }
    b.widget = function(a, c, d) {
        var f, e = a.split(".")[0];
        a = a.split(".")[1], f = e + "-" + a, d || (d = c, c = b.Widget), b.expr[":"][f] = function(h) {
            return !!b.data(h, a);
        }, b[e] = b[e] || {}, b[e][a] = function(h, g) {
            arguments.length && this._createWidget(h, g);
        }, c = new c(), c.options = b.extend(!0, {}, c.options), b[e][a].prototype = b.extend(!0, c, {
            namespace: e,
            widgetName: a,
            widgetEventPrefix: b[e][a].prototype.widgetEventPrefix || a,
            widgetBaseClass: f
        }, d), b.widget.bridge(a, b[e][a]);
    }, b.widget.bridge = function(a, c) {
        b.fn[a] = function(d) {
            var e = "string" == typeof d, f = Array.prototype.slice.call(arguments, 1), h = this;
            return d = !e && f.length ? b.extend.apply(null, [ !0, d ].concat(f)) : d, e && "_" === d.charAt(0) ? h : (this.each(e ? function() {
                var g = b.data(this, a), i = g && b.isFunction(g[d]) ? g[d].apply(g, f) : g;
                return i !== g && i !== j ? (h = i, !1) : void 0;
            } : function() {
                var g = b.data(this, a);
                g ? g.option(d || {})._init() : b.data(this, a, new c(d, this));
            }), h);
        };
    }, b.Widget = function(a, c) {
        arguments.length && this._createWidget(a, c);
    }, b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(a, c) {
            b.data(c, this.widgetName, this), this.element = b(c), this.options = b.extend(!0, {}, this.options, this._getCreateOptions(), a);
            var d = this;
            this.element.bind("remove." + this.widgetName, function() {
                d.destroy();
            }), this._create(), this._trigger("create"), this._init();
        },
        _getCreateOptions: function() {
            return b.metadata && b.metadata.get(this.element[0])[this.widgetName];
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled");
        },
        widget: function() {
            return this.element;
        },
        option: function(a, c) {
            var d = a;
            if (0 === arguments.length) return b.extend({}, this.options);
            if ("string" == typeof a) {
                if (c === j) return this.options[a];
                d = {}, d[a] = c;
            }
            return this._setOptions(d), this;
        },
        _setOptions: function(a) {
            var c = this;
            return b.each(a, function(d, e) {
                c._setOption(d, e);
            }), this;
        },
        _setOption: function(a, c) {
            return this.options[a] = c, "disabled" === a && this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c), 
            this;
        },
        enable: function() {
            return this._setOption("disabled", !1);
        },
        disable: function() {
            return this._setOption("disabled", !0);
        },
        _trigger: function(a, c, d) {
            var e = this.options[a];
            if (c = b.Event(c), c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase(), 
            d = d || {}, c.originalEvent) {
                a = b.event.props.length;
                for (var f; a; ) f = b.event.props[--a], c[f] = c.originalEvent[f];
            }
            return this.element.trigger(c, d), !(b.isFunction(e) && e.call(this.element[0], c, d) === !1 || c.isDefaultPrevented());
        }
    };
}(jQuery);