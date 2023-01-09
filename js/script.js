const nav = document.getElementById("navbar")

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-115px";
  }
}

window.onscroll = function() {scrollFunction()};