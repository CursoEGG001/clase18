/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let Clima = prompt("¿cual es el clima de hoy?");
if (Clima === "NUBLADO" || Clima === "SOLEADO" || Clima === "LLUVIOSO") {
    document.getElementById("palClima").textContent = "El día está " + Clima;
} else {
    document.getElementById("palClima").textContent = "El día está bien";
}