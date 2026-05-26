// Lógica para el botón de compartir nativo
const shareBtn = document.getElementById('shareBtn');

// La API de compartir solo funciona si el navegador la soporta (móviles y algunos de escritorio)
if (navigator.share) {
    // Si el navegador la soporta, mostramos el botón (por defecto está oculto con display: none)
    shareBtn.style.display = 'inline-block';

    shareBtn.addEventListener('click', async () => {
        try {
            await navigator.share({
                title: 'Raúl Galisteo García | Desarrollador Full-Stack',
                text: 'Echa un vistazo al portafolio profesional de Raúl Galisteo, Desarrollador Full-Stack.',
                url: window.location.href // Captura automáticamente la URL donde esté alojada tu web
            });
            console.log('Portafolio compartido con éxito');
        } catch (err) {
            console.log('Error al intentar compartir:', err);
        }
    });
}