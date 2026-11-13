// ============================================================
// EJERCICIO 8 - 
// 
// ============================================================

// Buscamos en HTML los 2 inputs y la caja del resultado (por su id).
const inputDme = document.getElementById("Dme");
const inputDma = document.getElementById("Dma");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula
    if (inputDme.value === "" || inputDma.value === ""){
        cajaResultado.textContent = "Escribe el Diagonal Menor y el Diagonal Mayor";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en numero.
    const Dme = Number(inputDme.value);
    const Dma = Number(inputDma.value);

    // Multiplicar el Diagonal Menor y el Diagonal Mayor, despues divide el resultado entre 2.
    const AR = (Dme * Dma) / 2;

    // Mostrar los resultados en la pagina.
    cajaResultado.innerHTML =
    "El Area del Rombo es: <b>" + AR + "</b><br>";
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular
inputDme.addEventListener("input", calcular);
inputDma.addEventListener("input", calcular);