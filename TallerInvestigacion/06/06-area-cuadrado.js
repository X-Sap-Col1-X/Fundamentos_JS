// ============================================================
// EJERCICIO 6 - 
// 
// ============================================================

// Buscamos en HTML los 2 inputs y la caja del resultado (por su id).
const inputL1 = document.getElementById("L1");
const inputL2 = document.getElementById("L2");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula
    if (inputL1.value === "" || inputL2.value === ""){
        cajaResultado.textContent = "Escribe los lados";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en numero.
    const L1 = Number(inputL1.value);
    const L2 = Number(inputL2.value);

    // Multiplicar los Lados.
    const AC = L1 * L2;

    // Mostrar los resultados en la pagina.
    cajaResultado.innerHTML =
    "El Area del Cuadrado es: <b>" + AC + "</b><br>";
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular
inputL1.addEventListener("input", calcular);
inputL2.addEventListener("input", calcular);