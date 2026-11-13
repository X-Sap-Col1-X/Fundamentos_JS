// ============================================================
// EJERCICIO 5 - 
// 
// ============================================================

// Buscamos en HTML los 5 inputs y la caja del resultado (por su id).
const inputGC = document.getElementById("GC");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula
    if (inputGC.value === ""){
        cajaResultado.textContent = "Escribe la Temperatura en Grados Centigrados";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en numero.
    const GC = Number(inputGC.value);

    // Pasar de GC a GF.
    const GF = (GC*9/5) + 32;

    // Mostrar los resultados en la pagina.
    cajaResultado.innerHTML =
    "La Temperatura en Grados Fahrenheit: <b>" + GF + "</b><br>";
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular
inputGC.addEventListener("input", calcular);
