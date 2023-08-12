/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// y los muestre por pantalla.

let arreglo = new Array();
arreglo = [54, 23, 43, 62, 12];
let azar = [arreglo.map((este) => {
        return Math.round(este * Math.random());
    })];
console.log(azar);
var elDiv = document.getElementById("contenido");
elDiv.appendChild(document.createElement("p"));
elDiv.insertAdjacentText("beforeend",azar.toString());
