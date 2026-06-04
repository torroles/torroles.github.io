document.addEventListener('DOMContentLoaded', () => {
    const btnCrear = document.getElementById('btnCrear');
    const area = document.getElementById('areaContenedor');
    
    const nombres = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Omega"];

    btnCrear.addEventListener('click', () => {
        const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];

        // 1. Crear el elemento contenedor
        const nodoPadre = document.createElement('div');
        nodoPadre.className = 'nodo-raul';

        // 2. Crear el nodo de texto
        const texto = document.createElement('p');
        texto.textContent = `Nodo: ${nombreAleatorio}`;

        // 3. Crear el botón de eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.className = 'btn-eliminar';
        btnEliminar.onclick = () => nodoPadre.remove();

        // 4. Montar la jerarquía
        nodoPadre.appendChild(texto);
        nodoPadre.appendChild(btnEliminar);
        area.appendChild(nodoPadre);
    });
});