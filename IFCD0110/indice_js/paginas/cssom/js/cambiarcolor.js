document.addEventListener('DOMContentLoaded', () => {
    const tabla = document.getElementById('tablaDinamica');
    const btn = document.getElementById('btnAplicar');
    const inputCelda = document.getElementById('inputCelda');

    // 1. Generar 10 celdas
    for (let i = 1; i <= 10; i++) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.id = `celda${i}`;
        td.textContent = `Casilla número ${i}`;
        
        // Hover
        td.addEventListener('mouseover', () => td.classList.add('celda-hover'));
        td.addEventListener('mouseout', () => td.classList.remove('celda-hover'));
        
        // Click para seleccionar y marcar
        td.addEventListener('click', () => {
            document.querySelectorAll('td').forEach(c => c.classList.remove('celda-seleccionada'));
            td.classList.add('celda-seleccionada');
            inputCelda.value = i;
        });
        
        tr.appendChild(td);
        tabla.appendChild(tr);
    }

    // 2. Sincronización manual: Input número <-> Selección de celda
    inputCelda.addEventListener('input', () => {
        const val = inputCelda.value;
        const celda = document.getElementById(`celda${val}`);
        document.querySelectorAll('td').forEach(c => c.classList.remove('celda-seleccionada'));
        if (celda) {
            celda.classList.add('celda-seleccionada');
        }
    });

    // 3. Sincronización de colores (texto <-> selector <-> botón)
    const setupColorSync = (textIn, colorIn, btnLabel) => {
        textIn.addEventListener('input', () => { 
            colorIn.value = textIn.value; 
            btnLabel.style.backgroundColor = textIn.value; 
        });
        colorIn.addEventListener('input', () => { 
            textIn.value = colorIn.value; 
            btnLabel.style.backgroundColor = colorIn.value; 
        });
    };

    setupColorSync(
        document.getElementById('fondoTexto'), 
        document.getElementById('fondoSelector'), 
        document.getElementById('btnFondoColor')
    );
    setupColorSync(
        document.getElementById('textoTexto'), 
        document.getElementById('textoSelector'), 
        document.getElementById('btnTextoColor')
    );

    // 4. Aplicar estilo final a la celda
    btn.addEventListener('click', () => {
        const num = inputCelda.value;
        const celda = document.getElementById(`celda${num}`);
        if (celda) {
            celda.style.backgroundColor = document.getElementById('fondoSelector').value;
            celda.style.color = document.getElementById('textoSelector').value;
        } else {
            alert("Selecciona o escribe un número de celda válido (1-10).");
        }
    });
});