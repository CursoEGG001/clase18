/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

class Persona {
    nombre;
    apellido;
    edad;
    sexo;
    peso;
    altura;
}

var sujeto=new Persona();
sujeto.nombre="Exposito";
sujeto.apellido="Nonato";
sujeto.edad=100;
sujeto.altura=1.76;
sujeto.peso=64.6;
sujeto.sexo="H";

 var salida = document.getElementById("salida");
 salida.innerHTML = `Nombre: ${sujeto.nombre}<br>
Edad: ${sujeto.edad} <br>
Sexo: ${sujeto.sexo} <br>
Peso: ${sujeto.peso} <br>
Altura: ${sujeto.altura}`;

