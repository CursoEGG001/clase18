/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var suma = 0;
var lectura = parseInt(prompt("Ingrese números: "));
var cnt = 0;
var max = 0;
var min = 999999999999;
while (lectura !== 0) {
    let num = lectura;
    suma += num;
    cnt += 1;
    if (max < num)
        max = num;
    if (min > num)
        min = num;
    lectura = parseInt(prompt("Ingrese números: "));
}

window.alert("Número Maximo: " + max +
        "\n" + "Número Mínimo: " + min +
        "\n" + "Promédio: " + parseFloat((suma / cnt)));
console.log(cnt);
console.log(suma);
console.log(suma/cnt);
