// En este primer script, se muestra el navbar de acuerdo al scroll del usuario. Este navbar inicia oculto, y se muestra, con una pequeña transición dada en el css, si el usuario hace un scroll mayor a 50px.

const nav = document.getElementById("navbar")

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-115px";
  }
}

window.onscroll = function() {scrollFunction()};