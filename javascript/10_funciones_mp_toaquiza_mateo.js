console.log ("DecoWood: Funciones en JavaScript");

function abrirTaller() {
    console.log("Taller abierto. ¡Los carpinteros pueden empezar a trabajar!");
}
abrirTaller();


function carpinteroTurno(nombre) {
    console.log("El carpintero "+nombre+" está listo para trabajar.");
}
carpinteroTurno("Carlos");
carpinteroTurno("María");


function recargarTaladro(energiaActual, recarga) {
    let energiaTotal = energiaActual + recarga;
    if (energiaTotal > 100) {
        energiaTotal = 100;
    }
    console.log("Nivel de energía después de la recarga: " + energiaTotal + "%");
    return energiaTotal;
}
let energiaTaladro = 50;
energiaTaladro = recargarTaladro(energiaTaladro, 30);
energiaTaladro = recargarTaladro(energiaTaladro, 40);


tablas = [5, 10, 15, 20, 25];
function calcularTotal(tablas) {
    let total = 0;

    for (let i = 0; i < tablas.length; i++) {
        total += tablas[i];
    }

    return total;
}

let totalTablas = calcularTotal(tablas);
console.log("Total de tablas cortadas: " + totalTablas);

tablasPedidos = [10, 20, 30, 50, 60];
function pedidoExitoso(tablasPedidos) {
    let exitosos = 0;

    for (let tablas of tablasPedidos) {
        if (tablas >50){
            exitosos ++;
        }

    }
    return exitosos;
}




