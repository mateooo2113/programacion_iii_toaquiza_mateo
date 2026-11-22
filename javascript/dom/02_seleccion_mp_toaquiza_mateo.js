const energia = document.getElementById("energia");
const madera = document.getElementById("madera");
const sierra = document.getElementById("sierra");

energia.textContent = "Energia: 100";
madera.textContent = "Madera: Roble";
sierra.textContent = "Sierra: activada";

const carpintero = document.querySelector(".carpintero");
carpintero.textContent = "Carlos Pérez";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando Herramientas";

const pedido = document.querySelector("#pedido");
pedido.textContent = "Preparando Pedido";

const estadoCarlos = document.querySelector("#carlos .estado");
estadoCarlos.textContent = "Listo para Trabajar";

const maderas = document.querySelectorAll(".maderas");
console.log(maderas);
console.log(maderas.length)

console.log(maderas[0].textContent);
console.log(maderas[1].textContent);
console.log(maderas[2].textContent);
console.log(maderas[3].textContent);

for (let i=0; i<maderas.length; i++){
    console.log(maderas[i].textContent);
}
console.log("Con forEach")
maderas.forEach(function(tipoMadera){
    console.log(tipoMadera.textContent);
});

console.log("Con for of");
for (let tipoMadera of maderas){
    console.log(tipoMadera.textContent);
}
