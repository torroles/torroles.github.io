// =======================================================
// CONTROL INTERACTIVO Y ESCALABILIDAD DE MENÚS (DOM)
// =======================================================

// Inicializa todos los menús de forma dinámica al cargar la página
function inicializarMenus() {
    const menus = document.querySelectorAll('.layer');
    menus.forEach(menu => {
        menu.style.height = '36px'; // Altura base colapsada de forma segura
    });
}

// Amplía el menú activo utilizando la referencia dinámica 'this' pasada desde el HTML
function ampliarMenu(elementoMenu) {
    elementoMenu.style.height = '200px';
}

// Reduce el menú activo al retirar el puntero
function reducirMenu(elementoMenu) {
    elementoMenu.style.height = '36px';
}