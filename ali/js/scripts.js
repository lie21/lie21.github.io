/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    $('.shooter').click(function(e) {
        // var frameObj = document.getElementById('iframeID');
        // var frameSrc = frameObj.getAttribute('src')
        e.preventDefault();
        // $('.video-embed').children('iframe').attr('src', frameSrc);
        $('.video-embed-shooter').children('iframe').attr('src', 'https://www.youtube.com/embed/l0FrRxUygvM');
    });

    $('.hajj').click(function(e) {
        // var embedCode = 'https://www.youtube.com/embed/5KcdjmJIyNA';
        // console.log(embedCode);
        e.preventDefault();
        // $('.video-embed-hajj').children('iframe').attr('src', '');
        $('.video-embed-hajj').children('iframe').attr('src', 'https://www.youtube.com/embed/5KcdjmJIyNA');
    });

    $('.drydock').click(function(e) {
        // var embedCode = 'https://www.youtube.com/embed/5KcdjmJIyNA';
        // console.log(embedCode);
        e.preventDefault();
        // $('.video-embed-hajj').children('iframe').attr('src', '');
        $('.video-embed-drydock').children('iframe').attr('src', 'https://www.youtube.com/embed/gAqBHUtrazg');
    });

})(jQuery); // End of use strict
