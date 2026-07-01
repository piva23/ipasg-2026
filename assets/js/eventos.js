/* ==========================================
   eventos.js
   Renderização dinâmica de Eventos com Imagens
   Os dados vêm de eventos-data.js (EVENTOS_DATA)
========================================== */

function buildEventItem(evento, index) {
  const div = document.createElement('div');
  div.className = 'event-item';
  // Efeito Cascata baseado no índice
  div.style.opacity = '0';
  div.style.animation = `fadeInUp 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`;
  div.style.animationDelay = `${index * 0.1}s`;

  const link = `evento-detalhe.html?evento=${evento.slug}`;

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
    <a href="${link}" class="btn-ghost-dark event-btn">Detalhes</a>
  `;
  return div;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('event-container');
  if (!container) return;

  container.innerHTML = ''; // Limpa antes de injetar

  EVENTOS_DATA.forEach((evento, index) => {
    container.appendChild(buildEventItem(evento, index));
  });
});
