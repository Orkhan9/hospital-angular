/*
::
:: Theme Name: Al-Anwar | Medical and Doctor HTML Template
:: Email: Nourramadan144@gmail.com
:: Author URI: https://themeforest.net/user/ar-coder
:: Author: ar-coder
:: Version: 1.0
::
*/

(function () {
    'use strict';
    // :: Loading
    $(window).on('load', function () {
        $('.loading').fadeOut();
    });
    
    // :: Scroll Smooth To Go Section
    $('.move-section').on('click', function (e) {
        e.preventDefault();
        var anchorLink = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchorLink.attr('href')).offset().top + 1
        }, 1000);
    });
    
    // :: Add Class Active For ('.nav-bar')
    var zero = 0;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > ($('.nav-box').height())) {
            $('.nav-box').addClass('active');
        } else {
            $('.nav-box').removeClass('active');
        }
        $('.nav-box').toggleClass('hide', $(window).scrollTop() > zero);
		zero = $(window).scrollTop();
    });
    
    // :: Varables Navbar
    var headerBar = $('header.nav-box'),
        $navbarMenu = $('#open-nav-bar-menu'),
        $menuLink = $('.open-nav-bar'),
        $menuTriggerLink = $('.has-menu > a');

    // :: Add Class Active For $menuLink And $navbarMenu
    $menuLink.on('click', function (e) {
        e.preventDefault();
        $menuLink.toggleClass('active');
        $navbarMenu.toggleClass('active');
    });

    // :: Add Class Active For $menuTriggerLink
    $menuTriggerLink.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass('active').next('ul').toggleClass('active');
    });

    // :: Add Class Active To Search Box
    $('.open-search').on('click', function () {
        $('.search-box').fadeIn();
    });
    $('.search-box, .close-search').on('click', function () {
        $('.search-box').fadeOut();
    });
    $('.search-box form').on('click', function (e) {
        e.stopPropagation();
    });
    
    // :: Height Header
    $('.header, .header .table-cell').height( $(window).height() + $('.feature').height() - 80 );
    $('.header-3, .header-3 .table-cell').height( $(window).height() + $('.nav-box').height() );
    
    // :: OWL Carousel Js Header Hero
    $('.hero-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dragClass: 'hover-nav',
        navContainerClass: 'hero-slider-nav container-fluid',
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    });
    $('.header .hero-slider').on('translate.owl.carousel', function () {
        $('.bg-slider').removeClass('animated fadeOut').css('animation', 'none');
    })
    $('.header .hero-slider').on('translated.owl.carousel', function () {
        $('.bg-slider').removeClass('animated fadeIn').css('animation', 'bg-slider-scale 20s');
    });

    // :: NiceSelect Plugin
    $('select').niceSelect();
    
    // :: OWL Carousel Js Gallery Slider
    $('.gallery-slider').owlCarousel({
        loop: true,
        margin: 15,
        smartSpeed: 1000,
        autoplay: 2000,
        nav: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        dragClass: 'hover-nav',
        navContainerClass: 'gallery-slider-nav container-fluid',
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 4
            }
        }
    });
    
    // :: Magnific Popup Plugin
    $('.open-gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    // :: OWL Carousel Js Gallery Slider
    $('.testimonials-slider-1').owlCarousel({
        loop: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: 2000,
        nav: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });
    // :: OWL Carousel Js Gallery Slider
    $('.testimonials-slider-2').owlCarousel({
        loop: true,
        smartSpeed: 1000,
        autoplay: 2000,
        nav: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    });
    
    // :: Add Class Active On Go To Header
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('.scroll-up').addClass('active');
        } else {
            $('.scroll-up').removeClass('active');
        }
    });
    
    // :: Count To Plugin
    $('.count').countTo();
    
    // :: Datepicker Plugin
    $('#box-calender').datepicker();

}());