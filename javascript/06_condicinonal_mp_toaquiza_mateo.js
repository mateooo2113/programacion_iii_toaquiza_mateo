console.log("Pedido de muebles DecoWood");

let tablasObjetivo = 200;
let tablasCortadas = 150;
let barnizInicial = 1000;
let barnizGastado = 800;
let carpinteroHerido = "si";
let maquinaAveriada = "no";
let bonificacion = 0;

let porcentajeCumplimiento = (tablasCortadas / tablasObjetivo) * 100;
let barnizRestante = barnizInicial - barnizGastado;

console.log("Resultados del pedido:");

if (porcentajeCumplimiento >= 90) {
    console.log("Pedido cumplido con éxito");
} else if (porcentajeCumplimiento > 70 && porcentajeCumplimiento < 90) {
    console.log("Pedido cumplido parcialmente");
} else if (porcentajeCumplimiento > 50 && porcentajeCumplimiento <= 70) {
    console.log("Pedido regular, se requiere mejorar");
} else {
    console.log("Pedido fallido");
}

console.log("Evaluación de bonificación por desempeño");

if (porcentajeCumplimiento >= 90 && barnizRestante >= 200) {
    bonificacion = 1000;
    console.log("Bonificación otorgada por desempeño excelente.");
} else {
    console.log("No se otorga bonificación por desempeño.");
}

console.log("Entrega segura del pedido al cliente");

if (carpinteroHerido === "no" && maquinaAveriada === "no") {
    console.log("Entrega segura del pedido al cliente.");
} else if (carpinteroHerido === "si" && maquinaAveriada === "no") {
    console.log("Entrega del pedido con precaución, el carpintero está herido.");
} else if (carpinteroHerido === "no" && maquinaAveriada === "si") {
    console.log("Entrega del pedido con precaución, la máquina está averiada.");
} else {
    console.log("Entrega del pedido con precaución, el carpintero está herido y la máquina está averiada.");
}

console.log("Resumen del pedido");
console.log("Tablas Objetivo:", tablasObjetivo);
console.log("Tablas Cortadas:", tablasCortadas);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Barniz Inicial:", barnizInicial);
console.log("Barniz Consumido:", barnizGastado);
console.log("Barniz Restante:", barnizRestante);
console.log("Carpintero Herido:", carpinteroHerido);
console.log("Máquina Averiada:", maquinaAveriada);
console.log("Bonificación Otorgada:", bonificacion);


