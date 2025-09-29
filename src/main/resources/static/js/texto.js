document.addEventListener('DOMContentLoaded', () => {
  try {
    /* ==============================
       TRADUCCIONES (ES ↔ EN)
       ============================== */
    const translations = {
      es: {
        verCV: "Ver CV",
        demoProyectos: "Demo proyectos",
        contactar: "Contactar vía mail",
        descripcionLarga: `Desarrollador junior especializado en Desarrollo de Aplicaciones Web (DAW).
          Tengo más de un año de experiencia trabajando en front-end y back-end,
          participando en proyectos de desarrollo web, aplicaciones de escritorio y gestión de bases de datos.
          <br><br>
          Me apasiona crear soluciones innovadoras usando tecnologías como Angular,
          Spring Boot y .NET, siempre aplicando buenas prácticas y metodologías ágiles como Scrum y Kanban.`,
        habilidadesTitulo: "Habilidades",
        lenguajesTitulo: "Lenguajes",
        frameworksTitulo: "Frameworks",
        herramientasTitulo: "Herramientas",
        otrosTitulo: "Otros"
      },
      en: {
        verCV: "View CV",
        demoProyectos: "Project Demo",
        contactar: "Contact via email",
        descripcionLarga: `Junior developer specialized in Web Application Development (DAW).
          I have over a year of experience working on both front-end and back-end,
          participating in projects involving web development, desktop applications, and database management.
          <br><br>
          I'm passionate about creating innovative solutions using technologies such as Angular,
          Spring Boot, and .NET, always applying best practices and agile methodologies like Scrum and Kanban.`,
        habilidadesTitulo: "Skills",
        lenguajesTitulo: "Languages",
        frameworksTitulo: "Frameworks",
        herramientasTitulo: "Tools",
        otrosTitulo: "Others"
      }
    };

    /* ==============================
       CAMBIO DE IDIOMA
       ============================== */
    const dropdownButton = document.getElementById('dropdownMenuButton');

    const updateLanguage = (lang) => {
      // Actualizar textos dinámicamente
      document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
          if (el.tagName === "P" || el.tagName === "H2" || el.tagName === "DIV") {
            el.innerHTML = translations[lang][key];
          } else {
            el.textContent = translations[lang][key];
          }
        }
      });

      // Actualizar el texto y la bandera del botón principal
      const flagIcon = lang === 'es' ? '/img/es.png' : '/img/en.png';
      const langText = lang.toUpperCase();
      dropdownButton.innerHTML = `<img class="flagIcon" src="${flagIcon}" alt="${langText}"/> ${langText}`;
    };

    // Detectar clic en las opciones de idioma
    document.querySelectorAll('.lang-select').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = button.getAttribute('data-lang');
        updateLanguage(lang);
      });
    });

    /* ==============================
       LÓGICA PARA LOS DESPLEGABLES
       ============================== */
    const toggleHeaders = document.querySelectorAll('.toggle-header');

    toggleHeaders.forEach(header => {
      const content = header.nextElementSibling;
      header.addEventListener('click', () => {
        header.classList.toggle('active');
        content.classList.toggle('show');
      });
    });

    /* ==============================
       ANIMACIÓN DE BARRAS DE SKILLS
       ============================== */
    const bars = document.querySelectorAll('.progress');
    bars.forEach((bar, i) => {
      const percent = Number(bar.getAttribute('data-percent')) || 0;
      setTimeout(() => {
        bar.style.width = percent + '%';
      }, 150 * i);
    });

    console.log('main.js: Inicializado correctamente');
  } catch (err) {
    console.error('main.js: Error inesperado', err);
  }
});
