import {listaRestaurantes} from "./clase.js"

let rest = localStorage.getItem('titulo');

for (let i = 0; i < listaRestaurantes.length; i++) {
    if (rest == listaRestaurantes[i].titulo) {
        let contenedor = document.querySelector(".container");
        contenedor.style.display = "flex";
        contenedor.style.justifyContent = "center";
        contenedor.style.alignItems = "center";

        contenedor.appendChild(listaRestaurantes[i].mostrarRestaurante());
    }
}