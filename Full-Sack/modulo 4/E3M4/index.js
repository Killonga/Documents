const imagenPrincipal = document.getElementById("imagen-principal");
const thumbnails = document.querySelectorAll(".thumbnail");
const contenedorPrincipal = document.getElementById("imagen-principal-container");

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", (e) => {
        const nuevaUrl = e.currentTarget.src;
        const nuevoTextoAlt = e.currentTarget.alt;
        
        imagenPrincipal.src = nuevaUrl;
        imagenPrincipal.alt = nuevoTextoAlt;

        let pie = document.getElementById("pie-de-foto");
        if (!pie) {
            pie = document.createElement("p");
            pie.id = "pie-de-foto";
            contenedorPrincipal.appendChild(pie);
        }
        pie.textContent = nuevoTextoAlt;
    });
});
