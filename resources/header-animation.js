$('document').ready(function(){
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#header').addClass('opacity');
    } else {
       $('#header').removeClass('opacity');
    }
})
});
