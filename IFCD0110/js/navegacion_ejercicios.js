window.addEventListener('DOMContentLoaded', () => {
    // Buscamos todos los enlaces de volver que ahora tienen class="volver-indice"
    const botonesVolver = document.querySelectorAll('.volver-indice');
    
    // Recuperamos la URL completa que guardó el índice (ej: https://torroles.github.io/IFCD0110/indice_html_css/)
    const urlDestino = localStorage.getItem('indiceActual');

    if (urlDestino) {
        // SI HAY MEMORIA: Le metemos esa URL exacta a todos los botones
        botonesVolver.forEach(boton => {
            boton.href = urlDestino;
        });
    } else {
        // RUTA DE EMERGENCIA: Si falla el almacenamiento, usa la ruta relativa del HTML
        // Al estar en 'paginas/ejercicio.html', '../index.html' sube a su índice de carpeta
        botonesVolver.forEach(boton => {
            boton.href = '../index.html';
        });
    }
});
