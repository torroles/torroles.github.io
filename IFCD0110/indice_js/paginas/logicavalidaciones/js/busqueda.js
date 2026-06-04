// ==========================================
// EJERCICIO 2: LÓGICA DE BÚSQUEDAS BOOLEANAS
// ==========================================

function buscarEnGoogle(query) {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
}

function ejecutarBusqueda1() {
    const query1 = '"certificado de profesionalidad" AND ("manual" OR "texto")';
    buscarEnGoogle(query1);
    document.getElementById("feedbackBusqueda").textContent = "🚀 Lanzada Búsqueda 1 en Google.";
}

function ejecutarBusqueda2() {
    const query2 = '(diario OR noticias OR "última hora") AND (on-line OR "en línea")';
    buscarEnGoogle(query2);
    document.getElementById("feedbackBusqueda").textContent = "🚀 Lanzada Búsqueda 2 en Google.";
}