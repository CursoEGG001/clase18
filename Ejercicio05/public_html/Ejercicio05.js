/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let option = prompt("¿Qué operación quieres realizar? (S/R/M/D): ");

if (option === "S" || option === "R" || option === "M" || option === "D") {
    let a = parseInt(prompt("Introduce el primer número: "));
    let b = parseInt(prompt("Introduce el segundo número: "));

    switch (option) {
        case "S":
            console.log(a + b);
            console.table({'a': a, 'b': b, 'resultado': a + b});
            break;
        case "R":
            console.log(a - b);
            console.table({'a': a, 'b': b, 'resultado': a - b});
            break;
        case "M":
            console.log(a * b);
            console.table({'a': a, 'b': b, 'resultado': a * b});
            break;
        case "D":
            try {
                console.log(a / b);
                console.table({'a': a, 'b': b, 'resultado': a / b});
            } catch (e) {
                console.log(e);
            }
            break;
    }
} else {
    console.log("Opción inválida.");
}