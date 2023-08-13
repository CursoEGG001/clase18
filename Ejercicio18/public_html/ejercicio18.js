/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var valores = [true, 5, false, "hola", "adios", 2];
// a) Determine cual de los dos elementos de texto es mayor

        console.log(valores[3] + "><" + valores[4] + " - 4 " + (valores[3].length < valores[4].length ? "Será Mayor" : "No es mayor"));
        resultados1 = document.getElementById("resultados1");
        resultados1.innerHTML = `Comparando "${valores[3]}" con "${valores[4]}" tenemos que 4 ${(valores[3].length < valores[4].length ? "Será Mayor" : "No es mayor")}`;
// b) Utilizando exclusivamente los dos valores booleanos del array, determine los operadores necesarios para obtener un resultado true y otro resultado false
        resultados2 = document.getElementById("resultados2");
        resultados2.innerHTML = `Comparando "${valores[0]}" y "${valores[2]}" tenemos que ${(valores[0] && valores[2] ? "Será Verdadero" : "es falso")}
Comparando "${valores[0]}" o "${valores[2]}" tenemos que ${(valores[0] || valores[2] ? "Será Verdadero" : "es falso")}`;
// c) Determine el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
        resultados3 = document.getElementById("resultados3");
        resultados3.innerHTML = (`<p>${valores[1]} + ${valores[5]} = ${(valores[1] + valores[5])}</p>
        <p>${valores[1]} - ${valores[5]} = ${(valores[1] + valores[5])}</p>
        <p>${valores[1]} * ${valores[5]} = ${(valores[1] * valores[5])}</p>
<p>${valores[1]} / ${valores[5]} = ${(valores[1] / valores[5])}</p>
<p>${valores[1]} % ${valores[5]} = ${(valores[1] % valores[5])}</p>`);
        