/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var persona = {
  nombre: "Juan",
  edad: 25,
  sexo: "H",
  peso: 75,
  altura: 1.75
};

var propiedades = Object.keys(persona);

var html = "";

for (var i = 0; i < propiedades.length; i++) {
  html += "<p>" + propiedades[i] + ": " + persona[propiedades[i]].toString() + "</p>";
}

document.getElementById("datos").innerHTML = html;

     