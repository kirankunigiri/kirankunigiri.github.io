/*jslint browser: true*/
/*global $, jQuery, alert*/

var menuMode = 0;
var i = 0;

$(document).ready(function() {
    "use strict";

    //================================================================================
    // SLIDESHOW
    //================================================================================
    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });

    $(".photoBtn").click(function() {
        var link = $(this).attr("href");
        console.log(link);
        $(link).eq(0).trigger('click');
    });

    //================================================================================
    // POSITION SETUP
    //================================================================================
    // Put menu at top
    TweenMax.set("#menu", {
        y: -$("#menu").height() - 200
    });

    // Scroll button hovering
    TweenMax.to(".scrollbtn", 0.75, {
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: Circ.easeNone
    });

    //================================================================================
    // PAGE ANIMATION START
    //================================================================================
    var image = new Image();
    image.onload = function() {
    }
    image.onerror = function() {
        console.error("Cannot load image");
    }
    image.src = "img/profile1.png";

    $(window).load(function() {
        // Unhide body and start timeline animation
        $("body").css("visibility", "visible");
        $(".loader").css("visibility", "hidden");

        var width = $(window).width();
        var height = $(window).height();
        var tl = new TimelineLite();
        tl.from(".profile-img", 1, {
            x: -width - $(".profile-img").width(),
            rotation: -480,
            ease: Circ.easeOut
        }, '+= 0.2').from(".menubtn", 3, {
            y: -200,
            rotation: 360,
            ease: Elastic.easeOut
        }, '-= 0.5').from(".title", 1, {
            opacity: 0,
            x: -$(window).width(),
            ease: Power4.easeOut
        }, '-= 2').from(".subtitle", 1, {
            opacity: 0,
            x: width,
            ease: Power4.easeOut
        }, '-= 1.7').to(".scrollbtn", 0.5, {
            opacity: 1,
            ease: Power0.easeOut
        }, '-= 1')

        //    Scroll Reveal
        window.sr = ScrollReveal().reveal('.aboutTitle, .aboutDescription, .subhead, .row');
    });

    //================================================================================
    // PAGE ANIMATION END
    //================================================================================

    // Scroll button click
    $('.scrollbtn').on("click", function(e) {
        var link = $(this).attr("href");

        e.preventDefault();
        TweenLite.to(window, 0.6, {
            scrollTo: {
                y: $(link).offset().top
            },
            ease: Power3.easeOut
        });
    });

    // Show/hide menu on button click
    $('.menubtn').on("click", function(e) {
        e.preventDefault();
        if (menuMode === 0) {
            slideMenuOut();
        } else {
            slideMenuIn();
        }
    });

    // Menu link clicks
    $('#menu a').on("click", function(e) {
        var link = $(this).attr("href");
        e.preventDefault();
        TweenLite.to(window, 1, {
            scrollTo: {
                y: $(link).offset().top
            },
            ease: Power3.easeOut
        });
    });

    // Button hover appear - Currently disabled
    //    $(".rowText").hover(
    //        function() {
    //            //            TweenMax.set($(this).find(".moreBtn"), {opacity:1});
    //            TweenMax.to($(this).find(".moreBtn"), 1.2, {
    //                opacity: 1,
    //                ease: Back.easeOut
    //            });
    //        },
    //        function() {
    //            TweenMax.to($(this).find(".moreBtn"), 1.2, {
    //                opacity: 0,
    //                ease: Back.easeOut
    //            });
    //        }
    //    );

    // Image rotate on hover
    $(".image").find('img:first').hover(
        function() {
            TweenLite.to($(this), 3, {
                rotation: 360,
                ease: Elastic.easeOut
            });
        },
        function() {
            TweenLite.to($(this), 3, {
                rotation: 0,
                ease: Elastic.easeOut
            });
        }
    );

    // Contact send button
    $("#sendBtn").click(function() {
        var firstName = $("#first_name").val();
        var lastName = $("#last_name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        message = "Hey Kiran," + '\r\n\r\n' + message + '\r\n\r\n' + "From," + '\r\n' + firstName + " " + lastName;
        message = encodeURIComponent(message);

        var link = 'mailto:kunigirik@yahoo.com?' + 'subject=' + subject + '&body=' + message;
        window.location.href = link;
    });
});

function slideMenuOut(arr) {
    // Unhide menu
    $("#menu").css("pointer-events", "all");
    // Change icon
    TweenMax.to(".menubtn", 1, {
        rotation: 360,
        opacity: 1,
        ease: Power4.easeOut,
    });

    TweenMax.to("#menu", 0.5, {
        y: 0,
        opacity: 1,
        ease: Power4.easeOut
    });

    $('.menubtn').attr("src", "img/x.svg");

    menuMode = 1;
}

function slideMenuIn(arr) {
    // Get background color
    $("#menu").css("pointer-events", "none");
    // Change background color of menu to body coloe
    TweenMax.to("#menu", 1, {
        y: -$("#menu").height() - 200,
        ease: Power4.easeOut
    });

    // Animate and change icon
    TweenMax.to(".menubtn", 1, {
        rotation: 0,
        ease: Power4.easeOut
    });
    $('.menubtn').attr("src", "img/menu.svg");

    menuMode = 0;
}



function multiFade(element, timeSpace, texts) {

    element.hide().fadeIn(timeSpace, function() {
        element.fadeOut(timeSpace, function() {
            element.text(texts[0]).fadeIn(timeSpace);
        });
    });

    if (texts.length <= 1) {
        return;
    }

    var i = 1;

    var delay = setInterval(function() {
        id = setInterval(function() {
            performAnimation();
        }, timeSpace * 2);
        clearInterval(delay);
    }, timeSpace);

    function performAnimation() {
        element.fadeToggle(timeSpace, function() {
            console.log(texts[i]);
            element.text(texts[i]);
            element.fadeToggle(timeSpace);
            i++;
            if (i >= texts.length) {
                clearInterval(id);
                element.blur();
            }
        });
    }
}

function blurElement(element, size) {
    var filterVal = 'blur(' + size + 'px)';
    $(element)
        .css('filter', filterVal)
        .css('webkitFilter', filterVal)
        .css('mozFilter', filterVal)
        .css('oFilter', filterVal)
        .css('msFilter', filterVal)
        .css('transition', 'all 0.5s ease-out')
        .css('-webkit-transition', 'all 0.5s ease-out')
        .css('-moz-transition', 'all 0.5s ease-out')
        .css('-o-transition', 'all 0.5s ease-out');
}

function setBlur(element, size) {
    var filterVal = 'blur(' + size + 'px)';
    $(element)
        .css('filter', filterVal)
        .css('webkitFilter', filterVal)
        .css('mozFilter', filterVal)
        .css('oFilter', filterVal)
        .css('msFilter', filterVal);
}