// ============================================================
// EJERCICIO 11 - 
// 
// ============================================================

// Buscamos en HTML el input y la caja del resultado (por su id).
const inputV = document.getElementById("V");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula
    if (inputV.value === ""){
        cajaResultado.textContent = "Escribe el Diagonal Menor y el Diagonal Mayor";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en numero.
    const V = Number(inputV.value);

    // Multiplicar el Valor por el 10%.
    const Porcentaje = V * 0.10;

    // Mostrar los resultados en la pagina.
    cajaResultado.innerHTML =
    "El Area del Circulo es: <b>" + Porcentaje + "</b><br>";
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular
inputV.addEventListener("input", calcular);