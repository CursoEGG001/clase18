/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const matriz = [[3], [6], [9], [12], [15]];
const nuevoArray = matriz.map(arr => arr[0] + (3));
console.log(nuevoArray);
var datos = document.getElementById("datos");
datos.insertAdjacentHTML("beforeend", `<div class="row border"><div class="col cols-auto p-4">${nuevoArray}</div></div>`);
