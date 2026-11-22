let tablas = [30, 50, 70, 40];
let posicion = 2;
let nuevaMedida = 100;
for (let i = 0; i < tablas.length; i++) {
    console.log("Posicion",i);
    console.log("Tabla:",tablas[i]);
    if (posicion>= 0 && posicion < tablas.length) {
            tablas[posicion] = nuevaMedida;
        }else {
                console.log("Posición no valida");
            }
}
console.log(tablas);

let carpinteros =[

    {id:1,nombre:"Carlos",energia:99,edad:70},
    {id:2,nombre:"María",energia:80,edad:14},
    {id:3,nombre:"Mateo",energia:70,edad:17},
];

for (let carpintero of carpinteros){
    console.log("ID",carpintero.id);
    console.log("Nombre",carpintero.nombre);
    console.log("Energia",carpintero.energia);
    console.log("Edad",carpintero.edad);
};


console.log("Carlos organiza sus pedidos");
pedidos = [
    {
        carpintero:"Carlos",
        tablas:[30,50,60]
    },

    {
        carpintero:"María",
        tablas:[20,30,30]
    },

    {
        carpintero:"José",
        tablas:[90,80,70]
    },
];


for (let pedido of pedidos){
    totalTablas=0;
    console.log("Carpintero",pedido.carpintero);
    for (let tabla of pedido.tablas){
        console.log("Tablas cortadas",tabla);
        totalTablas += tabla;
    }

    console.log("Total de tablas cortadas por",pedido.carpintero,totalTablas);
};


let tablasOriginales = [30,50,70,40];
let tablasDobles =tablasOriginales.map(elemento=>{
    return elemento*2;
});

console.log(tablasDobles);
let validas = tablasOriginales.filter(tabla=> tabla>=50);
let resultado=tablasOriginales.reduce((acumulador,elemento)=>{
    return acumulador+elemento;
});
