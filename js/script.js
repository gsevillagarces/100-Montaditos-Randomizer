// ::: Script para mostrar NAVBAR :::
// En este primer script, se muestra el navbar de acuerdo al scroll del usuario. Este navbar inicia oculto, y se muestra, con una pequeña transición dada en el css, si el usuario hace un scroll mayor a 50px.
const nav = document.getElementById("navbar");
let navbarH = nav.getBoundingClientRect().height;

function showNav() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { //50 es el número de px que deben darse con el scroll para que se muestre el elemento
    nav.style.top = "0";
    } else {
    nav.style.top = `-${navbarH}px`; //El alto tomado  del navbar, para ocultarlo correctamente
  }
}

window.addEventListener("scroll", showNav);
// ---

// ::: Script para poner un fondo de img en el hero de manera aleatoria :::
var totalCount = 3;
const hero = document.querySelector(".hero");

console.log(hero);

function changeBG() {
    var num = Math.ceil( Math.random() * totalCount );
    hero.style.backgroundImage = 'url(imgs/bg'+num+'.jpg';
}

window.addEventListener("load", changeBG);
// ---

// ::: Script para controlar el MODAL :::
var modal = document.querySelector(".modal");
var btn = document.querySelectorAll(".btnModal");
var close = document.querySelector(".modal-close");

btn.forEach(boton => boton.addEventListener("click", () => modal.style.display = "flex")); // Abrir el modal al dar click en uno de los botones que están para esta acción 

close.addEventListener("click", () => modal.style.display = "none"); // Cerrar el modal al dar click en el botón (X)

window.addEventListener("click", (e) => {
    if (e.target == modal) {  // Cerrar el modal al dar click fuera del modal
        modal.style.display = "none";
    }
});
// ---

// ::: Script para mostrar número e img de montadito dentro del MODAL :::
var montaditoImg = document.querySelector(".img-select-montadito");
var montaditoTxt = document.querySelector(".num-select-montadito");
var btnMontaditoRdm = document.querySelectorAll(".btnRdm");

let montaditos = {
    imgs : ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16", "img17", "img18", "img19", "img20", "img21", "img22", "img23", "img24", "img25"],
    nums : ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"]
};

function montaditoRandom (){
    let montRand = Math.floor((Math.random() * montaditos.imgs.length) + 1);
    montaditoImg.src = 'imgs/montaditos/montadito'+montRand+'.png';
    montaditoTxt.innerHTML ='#'+montRand;
}

btnMontaditoRdm.forEach(boton => boton.addEventListener("click", montaditoRandom));
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
// ---