// 1. Calculo propina
function calcularPropina(montoCuenta, porcentajePropina) {
    const propina = montoCuenta * (porcentajePropina / 100);
    return propina;
}

// 2. Captura de datos del usuario
const nombreCliente = prompt("Ingresa tu nombre:");
const monto = parseFloat(prompt("Ingresa el monto de la cuenta:"));
const porcentaje = parseFloat(prompt("Ingresa el porcentaje de propina:"));
const personas = parseInt(prompt("¿Cuántas personas comparten la cuenta?"));
const descuento = parseFloat(prompt("Ingresa el porcentaje de descuento (si no hay, escribe 0):"));

// Validación adicional
if (!isNaN(monto) && monto > 0 && !isNaN(porcentaje) && !isNaN(personas) && personas > 0) {
    // 3. Calculo y guardo resultado
    const montoPropina = calcularPropina(monto, porcentaje);

    // 4. Calcular el total a pagar con descuento
    const montoConDescuento = monto - (monto * (descuento / 100));
    const totalPagar = montoConDescuento + montoPropina;

    // 5. Calcular cuánto paga cada persona
    const pagoPorPersona = totalPagar / personas;

    // 6. Muestro resultados
    console.log("--- Resumen de la Cuenta ---");
    console.log(`Cliente: ${nombreCliente}`);
    console.log(`Monto de la cuenta: $${monto}`);
    console.log(`Descuento (${descuento}%): $${monto - montoConDescuento}`);
    console.log(`Propina (${porcentaje}%): $${montoPropina}`);
    console.log(`Total a pagar: $${totalPagar}`);
    console.log(`Número de personas: ${personas}`);
    console.log(`Cada persona paga: $${pagoPorPersona.toFixed(2)}`);
} else {
    console.log("No hay datos suficientes, vuelve a intentarlo");
}
