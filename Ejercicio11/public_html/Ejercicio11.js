/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var cadena = prompt("Escriba una frase para buscar la palabra mas larga");

let procesado = cadena.split(" ");
let max = 0;
var final = "";
for (var palabra of procesado) {
    if (palabra.length > max) {
        final = palabra;
        max = palabra.length;
    }
    
}

var salida = document.getElementById("salida");
salida.innerHTML = `<div class="card card-safe">El "${cadena}" convertido tiene "${final}" como la palabra mas larga</div>`;
