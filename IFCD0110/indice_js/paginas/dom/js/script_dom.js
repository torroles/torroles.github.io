document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedorPrincipal');
    const btnCrear = document.getElementById('btnCrear');
    const contador = document.getElementById('contadorCapas');

    function actualizarContador() {
        contador.textContent = contenedor.children.length;
    }

    btnCrear.addEventListener('click', () => {
        const nuevaCaja = document.createElement('div');
        nuevaCaja.className = 'caja-dinamica';
        
        // Inyectamos el texto y el botón de borrado
        nuevaCaja.innerHTML = `
            <span>Capa #${contenedor.children.length + 1}</span>
            <button class="btn-eliminar">Eliminar</button>
        `;

        // Evento de Hover (mantenemos tu lógica)
        nuevaCaja.addEventListener('mouseover', () => nuevaCaja.classList.add('caja-hover'));
        nuevaCaja.addEventListener('mouseout', () => nuevaCaja.classList.remove('caja-hover'));

        // Evento Click: Gestión de estado y borrado
        nuevaCaja.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-eliminar')) {
                nuevaCaja.remove();
                actualizarContador();
            } else {
                nuevaCaja.classList.toggle('caja-seleccionada');
            }
        });

        contenedor.appendChild(nuevaCaja);
        actualizarContador();
    });
});