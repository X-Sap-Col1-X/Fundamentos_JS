//Calcular la ganancia delvendedor
// Sumar la ganancia del valor del vehiculo = precio venta
// Calcular el impuesto (6%) sobre el precio de la venta
// Sumar el precio de venta + el impuesto = costo total

// Valores definidos directamente por el enunciado del taller
const preciovehiculo = 35000000;
const PG = 12;
const IPV = 6;

// Paso 1. Calcular cuanto dinero gana el vendedor
const gananciavendedor = (preciovehiculo * PG)/100;

// Paso 2. El precio de venta es el valor del vehiculo mas la ganancia
const precioventa = preciovehiculo + gananciavendedor;

// Paso 3. Calcular el impuesto sobre el precio de venta (No sobre el vehiculo original)
const Impuestoventa = (precioventa*IPV)/100;

//Paso 4. El costo total que paga el comprador es el precio de venta + impuesto
const CT = precioventa+Impuestoventa;

console.log("Valor del vehiculo: $", preciovehiculo);
console.log("Porcentaje de ganacia: ", PG, "%");
console.log("Ganancia del vendedor $", gananciavendedor);
console.log("Precio de venta antes de impuesto: $", precioventa);
console.log("Porcentaje de impuesto: ", IPV, "%");
console.log("Impuesto sobre la venta: $", Impuestoventa);
console.log("Costo Tota: $", CT);

