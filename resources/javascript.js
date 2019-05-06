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


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
