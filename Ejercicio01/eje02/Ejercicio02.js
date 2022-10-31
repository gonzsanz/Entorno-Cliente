
const nombre = prompt("Introduzca su nombre")
const apellido1 = prompt("Introduzca su primer apellido")
const apellido2 = prompt("Introduzca su segundo apellido")
let salario = parseFloat(prompt("Introduzca su salario"))
const edad = parseInt(prompt("Introduzca su edad"))


if (salario > 2000) {
    salario = salario;
} else if (salario > 1000 && salario < 2000) {
        if (edad > 45) {
            salario += salario * 0.03;
        } else if (edad <= 45) {
            salario += salario * 0.10;
    }
    
} else if (salario < 1000) {
        if (edad <= 30) {
            salario = 1100;
        } else if (edad > 30 && edad < 45) {
            salario += salario * 0.03;
        } else if (edad >= 45) {
            salario += salario * 0.15;
        }
}

alert(nombre+" "+apellido1+" "+apellido2+" "+edad + " "+salario); 

