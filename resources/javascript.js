$(document).ready(function(){
    $("button.button").click(function(){
        $("*").toggleClass("border");
    });
});

$(document).ready(function(){
    $("button.menu-toggle").click(function(){
        $(".main-menu-container").toggleClass("left-0");
    });
});

$(document).ready(function(){

var button = document.getElementById( 'menu-toggle' );

    $(".main-menu-item").click(function(){
        $(".main-menu-container").toggleClass("left-0");
        button.className = button.className.replace( ' opened', '' );
        button.setAttribute( 'aria-expanded', 'false' );
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

$(document).ready(function(){
$(".arrow-click").click(function() {
  var box = $(".image-container"),
    x;
  if ($(this).hasClass("arrow-right")) {
    x = ((box.width() / 1)) + box.scrollLeft();
    box.animate({
      scrollLeft: x,
    })
  } else {
    x = ((box.width() / 1)) - box.scrollLeft();
    box.animate({
      scrollLeft: -x,
    })
  }
})
});


$(document).ready(function(){
var button = document.getElementById( 'menu-toggle' );

button.onclick = function() {

  if ( -1 !== button.className.indexOf( 'opened' ) ) {
    button.className = button.className.replace( ' opened', '' );
    button.setAttribute( 'aria-expanded', 'false' );
  } else {
     button.className += ' opened';
    button.setAttribute( 'aria-expanded', 'true' );
   }

 };
});
