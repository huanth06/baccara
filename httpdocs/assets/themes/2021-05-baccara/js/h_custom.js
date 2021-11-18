$(document).ready(function ($) {
    "use strict";
    awe_owl();
    $('#filter-by-size').on('change', function() {
        $(location).attr('href',this.value);
    });
    $(".section-cateogory .wrap-banner .item").each(function (index) {
        switch (index) {
            case (0):
            case (3):
            case (4):
            case (7):
                $(this).addClass("bg-blue");
                break;
            case (1):
            case (5):
                $(this).addClass("bg-black");
                break;
        }
    });
    $('.move-total-result').insertAfter($('.sort_container .click-sidebarleft'));
    $(".filter").each(function(){
        if($(this).hasClass( "filter-remove" )){
            $(this).parent().addClass('active');
            $(this).parent().prev().addClass('active');
        }
    });
    $("#filters .click-sidebarmenu").click(function () {
        $(this).toggleClass('active');
        $(this).next('.sidebar-menu').toggleClass('active');
    });
    $(".search-collapse").click(function () {
        $(".logo-search").toggleClass("active");
    });
    $(".emailpopup").fancybox();
    
    $('body').click(function () {
        $(".top-header .col-xs-12.col-sm-4").removeClass("active");
    });
    //wrap 2 item
    // var divwrap = $(".wrap-two-item .item");
    // if(divwrap.length > 0){
    // if(divwrap.length >=4){
    //    for(var i = 0; i < divwrap.length; i+=2) {
    //         divwrap.slice(i, i+2).wrapAll("<div class='wrap-item-owl'></div>");
    //     }
    // }
    //wrap 2 item
    var wrap_banner_category = $(".wrap-banner .item");
    for(var i = 0; i < wrap_banner_category.length; i+=2) {
        wrap_banner_category.slice(i, i+2).wrapAll("<div class='col-banner'></div>");
    }

    $(".navbar-responsive-collapse").before("<div class='ovelay-menu'></div>");
    $(".icon-menu-mobile").click(function () {
        $(".navbar-responsive-collapse").toggleClass('active');
        $(".wrapper-nav").toggleClass("active");
        $(".ovelay-menu").addClass("active");
    });
    $(".menu-header .dropdown-hover>.dropdown-menu").each(function () {
        var lenght = $(this).children('.head-list-wrapper').length;
        var so_du = (lenght % 4);
        if (so_du > 0){
            $(this).addClass('has-border');
        }
    });
    $(".fa-trigger").click(function () {
        $(this).parent().next().addClass('active');
    });
    $('.dropdown-menu-horizontal').before('<fa class="fa fa-chevron-right icon-lv3"></fa>')
    $(".head-list-wrapper > li .icon-lv3").click(function () {
        $(this).next().addClass('active');
        $("html, .navbar-responsive-collapse").animate({ scrollTop: 0 }, "slow");
    });
    $(".menu-header .navbar-nav:first-child>li .dropdown-menu").each(function () {
        var text = $(this).parent().find('a').first().text();
        $(this).prepend("<h3 class='head-lv2'>"+text+"</h3>")
    });
    $(".head-lv2").click(function () {
        $(this).parent().removeClass('active');
    });
    $(".ovelay-menu").click(function () {
        $(this).removeClass("active");
        $(".navbar-responsive-collapse").removeClass("active");
    });
    $(".close-menu").click(function () {
        $(".ovelay-menu").removeClass("active");
        $(".navbar-responsive-collapse").removeClass("active");
    });
    $('.wrapper-nav .dropdown-menu').before('<div class="click-menu"></div>')
    $(".text-category-click").click(function () {
        $(this).toggleClass("active");
        $(this).next().toggleClass('active');
    });
    $('.click-menu').click(function () {
        $(this).parent().parent().children().children('.click-menu').not($(this)).removeClass('active');
        $(this).parent().parent().children().children('.dropdown-menu').not($(this).next()).removeClass('active');
        $(this).toggleClass('active');
        $(this).next().toggleClass('active');
    });
    $(".icon-click-search").click(function () {
        $(".search-mobile").toggleClass("active");
    });
    $(".close-search").click(function () {
        $(".search-mobile").removeClass("active");
    });
    $(".d-inline-block .icon-close").click(function () {
        $(this).parents('.d-inline-block').removeClass('active');
    });
    $(".box-right-menu .d-inline-block>a").click(function () {
        $(this).parents('.d-inline-block').toggleClass("active");
    });
    $("#filters .content-list").before('<div class="click-content-list"></div>');
    $(".click-content-list").click(function () {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
    $('.list-lv2').before('<div class="before-list"></div>');
    $('.before-list').click(function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
    let src_img_ctxt = $("#home_ctxt_img img").attr("src");
    $("#home_ctxt_img img").parent("p").hide();
    $("#home_content_text").css("background-image", 'url(' + src_img_ctxt + ')');
    $(".click-sidebarleft").click(function () {
        $(this).toggleClass('active');
        $('#left-sidebar').toggleClass('show');
    });
    $(".search-mobile").click(function (e) {
        e.stopPropagation();
        $(".top-header .col-xs-12.col-sm-4").toggleClass("active");
    });
    $(".header-search").click(function (e) {
        e.stopPropagation();
    });
    $(window).on("load resize scroll",function(){
        let w_width = $(window).width();
        if (w_width < 768){
            $("#left-sidebar").removeClass("active");
        }else{
            $("#left-sidebar").addClass("active");
        }
    });
    $(".section-tabs-product .card-header").click(function () {
        $(this).toggleClass("current-link");
    });
    let url_path = window.location.pathname;
    $("#left-sidebar a").each(function () {
        let text = $(this).attr("href");
        if (url_path.indexOf(text) != -1 && text.trim().length > 0){
            $(this).addClass("active");
        }
    });

    if ($('.slider-nav').length){
        var $slickslider = $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-nav',
            arrrows: false
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            centerMode: true,
            focusOnSelect: true,
            arrows: true
        });
    }

    var width = $(window).outerWidth();

    //Rating
    var $star_rating = $('.star-rating .fa');
    var SetRatingStar = function() {
        return $star_rating.each(function() {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).removeClass('fa-star-o').addClass('fa-star');
            } else {
                return $(this).removeClass('fa-star').addClass('fa-star-o');
            }
        });
    };
    $star_rating.on('click', function() {
        $star_rating.siblings('input.rating-value').val($(this).data('rating'));
        return SetRatingStar();
    });

    SetRatingStar();
});
function awe_owl() {
    setTimeout(function(){
        $('.owl-carousel').each( function(){
            var xxs_item = $(this).attr('data-xss-items');
            var xs_item = $(this).attr('data-xs-items');
            var md_item = $(this).attr('data-md-items');
            var lg_item = $(this).attr('data-lg-items');
            var sm_item = $(this).attr('data-sm-items');
            var margin	= $(this).attr('data-margin');
            var dot		= $(this).attr('data-dot');
            var loop	= $(this).attr('data-loop');
            var nav		= $(this).attr('data-nav');
            var auto_play = $(this).attr('data-auto-play');
            var auto_height = $(this).attr('data-auto-height');
            var slideby = $(this).attr('data-slideby');
            if (typeof margin !== typeof undefined && margin !== false) {
            } else{
                margin = 0;
            }
            if (typeof xxs_item !== typeof undefined && xxs_item !== false) {
            } else{
                xxs_item = 1;
            }
            if (typeof xs_item !== typeof undefined && xs_item !== false) {
            } else{
                xs_item = 1;
            }
            if (typeof sm_item !== typeof undefined && sm_item !== false) {

            } else{
                sm_item = 3;
            }
            if (typeof md_item !== typeof undefined && md_item !== false) {
            } else{
                md_item = 3;
            }
            if (typeof dot !== typeof undefined && dot !== true) {
                dot = dot;
            } else{
                dot = false;
            }
            if (typeof loop !== typeof undefined && loop !== true){
                loop = loop;
            } else {
                loop = false;
            }
            if (typeof nav !== typeof undefined && nav !== true) {
                nav = nav;
            } else{
                nav = false;
            }
            if (typeof auto_play !== typeof undefined && auto_play !== true){
                auto_play = auto_play;
            } else {
                auto_play = false;
            }
            if (typeof auto_height !== typeof undefined && auto_height !== true){
                auto_height = auto_height;
            } else {
                auto_height = false;
            }
            $(this).owlCarousel({
                loop: loop,
                margin:Number(margin),
                responsiveClass:true,
                dots:dot,
                nav:nav,
                slideBy: slideby,
                navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
                responsive:{
                    0:{
                        items:Number(xxs_item)
                    },
                    543:{
                        items:Number(xs_item)
                    },
                    768:{
                        items:Number(sm_item)
                    },
                    992:{
                        items:Number(md_item)
                    },
                    1200:{
                        items:Number(lg_item)
                    }
                },
                autoplay: false,
                autoPlayHoverPause: true,
                autoHeight: true,
                rewind: true
            })
        })
    },300);
} window.awe_owl=awe_owl;