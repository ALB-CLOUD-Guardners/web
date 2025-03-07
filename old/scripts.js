var lastScrollTop = 0;
$(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        // Downscroll
        $('nav')
            .addClass('navbar-hidden')
            .removeClass('navbar-visible');
    } else {
        // Upscroll
        $('nav')
            .addClass('navbar-visible')
            .removeClass('navbar-hidden');
    }
    lastScrollTop = st;
});

// Handle dropdown show/hide with delay
$('.dropdown').hover(function () {
    var $dropdownMenu = $(this).find('.dropdown-menu');
    clearTimeout($dropdownMenu.data('timeout'));
    $dropdownMenu.addClass('show');
}, function () {
    var $dropdownMenu = $(this).find('.dropdown-menu');
    var timeout = setTimeout(function () {
        $dropdownMenu.removeClass('show');
    }, 300); // Adjust the delay as needed
    $dropdownMenu.data('timeout', timeout);
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 7
            }
        }
    });
});