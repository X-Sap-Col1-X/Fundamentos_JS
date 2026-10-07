//Operadores Matematicas

let a, b;
let c, d;

let suma, resta, mult, div, residuo, potencia;

//Obtener los datos a traves del usuario
a = prompt ('Ingrese un número: '); 
b = prompt ('Ingrese otro número: ');

// Resultados de las operaciones
suma = Number(a) + Number(b); // Aqui la operacion da un error debido a que se concatenan los datos
document.write("La suma es: ", suma,"<br>"); 
console. log("La suma es: ", suma);

resta = Number(a) - Number(b);
document.write("La resta es: ", resta, "<br>"); 
console. log("La resta es: ", resta);

mult = Number(a) * Number(b);
document.write("La multiplicacion es: ", mult, "<br>"); 
console. log("La multiplicación es: ", mult);

residuo = Number(a) % Number(b);
document.write("El residuo es: ", residuo, "<br>"); 
console. log("El residuo es: ", residuo);


//Obtener los datos a traves del Usuario
c = parseInt(prompt('Ingrese un numero: '));
d = parseFloat(prompt('Ingrese otro numero: '));

suma = c + d
resta = c - d
mult = c * d
div = c / d
residuo = c % d
potencia = c ** d

document.writeln("Los resultados de las operaciones son: ",
    "Suma", suma, '<br>',
    "Resta: ", resta, '<br>',
    "Multiplicacion: ", mult, '<br>',
    "Division: ", div, '<br>',
    "Residuo: ", residuo, '<br>',
    "Potencia: ", potencia, '<br>',
);

console.log("Las operaciones resueltas son: ",
"Suma", suma,
    "Resta: ", resta,
    "Multiplicacion: ", mult,
    "Division: ", div,
    "Residuo: ", residuo,
    "Potencia: ", potencia,
);