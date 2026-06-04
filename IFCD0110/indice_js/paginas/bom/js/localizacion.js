function obtenerPosicion() {
            navigator.geolocation.getCurrentPosition(pos => {
                document.getElementById('infoUbicacion').textContent = `Latitud: ${pos.coords.latitude}, Longitud: ${pos.coords.longitude}`;
            }, err => { alert("Error de acceso: " + err.message); });
        }