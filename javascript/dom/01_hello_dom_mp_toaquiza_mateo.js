console.log(document);
const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Taller DecoWood";

const estado = document.getElementById("estado");
const boton = document.getElementById("botonSierra");
boton.addEventListener("click", function(){
    console.log("Ejecutando click");
    estado.textContent = "¡Sierra Encendida!";
    console.log("Texto Cambiado en el elemento estado");
    alert("Proceso de Encendido de la Sierra Terminado");
});

const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");
botonMensaje.addEventListener("click", function(){
    mensaje.textContent = "Carpintero Listo para Trabajar!";
});

let pedidos = 0;
const contador = document.getElementById("contador");
const nuevoPedido = document.getElementById("nuevoPedido");
nuevoPedido.addEventListener("click", function(){
    pedidos += 1;
    contador.textContent = pedidos;
});
