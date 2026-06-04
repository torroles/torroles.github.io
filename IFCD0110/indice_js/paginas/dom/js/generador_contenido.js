// ==========================================================================
// PRÁCTICA: MANIPULACIÓN DE CONTENIDO (innerText vs innerHTML)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const textoElement = document.getElementById('textoAleatorio');
    const btn = document.getElementById('btnGenerar');

    const listaTextos = [
        "Tenemos los mejores productos del mercado, con controles de calidad intensivos.",
        "Distribuimos en todo el mundo con los mejores tiempos de entrega.",
        "No tenemos competidores que nos hagan sombra. ¡Así de fácil!",
        "Disponga del mejor servicio de atención al cliente.",
        "Los mejores servicios, productos y, como no, los menores precios."
    ];

    function obtenerTextoAleatorio() {
        const indice = Math.floor(Math.random() * listaTextos.length);
        return listaTextos[indice];
    }

    btn.addEventListener('click', () => {
        // Usamos innerText para evitar inyección de código (seguridad)
        textoElement.innerText = obtenerTextoAleatorio();
    });
});