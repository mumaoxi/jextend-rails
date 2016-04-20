window.location.params = function () {
    var map = new Array();

    var url = window.location.search;
    if (!url || url.length <= 0) {
        return map;
    }

    var pos = url.indexOf('?');
    if (-1 == pos) {
        return map;
    }
    var paras = url.substring(pos + 1);
    paras = paras.split('&');
    for (var n = 0; n < paras.length; n++) {
        var pos = paras[n].indexOf('=');
        var key = paras[n].substring(0, pos);
        var value = (pos + 1 ) >= paras[n].length ? "" : paras[n].substring(pos + 1);
        map[key] = value;
    }
    return map;
};