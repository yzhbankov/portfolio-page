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
            if ($(window).width() > 991) {
                if (height > 100) {
                    $(".navbar").addClass("scrolled");
                } else {
                    $(".navbar").removeClass("scrolled");
                }
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
        /*-------------------------------------------------------------------------------
         *                                      FRONT/BACK/FULL STACK
         * ------------------------------------------------------------------------------*/
        function removeActiveClass() {
            $(".switch-btn").each(function (index, element) {
                $(element).removeClass('active');
            });
        }

        $(".switch-btn").each(function (index, element) {
            var same = this;
            $(same).click(function () {
                removeActiveClass();
                if ($(this).text() == "Back End") {
                    $(".front-end").hide();
                    $(".full-stack").hide();
                    $(".data-vis").hide();
                    $(".back-end").show();
                    $(this).addClass('active');
                } else if ($(this).text() == "Front End") {
                    $(".front-end").show();
                    $(".full-stack").hide();
                    $(".back-end").hide();
                    $(".data-vis").hide();
                    $(this).addClass('active');
                } else if ($(this).text() == "Full Stack") {
                    $(".front-end").hide();
                    $(".full-stack").show();
                    $(".back-end").hide();
                    $(".data-vis").hide();
                    $(this).addClass('active');
                } else {
                    $(".front-end").hide();
                    $(".full-stack").hide();
                    $(".back-end").hide();
                    $(".data-vis").show();
                    $(this).addClass('active');
                }

            });
        });

    });
})();