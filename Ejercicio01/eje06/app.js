// pedir fecha y comprobar que es mayor de edad

let fecha = prompt("Introduzca su fecha de nacimiento");
let fechaActual = new Date();
let fechaNacimiento = new Date(fecha);
let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
    edad--;
}
if (edad >= 18) {
    alert("Es mayor de edad");
} else {
    alert("Es menor de edad");
}
