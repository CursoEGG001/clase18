/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var reg = "";
var manejaevento1 = document.getElementById("radius");
var manejaevento2 = document.getElementById("radiusText");
var contenido = document.getElementById("contenidos");

function calculaArea() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Selecciona el radio en el campo o en el slider
    var rad = Math.sqrt(parseFloat(document.querySelector("#radius").value) / Math.PI);
    var chg = document.querySelector("#radiusText").value;
    if (reg !== chg) {
        rad = Math.sqrt(parseFloat(document.querySelector("#radiusText").value) / Math.PI);
        reg = document.querySelector("#radiusText").value;
    }

    // Hace el Circulo
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, rad, 0, 2 * Math.PI);
    ctx.fillStyle = "goldenrod";
    ctx.fill();

    contenido.innerHTML = parseFloat(rad).toFixed(4) + " sería el radio ~";
}

manejaevento1.addEventListener("input", () => calculaArea()());
manejaevento2.addEventListener("input", () => calculaArea()());
