/* Crear una aplicación web que pida, a través de un prompt, constantemente números hasta
que el usuario indique el número 0.
Al final indicará la media de los números introducidos.
Si en algún momento no es un número lo que escribe el usuario, se le pide de nuevo.
Si cancela cualquier cuadro de lectura, se termina la ejecución. */




let numero;
let media = 0;
let cont = Number();

while (numero != 0) {
    numero = prompt("Introduzca numeros o 0 para terminar");

    if (numero == null) {

        break;
    }
    numero = parseInt(numero);
    if (isNaN(numero)) {
        alert("No es un numero");
    } else {
        media += numero;
        cont++;
    }
    if (numero == 0) {
        cont--;
    }

}

media = media / cont;

alert(`La media de números es de ${media}`)