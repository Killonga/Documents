// 1. Definición de la Clase Libro
class Libro {
  constructor(titulo, autor, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.estado = estado;
  }

  mostrarInfo() {
    console.log(
      `El libro "${this.titulo}" de ${this.autor} se encuentra ${this.estado}.`
    );
  }
}

// 2. Inicialización del Programa
const inventario = [];

// 3. Carga interactiva de libros
let agregarOtroLibro = true;

while (agregarOtroLibro) {
  const titulo = prompt("Ingresa titulo del libro");
  const autor = prompt("Ingresa autor del libro");
  const estado = prompt("Ingresa estado del libro");

  if (!titulo || !autor || !estado) {
    console.log("Todos los campos son obligatorios");
  } else {
    const nuevoLibro = new Libro(titulo.trim(), autor.trim(), estado.trim());
    inventario.push(nuevoLibro);
  }
  agregarOtroLibro = confirm("Desea agregar otro libro?");
}

// 4. Muestra inventario Completo
console.log("--- Inventario de la Biblioteca ---");

if (inventario.length === 0) {
  console.log("No hay libros");
} else {
  // Este for recorre el array
  for (const libro of inventario) {
    // Y por cada elemento que encuentra en el Array, ejecuta su metodo mostrar libro
    libro.mostrarInfo();
  }
}

// Ejemplo de Salida en Consola:

// --- Inventario de la Biblioteca ---
// El libro "Cien Años de Soledad" de Gabriel García Márquez se encuentra Disponible.
// El libro "El Señor de los Anillos" de J.R.R. Tolkien se encuentra Prestado.
// El libro "1984" de George Orwell se encuentra Disponible.
