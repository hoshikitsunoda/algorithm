"use strict";
function past(h, m, s) {
    h = h * 60 * 60 * 1000;
    m = m * 60 * 1000;
    s = s * 1000;
    return +(h + m + s);
}
console.log(past(1, 1, 1));
//# sourceMappingURL=index.js.map