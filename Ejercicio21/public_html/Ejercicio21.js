/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var persona1 = {
    nombre: "Jimena",
    edad: 24,
    sexo: "M",
    peso: 71,
    altura: 1.70
};
var persona2 = {
    nombre: "Juan",
    edad: 25,
    sexo: "H",
    peso: 75,
    altura: 1.75
};
var persona3 = {
    nombre: "Juana",
    edad: 25,
    sexo: "M",
    peso: 57,
    altura: 1.55
};

// Array de objetos
var entidades = [persona1, persona2, persona3];

// con el for of se obtienen los datos
for (var alguno of entidades) {

    var propiedades = Object.keys(alguno);
    var html = "";

    for (var i = 0; i < propiedades.length; i++) {
        html += "<p><strong>" + propiedades[i] + "</strong>: " + alguno[propiedades[i]].toString() + "</p>";
    }

    document.getElementById("datos").innerHTML += html;

}
;   