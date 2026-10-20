// Equilatero = Los 3 lados son iguales
// Isosceles = 2 lados iguales
// Escaleno = Todos los lados son dfts

const ladoA = 5;
const ladoB = 5;
const ladoC = 8;

// Primero validamos que ningun lado sea cero o negativo
if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    console.log("Los lados deben ser mayores que cero");
    // "||" Es el operador (O) Basta con que  una de las condiciones se cumpla
} else if (ladoA+ladoB <= ladoC || ladoA+ladoC <= 0 || ladoB+ladoC <= ladoA) {
    //Regla geometrica: La suma de los lados siempre debe ser mayor que el tercer lado, si no, no se puede formar un triangulo real
console.log ("Los valores no forman un triangulo valido");
} else if (ladoA === ladoB && ladoB === ladoC) {
    // "&" Es el operador (Y) Las condiciones evaluadas deben ser verdaderas
    console.log ("El triangulo es EQUILATERO");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    // Si no es EQUILATERO, pero al menos 2 de los lados coinciden, el triangulo es Isosceles
    console.log ("El triangulo es ISOSCELES");
} else {
    // Si no se cumple ninguna de las condiciones anterioresnes decir que todos los lados son dfts
    console.log ("El triangulo es ESCALENO")
}