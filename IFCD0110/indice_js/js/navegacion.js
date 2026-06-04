document.addEventListener("DOMContentLoaded", () => {
    // 1. Capturamos todos los enlaces de navegación que tengan el atributo 'data-target'
    const enlaces = document.querySelectorAll("#navegacion nav a[data-target]");
    // 2. Capturamos todos los contenedores de ejercicios
    const bloques = document.querySelectorAll(".bloque-ejercicios");

    // =========================================================================
    // NUEVA FUNCIÓN: COMPROBAR SI PARAMETRO URL SOLICITA ABRIR UN BLOQUE
    // =========================================================================
    const parametrosURL = new URLSearchParams(window.location.search);
    const bloqueAAbrir = parametrosURL.get('bloque'); // Captura el valor de ?bloque=

    if (bloqueAAbrir) {
        const bloqueObjetivoURL = document.getElementById(bloqueAAbrir);
        if (bloqueObjetivoURL) {
            // Aseguramos que todo esté cerrado primero por seguridad
            bloques.forEach(bloque => bloque.classList.add("oculto"));
            // Quitamos la clase oculto al bloque que venía especificado en la URL
            bloqueObjetivoURL.classList.remove("oculto");
            
            // Opcional: Hace un scroll suave directo hacia la zona abierta para mejorar la UX
            bloqueObjetivoURL.scrollIntoView({ behavior: 'smooth' });
        }
    }
    // =========================================================================

    // Tu lógica de clicks existente (Se queda intacta y funcionando como siempre)
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            e.preventDefault(); // Evita que la página recargue o salte
            
            const targetId = enlace.getAttribute("data-target");
            const bloqueObjetivo = document.getElementById(targetId);

            // Si el bloque que queremos abrir ya está visible, lo ocultamos (se cierra a sí mismo)
            if (bloqueObjetivo && !bloqueObjetivo.classList.contains("oculto")) {
                bloqueObjetivo.classList.add("oculto");
            } else {
                // Si no, primero ocultamos TODOS los bloques abiertos
                bloques.forEach(bloque => bloque.classList.add("oculto"));
                
                // Y finalmente mostramos solo el bloque que hemos pulsado
                if (bloqueObjetivo) {
                    bloqueObjetivo.classList.remove("oculto");
                }
            }
        });
    });
});