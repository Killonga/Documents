// Objeto que representa a un usuario
const usuario = {
nombre: 'Errada',
edad: 24,
rango: 'Teniente'
ciudad: 'Barcelona'
};

// Arrow function con destructuring y template literals

const crearMensajePresentacion = ({ nombre, rango, edad, ciudad }) =>
`Hola, me dicen ${nombre},mi rango es${rango}, tengo ${edad} años y vivo en ${ciudad}.`;


// Se llama a la función y se muestra el resultado en consola

let mensajeDeBienvenida = crearMensajePresentacion(usuario);
console.log(mensajeDeBienvenida);

---------------------------------------------------------------------
Código Antiguo (para refactorizar):

// Objeto que representa a un usuario

const usuario = {
nombre: 'Errada',
edad: 24,
rango: 'Teniente'
ciudad: 'Barcelona'
};

// Función tradicional para crear el mensaje de presentación

function crearMensajePresentacion(user) {
var nombre = user.nombre;
var rango = user.rango;
var edad = user.edad;
var ciudad = user.ciudad;

var mensaje = 'Hola, mi nombre es ' + nombre +'mi rango es:'+ rango +', tengo ' + edad + ' años y vivo en la ciudad de ' + ciudad + '.';

return mensaje;
}

// Se llama a la función y se muestra el resultado en consola
var mensajeDeBienvenida = crearMensajePresentacion(usuario);
console.log(mensajeDeBienvenida);
