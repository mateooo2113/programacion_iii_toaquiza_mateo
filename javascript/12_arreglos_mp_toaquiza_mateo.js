let carpinteros = ["Carlos", "María", "José", "Andrés", "Mateo", "Toaquiza"];
console.log("Elemento 0", carpinteros[0]);
console.log("Elemento 2", carpinteros[2]);
console.log("Elemento 5", carpinteros[5]);
console.log("Elemento 4", carpinteros[4]);
console.log("Tamaño del arreglo ", carpinteros.length);
console.log("Carpinteros: ", carpinteros);

console.log("Incluir elementos a un arreglo con Push");
carpinteros.push("Llusca");
console.log("Carpinteros: ", carpinteros);

carpinteros.unshift("Isaias");
console.log("Carpinteros: ", carpinteros);

console.log("modificar elementos a un arreglo");
carpinteros[0] = "Isaias";
console.log("Carpinteros: ", carpinteros);

console.log("Eliminar un elemento del arreglo :");
carpinteros.pop();
console.log("Carpinteros :", carpinteros);

carpinteros.shift();
console.log("Carpinteros :", carpinteros);

carpinteros.splice(1, 1);
console.log("Carpinteros :", carpinteros);
