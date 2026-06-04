function cambiarEstilo(archivoCss, nombreTema) {
    // 1. Obtenemos el nodo link por su ID único
    const link = document.getElementById('linkEstilo');
    
    // 2. Cambiamos el href
    link.href = archivoCss;
    
    // 3. Actualizamos el texto en el DOM para informar al usuario
    const display = document.getElementById('textoEstado');
    if(display) {
        display.textContent = `Estilo aplicado: ${nombreTema}`;
    }
}