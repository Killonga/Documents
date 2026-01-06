// Busqueda de receta por ingrediente
const buscarRecetas = async (ingrediente) => {
  if (!ingrediente) return null;
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`;

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    // console.log("Recetas encontradas:", datos.meals);
    return datos.meals;
  } catch (error) {
    console.error("Error al buscar la receta:", error);
  }
};

// Función para traducir texto
const traducirTexto = async (texto, langPair = "en|es") => {
  if (!texto) return "";

  // Helper para llamar a la API
  const traducirChunk = async (chunk) => {
    // Usar encodeURIComponent para asegurar que caracteres especiales se manejen bien
    // y recortar si aun asi se pasa (aunque el chunking deberia prevenirlo)
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      chunk
    )}&langpair=${langPair}`;
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();

      if (datos.responseStatus !== 200) {
        console.warn("API Error:", datos.responseDetails);
        return chunk; // Retornar original si falla
      }
      return datos.responseData.translatedText;
    } catch (error) {
      console.error("Error al traducir:", error);
      return chunk;
    }
  };

  // Si es corto, traducir directo (limite seguro 450 chars)
  if (texto.length < 450) {
    return await traducirChunk(texto);
  }

  // Si es largo, dividir en oraciones
  const oraciones = texto.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [texto];
  const bloques = [];
  let bloqueActual = "";

  for (const oracion of oraciones) {
    // Si agregar la siguiente oracion excede el limite, guardar bloque actual
    if ((bloqueActual + oracion).length > 450) {
      if (bloqueActual) bloques.push(bloqueActual);
      bloqueActual = oracion;
    } else {
      bloqueActual += (bloqueActual ? " " : "") + oracion;
    }
  }
  if (bloqueActual) bloques.push(bloqueActual);

  // Traducir todos los bloques en paralelo (cuidado con rate limits, secuencial es mas seguro para free tier)
  const traducciones = [];
  for (const bloque of bloques) {
    traducciones.push(await traducirChunk(bloque));
  }

  return traducciones.join(" ");
};

// Detalle de la receta por ID
const detalleReceta = async (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    // console.log(datos);
    return datos.meals[0];
  } catch (error) {
    console.error("Error al buscar la receta:", error);
  }
};

const renderizarBusqueda = async () => {
  const ingrediente = input.value.trim();
  const errorMessage = document.getElementById("error-message");
  const contenedor = document.getElementById("resultado");

  // Validacion input
  if (ingrediente === "") {
    contenedor.innerHTML = "";
    errorMessage.classList.remove("d-none");
    input.focus();

    return;
  }

  errorMessage.classList.add("d-none");

  contenedor.innerHTML = `
  <div class="w-100 d-flex justify-content-center">
    <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Buscando</span>
    </div>
  </div>`;

  // Traducir el ingrediente de español a inglés para la API
  const ingredienteIngles = await traducirTexto(ingrediente, "es|en");
  
  const recetas = await buscarRecetas(ingredienteIngles);

  if (!recetas) {
    contenedor.innerHTML = `
     <div class="col-12 d-flex justify-content-center">
      <div class="alert alert-warning text-center shadow-sm w-100" role="alert" style="max-width: 500px;">
        <h5 class="mb-2">😕 No se encontraron recetas.</h5>
        <p class="mb-0">Intenta con otro ingrediente.</p>
      </div>
    </div>`;
    return;
  }

  // Traducir los títulos de las recetas
  const recetasTraducidas = await Promise.all(
    recetas.map(async (receta) => {
      const nombreTraducido = await traducirTexto(receta.strMeal);
      return { ...receta, strMeal: nombreTraducido };
    })
  );

  contenedor.innerHTML = recetasTraducidas
    .map(
      ({ strMealThumb, strMeal, idMeal }) => `
        <div class="col-12 col-md-6 col-lg-4">
         <div class="recipe-card card h-100 shadow-sm border-0">
            <img
              src="${strMealThumb}"
              class="card-img-top"
              alt="${strMeal}"
            />
            <div class="card-body">
              <h5 class="card-title fw-semibold">${strMeal}</h5>
              <a href="#" class="btn btn-outline-success rounded-pill ver-receta" data-id=${idMeal}
                >Ver receta</a
              >
            </div>
          </div>
        </div>
      `
    )
    .join("");
};

const input = document.getElementById("input-ingrediente");
input.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    renderizarBusqueda();
  }
});

const searchBtn = document.getElementById("btn-buscar");
searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  renderizarBusqueda();
});

document.addEventListener("click", async (e) => {
  if (!e.target.classList.contains("ver-receta")) return;
  e.preventDefault();

  const id = e.target.dataset.id;

  // Mostrar spinner o mensaje de carga en el modal mientras traduce
  const modalTitulo = document.getElementById("modalTitulo");
  const modalDetalle = document.getElementById("modalDetalle");
  const modalImagen = document.getElementById("modalImagen");

  // Limpiar contenido previo y mostrar "Cargando..."
  modalTitulo.textContent = "Cargando...";
  modalDetalle.textContent = "Traduciendo receta...";
  modalImagen.src = "";
  modalImagen.alt = "";

  // Mostrar modal inmediatamente
  const modalElement = document.getElementById("modalReceta");
  const modal = new bootstrap.Modal(modalElement);
  modal.show();

  // Obtener datos
  const { strMeal, strMealThumb, strInstructions } = await detalleReceta(id);

  // Traducir datos
  const tituloTraducido = await traducirTexto(strMeal);
  const instruccionesTraducidas = await traducirTexto(strInstructions);

  // Actualizar modal con datos traducidos
  modalTitulo.textContent = tituloTraducido;
  modalImagen.src = strMealThumb;
  modalImagen.alt = tituloTraducido;
  modalDetalle.textContent = instruccionesTraducidas;
});
