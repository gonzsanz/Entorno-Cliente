// Comprobar usuario y contraseña
function checkAll() {
    if (checkUser() && checkPass()) {
        alert("Usuario registrado correctamente")
    }
}

// Cancelar registro y borrar datos
function cancel() {
    alert("Cancelado")
    const user = document.getElementById("cjausuario").value = ""
    const pass = document.getElementById("cjaclave").value = ""

}

// Comprobar usuario
function checkUser() {

    const user = document.getElementById("cjausuario").value
    const no_num = "!#$%&/()=?¡.,+~@|<>"

    for (let letra of user) {
        // Comprobar que no contiene mayusculas
        if (letra === letra.toUpperCase()) {
            alert("El usuario solo puede contener minusculas y numeros")
            document.getElementById("cjausuario").value = ""
            return false
        }
        // Comprobar que no tiene espacios
        if (letra === " ") {
            alert("El usuario solo puede contener minusculas y numeros")
            document.getElementById("cjausuario").value = ""
            return false
        }
        // Comprobar que no contiene signos
        if (no_num.includes(letra)) {
            alert("El usuario solo puede contener minusculas y numeros")
            document.getElementById("cjausuario").value = ""
            return false
        }
    }

    return true

}

// Comprobar contraseña
function checkPass() {

    const pass = document.getElementById("cjaclave").value
    let mayuscula = false
    let minuscula = false
    let numero = false
    let caracter = false
    const no_num = "!#$%&/()=?¡.,+~@|<>"

    for (let letra of pass) {
        // Comprobar si contiene mayusculas
        if (letra === letra.toUpperCase()) {
            mayuscula = true
        }
        // Comprobar si contiene minusculas
        if (letra === letra.toLowerCase()) {
            minuscula = true
        }
        // Comprobar si contiene numeros
        if (!isNaN(letra)) {
            numero = true
        }
        // Comprobar no numericos
        if (no_num.includes(letra)) {
            caracter = true
        }

    }

    if (mayuscula && minuscula && numero && caracter) {
        return true
    } else {
        alert("Contraseña incorrecta")
        document.getElementById("cjaclave").value = ""
    }

    return false

}