// ======================================================
// CONFIGURACIÓN E INICIALIZACIÓN
// ======================================================
const API_KEY_NINJAS = "wkoHlGWXyg17iIkrTpvTfr3OxZRlmjxAmKuSY54L";
const API_KEY_PIXABAY = "54105193-418cada3e3769cdbbe141ec8d";

document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos del DOM
    const btnBuscar = document.getElementById("buscarBtn");
    
    // Vinculación del evento
    if (btnBuscar) {
        btnBuscar.addEventListener("click", buscarMoto);
        console.log("Sistema listo: Evento vinculado.");
    } else {
        console.error("Error: No se encontró el botón con ID 'buscarBtn'.");
    }
});

// ======================================================
// GESTIÓN DE UI (Spinner y Mensajes)
// ======================================================
const mostrarSpinner = () => document.getElementById("spinner").classList.remove("oculto");
const ocultarSpinner = () => document.getElementById("spinner").classList.add("oculto");

function mostrarMensaje(txt) {
    const contenedor = document.getElementById("mensaje");
    contenedor.textContent = txt;
    contenedor.classList.remove("oculto");
}

function ocultarMensaje() {
    document.getElementById("mensaje").classList.add("oculto");
}

// ======================================================
// LÓGICA DE BÚSQUEDA
// ======================================================
async function buscarMoto() {
    const marca = document.getElementById("marca").value.trim();
    const modelo = document.getElementById("modelo").value.trim();
    const year = document.getElementById("año").value.trim();

    if (!marca && !modelo) {
        mostrarMensaje("⚠️ Por favor, escribe al menos una marca o un modelo.");
        return;
    }

    ocultarMensaje();
    document.getElementById("resultados").innerHTML = "";
    mostrarSpinner();

    try {
        let url = `https://api.api-ninjas.com/v1/motorcycles?make=${encodeURIComponent(marca)}`;
        if (modelo) url += `&model=${encodeURIComponent(modelo)}`;
        if (year) url += `&year=${year}`;

        const res = await fetch(url, {
            headers: { "X-Api-Key": API_KEY_NINJAS },
            "Accept": "application/json"
        });

        if (!res.ok) throw new Error("Error en la respuesta del servidor (Status: " + res.status + ")");

        const data = await res.json();
        ocultarSpinner();
        
        if (data.length === 0) {
            mostrarMensaje("❌ No se encontraron resultados.");
        } else {
            await mostrarMotos(data);
        }
    } catch (error) {
        ocultarSpinner();
        mostrarMensaje("Error: " + error.message);
        console.error("Detalle:", error);
    }
}

// ======================================================
// RENDERIZADO DE RESULTADOS
// ======================================================
async function mostrarMotos(motos) {
    const contenedor = document.getElementById("resultados");
    contenedor.innerHTML = "";

    const limiteMotos = motos.slice(0, 10);

    for (const moto of limiteMotos) {
        const card = document.createElement("div");
        card.classList.add("moto-card");

        const imagenURL = await obtenerImagenMoto(moto.make, moto.model);

        card.innerHTML = `
            <h2>${moto.make} ${moto.model}</h2>
            <p class="year-tag">Año: ${moto.year || 'N/A'}</p>
            <img src="${imagenURL}" class="moto-img" alt="${moto.model}" style="width:100%; max-width:300px; border-radius:8px;">
            <div class="info">
                <p><strong>Tipo:</strong> ${moto.type || 'N/A'}</p>
                <p><strong>Motor:</strong> ${moto.engine || 'N/A'}</p>
                <p><strong>Potencia:</strong> ${moto.power || 'N/A'}</p>
            </div>
        `;
        contenedor.appendChild(card);
    }
}

async function obtenerImagenMoto(marca, modelo) {
    try {
        const query = `${marca} ${modelo} motorcycle`;
        const url = `https://pixabay.com/api/?key=${API_KEY_PIXABAY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=3`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.hits && data.hits.length > 0) return data.hits[0].webformatURL;
    } catch (e) { console.error("Error al buscar imagen"); }
    return "https://placehold.co/600x400/222/fff?text=Moto+Sin+Imagen";
}