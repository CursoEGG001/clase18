/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function getFormValores() {
    // Elegir de la lista el campo que tiene el valor a mostrar
    var nombre = document.querySelectorAll("input")[0];
    console.log(nombre);
    var apellido = document.querySelectorAll("input")[1];
    console.log(apellido);

    // Crea un DIV para mostrarlos
    var desc = document.getElementById("desc");
    desc.innerHTML = `<div class="container" id="desc"><p class="display-4">Nombre: ` + nombre.value + ", Apellido: " + apellido.value + "</p></div>";

}

document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();
});