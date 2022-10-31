/*Desarrollar una página web que pida al cliente una frase a través de una caja de texto. Y,
cada vez que el cliente haga clic sobre el botón “Ver”, deberá mostrar un carácter aleatorio
en otra caja de texto correspondiente a la frase introducida.
Por otro lado, habrá un botón que permita obtener, de manera aleatoria, el carácter de
referencia de parada. Es decir, este carácter se utilizará para poner fin a la generación
aleatoria a través de “Ver”.*/

var pos = 0;

function mostrarAleatorio() {
    const frase = document.getElementById('frase').value;
    const caracter = document.getElementById('caracter');

    caracter.value = frase.charAt(calcularPosicion(frase));

    console.log(pos);
}

function calcularPosicion(frase) {

    if (pos > 0) {
        pos = Math.floor(Math.random() * pos);
    } else {
        pos = Math.floor(Math.random() * frase.length);
    }
    return pos;
}