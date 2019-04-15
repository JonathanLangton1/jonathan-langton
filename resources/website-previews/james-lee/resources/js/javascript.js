$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('.header').css('opacity','1');
} else {
$('.header').css('opacity','0.5');
}
});
