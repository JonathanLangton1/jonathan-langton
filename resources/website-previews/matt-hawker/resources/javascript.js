$(document).ready(function(){
    $("button.button").click(function(){
        $("*").toggleClass("border");
    });
});

$(document).ready(function(){
    $(".fade-in").ready(function(){
        $(".fade-in").toggleClass("visible");
    });
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('.logo').css('height','3rem');
$('.logo').css('padding','1rem');
$('.footer-list a').css('font-size','1rem');
$('.footer-list').css('height','5rem');
} else {
$('.logo').css('height','6rem');
$('.logo').css('padding','2rem');
$('.footer-list a').css('font-size','2rem');
$('.footer-list').css('height','10rem');

}
});
