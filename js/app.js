/**
 * Created by Iaroslav Zhbankov on 02.12.2016.
 */
(function () {
    /*-------------------------------------------------------------------------------
     *                                      HEAD
     * ------------------------------------------------------------------------------*/

    $(".head").height($(window).height());
    /*-------------------------------------------------------------------------------
     *                                      SCROLL EVENTS
     * ------------------------------------------------------------------------------*/

    $(window).scroll(function () {
        var height = $(window).scrollTop();
        console.log(height);
        if (height < 400) {
            $(".head").css("opacity", (400 - height) / 400);
        } else {
            $(".head").css("opacity", 0);
        }
        if (height > 850) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
        if (height < 800) {
            $('.active').removeClass('active');
            $(".home-btn").addClass("active");
        }
        if ((height > 800) && (height < 900)) {
            $('.active').removeClass('active');
            $(".about-btn").addClass("active");
        }
        if ((height > 1500) && (height < 1700)) {
            $('.active').removeClass('active');
            $(".portfolio-btn").addClass("active");
        }
        if (height > 1800) {
            $('.active').removeClass('active');
            $(".contacts-btn").addClass("active");
        }
    });
    /*-------------------------------------------------------------------------------
     *                                      MENU
     * ------------------------------------------------------------------------------*/
    $(".home-btn").click(function () {
        $('html, body').animate({
            scrollTop: $(".menu").offset().top
        }, 1000);
    });
    $(".about-btn").click(function () {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 1000);
    });
    $(".portfolio-btn").click(function () {
        $('html, body').animate({
            scrollTop: $(".portfolio").offset().top - 75
        }, 1000);
    });
    $(".contacts-btn").click(function () {
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 1000);
    });

})();