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

//Ejemplo Intersección Servicios Médicos

let serviciosA = ["Rayos X", "Pediatría", "Laboratorio"];
let serviciosB = ["Cardiología", "Pediatría", "Rayos X"];

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


//ejemplo

let programadas = ["09:00", "10:00", "11:00"];
let realizadas = ["10:00"];

let pendientes = [];

for (let hora of programadas) {
    if (!realizadas.includes(hora)) {
        pendientes.push(hora);
    }
}

console.log(pendientes); // Resultado: ["09:00", "11:00"]


//Ejemplo Matrices (Son un arreglo de arreglos)

let horariosClinica = [
    ["Día", "09:00", "10:00", "11:00"],
    ["Lunes", 5, 3, 2],
    ["Martes", 2, 4, 1],
    ["Miércoles", 6, 1, 3]
];

let arregloProductosDescuento = [
    ["Nombre", "Valor Original", "Valor con Descuento"],
    ["PC Gamer", "$550.000", 450000],
    ["Netbook", 120000, 80000],
    ["Smart TV 40´", 350000, 299990]
]

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

//Objeto clave:valor
let objTicket = {
    nombre: "Juan Carlos",
    checkIn: false,
    ciudad: "Madrid"
};

console.log("Nombre: " + objTicket.nombre + "\n"
    + (objTicket.checkIn ? "CheckIn realizado\n" : "Favor Realizar CheckIn\n")
    + "Hacia: " + objTicket.ciudad);

//Objeto Producto
let producto = {
    nombre: "Notebook Lenovo",
    precio: 550000,
    stock: 12,
    categoria: "Tecnología"
};

//Obj Vehiculo
let vehiculo = {
    marca: "Mazda",
    modelo: "CX-5",
    km: 22000,
    precio: 18500000
};

//Objeto alumno
let alumno = {
    nombre: "J",
    edad: 33,
    telefonoContacto: 32562254,
    direccion: "Bio Bio, Chile",
    carrera: "Fullstack JavaScript",
    vespertino: false,
    arancelAnual: 3500000,
    presencial: false,
    notasModulos: [
        ["Módulo 1", "Módulo 2", "Módulo 3"],
        [6.5, 5.9, 6.5]
    ]
}

//Modificando valores dentro del objeto alumno
alumno.nombre = "Juan Carlos"
alumno.arancelAnual = 3150000;
alumno.carrera = "FullStack JavaScript Node Express";

//Accediendo a los valores dentro del objeto alumno
console.log("Nombre: " + alumno.nombre);
console.log("Carrera: " + alumno.carrera);
console.table(alumno.notasModulos);

//Object.keys(objetoX) devuelve un arreglo de claves  
console.log("-- El obj Alumno tiene "+Object.keys(alumno).length + " atributos/claves" );

console.log("-- RECORRIENDO OBJETO CON FOR IN")

for (let clave in alumno) { 
    //clave hace referencia al nombre del atributo
    //ObjetoX["nombre de la clave"] > Devuelve el valor de esa clave
    console.log(clave, ":", alumno[clave]); 
}
