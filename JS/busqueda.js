import { listaRestaurantes } from "./clase.js";

const buscar = () => {
    let rest = document.querySelector(".list-rest");
    let verificar = false;

    for (let i = 0; i < listaRestaurantes.length; i++) {
        if (rest.value === listaRestaurantes[i].titulo) {
            verificar = true
        }
    }

    if (!verificar) {
        rest.value = "No hay resultados"; 
    }
    else {
        window.location.href = "restaurante.html";
        let titulo = window.localStorage;
        let nombre = rest.value;
        titulo.setItem('titulo', nombre);
    }
}

document.getElementById("boton").addEventListener("click", buscar);