/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function resaltarPalabrasLargas() {

    // Obtener el contenido del área de texto.

    var compaginador = document.getElementById("contenidos");
    compaginador.innerHTML="";
    var area = document.querySelector("textarea");
    var texto = area.value;
    // Crear un array con las palabras del texto.
    var palabras = texto.split(" ");

    // Crear un array con las palabras largas.
    var palabrasLargas = palabras.filter(function (palabra) {
        return palabra.length >= 8;
    });

    // Recorrer el array de palabras largas y resaltarlas en el área de texto.
    for (var i = 0; i < palabras.length; i++) {
        let coincidencia = false;
        let marcado = "";
        for (var j = 0; j < palabrasLargas.length; j++) {

            if (palabras[i] === palabrasLargas[j]) {
                coincidencia = true;
                marcado = palabrasLargas[j];
            }

        }
        if (coincidencia) {
            compaginador.innerHTML += `<mark>${marcado}</mark> `;
        } else {
            compaginador.innerHTML += `${palabras[i]} `;
        }
    }
}


let remarca = document.getElementById("area");
remarca.addEventListener("change", () => (resaltarPalabrasLargas()));