//Imprima 5 veces la palabra Sena

// Ciclo FOR (PARA)
console.log("----- CICLO FOR -----")
for (let contador = 1; contador <= 5; contador++) {
    // Contador = 1 -> Valor Inical
    // Contador <= 5 -> Condicion: Se repite mientras sea verdadera
    // Contador++ -> Al final de cada vuelta, contador aumenta en 1
    console.log("SENA"); // Esto se imprime en cada una de las 5 vueltas
}

// Ciclo While (Mientras)
console.log("----- CICLO WHILE -----")
let contador_while = 1; while (contador_while<=5) {
    // Se evalua la condicion antes de entrar a repetir el bloque
    console.log("SENA");
    contador_while++; // Muy importante: debido a que si no se incremente se vuelve un ciclo infinito
}

//Ciclo DO-WHILE (Repetir o hacer mientras)
console.log("----- CICLO DO WHILE -----")
let contador_dowhile = 1; 
do {
    console.log("SENA"); // Se ejecuta primero
    contador_dowhile++; // Luego se incrementa
} while (contador_dowhile <=5); // Al final evalua la condicion