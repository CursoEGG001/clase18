/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var radio = parseFloat(prompt("Ingrese un radio"));

function calcArea(radio) {
    window.alert("Math.pow(radio, 2) = " +(Math.pow(radio, 2)));
}

function calcPerimetro(radio) {
    window.alert("2 * Math.PI * radio = " + (2 * Math.PI * radio));
}

calcArea(radio);
calcPerimetro(radio);

var elTag = document.getElementById("entrada");


elTag.insertAdjacentHTML("beforeend",`<canvas id="myCanvas" width="500" height="500"></canvas>`);
var dibujo=document.getElementById("myCanvas");
var ctx = dibujo.getContext("2d");

// Draw a circle
ctx.beginPath();
ctx.arc(250, 250, radio, 0, Math.PI * 2);
ctx.stroke();