# 📘 Clase: Repaso Completo de Arreglos en JavaScript  
*Con ciclos for, while, do while, switch, conteo, inserción, eliminación, concat y promedio*

---

# 1. ¿Qué es un arreglo?

Un **arreglo** es una estructura que permite almacenar varios valores dentro de una sola variable.  
Cada valor tiene una **posición** o *índice*, comenzando desde 0.

## 🧩 Ejemplo práctico
```js
let estudiantes = ["Ana", "Luis", "Carla", "Pedro"];
console.log(estudiantes);
```

---

# 2. Recorrido de arreglos

## 2.1 Ciclo **for**
Se utiliza cuando sabemos cuántas repeticiones habrá.

### 🧩 Mostrar lista de estudiantes con for
```js
let estudiantes = ["Ana", "Luis", "Carla", "Pedro"];

for (let i = 0; i < estudiantes.length; i++) {
  console.log(estudiantes[i]);
}
```

---

## 2.2 Ciclo **while**
Repite acciones mientras la condición sea verdadera.

### 🧩 Mismo caso práctico con while
```js
let estudiantes = ["Ana", "Luis", "Carla", "Pedro"];
let i = 0;

while (i < estudiantes.length) {
  console.log(estudiantes[i]);
  i++;
}
```

---

## 2.3 Ciclo **do while**
Ejecuta el bloque **al menos una vez**, aunque la condición sea falsa.

### 🧩 Mismo caso práctico con do while
```js
let estudiantes = ["Ana", "Luis", "Carla", "Pedro"];
let i = 0;

do {
  console.log(estudiantes[i]);
  i++;
} while (i < estudiantes.length);
```

---

# 3. Conteo de elementos

El método `.length` indica cuántos elementos contiene un arreglo.
Retorna la cantidad de elementos de un array.

### 🧩 Ejemplo práctico
```js
let estudiantes = ["Ana", "Luis", "Carla", "Pedro"];
console.log("Total:", estudiantes.length);
```

---

# 4. Inserción y eliminación con prompt + switch

### 🧩 Caso práctico: Menú para modificar una lista de estudiantes
```js
let estudiantes = ["Ana", "Luis", "Carla", "Pedro"];

let opcion = prompt(
  "1. Agregar estudiante\n2. Eliminar estudiante\n3. Mostrar lista"
);

switch (opcion) {
  case "1":
    let nuevo = prompt("Nombre del nuevo estudiante:");
    estudiantes.push(nuevo);
    alert("Agregado.");
    break;

  case "2":
    let borrar = prompt("¿A quién quieres eliminar?");
    let index = estudiantes.indexOf(borrar);

    if (index !== -1) {
      estudiantes.splice(index, 1);
      alert("Eliminado.");
    } else {
      alert("No encontrado.");
    }
    break;

  case "3":
    alert(estudiantes.join(", "));
    break;

  default:
    alert("Opción no válida");
}
```

---

# 5. Ciclos anidados (for dentro de for)

Sirven para representar estructuras en niveles.  
Ejemplo: cursos → estudiantes por curso.

### 🧩 Caso práctico
```js
let cursos = [
  ["Ana", "Luis"],
  ["Carla", "Pedro", "José"]
];

for (let i = 0; i < cursos.length; i++) {
  console.log("Curso", i + 1);

  for (let j = 0; j < cursos[i].length; j++) {
    console.log(" -", cursos[i][j]);
  }
}
```

---

# 6. Unir arreglos con `concat()`

### 🧩 Caso práctico
```js
let mañana = ["Ana", "Luis"];
let tarde = ["Carla", "Pedro"];

let completo = mañana.concat(tarde);
console.log(completo);
```

---

# 7. Promedio de notas usando un for

### 🧩 Caso práctico
```js
let notas = [5.5, 6.0, 4.8, 7.0];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
  //suma = suma + notas[i];
}

let promedio = suma / notas.length;
console.log("Promedio:", promedio.toFixed(2));
```

---

# 8. Resumen de la clase

Esta clase cubre:

- Qué es un arreglo  
- Recorridos con **for**, **while**, **do while**  
- Conteo con `.length`  
- Inserción y eliminación  
- Menú interactivo con **prompt + switch**  
- Ciclos anidados  
- `concat()`  
- Cálculo de promedios  

Todos los ejemplos están listos para **copiar, pegar y ejecutar**.

---
