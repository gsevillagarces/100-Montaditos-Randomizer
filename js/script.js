// ::: Script para mostrar NAVBAR :::
// En este primer script, se muestra el navbar de acuerdo al scroll del usuario. Este navbar inicia oculto, y se muestra, con una pequeña transición dada en el css, si el usuario hace un scroll mayor a 50px.
const nav = document.getElementById("navbar");
let navbarH = nav.getBoundingClientRect().height;

console.log(`-${navbarH}px`);

function showNav() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { //50 es el número de px que deben darse con el scroll para que se muestre el elemento
    nav.style.top = "0";
    } else {
    nav.style.top = `-${navbarH}px`; //El alto tomado  del navbar, para ocultarlo correctamente
  }
}

window.addEventListener("scroll", showNav);
// ---



// ::: Script para controlar el MODAL :::
var modal = document.querySelector(".modal");
var btn = document.querySelectorAll(".btnModal");
var close = document.querySelector(".modal-close");

btn.forEach(boton => boton.addEventListener("click", () => modal.style.display = "block")); // Abrir el modal al dar click en uno de los botones que están para esta acción 

close.addEventListener("click", () => modal.style.display = "none"); // Cerrar el modal al dar click en el botón (X)

window.addEventListener("click", (e) => {
    if (e.target == modal) {  // Cerrar el modal al dar click fuera del modal
        modal.style.display = "none";
    }
});
// ---



// ::: Script para dar una pequeña animación de entrada a los elementos al ir bajando por la página :::
var revealElements = document.querySelectorAll(".reveal");

function reveal() {
    for (var i = 0; i < revealElements.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealElements[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add("active");
            } else {
                revealElements[i].classList.remove("active");
            }
    }
}

window.addEventListener("scroll", reveal);