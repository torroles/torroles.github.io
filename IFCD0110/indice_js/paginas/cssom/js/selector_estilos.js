document.addEventListener('DOMContentLoaded', () => {
    const celdas = document.querySelectorAll('td');
    const btn = document.getElementById('btnCambiar');

    // Función para calcular la luminancia y decidir si el texto debe ser blanco
    function getContrastColor(hexColor) {
        // Convertir hex a RGB
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);
        
        // Fórmula de luminancia (estándar W3C)
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        
        // Si el valor es menor a 128, es un color oscuro -> Texto blanco
        return (yiq >= 128) ? 'black' : 'white';
    }

    celdas.forEach(celda => {
        celda.addEventListener('mouseover', () => celda.classList.add('celda-hover'));
        celda.addEventListener('mouseout', () => celda.classList.remove('celda-hover'));
    });

    btn.addEventListener('click', () => {
        const num = document.getElementById('numCelda').value;
        const color = document.getElementById('inputColor').value;
        const celda = document.getElementById(`celda${num}`);

        if (celda) {
            celda.style.backgroundColor = color;
            // Aplicamos la lógica de contraste al color del texto
            celda.style.color = getContrastColor(color);
        } else {
            alert("El número de celda no es válido.");
        }
    });
});