console.log ("Rick y Morty: Funciones en JavaScript");

function abrirPortal() {
    console.log("Portal abierto. ¡Rick y Morty pueden viajar a otra dimensión!");
}
abrirPortal();


function pilotoNave(nombre) {
    console.log("El piloto"+nombre+"está listo para despegar.");
}
pilotoNave("Rick");
pilotoNave("Morty");


function recargarPistola(energiaActual, recarga) {
    let energiaTotal = energiaActual + recarga;
    if (energiaTotal > 100) {
        energiaTotal = 100;
    }
    console.log("Nivel de energía después de la recarga: " + energiaTotal + "%");
}
let energiaPistola = 50;
energiaPistola = recargarPistola(energiaPistola, 30);
energiaPistola = recargarPistola(energiaPistola, 40);


cristales = [5, 10, 15, 20, 25];
function calcularTotal(cristales) {
    let total = 0;

    for (let i = 0; i < cristales.length; i++) {
        total += cristales[i];
    }

    return total;
}

let totalCristales = calcularTotal(cristales);
console.log("Total de cristales recolectados: " + totalCristales);

cristalMisiones = [10, 20, 30, 50, 60];
function misionExitosa(cristalMisiones) {
    let exitosas = 0;

    for (let cristales of cristalMisiones) {
        if (cristales >50){
            exitosas ++;
        }
    
    }
    return exitosas;
}



