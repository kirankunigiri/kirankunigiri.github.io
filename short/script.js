/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function() {
    "use strict";


    // SETUP
    $.adaptiveBackground.run();

    $(".box").each(function(index) {
//        $(this).css("background-color", randomColor());
    });

    TweenMax.set(".boxOverlay", {
        y: $(".box").height()
    });

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

});