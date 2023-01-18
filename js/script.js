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
    imgs : [],
    nums : []
};

for (var i = 1; i <= 40; i++) {
    montaditos.nums.push(i);
    montaditos.imgs.push('img'+i)
}

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

// ::: Alternativa de interacción con el slider de montaditos. Adaptación de un sctipt que funciona con los mouse events. Tomado de https://codepen.io/thenutz/pen/VwYeYEE :::
const slider = document.querySelectorAll(".scrolling-wrapper-flexbox");
let isDown = false;
let startX;
let scrollLeft;

slider.forEach(slider => {
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('dragged');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('dragged');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('dragged');
    });
    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const speed = (x - startX) * 1.1; //velocidad de scroll
        slider.scrollLeft = scrollLeft - speed;
    });
});
// ---