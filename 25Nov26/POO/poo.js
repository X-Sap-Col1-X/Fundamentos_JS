/* (POO) Programacion Orientada a Objetos.

La POO es un paradigma de programacion que organiza el software en clases y objetos para modelar conceptos del mundo real. Este enfoque promueve la reutilizacion del codigo, modularidad y mejor organizacion del software.
*/

// Crear el Objeto Automovil

document.writeln('<h2>Creacion de Objeto Automovil <br></h2>');

var Auto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    color: 'Azul',
    año: '2026',
    combustible: 'Diesel',
    tipo: 'Sedan',
    radio: ['FM','MP4','USB']
}

// Acceso a las propiedades: Se utiliza la notacion de punto (Auto.marca) para acceder a las propiedades del objeto.

document.writeln(`Marca: ${Auto.marca}`, '<br>');

class Vehiculos {
    // Atributos
    marca = 'Toyota';
    modelo = 'Corolla';
    color = 'Azul';
    año = '2026';
    combustible = 'Diesel';
    tipo = 'Sedan';
    precio = '$78.285.000';

    // Métodos
    // Representan acciones o comportamientos en este caso del vehiculo.
    acelerar(){
        return `El ${this.marca} acelera de 0 a 100 km/h en tan solo 3 segundos.`;
    }
    frenar(){
        return `El ${this.marca} ${this.modelo} puede frenar de 100 a 0 km/h en tan solo 2.5 segundos.`;
    }
}

// Crear un Objeto basa en la Clase Vehiculos
const ferrari = new Vehiculos();
// Se declara una constante, luego la palabra reservada NEW que significa que esta creando una nueva instancia de tipo objeto y al colocar el nombre de la clase, para este nuevo objeto tendra a disposicion los articulos y metodos de la clase previamente creada.

// Mostrar las propiedades y metodos del objeto ferrari
document.writeln(`Marca: ${ferrari.marca} <br>`);
document.writeln(`Modelo: ${ferrari.modelo} <br>`);
document.writeln(`Color: ${ferrari.color} <br>`);
document.writeln(`Año: ${ferrari.año} <br>`);
document.writeln(`Combustible: ${ferrari.combustible} <br>`);
document.writeln(`Tipo: ${ferrari.tipo} <br>`);
document.writeln(`Precio: ${ferrari.precio} <br>`);

document.writeln('<br>')
document.writeln('<h2>Creacion de Objeto Animal <br></h2>');
class Animales {
    // Atributos
    Nombre = 'Leon';
    Tamaño = 'Grande';
    Raza = 'Panthera Leo';
    Habitat = 'Selva';
    Especie = 'Carnivoro';

    Correr(){
        return `El ${this.Nombre} acelera de 0 a 80 km/h en rafagas cortas.`;
    }
    Cansa(){
        return `El ${this.Nombre} ${this.Grande} mantiene su velocidad máxima en trayectos breves de 100 a 200 metros.`;
    }
}

const Leon = new Animales();
document.writeln(`Nombre: ${Leon.Nombre} <br>`);
document.writeln(`Tamaño: ${Leon.Tamaño} <br>`);
document.writeln(`Raza: ${Leon.Raza} <br>`);
document.writeln(`Habitat: ${Leon.Habitat} <br>`);
document.writeln(`Especie: ${Leon.Especie} <br>`);
document.writeln(Leon.Correr(), `<br>`);
document.writeln(Leon.Cansa(), `<br>`);

document.writeln(`<br>==========================`);


/* Herencia Subclases y Metodos */
document.writeln('<h2> Futbolista <br></h2>');
class Deportistas {
constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
}

class Futbolista extends Deportistas {
    constructor(nombre, apellido, goles){
        super(nombre, apellido);
        this.goles = goles;
    }

    get goles(){
        return this._goles;
    }
    set goles(newGoals){
        this._goles = newGoals;
    }
}

let futbolista2 = new Futbolista('Lionel', 'Messi',5);

document.writeln("Nombre: ",futbolista2.nombre, "<br>");
document.writeln("Apellido: ",futbolista2.apellido, "<br>");
document.writeln("Goles: ",futbolista2.goles, "<br>");