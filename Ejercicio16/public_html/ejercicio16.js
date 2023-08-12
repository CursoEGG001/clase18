/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// y los muestre por pantalla.

let arreglo = new Array();
arreglo = [54, 23, 43, 62, 12];
let azar = arreglo.map((este) => {
        return Math.round(este * Math.random());
    });
let arreglo2 = azar.map((este) => {
        return Math.round(este * Math.random());
    });
console.log(azar);
console.log(arreglo);
var elDiv = document.getElementById("contenido");
paras = document.createElement("p");
paras.setAttribute("class", "card card-safe fs-2 text-center");
elDiv.appendChild(paras);
paras.insertAdjacentText("beforeend", azar.toString());
paras2 = document.createElement("span");
paras2.setAttribute("class", "card fs-3 text-center");
elDiv.appendChild(paras2);
paras2.insertAdjacentText("beforeend", arreglo2.toString());