// Image Zoom on Scroll
$(document).ready(function(){
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".zoom img").css({
		transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
		"-webkit-filter": "blur(" + (scroll/200) + "px)",
		filter: "blur(" + (scroll/100) + "px) brightness(0.6)"
	});
});
});

$(document).ready(function(){
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".zoom h1").css({
		transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
		"-webkit-filter": "blur(" + (scroll/200) + "px)",
		filter: "blur(" + (scroll/100) + "px)"
	});
});
});
