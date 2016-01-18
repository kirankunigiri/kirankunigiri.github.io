/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function() {
    "use strict";


    // SETUP
    $.adaptiveBackground.run();
    $(".cover").hide();

    var width = $(window).width() / 7;
    $(".box").each(function(index) {
        $(this).width(width);
        $(this).height(width);
    });

    TweenMax.set(".boxOverlay", {
        y: $(".box").height()
    });


    // Close button
    $('.xbtn').on("click", function(e) {
        e.preventDefault();
        $(".cover").hide();
        console.log("hello");
    });
    
    $('.boxOverlay').on("click", function(e) {
        e.preventDefault();
        var descriptionText = $(this).find('.boxDescription:first').text();
        var titleText = $(this).find('p:first').text();
        $(".cover").find('.coverDescription:first').text(descriptionText);
        $(".cover").find('.coverTitle:first').text(titleText);
        $(".cover").show();
        console.log(text);
    });

    // Actions
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