//navbar functionality
var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if (this.window.scrollY > 100) {
        nav.classList.add('dark', 'shadow');
    } else {
        nav.classList.remove('dark', 'shadow');
    }
})

//scrolltop functionality
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//active functinality
jQuery(function($) {
    var path = window.location.href;
    $('.myMenu a').each(function() {
      if (this.href === path) {
        $(this).addClass('clicked');
      } 
    });
});