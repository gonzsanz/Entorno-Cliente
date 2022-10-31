/*  Desarrollar una página web en cuyo script se permita definir las siguientes variables:
miCadena="cabrales, torta del casar, idiazabal"
miCadenaMayusculas="Cabrales, Torta del Casar, Idiazabal"
Se le pedirá al cliente que escriba en un prompt la variedad de queso que prefiere.
Se mostrará un mensaje informando de la posición que ocupa en la cadena miCadena o
miCadenaMayusculas, en función de cómo lo haya escrito el cliente */


const miCadena = ["cabrales", "torta del casar", "idiazabal"];
const miCadenaMayusculas = ["Cabrales", "Torta del casar", "Idiazabal"];


const cliente = prompt("¿Que variedad de queso prefiere?")

if (miCadena.includes(cliente) || miCadenaMayusculas.includes(cliente)) {
    alert("La posicion es : " + miCadena.indexOf(cliente) || miCadenaMayusculas.indexOf(cliente));
} else {
    alert("El queso no existe")
}