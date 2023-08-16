/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var mensaje = prompt("¿Qué mensaje quieres mostrar?");
function mostrarMensaje() {
    presentar = document.getElementById("contenido");
    presentar.innerHTML = `<h1>${mensaje}</h1>`;
    //alert(mensaje);
}

document.getElementById("boton").addEventListener("click", mostrarMensaje);
