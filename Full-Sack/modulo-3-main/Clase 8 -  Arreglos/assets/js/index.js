
//UNION - unir 2 arreglos sin que los elementos se repitan 

let autosA = ["Mazda 3", "Corolla", "Civic"];
let autosB = ["Civic", "CX-5", "Corolla", "Kona"];

//spread (desparramar) operator
let union = [...autosA];

//FOR OF es una manera de recorrer los elementos de un arreglo
//de una manera mas directa 
for (let auto of autosB) {
    if (!union.includes(auto)) {
        union.push(auto);
    }
}
console.log("CONCAT");
console.log(autosA.concat(autosB));
console.log("UNION");
console.log(union);
// Resultado: ["Mazda 3", "Corolla", "Civic", "CX-5", "Kona"]



//Ejemplo INTERSECCIÓN Servicios Médicos 
//Devuelve elementos en común, que están en ambos arreglos

let serviciosA = ["Rayos X", "Pediatría", "Laboratorio"];
let serviciosB = ["Cardiología", "Pediatría", "Rayos X"];

//Arreglo compuesto (Vamos a guardar las intersecciones)
let inter = [];

for (let ser of serviciosA) {
    if (serviciosB.includes(ser)) {
        inter.push(ser);
    }
}
console.log("SERVICIOS")
console.log(serviciosA);
console.log(serviciosB);

console.log(inter); // Resultado: ["Rayos X", "Pediatría"]


//Ejemplo INTERSECCIÓN

let programadas = ["09:00", "10:00", "11:00"];
let realizadas = ["10:00"];

let pendientes = [];

//Quiero que se itere la cantidad de elementos que contiene el arreglo "programadas"
for (let hora of programadas) {
    if (!realizadas.includes(hora)) {
        pendientes.push(hora);
    }
}

console.log(pendientes); // Resultado: ["09:00", "11:00"]



//Ejemplo Matrices (Son un arreglo de arreglos)
// Archivos CSV = archivos separados por coma
// Utilidad: Machine Learning, Diseño de tablero de ajedrez
// Utilidad: Enviar información tabulada dinámica a la consola
//para apoyar nuestro desarrollo web 
let dias = ["Lunes", "Martes", "Miércoles"]
let horariosClinica = [
    ["Día", "09:00", "10:00", "11:00"],
    [dias[0], 5, 3, 2],
    [dias[1], 2, 4, 1],
    [dias[2], 6, 1, 3]
];

let arregloProductosDescuento = [
    ["Nombre", "Valor Original", "Valor con Descuento"],
    ["PC Gamer", "$550.000", 450000],
    ["Netbook", 120000, 80000],
    ["Smart TV 40´", 350000, 299990]
];

console.table(horariosClinica);

console.table(arregloProductosDescuento);

//Objetos

//COMPARACIÓN ENTRE LISTA DE VALORES MIXTOS VS OBJETO {clave:valor}

//Arreglo Mixto
let ticket = ["Juan Carlos", true, { ciudad: "Madrid" }];

console.log("Ticket N° 200:\n"
    + "Nombre: " + ticket[0] + "\n"
    + (ticket[1] ? "CheckIn realizado\n" : "Favor Realizar CheckIn\n")
    + " Hacia: " + ticket[2].ciudad);

//-------- OBJETOS ------------

//Objeto clave:valor
let objTicket = {
    nombre: "Juan Carlos",
    checkIn: false,
    ciudad: "Madrid"
};

console.log("Nombre: " + objTicket.nombre + "\n"
    + (objTicket.checkIn ? "CheckIn realizado\n" : "Favor Realizar CheckIn\n")
    + "Hacia: " + objTicket.ciudad);

//Objeto Producto ------ 
let producto = {
    nombre: "Notebook Lenovo",
    precio: 550000,
    categoria: ["Tecnología", "Notebooks"],
    stock: 12,
    sucursales: [
        { nombre: "Valparaíso", direccion: "Calle 1", stock: 2 },
        { nombre: "Santiago", direccion: "Calle 5", stock: 5 },
        { nombre: "Concepción", direccion: "Calle 6", stock: 5 },
    ]
};

//Obj Vehiculo
let vehiculo = {
    marca: "Mazda",
    modelo: "CX-5",
    km: 22000,
    precio: 18500000,
    equipamiento: ["ABS", "Alzavidrios Eléctricos", "Airbags", "Dirección eléctrica"],
    traccion: "4x2",
    mantencionesFabricante: [
        { tipo: "Mecanica", descripcion: "Cambio de pastillas", km: 15000 },
        { tipo: "Mecanica", descripcion: "X", km: 20000 },
        { tipo: "Hidráulica", descripcion: "XXX", km: 35000 },
        { tipo: "Mecanica", descripcion: "Cambio de frenos", km: 45000 },
    ]
};

for (let i = 0; i < vehiculo.mantencionesFabricante.length; i++) {
    console.log("Mantención " + (i + 1) + " Tipo: "
        + vehiculo.mantencionesFabricante[i].tipo
        + "Descripción: "
        + vehiculo.mantencionesFabricante[i].descripcion
        + "Km: "
        + vehiculo.mantencionesFabricante[i].km);
}


//Objeto alumno
let alumno = {
    nombre: "J",
    edad: 33,
    telefonoContacto: 32562254,
    institucion: "Mindhub",
    direccion: "Bio Bio, Chile",
    carrera: "Fullstack JavaScript",
    vespertino: false,
    arancelAnual: 3500000,
    presencial: false,
    notasModulos: [
        ["Módulo 1", "Módulo 2", "Módulo 3"],
        [6.5, 5.9, 6.5]
    ]
};

//Modificando valores dentro del objeto alumno
alumno.nombre = "Juan Carlos"
alumno.arancelAnual = 3150000;
alumno.carrera = "FullStack JavaScript Node Express";

//Accediendo a los valores dentro del objeto alumno
console.log("Nombre: " + alumno.nombre);
console.log("Carrera: " + alumno.carrera);
console.table(alumno.notasModulos);

//Object.keys(objetoX) devuelve un arreglo de claves  
console.log("-- El obj Alumno tiene " + Object.keys(alumno).length + " atributos/claves");

console.log("-- RECORRIENDO OBJETO CON FOR IN")

for (let clave in alumno) {
    //clave hace referencia al nombre del atributo
    //ObjetoX["nombre de la clave"] > Devuelve el valor de esa clave
    console.log(clave, ":", alumno[clave]);
}
