document.addEventListener("DOMContentLoaded", () => {
    const nombre = new URLSearchParams(window.location.search).get("nombre");
    const playlists = JSON.parse(localStorage.getItem("playlists")) || [];
    const playlist = playlists.find(p => p.nombre === nombre);

    if (!playlist) {
        alert("Playlist no encontrada");
        return;
    }

    const titulo = document.querySelector(".Titulo");
    const img1 = document.getElementById("img1");
    const audio = new Audio();
    let indicieActual = 0;

    titulo.textContent = playlists.nombre;


    function cargarCancion(indice) {
        if (indice < 0  || indice >= playlist.canciones.length) return;
        indicieActual = indice;
        const cancion = playlist.canciones [indice];
        audio.src = cancion.archivo;
        img1.src = cancion.imagen;
        actualizarTiempo();
    }


    function playAudio() {
        if (!audio.src) {
            cargarCancion(indicieActual);
        }
        audio.play();
    }


    function pauseAudio() {
        audio.pause();
    }


    function next () {
        if (indicieActual + 1 < playlist.canciones.length) {
            cargarCancion(indicieActual + 1);
            playAudio();
        }
    }

    function previous () {
        if (indicieActual - 1 >= 0) {
            cargarCancion(indicieActual - 1);
            playAudio();
        }
    }


    function random() {
        const rand = Math.floor(Math.random() * playlist.canciones.length);
        cargarCancion(rand);
        playAudio();
    }

    function velocidadX1() {
        audio.playbackRate = 1;
    }

    function velocidadX2() {
        audio.playbackRate = 2;
    }

    const barratiempo= document.getElementById("barratiempo");
    const currentTimeSpan= document.getElementById("currentTime");
    const durationSpan = document.getElementById("duration");


    function actualizarTiempo() {
        barratiempo.max = Math.floor(audio.duration)  || 0;
        durationSpan.textContent = formatoTiempo(audio.duration)  || "0:00";

    }


    function formatoTiempo(segundos) {
        if (isNaN(segundos))return "0:00";
        const min = Math.floor(segundos / 60);
        const seg = Math.floor(segundos % 60);
        return `${min}:${seg < 10 ? "0" : ""}${seg}`;
    }


    audio.addEventListener("timeupdate", () => {
        barratiempo.value = Math.floor(audio.currentTime);
        currentTimeSpan.textContent = formatoTiempo(audio.currentTime);
    });


    audio.addEventListener("ended", () => {
        if (indicieActual + 1 < playlist.canciones.length) {
            next();
        } else {
            audio.pause();
            barratiempo.value = 0;
        }
    });


    barratiempo.addEventListener("imput", () => {
        audio.currentTime = barratiempo.value;
    });


    document.querySelector(".botonran").onclick = random;
    document.querySelector(".audios button:nth-child(1)").onclick = previous;
    document.querySelector(".audios button:nth-child(2)").onclick = playAudio;
    document.querySelector(".audios button:nth-child(3)").onclick = pauseAudio;
    document.querySelector(".audios button:nth-child(4)").onclick = next;
    document.querySelector(".velbot:nth-child(1)").onclick = velocidadX1;
    document.querySelector(".velbot:nth-child(2)").onclick = velocidadX2;

    cargarCancion(0);
});