/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var isbn;
var autor;
var titulo;
var paginas;
var Libro = {
    ISBN: isbn,
    Autor: autor,
    Titulo: titulo,
    NumPag: paginas,
    cargaLibro: function (elISBN, elAutor, elTitulo, cuantaPag) {
        this.ISBN = elISBN;
        this.Autor = elAutor;
        this.Titulo = elTitulo;
        this.NumPag = cuantaPag;
    }
};
function creaLibro(librito) {
    var info = document.getElementById("info");
    var observador = document.getElementById("entrada");
    info.textContent = "Ingrese un ISBN:";
    observador.setAttribute("placeholder", "ISBN");
    document.getElementById("entrada").addEventListener("change", () => {
        switch (observador.getAttribute("placeholder")) {
            case "ISBN":
                info.textContent = "Ingrese un Autor:";
                isbn = parseInt(observador.value);
                observador.setAttribute("placeholder", "Autor");
                break;
            case "Autor":
                autor = observador.value;
                info.textContent = "Ingrese un Título del libro:";
                observador.setAttribute("placeholder", "Titulo");
                break;
            case "Titulo":
                titulo = observador.value;
                info.textContent = "Cuantas páginas tiene:";
                observador.setAttribute("placeholder", "NumPag");
                break;
            case "NumPag":
                paginas = parseInt(observador.value);
                info.textContent = "Presione enter para iniciar de nuevo...";
                observador.setAttribute("placeholder", "Listo!");
                librito.cargaLibro(isbn, autor, titulo, paginas);
                break;
            default:
                console.log(observador.getAttribute("placeholder"));
                observador.setAttribute("placeholder", "ISBN");
                console.log(librito);
                mostrarLibro(librito);
                break;
        }
        console.log(observador.value);
    });
}

function mostrarLibro(libro) {
    window.alert(`Autor: ${libro.Autor}
Titulo: ${libro.Titulo}
Páginas: ${libro.NumPag}
ISBN ${libro.ISBN}`);
}

var ElTapaDura = Libro;
creaLibro(ElTapaDura);
