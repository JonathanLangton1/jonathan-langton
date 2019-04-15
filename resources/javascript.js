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

function myFunction(e){
  var c=document.getElementById('copytxt');
  c.value=e.textContent;
      c.select();
      try {
    var successful = document.execCommand('copy')
    var msg = successful ? 'successfully' : 'unsuccessfully'
    alert('Copied!');
      }catch(err) {
    alert('Falied to copy.');
      }
}

$(".arrow-click").click(function() {
  var box = $(".image-container"),
    x;
  if ($(this).hasClass("arrow-right")) {
    x = ((box.width() / 2)) + box.scrollLeft();
    box.animate({
      scrollLeft: x,
    })
  } else {
    x = ((box.width() / 2)) - box.scrollLeft();
    box.animate({
      scrollLeft: -x,
    })
  }
})
