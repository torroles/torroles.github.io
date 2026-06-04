document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (e) => {
        // Actualizar telemetría
        document.getElementById('valKey').textContent = e.key;
        document.getElementById('valCode').textContent = e.code;
        document.getElementById('valWhich').textContent = e.which;

        // Modificadores
        document.getElementById('modCtrl').classList.toggle('badge-active', e.ctrlKey);
        document.getElementById('modShift').classList.toggle('badge-active', e.shiftKey);
        document.getElementById('modAlt').classList.toggle('badge-active', e.altKey);

        // Teclado visual
        const teclaEl = document.getElementById(e.code) || document.getElementById('Space');
        if (teclaEl) teclaEl.classList.add('tecla-activa');
    });

    document.addEventListener('keyup', (e) => {
        // Quitar clases al soltar
        document.querySelectorAll('.tecla').forEach(t => t.classList.remove('tecla-activa'));
        
        // Resetear modificadores
        document.querySelectorAll('.badge-mod').forEach(b => b.classList.remove('badge-active'));
    });
});