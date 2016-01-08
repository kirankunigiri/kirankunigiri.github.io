(function(d){var h=[];d.loadimages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
$('.img-6').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'quest/images/launchimage-3x-597-2.png' : 'quest/images/launchimage-3x-398-2.png') : 'quest/images/launchimage-3x-199-2.png');};
$(window).resize(r);
r();

});