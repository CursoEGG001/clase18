/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function resaltarPalabrasLargas(area) {
    // Obtener el contenido del área de texto.
    var compaginador = document.getElementById("contenidos");
    var texto = area.value;

    // Crear un array con las palabras del área de texto.
    var palabras = texto.split(" ");

    // Crear un array con las palabras largas.
    var palabrasLargas = palabras.filter(function (palabra) {
        return palabra.length >= 8;
    });

    area.value = "";

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
            compaginador.innerHTML += `<br><mark>${marcado}</mark> `;
        } else {
            compaginador.innerHTML += palabras[i] + " ";
        }
    }
}

let remarca = document.querySelector("textarea");
remarca.addEventListener("input",resaltarPalabrasLargas(document.getElementById("area")));
