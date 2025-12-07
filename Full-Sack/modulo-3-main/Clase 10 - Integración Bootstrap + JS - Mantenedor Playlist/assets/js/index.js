
//Identificando el botón HTML que vamos a presionar
let botonAgregarCancion = document.getElementById("btn-agregar-cancion");
let botonVerPlaylist = document.getElementById("btn-ver-playlist");
let playList =[];


//Configurando evento click (cuando se le haga click a este botón)
botonAgregarCancion.addEventListener("click",(e)=>{
    e.preventDefault();
    
    let formularioCancion = document.getElementById("formulario-agregar-cancion");
    //Así la página no se recarga

    //Obteniendo los valores escritos dentro de los inputs del formulario
    let album = document.getElementById("album").value;
    let nombre = document.getElementById("nombre").value;
    let anno = document.getElementById("anno").value;
    let artista = document.getElementById("artista").value;
    //Viendo avance
    //console.log(album, nombre, anno, artista);

    let cancionParaAgregar = {
        albumCancion: album,
        nombreCancion: nombre,
        annoCancion: anno,
        artistaCancion: artista
    };
    //Agregar canción al arreglo
    playList.push(cancionParaAgregar);

    formularioCancion.reset();

});

//Mostrar lista actualizada de canciones
botonVerPlaylist.addEventListener("click", ()=>{
    mostrarPlaylist();
});



const mostrarPlaylist = () =>{
    console.log(playList);
};