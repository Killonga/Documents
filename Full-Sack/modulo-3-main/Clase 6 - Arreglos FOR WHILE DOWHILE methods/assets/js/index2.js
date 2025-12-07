let estudiantes = ["Ana", "Luis", "Carla", "Pedro"];

console.log(estudiantes.join(", "));

while(true){
    
    let opcion = prompt(
    "1. Agregar estudiante\n2. Eliminar estudiante\n3. Mostrar lista"
    );

    alert(estudiantes.join(", "));

    switch (opcion) {
    case "1":

        let nuevo = prompt("Nombre del nuevo estudiante:");
        estudiantes.push(nuevo);
        alert("Agregado.");
        console.log(estudiantes.join(", "));
        alert(estudiantes.join(", "));
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

        console.log(estudiantes.join(", "));
        alert(estudiantes.join(", "));
        break;

    case "3":
        alert(estudiantes.join(", "));
        break;

    default:
        alert("Opción no válida");
    }
}

