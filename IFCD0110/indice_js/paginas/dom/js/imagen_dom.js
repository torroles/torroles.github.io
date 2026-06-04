// ==========================================================================
// PRÁCTICA: ALTERNANCIA DE CAPAS MEDIANTE CLASES DE ESTADO
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');

    // Gestión programática de eventos
    img1.addEventListener('mouseover', () => {
        img1.classList.remove('activa');
        img2.classList.add('activa');
    });

    img1.addEventListener('mouseout', () => {
        img1.classList.add('activa');
        img2.classList.remove('activa');
    });
});