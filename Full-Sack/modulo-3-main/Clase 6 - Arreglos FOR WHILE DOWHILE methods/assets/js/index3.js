
// let mañana = ["Ana", "Luis"];
// let tarde = ["Carla", "Pedro"];
// let noche = ["Juan", "Joaquín"];


// let completo = mañana.concat(tarde).concat(noche);
// console.log(completo);

// console.log(tarde.concat(mañana,noche).join(", "));

// console.log(completo.join(", "))

let contadorI = 10;

contadorI++;
contadorI++;
contadorI++;

contadorI--;
contadorI--;
contadorI--;
contadorI--;

contadorI++;
contadorI++;
contadorI++;





let notas = [5.7, 6.0, 4.8, 7.0];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

let promedio = suma / notas.length;
//eEl método toFixed Aproxima el decimal anterior
console.log("Promedio:", promedio.toFixed(1));