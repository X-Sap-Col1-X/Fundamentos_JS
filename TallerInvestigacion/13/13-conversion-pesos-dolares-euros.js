// ============================================================
// EJERCICIO 13 - 
// 
// ============================================================

// Buscamos en HTML el input y la caja del resultado (por su id).
const inputPC = document.getElementById("PC");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula
    if (inputPC.value === ""){
        cajaResultado.textContent = "Escribe un Valor en Pesos Colombianos";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en numero.
    const PC = Number(inputPC.value);

    // Hacer la conversion de Pesos Colombianos.
    const D = PC/4000;
    const E = PC/4500;

    // Mostrar los resultados en la pagina.
    cajaResultado.innerHTML =
    "La Conversion en Dolares fue: <b>" + D + "</b><br>" +
    "La Conversion en Euros fue: <b>" + E + "</b><br>";
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular
inputPC.addEventListener("input", calcular);