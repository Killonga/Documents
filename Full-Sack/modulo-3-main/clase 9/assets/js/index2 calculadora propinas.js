// 1. Calculo propina
function calcularPropina(montoCuenta, porcentajePropina) {
    return montoCuenta * (porcentajePropina / 100);
}

// Función auxiliar para pedir un número obligatorio
function pedirNumero(mensaje, condicion) {
    let valor;
    do {
        const entrada = prompt(mensaje);
        valor = parseFloat(entrada);
        if (isNaN(valor) || !condicion(valor)) {
            alert("ERROR!!!, ERROR!!!,"); //ErrorCapa8
            console.log("ERROR!!!, ERROR!!!,"); //ErrorCapa8
        }
    } while (isNaN(valor) || !condicion(valor));
    return valor;
}

// Función auxiliar para pedir un entero obligatorio
function pedirEntero(mensaje, condicion) {
    let valor;
    do {
        const entrada = prompt(mensaje);
        valor = parseInt(entrada);
        if (isNaN(valor) || !condicion(valor)) {
            alert("ERROR!!!, ERROR!!!,"); //ErrorCapa8
            console.log("ERROR!!!, ERROR!!!,"); //ErrorCapa8
        }
    } while (isNaN(valor) || !condicion(valor));
    return valor;
}

// 2. Captura de datos del usuario
const nombreCliente = prompt("Ingresa tu nombre:");

// Valores obligatorios con validación estricta
const monto = pedirNumero("Ingresa el monto de la cuenta (obligatorio, mayor a 0):", v => v > 0);
const porcentaje = pedirNumero("Ingresa el porcentaje de propina (obligatorio, mayor o igual a 0):", v => v >= 0);
const descuento = pedirNumero("Ingresa el porcentaje de descuento (obligatorio, mayor o igual a 0):", v => v >= 0);
const personas = pedirEntero("¿Cuántas personas comparten la cuenta? (obligatorio, mayor a 0):", v => v > 0);

// 3. Calculo propina
const montoPropina = calcularPropina(monto, porcentaje);

// 4. Calcular IVA (19% del monto)
const iva = monto * 0.19;

// 5. Calcular el total a pagar con descuento + propina + IVA
const montoConDescuento = monto - (monto * (descuento / 100));
const totalPagar = montoConDescuento + montoPropina + iva;

// 6. Calcular cuánto paga cada persona
const pagoPorPersona = totalPagar / personas;

// 7. Mostrar resultados
console.log("--- Resumen de la Cuenta ---");
console.log(`Cliente: ${nombreCliente}`);
console.log(`Monto de la cuenta: $${monto}`);
console.log(`IVA (19%): $${iva}`);
console.log(`Descuento (${descuento}%): $${monto - montoConDescuento}`);
console.log(`Propina (${porcentaje}%): $${montoPropina}`);
console.log(`Total a pagar: $${totalPagar}`);
console.log(`Número de personas: ${personas}`);
console.log(`Cada persona paga: $${pagoPorPersona.toFixed(2)}`);
