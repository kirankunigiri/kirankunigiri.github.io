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

    var numC = 7;
    if (windowWidth <= 1100) {
        numC = 5
    }
    if (windowWidth <= 800) {
        numC = 4;
    }
    if (windowWidth <= 600) {
        numC = 3;
        width = windowWidth / 3;
    }
    if (windowWidth <= 500) {
        numC = 2;
    }
    var width = windowWidth / numC;
    var numBoxes = $(".box").length;
    $(".box").each(function(index) {
        if (index >= numBoxes - (numBoxes % numC)) {
            $(this).width(windowWidth/(numBoxes % numC));
        } else {
            $(this).width(width);
            $(this).height(width);
        }
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