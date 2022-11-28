import { listaRestaurantes } from "./clase.js";

for (let i = 0; i < listaRestaurantes.length; i++) {
    document.querySelector(".container").appendChild(listaRestaurantes[i].mostrarRestaurante());
}