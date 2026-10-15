document.addEventListener("DOMContentLoaded", () => {
  const accordionContainer = document.getElementById("categoriesAccordion");
  const searchInput = document.getElementById("searchInput");
  const modalidadFilter = document.getElementById("modalidadFilter");
  const categoriaFilter = document.getElementById("categoriaFilter");
  const noResults = document.getElementById("noResults");
  const clearFiltersBtn = document.getElementById("clearFiltersBtn");

  // Elementos del Modal
  const modal = document.getElementById("courseModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalStatus = document.getElementById("modalStatus");
  const modalModalidad = document.getElementById("modalModalidad");
  const modalDuracion = document.getElementById("modalDuracion");
  const modalFechas = document.getElementById("modalFechas");
  const modalPrecio = document.getElementById("modalPrecio");
  const modalDesc = document.getElementById("modalDesc");
  const modalWhatsAppBtn = document.getElementById("modalWhatsAppBtn");

  // 1. Inicializar Select de Categorías
  CATEGORIAS_OFICIALES.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoriaFilter.appendChild(opt);
  });

  // 2. Renderizado Principal
  function renderAccordion() {
    accordionContainer.innerHTML = "";
    const query = searchInput.value.trim().toLowerCase();
    const selMod = modalidadFilter.value;
    const selCat = categoriaFilter.value;

    let totalCursosVisibles = 0;

    CATEGORIAS_OFICIALES.forEach((categoriaNombre, index) => {
      // Si hay filtro de categoría y no coincide, saltar
      if (selCat && selCat !== categoriaNombre) return;

      // Filtrar cursos de esta categoría
      const cursos = CURSOS_DATA.filter(c => {
        if (c.categoria !== categoriaNombre) return false;
        if (selMod && c.modalidad !== selMod) return false;
        if (query) {
          const matchTexto = c.titulo.toLowerCase().includes(query) ||
                             c.descripcionCorta.toLowerCase().includes(query) ||
                             c.categoria.toLowerCase().includes(query);
          if (!matchTexto) return false;
        }
        return true;
      });

      // Crear tarjeta de acordeón
      const itemDiv = document.createElement("div");
      itemDiv.className = "accordion-item";
      if (query || selMod || selCat) {
        itemDiv.classList.add("open"); // Abrir si el usuario está buscando
      } else if (index === 0) {
        itemDiv.classList.add("open"); // Abrir el primero por defecto
      }

      // Encabezado
      const headerBtn = document.createElement("button");
      headerBtn.className = "accordion-header";
      headerBtn.setAttribute("type", "button");
      headerBtn.innerHTML = `
        <div class="accordion-header-left">
          <div class="cat-indicator"></div>
          <span class="cat-name">${categoriaNombre}</span>
          <span class="cat-count">${cursos.length}</span>
        </div>
        <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      `;

      // Alternar acordeón
      headerBtn.addEventListener("click", () => {
        itemDiv.classList.toggle("open");
      });

      // Contenido (Grilla de Cursos)
      const contentDiv = document.createElement("div");
      contentDiv.className = "accordion-content";

      if (cursos.length > 0) {
        const gridDiv = document.createElement("div");
        gridDiv.className = "courses-grid";

        cursos.forEach(curso => {
          totalCursosVisibles++;
          const card = document.createElement("article");
          card.className = "course-card";
          card.innerHTML = `
            <div class="card-top">
              <div class="tag-row">
                <span class="modalidad-tag">${curso.modalidad}</span>
                <span class="status-tag ${curso.disponible ? 'disponible' : 'agotado'}">
                  ${curso.disponible ? 'Disponible' : 'Cupos Agotados / Por Programar'}
                </span>
              </div>
              <h3 class="course-card-title">${curso.titulo}</h3>
              <p class="course-card-desc">${curso.descripcionCorta}</p>
              <div class="card-meta-list">
                <div><strong>Duración:</strong> ${curso.duracion}</div>
                <div><strong>Fechas:</strong> ${curso.fechas}</div>
              </div>
            </div>
            <div class="card-actions">
              <button class="btn-card-details" data-id="${curso.id}">Ver detalles</button>
              <a href="https://wa.me/573163741046?text=Hola,%20me%20interesa%20el%20curso:%20${encodeURIComponent(curso.titulo)}" target="_blank" rel="noopener noreferrer" class="btn-card-contact">Inscribirme</a>
            </div>
          `;
          gridDiv.appendChild(card);
        });

        contentDiv.appendChild(gridDiv);
      } else {
        contentDiv.innerHTML = `<p style="padding: 1rem 0; font-size: 0.88rem; color: #8a99a8;">No hay capacitaciones programadas en esta área con los filtros aplicados.</p>`;
      }

      itemDiv.appendChild(headerBtn);
      itemDiv.appendChild(contentDiv);
      accordionContainer.appendChild(itemDiv);
    });

    // Control de mensaje de "sin resultados"
    if (totalCursosVisibles === 0) {
      noResults.classList.remove("hidden");
    } else {
      noResults.classList.add("hidden");
    }
  }

  // 3. Manejo de Modal de Detalles
  accordionContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-card-details")) {
      const id = e.target.getAttribute("data-id");
      const curso = CURSOS_DATA.find(c => c.id === id);
      if (curso) {
        modalTitle.textContent = curso.titulo;
        modalCategory.textContent = curso.categoria;
        modalStatus.textContent = curso.disponible ? "Disponible" : "Cupos Agotados / Por Programar";
        modalStatus.className = `badge-status ${curso.disponible ? 'disponible' : 'agotado'}`;
        modalModalidad.textContent = curso.modalidad;
        modalDuracion.textContent = curso.duracion;
        modalFechas.textContent = curso.fechas;
        modalPrecio.textContent = curso.precio || "A convenir";
        modalDesc.textContent = curso.objetivos || curso.descripcionCorta;
        modalWhatsAppBtn.href = `https://wa.me/573163741046?text=Hola,%20solicito%20inscribirme%20o%20recibir%20el%20temario%20del%20curso:%20${encodeURIComponent(curso.titulo)}`;
        
        modal.classList.remove("hidden");
      }
    }
  });

  closeModalBtn.addEventListener("click", () => modal.classList.add("hidden"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden");
  });

  // 4. Eventos de búsqueda y filtros
  searchInput.addEventListener("input", renderAccordion);
  modalidadFilter.addEventListener("change", renderAccordion);
  categoriaFilter.addEventListener("change", renderAccordion);

  clearFiltersBtn.addEventListener("click", () => {
    searchInput.value = "";
    modalidadFilter.value = "";
    categoriaFilter.value = "";
    renderAccordion();
  });

  // Render inicial
  renderAccordion();
});
