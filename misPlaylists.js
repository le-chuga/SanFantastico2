document.addEventListener("DOMContentLoaded", () => {
    const formulario =document.getElementById("formularioCrear");
    const inputNombre= document.getElementById("nombrePlaylist");
    const btnCancelar=document.getElementById("btnCancelar")
    const contenedor= document.getElementById("contenedorPlaylists")
    const botonCrear=document.getElementById("btnCrear")
    const btnCrear=document.getElementById("btnCrearPlaylist")

    if (btnCrear && formulario) {
        btnCrear.addEventListener("click",() => {
            formulario.style.display = "block";
        });
    }



    if (botonCrear && inputNombre) {
        btnCancelar.addEventListener("click", () => {
            formulario.style.display = "none";
            inputNombre.value = "";
        });
    }



    if (botonCrear && inputNombre) {
        botonCrear.addEventListener("click", () => {
            const nombre =inputNombre.value.trim();
            if(!nombre) {
                alert("Por favor, introduce un nombre valido.(espabila)");
                return;
            }

            const playlists = JSON.parse(localStorage.getItem("playlists")) || [];
            if (playlists.find(p => p.nombre === nombre)) {
                alert("Ya existe una playlist con este nombre bobo");
                return;
            }

            const nueva = {
                nombre,
                canciones:[],
                imagem:"IMG/default.jpg"
            };

            playlists.push(nueva);
            localStorage.setItem("playlists", JSON.stringify(playlists));

            location.href = "misPlaylists.html";
        });
    }



    if (contenedor) {
        function renderPlaylists() {
            contenedor.innerHTML = "";
            const playlists = JSON.parse(localStorage.getItem("playlists")) || [];
            playlists.forEach(pl => {
                const card = document.createElement("div");
                card.className = "playlist-card";
                card.onclick = () => location.href = `playlist.html?nombre=${encodeURIComponent(pl.nombre)}`;



                const titulo = document.createElement("div");
                titulo.className = "playlist-titulo"
                titulo.textContent = pl.nombre;


                card.appendChild(titulo);

                contenedor.appendChild(card);
            });
        }
        renderPlaylists();
    }

    const playlistView = document.getElementById("lista-canciones");

    if (playlistView) {
        const nombre = new URLSearchParams(window.location.search).get("nombre");
        const playlists = JSON.parse(localStorage.getItem("playlists")) || [];
        const playlist = playlists.find(p => p.nombre === nombre);

        if (!playlist) {
            alert("Playlist no encontrada pollo");
            location.href = "misPlaylists.html";
            return;
        }
        
        const audioMaestro = document.createElement("audio");
        audioMaestro.controls = true;
        audioMaestro.style.display = "block";
        playlistView.appendChild(audioMaestro);

        let indiceActual = 0;

        function reproducirCancion(indice) {
            if (indice < 0 || indice >= playlist.canciones.length) {
                audioMaestro.pause();
                return;
            }
            indiceActual = indice;
            audioMaestro.src = playlist.canciones[indice].archivo;
            audioMaestro.play();
            destacarCancionActiva(indice);
        }


        function destacarCancionActiva(indice) {
            const divs = playlistView.querySelectorAll(".cancion-entry");
            divs.forEach((div, i) => {
                div.style.backgroundColor = (i === indice) ? "#ddd" : "";
            });
        }
    

        playlist.canciones.forEach((cancion, i) => {
            const div = document.createElement("div");
            div.className = "cancion-entry";
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.marginBottom = "10px"

            const nombreDiv = document.createElement("div");
            nombreDiv.textContent = cancion.nombre;
            nombreDiv.className = "titulo-cancion";
            nombreDiv.style.flexGrow = "1";
            nombreDiv.style.fontSize = "1.1em";
            nombreDiv.style.fontWeight = "blod";



            div.appendChild(nombreDiv);
            div.appendChild(btnPlay);

            playlistView.appendChild(div);

        });

        audioMaestro.addEventListener("ended", () => {
            if (indiceActual + 1 < playlist.canciones.length) {
                reproducirCancion(indiceActual + 1);
            }
        });

        if (playlist.canciones.length > 0) {
            reproducirCancion(0);
        }else {
            const mensaje = document.createElement("p")
            mensaje.textContent = "Esta playlist esta vacia metele algo no?";
            playlistView.appendChild(mensaje);
        }
    }

});