$(function() {
    function e() {
        var e = new google.visualization.DataTable;
        e.addColumn("number", "X"), e.addColumn("number", "Яндекс"), e.addColumn("number", "Google"), e.addRows([
            [0, 50, 50],
            [1, 9, 5],
            [2, 8, 3],
            [3, 4, 1],
            [4, 2, 1]
        ]);
        var t = {
                backgroundColor: "#f5f5f5",
                colors: ["#222", "#848484"],
                hAxis: {
                    titleTextStyle: {
                        italic: !1
                    },
                    format: "# месяц",
                    minorGridlines: {
                        color: "#cecece",
                        count: 1
                    }
                },
                legend: {
                    position: "bottom",
                    textStyle: {
                        fontSize: 16
                    }
                },
                lineWidth: 2,
                pointSize: 6,
                titleTextStyle: {
                    fontSize: 12
                },
                vAxis: {
                    viewWindow: {
                        min: 1,
                        max: 50
                    },
                    baseline: 10,
                    baselineColor: "#f90",
                    direction: -1,
                    format: "# место",
                    gridlines: {
                        color: "#cecece",
                        count: 6
                    },
                    minorGridlines: {
                        color: "#cecece",
                        count: 1
                    },
                    titleTextStyle: {
                        italic: !1
                    }
                }
            },
            o = new google.visualization.LineChart(document.getElementById("chart_div_0"));
        o.draw(e, t)
    }

    function t() {
        var e = new google.visualization.DataTable;
        e.addColumn("number", "X"), e.addColumn("number", "Яндекс"), e.addColumn("number", "Google"), e.addRows([
            [0, 50, 50],
            [1, 22, 39],
            [2, 10, 35],
            [3, 9, 32],
            [4, 8, 30],
            [5, 4, 14],
            [6, 2, 14],
            [7, 1, 12],
            [8, 1, 12]
        ]);
        var t = {
                backgroundColor: "#f5f5f5",
                colors: ["#222", "#848484"],
                hAxis: {
                    titleTextStyle: {
                        italic: !1
                    },
                    format: "# месяц",
                    minorGridlines: {
                        color: "#cecece",
                        count: 1
                    }
                },
                legend: {
                    position: "bottom",
                    textStyle: {
                        fontSize: 16
                    }
                },
                lineWidth: 2,
                pointSize: 6,
                titleTextStyle: {
                    fontSize: 12
                },
                vAxis: {
                    viewWindow: {
                        min: 1,
                        max: 50
                    },
                    baseline: 10,
                    baselineColor: "#f90",
                    direction: -1,
                    format: "# место",
                    gridlines: {
                        color: "#cecece",
                        count: 6
                    },
                    minorGridlines: {
                        color: "#cecece",
                        count: 1
                    },
                    titleTextStyle: {
                        italic: !1
                    }
                }
            },
            o = new google.visualization.LineChart(document.getElementById("chart_div_1"));
        o.draw(e, t)
    }

    function o() {
        var e = new google.visualization.DataTable;
        e.addColumn("number", "X"), e.addColumn("number", "Яндекс"), e.addColumn("number", "Google"), e.addRows([
            [0, 50, 50],
            [1, 50, 50],
            [2, 1, 22],
            [3, 2, 38],
            [4, 2, 36],
            [5, 6, 38],
            [6, 1, 33],
            [7, 1, 32],
            [8, 1, 26]
        ]);
        var t = {
                backgroundColor: "#f5f5f5",
                colors: ["#222", "#848484"],
                hAxis: {
                    titleTextStyle: {
                        italic: !1
                    },
                    format: "# месяц",
                    minorGridlines: {
                        color: "#cecece",
                        count: 1
                    }
                },
                legend: {
                    position: "bottom",
                    textStyle: {
                        fontSize: 16
                    }
                },
                lineWidth: 2,
                pointSize: 6,
                titleTextStyle: {
                    fontSize: 12
                },
                vAxis: {
                    viewWindow: {
                        min: 1,
                        max: 50
                    },
                    baseline: 10,
                    baselineColor: "#f90",
                    direction: -1,
                    format: "# место",
                    gridlines: {
                        color: "#cecece",
                        count: 6
                    },
                    minorGridlines: {
                        color: "#cecece",
                        count: 1
                    },
                    titleTextStyle: {
                        italic: !1
                    }
                }
            },
            o = new google.visualization.LineChart(document.getElementById("chart_div_2"));
        o.draw(e, t)
    }

    function n() {
        var e = google.visualization.arrayToDataTable([
                ["Когда", "Посетителей в мес."],
                ["Было", 430],
                ["Добавилось", 1648]
            ]),
            t = {
                backgroundColor: "#f5f5f5",
                legend: {
                    position: "bottom",
                    textStyle: {
                        fontSize: 16
                    }
                },
                titleTextStyle: {
                    fontSize: 12
                },
                colors: ["#555", "#f90"],
                pieHole: .3
            },
            o = new google.visualization.PieChart(document.getElementById("chart_div_0_1"));
        o.draw(e, t)
    }

    function a() {
        var e = google.visualization.arrayToDataTable([
                ["Когда", "Посетителей в мес."],
                ["Было", 26],
                ["Добавилось", 421]
            ]),
            t = {
                backgroundColor: "#f5f5f5",
                legend: {
                    position: "bottom",
                    textStyle: {
                        fontSize: 16
                    }
                },
                titleTextStyle: {
                    fontSize: 12
                },
                colors: ["#555", "#f90"],
                pieHole: .3
            },
            o = new google.visualization.PieChart(document.getElementById("chart_div_1_1"));
        o.draw(e, t)
    }

    function i() {
        var e = google.visualization.arrayToDataTable([
                ["Когда", "Посетителей в мес."],
                ["Было", 157],
                ["Добавилось", 290]
            ]),
            t = {
                backgroundColor: "#f5f5f5",
                legend: {
                    position: "bottom",
                    textStyle: {
                        fontSize: 16
                    }
                },
                titleTextStyle: {
                    fontSize: 12
                },
                colors: ["#555", "#f90"],
                pieHole: .3
            },
            o = new google.visualization.PieChart(document.getElementById("chart_div_2_1"));
        o.draw(e, t)
    }! function(e, t, o) {
        (t[o] = t[o] || []).push(function() {
            try {
                t.yaCounter34446535 = new Ya.Metrika({
                    id: 34446535,
                    clickmap: !0,
                    trackLinks: !0,
                    accurateTrackBounce: !0,
                    webvisor: !0,
                    trackHash: !0,
                    ut: "noindex"
                })
            } catch (e) {}
        });
        var n = e.getElementsByTagName("script")[0],
            a = e.createElement("script"),
            i = function() {
                n.parentNode.insertBefore(a, n)
            };
        a.type = "text/javascript", a.async = !0, a.src = "https://mc.yandex.ru/metrika/watch.js", "[object Opera]" == t.opera ? e.addEventListener("DOMContentLoaded", i, !1) : i()
    }(document, window, "yandex_metrika_callbacks"), Modernizr.svg || $("img[src*='svg']").attr("src", function() {
        return $(this).attr("src").replace(".svg", ".png")
    }), $("#seo_consultation").submit(function() {
        var e = $(this);
        return $.ajax({
            type: "POST",
            url: "mail.php",
            data: e.serialize()
        }).done(function() {
            alert("Спасибо! Скоро я с вами свяжусь."), setTimeout(function() {
                e.trigger("reset")
            }, 1e3)
        }), !1
    });
    try {
        $.browserSelector(), $("html").hasClass("chrome") && $.smoothScroll()
    } catch (l) {}
    $("img, a").on("dragstart", function(e) {
        e.preventDefault()
    }), jQuery("ul.sf-menu").superfish({
        delay: 200,
        speed: "fast",
        cssArrows: !1
    }), $("#mobile_mnu").mmenu({
        counters: !0,
        dragOpen: {
            open: !0
        },
        extensions: ["theme-dark", "effect-listitems-slide", "effect-menu-slide", "effect-panels-zoom"],
        navbar: {
            title: "Меню"
        },
        navbars: [{
            position: "bottom",
            content: ["<a class='fa fa-envelope' href='#/'></a>", "<a class='fa fa-twitter' href='#/'></a>", "<a class='fa fa-facebook' href='#/'></a>"]
        }],
        offCanvas: {}
    }), $(".toggle-mnu").click(function() {
        $(this).addClass("on")
    }), $(".toggle_hidden_strategy").click(function() {
        return $(this).toggleClass("on"), $(".hidden_strategy").slideToggle(), !1
    }), $(".toggle_inputs").click(function() {
        return $(this).toggleClass("on"), $(".hidden_inputs").slideToggle(), !1
    });
    var r = $("#mobile_mnu").data("mmenu");
    r.bind("closed", function() {
        $(".toggle-mnu").removeClass("on")
    }), google.charts.load("current", {
        packages: ["corechart", "line", "bar"]
    }), google.charts.setOnLoadCallback(e), google.charts.setOnLoadCallback(t), google.charts.setOnLoadCallback(o), google.charts.setOnLoadCallback(n), google.charts.setOnLoadCallback(a), google.charts.setOnLoadCallback(i), $(".mnu").on("click", "a", function(e) {
        e.preventDefault();
        var t = $(this).attr("href"),
            o = $(t).offset().top;
        $("body,html").animate({
            scrollTop: o
        }, 800)
    })(function(e, t, o, n, a, i, l) {
        e.GoogleAnalyticsObject = a, e[a] = e[a] || function() {
            (e[a].q = e[a].q || []).push(arguments)
        }, e[a].l = 1 * new Date, i = t.createElement(o), l = t.getElementsByTagName(o)[0], i.async = 1, i.src = n, l.parentNode.insertBefore(i, l)
    })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-36008243-6", "auto"), ga("send", "pageview")
});