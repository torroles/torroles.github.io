window.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. CONTROL DE VOLVER AL ÍNDICE INTERMEDIO
    // ----------------------------------------------------
    const botonesVolverIndice = document.querySelectorAll('.volver-indice');
    const urlIndiceDestino = localStorage.getItem('indiceActual');

    if (urlIndiceDestino) {
        botonesVolverIndice.forEach(boton => {
            boton.href = urlIndiceDestino;
        });
    } else {
        // Red de emergencia si se borra el localStorage
        botonesVolverIndice.forEach(boton => {
            boton.href = '../index.html';
        });
    }

    // ----------------------------------------------------
    // 2. CONTROL DE VOLVER AL PORFOLIO PRINCIPAL (RAÍZ)
    // ----------------------------------------------------
    const botonesVolverPorfolio = document.querySelectorAll('.volver-porfolio');

    if (urlIndiceDestino) {
        // Extraemos el ancla (#id) si venía incluida en la URL del índice guardado
        const urlObjeto = new URL(urlIndiceDestino, window.location.origin);
        const anclaOrigen = urlObjeto.hash; // Ej: "#cert-ifcd0110" u "#odin-project"

        if (anclaOrigen) {
            botonesVolverPorfolio.forEach(boton => {
                // Modificamos la ruta base sumándole el ancla correspondiente
                boton.href = `../../../index.html${anclaOrigen}`;
            });
        }
    }
});