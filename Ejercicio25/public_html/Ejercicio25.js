/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function getFormValores() {
    // Get the values of the Nombre and Apellido fields
    var nombre = document.querySelectorAll("input")[0];
    console.log(nombre);
    var apellido = document.querySelectorAll("input")[1];
    console.log(apellido);

    // Create a div to display the values
    var desc = document.getElementById("desc");
    desc.innerHTML = `<div class="container" id="desc"><p class="display-4">Nombre: ` + nombre.value + ", Apellido: " + apellido.value + "</p></div>";

}

document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();
});