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


// Atrapo el modal
var modal = document.querySelector(".modal");

// Atrapo el btn (en este caso los botones) que abrirán el modal
var btn = document.querySelectorAll(".btnModal");

// Atrapo el elemento que cerrará el modal
var close = document.querySelector(".close-modal");

// When the user clicks on the button, open the modal 
btn.forEach(boton => boton.addEventListener("click", () => modal.style.display = "block"));

// When the user clicks on <span> (x), close the modal

close.addEventListener("click", () => modal.style.display = "none");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}