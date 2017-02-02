export function imagesLoaded(parentNode) {
    const imgElements = parentNode.querySelectorAll('img');
    for (const img of imgElements) {
        if (!img.complete) {
            return false;
        }
    }
    return true;
}

export function objectMap(o, f, ctx) {
    ctx = ctx || this;
    const result = {};
    Object.keys(o).forEach((k) => {
        result[k] = f.call(ctx, o[k], k, o);
    });
    return result;
}

export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function calculateDistance(lat1, lon1, lat2, lon2) {
    var p = 0.017453292519943295; // Math.PI / 180
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p) / 2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p)) / 2;

    return + (7918 * Math.asin(Math.sqrt(a))).toFixed(2);
}

export function camelize(str) {
    return str.split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}
