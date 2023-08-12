/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var arreglo1 = new Array(5);
for (var i = 0; i < arreglo1.length; i++) {
    arreglo1[i]= prompt(`Ingrese el dato ${i+1}:`);
}
window.alert("Los datos actuales: \n"+arreglo1.toString());
window.alert("Los datos ahora: \n"+arreglo1.slice(0,3)); //el cuarto (posicion 3) no se incluye.

