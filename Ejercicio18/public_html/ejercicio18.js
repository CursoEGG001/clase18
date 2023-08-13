/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var valores = [true, 5, false, "hola", "adios", 2];

// a) Determine cual de los dos elementos de texto es mayor

console.log(valores[3] + "><" + valores[4] + " - 4 " + (valores[3].length < valores[4].length ? "Será Mayor" : "No es mayor"));

// b) Utilizando exclusivamente los dos valores booleanos del array, determine los operadores necesarios para obtener un resultado true y otro resultado false

console.log(valores[0] && valores[2]);
console.log(valores[0] || valores[2]);

// c) Determine el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

console.log(valores[1] + valores[5]);
console.log(valores[1] - valores[5]);
console.log(valores[1] * valores[5]);
console.log(valores[1] / valores[5]);
console.log(valores[1] % valores[5]);

