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

  /* ----------------------------------------------------------
     SEÇÃO "PRÓXIMOS EVENTOS" OCULTA — uso futuro.
     Liberar alterando MOSTRAR_PROXIMOS para true.
  ---------------------------------------------------------- */
  const MOSTRAR_PROXIMOS = false;

  const ITEMS_PER_PAGE = 8;
  let currentPage = 1;
  let currentFilteredEvents = [...EVENTOS_DATA];
  let currentSort = 'DATE_ASC';

  const dataDo = e => new Date(e.ano, e.mes, e.dia);
  function getHoje() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function getMonthName(mesIndex) {
    if (typeof MES_ABREV !== 'undefined' && MES_ABREV[mesIndex]) {
      return MES_ABREV[mesIndex];
    }
    return String(mesIndex);
  }

  function renderEventItem(evento, past) {
    const div = document.createElement('div');
    div.className =
      'event-item' +
      (past ? ' event-item--past' : '') +
      (evento.link ? '' : ' event-item--nolink');

    const mesTexto = evento.mesAbrev || getMonthName(evento.mes);

    // Eventos do histórico importado não têm página de detalhe:
    // ficam sem âncora na imagem, no título e sem botão "Detalhes".
    const link = evento.link || '';
    const imagem = link
      ? `<a href="${link}"><img src="${evento.img}" alt="${evento.titulo}" loading="lazy" /></a>`
      : `<img src="${evento.img}" alt="${evento.titulo}" loading="lazy" />`;
    const titulo = link
      ? `<h3 class="event-title"><a href="${link}">${evento.titulo}</a></h3>`
      : `<h3 class="event-title">${evento.titulo}</h3>`;
    const valor = evento.valor
      ? `<span><i class="fa-solid fa-ticket"></i> ${evento.valor}</span>`
      : '';
    const acoes = link
      ? `<div class="event-actions">
           <a href="${link}" class="btn-ghost-dark event-btn"><i class="fa-solid fa-circle-info"></i> Detalhes</a>
         </div>`
      : '';

    div.innerHTML = `
      <div class="event-image">${imagem}</div>
      <div class="event-date">
        <span class="day">${String(evento.dia).padStart(2, '0')}</span>
        <span class="month">${mesTexto}</span>
      </div>
      <div class="event-info">
        <span class="event-category-badge"><i class="fa-solid fa-tag"></i> ${evento.categoria}</span>
        ${titulo}
        <p class="muted event-meta">
          <span><i class="fa-solid fa-location-dot"></i> ${evento.local}</span>
          <span><i class="fa-regular fa-clock"></i> ${evento.horarioInicio} às ${evento.horarioFim}</span>
          ${valor}
        </p>
        <p class="muted" style="font-size: 14px; margin-top: 6px; line-height: 1.5;">${evento.resumo || ''}</p>
      </div>
      ${acoes}
    `;
    return div;
  }

  function filterAndSortEvents() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedCat = categoryFilter ? categoryFilter.value : 'ALL';
    const selectedSort = sortOrderSelect ? sortOrderSelect.value : 'DATE_ASC';
    const hoje = getHoje();

    currentFilteredEvents = EVENTOS_DATA.filter(evt => {
      const matchQuery = !query || 
        evt.titulo.toLowerCase().includes(query) || 
        evt.local.toLowerCase().includes(query) ||
        evt.resumo.toLowerCase().includes(query) ||
        evt.categoria.toLowerCase().includes(query);

      const matchCat = selectedCat === 'ALL' || evt.categoria === selectedCat;

      // Enquanto a seção de próximos estiver oculta, os eventos futuros
      // saem do cálculo (senão ocupariam vaga na paginação sem aparecer).
      const matchVisib = MOSTRAR_PROXIMOS || dataDo(evt) < hoje;

      return matchQuery && matchCat && matchVisib;
    });

    // Sort events
    const ehFuturo = e => dataDo(e) >= hoje;

    if (selectedSort === 'DATE_ASC') {
      // Mais próximos primeiro: eventos futuros (mais próximo primeiro),
      // depois os já realizados (mais recente primeiro).
      currentFilteredEvents.sort((a, b) => {
        const futA = ehFuturo(a), futB = ehFuturo(b);
        if (futA !== futB) return futA ? -1 : 1;
        return futA ? dataDo(a) - dataDo(b) : dataDo(b) - dataDo(a);
      });
    } else if (selectedSort === 'DATE_DESC') {
      // Inverso do "mais próximos": realizados primeiro (mais antigo
      // primeiro) e, no fim, os futuros (mais distante primeiro).
      currentFilteredEvents.sort((a, b) => {
        const futA = ehFuturo(a), futB = ehFuturo(b);
        if (futA !== futB) return futA ? 1 : -1;
        return futA ? dataDo(b) - dataDo(a) : dataDo(a) - dataDo(b);
      });
    } else if (selectedSort === 'TITLE_ASC') {
      currentFilteredEvents.sort((a, b) => a.titulo.localeCompare(b.titulo, 'pt-BR'));
    }

    currentSort = selectedSort;
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

    // Ordenação por nome: lista alfabética plana, sem seções por data.
    if (currentSort === 'TITLE_ASC') {
      pageItems.forEach(evt => container.appendChild(renderEventItem(evt, false)));
      renderPagination(totalPages);
      return;
    }

    // Seções por data: próximos (futuros) e anteriores (já realizados).
    const hoje = getHoje();
    const futuros = pageItems.filter(e => dataDo(e) >= hoje);
    const passados = pageItems.filter(e => dataDo(e) < hoje);

    if (MOSTRAR_PROXIMOS && futuros.length) {
      container.appendChild(
        sectionHeader('Próximos Eventos', 'fa-calendar-check', false)
      );
      futuros.forEach(evt => container.appendChild(renderEventItem(evt, false)));
    }

    if (passados.length) {
      container.appendChild(
        sectionHeader('Eventos Anteriores', 'fa-clock-rotate-left', true)
      );
      passados.forEach(evt => container.appendChild(renderEventItem(evt, true)));
    }

    renderPagination(totalPages);
  }

  function sectionHeader(titulo, icone, isPast) {
    const h = document.createElement('h2');
    h.className = 'events-section-header' + (isPast ? ' events-section-header--past' : '');
    h.innerHTML = `<i class="fa-solid ${icone}"></i> ${titulo}`;
    return h;
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
    // A barra de controles pode estar oculta; nesse caso rola para a lista.
    const controles = document.querySelector('.events-controls-bar');
    const alvo =
      controles && controles.offsetParent !== null ? controles : container;
    const y = alvo.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: 'smooth' });
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
