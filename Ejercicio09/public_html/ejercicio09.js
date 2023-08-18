/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
//espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
//funcionamiento de la función Substring().

var cadena = prompt("Ingrese un texto para formatear:");
var resultado = "";
for (var i = 0; i < cadena.length; i++) {
    resultado += cadena.substring(i, i + 1) + " ";
}
window.alert(resultado + "\n Sería la cadena final");
document.body.innerHTML = "<h3>" + resultado + "</h3>";