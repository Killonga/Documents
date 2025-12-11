// 1. Captura de datos
let inputName = prompt("Ingresa tu nombre");
let inputLastName = prompt("Ingresa tu apellido");

if (
  !inputName ||
  inputName.trim() === "" ||
  !inputLastName ||
  inputLastName.trim() === ""
) {
  console.log("❌ Debes ingresar nombre y apellido válidos.");
} else {
  // 2. Procesamiento de nombres

  // En el ejemplo del ejercicio se utilizaba Ana De Armas y como resultado : adea87,
  // Por lo que si hay apellido compuesto, se elimina el espacio en medio con replace
  const formatName = (
    inputName.trim().charAt(0) +
    inputLastName.trim().replace(/\s+/g, "").slice(0, 3)
  ).toLocaleLowerCase();

  // const firstLetter = inputName.trim().charAt(0);
  // const lastNamePart = inputLastName.trim().slice(0, 3);
  // const formatName = (firstLetter + lastNamePart).toLowerCase();

  // 3. Generacion numero aleatorio
  const randomNumber = 10 + Math.floor(Math.random() * 90);

  // 4. Ensamblar y mostrar resultado
  const userName = formatName + randomNumber;

  console.log(
    `Hola ${inputName} ${inputLastName}, \nTu nombre de usuario es 👉🏽 : ${userName}`
  );
}
