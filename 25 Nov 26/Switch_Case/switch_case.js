/* Condicional Switch CASE

EL SWITCH es una estructura de control utilizada para tomar decisiones basadas en el el valor de una expresion.
Es util cuando se desea comparar un mismo valor con multiples casos posibles y ejecutar un bloque de codigo segun el caso que coincida.
*/

let valor;
valor = parseInt(prompt('Ingrese Valores Numericos entre 1 y 3'));

switch (valor) {
    case 1:
        document.writeln('Usted ingreso el numero: ', valor);
        break;
    case 2:
        document.writeln('Usted ingreso el numero: ', valor);
        break;
    case 3:
        document.writeln('Usted ingreso el numero: ', valor);
        break;

    default:
        document.writeln('El número esta fuera del rango o no es un número válido');
        break;
}

document.writeln('<br>')

let color
color = prompt('Ingrese uno de estos Colores: Rojo, Verde o Azul');

switch (color) {
    case 'Rojo':
        document.writeln('Usted ingreso el color: ', color)
        break;
    case 'Verde':
        document.writeln('Usted ingreso el color: ', color)
        break;
    case 'Azul':
        document.writeln('Usted ingreso el color: ', color)
        break;

    default:
        document.writeln('El color esta fuera del rango o no es un color válido');
        break;
}
