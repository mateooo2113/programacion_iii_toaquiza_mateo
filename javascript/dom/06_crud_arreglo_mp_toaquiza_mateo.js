let muebles = [
    {
        id: 1,
        nombre: "Mesa de Comedor",
        madera: "Roble",
        estado: "Pendiente"
    },
    {
        id: 2,
        nombre: "Mesa de Comedor",
        madera: "Roble",
        estado: "En proceso"
    },
    {
        id: 3,
        nombre: "Mesa de Comedor",
        madera: "Roble",
        estado: "Entregado"
    },
    {
        id: 4,
        nombre: "Mesa de Comedor",
        madera: "Roble",
        estado: "Pendiente"
    }
]

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const madera = document.getElementById("madera");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");
const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");

function mostrarMuebles(){
    contenedor.replaceChildren();
    muebles.forEach(function(mueble){
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        const titulo = document.createElement("h3");
        titulo.textContent = mueble.nombre;
        const parrafoMadera = document.createElement("p");
        parrafoMadera.textContent="Madera: " + mueble.madera;
        const estado = document.createElement("p");
        estado.textContent = "Estado: " + mueble.estado;
        const acciones = document.createElement("div");
        tarjeta.classList.add("acciones");
        const botonEditar= document.createElement("button");
        botonEditar.textContent="Editar";
        botonEditar.addEventListener("click", function(){
            editarMueble(mueble.id)
        });
        botonEditar.classList.add("editar");
        const botonEliminar= document.createElement("button");
        botonEliminar.textContent="Eliminar";
        botonEliminar.classList.add("eliminar");
        botonEliminar.addEventListener("click", function(){eliminarMueble(mueble.id)});
        acciones.append(botonEditar,botonEliminar);
        tarjeta.append(titulo, parrafoMadera, estado, acciones);
        contenedor.appendChild(tarjeta);
    });
}


function eliminarMueble(id) {
    const mueble = muebles.find(function (m){
        return m.id == id
    })
    const confirmar = confirm ("¿Eliminar  a" + mueble.nombre + "?");
    if (!confirmar){
        return
    }
    muebles = muebles.filter (function (mueble) {
        return mueble.id!==id;
    })
    mostrarMuebles();

}
idEditando = null;
function editarMueble(id){
    const mueble = muebles.find(function(m){
        return m.id == id
    })
    nombre.value = mueble.nombre;
    madera.value = mueble.madera;
    estado.value = mueble.estado;
    idEditando= id;
    guardar. textContent = "Editar";
    cancelar.hidden = false;
    nombre.focus()
}


mostrarMuebles();

siguienteId = 4;
formulario.addEventListener("submit", function (event){
    event.preventDefault();
    const nombreMueble = nombre.value.trim();
    const maderaMueble = madera.value;
    const estadoMueble = estado.value;
    if(idEditando === null){
    const nuevoMueble = {
        id: siguienteId,
        nombre: nombreMueble,
        madera: maderaMueble,
        estado: estadoMueble,
    }
    siguienteId++;
    muebles.push(nuevoMueble);
    mostrarMuebles();}
    else {
        const mueble = muebles.find(function (m){
            return m.id == idEditando
        })
        mueble.nombre = nombreMueble;
        mueble.madera = maderaMueble;
        mueble.estado = estadoMueble;
    }
    mostrarMuebles()
    limpiarFormulario()
});

function limpiarFormulario (){
    formulario.reset();
    idEditando = null;
    guardar.textContent = "Agregar";
    cancelar.hidden = true;
}

cancelar.addEventListener("click", function(){
    limpiarFormulario()
});
