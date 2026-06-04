const porfolioScrollKey = 'scroll-porfolio-raiz';

document.addEventListener('DOMContentLoaded', () => {
    const posicionGuardada = sessionStorage.getItem(porfolioScrollKey);
    
    // Si hay una posición exacta guardada por scroll, predomina sobre el ancla básica
    if (posicionGuardada) {
        setTimeout(() => {
            window.scrollTo({
                top: parseInt(posicionGuardada, 10),
                behavior: 'smooth'
            });
        }, 50);
    }
});

// Guardamos la posición del porfolio principal cada vez que el usuario se mueva por él
window.addEventListener('scroll', () => {
    sessionStorage.setItem(porfolioScrollKey, window.scrollY);
});