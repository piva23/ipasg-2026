/* ==========================================
   home-events.js
   Mostra os 3 próximos eventos na Home, reaproveitando
   o mesmo layout com imagem usado em eventos.html
   (depende de eventos-data.js estar carregado antes)
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

    div.innerHTML = `
      <div class="event-image">
        <img src="${evento.img}" alt="${evento.titulo}" loading="lazy" />
      </div>
      <div class="event-date">
        <span class="day">${evento.dia}</span>
        <span class="month">${evento.mes}</span>
      </div>
      <div class="event-info">
        <h3 class="event-title">${evento.titulo}</h3>
        <p class="muted event-loc">
          <i class="fa-solid fa-location-dot"></i> ${evento.local}
        </p>
      </div>
      <a href="${evento.link}" class="btn-ghost-dark event-btn">Detalhes</a>
    `;
    container.appendChild(div);
  });
});
