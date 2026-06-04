var ventanaNueva;

function abreURL() {
    const url = document.form1.url.value;
    
    // Verificamos si la ventana ya existe y no está cerrada
    if (!ventanaNueva || ventanaNueva.closed) {
        ventanaNueva = window.open("", "miventana", "width=600, height=400, menubar=no, status=yes, scrollbars=yes");
    }
    
    // Cargamos la URL
    ventanaNueva.location.href = url;
    ventanaNueva.focus(); // Traemos la ventana al frente
}

function cerrarVentana() {
    if (ventanaNueva && !ventanaNueva.closed) {
        ventanaNueva.close();
    } else {
        alert("No hay ninguna ventana abierta.");
    }
}