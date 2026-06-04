// ==========================================
// EJERCICIO 3: LÓGICA DE CÁLCULO DE EDAD
// ==========================================

document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    
    if (isNaN(birthdate)) {
        document.getElementById('resultadoEdad').textContent = '⚠️ Por favor, introduce una fecha válida.';
        return;
    }
    
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    
    // Ajuste de año si el cumpleaños aún no ha ocurrido este año
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    
    document.getElementById('resultadoEdad').textContent = 'Tu edad exacta es: ' + age + ' años';
});