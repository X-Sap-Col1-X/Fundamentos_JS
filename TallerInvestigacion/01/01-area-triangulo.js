// ============================================================
// EJERCICIO 6 - 
// 
// ============================================================

// Buscamos en HTML los 2 inputs y la caja del resultado (por su id).
const inputBase = document.getElementById("B");
const inputAltura = document.getElementById("A");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula
    if (inputBase.value === "" || inputAltura.value === ""){
        cajaResultado.textContent = "Escribe los Valores para Base y Altura";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en numero.
    const B = Number(inputBase.value);
    const A = Number(inputAltura.value);

    // Multiplicar los Base por Altura y el resultado dividirlo entre 2.
    const AT = (B * A)/2;

    // Mostrar los resultados en la pagina.
    cajaResultado.innerHTML =
    "El Area del Triangulo es: <b>" + AT + "</b><br>";
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular
inputBase.addEventListener("input", calcular);
inputAltura.addEventListener("input", calcular);