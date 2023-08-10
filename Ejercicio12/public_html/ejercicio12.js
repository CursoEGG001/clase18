/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var dato = prompt("Ingresa un dato:");

const funcionFlecha = (aux) => {
    return typeof aux;
};

/* alert("El dato es del tipo "+ funcionFlecha(dato)); */

var salida = document.getElementById("salida");

salida.innerHTML = "El dato es del tipo "+ funcionFlecha(dato);
