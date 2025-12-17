// Clases
class Libro {
  constructor(titulo, autor, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.estado = estado;
  }

  descripcion() {
    return `Libro: "${this.titulo}" | Autor: ${this.autor} | Estado: ${this.estado}`;
  }
}

// Variables Globales
const inventario = [];

// Referencias al DOM
const inputTitulo = document.getElementById("nombreLibro");
const inputAutor = document.getElementById("autorLibro");
const inputEstado = document.getElementById("estadoLibro");
const listaResultados = document.getElementById("listaResultados");

// Botones
const btnAgregar = document.getElementById("btnAgregar");
const btnMostrar = document.getElementById("btnMostrar");
const btnBuscar = document.getElementById("btnBuscar");
const inputBuscar = document.getElementById("buscarLibroInput");
const btnEliminar = document.getElementById("btnEliminar");
const inputEliminar = document.getElementById("eliminarLibro");
const btnEliminarTodos = document.getElementById("btnEliminarTodos");

// Funciones
function mostrarMensaje(mensaje) {
  listaResultados.innerHTML = `<li>${mensaje}</li>`;
}

function agregarLibro() {
  const titulo = inputTitulo.value.trim();
  const autor = inputAutor.value.trim();
  const estado = inputEstado.value.trim();

  if (titulo === "" || autor === "" || estado === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  const nuevoLibro = new Libro(titulo, autor, estado);
  inventario.push(nuevoLibro);
  mostrarMensaje(`Libro "${titulo}" agregado correctamente.`);

  // Limpiar inputs
  inputTitulo.value = "";
  inputAutor.value = "";
  inputEstado.value = "";
}

function mostrarLibros() {
  listaResultados.innerHTML = "";
  if (inventario.length === 0) {
    mostrarMensaje("La biblioteca está vacía.");
    return;
  }

  inventario.forEach((libro) => {
    const li = document.createElement("li");
    li.textContent = libro.descripcion();
    listaResultados.appendChild(li);
  });
}

function buscarLibro() {
  const termino = inputBuscar.value.trim().toLowerCase();

  if (termino === "") {
    alert("Ingresa un título para buscar.");
    return;
  }

  const resultado = inventario.find(libro => libro.titulo.toLowerCase() === termino);

  listaResultados.innerHTML = "";
  if (resultado) {
    const li = document.createElement("li");
    li.textContent = `Encontrado: ${resultado.descripcion()}`;
    listaResultados.appendChild(li);
  } else {
    mostrarMensaje(`No se encontró ningún libro con el título "${termino}".`);
  }
}

function eliminarLibro() {
  const termino = inputEliminar.value.trim().toLowerCase();

  if (termino === "") {
    alert("Ingresa un título para eliminar.");
    return;
  }

  const index = inventario.findIndex(libro => libro.titulo.toLowerCase() === termino);

  if (index !== -1) {
    const libroEliminado = inventario.splice(index, 1);
    mostrarMensaje(`Libro "${libroEliminado[0].titulo}" eliminado.`);
    inputEliminar.value = "";
  } else {
    mostrarMensaje(`No se encontró el libro "${termino}" para eliminar.`);
  }
}

function eliminarTodos() {
  if (confirm("¿Estás seguro de querer borrar toda la biblioteca?")) {
    inventario.length = 0;
    mostrarMensaje("Todos los libros han sido eliminados.");
    mostrarLibros();
  }
}

// Event Listeners
btnAgregar.addEventListener("click", agregarLibro);
btnMostrar.addEventListener("click", mostrarLibros);
btnBuscar.addEventListener("click", buscarLibro);
btnEliminar.addEventListener("click", eliminarLibro);
btnEliminarTodos.addEventListener("click", eliminarTodos);
