
let num = Math.floor(Math.random() * 1000) + 1;
let intentos = 0;
let numUsuario = 0;

do {
    numUsuario = prompt("Introduce un número");
    intentos++;
    if (numUsuario > num) {
        alert("El número es menor");
    } else if (numUsuario < num) {
        alert("El número es mayor");
    }
} while (numUsuario != num);

alert("Has acertado en " + intentos + " intentos");

