// ============================================================
// EJERCICIO 4 - 
// 
// ============================================================

// Buscamos en HTML los 5 inputs y la caja del resultado (por su id).
const inputPrimero = document.getElementById("primerValor");
const inputSegundo = document.getElementById("segundoValor");
const inputTercero = document.getElementById("tercerValor");
const inputCuarto = document.getElementById("cuartoValor");
const inputQuinto = document.getElementById("quintoValor");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula
    if (inputPrimero.value === "" || inputSegundo.value === "" || inputTercero.value === "" || inputCuarto.value === "" || inputQuinto.value === ""){
        cajaResultado.textContent = "Escribe los 5 valores";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en numero.
    const primerValor = Number(inputPrimero.value);
    const segundoValor = Number(inputSegundo.value);
    const tercerValor = Number(inputTercero.value);
    const cuartoValor = Number(inputCuarto.value);
    const quintoValor = Number(inputQuinto.value);

    // Sumar los 5 valores.
    const sumaValores = primerValor + segundoValor + tercerValor + cuartoValor + quintoValor;

    // A la suma total se le resta los 3 primeros valores de la suma obtenida.
    const resultadoResta1 = sumaValores - primerValor - segundoValor - tercerValor;

    // A la suma total se le resta los 2 últímos valores de la suma obtenida.
    const resultadoResta2 = sumaValores - cuartoValor - quintoValor;
    
    // Multiplicar los resultados de ambas restas.
    const mult = resultadoResta1 * resultadoResta2;

    // Dividir la suma inicial entre el resultado de la multiplicación
    const div = sumaValores/mult;

    // Mostrar los resultados en la pagina.
    cajaResultado.innerHTML =
    "Suma de los 5 valores: <b>" + sumaValores + "</b><br>" +
    "Suma menos los 3 primeros valores: <b>" + resultadoResta1 + "</b><br>" +
    "Suma menos los 2 ultimos valores: <b>" + resultadoResta2 + "</b><br>" + 
    "Multiplicacion del resultado de ambas restas: <b>" + mult + "</b><br>" + 
    "Divicion de la suma inicial entre el resultado de la multiplicacion: <b>" + div + "</b><br>";
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular
inputPrimero.addEventListener("input", calcular);
inputSegundo.addEventListener("input", calcular);
inputTercero.addEventListener("input", calcular);
inputCuarto.addEventListener("input", calcular);
inputQuinto.addEventListener("input", calcular);