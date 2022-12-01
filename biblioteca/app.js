
let arrayLibros = [];


function guardarLibro() {
    let titulo = document.getElementById("titulo").value
    let autor = document.getElementById("autor").value
    let editorial = document.getElementById("editorial").value
    let annio = document.getElementById("annio").value

    let libro = {
        titulo: titulo,
        autor: autor,
        editorial: editorial,
        annio: annio
    }

    arrayLibros.push(libro);
    document.getElementById("titulo").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("editorial").value = ""
    document.getElementById("annio").value = ""
    console.log(libro);
    console.log(arrayLibros);
}

function mostrarLibros() {

    arrayLibros.forEach(a => {
        document.getElementById("mostrar").value += a.titulo
    });

}