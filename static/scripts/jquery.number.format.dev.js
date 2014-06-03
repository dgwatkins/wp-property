jQuery.fn.extend({
    number_format: function(numero, params) {
        var sDefaults = {
            numberOfDecimals: 2,
            decimalSeparator: ".",
            thousandSeparator: ",",
            symbol: ""
        }, options = jQuery.extend(sDefaults, params), number = numero, decimals = options.numberOfDecimals, dec_point = options.decimalSeparator, thousands_sep = options.thousandSeparator, currencySymbol = options.symbol, exponent = "", numberstr = number.toString(), eindex = numberstr.indexOf("e");
        if (eindex > -1 && (exponent = numberstr.substring(eindex), number = parseFloat(numberstr.substring(0, eindex))), 
        null != decimals) {
            var temp = Math.pow(10, decimals);
            number = Math.round(number * temp) / temp;
        }
        var sign = 0 > number ? "-" : "", integer = (number > 0 ? Math.floor(number) : Math.abs(Math.ceil(number))).toString(), fractional = number.toString().substring(integer.length + sign.length);
        if (dec_point = null != dec_point ? dec_point : ".", fractional = null != decimals && decimals > 0 || fractional.length > 1 ? dec_point + fractional.substring(1) : "", 
        null != decimals && decimals > 0) for (i = fractional.length - 1, z = decimals; z > i; ++i) fractional += "0";
        if (thousands_sep = thousands_sep != dec_point || 0 == fractional.length ? thousands_sep : null, 
        null != thousands_sep && "" != thousands_sep) for (i = integer.length - 3; i > 0; i -= 3) integer = integer.substring(0, i) + thousands_sep + integer.substring(i);
        return "" == options.symbol ? sign + integer + fractional + exponent : currencySymbol + " " + sign + integer + fractional + exponent;
    }
});