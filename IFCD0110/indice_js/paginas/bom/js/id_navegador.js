// 1. Definición del objeto BrowserDetect
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
            } else if (dataProp) return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },
    dataBrowser: [
        { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
        { string: navigator.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE" },
        { string: navigator.userAgent, subString: "Chrome", identity: "Chrome" },
        { string: navigator.vendor, subString: "Apple", identity: "Safari" }
    ],
    dataOS: [
        { string: navigator.platform, subString: "Win", identity: "Windows" },
        { string: navigator.platform, subString: "Mac", identity: "Mac" },
        { string: navigator.platform, subString: "Linux", identity: "Linux" }
    ]
};

// 2. Ejecución al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    BrowserDetect.init();

    // Rellenar la lista
    document.getElementById('navegador').textContent = `Navegador: ${BrowserDetect.browser}`;
    document.getElementById('version').textContent = `Versión: ${BrowserDetect.version}`;
    document.getElementById('sistema').textContent = `Sistema Operativo: ${BrowserDetect.OS}`;
    document.getElementById('resolucion').textContent = `Resolución: ${window.screen.width}x${window.screen.height} px`;
    document.getElementById('idioma').textContent = `Idioma: ${navigator.language}`;

    // Lógica CSS
    let styleFile = "estilo_otros.css";
    if (BrowserDetect.browser === "Firefox") styleFile = "estilo_firefox.css";
    else if (BrowserDetect.browser === "Explorer") styleFile = "estilo_ie7.css";

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `css/${styleFile}`;
    document.head.appendChild(link);
});