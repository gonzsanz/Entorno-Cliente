// pedir al usuario un número a través de una ventana de entrada. Comprobar si es un número. El resultado mostrarlo con una ventana emergente (alert).

const numero = prompt("Introduce un número");

if (isNaN(numero)) {
    alert("No es un número");
} else {

    alert("Es un número");
}
if (numero == "") {
    alert("No es un número");
}
