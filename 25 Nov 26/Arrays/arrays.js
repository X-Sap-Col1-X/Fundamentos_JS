/*ARRAY O ARREGLOS
Un array es una estructura de datos que permite almacenar una coleccion ordenada de elementos; estos elementos pueden ser cadenas de texto, valores numericos, boleanos, entre otros. Igualmente podrian ser un conjunto de funciones e inclusive otros arrays. 
*/

// Declaracion de una arrays vacio
let numeros = [];
// Llenar un array con elementos, cada elemento dentro del array se separa comas.

numeros = [5, 4, 8, 12, 16, 35, 44, 2]
document.writeln(`Elementos: `, numeros);
document.writeln(`<br>`);

// Un array puede crearse directamente sin ser declarado:
Numeros = [5, 10, 15 , 20, 25 , 30, 25];
document.writeln(`Elementos: `, Numeros);
document.writeln('<br>');

// Visualizar uno o alguno de los elementos del array segun parametro o indice indicado
document.writeln('Elemento Discriminado: ', numeros[3]);
document.writeln('<br>');
document.writeln('Elemento Discriminado: ', Numeros[0]);
document.writeln('<br>');

// Cambiar un elemento del array indicando el indice de posicion y/o ubicacion existente y el valor del elemento a cambiar
numeros [3] =  84
document.writeln('Cambio de un elemento: ', numeros);
document.writeln('<br>--------------------------');
document.writeln('<br>');

// Array con valores de tipo texto o string
let frutas = ['Manzanas','Peras','Mandarinas','Naranjas','Kiwi'];
document.writeln('Diversas frutas: ', frutas);
document.writeln('<br>');

// Metodos de los ARRAY

// Ver la cantidad de elementos
document.writeln('Cantidad de elementos del array de Frutas: ', frutas.length);
document.writeln('<br>');
document.writeln('Cantidad de elementos del array de Frutas: ', Numeros.length);
document.writeln('<br>--------------------------');
document.writeln('<br>');

let abecedario = ['A','X','Z','C','D','B','R','S','W','K','T'];
document.writeln(abecedario);
document.writeln('<br>');
document.writeln(abecedario.sort()); // Organiza alfabeticamente las letras.
document.writeln('<br>');

// Funcion Reverse organiza los elementos alfabeticamente pero a la invesa
document.writeln(abecedario.reverse()); // Organiza alfabeticamente las letras.
document.writeln('<br>');