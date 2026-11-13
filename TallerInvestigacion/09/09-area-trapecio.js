// ============================================================
// EJERCICIO 9 - 
// 
// ============================================================

// Buscamos en HTML los 3 inputs y la caja del resultado (por su id).
const inputBme = document.getElementById("Bme");
const inputBma = document.getElementById("Bma");
const inputH = document.getElementById("H");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula
    if (inputBme.value === "" || inputBma.value === "" || inputH.value === ""){
        cajaResultado.textContent = "Escribe la Base Menor, la Base Mayor y La Alturar";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en numero.
    const Bme = Number(inputBme.value);
    const Bma = Number(inputBma.value);
    const H = Number(inputH.value);

    // Multiplicar la Base Menor y la Base Mayor, despues divide el resultado entre 2 y multiplicalo por la Altura.
    const AT = ((Bme + Bma) / 2) * H;

    // Mostrar los resultados en la pagina.
    cajaResultado.innerHTML =
    "El Area del Trapecio es: <b>" + AT + "</b><br>";
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular
inputBme.addEventListener("input", calcular);
inputBma.addEventListener("input", calcular);
inputH.addEventListener("input", calcular);