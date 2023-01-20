// ::: Script para mostrar número e img de montadito dentro del MODAL :::
var montadito = document.querySelector(".montadito");
var montaditoTxt = document.querySelector(".montadito-num");
let btnMontaditoRdm = document.querySelectorAll(".btn");

let montaditos = {
    nums : []
};

for (var i = 1; i <= 100; i++) { // Aquí sí pongo 100, porque no cargo imagenes
    montaditos.nums.push(i)
}

function montaditoRandom (){
    let montRand = Math.floor((Math.random() * montaditos.nums.length) + 1);
    montadito.classList.add("visible");
    montaditoTxt.innerHTML ='#'+montRand;

    // En esta linea estoy seguro que se puede optimizar el llamado para que se de solo la primera vez del click
    document.getElementById("btnRdm").innerHTML="RE-randomize!";
}

btnMontaditoRdm.forEach(boton => boton.addEventListener("click", montaditoRandom));
// ---