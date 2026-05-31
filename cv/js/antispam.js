/**
 * Gestión antibots interactiva para datos de contacto
 * Revela los strings reales en Hover y los oculta al salir del elemento
 */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.obfuscated-link').forEach(link => {
    const textTarget = link.querySelector('.link-text');
    const secureValue = link.getAttribute('data-secure');
    const realValue = link.getAttribute('data-real');

    // Cambia al valor real al pasar el ratón (Hover)
    link.addEventListener('mouseenter', () => {
      if (textTarget) {
        textTarget.textContent = realValue;
      }
    });

    // Restaura al valor seguro antibots al salir el cursor
    link.addEventListener('mouseleave', () => {
      if (textTarget) {
        textTarget.textContent = secureValue;
      }
    });
  });
});