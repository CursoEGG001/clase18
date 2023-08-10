/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Escribir una función flecha que reciba una palabra y la devuelva al revés.

var cadena = prompt("Escriba una cadena a invertir");

const cadenar = (victima) => (victima.split("").reverse().join(""));
alert("Esto sería: \n" + cadenar(cadena));