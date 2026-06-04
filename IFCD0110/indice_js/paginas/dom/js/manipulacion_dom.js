// ==========================================================================
// LABORATORIO DE MANIPULACIÓN DINÁMICA DEL DOM
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const btnCrear = document.getElementById('btnCrear');
    const contenedor = document.getElementById('contenedorPrincipal');
    const contador = document.getElementById('contadorCapas');
    let totalCapas = 0;

    // Función para actualizar el contador visual
    function actualizarContador() {
        totalCapas = contenedor.children.length;
        contador.textContent = totalCapas;
    }

    // Lógica para crear una nueva capa
    btnCrear.addEventListener('click', () => {
        // Crear elemento contenedor
        const nuevaCaja = document.createElement('div');
        nuevaCaja.className = 'caja-dinamica';
        nuevaCaja.innerHTML = `<span>Capa ${totalCapas + 1}</span>`;

        // Botón de eliminación
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'btn-eliminar';
        
        // Evento para eliminar la caja
        btnEliminar.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se dispare el evento de la caja padre
            nuevaCaja.remove();
            actualizarContador();
        });

        // Evento para cambiar de color al hacer clic (Selección)
        nuevaCaja.addEventListener('click', () => {
            nuevaCaja.classList.toggle('caja-seleccionada');
        });

        // Ensamblar
        nuevaCaja.appendChild(btnEliminar);
        contenedor.appendChild(nuevaCaja);
        
        actualizarContador();
    });
});