var e = parseInt, f = window, g = console, h = chrome, i = Math, j = "tabs", l = "length", n = "prototype", o = "width", p = "ceil", q = "indexOf", r = "height", u = "browserAction", v = this;
i.floor(i.random() * 2147483648).toString(36);
var aa = function(a, b) {
    var c = b || v;
    if (arguments[l] > 2) {
        var k = Array[n].slice.call(arguments, 2);
        return function() {
            var d = Array[n].slice.call(arguments);
            Array[n].unshift.apply(d, k);
            return a.apply(c, d)
        }
    } else
        return function() {
            return a.apply(c, arguments)
        }
};
var w = function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}, ba = function(a, b) {
    var c = 0;
    a = w(String(a)).split(".");
    b = w(String(b)).split(".");
    for (var k = i.max(a[l], b[l]), d = 0; c == 0 && d < k; d++) {
        var C = a[d] || "", D = b[d] || "", m = new RegExp("(\\d*)(\\D*)", "g"), Q = new RegExp("(\\d*)(\\D*)", "g");
        do {
            var s = m.exec(C) || ["", "", ""], t = Q.exec(D) || ["", "", ""];
            if (s[0][l] == 0 && t[0][l] == 0)
                break;
            c = s[1][l] == 0 ? 0 : e(s[1], 10);
            var da = t[1][l] == 0 ? 0 : e(t[1], 10);
            c = x(c, da) || x(s[2][l] == 0, t[2][l] == 0) || x(s[2], t[2])
        } while (c == 0)
    }
    return c
}, x = function(a, 
b) {
    if (a < b)
        return -1;
    else if (a > b)
        return 1;
    return 0
};
(Date.now || function() {
    return +new Date
})();
var y, z, A, B, E, F = function() {
    return v.navigator ? v.navigator.userAgent : null
}, G = function() {
    return v.navigator
};
E = B = A = z = y = false;
var H;
if (H = F()) {
    var ca = G();
    y = H[q]("Opera") == 0;
    z = !y && H[q]("MSIE") != -1;
    B = (A = !y && H[q]("WebKit") != -1) && H[q]("Mobile") != -1;
    E = !y && !A && ca.product == "Gecko"
}
var ea = y, fa = z, ga = E, I = A, J = G(), K = J && J.platform || "";
K[q]("Mac") != -1;
K[q]("Win") != -1;
K[q]("Linux") != -1;
G() && (G().appVersion || "")[q]("X11") != -1;
var L = "", M;
if (ea && v.opera) {
    var N = v.opera.version;
    L = typeof N == "function" ? N() : N
} else {
    if (ga)
        M = /rv\:([^\);]+)(\)|;)/;
    else if (fa)
        M = /MSIE\s+([^\);]+)(\)|;)/;
    else if (I)
        M = /WebKit\/(\S+)/;
    if (M) {
        var O = M.exec(F());
        L = O ? O[1] : ""
    }
}
var ha = L, P = {};
I && (P["522"] || (P["522"] = ba(ha, "522") >= 0));
var R = [0, 69, 208, 255], S = function() {
    this.d = 0;
    this.l = 8;
    this.c = 0;
    this.h = 4
};
S[n].start = function() {
    if (!this.d) {
        var a = this;
        this.d = f.setInterval(function() {
            for (var b = "", c = 0; c < a.h; c++)
                b += c == a.c ? "." : " ";
            if (a.c >= a.h)
                b += "";
            a.c++;
            if (a.c == a.l)
                a.c = 0
        }, 100)
    }
};
S[n].stop = function() {
    if (this.d) {
        f.clearInterval(this.d);
        this.d = 0
    }
};
var T = function() {
    this.f = 0;
    this.e = -1;
    this.g = new S;
    this.n = 0
}, U = 0;
T[n].j = function() {
    this.a = document.getElementById("canvas");
    this.k = document.getElementById("gc-logged-in");
    this.b = this.a.getContext("2d");
    this.g.start();
    this.i();
    var a = this;
    h[j].onUpdated.addListener(function(b, c) {
        c.m && c.m[q]("https://www.google.com/voice") == 0 && V(a, function(k) {
            W(a, k + "")
        })
    });
};
var X = function(a) {
    var b = i.pow(2, U), c = i.min(15000 * b, 36E5);
    c = i.round(c);
    g.log("Scheduling request...");
    g.log("  failures: ", U);
    g.log("  exponent: ", b);
    g.log("  delay: ", c);
    f.setTimeout(aa(a.i, a), c)
};
T[n].i = function() {
    var a = this;
    V(this, function(b) {
        a.g.stop();
        W(a, b + "");
        X(a)
    }, function() {
        a.g.stop();
        a.e = -1;
        X(a)
    })
};
var V = function(a, b, c) {
    function k() {
        U++;
        f.clearTimeout(C);
        c && c()
    }
    var d = new XMLHttpRequest, C = f.setTimeout(function() {
        d.abort();
        c && c()
    }, 5E3);
    try {
        d.onreadystatechange = function() {
            if (d.readyState == 4) {
                g.log("responseText: " + d.responseText.substring(0, 200) + "...");
                if (d.responseText) {
                    try {
                        var m = JSON.parse(d.responseText)
                    } catch (Q) {
                        k();
                        return
                    }
                    if (m.unreadCounts && "inbox" in m.unreadCounts) {
                        m = m.unreadCounts.inbox;
                        U = 0;
                        f.clearTimeout(C);
                        b && b(m)
                    } else {
                        g.log("Error: Unread count not found.");
                        k()
                    }
                } else
                    g.log("No responseJSON!")
            }
        };
        d.onerror = function(m) {
            g.log("error");
            g.log(m);
            k()
        };
        d.open("GET", "https://clients4.google.com/voice/request/unread/", true);
        d.send(null)
    } catch (D) {
        g.log("ex: " + D);
        g.error("exception: " + D);
        k()
    }
}, W = function(a, b) {
    if (e(b, 10) > 99)
        b = "99+";
    if (a.e != b) {
        a.e = b;
        ja(a)
    }
}, ja = function(a) {
    a.f += 1 / 36;
    ka(a);
    if (a.f <= 1)
        setTimeout(function() {
            ja(a)
        }, 10);
    else {
        a.f = 0;
        ka(a);
        if(a.e != "0") {
            notification = webkitNotifications.createNotification('48.png', a.e + ' New Message(s)!', '');
            notification.ondisplay = function() {
                setTimeout("notification.cancel()", 2000);
            };
            notification.show();
        }
    }
}, ka = function(a) {
    a.b.save();
    a.b.clearRect(0, 0, a.a[o], a.a[r]);
    a.b.translate(i[p](a.a[o] / 
    2), i[p](a.a[r] / 2));
    a.b.rotate(2 * i.PI * ((1 - i.sin(i.PI / 2 + a.f * i.PI)) / 2));
    a.b.drawImage(a.k, -i[p](a.a[o] / 2), -i[p](a.a[r] / 2));
    a.b.restore();
}, ia = function() {
    h[j].getAllInWindow(null, function(a) {
        for (var b = 0; b < a[l]; b++) {
            var c = a[b];
            if (c.url[q]("https://www.google.com/voice") != -1) {
                h[j].update(c.id, {url: "https://www.google.com/voice",selected: true});
                return
            }
        }
        h[j].create({url: "https://www.google.com/voice"})
    })
}, Y = "Voice".split("."), Z = v;
!(Y[0] in Z) && Z.execScript && Z.execScript("var " + Y[0]);
for (var $; Y[l] && ($ = Y.shift()); )
    if (!Y[l] && T !== undefined)
        Z[$] = T;
    else
        Z = Z[$] ? Z[$] : (Z[$] = {});
T[n].init = T[n].j;
