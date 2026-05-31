// 1. Guardar la URL del índice actual en localStorage para los ejercicios
localStorage.setItem('indiceActual', window.location.href);

// 2. Sistema para recordar la altura exacta (Scroll) dentro de este índice
const scrollKey = `scroll-${window.location.pathname}`;

// Si el usuario ya estuvo aquí, lo devolvemos a su posición exacta de forma fluida
document.addEventListener('DOMContentLoaded', () => {
    const posicionGuardada = sessionStorage.getItem(scrollKey);
    if (posicionGuardada) {
        // Un pequeño timeout asegura que el navegador ha renderizado todo el CSS antes de mover el scroll
        setTimeout(() => {
            window.scrollTo({
                top: parseInt(posicionGuardada, 10),
                behavior: 'smooth' // Efecto visual suave profesional
            });
        }, 50);
    }
});

// Escuchamos el scroll del usuario y guardamos su posición actual
window.addEventListener('scroll', () => {
    sessionStorage.setItem(scrollKey, window.scrollY);
});