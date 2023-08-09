/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

numero = prompt("Ingresa un número: ");

if (esPar(numero)) {
  console.log("El número es par.");
} else if (numero === 0) {
  console.log("El número no es par ni impar.");
} else {
  console.log("El número es impar.");
}
