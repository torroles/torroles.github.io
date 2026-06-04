document.addEventListener('DOMContentLoaded', () => {
    // Ejercicio 1: Validación manual
    document.getElementById('form1').addEventListener('submit', (e) => {
        if (!validarFormulario()) e.preventDefault();
    });

    // Ejercicio 2: Validación numérica
    document.getElementById('btnValidarNum').addEventListener('click', myFunction);
});

function validarFormulario() {
    let x = document.forms['miFormulario']['Nombre'].value;
    if (x.trim() === "") {
        alert("Ingrese el nombre");
        return false;
    }
    return true;
}

function myFunction() {
    let x = document.getElementById("numb").value;
    let text = (isNaN(x) || x < 1 || x > 10 || x.trim() === "") ? "Input no es válido" : "Input OK";
    document.getElementById("demo").innerHTML = text;
}

function cambiarVentanaPadre() {
    if (window.opener) {
        try {
            window.opener.document.getElementById("texto").innerHTML = "la ventana se ha cerrado";
        } catch (error) { console.log("Acceso denegado a la ventana padre."); }
    }
}