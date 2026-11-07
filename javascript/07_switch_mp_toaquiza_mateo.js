let taller = 4;
switch (taller) {
    case 1:
        console.log("Estas en el taller de Quito");
        break;
    case 2:
        console.log("Estas en el taller de Cuenca");
        break;
    case 3:
        console.log("Estas en el taller de Guayaquil");
        break;
    case 4:
        console.log("Estas en el taller de Ambato");
        break;
    default:
        console.log("No se que taller es ese");
}

let carpintero = "Carlos";
switch (carpintero) {
    case "Carlos":
    case "María":
        console.log("¡Hola Carlos y María! ¿Preparados para el nuevo pedido?");
        break;
    case "José":
        console.log("¡Hola José! ¿Listo para lijar la madera?");
        break;
    default:
        console.log("No reconocemos a este carpintero, ¡ten cuidado!");
}

let energia = 50;
switch (true) {
    case (energia > 0 && energia <= 25):
        console.log("Tienes poca energía para la jornada.");
        break;
    case (energia > 25 && energia <= 50):
        console.log("Tienes algo de energía para la jornada.");
        break;
    case (energia > 50 && energia <= 75):
        console.log("Tienes suficiente energía para la jornada.");
        break;
    case (energia > 75  && energia <= 100):
        console.log("Tu energía es alta, ¡a trabajar la madera!");
        break;
    default:
        console.log("No tienes suficiente energía para continuar la jornada.");
}

console.log("Calculadora de tablas");
let numero1 = 10;
let numero2 = 5;
let operacion = "multiplicacion";
let resultado;
switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        console.log("Resultado de la suma:", resultado);
        break;
    case "resta":
        resultado = numero1 - numero2;
        console.log("Resultado de la resta:", resultado);
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        console.log("Resultado de la multiplicación:", resultado);
        break;
    case "division":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("Resultado de la división:", resultado);
        } else {
            console.log("Error: No se puede dividir entre cero.");
        }
        break;
    default:
        console.log("Operación no reconocida.");
}