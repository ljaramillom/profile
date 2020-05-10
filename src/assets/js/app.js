// ----- init wow ----
new WOW().init();

// ----- smooth scroll -----
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    offset: 80,
    speedAsDuration: true
});

// ----- function button go-up ----
$(function() {
    $(window).scroll(function() {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".go-up").fadeIn();
        } else {
            $(".go-up").fadeOut();
        }
    });
});