/* ==========================================
   home-events.js
   Mostra os próximos eventos na home, usando EVENTOS_DATA
========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('home-events-container');
  if (!container || typeof EVENTOS_DATA === 'undefined') return;

  const proximos = EVENTOS_DATA.slice(0, 2);

  container.innerHTML = '';

  proximos.forEach(evento => {
    const div = document.createElement('div');
    div.className = 'event-item';
    div.innerHTML = `
      <div class="event-date"><span>${evento.dia}</span> ${evento.mes}</div>
      <div class="event-info">
        <h3>${evento.titulo}</h3>
        <p class="muted">
          <i class="fa-solid fa-location-dot"></i> ${evento.local}
        </p>
      </div>
      <a href="evento-detalhe.html?evento=${evento.slug}" class="btn-ghost event-btn">Inscreva-se</a>
    `;
    container.appendChild(div);
  });
});
