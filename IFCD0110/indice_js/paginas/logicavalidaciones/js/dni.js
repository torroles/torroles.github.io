// ==========================================
// EJERCICIO 5: LÓGICA DE CONTROL DE LETRA DNI
// ==========================================

function calcularLetraDNI() {
    const dniInput = document.getElementById("dni").value.trim();
    
    // Validación: no vacío y numérico
    if (dniInput === "" || isNaN(dniInput)) {
        document.getElementById("resultadoDNI").textContent = "❌ Por favor, introduce un número de DNI válido sin letras.";
        return;
    }

    const dniNumero = parseInt(dniInput, 10);
    // Cadena maestra de control española
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    
    // Operación módulo 23
    const posicion = dniNumero % 23;
    const letra = letras.charAt(posicion);
    
    document.getElementById("resultadoDNI").textContent = `La letra de su DNI es: ${letra} ➡️ (${dniInput}-${letra})`;
}