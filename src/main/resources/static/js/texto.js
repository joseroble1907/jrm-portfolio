document.addEventListener('DOMContentLoaded', () => {
  try {
    // ===== LÓGICA PARA LOS DESPLEGABLES =====
    const toggleHeaders = document.querySelectorAll('.toggle-header');

    toggleHeaders.forEach(header => {
      const content = header.nextElementSibling; // El contenido justo después del header
      header.addEventListener('click', () => {
        header.classList.toggle('active');
        content.classList.toggle('show');
      });
    });

    // ===== ANIMACIÓN DE BARRAS =====
    const bars = document.querySelectorAll('.progress');
    bars.forEach((bar, i) => {
      const percent = Number(bar.getAttribute('data-percent')) || 0;
      setTimeout(() => {
        bar.style.width = percent + '%';
      }, 150 * i);
    });

    console.log('toggle.js: Inicializado correctamente');
  } catch (err) {
    console.error('toggle.js: Error inesperado', err);
  }
});
