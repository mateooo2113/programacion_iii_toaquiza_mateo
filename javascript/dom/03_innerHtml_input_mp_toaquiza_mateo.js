const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Mensaje desde el Taller DecoWood";
saludo.innerHTML = "<h1>Hola desde DecoWood con innerHtml</h1>";

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
    <h1>Carlos Pérez</h1>
    <p>Taller: Quito</p>
    <p>Especialidad: Ebanista</p>
    <p>Estado: Activo</p>
`;


const nombre = document.getElementById("nombre");
const registrar = document.getElementById("registrar");
const saludar = document.getElementById("saludo");

registrar.addEventListener("click", function() {
    console.log("Ejecutando click", nombre.value);
    saludar.textContent="Hola, " + nombre.value + "!";
});
