// ============================================================
// EJERCICIO 10 - 
// 
// ============================================================

// Buscamos en HTML los 2 inputs y la caja del resultado (por su id).
const inputR = document.getElementById("R");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula
    if (inputR.value === ""){
        cajaResultado.textContent = "Escribe el Diagonal Menor y el Diagonal Mayor";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en numero.
    const R = Number(inputR.value);

    // Multiplicar Pi(π) por el Radio al cuadrado.
    const AC = 3.1416 * R^2;

    // Mostrar los resultados en la pagina.
    cajaResultado.innerHTML =
    "El Area del Circulo es: <b>" + AC + "</b><br>";
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular
inputR.addEventListener("input", calcular);