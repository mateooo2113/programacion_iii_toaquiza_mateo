let nombre="Carlos";
let edad=70;
let taller="Taller Quito";
let energia=100;
let averiada=false;

let sierra = {
    nombre: "Carlos",
    edad: 70,
    taller: "Taller Quito",
    energia: 100,
    averiada: false
}

console.log("Información de la sierra de Carlos:");
console.log("Nombre del carpintero: " + sierra.nombre);
console.log("Edad del carpintero: " + sierra["edad"]);
console.log("Taller de origen: " + sierra["taller"]);
console.log("Nivel de energía: " + sierra.energia + "%");
console.log("Estado de la sierra: " + (sierra.averiada ? "Averiada" : "Operativa"));

console.log("Agregar una nueva propiedad a la sierra de Carlos");
sierra.modelo = "Sierra Circular X-2000";
console.log("Modelo de la sierra: " + sierra.modelo);
sierra["capacidadCorte"] = 5;
console.log("Capacidad de corte: " + sierra["capacidadCorte"]);
console.log("Sierra de Carlos", sierra);

console.log("Actualizar el nivel de energía de la sierra de Carlos");
sierra.energia = 80;
console.log("Nuevo nivel de energía: " + sierra.energia + "%");
sierra["averiada"] = true;
console.log("Nuevo estado de la sierra: " + (sierra.averiada ? "Averiada" : "Operativa"));
console.log("Sierra de Carlos", sierra);
console.log("Eliminar una propiedad de la sierra de Carlos");
delete sierra.capacidadCorte;
console.log("Propiedad 'capacidadCorte' eliminada.");
console.log("Sierra de Carlos", sierra);

console.log("Recorrer las propiedades de la sierra de Carlos");
for (let propiedad in sierra) {
    console.log(propiedad + ": " + sierra[propiedad]);
}



let inventario={
    tablas:10,
    barniz:5,
    clavos:6
}
let total=0;

for (let i in inventario){
    total += inventario[i]
}

console.log("total inventario "+total)