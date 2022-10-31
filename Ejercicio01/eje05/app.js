let hoy = new Date();
let final = new Date("November 20, 2022");

//Obtener tiempo en milisegundos desde hoy hasta el 20 de noviembre de 2022
let tiempo = final.getTime() - hoy.getTime();
console.log(tiempo);

// pasar milisegundos a formato fecha
let dias = Math.floor(tiempo / (1000 * 60 * 60 * 24));
console.log(dias);

// hacer un triangulo con asteriscos
let asteriscos = "";
for (let i = 0; i < 10; i++) {
    asteriscos += "*";
    console.log(asteriscos);
}
