function awe_owl() {
    setTimeout(function () {
        $(".owl-carousel").each(function () {
            var e = $(this).attr("data-xss-items"),
                t = $(this).attr("data-xs-items"),
                a = $(this).attr("data-md-items"),
                i = $(this).attr("data-lg-items"),
                s = $(this).attr("data-sm-items"),
                o = $(this).attr("data-margin"),
                l = $(this).attr("data-dot"),
                n = $(this).attr("data-loop"),
                c = $(this).attr("data-nav"),
                r = $(this).attr("data-auto-play"),
                d = $(this).attr("data-auto-height"),
                h = $(this).attr("data-slideby");
            (void 0 !== o && !1 !== o) || (o = 0),
                (void 0 !== e && !1 !== e) || (e = 1),
                (void 0 !== t && !1 !== t) || (t = 1),
                (void 0 !== s && !1 !== s) || (s = 3),
                (void 0 !== a && !1 !== a) || (a = 3),
                (l = void 0 !== l && !0 !== l && l),
                (n = void 0 !== n && !0 !== n && n),
                (c = void 0 !== c && !0 !== c && c),
                (r = void 0 !== r && !0 !== r && r),
                (d = void 0 !== d && !0 !== d && d),
                $(this).owlCarousel({
                    loop: n,
                    margin: Number(o),
                    responsiveClass: !0,
                    dots: l,
                    nav: c,
                    slideBy: h,
                    navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
                    responsive: { 0: { items: Number(e) }, 543: { items: Number(t) }, 768: { items: Number(s) }, 992: { items: Number(a) }, 1200: { items: Number(i) } },
                    autoplay: r,
                    autoPlayHoverPause: !0,
                    autoHeight: !0,
                    rewind: !0,
                });
        });
    }, 300);
}
$(document).ready(function (e) {
    "use strict";
    awe_owl(),
        e("#filter-by-size").on("change", function () {
            e(location).attr("href", this.value);
        }),
        e(".section-cateogory .wrap-banner .item").each(function (t) {
            switch (t) {
                case 0:
                case 3:
                case 4:
                case 7:
                    e(this).addClass("bg-blue");
                    break;
                case 1:
                case 5:
                    e(this).addClass("bg-black");
            }
        }),
        e(".move-total-result").insertAfter(e(".sort_container .click-sidebarleft")),
        e(".filter").each(function () {
            e(this).hasClass("filter-remove") && (e(this).parent().addClass("active"), e(this).parent().prev().addClass("active"));
        }),
        e("#filters .click-sidebarmenu").click(function () {
            e(this).toggleClass("active"), e(this).next(".sidebar-menu").toggleClass("active");
        }),
        e(".search-collapse").click(function () {
            e(".logo-search").toggleClass("active");
        }),
        e(".emailpopup").fancybox(),
        e("body").click(function () {
            e(".top-header .col-xs-12.col-sm-4").removeClass("active");
        });
    for (var t = e(".wrap-banner .item"), a = 0; a < t.length; a += 2) t.slice(a, a + 2).wrapAll("<div class='col-banner'></div>");
    e(".navbar-responsive-collapse").before("<div class='ovelay-menu'></div>"),
        e(".icon-menu-mobile").click(function () {
            e(".navbar-responsive-collapse").toggleClass("active"), e(".wrapper-nav").toggleClass("active"), e(".ovelay-menu").addClass("active");
        }),
        e(".menu-header .dropdown-hover>.dropdown-menu").each(function () {
            e(this).children(".head-list-wrapper").length % 4 > 0 && e(this).addClass("has-border");
        }),
        e(".fa-trigger").click(function () {
            e(this).parent().next().addClass("active");
        }),
        e(".dropdown-menu-horizontal").before('<fa class="fa fa-chevron-right icon-lv3"></fa>'),
        e(".head-list-wrapper > li .icon-lv3").click(function () {
            e(this).next().addClass("active"), e("html, .navbar-responsive-collapse").animate({ scrollTop: 0 }, "slow");
        }),
        e(".menu-header .navbar-nav:first-child>li .dropdown-menu").each(function () {
            var t = e(this).parent().find("a").first().text();
            e(this).prepend("<h3 class='head-lv2'>" + t + "</h3>");
        }),
        e(".head-lv2").click(function () {
            e(this).parent().removeClass("active");
        }),
        e(".ovelay-menu").click(function () {
            e(this).removeClass("active"), e(".navbar-responsive-collapse").removeClass("active");
        }),
        e(".close-menu").click(function () {
            e(".ovelay-menu").removeClass("active"), e(".navbar-responsive-collapse").removeClass("active");
        }),
        e(".wrapper-nav .dropdown-menu").before('<div class="click-menu"></div>'),
        e(".text-category-click").click(function () {
            e(this).toggleClass("active"), e(this).next().toggleClass("active");
        }),
        e(".click-menu").click(function () {
            e(this).parent().parent().children().children(".click-menu").not(e(this)).removeClass("active"),
                e(this).parent().parent().children().children(".dropdown-menu").not(e(this).next()).removeClass("active"),
                e(this).toggleClass("active"),
                e(this).next().toggleClass("active");
        }),
        e(".icon-click-search").click(function () {
            e(".search-mobile").toggleClass("active");
        }),
        e(".close-search").click(function () {
            e(".search-mobile").removeClass("active");
        }),
        e(".d-inline-block .icon-close").click(function () {
            e(this).parents(".d-inline-block").removeClass("active");
        }),
        e(".box-right-menu .d-inline-block>a").click(function () {
            e(this).parents(".d-inline-block").toggleClass("active");
        }),
        e("#filters .content-list").before('<div class="click-content-list"></div>'),
        e(".click-content-list").click(function () {
            e(this).toggleClass("active"), e(this).next().slideToggle();
        }),
        e(".list-lv2").before('<div class="before-list"></div>'),
        e(".before-list").click(function () {
            e(this).next().slideToggle(), e(this).toggleClass("active");
        });
    let i = e("#home_ctxt_img img").attr("src");
    e("#home_ctxt_img img").parent("p").hide(),
        e("#home_content_text").css("background-image", "url(" + i + ")"),
        e(".click-sidebarleft").click(function () {
            e(this).toggleClass("active"), e("#left-sidebar").toggleClass("show");
        }),
        e(".search-mobile").click(function (t) {
            t.stopPropagation(), e(".top-header .col-xs-12.col-sm-4").toggleClass("active");
        }),
        e(".header-search").click(function (e) {
            e.stopPropagation();
        }),
        e(window).on("load resize scroll", function () {
            e(window).width() < 768 ? e("#left-sidebar").removeClass("active") : e("#left-sidebar").addClass("active");
        }),
        e(".section-tabs-product .card-header").click(function () {
            e(this).toggleClass("current-link");
        });
    let s = window.location.pathname;
    if (
        (e("#left-sidebar a").each(function () {
            let t = e(this).attr("href");
            -1 != s.indexOf(t) && t.trim().length > 0 && e(this).addClass("active");
        }),
        e(".slider-nav").length)
    ) {
        e(".slider-for").slick({ slidesToShow: 1, slidesToScroll: 1, asNavFor: ".slider-nav", arrrows: !1 });
        e(".slider-nav").slick({ slidesToShow: 3, slidesToScroll: 1, asNavFor: ".slider-for", centerMode: !0, focusOnSelect: !0, arrows: !0 });
    }
    e(window).outerWidth();
    var o = e(".star-rating .fa"),
        l = function () {
            return o.each(function () {
                return parseInt(o.siblings("input.rating-value").val()) >= parseInt(e(this).data("rating")) ? e(this).removeClass("fa-star-o").addClass("fa-star") : e(this).removeClass("fa-star").addClass("fa-star-o");
            });
        };
    o.on("click", function () {
        return o.siblings("input.rating-value").val(e(this).data("rating")), l();
    }),
        l();
}),
    (window.awe_owl = awe_owl);
var strIframeYoutube = $(".load_iframe").attr("data-src"),
    regex = /<iframe.*?src="(.*?)"/,
    srcYoutube = regex.exec(strIframeYoutube)[1];
function fontLoader() {
    var e = document.getElementsByTagName("head")[0],
        t = document.createElement("link");
    (t.type = "text/css"), (t.rel = "stylesheet"), (t.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
    var a = document.createElement("link");
    (a.rel = "preconnect"), (a.href = "https://fonts.gstatic.com"), e.appendChild(t), e.appendChild(a);
}
setTimeout(function () {
    $(".load_iframe p").after(`<iframe width="560" height="315" src="${srcYoutube}"/>`);
}, 2e3),
    $(".lazy").attr("src", "https://www.wildoutdoorsaustralia.com.au/assets/themes/2021-08-wildoutdoor/images/loading_new.gif"),
    $(".lazy").lazy(),
    setTimeout(function () {
        fontLoader();
    }, 500);
