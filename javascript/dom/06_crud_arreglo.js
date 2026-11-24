let personajes = [
    {
        id:1,
        nombre:"Rick Sanchez",
        dimension:"C-137",
        estado:"Vivo"
    },
    {
        id:2,
        nombre:"Morty Smith",
        dimension:"C-131",
        estado:"Muerto"
    },
    {
        id:3,
        nombre:"Summer Smith",
        dimension:"C-131",
        estado:"Desconocido"
    }
];


const formulario = document.getElementById("formulario");
const nombre=document.getElementById("nombre");
const dimension=document.getElementById("dimension");
const estado=document.getElementById("estado");
const guardar=document.getElementById("guardar");
const cancelar=document.getElementById("cancelar");

const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

function mostrarPersonajes() {
    contenedor.replaceChildren();
    personajes.forEach(function(personaje) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        const titulo = document.createElement("h3");
        titulo.textContent = personaje.nombre;
        const parrafoDimension = document.createElement("p");
        parrafoDimension.textContent = "Dimensión: " + personaje.dimension;
        const parrafoEstado = document.createElement("p");
        parrafoEstado.textContent = "Estado: " + personaje.estado;
        const acciones = document.createElement("div");
        tarjeta.classList.add("acciones");
        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.classList.add("editar");
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.classList.add("eliminar");
        acciones.append(botonEditar, botonEliminar);
        tarjeta.append(titulo,parrafoDimension,parrafoEstado, acciones);
        contenedor.appendChild(tarjeta);
    });
}

mostrarPersonajes();

formulario.addEventListener("submit"), function(event) {
    event.preventDefault();
    const nombrePersonaje = nombre.value.trim();
    const dimensionPersonaje = dimension.value;
    const estadoPersonaje = estado.value;
    const nuevoPersonaje = {
        id: siguienteId,
        nombre: nombrePersonaje,
        dimension: dimensionPersonaje,
        estado: estadoPersonaje,
    }
    siguienteId++;
    personajes.push(nuevoPersonaje);
}