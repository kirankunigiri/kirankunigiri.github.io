(function(d){var h=[];d.loadimages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
var a='data-lazy'; if($('.gallery .slide0').hasAttr('src')) { a='src'; } $('.gallery .slide0').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'quest/images/iphone6screen1_iphone6_gold_portrait-981.png' : 'quest/images/iphone6screen1_iphone6_gold_portrait-654.png') : 'quest/images/iphone6screen1_iphone6_gold_portrait-327.png');
var a='data-lazy'; if($('.gallery .slide1').hasAttr('src')) { a='src'; } $('.gallery .slide1').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'quest/images/iphone6screen2_iphone6_gold_portrait-981.png' : 'quest/images/iphone6screen2_iphone6_gold_portrait-654.png') : 'quest/images/iphone6screen2_iphone6_gold_portrait-327.png');
var a='data-lazy'; if($('.gallery .slide2').hasAttr('src')) { a='src'; } $('.gallery .slide2').attr(a, (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'quest/images/iphone6screen3_iphone6_gold_portrait-981.png' : 'quest/images/iphone6screen3_iphone6_gold_portrait-654.png') : 'quest/images/iphone6screen3_iphone6_gold_portrait-327.png');
$('.img').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'quest/images/launchimage-3x-597.png' : 'quest/images/launchimage-3x-398.png') : 'quest/images/launchimage-3x-199.png');
$('.img-2').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'quest/images/coming-soon-button-930.png' : 'quest/images/coming-soon-button-620.png') : 'quest/images/coming-soon-button-310.png');
$('.img-3').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'quest/images/iphone6screen1_iphone6_gold_side1-717.png' : 'quest/images/iphone6screen1_iphone6_gold_side1-478.png') : 'quest/images/iphone6screen1_iphone6_gold_side1-239.png');
$('.img-4').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'quest/images/iphone6screen2_iphone6_gold_side2-702.png' : 'quest/images/iphone6screen2_iphone6_gold_side2-468.png') : 'quest/images/iphone6screen2_iphone6_gold_side2-234.png');
$('.img-5').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'quest/images/iphone6screen3_iphone6_gold_side1-726.png' : 'quest/images/iphone6screen3_iphone6_gold_side1-484.png') : 'quest/images/iphone6screen3_iphone6_gold_side1-242.png');};
$(window).resize(r);
r();
$('.gallery .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 300,dots: false,arrows: false,infinite: true,autoplay: true,autoplaySpeed: 5000});
});