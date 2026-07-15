/* ==========================================
   eventos.js
   Listagem de eventos com paginação + calendário
   + loading skeleton.
   Depende de eventos-data.js (EVENTOS_DATA, MES_ABREV)
   carregado ANTES deste arquivo.
========================================== */

(function () {
  const ITEMS_PER_PAGE = 6;

  let state = {
    view: 'lista', // 'lista' | 'calendario'
    page: 1,
    selectedDate: null, // { dia, mes, ano } quando filtrado pelo calendário
    calendarMonth: new Date().getMonth(),
    calendarYear: new Date().getFullYear(),
  };

  function eventDate(evento) {
    return new Date(evento.ano, evento.mes, evento.dia);
  }

  function sortedEvents() {
    return [...EVENTOS_DATA].sort((a, b) => eventDate(a) - eventDate(b));
  }

  function filteredEvents() {
    const all = sortedEvents();
    if (!state.selectedDate) return all;
    const { dia, mes, ano } = state.selectedDate;
    return all.filter(e => e.dia === dia && e.mes === mes && e.ano === ano);
  }

  /* ---------- CARD DE EVENTO ---------- */
  function buildEventItem(evento, index) {
    const div = document.createElement('div');
    div.className = 'event-item';
    div.style.opacity = '0';
    div.style.animation =
      'fadeInUp 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards';
    div.style.animationDelay = `${index * 0.08}s`;

    div.innerHTML = `
      <div class="event-image">
        <img src="${evento.img}" alt="${evento.titulo}" loading="lazy" />
      </div>
      <div class="event-date">
        <span class="day">${String(evento.dia).padStart(2, '0')}</span>
        <span class="month">${MES_ABREV[evento.mes]}</span>
      </div>
      <div class="event-info">
        <h3 class="event-title">${evento.titulo}</h3>
        <p class="muted event-loc">
          <i class="fa-solid fa-location-dot"></i> ${evento.local}
        </p>
      </div>
      <a href="${evento.link}" class="btn-ghost-dark event-btn">Detalhes</a>
    `;
    return div;
  }

  /* ---------- SKELETON (LOADING) ---------- */
  function renderSkeleton(container, count = 4) {
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const sk = document.createElement('div');
      sk.className = 'skeleton-card skeleton';
      sk.innerHTML = `
        <div class="skeleton-img skeleton"></div>
        <div class="skeleton-lines">
          <div class="skeleton-line short skeleton"></div>
          <div class="skeleton-line medium skeleton"></div>
          <div class="skeleton-line short skeleton"></div>
        </div>
      `;
      container.appendChild(sk);
    }
  }

  /* ---------- PAGINAÇÃO ---------- */
  function renderPagination(container, totalItems) {
    container.innerHTML = '';
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    if (totalPages <= 1) return;

    const prev = document.createElement('button');
    prev.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    prev.disabled = state.page === 1;
    prev.setAttribute('aria-label', 'Página anterior');
    prev.addEventListener('click', () => changePage(state.page - 1));
    container.appendChild(prev);

    for (let p = 1; p <= totalPages; p++) {
      const btn = document.createElement('button');
      btn.textContent = p;
      if (p === state.page) btn.classList.add('active');
      btn.addEventListener('click', () => changePage(p));
      container.appendChild(btn);
    }

    const next = document.createElement('button');
    next.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    next.disabled = state.page === totalPages;
    next.setAttribute('aria-label', 'Próxima página');
    next.addEventListener('click', () => changePage(state.page + 1));
    container.appendChild(next);
  }

  function changePage(page) {
    state.page = page;
    renderList(true);
    document
      .getElementById('event-container')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------- RENDER DA LISTA ---------- */
  function renderList(withLoading) {
    const container = document.getElementById('event-container');
    const paginationEl = document.getElementById('eventPagination');
    if (!container) return;

    const data = filteredEvents();
    const start = (state.page - 1) * ITEMS_PER_PAGE;
    const pageItems = data.slice(start, start + ITEMS_PER_PAGE);

    function paint() {
      container.innerHTML = '';

      if (pageItems.length === 0) {
        container.innerHTML = `<p class="muted" style="text-align:center; padding:40px;">Nenhum evento encontrado para esta data.</p>`;
      } else {
        pageItems.forEach((evento, index) => {
          container.appendChild(buildEventItem(evento, index));
        });
      }
      renderPagination(paginationEl, data.length);
    }

    if (withLoading) {
      renderSkeleton(container, Math.min(pageItems.length || 3, 4));
      paginationEl.innerHTML = '';
      setTimeout(paint, 450);
    } else {
      paint();
    }
  }

  /* ---------- FILTRO PELO CALENDÁRIO ---------- */
  function renderFilterNote() {
    const note = document.getElementById('calendarFilterNote');
    if (!note) return;

    if (!state.selectedDate) {
      note.style.display = 'none';
      note.innerHTML = '';
      return;
    }

    const { dia, mes, ano } = state.selectedDate;
    note.style.display = 'flex';
    note.innerHTML = `
      Mostrando eventos de <strong>${dia} de ${MES_NOME[mes]} de ${ano}</strong>
      <button id="clearDateFilter">Limpar filtro</button>
    `;
    document.getElementById('clearDateFilter').addEventListener('click', () => {
      state.selectedDate = null;
      state.page = 1;
      renderFilterNote();
      renderList(true);
      renderCalendar();
    });
  }

  /* ---------- CALENDÁRIO ---------- */
  const WEEKDAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  function renderCalendar() {
    const wrap = document.getElementById('calendarWrap');
    if (!wrap) return;

    const { calendarMonth, calendarYear } = state;
    const monthLabel = document.getElementById('calendarMonthLabel');
    monthLabel.textContent = `${MES_NOME[calendarMonth]} de ${calendarYear}`;

    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';

    WEEKDAYS.forEach(w => {
      const el = document.createElement('div');
      el.className = 'calendar-weekday';
      el.textContent = w;
      grid.appendChild(el);
    });

    const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
    const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
    const today = new Date();

    const eventsThisMonth = EVENTOS_DATA.filter(
      e => e.mes === calendarMonth && e.ano === calendarYear
    );

    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement('div');
      empty.className = 'calendar-day empty';
      grid.appendChild(empty);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dayEl = document.createElement('div');
      dayEl.className = 'calendar-day';
      dayEl.textContent = d;

      const hasEvent = eventsThisMonth.some(e => e.dia === d);
      const isToday =
        d === today.getDate() &&
        calendarMonth === today.getMonth() &&
        calendarYear === today.getFullYear();
      const isSelected =
        state.selectedDate &&
        state.selectedDate.dia === d &&
        state.selectedDate.mes === calendarMonth &&
        state.selectedDate.ano === calendarYear;

      if (isToday) dayEl.classList.add('today');
      if (hasEvent) {
        dayEl.classList.add('has-event');
        const dot = document.createElement('span');
        dot.className = 'dot';
        dayEl.appendChild(dot);
        dayEl.addEventListener('click', () => {
          state.selectedDate = { dia: d, mes: calendarMonth, ano: calendarYear };
          state.page = 1;
          renderFilterNote();
          renderList(true);
          renderCalendar();
          switchView('lista');
        });
      }
      if (isSelected) dayEl.classList.add('selected');

      grid.appendChild(dayEl);
    }
  }

  function changeCalendarMonth(delta) {
    let m = state.calendarMonth + delta;
    let y = state.calendarYear;
    if (m < 0) {
      m = 11;
      y -= 1;
    } else if (m > 11) {
      m = 0;
      y += 1;
    }
    state.calendarMonth = m;
    state.calendarYear = y;
    renderCalendar();
  }

  /* ---------- ALTERNAR LISTA / CALENDÁRIO ---------- */
  function switchView(view) {
    state.view = view;
    const listBtn = document.getElementById('viewListBtn');
    const calBtn = document.getElementById('viewCalendarBtn');
    const calendarWrap = document.getElementById('calendarWrap');
    const listWrap = document.getElementById('event-container');
    const paginationEl = document.getElementById('eventPagination');

    if (view === 'calendario') {
      listBtn.classList.remove('active');
      calBtn.classList.add('active');
      calendarWrap.style.display = 'block';
      listWrap.style.display = 'none';
      paginationEl.style.display = 'none';
    } else {
      calBtn.classList.remove('active');
      listBtn.classList.add('active');
      calendarWrap.style.display = 'none';
      listWrap.style.display = 'flex';
      paginationEl.style.display = 'flex';
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('event-container');
    if (!container) return; // não é a página de eventos

    renderList(true);
    renderCalendar();
    renderFilterNote();
    switchView('lista');

    const listBtn = document.getElementById('viewListBtn');
    const calBtn = document.getElementById('viewCalendarBtn');
    if (listBtn) listBtn.addEventListener('click', () => switchView('lista'));
    if (calBtn) calBtn.addEventListener('click', () => switchView('calendario'));

    const prevMonthBtn = document.getElementById('calendarPrevMonth');
    const nextMonthBtn = document.getElementById('calendarNextMonth');
    if (prevMonthBtn)
      prevMonthBtn.addEventListener('click', () => changeCalendarMonth(-1));
    if (nextMonthBtn)
      nextMonthBtn.addEventListener('click', () => changeCalendarMonth(1));
  });
})();
