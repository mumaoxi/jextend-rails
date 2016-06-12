String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};

/**
 * 生成随机字符串
 * @param len 字符串长度
 * @param includeUpcase 是否包含大写字符,默认为false
 * @returns {string}
 */
String.random = function (len, includeUpcase) {
    var str = '0123456789abcdefghijklmnopqrstuvwxyz';
    var randomStr = '';
    for (var i = 0; i < len; i++) {
        var c = String(str[parseInt(Math.random() * str.length)]);
        randomStr += (includeUpcase && parseInt(Math.random() * 10) % 2 == 0) ? c.toUpperCase() : c;
    }
    return randomStr;
};