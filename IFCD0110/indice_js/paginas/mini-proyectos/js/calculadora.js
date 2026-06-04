// ==========================================
// LÓGICA DE NEGOCIO: MOTOR DE LA CALCULADORA
// ==========================================
function calcular(num1, num2, operacion) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Error: Por favor, ingresa números válidos.";
    }

    var resultado;

    if (operacion === "+") {
        resultado = num1 + num2;
    } else if (operacion === "-") {
        resultado = num1 - num2;
    } else if (operacion === "*") {
        resultado = num1 * num2;
    } else if (operacion === "/") {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            return "Error: No se puede dividir entre cero.";
        }
    } else {
        return "Error: Operación no válida.";
    }

    // Formateo para evitar decimales infinitos rotos en JS
    return "El resultado de " + num1 + " " + operacion + " " + num2 + " es: " + Number(resultado.toFixed(4));
}

// ==========================================
// INTERFACCION CON EL DOM (CONTROLADOR)
// ==========================================
function procesarCalculo() {
    const n1 = parseFloat(document.getElementById("calcNum1").value);
    const n2 = parseFloat(document.getElementById("calcNum2").value);
    const op = document.getElementById("calcOperacion").value;
    
    const cajaResultado = document.getElementById("resultadoCalculadora");

    // Validación de campos obligatorios vacíos
    if (document.getElementById("calcNum1").value === "" || document.getElementById("calcNum2").value === "") {
        cajaResultado.className = "resultado estado-error";
        cajaResultado.textContent = "Error: Ambos campos numéricos son obligatorios.";
        return;
    }

    const mensajeResultado = calcular(n1, n2, op);

    // Renderizado dinámico de estilos según el estado de la respuesta
    if (mensajeResultado.includes("Error")) {
        cajaResultado.className = "resultado estado-error";
    } else {
        cajaResultado.className = "resultado estado-exito";
    }
    
    cajaResultado.textContent = mensajeResultado;
}