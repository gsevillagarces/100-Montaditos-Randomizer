// ::: Script para mostrar número e img de montadito dentro del MODAL :::
var montadito = document.querySelector(".montadito");
var montaditoTxt = document.querySelector(".montadito-num");
var btnMontaditoRdm = document.querySelectorAll(".btn");

let montaditos = {
    nums : []
};

for (var i = 1; i <= 40; i++) {
    montaditos.nums.push(i)
}

function montaditoRandom (){
    let montRand = Math.floor((Math.random() * montaditos.nums.length) + 1);
    montadito.classList.add("visible");
    montaditoTxt.innerHTML ='#'+montRand;
}

btnMontaditoRdm.forEach(boton => boton.addEventListener("click", montaditoRandom));
// ---