// ============================================================
// EJERCICIO 12 - 
// 
// ============================================================

// Buscamos en HTML el input y la caja del resultado (por su id).
const inputM = document.getElementById("M");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algun valor no se calcula
    if (inputM.value === ""){
        cajaResultado.textContent = "Escribe el Diagonal Menor y el Diagonal Mayor";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en numero.
    const M = Number(inputM.value);

    // Hacer la conversion de Metros.
    const Km = M/1000;
    const Hm = M/100;
    const Dam = M/10;
    const Dm = M*10;
    const Cm = M*100;
    const Mm = M*1000;

    // Mostrar los resultados en la pagina.
    cajaResultado.innerHTML =
    "La Conversion en Kilometros fue: <b>" + Km + "</b><br>" +
    "La Conversion en Hectometros fue: <b>" + Hm + "</b><br>" +
    "La Conversion en Decametros fue: <b>" + Dam + "</b><br>" + 
    "La Conversion en Decimetros fue: <b>" + Dm + "</b><br>" + 
    "La Conversion en Centimetros fue: <b>" + Cm + "</b><br>" +
    "La Conversion en Milimetros fue: <b>" + Mm + "</b><br>";
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular
inputM.addEventListener("input", calcular);