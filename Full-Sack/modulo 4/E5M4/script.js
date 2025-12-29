// Seleccionamos los elementos del DOM
const loadButton = document.getElementById("loadButton");
const userList = document.getElementById("userList");

// URL de la API de prueba (JSONPlaceholder)
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Función asíncrona para obtener los datos
async function fetchUsers() {
  try {
    // Mostramos estado de carga (opcional, buena práctica UX)
    loadButton.textContent = "Cargando...";
    loadButton.disabled = true;

    // 1. Hacemos la petición con fetch
    // await espera a que la promesa se resuelva
    const response = await fetch(API_URL);

    // 2. Verificamos si la respuesta es correcta (status 200-299)
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }

    // 3. Convertimos la respuesta a JSON
    const users = await response.json();

    // 4. Renderizamos los usuarios en el HTML
    displayUsers(users);
  } catch (error) {
    console.error("Hubo un problema:", error);
    userList.innerHTML = `<p style="color:red; text-align:center;">Error al cargar usuarios: ${error.message}</p>`;
  } finally {
    // Restauramos el botón
    loadButton.textContent = "Cargar Usuarios";
    loadButton.disabled = false;
  }
}

// Función para mostrar los usuarios en el DOM
function displayUsers(users) {
  // Limpiamos el contenido actual
  userList.innerHTML = "";

  // Iteramos sobre cada usuario y creamos su tarjeta
  users.forEach((user, index) => {
    const card = document.createElement("div");
    card.className = "user-card";
    // Añadimos un pequeño retraso en la animación para cada tarjeta
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Empresa:</strong> ${user.company.name}</p>
            <p><strong>Ciudad:</strong> ${user.address.city}</p>
        `;

    userList.appendChild(card);
  });
}

// Añadimos el evento click al botón
loadButton.addEventListener("click", fetchUsers);
