// ::: Script para mostrar número e img de montadito dentro del MODAL :::
// Llamo a todos los elementos con los que se interactua
var montadito = document.querySelector(".montadito");
var montaditoTxt = document.querySelector(".montadito-num");
let btnMontaditoRdm = document.querySelectorAll(".btn");

// Creo un array vacío
let montaditos = {
    nums : []
};

for (var i = 1; i <= 100; i++) { // Aquí sí pongo 100, porque no cargo imagenes, y eso me facilita un poco las cosas y los "pusheo" en el array
    montaditos.nums.push(i)
}

// Del array, a partir de un num random, muestro uno de los números
function montaditoRandom (){
    let montRand = Math.floor((Math.random() * montaditos.nums.length) + 1);
    montadito.classList.add("visible");
    montaditoTxt.innerHTML ='#'+montRand;

    // En esta linea estoy seguro que se puede optimizar el llamado para que se dé solo la primera vez del click, no cada vez. Ahora por cada click se reescribe la misma palabra.
    document.getElementById("btnRdm").innerHTML="RE-randomize!";
}

btnMontaditoRdm.forEach(boton => boton.addEventListener("click", montaditoRandom));
// ---