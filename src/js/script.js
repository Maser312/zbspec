window.jQuery = window.$ = require('jquery');
require('bootstrap');
require('slick-carousel');
// require('./bootstrap');
// const swal = require('sweetalert2')
$(document).ready(()=>{
$('.head .hamburger').click(function(){
    $(this).toggleClass('active');
    $('.head .nav.bg-black').toggleClass('active');
    $('.over').fadeIn();
    $('html').css({'overflow-y': 'hidden', 'position': 'static'})
    // $("body").css({"overflow":"hidden",'position':'fixed'});
})
$('.head .menu__close, .over').click(function(){
    $('.head .hamburger').removeClass('active');
    $('.head .nav.bg-black').removeClass('active');
    $('.over').fadeOut();
    $('html').css({'overflow-y': 'auto', 'position': 'static'})
    // $("body").css({"overflow":"auto",'position':'relative'});
})
$('.search-open').click(function(){
    $('.search').addClass('opened');
    setTimeout(function(){$('.search-form.col').addClass('open')}, 300)
    $('.head .header a.nav-link').addClass('opacity');
    setTimeout(function(){$('.search input').focus()}, 1000)
})
$('.search-close').click(function(){
    setTimeout(function(){$('.search').removeClass('opened')}, 300)
    $('.search-form.col').removeClass('open');
    setTimeout(function(){$('.head .header a.nav-link').removeClass('opacity')}, 300)
})
$('.scroll__right').on('click', function(e){
    $('.draggable__swipe').animate({ scrollLeft : $('.draggable__swipe').scrollLeft() + 150});
    $('.scroll__left').addClass('active');
    var t = $('.draggable__swipe')[0].scrollLeft + $(window).width();
    // var t = $('.draggable__swipe')[0].clientWidth - 185 - $('.draggable__swipe')[0].scrollLeft;
    if(t + 20 > $('.draggable__swipe')[0].scrollWidth){
        $('.scroll__right').removeClass('active');
    }
})
$('.scroll__left').on('click', function(){
    $('.draggable__swipe').animate({ scrollLeft : $('.draggable__swipe').scrollLeft() - 150});
    $('.scroll__right').addClass('active');
    if($('.draggable__swipe')[0].scrollLeft < 20){
        $('.scroll__left').removeClass('active');
    }
})
    // getHeight();
    $('.groups .tab-content .color .item__color').on('mouseover', function(){
        var index = $(this).attr('item-index');
        ///////
        $(this).closest('.groups__carousel__item').find('.item__image[item-index='+index+']').addClass('hover');
    }).on('mouseleave', function(){
        $(this).closest('.groups__carousel__item').find('.item__image').removeClass('hover');
    })
   
    var width = $('ul.nav[role="tablist"] a.active').get();
    width.forEach(function(element) {
        // console.log(element, $(element).width())
        $(element).children('.line').width($(element).width());
    }, this);
    // console.log(width);
    // $('ul.nav[role="tablist"] a.active .line').width($('ul.nav[role="tablist"] a.active').width());
    $('ul.nav[role="tablist"] a').click(function(){
        $(this).closest('ul.nav[role="tablist"]').find('a.active .line').width(0);
        $(this).children('.line').width($(this).width());
    })
    var fade = true;
    $('.menu a').mouseenter(function(){
        $('.submenu').hide();
        if(fade){
            $('.submenu[menu-index="'+$(this).attr('menu-index')+'"]').fadeIn(100);
            fade = false;
        }else{
            $('.submenu[menu-index="'+$(this).attr('menu-index')+'"]').show();
        }
        $('.menu a .line').width(0);
        $('.menu a[menu-index="'+$(this).attr('menu-index')+'"] .line').width($('.menu a[menu-index="'+$(this).attr('menu-index')+'"]').width());
        // $('.menu a[menu-index="'+$(this).attr('menu-index')+'"] .line').width(0);
    })
     $('.submenu').mouseenter(function(){
        $('.submenu[menu-index="'+$(this).attr('menu-index')+'"]').show();
         $('.menu a .line').width(0);
        $('.menu a[menu-index="'+$(this).attr('menu-index')+'"] .line').width($('.menu a[menu-index="'+$(this).attr('menu-index')+'"]').width());
    }).mouseleave(function(){
        $('.submenu').hide();
        $('.menu a .line').width(0);
        fade = false;
    });
    $('.menu').mouseleave(function(){
        $('.submenu').hide();
        $('.menu a .line').width(0);
        fade = true;
    });
    $(".slider").slick({
        arrows: false,
        dots: true,
        dotsClass: 'slider__dots container d-flex justify-content-end',
        // appendDots: $('.slider'),
  infinite: true,
});
    $(".groups .groups__carousel").slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dotsClass: 'carousel__dots d-flex justify-content-start',
        infinite: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },{
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },{
            breakpoint: 497,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
//     function getSlidesToShow() {
//     var width = $(window).width();
//     if (width >= 1200) {
//         return 4;
//     } else if (width >= 992) {
//         return 3;
//     } else if (width >= 497) {
//         return 2;
//     } else {
//         return 1;
//     }
// }

// SLKCONF.slidesToShow = getSlidesToShow();
// SLKCONF.slidesToScroll = getSlidesToShow();
// $(".groups .groups__carousel").slick(SLKCONF);

// // setButtonsActions();
// var updateFuckinSlider = function(){
//     $(".groups .groups__carousel").slick("unslick");
//     SLKCONF.slidesToShow = getSlidesToShow();
//     SLKCONF.slidesToScroll = getSlidesToShow();
//     $(".groups .groups__carousel").slick(SLKCONF);
// }
// $(window).resize(function () {
//            var width = $(window).width();
//             if (width >= 1200) {
//                 updateFuckinSlider();
//             } else if (width >= 992) {
//                 updateFuckinSlider();
//             } else if (width >= 497) {
//                 updateFuckinSlider();
//             } else {
//                 updateFuckinSlider();
//             }
// });
// var sliderinformation = $(".information .groups__carousel").slick({
//         arrows: false,
//         dots: true,
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         dotsClass: 'carousel__dots d-flex justify-content-start',
//   infinite: true,
// });


$('.item__detail__action .btn__action_favorite').mouseenter(function(){
    $(this).parent('.btn__group').children('.btn__action_act').addClass('unhover');
    $(this).parent('.btn__group').children('.btn-black').addClass('hovered');
}).mouseleave(function(){
    $(this).parent('.btn__group').children('.btn__action_act').removeClass('unhover');
    $(this).parent('.btn__group').children('.btn-black').removeClass('hovered');
})
$('.item__detail__action .btn__action_act').mouseenter(function(){
    $(this).parent('.btn__group').children('.btn-black').addClass('hover');
}).mouseleave(function(){
    $(this).parent('.btn__group').children('.btn-black').removeClass('hover');
})


 $('.tab-content .color .item__color').on('click', function(e){
        console.log(e);
        $(this).closest('.color').children('.item__color').removeClass('active');
        $(this).addClass('active');
        var index = $(this).attr('item-index');
        $(this).closest('.groups__carousel__item').find('.item__image').removeClass('active')
        $(this).closest('.groups__carousel__item').find('.item__image[item-index='+index+']').addClass('active');
    })
})