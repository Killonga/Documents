# Clase: Objetos Preconstruidos I -- Objeto Math

## 1. Introducción a los Objetos en JavaScript

### 1.1 ¿Qué es un objeto?

Un objeto es una estructura que permite almacenar **datos**
(propiedades) y **acciones** (métodos).\
Se usa cuando necesitamos agrupar información y comportamientos
relacionados.

``` js
const persona = {
  nombre: "Roberto",
  edad: 25,
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};

console.log(persona.nombre);
persona.saludar();
```

------------------------------------------------------------------------

### 1.2 Propiedades y métodos

-   **Propiedad:** un dato dentro del objeto.\
-   **Método:** una función asociada al objeto.

``` js
const auto = {
  marca: "Toyota",
  arrancar() {
    console.log("El auto está arrancando...");
  }
};

console.log(auto.marca);
auto.arrancar();
```

------------------------------------------------------------------------

### 1.3 Primitivos vs Objetos


| Tipo          | Qué es                                              | Cuándo usarlo                                       | Ejemplo                                              |
|---------------|------------------------------------------------------|------------------------------------------------------|-------------------------------------------------------|
| **Primitivo** | Valor simple (no tiene métodos propios modificables) | Cuando solo necesitas almacenar un dato sin lógica extra | `let edad = 20;`                                     |
| **Objeto**     | Conjunto de valores + funciones relacionadas        | Cuando necesitas agrupar datos y funciones que trabajan juntas | `const usuario = { nombre: "Ana", login(){} }` |


- Un primitivo solo guarda un valor; un objeto guarda múltiples valores y comportamientos.

- Los primitivos se copian por valor; los objetos se copian por referencia.

- Los objetos permiten modelar cosas reales: usuario, auto, producto, etc.

Ejemplo práctico:

``` js
let temperatura = 22;

const clima = {
  temperatura: 22,
  ciudad: "Concepción",
  imprimir() {
    console.log(`La temperatura en ${this.ciudad} es de ${this.temperatura}°C`);
  }
};

clima.imprimir();
```

------------------------------------------------------------------------

## 2. Notaciones para acceder a propiedades

### 2.1 Notación de punto

``` js
const alumno = {
  nombre: "Carla",
  curso: "Fullstack"
};

console.log(alumno.nombre);
// Carla
console.log(alumno["nombre"]);
// Carla
```

------------------------------------------------------------------------

### 2.2 Notación de corchetes

``` js
const producto = {
  "precio final": 19990,
  categoria: "tecnología"
};

console.log(producto["precio final"]);
// 19990

let prop = "categoria";
console.log(producto[prop]);
```


------------------------------------------------------------------------

## 3. Objetos preconstruidos

### 3.1 ¿Qué son y para qué sirven?

- Math: cálculos matemáticos (redondeo, potencia, raíz, aleatorios).

- Date: trabajar con fechas (día, mes, año, hora).

- JSON: convertir objetos a texto y viceversa (muy usado en APIs).

- Array: métodos para trabajar con listas (push, filter, map).

- String: métodos para trabajar con textos (trim, replace, toUpperCase).

- Number: métodos para números (parseFloat, isInteger).

``` js
console.log(new Date());
console.log(JSON.stringify({a:1}));
console.log([1,2,3].map(x => x*2));
console.log("hola".toUpperCase());
```

------------------------------------------------------------------------

## 4. El objeto Math

### 4.1 ¿Qué es Math?

Un objeto con funciones matemáticas listas para usar.
- Es un objeto que contiene funciones matemáticas listas para usarse: redondeos, potencias, raíces, operaciones trigonométricas, números aleatorios, etc.

### 4.2 Propiedades

``` js
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
```

### 4.3 Métodos

``` js

/*
  Math.floor() redondea siempre hacia abajo al entero más cercano, 
  
  Math.ceil() siempre redondea hacia arriba, y
  
  Math.round() redondea al entero más cercano (arriba si .5 o más, abajo si es menos de .5)
*/

//Redondear un valor numérico
Math.round(4.6);

//Redondear un número hacia abajo
Math.floor(4.9);

//Redondea hacia arriba
Math.ceil(4.1);

//Devuelve el valor más alto dentro de una serie de números
Math.max(5,12,3);

//Devuelve el valor más bajo
Math.min(5,12,3);

//Sacar la raíz cuadrada de 16
Math.sqrt(16);

//Elevar 2^4 = 2*2*2*2 = 16
Math.pow(2,4);
```

### 4.4 Estructura de Math.random()

- Math.random() funciona así:

- No recibe parámetros.

- Retorna un número decimal entre 0 (incluido) y 1 (excluido).


``` js
console.log(Math.random());
```

------------------------------------------------------------------------

## 5. Mini-práctica guiada

### 5.1 Función comentada

``` js
function numeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

console.log("Número aleatorio:", numeroAleatorio());
```

------------------------------------------------------------------------

### 5.2 Ejercicio práctico

``` js
function analizarNumero(n) {
  console.log("Número ingresado:", n);
  console.log("Redondeado:", Math.round(n));
  console.log("Raíz cuadrada:", Math.sqrt(n));
  console.log("Elevado al cubo:", Math.pow(n, 3));
}

analizarNumero(7.4);
```

------------------------------------------------------------------------