/**
 * Created by Iaroslav Zhbankov on 02.12.2016.
 */
(function () {
    /*-------------------------------------------------------------------------------
     *                                      DOCUMENT
     * ------------------------------------------------------------------------------*/
    $(document).ready(function () {

        $(".preloader").fadeOut(500);

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
            if ($(window).width() > 991) {
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
                if ((height > 800) && (height < 980)) {
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
            } else if ($(window).width() < 350) {
                if (height < 400) {
                    $(".head").css("opacity", (400 - height) / 400);
                } else {
                    $(".head").css("opacity", 0);
                }
                if (height < 490) {
                    $('.active').removeClass('active');
                    $(".home-btn").addClass("active");
                }
                if ((height > 490) && (height < 1450)) {
                    $('.active').removeClass('active');
                    $(".about-btn").addClass("active");
                }
                if ((height > 1450) && (height < 3700)) {
                    $('.active').removeClass('active');
                    $(".portfolio-btn").addClass("active");
                }
                if (height > 3700) {
                    $('.active').removeClass('active');
                    $(".contacts-btn").addClass("active");
                }
            } else {
                if (height < 400) {
                    $(".head").css("opacity", (400 - height) / 400);
                } else {
                    $(".head").css("opacity", 0);
                }
                if (height < 580) {
                    $('.active').removeClass('active');
                    $(".home-btn").addClass("active");
                }
                if ((height > 580) && (height < 1450)) {
                    $('.active').removeClass('active');
                    $(".about-btn").addClass("active");
                }
                if ((height > 1450) && (height < 3800)) {
                    $('.active').removeClass('active');
                    $(".portfolio-btn").addClass("active");
                }
                if (height > 3800) {
                    $('.active').removeClass('active');
                    $(".contacts-btn").addClass("active");
                }
            }
        });
        /*-------------------------------------------------------------------------------
         *                                      MENU
         * ------------------------------------------------------------------------------*/
        $(".navbar-brand").click(function () {
            $('html, body').animate({
                scrollTop: $(".menu").offset().top
            }, 1000);
        });
        $(".home-btn").click(function () {
            $('html, body').animate({
                scrollTop: $(".menu").offset().top
            }, 1000);
        });
        $(".about-btn").click(function () {
            $('html, body').animate({
                scrollTop: $(".about").offset().top - 80
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
        /*-------------------------------------------------------------------------------
         *                                      PORTFOLIO
         * ------------------------------------------------------------------------------*/

        $(".hover").each(function (index, element) {
            $(this).mouseover(function () {
                $(this).addClass("hover-mask");
            });
            $(this).mouseout(function () {
                $(this).removeClass("hover-mask");
            });
        });
    });
})();