!function(a) {
    a.fn.camera = function(e, t) {
        function i() {
            if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) return !0;
        }
        function r() {
            var e = a(S).width();
            a("li", S).removeClass("camera_visThumb"), a("li", S).each(function() {
                var t = a(this).position(), i = a("ul", S).outerWidth(), r = a("ul", S).offset().left, o = a("> div", S).offset().left, n = o - r;
                n > 0 ? a(".camera_prevThumbs", X).removeClass("hideNav") : a(".camera_prevThumbs", X).addClass("hideNav"), 
                i - n > e ? a(".camera_nextThumbs", X).removeClass("hideNav") : a(".camera_nextThumbs", X).addClass("hideNav");
                var s = t.left;
                t.left + a(this).width() - n <= e && s - n >= 0 && a(this).addClass("camera_visThumb");
            });
        }
        function o() {
            function t() {
                if (g = h.width(), -1 != e.height.indexOf("%")) {
                    var t = Math.round(g / (100 / parseFloat(e.height)));
                    v = "" != e.minHeight && t < parseFloat(e.minHeight) ? parseFloat(e.minHeight) : t, 
                    h.css({
                        height: v
                    });
                } else "auto" == e.height ? v = h.height() : (v = parseFloat(e.height), h.css({
                    height: v
                }));
                a(".camerarelative", y).css({
                    width: g,
                    height: v
                }), a(".imgLoaded", y).each(function() {
                    var t, i, r = a(this), o = r.attr("width"), n = r.attr("height"), s = (r.index(), 
                    r.attr("data-alignment")), c = r.attr("data-portrait");
                    if (void 0 !== s && !1 !== s && "" !== s || (s = e.alignment), void 0 !== c && !1 !== c && "" !== c || (c = e.portrait), 
                    0 == c || "false" == c) if (o / n < g / v) {
                        var l = g / o, d = .5 * Math.abs(v - n * l);
                        switch (s) {
                          case "topLeft":
                          case "topCenter":
                          case "topRight":
                            t = 0;
                            break;

                          case "centerLeft":
                          case "center":
                          case "centerRight":
                            t = "-" + d + "px";
                            break;

                          case "bottomLeft":
                          case "bottomCenter":
                          case "bottomRight":
                            t = "-" + 2 * d + "px";
                        }
                        r.css({
                            height: n * l,
                            "margin-left": 0,
                            "margin-right": 0,
                            "margin-top": t,
                            position: "absolute",
                            visibility: "visible",
                            width: g
                        });
                    } else {
                        var l = v / n, d = .5 * Math.abs(g - o * l);
                        switch (s) {
                          case "topLeft":
                            i = 0;
                            break;

                          case "topCenter":
                            i = "-" + d + "px";
                            break;

                          case "topRight":
                            i = "-" + 2 * d + "px";
                            break;

                          case "centerLeft":
                            i = 0;
                            break;

                          case "center":
                            i = "-" + d + "px";
                            break;

                          case "centerRight":
                            i = "-" + 2 * d + "px";
                            break;

                          case "bottomLeft":
                            i = 0;
                            break;

                          case "bottomCenter":
                            i = "-" + d + "px";
                            break;

                          case "bottomRight":
                            i = "-" + 2 * d + "px";
                        }
                        r.css({
                            height: v,
                            "margin-left": i,
                            "margin-right": i,
                            "margin-top": 0,
                            position: "absolute",
                            visibility: "visible",
                            width: o * l
                        });
                    } else if (o / n < g / v) {
                        var l = v / n, d = .5 * Math.abs(g - o * l);
                        switch (s) {
                          case "topLeft":
                            i = 0;
                            break;

                          case "topCenter":
                            i = d + "px";
                            break;

                          case "topRight":
                            i = 2 * d + "px";
                            break;

                          case "centerLeft":
                            i = 0;
                            break;

                          case "center":
                            i = d + "px";
                            break;

                          case "centerRight":
                            i = 2 * d + "px";
                            break;

                          case "bottomLeft":
                            i = 0;
                            break;

                          case "bottomCenter":
                            i = d + "px";
                            break;

                          case "bottomRight":
                            i = 2 * d + "px";
                        }
                        r.css({
                            height: v,
                            "margin-left": i,
                            "margin-right": i,
                            "margin-top": 0,
                            position: "absolute",
                            visibility: "visible",
                            width: o * l
                        });
                    } else {
                        var l = g / o, d = .5 * Math.abs(v - n * l);
                        switch (s) {
                          case "topLeft":
                          case "topCenter":
                          case "topRight":
                            t = 0;
                            break;

                          case "centerLeft":
                          case "center":
                          case "centerRight":
                            t = d + "px";
                            break;

                          case "bottomLeft":
                          case "bottomCenter":
                          case "bottomRight":
                            t = 2 * d + "px";
                        }
                        r.css({
                            height: n * l,
                            "margin-left": 0,
                            "margin-right": 0,
                            "margin-top": t,
                            position: "absolute",
                            visibility: "visible",
                            width: g
                        });
                    }
                });
            }
            var i;
            1 == W ? (clearTimeout(i), i = setTimeout(t, 200)) : t(), W = !0;
        }
        function n() {
            a("iframe", p).each(function() {
                a(".camera_caption", p).show();
                var t = a(this), i = t.attr("data-src");
                t.attr("src", i);
                var r = e.imagePath + "blank.gif", o = new Image();
                if (o.src = r, -1 != e.height.indexOf("%")) {
                    var n = Math.round(g / (100 / parseFloat(e.height)));
                    v = "" != e.minHeight && n < parseFloat(e.minHeight) ? parseFloat(e.minHeight) : n;
                } else v = "auto" == e.height ? h.height() : parseFloat(e.height);
                t.after(a(o).attr({
                    class: "imgFake",
                    width: g,
                    height: v
                }));
                var s = t.clone();
                t.remove(), a(o).bind("click", function() {
                    "absolute" == a(this).css("position") ? (a(this).remove(), -1 != i.indexOf("vimeo") || -1 != i.indexOf("youtube") ? -1 != i.indexOf("?") ? autoplay = "&autoplay=1" : autoplay = "?autoplay=1" : -1 != i.indexOf("dailymotion") && (-1 != i.indexOf("?") ? autoplay = "&autoPlay=1" : autoplay = "?autoPlay=1"), 
                    s.attr("src", i + autoplay), $ = !0) : (a(this).css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 10
                    }).after(s), s.css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: 9
                    }));
                });
            });
        }
        function s(a) {
            for (var e, t, i = a.length; i; e = parseInt(Math.random() * i), t = a[--i], a[i] = a[e], 
            a[e] = t) ;
            return a;
        }
        function c() {
            if (a(S).length && !a(R).length) {
                var e, t = a(S).outerWidth(), i = (a("ul > li", S).outerWidth(), a("li.cameracurrent", S).length ? a("li.cameracurrent", S).position() : ""), o = a("ul > li", S).length * a("ul > li", S).outerWidth(), n = a("ul", S).offset().left, s = a("> div", S).offset().left;
                e = n < 0 ? "-" + (s - n) : s - n, 1 == ra && (a("ul", S).width(a("ul > li", S).length * a("ul > li", S).outerWidth()), 
                a(S).length && !a(R).lenght && h.css({
                    marginBottom: a(S).outerHeight()
                }), r(), a("ul", S).width(a("ul > li", S).length * a("ul > li", S).outerWidth()), 
                a(S).length && !a(R).lenght && h.css({
                    marginBottom: a(S).outerHeight()
                })), ra = !1;
                var c = a("li.cameracurrent", S).length ? i.left : "", l = a("li.cameracurrent", S).length ? i.left + a("li.cameracurrent", S).outerWidth() : "";
                c < a("li.cameracurrent", S).outerWidth() && (c = 0), l - e > t ? c + t < o ? a("ul", S).animate({
                    "margin-left": "-" + c + "px"
                }, 500, r) : a("ul", S).animate({
                    "margin-left": "-" + (a("ul", S).outerWidth() - t) + "px"
                }, 500, r) : c - e < 0 ? a("ul", S).animate({
                    "margin-left": "-" + c + "px"
                }, 500, r) : (a("ul", S).css({
                    "margin-left": "auto",
                    "margin-right": "auto"
                }), setTimeout(r, 100));
            }
        }
        function l() {
            aa = 0;
            var t = a(".camera_bar_cont", X).width(), i = a(".camera_bar_cont", X).height();
            if ("pie" != f) switch (J) {
              case "leftToRight":
                a("#" + b).css({
                    right: t
                });
                break;

              case "rightToLeft":
                a("#" + b).css({
                    left: t
                });
                break;

              case "topToBottom":
                a("#" + b).css({
                    bottom: i
                });
                break;

              case "bottomToTop":
                a("#" + b).css({
                    top: i
                });
            } else ta.clearRect(0, 0, e.pieDiameter, e.pieDiameter);
        }
        function d(t) {
            _.addClass("camerasliding"), $ = !1;
            var r = parseFloat(a("div.cameraSlide.cameracurrent", y).index());
            if (t > 0) var m = t - 1; else if (r == P - 1) var m = 0; else var m = r + 1;
            var u = a(".cameraSlide:eq(" + m + ")", y), C = a(".cameraSlide:eq(" + (m + 1) + ")", y).addClass("cameranext");
            if (r != m + 1 && C.hide(), a(".cameraContent", p).fadeOut(600), a(".camera_caption", p).show(), 
            a(".camerarelative", u).append(a("> div ", _).eq(m).find("> div.camera_effected")), 
            a(".camera_target_content .cameraContent:eq(" + m + ")", h).append(a("> div ", _).eq(m).find("> div")), 
            a(".imgLoaded", u).length) {
                if (F.length > m + 1 && !a(".imgLoaded", C).length) {
                    var w = F[m + 1], k = new Image();
                    k.src = w + "?" + new Date().getTime(), C.prepend(a(k).attr("class", "imgLoaded").css("visibility", "hidden")), 
                    k.onload = function() {
                        _a = k.naturalWidth, ya = k.naturalHeight, a(k).attr("data-alignment", M[m + 1]).attr("data-portrait", A[m + 1]), 
                        a(k).attr("width", _a), a(k).attr("height", ya), o();
                    };
                }
                e.onLoaded.call(this), a(".camera_loader", h).is(":visible") ? a(".camera_loader", h).fadeOut(400) : (a(".camera_loader", h).css({
                    visibility: "hidden"
                }), a(".camera_loader", h).fadeOut(400, function() {
                    a(".camera_loader", h).css({
                        visibility: "visible"
                    });
                }));
                var x, T, L, B, O, I = e.rows, q = e.cols, D = 1, E = 0, N = new Array("simpleFade", "curtainTopLeft", "curtainTopRight", "curtainBottomLeft", "curtainBottomRight", "curtainSliceLeft", "curtainSliceRight", "blindCurtainTopLeft", "blindCurtainTopRight", "blindCurtainBottomLeft", "blindCurtainBottomRight", "blindCurtainSliceBottom", "blindCurtainSliceTop", "stampede", "mosaic", "mosaicReverse", "mosaicRandom", "mosaicSpiral", "mosaicSpiralReverse", "topLeftBottomRight", "bottomRightTopLeft", "bottomLeftTopRight", "topRightBottomLeft", "scrollLeft", "scrollRight", "scrollTop", "scrollBottom", "scrollHorz");
                marginLeft = 0, marginTop = 0, opacityOnGrid = 0, 1 == e.opacityOnGrid ? opacityOnGrid = 0 : opacityOnGrid = 1;
                var W = a(" > div", _).eq(m).attr("data-fx");
                if (B = i() && "" != e.mobileFx && "default" != e.mobileFx ? e.mobileFx : void 0 !== W && !1 !== W && "default" !== W ? W : e.fx, 
                "random" == B ? (B = s(N), B = B[0]) : (B = B, B.indexOf(",") > 0 && (B = B.replace(/ /g, ""), 
                B = B.split(","), B = s(B), B = B[0])), dataEasing = a(" > div", _).eq(m).attr("data-easing"), 
                mobileEasing = a(" > div", _).eq(m).attr("data-mobileEasing"), O = i() && "" != e.mobileEasing && "default" != e.mobileEasing ? "undefined" != typeof mobileEasing && !1 !== mobileEasing && "default" !== mobileEasing ? mobileEasing : e.mobileEasing : "undefined" != typeof dataEasing && !1 !== dataEasing && "default" !== dataEasing ? dataEasing : e.easing, 
                void 0 !== (x = a(" > div", _).eq(m).attr("data-slideOn")) && !1 !== x) z = x; else if ("random" == e.slideOn) {
                    var z = new Array("next", "prev");
                    z = s(z), z = z[0];
                } else z = e.slideOn;
                var Q = a(" > div", _).eq(m).attr("data-time");
                T = void 0 !== Q && !1 !== Q && "" !== Q ? parseFloat(Q) : e.time;
                var U = a(" > div", _).eq(m).attr("data-transPeriod");
                switch (L = void 0 !== U && !1 !== U && "" !== U ? parseFloat(U) : e.transPeriod, 
                a(_).hasClass("camerastarted") || (B = "simpleFade", z = "next", O = "", L = 400, 
                a(_).addClass("camerastarted")), B) {
                  case "simpleFade":
                    q = 1, I = 1;
                    break;

                  case "curtainTopLeft":
                  case "curtainTopRight":
                  case "curtainBottomLeft":
                  case "curtainBottomRight":
                  case "curtainSliceLeft":
                  case "curtainSliceRight":
                    q = 0 == e.slicedCols ? e.cols : e.slicedCols, I = 1;
                    break;

                  case "blindCurtainTopLeft":
                  case "blindCurtainTopRight":
                  case "blindCurtainBottomLeft":
                  case "blindCurtainBottomRight":
                  case "blindCurtainSliceTop":
                  case "blindCurtainSliceBottom":
                    I = 0 == e.slicedRows ? e.rows : e.slicedRows, q = 1;
                    break;

                  case "stampede":
                    E = "-" + L;
                    break;

                  case "mosaic":
                  case "mosaicReverse":
                    E = e.gridDifference;
                    break;

                  case "mosaicRandom":
                    break;

                  case "mosaicSpiral":
                  case "mosaicSpiralReverse":
                    E = e.gridDifference, D = 1.7;
                    break;

                  case "topLeftBottomRight":
                  case "bottomRightTopLeft":
                  case "bottomLeftTopRight":
                  case "topRightBottomLeft":
                    E = e.gridDifference, D = 6;
                    break;

                  case "scrollLeft":
                  case "scrollRight":
                  case "scrollTop":
                  case "scrollBottom":
                  case "scrollHorz":
                    q = 1, I = 1;
                }
                for (var V, Y, Z = 0, ia = I * q, ra = g - Math.floor(g / q) * q, oa = v - Math.floor(v / I) * I, na = 0, sa = 0, ca = new Array(), la = new Array(), da = new Array(); Z < ia; ) {
                    ca.push(Z), la.push(Z), H.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />');
                    var ma = a(".cameraappended:eq(" + Z + ")", y);
                    "scrollLeft" == B || "scrollRight" == B || "scrollTop" == B || "scrollBottom" == B || "scrollHorz" == B ? K.eq(m).clone().show().appendTo(ma) : "next" == z ? K.eq(m).clone().show().appendTo(ma) : K.eq(r).clone().show().appendTo(ma), 
                    V = Z % q < ra ? 1 : 0, Z % q == 0 && (na = 0), Y = Math.floor(Z / q) < oa ? 1 : 0, 
                    ma.css({
                        height: Math.floor(v / I + Y + 1),
                        left: na,
                        top: sa,
                        width: Math.floor(g / q + V + 1)
                    }), a("> .cameraSlide", ma).css({
                        height: v,
                        "margin-left": "-" + na + "px",
                        "margin-top": "-" + sa + "px",
                        width: g
                    }), na = na + ma.width() - 1, Z % q == q - 1 && (sa = sa + ma.height() - 1), Z++;
                }
                switch (B) {
                  case "curtainTopLeft":
                  case "curtainBottomLeft":
                  case "curtainSliceLeft":
                    break;

                  case "curtainTopRight":
                  case "curtainBottomRight":
                  case "curtainSliceRight":
                    ca = ca.reverse();
                    break;

                  case "blindCurtainTopLeft":
                    break;

                  case "blindCurtainBottomLeft":
                    ca = ca.reverse();
                    break;

                  case "blindCurtainSliceTop":
                  case "blindCurtainTopRight":
                    break;

                  case "blindCurtainBottomRight":
                  case "blindCurtainSliceBottom":
                    ca = ca.reverse();
                    break;

                  case "stampede":
                    ca = s(ca);
                    break;

                  case "mosaic":
                    break;

                  case "mosaicReverse":
                    ca = ca.reverse();
                    break;

                  case "mosaicRandom":
                    ca = s(ca);
                    break;

                  case "mosaicSpiral":
                    var ha, pa, ua, fa = I / 2, ga = 0;
                    for (ua = 0; ua < fa; ua++) {
                        for (pa = ua, ha = ua; ha < q - ua - 1; ha++) da[ga++] = pa * q + ha;
                        for (ha = q - ua - 1, pa = ua; pa < I - ua - 1; pa++) da[ga++] = pa * q + ha;
                        for (pa = I - ua - 1, ha = q - ua - 1; ha > ua; ha--) da[ga++] = pa * q + ha;
                        for (ha = ua, pa = I - ua - 1; pa > ua; pa--) da[ga++] = pa * q + ha;
                    }
                    ca = da;
                    break;

                  case "mosaicSpiralReverse":
                    var ha, pa, ua, fa = I / 2, ga = ia - 1;
                    for (ua = 0; ua < fa; ua++) {
                        for (pa = ua, ha = ua; ha < q - ua - 1; ha++) da[ga--] = pa * q + ha;
                        for (ha = q - ua - 1, pa = ua; pa < I - ua - 1; pa++) da[ga--] = pa * q + ha;
                        for (pa = I - ua - 1, ha = q - ua - 1; ha > ua; ha--) da[ga--] = pa * q + ha;
                        for (ha = ua, pa = I - ua - 1; pa > ua; pa--) da[ga--] = pa * q + ha;
                    }
                    ca = da;
                    break;

                  case "topLeftBottomRight":
                    for (var pa = 0; pa < I; pa++) for (var ha = 0; ha < q; ha++) da.push(ha + pa);
                    la = da;
                    break;

                  case "bottomRightTopLeft":
                    for (var pa = 0; pa < I; pa++) for (var ha = 0; ha < q; ha++) da.push(ha + pa);
                    la = da.reverse();
                    break;

                  case "bottomLeftTopRight":
                    for (var pa = I; pa > 0; pa--) for (var ha = 0; ha < q; ha++) da.push(ha + pa);
                    la = da;
                    break;

                  case "topRightBottomLeft":
                    for (var pa = 0; pa < I; pa++) for (var ha = q; ha > 0; ha--) da.push(ha + pa);
                    la = da;
                }
                a.each(ca, function(t, i) {
                    function o() {
                        if (a(this).addClass("cameraeased"), a(".cameraeased", y).length >= 0 && a(S).css({
                            visibility: "visible"
                        }), a(".cameraeased", y).length == ia) {
                            c(), a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", p).each(function() {
                                a(this).css("visibility", "hidden");
                            }), K.eq(m).show().css("z-index", "999").removeClass("cameranext").addClass("cameracurrent"), 
                            K.eq(r).css("z-index", "1").removeClass("cameracurrent"), a(".cameraContent", p).eq(m).addClass("cameracurrent"), 
                            r >= 0 && a(".cameraContent", p).eq(r).removeClass("cameracurrent"), e.onEndTransition.call(this), 
                            "hide" != a("> div", _).eq(m).attr("data-video") && a(".cameraContent.cameracurrent .imgFake", p).length && a(".cameraContent.cameracurrent .imgFake", p).click();
                            var t = K.eq(m).find(".fadeIn").length, i = a(".cameraContent", p).eq(m).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length;
                            0 != t && a(".cameraSlide.cameracurrent .fadeIn", p).each(function() {
                                if ("" != a(this).attr("data-easing")) var e = a(this).attr("data-easing"); else var e = O;
                                var i = a(this);
                                if (void 0 === i.attr("data-outerWidth") || !1 === i.attr("data-outerWidth") || "" === i.attr("data-outerWidth")) {
                                    var r = i.outerWidth();
                                    i.attr("data-outerWidth", r);
                                } else var r = i.attr("data-outerWidth");
                                if (void 0 === i.attr("data-outerHeight") || !1 === i.attr("data-outerHeight") || "" === i.attr("data-outerHeight")) {
                                    var o = i.outerHeight();
                                    i.attr("data-outerHeight", o);
                                } else var o = i.attr("data-outerHeight");
                                var n = i.position(), s = (n.left, n.top, i.attr("class")), c = i.index();
                                i.parents(".camerarelative").outerHeight(), i.parents(".camerarelative").outerWidth();
                                -1 != s.indexOf("fadeIn") ? i.animate({
                                    opacity: 0
                                }, 0).css("visibility", "visible").delay(T / t * (.1 * (c - 1))).animate({
                                    opacity: 1
                                }, T / t * .15, e) : i.css("visibility", "visible");
                            }), a(".cameraContent.cameracurrent", p).show(), 0 != i && a(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom", p).each(function() {
                                if ("" != a(this).attr("data-easing")) var e = a(this).attr("data-easing"); else var e = O;
                                var t = a(this), r = t.position(), o = (r.left, r.top, t.attr("class")), n = t.index(), s = t.outerHeight();
                                -1 != o.indexOf("moveFromLeft") ? (t.css({
                                    left: "-" + g + "px",
                                    right: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (n - 1))).animate({
                                    left: r.left
                                }, T / i * .15, e)) : -1 != o.indexOf("moveFromRight") ? (t.css({
                                    left: g + "px",
                                    right: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (n - 1))).animate({
                                    left: r.left
                                }, T / i * .15, e)) : -1 != o.indexOf("moveFromTop") ? (t.css({
                                    top: "-" + v + "px",
                                    bottom: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (n - 1))).animate({
                                    top: r.top
                                }, T / i * .15, e, function() {
                                    t.css({
                                        top: "auto",
                                        bottom: 0
                                    });
                                })) : -1 != o.indexOf("moveFromBottom") ? (t.css({
                                    top: v + "px",
                                    bottom: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (n - 1))).animate({
                                    top: r.top
                                }, T / i * .15, e)) : -1 != o.indexOf("fadeFromLeft") ? (t.animate({
                                    opacity: 0
                                }, 0).css({
                                    left: "-" + g + "px",
                                    right: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (n - 1))).animate({
                                    left: r.left,
                                    opacity: 1
                                }, T / i * .15, e)) : -1 != o.indexOf("fadeFromRight") ? (t.animate({
                                    opacity: 0
                                }, 0).css({
                                    left: g + "px",
                                    right: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (n - 1))).animate({
                                    left: r.left,
                                    opacity: 1
                                }, T / i * .15, e)) : -1 != o.indexOf("fadeFromTop") ? (t.animate({
                                    opacity: 0
                                }, 0).css({
                                    top: "-" + v + "px",
                                    bottom: "auto"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (n - 1))).animate({
                                    top: r.top,
                                    opacity: 1
                                }, T / i * .15, e, function() {
                                    t.css({
                                        top: "auto",
                                        bottom: 0
                                    });
                                })) : -1 != o.indexOf("fadeFromBottom") ? (t.animate({
                                    opacity: 0
                                }, 0).css({
                                    bottom: "-" + s + "px"
                                }), t.css("visibility", "visible").delay(T / i * (.1 * (n - 1))).animate({
                                    bottom: "0",
                                    opacity: 1
                                }, T / i * .15, e)) : -1 != o.indexOf("fadeIn") ? t.animate({
                                    opacity: 0
                                }, 0).css("visibility", "visible").delay(T / i * (.1 * (n - 1))).animate({
                                    opacity: 1
                                }, T / i * .15, e) : t.css("visibility", "visible");
                            }), a(".cameraappended", y).remove(), _.removeClass("camerasliding"), K.eq(r).hide();
                            var o, s = a(".camera_bar_cont", X).width(), h = a(".camera_bar_cont", X).height();
                            o = "pie" != f ? .05 : .005, a("#" + b).animate({
                                opacity: e.loaderOpacity
                            }, 200), j = setInterval(function() {
                                if (_.hasClass("stopped") && clearInterval(j), "pie" != f) switch (aa <= 1.002 && !_.hasClass("stopped") && !_.hasClass("paused") && !_.hasClass("hovered") ? aa += o : aa <= 1 && (_.hasClass("stopped") || _.hasClass("paused") || _.hasClass("stopped") || _.hasClass("hovered")) ? aa = aa : _.hasClass("stopped") || _.hasClass("paused") || _.hasClass("hovered") || (clearInterval(j), 
                                n(), a("#" + b).animate({
                                    opacity: 0
                                }, 200, function() {
                                    clearTimeout(G), G = setTimeout(l, u), d(), e.onStartLoading.call(this);
                                })), J) {
                                  case "leftToRight":
                                    a("#" + b).animate({
                                        right: s - s * aa
                                    }, T * o, "linear");
                                    break;

                                  case "rightToLeft":
                                    a("#" + b).animate({
                                        left: s - s * aa
                                    }, T * o, "linear");
                                    break;

                                  case "topToBottom":
                                  case "bottomToTop":
                                    a("#" + b).animate({
                                        bottom: h - h * aa
                                    }, T * o, "linear");
                                } else ea = aa, ta.clearRect(0, 0, e.pieDiameter, e.pieDiameter), ta.globalCompositeOperation = "destination-over", 
                                ta.beginPath(), ta.arc(e.pieDiameter / 2, e.pieDiameter / 2, e.pieDiameter / 2 - e.loaderStroke, 0, 2 * Math.PI, !1), 
                                ta.lineWidth = e.loaderStroke, ta.strokeStyle = e.loaderBgColor, ta.stroke(), ta.closePath(), 
                                ta.globalCompositeOperation = "source-over", ta.beginPath(), ta.arc(e.pieDiameter / 2, e.pieDiameter / 2, e.pieDiameter / 2 - e.loaderStroke, 0, 2 * Math.PI * ea, !1), 
                                ta.lineWidth = e.loaderStroke - 2 * e.loaderPadding, ta.strokeStyle = e.loaderColor, 
                                ta.stroke(), ta.closePath(), aa <= 1.002 && !_.hasClass("stopped") && !_.hasClass("paused") && !_.hasClass("hovered") ? aa += o : aa <= 1 && (_.hasClass("stopped") || _.hasClass("paused") || _.hasClass("hovered")) ? aa = aa : _.hasClass("stopped") || _.hasClass("paused") || _.hasClass("hovered") || (clearInterval(j), 
                                n(), a("#" + b + ", .camera_canvas_wrap", X).animate({
                                    opacity: 0
                                }, 200, function() {
                                    clearTimeout(G), G = setTimeout(l, u), d(), e.onStartLoading.call(this);
                                }));
                            }, T * o);
                        }
                    }
                    switch (V = i % q < ra ? 1 : 0, i % q == 0 && (na = 0), Y = Math.floor(i / q) < oa ? 1 : 0, 
                    B) {
                      case "simpleFade":
                        height = v, width = g, opacityOnGrid = 0;
                        break;

                      case "curtainTopLeft":
                      case "curtainTopRight":
                        height = 0, width = Math.floor(g / q + V + 1), marginTop = "-" + Math.floor(v / I + Y + 1) + "px";
                        break;

                      case "curtainBottomLeft":
                      case "curtainBottomRight":
                        height = 0, width = Math.floor(g / q + V + 1), marginTop = Math.floor(v / I + Y + 1) + "px";
                        break;

                      case "curtainSliceLeft":
                      case "curtainSliceRight":
                        height = 0, width = Math.floor(g / q + V + 1), marginTop = i % 2 == 0 ? Math.floor(v / I + Y + 1) + "px" : "-" + Math.floor(v / I + Y + 1) + "px";
                        break;

                      case "blindCurtainTopLeft":
                        height = Math.floor(v / I + Y + 1), width = 0, marginLeft = "-" + Math.floor(g / q + V + 1) + "px";
                        break;

                      case "blindCurtainTopRight":
                        height = Math.floor(v / I + Y + 1), width = 0, marginLeft = Math.floor(g / q + V + 1) + "px";
                        break;

                      case "blindCurtainBottomLeft":
                        height = Math.floor(v / I + Y + 1), width = 0, marginLeft = "-" + Math.floor(g / q + V + 1) + "px";
                        break;

                      case "blindCurtainBottomRight":
                        height = Math.floor(v / I + Y + 1), width = 0, marginLeft = Math.floor(g / q + V + 1) + "px";
                        break;

                      case "blindCurtainSliceBottom":
                      case "blindCurtainSliceTop":
                        height = Math.floor(v / I + Y + 1), width = 0, marginLeft = i % 2 == 0 ? "-" + Math.floor(g / q + V + 1) + "px" : Math.floor(g / q + V + 1) + "px";
                        break;

                      case "stampede":
                        height = 0, width = 0, marginLeft = .2 * g * (t % q - (q - Math.floor(q / 2))) + "px", 
                        marginTop = .2 * v * (Math.floor(t / q) + 1 - (I - Math.floor(I / 2))) + "px";
                        break;

                      case "mosaic":
                        height = 0, width = 0;
                        break;

                      case "mosaicReverse":
                        height = 0, width = 0, marginLeft = Math.floor(g / q + V + 1) + "px", marginTop = Math.floor(v / I + Y + 1) + "px";
                        break;

                      case "mosaicRandom":
                      case "mosaicSpiral":
                      case "mosaicSpiralReverse":
                        height = 0, width = 0, marginLeft = .5 * Math.floor(g / q + V + 1) + "px", marginTop = .5 * Math.floor(v / I + Y + 1) + "px";
                        break;

                      case "topLeftBottomRight":
                        height = 0, width = 0;
                        break;

                      case "bottomRightTopLeft":
                        height = 0, width = 0, marginLeft = Math.floor(g / q + V + 1) + "px", marginTop = Math.floor(v / I + Y + 1) + "px";
                        break;

                      case "bottomLeftTopRight":
                        height = 0, width = 0, marginLeft = 0, marginTop = Math.floor(v / I + Y + 1) + "px";
                        break;

                      case "topRightBottomLeft":
                        height = 0, width = 0, marginLeft = Math.floor(g / q + V + 1) + "px", marginTop = 0;
                        break;

                      case "scrollRight":
                        height = v, width = g, marginLeft = -g;
                        break;

                      case "scrollLeft":
                        height = v, width = g, marginLeft = g;
                        break;

                      case "scrollTop":
                        height = v, width = g, marginTop = v;
                        break;

                      case "scrollBottom":
                        height = v, width = g, marginTop = -v;
                        break;

                      case "scrollHorz":
                        height = v, width = g, marginLeft = 0 == r && m == P - 1 ? -g : r < m || r == P - 1 && 0 == m ? g : -g;
                    }
                    var s = a(".cameraappended:eq(" + i + ")", y);
                    void 0 !== j && (clearInterval(j), clearTimeout(G), G = setTimeout(l, L + E)), a(R).length && (a(".camera_pag li", h).removeClass("cameracurrent"), 
                    a(".camera_pag li", h).eq(m).addClass("cameracurrent")), a(S).length && (a("li", S).removeClass("cameracurrent"), 
                    a("li", S).eq(m).addClass("cameracurrent"), a("li", S).not(".cameracurrent").find("img").animate({
                        opacity: .5
                    }, 0), a("li.cameracurrent img", S).animate({
                        opacity: 1
                    }, 0), a("li", S).hover(function() {
                        a("img", this).stop(!0, !1).animate({
                            opacity: 1
                        }, 150);
                    }, function() {
                        a(this).hasClass("cameracurrent") || a("img", this).stop(!0, !1).animate({
                            opacity: .5
                        }, 150);
                    }));
                    var u = parseFloat(L) + parseFloat(E);
                    "scrollLeft" == B || "scrollRight" == B || "scrollTop" == B || "scrollBottom" == B || "scrollHorz" == B ? (e.onStartTransition.call(this), 
                    u = 0, s.delay((L + E) / ia * la[t] * D * .5).css({
                        display: "block",
                        height: height,
                        "margin-left": marginLeft,
                        "margin-top": marginTop,
                        width: width
                    }).animate({
                        height: Math.floor(v / I + Y + 1),
                        "margin-top": 0,
                        "margin-left": 0,
                        width: Math.floor(g / q + V + 1)
                    }, L - E, O, o), K.eq(r).delay((L + E) / ia * la[t] * D * .5).animate({
                        "margin-left": -1 * marginLeft,
                        "margin-top": -1 * marginTop
                    }, L - E, O, function() {
                        a(this).css({
                            "margin-top": 0,
                            "margin-left": 0
                        });
                    })) : (e.onStartTransition.call(this), u = parseFloat(L) + parseFloat(E), "next" == z ? s.delay((L + E) / ia * la[t] * D * .5).css({
                        display: "block",
                        height: height,
                        "margin-left": marginLeft,
                        "margin-top": marginTop,
                        width: width,
                        opacity: opacityOnGrid
                    }).animate({
                        height: Math.floor(v / I + Y + 1),
                        "margin-top": 0,
                        "margin-left": 0,
                        opacity: 1,
                        width: Math.floor(g / q + V + 1)
                    }, L - E, O, o) : (K.eq(m).show().css("z-index", "999").addClass("cameracurrent"), 
                    K.eq(r).css("z-index", "1").removeClass("cameracurrent"), a(".cameraContent", p).eq(m).addClass("cameracurrent"), 
                    a(".cameraContent", p).eq(r).removeClass("cameracurrent"), s.delay((L + E) / ia * la[t] * D * .5).css({
                        display: "block",
                        height: Math.floor(v / I + Y + 1),
                        "margin-top": 0,
                        "margin-left": 0,
                        opacity: 1,
                        width: Math.floor(g / q + V + 1)
                    }).animate({
                        height: height,
                        "margin-left": marginLeft,
                        "margin-top": marginTop,
                        width: width,
                        opacity: opacityOnGrid
                    }, L - E, O, o)));
                });
            } else {
                var va = F[m], ba = new Image();
                ba.src = va + "?" + new Date().getTime(), u.css("visibility", "hidden"), u.prepend(a(ba).attr("class", "imgLoaded").css("visibility", "hidden"));
                var _a, ya;
                a(ba).get(0).complete && "0" != _a && "0" != ya && void 0 !== _a && !1 !== _a && void 0 !== ya && !1 !== ya || (a(".camera_loader", h).delay(500).fadeIn(400), 
                ba.onload = function() {
                    _a = ba.naturalWidth, ya = ba.naturalHeight, a(ba).attr("data-alignment", M[m]).attr("data-portrait", A[m]), 
                    a(ba).attr("width", _a), a(ba).attr("height", ya), y.find(".cameraSlide_" + m).hide().css("visibility", "visible"), 
                    o(), d(m + 1);
                });
            }
        }
        var m = {
            alignment: "center",
            autoAdvance: !0,
            mobileAutoAdvance: !0,
            barDirection: "leftToRight",
            barPosition: "bottom",
            cols: 6,
            easing: "easeInOutExpo",
            mobileEasing: "",
            fx: "random",
            mobileFx: "",
            gridDifference: 250,
            height: "50%",
            imagePath: "images/",
            hover: !0,
            loader: "pie",
            loaderColor: "#eeeeee",
            loaderBgColor: "#222222",
            loaderOpacity: .8,
            loaderPadding: 2,
            loaderStroke: 7,
            minHeight: "200px",
            navigation: !0,
            navigationHover: !0,
            mobileNavHover: !0,
            opacityOnGrid: !1,
            overlayer: !0,
            pagination: !0,
            playPause: !0,
            pauseOnClick: !0,
            pieDiameter: 38,
            piePosition: "rightTop",
            portrait: !1,
            rows: 4,
            slicedCols: 12,
            slicedRows: 8,
            slideOn: "random",
            thumbnails: !1,
            time: 7e3,
            transPeriod: 1500,
            onEndTransition: function() {},
            onLoaded: function() {},
            onStartLoading: function() {},
            onStartTransition: function() {}
        };
        a.support.borderRadius = !1, a.each([ "borderRadius", "BorderRadius", "MozBorderRadius", "WebkitBorderRadius", "OBorderRadius", "KhtmlBorderRadius" ], function() {
            void 0 !== document.body.style[this] && (a.support.borderRadius = !0);
        });
        var e = a.extend({}, m, e), h = a(this).addClass("camera_wrap");
        h.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />');
        var p = a(".camera_fakehover", h), u = h;
        p.append('<div class="camera_target"></div>'), 1 == e.overlayer && p.append('<div class="camera_overlayer"></div>'), 
        p.append('<div class="camera_target_content"></div>');
        var f;
        f = "pie" != e.loader || a.support.borderRadius ? e.loader : "bar", "pie" == f ? p.append('<div class="camera_pie"></div>') : "bar" == f ? p.append('<div class="camera_bar"></div>') : p.append('<div class="camera_bar" style="display:none"></div>'), 
        1 == e.playPause && p.append('<div class="camera_commands"></div>'), 1 == e.navigation && p.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>'), 
        1 == e.thumbnails && h.append('<div class="camera_thumbs_cont" />'), 1 == e.thumbnails && 1 != e.pagination && a(".camera_thumbs_cont", h).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />'), 
        1 == e.pagination && h.append('<div class="camera_pag"></div>'), h.append('<div class="camera_loader"></div>'), 
        a(".camera_caption", h).each(function() {
            a(this).wrapInner("<div />");
        });
        var g, v, b = "pie_" + h.index(), _ = a(".camera_src", h), y = a(".camera_target", h), C = a(".camera_target_content", h), w = a(".camera_pie", h), k = a(".camera_bar", h), x = a(".camera_prev", h), T = a(".camera_next", h), L = a(".camera_commands", h), R = a(".camera_pag", h), S = a(".camera_thumbs_cont", h), F = new Array();
        a("> div", _).each(function() {
            F.push(a(this).attr("data-src"));
        });
        var B = new Array();
        a("> div", _).each(function() {
            a(this).attr("data-link") ? B.push(a(this).attr("data-link")) : B.push("");
        });
        var O = new Array();
        a("> div", _).each(function() {
            a(this).attr("data-target") ? O.push(a(this).attr("data-target")) : O.push("");
        });
        var A = new Array();
        a("> div", _).each(function() {
            a(this).attr("data-portrait") ? A.push(a(this).attr("data-portrait")) : A.push("");
        });
        var M = new Array();
        a("> div", _).each(function() {
            a(this).attr("data-alignment") ? M.push(a(this).attr("data-alignment")) : M.push("");
        });
        var I = new Array();
        a("> div", _).each(function() {
            a(this).attr("data-thumb") ? I.push(a(this).attr("data-thumb")) : I.push("");
        });
        var P = F.length;
        a(C).append('<div class="cameraContents" />');
        var q;
        for (q = 0; q < P; q++) if (a(".cameraContents", C).append('<div class="cameraContent" />'), 
        "" != B[q]) {
            var D = a("> div ", _).eq(q).attr("data-box");
            D = void 0 !== D && !1 !== D && "" != D ? 'data-box="' + a("> div ", _).eq(q).attr("data-box") + '"' : "", 
            a(".camera_target_content .cameraContent:eq(" + q + ")", h).append('<a class="camera_link" href="' + B[q] + '" ' + D + ' target="' + O[q] + '"></a>');
        }
        a(".camera_caption", h).each(function() {
            var e = a(this).parent().index(), t = h.find(".cameraContent").eq(e);
            a(this).appendTo(t);
        }), y.append('<div class="cameraCont" />');
        var E, H = a(".cameraCont", h);
        for (E = 0; E < P; E++) {
            H.append('<div class="cameraSlide cameraSlide_' + E + '" />');
            var N = a("> div:eq(" + E + ")", _);
            y.find(".cameraSlide_" + E).clone(N);
        }
        a(window).bind("load resize pageshow", function() {
            c(), r();
        }), H.append('<div class="cameraSlide cameraSlide_' + E + '" />');
        var W;
        h.show();
        var z, g = y.width(), v = y.height();
        a(window).bind("resize pageshow", function() {
            1 == W && o(), a("ul", S).animate({
                "margin-top": 0
            }, 0, c), _.hasClass("paused") || (_.addClass("paused"), a(".camera_stop", X).length ? (a(".camera_stop", X).hide(), 
            a(".camera_play", X).show(), "none" != f && a("#" + b).hide()) : "none" != f && a("#" + b).hide(), 
            clearTimeout(z), z = setTimeout(function() {
                _.removeClass("paused"), a(".camera_play", X).length ? (a(".camera_play", X).hide(), 
                a(".camera_stop", X).show(), "none" != f && a("#" + b).fadeIn()) : "none" != f && a("#" + b).fadeIn();
            }, 1500));
        });
        var j, G, Q, U, L, R, V, $;
        if (Q = i() && "" != e.mobileAutoAdvance ? e.mobileAutoAdvance : e.autoAdvance, 
        0 == Q && _.addClass("paused"), U = i() && "" != e.mobileNavHover ? e.mobileNavHover : e.navigationHover, 
        0 != _.length) {
            var K = a(".cameraSlide", y);
            K.wrapInner('<div class="camerarelative" />');
            var J = e.barDirection, X = h;
            a("iframe", p).each(function() {
                var e = a(this), t = e.attr("src");
                e.attr("data-src", t);
                var i = e.parent().index(".camera_src > div");
                a(".camera_target_content .cameraContent:eq(" + i + ")", h).append(e);
            }), n(), 1 == e.hover && (i() || p.hover(function() {
                _.addClass("hovered");
            }, function() {
                _.removeClass("hovered");
            })), 1 == U && (a(x, h).animate({
                opacity: 0
            }, 0), a(T, h).animate({
                opacity: 0
            }, 0), a(L, h).animate({
                opacity: 0
            }, 0), i() ? (a(document).on("vmouseover", u, function() {
                a(x, h).animate({
                    opacity: 1
                }, 200), a(T, h).animate({
                    opacity: 1
                }, 200), a(L, h).animate({
                    opacity: 1
                }, 200);
            }), a(document).on("vmouseout", u, function() {
                a(x, h).delay(500).animate({
                    opacity: 0
                }, 200), a(T, h).delay(500).animate({
                    opacity: 0
                }, 200), a(L, h).delay(500).animate({
                    opacity: 0
                }, 200);
            })) : p.hover(function() {
                a(x, h).animate({
                    opacity: 1
                }, 200), a(T, h).animate({
                    opacity: 1
                }, 200), a(L, h).animate({
                    opacity: 1
                }, 200);
            }, function() {
                a(x, h).animate({
                    opacity: 0
                }, 200), a(T, h).animate({
                    opacity: 0
                }, 200), a(L, h).animate({
                    opacity: 0
                }, 200);
            })), X.on("click", ".camera_stop", function() {
                Q = !1, _.addClass("paused"), a(".camera_stop", X).length ? (a(".camera_stop", X).hide(), 
                a(".camera_play", X).show(), "none" != f && a("#" + b).hide()) : "none" != f && a("#" + b).hide();
            }), X.on("click", ".camera_play", function() {
                Q = !0, _.removeClass("paused"), a(".camera_play", X).length ? (a(".camera_play", X).hide(), 
                a(".camera_stop", X).show(), "none" != f && a("#" + b).show()) : "none" != f && a("#" + b).show();
            }), 1 == e.pauseOnClick && a(".camera_target_content", p).mouseup(function() {
                Q = !1, _.addClass("paused"), a(".camera_stop", X).hide(), a(".camera_play", X).show(), 
                a("#" + b).hide();
            }), a(".cameraContent, .imgFake", p).hover(function() {
                V = !0;
            }, function() {
                V = !1;
            }), a(".cameraContent, .imgFake", p).bind("click", function() {
                1 == $ && 1 == V && (Q = !1, a(".camera_caption", p).hide(), _.addClass("paused"), 
                a(".camera_stop", X).hide(), a(".camera_play", X).show(), a("#" + b).hide());
            });
        }
        if ("pie" != f) {
            k.append('<span class="camera_bar_cont" />'), a(".camera_bar_cont", k).animate({
                opacity: e.loaderOpacity
            }, 0).css({
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                "background-color": e.loaderBgColor
            }).append('<span id="' + b + '" />'), a("#" + b).animate({
                opacity: 0
            }, 0);
            var Y = a("#" + b);
            switch (Y.css({
                position: "absolute",
                "background-color": e.loaderColor
            }), e.barPosition) {
              case "left":
                k.css({
                    right: "auto",
                    width: e.loaderStroke
                });
                break;

              case "right":
                k.css({
                    left: "auto",
                    width: e.loaderStroke
                });
                break;

              case "top":
                k.css({
                    bottom: "auto",
                    height: e.loaderStroke
                });
                break;

              case "bottom":
                k.css({
                    top: "auto",
                    height: e.loaderStroke
                });
            }
            switch (J) {
              case "leftToRight":
              case "rightToLeft":
                Y.css({
                    left: 0,
                    right: 0,
                    top: e.loaderPadding,
                    bottom: e.loaderPadding
                });
                break;

              case "topToBottom":
              case "bottomToTop":
                Y.css({
                    left: e.loaderPadding,
                    right: e.loaderPadding,
                    top: 0,
                    bottom: 0
                });
            }
        } else {
            w.append('<canvas id="' + b + '"></canvas>');
            var Y = document.getElementById(b);
            Y.setAttribute("width", e.pieDiameter), Y.setAttribute("height", e.pieDiameter);
            var Z;
            switch (e.piePosition) {
              case "leftTop":
                Z = "left:0; top:0;";
                break;

              case "rightTop":
                Z = "right:0; top:0;";
                break;

              case "leftBottom":
                Z = "left:0; bottom:0;";
                break;

              case "rightBottom":
                Z = "right:0; bottom:0;";
            }
            Y.setAttribute("style", "position:absolute; z-index:1002; " + Z);
            var aa, ea;
            if (Y && Y.getContext) {
                var ta = Y.getContext("2d");
                ta.rotate(1.5 * Math.PI), ta.translate(-e.pieDiameter, 0);
            }
        }
        if ("none" != f && 0 != Q || (a("#" + b).hide(), a(".camera_canvas_wrap", X).hide()), 
        a(R).length) {
            a(R).append('<ul class="camera_pag_ul" />');
            var ia;
            for (ia = 0; ia < P; ia++) a(".camera_pag_ul", h).append('<li class="pag_nav_' + ia + '" style="position:relative; z-index:1002"><span><span>' + ia + "</span></span></li>");
            a(".camera_pag_ul li", h).hover(function() {
                if (a(this).addClass("camera_hover"), a(".camera_thumb", this).length) {
                    var e = a(".camera_thumb", this).outerWidth(), t = a(".camera_thumb", this).outerHeight(), i = a(this).outerWidth();
                    a(".camera_thumb", this).show().css({
                        top: "-" + t + "px",
                        left: "-" + (e - i) / 2 + "px"
                    }).animate({
                        opacity: 1,
                        "margin-top": "-3px"
                    }, 200), a(".thumb_arrow", this).show().animate({
                        opacity: 1,
                        "margin-top": "-3px"
                    }, 200);
                }
            }, function() {
                a(this).removeClass("camera_hover"), a(".camera_thumb", this).animate({
                    "margin-top": "-20px",
                    opacity: 0
                }, 200, function() {
                    a(this).css({
                        marginTop: "5px"
                    }).hide();
                }), a(".thumb_arrow", this).animate({
                    "margin-top": "-20px",
                    opacity: 0
                }, 200, function() {
                    a(this).css({
                        marginTop: "5px"
                    }).hide();
                });
            });
        }
        if (a(S).length) {
            a(R).length ? (a.each(I, function(e, t) {
                if ("" != a("> div", _).eq(e).attr("data-thumb")) {
                    var i = a("> div", _).eq(e).attr("data-thumb"), r = new Image();
                    r.src = i, a("li.pag_nav_" + e, R).append(a(r).attr("class", "camera_thumb").css({
                        position: "absolute"
                    }).animate({
                        opacity: 0
                    }, 0)), a("li.pag_nav_" + e + " > img", R).after('<div class="thumb_arrow" />'), 
                    a("li.pag_nav_" + e + " > .thumb_arrow", R).animate({
                        opacity: 0
                    }, 0);
                }
            }), h.css({
                marginBottom: a(R).outerHeight()
            })) : (a(S).append("<div />"), a(S).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>'), 
            a("> div", S).append("<ul />"), a.each(I, function(e, t) {
                if ("" != a("> div", _).eq(e).attr("data-thumb")) {
                    var i = a("> div", _).eq(e).attr("data-thumb"), r = new Image();
                    r.src = i, a("ul", S).append('<li class="pix_thumb pix_thumb_' + e + '" />'), a("li.pix_thumb_" + e, S).append(a(r).attr("class", "camera_thumb"));
                }
            }));
        } else !a(S).length && a(R).length && h.css({
            marginBottom: a(R).outerHeight()
        });
        var ra = !0;
        a(L).length && (a(L).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>'), 
        1 == Q ? (a(".camera_play", X).hide(), a(".camera_stop", X).show()) : (a(".camera_stop", X).hide(), 
        a(".camera_play", X).show())), l(), a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom", p).each(function() {
            a(this).css("visibility", "hidden");
        }), e.onStartLoading.call(this), d(), a(x).length && a(x).click(function() {
            if (!_.hasClass("camerasliding")) {
                var t = parseFloat(a(".cameraSlide.cameracurrent", y).index());
                clearInterval(j), n(), a("#" + b + ", .camera_canvas_wrap", h).animate({
                    opacity: 0
                }, 0), l(), d(0 != t ? t : P), e.onStartLoading.call(this);
            }
        }), a(T).length && a(T).click(function() {
            if (!_.hasClass("camerasliding")) {
                var t = parseFloat(a(".cameraSlide.cameracurrent", y).index());
                clearInterval(j), n(), a("#" + b + ", .camera_canvas_wrap", X).animate({
                    opacity: 0
                }, 0), l(), d(t == P - 1 ? 1 : t + 2), e.onStartLoading.call(this);
            }
        }), i() && (p.bind("swipeleft", function(t) {
            if (!_.hasClass("camerasliding")) {
                var i = parseFloat(a(".cameraSlide.cameracurrent", y).index());
                clearInterval(j), n(), a("#" + b + ", .camera_canvas_wrap", X).animate({
                    opacity: 0
                }, 0), l(), d(i == P - 1 ? 1 : i + 2), e.onStartLoading.call(this);
            }
        }), p.bind("swiperight", function(t) {
            if (!_.hasClass("camerasliding")) {
                var i = parseFloat(a(".cameraSlide.cameracurrent", y).index());
                clearInterval(j), n(), a("#" + b + ", .camera_canvas_wrap", X).animate({
                    opacity: 0
                }, 0), l(), d(0 != i ? i : P), e.onStartLoading.call(this);
            }
        })), a(R).length && a(".camera_pag li", h).click(function() {
            if (!_.hasClass("camerasliding")) {
                var t = parseFloat(a(this).index());
                t != parseFloat(a(".cameraSlide.cameracurrent", y).index()) && (clearInterval(j), 
                n(), a("#" + b + ", .camera_canvas_wrap", X).animate({
                    opacity: 0
                }, 0), l(), d(t + 1), e.onStartLoading.call(this));
            }
        }), a(S).length && (a(".pix_thumb img", S).click(function() {
            if (!_.hasClass("camerasliding")) {
                var t = parseFloat(a(this).parents("li").index());
                t != parseFloat(a(".cameracurrent", y).index()) && (clearInterval(j), n(), a("#" + b + ", .camera_canvas_wrap", X).animate({
                    opacity: 0
                }, 0), a(".pix_thumb", S).removeClass("cameracurrent"), a(this).parents("li").addClass("cameracurrent"), 
                l(), d(t + 1), c(), e.onStartLoading.call(this));
            }
        }), a(".camera_thumbs_cont .camera_prevThumbs", X).hover(function() {
            a(this).stop(!0, !1).animate({
                opacity: 1
            }, 250);
        }, function() {
            a(this).stop(!0, !1).animate({
                opacity: .7
            }, 250);
        }), a(".camera_prevThumbs", X).click(function() {
            var e = 0, t = (a(S).outerWidth(), a("ul", S).offset().left), i = a("> div", S).offset().left, o = i - t;
            a(".camera_visThumb", S).each(function() {
                var t = a(this).outerWidth();
                e += t;
            }), o - e > 0 ? a("ul", S).animate({
                "margin-left": "-" + (o - e) + "px"
            }, 500, r) : a("ul", S).animate({
                "margin-left": 0
            }, 500, r);
        }), a(".camera_thumbs_cont .camera_nextThumbs", X).hover(function() {
            a(this).stop(!0, !1).animate({
                opacity: 1
            }, 250);
        }, function() {
            a(this).stop(!0, !1).animate({
                opacity: .7
            }, 250);
        }), a(".camera_nextThumbs", X).click(function() {
            var e = 0, t = a(S).outerWidth(), i = a("ul", S).outerWidth(), o = a("ul", S).offset().left, n = a("> div", S).offset().left, s = n - o;
            a(".camera_visThumb", S).each(function() {
                var t = a(this).outerWidth();
                e += t;
            }), s + e + e < i ? a("ul", S).animate({
                "margin-left": "-" + (s + e) + "px"
            }, 500, r) : a("ul", S).animate({
                "margin-left": "-" + (i - t) + "px"
            }, 500, r);
        }));
    };
}(jQuery), function(a) {
    a.fn.cameraStop = function() {
        var e = a(this), t = a(".camera_src", e);
        e.index();
        if (t.addClass("stopped"), a(".camera_showcommands").length) {
            a(".camera_thumbs_wrap", e);
        } else ;
    };
}(jQuery), function(a) {
    a.fn.cameraPause = function() {
        var e = a(this);
        a(".camera_src", e).addClass("paused");
    };
}(jQuery), function(a) {
    a.fn.cameraResume = function() {
        var e = a(this), t = a(".camera_src", e);
        "undefined" != typeof autoAdv && !0 === autoAdv || t.removeClass("paused");
    };
}(jQuery), $(document).ready(function() {
    $("camera_gallery").camera();
}), $(document).ready(function() {
    $("#main-nav").slicknav();
}), function(a, e, t) {
    function i(e, t) {
        this.element = e, this.settings = a.extend({}, r, t), this.settings.duplicate || t.hasOwnProperty("removeIds") || (this.settings.removeIds = !1), 
        this._defaults = r, this._name = o, this.init();
    }
    var r = {
        label: "MENU",
        duplicate: !0,
        duration: 200,
        easingOpen: "swing",
        easingClose: "swing",
        closedSymbol: "&#9658;",
        openedSymbol: "&#9660;",
        prependTo: "body",
        appendTo: "",
        parentTag: "a",
        closeOnClick: !1,
        allowParentLinks: !1,
        nestedParentLinks: !0,
        showChildren: !1,
        removeIds: !0,
        removeClasses: !1,
        removeStyles: !1,
        brand: "",
        animations: "jquery",
        init: function() {},
        beforeOpen: function() {},
        beforeClose: function() {},
        afterOpen: function() {},
        afterClose: function() {}
    }, o = "slicknav", n = "slicknav", s = {
        DOWN: 40,
        ENTER: 13,
        ESCAPE: 27,
        LEFT: 37,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };
    i.prototype.init = function() {
        var t, i, r = this, o = a(this.element), c = this.settings;
        if (c.duplicate ? r.mobileNav = o.clone() : r.mobileNav = o, c.removeIds && (r.mobileNav.removeAttr("id"), 
        r.mobileNav.find("*").each(function(e, t) {
            a(t).removeAttr("id");
        })), c.removeClasses && (r.mobileNav.removeAttr("class"), r.mobileNav.find("*").each(function(e, t) {
            a(t).removeAttr("class");
        })), c.removeStyles && (r.mobileNav.removeAttr("style"), r.mobileNav.find("*").each(function(e, t) {
            a(t).removeAttr("style");
        })), t = n + "_icon", "" === c.label && (t += " " + n + "_no-text"), "a" == c.parentTag && (c.parentTag = 'a href="#"'), 
        r.mobileNav.attr("class", n + "_nav"), i = a('<div class="' + n + '_menu"></div>'), 
        "" !== c.brand) {
            var l = a('<div class="' + n + '_brand">' + c.brand + "</div>");
            a(i).append(l);
        }
        r.btn = a([ "<" + c.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + n + "_btn " + n + '_collapsed">', '<span class="' + n + '_menutxt">' + c.label + "</span>", '<span class="' + t + '">', '<span class="' + n + '_icon-bar"></span>', '<span class="' + n + '_icon-bar"></span>', '<span class="' + n + '_icon-bar"></span>', "</span>", "</" + c.parentTag + ">" ].join("")), 
        a(i).append(r.btn), "" !== c.appendTo ? a(c.appendTo).append(i) : a(c.prependTo).prepend(i), 
        i.append(r.mobileNav);
        var d = r.mobileNav.find("li");
        a(d).each(function() {
            var e = a(this), t = {};
            if (t.children = e.children("ul").attr("role", "menu"), e.data("menu", t), t.children.length > 0) {
                var i = e.contents(), o = !1, s = [];
                a(i).each(function() {
                    return !a(this).is("ul") && (s.push(this), void (a(this).is("a") && (o = !0)));
                });
                var l = a("<" + c.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + n + '_item"/>');
                if (c.allowParentLinks && !c.nestedParentLinks && o) a(s).wrapAll('<span class="' + n + "_parent-link " + n + '_row"/>').parent(); else {
                    a(s).wrapAll(l).parent().addClass(n + "_row");
                }
                c.showChildren ? e.addClass(n + "_open") : e.addClass(n + "_collapsed"), e.addClass(n + "_parent");
                var d = a('<span class="' + n + '_arrow">' + (c.showChildren ? c.openedSymbol : c.closedSymbol) + "</span>");
                c.allowParentLinks && !c.nestedParentLinks && o && (d = d.wrap(l).parent()), a(s).last().after(d);
            } else 0 === e.children().length && e.addClass(n + "_txtnode");
            e.children("a").attr("role", "menuitem").click(function(e) {
                c.closeOnClick && !a(e.target).parent().closest("li").hasClass(n + "_parent") && a(r.btn).click();
            }), c.closeOnClick && c.allowParentLinks && (e.children("a").children("a").click(function(e) {
                a(r.btn).click();
            }), e.find("." + n + "_parent-link a:not(." + n + "_item)").click(function(e) {
                a(r.btn).click();
            }));
        }), a(d).each(function() {
            var e = a(this).data("menu");
            c.showChildren || r._visibilityToggle(e.children, null, !1, null, !0);
        }), r._visibilityToggle(r.mobileNav, null, !1, "init", !0), r.mobileNav.attr("role", "menu"), 
        a(e).mousedown(function() {
            r._outlines(!1);
        }), a(e).keyup(function() {
            r._outlines(!0);
        }), a(r.btn).click(function(a) {
            a.preventDefault(), r._menuToggle();
        }), r.mobileNav.on("click", "." + n + "_item", function(e) {
            e.preventDefault(), r._itemClick(a(this));
        }), a(r.btn).keydown(function(e) {
            var t = e || event;
            switch (t.keyCode) {
              case s.ENTER:
              case s.SPACE:
              case s.DOWN:
                e.preventDefault(), t.keyCode === s.DOWN && a(r.btn).hasClass(n + "_open") || r._menuToggle(), 
                a(r.btn).next().find('[role="menuitem"]').first().focus();
            }
        }), r.mobileNav.on("keydown", "." + n + "_item", function(e) {
            switch ((e || event).keyCode) {
              case s.ENTER:
                e.preventDefault(), r._itemClick(a(e.target));
                break;

              case s.RIGHT:
                e.preventDefault(), a(e.target).parent().hasClass(n + "_collapsed") && r._itemClick(a(e.target)), 
                a(e.target).next().find('[role="menuitem"]').first().focus();
            }
        }), r.mobileNav.on("keydown", '[role="menuitem"]', function(e) {
            switch ((e || event).keyCode) {
              case s.DOWN:
                e.preventDefault();
                var t = a(e.target).parent().parent().children().children('[role="menuitem"]:visible'), i = t.index(e.target), o = i + 1;
                t.length <= o && (o = 0);
                var c = t.eq(o);
                c.focus();
                break;

              case s.UP:
                e.preventDefault();
                var t = a(e.target).parent().parent().children().children('[role="menuitem"]:visible'), i = t.index(e.target), c = t.eq(i - 1);
                c.focus();
                break;

              case s.LEFT:
                if (e.preventDefault(), a(e.target).parent().parent().parent().hasClass(n + "_open")) {
                    var l = a(e.target).parent().parent().prev();
                    l.focus(), r._itemClick(l);
                } else a(e.target).parent().parent().hasClass(n + "_nav") && (r._menuToggle(), a(r.btn).focus());
                break;

              case s.ESCAPE:
                e.preventDefault(), r._menuToggle(), a(r.btn).focus();
            }
        }), c.allowParentLinks && c.nestedParentLinks && a("." + n + "_item a").click(function(a) {
            a.stopImmediatePropagation();
        });
    }, i.prototype._menuToggle = function(a) {
        var e = this, t = e.btn, i = e.mobileNav;
        t.hasClass(n + "_collapsed") ? (t.removeClass(n + "_collapsed"), t.addClass(n + "_open")) : (t.removeClass(n + "_open"), 
        t.addClass(n + "_collapsed")), t.addClass(n + "_animating"), e._visibilityToggle(i, t.parent(), !0, t);
    }, i.prototype._itemClick = function(a) {
        var e = this, t = e.settings, i = a.data("menu");
        i || (i = {}, i.arrow = a.children("." + n + "_arrow"), i.ul = a.next("ul"), i.parent = a.parent(), 
        i.parent.hasClass(n + "_parent-link") && (i.parent = a.parent().parent(), i.ul = a.parent().next("ul")), 
        a.data("menu", i)), i.parent.hasClass(n + "_collapsed") ? (i.arrow.html(t.openedSymbol), 
        i.parent.removeClass(n + "_collapsed"), i.parent.addClass(n + "_open"), i.parent.addClass(n + "_animating"), 
        e._visibilityToggle(i.ul, i.parent, !0, a)) : (i.arrow.html(t.closedSymbol), i.parent.addClass(n + "_collapsed"), 
        i.parent.removeClass(n + "_open"), i.parent.addClass(n + "_animating"), e._visibilityToggle(i.ul, i.parent, !0, a));
    }, i.prototype._visibilityToggle = function(e, t, i, r, o) {
        function s(e, t) {
            a(e).removeClass(n + "_animating"), a(t).removeClass(n + "_animating"), o || d.afterOpen(e);
        }
        function c(t, i) {
            e.attr("aria-hidden", "true"), m.attr("tabindex", "-1"), l._setVisAttr(e, !0), e.hide(), 
            a(t).removeClass(n + "_animating"), a(i).removeClass(n + "_animating"), o ? "init" == t && d.init() : d.afterClose(t);
        }
        var l = this, d = l.settings, m = l._getActionItems(e), h = 0;
        i && (h = d.duration), e.hasClass(n + "_hidden") ? (e.removeClass(n + "_hidden"), 
        o || d.beforeOpen(r), "jquery" === d.animations ? e.stop(!0, !0).slideDown(h, d.easingOpen, function() {
            s(r, t);
        }) : "velocity" === d.animations && e.velocity("finish").velocity("slideDown", {
            duration: h,
            easing: d.easingOpen,
            complete: function() {
                s(r, t);
            }
        }), e.attr("aria-hidden", "false"), m.attr("tabindex", "0"), l._setVisAttr(e, !1)) : (e.addClass(n + "_hidden"), 
        o || d.beforeClose(r), "jquery" === d.animations ? e.stop(!0, !0).slideUp(h, this.settings.easingClose, function() {
            c(r, t);
        }) : "velocity" === d.animations && e.velocity("finish").velocity("slideUp", {
            duration: h,
            easing: d.easingClose,
            complete: function() {
                c(r, t);
            }
        }));
    }, i.prototype._setVisAttr = function(e, t) {
        var i = this, r = e.children("li").children("ul").not("." + n + "_hidden");
        t ? r.each(function() {
            var e = a(this);
            e.attr("aria-hidden", "true"), i._getActionItems(e).attr("tabindex", "-1"), i._setVisAttr(e, t);
        }) : r.each(function() {
            var e = a(this);
            e.attr("aria-hidden", "false"), i._getActionItems(e).attr("tabindex", "0"), i._setVisAttr(e, t);
        });
    }, i.prototype._getActionItems = function(a) {
        var e = a.data("menu");
        if (!e) {
            e = {};
            var t = a.children("li"), i = t.find("a");
            e.links = i.add(t.find("." + n + "_item")), a.data("menu", e);
        }
        return e.links;
    }, i.prototype._outlines = function(e) {
        e ? a("." + n + "_item, ." + n + "_btn").css("outline", "") : a("." + n + "_item, ." + n + "_btn").css("outline", "none");
    }, i.prototype.toggle = function() {
        this._menuToggle();
    }, i.prototype.open = function() {
        var a = this;
        a.btn.hasClass(n + "_collapsed") && a._menuToggle();
    }, i.prototype.close = function() {
        var a = this;
        a.btn.hasClass(n + "_open") && a._menuToggle();
    }, a.fn[o] = function(e) {
        var t = arguments;
        if (void 0 === e || "object" == typeof e) return this.each(function() {
            a.data(this, "plugin_" + o) || a.data(this, "plugin_" + o, new i(this, e));
        });
        if ("string" == typeof e && "_" !== e[0] && "init" !== e) {
            var r;
            return this.each(function() {
                var n = a.data(this, "plugin_" + o);
                n instanceof i && "function" == typeof n[e] && (r = n[e].apply(n, Array.prototype.slice.call(t, 1)));
            }), void 0 !== r ? r : this;
        }
    };
}(jQuery, document, window);