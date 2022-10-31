// Calcula el factorial de un número

let num = prompt("Introduce un número");


    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *=  i;
    }

alert ("El factorial de " + num + " es " + resultado);