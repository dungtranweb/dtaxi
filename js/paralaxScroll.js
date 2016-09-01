$(function () {
    var r = $("#process");
    // r.length && setTimeout(function () {
        var e = new ScrollMagic.Controller, t = r.height() - 620, n = (new ScrollMagic.Scene({
            triggerElement: "#process",
            duration: t,
            triggerHook: 0,
            reverse: !0
        }).setPin("#notebook").addTo(e), new ScrollMagic.Scene({
            triggerElement: "#process",
            duration: t,
            triggerHook: 0,
            reverse: !0
        }).setPin("#phone").addTo(e), new ScrollMagic.Scene({
            triggerElement: "#process",
            duration: t,
            triggerHook: 0,
            reverse: !0
        }).on("progress", function (e) {
            Math.abs(parseFloat($("#paralax").css("margin-top")));
            $("#phone, #notebook").css({
                "-webkit-transform": "translateY(-" + 100 * e.progress + "px)",
                "-moz-transform": "translateY(-" + 100 * e.progress + "px)",
                "-ms-transform": "translateY(-" + 100 * e.progress + "px)",
                "-o-transform": "translateY(-" + 100 * e.progress + "px)",
                transform: "translateY(-" + 100 * e.progress + "px)"
            })
        }).addTo(e), r.find(".news-list .block").eq(0).height() + 100), i = (new ScrollMagic.Scene({
            triggerElement: "#process",
            offset: n,
            triggerHook: 0,
            reverse: !0
        }).on("enter", function () {
            $("#paralax .first").fadeOut("medium", function () {
                $("#paralax .second").fadeIn("medium")
            })
        }).on("leave", function () {
            $("#paralax .second").fadeOut("medium", function () {
                $("#paralax .first").fadeIn("medium")
            })
        }).addTo(e), r.find(".news-list .block").eq(1).height() + 100 + n); f = (new ScrollMagic.Scene({
            triggerElement: "#process",
            offset: i,
            triggerHook: 0,
            reverse: !0
        }).on("enter", function () {
            $("#paralax .second").fadeOut("medium", function () {
                $("#paralax .third").fadeIn("medium")
            })
        }).on("leave", function () {
            $("#paralax .third").fadeOut("medium", function () {
                $("#paralax .second").fadeIn("medium")
            })
        }).addTo(e), r.find(".news-list .block").eq(1).height() + 100 + n + n);
        new ScrollMagic.Scene({
            triggerElement: "#process",
            offset: f,
            triggerHook: 0,
            reverse: !0
        }).on("enter", function () {
            $("#paralax .third").fadeOut("medium", function () {
                $("#paralax .fourth").fadeIn("medium")
            })
        }).on("leave", function () {
            $("#paralax .fourth").fadeOut("medium", function () {
                $("#paralax .third").fadeIn("medium")
            })
        }).addTo(e)
    // }
})
