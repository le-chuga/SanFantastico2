document.addEventListener("DOMContentLoaded", () =>{

    const buscarInput = document.getElementById("barrabusqueda");
    const resultado = document.getElementById("listacanciones");
    const canciones = [
        { nombre: "Misil", imagen: "IMG/Misil.jpg", archivo: "Audio/MisilCarolinaDurante.mp3" },
        { nombre: "Ya no hay verano", imagen: "IMG/Yanohayverano.jfif", archivo: "Audio/Yanohayverano.mp3" },
        { nombre: "Elige tu propia aventura", imagen: "IMG/Eligetupropiaaventura.jpg", archivo: "Audio/EligeTuPropiaAventura.mp3" },
        { nombre: "Casa kira", imagen: "IMG/casakira.jpg", archivo: "Audio/CasaKiraCarolinaDurante.mp3" },
        { nombre: "Joderse la vida", imagen: "IMG/joderselavida.jpg", archivo: "Audio/JoderseLaVida.mp3" },
        { nombre: "Perdona ahora si que si", imagen: "IMG/perdonaaahorasiquesi.jpg", archivo: "Audio/PerdonaAhoraSiQueSi.mp3" },
        { nombre: "Tu nuevo grupo favorito", imagen: "IMG/tunuevogrupofavorita.jpg", archivo: "Audio/TuNuevogrupofavorito.mp3" },
        { nombre: "Niña de hielo", imagen: "IMG/Niñadehielo.jpg", archivo: "Audio/niñadehielo.mp3" },
        { nombre: "Tempo2", imagen: "IMG/tempo2.webp", archivo: "Audio/tempo2.mp3" },
        { nombre: "Interluido", imagen: "IMG/tempo2.webp", archivo: "Audio/interluido.mp3" },
        { nombre: "San juan", imagen: "IMG/tempo2.webp", archivo: "Audio/sanjuan.mp3" },
        { nombre: "Verdes cesped", imagen: "IMG/tempo2.webp", archivo: "Audio/verdescesped.mp3" },
        { nombre: "Colores", imagen: "IMG/tunuevogrupofavorita.jpg", archivo: "Audio/colores.mp3" },
        { nombre: "La noche de los muertos vivientes", imagen: "IMG/lanochedelosmuertosvivientes.PNG", archivo: "Audio/lanochedelosmuertosvivientes.mp3" },
        { nombre: "Granja escuela", imagen: "IMG/tunuevogrupofavorita.jpg", archivo: "Audio/granjaescuela.mp3" },
        { nombre: "Las canciones de juanita", imagen: "IMG/lascancionesdejuanita.jpg", archivo: "Audio/lascancionesdejuanita.mp3" },
        { nombre: "Ni un palo al agua", imagen: "IMG/NiUnPaloAlAgua.jpg", archivo: "Audio/NiUnPaloAlAgua.mp3" },
        { nombre: "FRIGOPI3", imagen: "IMG/Frigopie.PNG", archivo: "Audio/FRIGOPI3.mp3" },
        { nombre: "Metrovalencia", imagen: "IMG/Metrovalencia.jpg", archivo: "Audio/Metrovalencia.mp3", },
        { nombre: "Dios me tiró un Ducados rubio", imagen: "IMG/TABACO.jpg", archivo: "Audio/TABACO.mp3" },
        { nombre: "BARRA METAL", imagen: "IMG/BARRAMETAL.jpg", archivo: "Audio/BARRAMETAL.mp3" },
        { nombre: "Intemperie", imagen: "IMG/Intemperie.jfif", archivo: "Audio/Intemperie.mp3" },
        { nombre: "Cayetana", imagen: "IMG/Cayetana.jfif", archivo: "Audio/Cayetana.mp3" },
        { nombre: "Heavy", imagen: "IMG/Justafeeling.jpg", archivo: "Audio/Heavy.mp3" },
        { nombre: "Just a feeling", imagen: "IMG/Justafeeling.jpg", archivo: "Audio/JustaFeeling.mp3" },
        { nombre: "Over the moon", imagen: "IMG/overthemoon.png", archivo: "Audio/Over the Moon.mp3", },
        { nombre: "Sienna", imagen: "IMG/lejosdeti.jpg", archivo: "Audio/sienna.mp3" },
        { nombre: "Talk to her", imagen: "IMG/Justafeeling.jpg", archivo: "Audio/TalktoHer.mp3" },
        { nombre: "Little by little", imagen: "IMG/Justafeeling.jpg", archivo: "Audio/Little by Little.mp3" },
        { nombre: "Basta ya", imagen: "IMG/Bastaya.jfif", archivo: "Audio/BastaYa.mp3" },
        { nombre: "Baby one more time", imagen: "IMG/babyonemoretime.jpg", archivo: "Audio/babyonemoretime.mp3" },
        { nombre: "Out for the night-Live", imagen: "IMG/outforthenight.jpg", archivo: "Audio/outforthenight.mp3" },
        { nombre: "Only in my dreams", imagen: "IMG/Bastaya.jfif", archivo: "Audio/onlyinmydreams.mp3" },
        { nombre: "Back to me", imagen: "IMG/backtome.jpg", archivo: "Audio/backtome.mp3" },
        { nombre: "Otro atardecer", imagen: "IMG/otroatardecer.png", archivo: "Audio/otroatardecer.mp3" },
        { nombre: "Lejos de ti", imagen: "IMG/lejosdeti.jpg", archivo: "Audio/lejosdeti.mp3" },
        { nombre: "No one notice", imagen: "IMG/lejosdeti.jpg", archivo: "Audio/noonenotice.mp3" },
        { nombre: "To say hello", imagen: "IMG/Justafeeling.jpg", archivo: "Audio/tosayhello.mp3" },
        { nombre: "All I really want is you", imagen: "IMG/Justafeeling.jpg", archivo: "Audio/allireallywantisyou.mp3" },
        { nombre: "FE!N", imagen: "IMG/FEIN.jpg", archivo: "Audio/FEIN.mp3" },
        { nombre: "Antidote", imagen: "IMG/rodeo.jpg", archivo: "Audio/Antidote.mp3" },
        { nombre: "Goosebumps", imagen: "IMG/Goosebumps.jpg", archivo: "Audio/Goosebumps.mp3", },
        { nombre: "Psycho mode", imagen: "IMG/Butterflyeffect.jfif", archivo: "Audio/Psychomode.mp3" },
        { nombre: "Butterfly effect", imagen: "IMG/Butterflyeffect.jfif", archivo: "Audio/Butterflyeffect.mp3" },
        { nombre: "90210", imagen: "IMG/rodeo.jpg", archivo: "Audio/90210.mp3" },
        { nombre: "Type shit", imagen: "IMG/typeshit.jpg", archivo: "Audio/Typeshit.mp3" }
 ];
    buscarInput.addEventListener("input", () => {
        const query = buscarInput.ariaValueMax.toLocaleLowerCase();
        const filtradas = canciones.filter(c => c.nombre.toLocaleLowerCase().includes(query));
        renderResultados(filtradas);
    });

    function renderResultados(listas) {
        resultado.innerHTML = "";
        listas.forEach(cancion => {
            const li = document.createElement("li");
            li.textContent=cancion.nombre;
            li.className = "cancion-item";
            li.style.cursor = "pointer";
            li.onclick = () => {
                mostrarSelectorDePlaylist(cancion);
            };
            resultado.appendChild(li);
        });
    }

    function mostrarSelectorDePlaylist(cancion) {
        const playlists = JSON.parse(localStorage.getItem("playlists"))|| [];

        if (playlists.length === 0 ) {
            alert("No hay playlists creada");
            return;
        }

        const modal = document.createElement("div");
        modal.className = "modal-playlist-selector";
        Object.assign(modal.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "9999"
        });


        const box = document.createElement("div");
        Object.assign(box.style, {
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            maxHeight: "400px",
            overflowY: "auto",
            width: "300px",
            boxSizing: "border-box"
        });


        const titulo = document.createElement("h2");
        titulo.textContent = `¿A que playlist quieres agregar "${cancion.nombre}"?`
        box.appendChild(titulo);


        playlists.forEach(pl => {
            const item = document.createElement("div");
            item.textContent = pl.nombre;
            item.classList.add("msjsuc");


            item.onclick = () => {
                pl.canciones = pl.canciones || [];
                const existe = pl.canciones.find(c => c.nombre === cancion.nombre);
                if (existe) {
                    alert(`La cancion "${cancion.nombre}" ya esta en la playlist "${pl.nombre}".`);

                } else {
                    pl.cancion.push(cancion);
                    localStorage.setItem("playlists", JSON.stringify(playlists));
                    alert(`"${cancion.nombre}" agregada a "${pl.nombre}".`);
                }
                document.body.removeChild(modal);
            };

            box.appendChild(item);
        });

        const cancelar = document.createElement("button");
        cancelar.textContent = "Cancelar";
        cancelar.style.marginTop = "10px";
        cancelar.onclick = () => document.body.removeChild(modal);
        box.appendChild(cancelar);

        modal.appendChild(box);
        document.body.appendChild(modal);
    };

    renderResultados(canciones);
    
});