// Lógica de validación 
function procesarValidaciones() {
    const emailValue = document.getElementById('email').value.trim();
    const nodoRegex = document.getElementById('resRegex');
    const nodoAlgo = document.getElementById('resAlgoritmico');

    if (emailValue === "") {
        nodoRegex.textContent = "❌ Campo vacío";
        nodoRegex.className = "status-badge error";
        nodoAlgo.textContent = "❌ Campo vacío";
        nodoAlgo.className = "status-badge error";
        return;
    }

    // Método 1: Regex
    if (validarEmailRegex(emailValue)) {
        nodoRegex.textContent = "✅ Válido (Patrón coincidente)";
        nodoRegex.className = "status-badge correcto";
    } else {
        nodoRegex.textContent = "❌ Inválido (Estructura incorrecta)";
        nodoRegex.className = "status-badge error";
    }

    // Método 2: Algorítmico
    if (validarEmailAlgoritmico(emailValue)) {
        nodoAlgo.textContent = "✅ Válido (Reglas de cadena superadas)";
        nodoAlgo.className = "status-badge correcto";
    } else {
        nodoAlgo.textContent = "❌ Inválido (Fallo de tokens)";
        nodoAlgo.className = "status-badge error";
    }
}

function validarEmailRegex(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validarEmailAlgoritmico(email) {
    const atIndex = email.indexOf('@');
    if (atIndex <= 0 || atIndex === email.length - 1) return false;
    
    const [local, domain] = email.split('@');
    if (!local || !domain || domain.indexOf('.') <= 0 || domain.indexOf('.') === domain.length - 1) return false;
    if (domain.includes('..')) return false;

    const invalidChars = [' ', '!', '#', '$', '%', '&', '*', '(', ')', '+', ',', '/', ':', ';', '<', '=', '>', '?', '[', '\\', ']', '^', '`', '{', '|', '}', '~'];
    return !invalidChars.some(char => email.includes(char));
}