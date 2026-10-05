/* ==========================================
   home-events.js — IPASG PRO
   Exibe os próximos eventos na Home com imagens e mês em texto
========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('home-events-container');
  if (!container || typeof EVENTOS_DATA === 'undefined') return;

  container.innerHTML = '';

  const proximosEventos = EVENTOS_DATA.slice(0, 3);

  proximosEventos.forEach((evento, index) => {
    const div = document.createElement('div');
    div.className = 'event-item';
    div.style.opacity = '0';
    div.style.animation = `fadeInUp 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`;
    div.style.animationDelay = `${index * 0.1}s`;

    const mesTexto = evento.mesAbrev || (typeof MES_ABREV !== 'undefined' ? MES_ABREV[evento.mes] : evento.mes);

    div.innerHTML = `
      <div class="event-image">
        <a href="${evento.link}">
          <img src="${evento.img}" alt="${evento.titulo}" loading="lazy" width="200" height="130" />
        </a>
      </div>
      <div class="event-date">
        <span class="day">${String(evento.dia).padStart(2, '0')}</span>
        <span class="month">${mesTexto}</span>
      </div>
      <div class="event-info">
        <h3 class="event-title"><a href="${evento.link}">${evento.titulo}</a></h3>
        <p class="muted event-loc">
          <i class="fa-solid fa-location-dot"></i> ${evento.local}
        </p>
      </div>
      <a href="${evento.link}" class="btn-ghost-dark event-btn">Detalhes</a>
    `;
    container.appendChild(div);
  });
});
