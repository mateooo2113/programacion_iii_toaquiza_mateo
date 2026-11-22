console.log("Ciclo For");

for (let i = 1; i <= 5; i++) {
    console.log("Iteración número:", i);
}

console.log("Fin del ciclo For");

console.log("Cuenta regresiva para la entrega del pedido de Carlos con mensaje final");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡Pedido de Carlos entregado!");
    } else {
        console.log("Faltan " + i + " segundos para la entrega del pedido de Carlos");
    }
}

console.log("Nivel de energia de la sierra")
let energia = 50;
for (let i = 0; i <= 100; i += 10) {
    if (energia + i > 100) {
        console.log("Nivel de energía actual: " + (energia + i) + "%");
    }
}

let consumoPorMueble = 10;
let totalConsumido = 0;
for (let mueble = 1; mueble <= 5; mueble++) {
    totalConsumido += consumoPorMueble;
    console.log("Mueble " + mueble);
    console.log ("totalConsumido " + totalConsumido + " unidades de barniz");

}
console.log("Total consumido: "+ totalConsumido + " unidades");

console. log("Promedio de tablas cortadas");
let totalTablas = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let tablas = dia *5+5;
    totalTablas += tablas;
    console.log("Día " + dia + ": "+ tablas + " tablas cortadas");
}

console.log ("Total de tablas cortadas: " + totalTablas);
console.log("Promedio de tablas por dia: "+ (totalTablas/dias).toFixed(2));

console.log("Maderas Delicadas");
let resistentes = 0;
let delicadas = 0;
for (let madera = 1; madera <= 10; madera++) {
    if (madera % 2 === 0) {
        console.log("Madera " + madera + " es delicada");
        delicadas++;
    } else {
        console.log("Madera " + madera + " es resistente");
        resistentes++;
    }
}
console.log("Total de maderas resistentes: " + resistentes);
console.log("Total de maderas delicadas: " + delicadas);

console.log("Tablas cortadas por Carlos");
let tablasCortadas = [35,60,45,80,20,90,55];
let total = 0;
for (let i = 0; i < tablasCortadas.length; i++) {
    total += tablasCortadas[i];
    console.log("Día " + (i + 1) + ": " + tablasCortadas[i] + " tablas cortadas");
}
console.log("Total de tablas cortadas: " + total);


console.log("Recorrer Carpinteros con for ...of")
const carpinteros = ["Carlos", "María", "José", "Andrés", "Lucía"];
for (let carpintero of carpinteros) {
    console.log("Carpintero: " + carpintero);
}

let taller= {
    nombre: "Taller DecoWood",
    barniz: 100,
    produccion: 500,
    equipo: ["Carlos", "María", "José"]
};
console.log("Recorrer propiedades de un objeto con for ...in");
for (let propiedad in taller) {
    console.log(propiedad + ": " + taller[propiedad]);
    if (propiedad === "equipo") {
        console.log("Miembros del equipo:");
        for (let miembro of taller[propiedad]) {
            console.log("- " + miembro);
        }
    }
}
for (let integrante of taller.equipo) {
    console.log("Integrante: " + integrante);
}

let pedidos = [
    { nombre: "Pedido 1", tablas: 90, meta: 100, carpintero: "Carlos" },
    { nombre: "Pedido 2", tablas: 80, meta: 100, carpintero: "María" },
    { nombre: "Pedido 3", tablas: 95, meta: 100, carpintero: "José" }
];

let exitosos = 0;
for (let pedido of pedidos) {
    let porcentaje = (pedido.tablas / pedido.meta) * 100;
    console.log(pedido.nombre + " completado por " + pedido.carpintero + " con un " + porcentaje.toFixed(2) + "%");
    if (porcentaje >= 90) {
        exitosos++;
    } else {
        console.log(pedido.nombre + " no fue exitoso, se cortaron menos del 90% de tablas.");
    }
}
console.log("Número de pedidos exitosos: " + exitosos);
