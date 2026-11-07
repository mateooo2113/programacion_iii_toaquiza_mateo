console.log("Encendiendo máquinas del taller..." );
let maquina = 1;
while (maquina <= 5) {
    console.log("Encendiendo máquina " + maquina + ".");
    maquina++;
}
console.log("Todas las máquinas han sido encendidas.");


console.log("Cuenta regresiva para la entrega del pedido de Carlos");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " segundos para la entrega del pedido de Carlos");
    i--;
}
console.log("Recargar la batería del taladro de María");
let energia = 50;
let recarga = 10;
let totalRecarga = 0;
while (energia < 100) {
    energia += recarga;
    totalRecarga += recarga;
    console.log("Recargando la batería del taladro de María. Nivel de energía actual: " + energia + "%");
}
console.log("La batería del taladro completamente recargada despues de "
    + totalRecarga + " recargas");
console.log("Consumo de barniz del taller DecoWood");
let barniz = 100;
let consumo = 10;
let muebles = 0;
while (barniz >= consumo) {
    barniz -= consumo;
    muebles++;
    console.log("Mueble " + muebles + ". Barniz restante: " + barniz + " unidades");
    if (barniz < 50) {
        console.log("Advertencia: Barniz bajo. Nivel actual: " + barniz + " %");
    }
}
console.log("No hay suficiente barniz para otro mueble.");
console.log("Total de muebles barnizados: " + muebles);

console.log("Realizar cortes de madera dura con Do...While");
let energiaSierra = 50;
do{
    console.log("Realizando corte de madera dura. Nivel de energía actual: " + energiaSierra + "%");
    energiaSierra -= 15;

} while (energiaSierra > 0);
console.log("No hay suficiente energía para realizar mas cortes.");

console.log("Comprar una sierra eléctrica para José");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorro actual: " + ahorro + " unidades");
} while (ahorro < meta);
console.log("Meta alcanzada en " + semanas + " semanas. José puede comprar la sierra eléctrica.");