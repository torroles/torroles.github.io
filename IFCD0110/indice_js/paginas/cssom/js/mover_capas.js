document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica para botones (Capa 1)
    const capa1 = document.getElementById('capa1');
    document.querySelectorAll('.btn-interactivo').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const dir = e.target.getAttribute('data-dir');
            // Usamos offsetTop/Left para simplificar la lectura de posición
            let top = capa1.offsetTop;
            let left = capa1.offsetLeft;

            if (dir === 'top') capa1.style.top = (top - 10) + 'px';
            if (dir === 'bottom') capa1.style.top = (top + 10) + 'px';
            if (dir === 'left') capa1.style.left = (left - 10) + 'px';
            if (dir === 'right') capa1.style.left = (left + 10) + 'px';
        });
    });

    // 2. Lógica para arrastre (Capa 2)
    const capa2 = document.getElementById('capa2');
    let isDragging = false;

    capa2.addEventListener('mousedown', () => isDragging = true);
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            capa2.style.left = (e.clientX - 50) + 'px';
            capa2.style.top = (e.clientY - 50) + 'px';
        }
    });

    document.addEventListener('mouseup', () => isDragging = false);
});