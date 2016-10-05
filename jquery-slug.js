! function(a) {
    a.fn.mirror = function(b) {
        function d(a) {
            return "lowercase" === c.textTransform ? a.toLowerCase() : "uppercase" === c.textTransform ? a.toUpperCase() : a
        }

        function e(a) {
            for (var b = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "_", "{", "}", "[", "]", "|", "/", "<", ">", ",", ".", "?", "--"], c = 0; c < b.length; c++) {
                var d = String(b[c]);
                a = a.replace(new RegExp("\\" + d, "g"), "-")
            }
            return a = a.toLowerCase(), a = f(a, "-")
        }

        function f(a, b) {
            return g(h(a, b), b)
        }

        function g(a, b) {
            return b = b || "\\s", a.replace(new RegExp("^[" + b + "]+", "g"), "")
        }

        function h(a, b) {
            return b = b || "\\s", a.replace(new RegExp("[" + b + "]+$", "g"), "")
        }
        var c = a.extend({
            prefix: "http://",
            textTransform: "lowercase",
            output: ".output-typeface",
            outputDisabled: !1,
            seoURL: !0
        }, b);
        if (c.outputDisabled && a(c.output).prop("disabled", !0), null != a(c.output).attr("data-value")) {
            var i = a(c.output).attr("data-value"),
                j = d(i);
            c.seoURL && (j = e(j)), a(c.output).val(c.prefix + j)
        }
        a(this).keyup(function() {
            var b = a(this).val(),
                f = d(b);
            return c.seoURL && (f = e(f)), a(c.output).val(c.prefix + f)
        }), a(this).keydown(function() {
            var b = a(this).val(),
                f = d(b);
            return c.seoURL && (f = e(f)), a(c.output).val(c.prefix + f)
        })
    }
}(jQuery);
