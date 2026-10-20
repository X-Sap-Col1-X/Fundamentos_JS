// Escriba el Factorial de un numero

const N = 5;

console.log("----- CICLO FOR -----")
let factorialFor = 1;
for (let i = 1; i <= N; i++) {
    factorialFor *= i;
}
    console.log("El factorial de N es: ", factorialFor); 

    // Ciclo While (Mientras)
console.log("----- CICLO WHILE -----")
let factorialwhile = 1; let i = 1; while (i<=N) {
    factorialwhile *= i;
    i++;
}
console.log("El factorial de N es: ", factorialwhile); 

//Ciclo DO-WHILE (Repetir o hacer mientras)
console.log("----- CICLO DO WHILE -----")
let factorialdowhile = 1; let iw = 1;
do {
    factorialdowhile *= iw;
    iw++; 
} while (iw<=N); 
console.log("El factorial de N es: ", factorialdowhile); 