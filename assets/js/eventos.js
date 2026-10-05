/* ==========================================
   eventos.js — IPASG PRO
   Renderização em lista com Busca, Filtro, Ordenação e Paginação
========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('event-container');
  const paginationEl = document.getElementById('eventPagination');
  const searchInput = document.getElementById('eventSearch');
  const categoryFilter = document.getElementById('eventCategoryFilter');
  const sortOrderSelect = document.getElementById('eventSortOrder');

  if (!container || typeof EVENTOS_DATA === 'undefined') return;

  const ITEMS_PER_PAGE = 4;
  let currentPage = 1;
  let currentFilteredEvents = [...EVENTOS_DATA];

  function getMonthName(mesIndex) {
    if (typeof MES_ABREV !== 'undefined' && MES_ABREV[mesIndex]) {
      return MES_ABREV[mesIndex];
    }
    return String(mesIndex);
  }

  function renderEventItem(evento, index) {
    const div = document.createElement('div');
    div.className = 'event-item';

    const mesTexto = evento.mesAbrev || getMonthName(evento.mes);

    div.innerHTML = `
      <div class="event-image">
        <a href="${evento.link}">
          <img src="${evento.img}" alt="${evento.titulo}" loading="lazy" />
        </a>
      </div>
      <div class="event-date">
        <span class="day">${String(evento.dia).padStart(2, '0')}</span>
        <span class="month">${mesTexto}</span>
      </div>
      <div class="event-info">
        <span class="event-category-badge"><i class="fa-solid fa-tag"></i> ${evento.categoria}</span>
        <h3 class="event-title"><a href="${evento.link}">${evento.titulo}</a></h3>
        <p class="muted event-meta">
          <span><i class="fa-solid fa-location-dot"></i> ${evento.local}</span>
          <span><i class="fa-regular fa-clock"></i> ${evento.horarioInicio} às ${evento.horarioFim}</span>
          <span><i class="fa-solid fa-ticket"></i> ${evento.valor}</span>
        </p>
        <p class="muted" style="font-size: 14px; margin-top: 6px; line-height: 1.5;">${evento.resumo}</p>
      </div>
      <div class="event-actions">
        <a href="${evento.link}" class="btn-ghost-dark event-btn"><i class="fa-solid fa-circle-info"></i> Detalhes</a>
      </div>
    `;
    return div;
  }

  function filterAndSortEvents() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedCat = categoryFilter ? categoryFilter.value : 'ALL';
    const selectedSort = sortOrderSelect ? sortOrderSelect.value : 'DATE_ASC';

    currentFilteredEvents = EVENTOS_DATA.filter(evt => {
      const matchQuery = !query || 
        evt.titulo.toLowerCase().includes(query) || 
        evt.local.toLowerCase().includes(query) ||
        evt.resumo.toLowerCase().includes(query) ||
        evt.categoria.toLowerCase().includes(query);

      const matchCat = selectedCat === 'ALL' || evt.categoria === selectedCat;

      return matchQuery && matchCat;
    });

    // Sort events
    if (selectedSort === 'DATE_ASC') {
      currentFilteredEvents.sort((a, b) => {
        const dateA = new Date(a.ano, a.mes, a.dia);
        const dateB = new Date(b.ano, b.mes, b.dia);
        return dateA - dateB;
      });
    } else if (selectedSort === 'DATE_DESC') {
      currentFilteredEvents.sort((a, b) => {
        const dateA = new Date(a.ano, a.mes, a.dia);
        const dateB = new Date(b.ano, b.mes, b.dia);
        return dateB - dateA;
      });
    } else if (selectedSort === 'TITLE_ASC') {
      currentFilteredEvents.sort((a, b) => a.titulo.localeCompare(b.titulo));
    }

    currentPage = 1;
    renderPage();
  }

  function renderPage() {
    container.innerHTML = '';
    const totalItems = currentFilteredEvents.length;

    if (totalItems === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 50px 20px; background: #ffffff; border-radius: var(--radius-lg); border: 1px solid var(--green-border);">
          <i class="fa-solid fa-calendar-xmark" style="font-size: 42px; color: var(--muted); margin-bottom: 16px;"></i>
          <h3 style="font-size: 22px; font-weight: 700; margin-bottom: 8px;">Nenhum evento encontrado</h3>
          <p class="muted" style="margin-bottom: 20px;">Tente buscar por outros termos ou selecione outra categoria.</p>
          <button id="resetFiltersBtn" class="btn-ghost-dark"><i class="fa-solid fa-rotate-left"></i> Limpar Filtros</button>
        </div>
      `;
      if (paginationEl) paginationEl.innerHTML = '';
      
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (searchInput) searchInput.value = '';
          if (categoryFilter) categoryFilter.value = 'ALL';
          if (sortOrderSelect) sortOrderSelect.value = 'DATE_ASC';
          filterAndSortEvents();
        });
      }
      return;
    }

    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
    const pageItems = currentFilteredEvents.slice(startIndex, endIndex);

    pageItems.forEach((evento, index) => {
      container.appendChild(renderEventItem(evento, index));
    });

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    if (!paginationEl) return;
    paginationEl.innerHTML = '';

    if (totalPages <= 1) return;

    // Previous Button
    const prevBtn = document.createElement('button');
    prevBtn.className = `page-btn ${currentPage === 1 ? 'disabled' : ''}`;
    prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage();
        scrollToTopList();
      }
    });
    paginationEl.appendChild(prevBtn);

    // Page Number Buttons
    for (let i = 1; i <= totalPages; i++) {
      const pBtn = document.createElement('button');
      pBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
      pBtn.textContent = i;
      pBtn.addEventListener('click', () => {
        currentPage = i;
        renderPage();
        scrollToTopList();
      });
      paginationEl.appendChild(pBtn);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = `page-btn ${currentPage === totalPages ? 'disabled' : ''}`;
    nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderPage();
        scrollToTopList();
      }
    });
    paginationEl.appendChild(nextBtn);
  }

  function scrollToTopList() {
    const controls = document.querySelector('.events-controls-bar');
    if (controls) {
      controls.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', filterAndSortEvents);
  }
  if (categoryFilter) {
    categoryFilter.addEventListener('change', filterAndSortEvents);
  }
  if (sortOrderSelect) {
    sortOrderSelect.addEventListener('change', filterAndSortEvents);
  }

  // Initial Render
  filterAndSortEvents();
});
