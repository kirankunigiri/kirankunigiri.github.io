/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function() {
    "use strict";

    var windowWidth = $(window).width();
    var isMobile = windowWidth <= 500;
    console.log(windowWidth);

    // SETUP
    $.adaptiveBackground.run();
    $(".cover").hide();

    var width = windowWidth / 7;
    if (windowWidth <= 1100) {
        width = windowWidth / 5;
    }
    if (windowWidth <= 800) {
        width = windowWidth / 4;
    }
    if (windowWidth <= 600) {
        width = windowWidth / 3;
    }
    if (windowWidth <= 500) {
        width = windowWidth / 2;
    }
    $(".box").each(function(index) {
        $(this).width(width);
        $(this).height(width);
    });

    TweenMax.set(".boxOverlay", {
        y: $(".box").height()
    });


    // Close button
    $('.cover').on("click", function(e) {
        e.preventDefault();
        $(".cover").hide();
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $(".cover").trigger("click");
        }
    });

    $('.box, .boxOverlay').on("click", function(e) {
        e.preventDefault();
        var descriptionText = $(this).find('.boxDescription:first').text();
        var titleText = $(this).find('p:first').text();
        $(".cover").find('.coverDescription:first').text(descriptionText);
        $(".cover").find('.coverTitle:first').text(titleText);
        $(".cover").show();
    });

    // Actions
    if (!isMobile) {
        var boxHeight = $(".box").height();
        $(".box").hover(
            function() {
                TweenLite.to($(this).find('.boxOverlay:first'), 0.5, {
                    y: 0,
                    ease: Power4.easeOut
                });
            },
            function() {
                TweenLite.to($(this).find('.boxOverlay:first'), 0.5, {
                    y: boxHeight,
                    ease: Power4.easeOut
                });
            }
        );
    }

});