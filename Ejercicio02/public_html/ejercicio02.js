/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function calcular() {
var radio = document.getElementById("delRadio").value;
console.log(radio);
document.getElementById("area").textContent = "El area del circulo es " + Math.PI * (radio * radio);
document.getElementById("perimetro").textContent = "El perímetro del circulo es " + Math.PI * 2 * radio;
}