// Border Toggle Button
$(document).ready(function(){
    $("button.button").click(function(){
        $("*").toggleClass("border");
    });
});

// Menu Animation
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


// Fade In Effect
$(document).ready(function(){
    $(".fade-in").ready(function(){
        $(".fade-in").toggleClass("visible");
    });
});

// Image Scroller
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

// Menu Toggle Animation
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


// Smooth Scroll
$(document).ready(function(){
  let anchorlinks = document.querySelectorAll('a[href^="#"]')

  for (let item of anchorlinks) { // relitere
      item.addEventListener('click', (e)=> {
          let hashval = item.getAttribute('href')
          let target = document.querySelector(hashval)
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          })
          history.pushState(null, null, hashval)
          e.preventDefault()
      })
  }
});

$(document).ready(function(){
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#header').addClass('opacity');
    } else {
       $('#header').removeClass('opacity');
    }
})
});
