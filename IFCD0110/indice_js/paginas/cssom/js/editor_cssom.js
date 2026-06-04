// Referencia al elemento que vamos a manipular
const capa = document.getElementById("capa");

// --- 1. Manipulación de Color ---
document.getElementById("btnColor").addEventListener("click", () => {
    const color = document.getElementById("inputColor").value;
    capa.style.backgroundColor = color;
});

// --- 2. Manipulación de Tamaño ---
document.getElementById("btnTamano").addEventListener("click", () => {
    const ancho = document.getElementById("inputW").value;
    const alto = document.getElementById("inputH").value;
    
    capa.style.width = ancho + "px";
    capa.style.height = alto + "px";
});

// --- 3. Manipulación de Posición ---
// Nota: Para que top/left funcionen, el elemento debe tener position: absolute o relative
document.getElementById("btnPosicion").addEventListener("click", () => {
    const top = document.getElementById("inputTop").value;
    const left = document.getElementById("inputLeft").value;
    
    capa.style.position = "relative"; // Aseguramos que sea posicionable
    capa.style.top = top + "px";
    capa.style.left = left + "px";
});