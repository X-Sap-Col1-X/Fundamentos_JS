// ============================================================
// EJERCICIO 7 - 
// 
// ============================================================

// Buscamos en HTML los 2 inputs y la caja del resultado (por su id).
const inputB = document.getElementById("Base");
const inputA = document.getElementById("Altura");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula
    if (inputB.value === "" || inputA.value === ""){
        cajaResultado.textContent = "Escribe la Base y la Altura";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en numero.
    const Base = Number(inputB.value);
    const Altura = Number(inputA.value);

    // Multiplicar la Base y la Altura.
    const AR = Base * Altura;

    // Mostrar los resultados en la pagina.
    cajaResultado.innerHTML =
    "El Area del Cuadrado es: <b>" + AR + "</b><br>";
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular
inputB.addEventListener("input", calcular);
inputA.addEventListener("input", calcular);