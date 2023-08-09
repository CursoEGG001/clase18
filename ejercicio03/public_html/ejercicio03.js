/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var pregunta = document.getElementById("pregunta");
let respuesta = document.getElementById("respuesta");

function verificar() {
    if (pregunta.value >= 18) {
        respuesta.textContent = "Usted es mayor de edad";
    } else {
        respuesta.textContent = "Usted es menor de edad";
    }
}