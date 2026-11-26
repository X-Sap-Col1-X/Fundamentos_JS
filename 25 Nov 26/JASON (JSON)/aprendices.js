// Funcion que dibuja la tabla (Recibe el Objeto)
function renderizar(aprendiz){
    let filas = "";

    for (const [clave, valor] of Object.entries(aprendiz)){
        const contenido = (valor ===""||valor === null||valor === undefined)
        ? "<em>sin datos</em>"
        : valor;

        filas += `
        <tr>
        <th>${clave}</th>
        <td>${contenido}</td>
        </tr>
        `;
    }

    document.getElementById("salida").innerHTML=`
    <table border="1" cellpadding="6" style="border-collapse: collapse;">
    <thead>
    <tr><th>Campo</th><th>Valor</th></tr>
    </thead>
    <tbody>${filas}</tbody>
    </table>
    `;
}

// Cargar el JSON y Luego renderizar
async function cargarAprendiz(){
    try{
        const respuesta = await fetch("aprendices.json")
        if (!respuesta.ok){
            throw new Error ('Error ${respuesta.status}: no se encontro el archivo');
        }

        const aprendiz = await respuesta.json();
        renderizar(aprendiz);
        
    } catch(error){
        console.error(error);
        document.getElementById("Salida").textContent = "No se pudo cargar los datos: " + error.message;
    }
}

cargarAprendiz();