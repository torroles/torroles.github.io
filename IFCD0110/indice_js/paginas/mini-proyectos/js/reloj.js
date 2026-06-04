// ==========================================
// LÓGICA DE NEGOCIO: PROCESAMIENTO DE TIEMPO
// ==========================================
function mueveReloj() {
    const momentoActual = new Date();
    
    // Captura y formateo moderno con padStart. 
    // Asegura que si el número es menor a 10 (ej: 5), le ponga un "0" delante ("05")
    const hora = String(momentoActual.getHours()).padStart(2, "0");
    const minuto = String(momentoActual.getMinutes()).padStart(2, "0");
    const segundo = String(momentoActual.getSeconds()).padStart(2, "0");

    const horaImprimible = hora + " : " + minuto + " : " + segundo;

    // Renderizado limpio en el DOM apuntando por ID
    document.getElementById("displayReloj").textContent = horaImprimible;

    // Corrección crítica: Pasar la referencia de la función directamente sin comillas
    setTimeout(mueveReloj, 1000);
}