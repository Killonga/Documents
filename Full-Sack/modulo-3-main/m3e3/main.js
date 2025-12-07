// 1. Calculo propina
function calcularPropina(montoCuenta, porcentajePropina) {
  const propina = montoCuenta * (porcentajePropina / 100);
  return propina;
}

// 2. Captura de datos del usuario
const monto = parseFloat(prompt("Ingresa el monto de la cuenta:"));
const porcentaje = parseFloat(prompt("Ingresa el porcentaje de propina:"));

// Validacion adicional. Se podria incluir un validador para monto > 0
if (!isNaN(monto) && !isNaN(porcentaje)) {
  // 3. Calculo y guardo resultado
  const montoPropina = calcularPropina(monto, porcentaje);

  // 4. Calcular el total a pagar
  const totalPagar = monto + montoPropina;

  // 5. Muestro resultados
  console.log("--- Resumen de la Cuenta ---");
  console.log(`Monto de la cuenta: $${monto}`);
  console.log(`Propina (${porcentaje}%): $${montoPropina}`);
  console.log(`Total a pagar: $${totalPagar}`);
} else {
  console.log("No hay datos suficientes, vuelve a intentarlo");
}
