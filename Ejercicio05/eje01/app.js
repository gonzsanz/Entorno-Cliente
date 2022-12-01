
class Persona {

    constructor() {
        
    }
}


function registrar() {
    let nombre = document.getElementById("nombre").value
    let apellidos = document.getElementById("apellidos").value
    let correo = document.getElementById("correo").value
    let poblacion = document.getElementById("poblacion").value
    let provincia = document.getElementById("provincia").value

    var persona = {
        nombre: nombre,
        apellidos: apellidos,
        correo: correo,
        poblacion: poblacion,
        provincia: provincia
    }

}

function buscar() {
    document.getElementById("objeto").value = persona.nombre
}
