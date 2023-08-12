/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var arreglo1 = new Array(5);
elementos = document.getElementById("espacio");
listado = document.createElement("ul");
listado.setAttribute("class", "border mt-2");
elementos.appendChild(listado);

for (var i = 0; i < arreglo1.length; i++) {
    arreglo1[i] = prompt(`Ingrese el dato ${i + 1}:`);

    let info = document.createElement("li");
    info.setAttribute("class", "fs-2");
    info.setAttribute("id", `elItem_${arreglo1[i]}`);
    info.innerHTML = arreglo1[i];
    listado.appendChild(info);
}
console.log("Los datos actuales: \n" + arreglo1.toString());

console.log("Los datos ahora: \n" + arreglo1.slice(0, 3)); //el cuarto (posicion 3) no se incluye.
for (var dato in arreglo1.slice(0,3)) {
    console.log(arreglo1.slice(0,3)[dato]);
    elempag=document.getElementById(`elItem_${arreglo1.slice(0,3)[dato]}`);
    elempag.setAttribute("class","fs-4");
    elementos.appendChild(elempag);
}
