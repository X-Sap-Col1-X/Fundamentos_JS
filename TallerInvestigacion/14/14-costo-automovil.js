// ============================================================
// EJERCICIO 14 - 
// 
// ============================================================

// Buscamos en HTML el input y la caja del resultado (por su id).
const inputPV = document.getElementById("PV");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula
    if (inputPV.value === ""){
        cajaResultado.textContent = "Precio del vehiculo, Porcentaje de Ganancia del Vendedor, Impuesto sobre el precio de venta y el Costo Total.";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en numero.
    const PV = Number(inputPV.value);

    // Hacer la conversion de Pesos Colombianos.
    const PG = PV * 0.12;
    const IPV = PV * 0.06;
    const CT = PV + PG + IPV;

    // Mostrar los resultados en la pagina.
    cajaResultado.innerHTML =
    "El Precio de su Vehiculo es: <b>" + PV + "</b><br>" +
    "El Costo Total de su Vehiculo es: <b>" + CT + "</b><br>";
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular
inputPV.addEventListener("input", calcular);