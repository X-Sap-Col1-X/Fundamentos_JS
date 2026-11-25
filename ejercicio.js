let a, b;

a = 20;
b = 30;

console.log(a == b); // False
console.log(a < b); // True
console.log(a > b); // False

let pais,edad;
pais = prompt("De que pais eres");
edad = prompt("Que edad tienes");

if (pais == "Colombia" && edad >= 18){
    document.writeln("Eres ciudadano del pais de : ", pais);
}else {
    document.writeln("No eres ciudadano del pais de Colombia o no eres mayor de edad");
}

// El operador || (OR) se utiliza para evaluar si al menos una de las condiciones es verdadera. 
// Si alguna de las condiciones es Verdadera, el resultado sera verdadero. Si todas las condiciones son falsas, 
// el resultado sera falso.

let day, month, year
day = prompt("Ingrese el Dia de su nacimiento (1-31):");
month = prompt("Ingrese el Mes de su nacimiento (1-12):");
year = prompt("Ingrese el Año de su nacimiento (por ejemplo 2023):")

// Convertir los valores ingresados a numeros
day = parseInt(day);
month = parseInt(month);
year = parseInt(year);

// Validar si el dia, mes y año son validos
if (isNaN(day) || isNaN(month) || isNaN(year)) {
    document.writeln("Ingrese solo numeros")
} else if (month == 1 || month == 2 || month == 3){
    document.writeln("Pertenece al primer trimestre del año")
} else {
    document.writeln("No pertenece al primer trimestre del año")
}
