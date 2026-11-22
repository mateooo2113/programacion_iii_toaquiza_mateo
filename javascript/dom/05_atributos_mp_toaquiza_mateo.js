const mueble = document.getElementById("mueble");
const cambiar = document.getElementById("cambiar");
const verMadera = document.getElementById("verMadera");
const madera = document.getElementById("madera");

cambiar.addEventListener("click", function() {
    if (mueble.getAttribute("title") == "Mesa") {
        mueble.setAttribute("src", "../../DecoWood/imagenes/silla.jpeg");
        mueble.setAttribute("title", "Silla");
        mueble.dataset.madera = "Pino";
    } else {
        mueble.setAttribute("src", "../../DecoWood/imagenes/mesa.png");
        mueble.setAttribute("title", "Mesa");
        mueble.dataset.madera = "Roble";
    }
});

verMadera.addEventListener("click", function() {
    madera.textContent = mueble.dataset.madera;
});

const sierra = document.getElementById("sierra");
const activarSierra = document.getElementById("activarSierra");

activarSierra.addEventListener("click", function() {
    if (sierra.textContent == "Sierra Apagada") {
        sierra.style.backgroundColor = "green";
        sierra.style.color = "white";
        sierra.textContent = "Sierra Encendida";
    } else {
        sierra.style.backgroundColor = "red";
        sierra.style.color = "white";
        sierra.textContent = "Sierra Apagada";
    }
});
