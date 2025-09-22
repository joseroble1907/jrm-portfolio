document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdownMenuButton');
    const dropdownItems = document.querySelectorAll('.dropdown .dropdown-item');
    const textoPrincipal = document.getElementById('texto-principal');

    const textos = {
        es: `Desarrollador junior especializado en Desarrollo de Aplicaciones Web (DAW).
            Tengo más de un año de experiencia trabajando en front-end y back-end, participando en proyectos de desarrollo web, aplicaciones de escritorio y gestión de bases de datos.`,
        en: `Junior developer specialized in Web Application Development (DAW).
            I have more than a year of experience working in front-end and back-end, participating in web development projects, desktop applications and database management.`
    };

    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = item.getAttribute('data-lang');
            textoPrincipal.textContent = textos[lang];
            dropdownButton.innerHTML = item.innerHTML;
        });
    });
});
