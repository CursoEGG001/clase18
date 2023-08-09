/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let respuesta = prompt("¿Quieres continuar? (S/N)");
var escribir = document.getElementById("respuesta");

if (respuesta === "S" || respuesta === "N") {
    console.log("CORRECTO");

    escribir.textContent = "Correcto";
} else {
    console.log("INCORRECTO");

    escribir.textContent = "InCorrecto";
}
