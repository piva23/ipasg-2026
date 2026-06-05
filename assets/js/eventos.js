/* ==========================================
   eventos.js
   Renderização dinâmica de Eventos com Imagens
========================================== */

const EVENTOS_DATA = [
  {
    img: 'assets/images/banner/m-one.png',
    dia: '03',
    mes: 'Fev',
    titulo: '4ª Vivência Permacultural',
    local: 'Mampituba / Rio da Invernada',
    link: 'evento-detalhe.html',
  },
  {
    img: 'assets/images/banner/m-two.png',
    dia: '02',
    mes: 'Dez',
    titulo: 'Oficina de Abelhas indígenas',
    local: 'Porto Alegre',
    link: 'evento-detalhe.html',
  },
  {
    img: 'assets/images/banner/m-three.png',
    dia: '11',
    mes: 'Nov',
    titulo: '3ª Vivência Permacultural',
    local: 'Guaíba',
    link: 'evento-detalhe.html',
  },
  {
    img: 'assets/images/banner/m-four.png',
    dia: '29',
    mes: 'Mai',
    titulo: 'Dança Circular',
    local: 'Paraíso',
    link: 'evento-detalhe.html',
  },
  {
    img: 'assets/images/banner/m-five.png',
    dia: '07',
    mes: 'Mai',
    titulo: 'Autocuidado',
    local: 'Torres',
    link: 'evento-detalhe.html',
  },
  {
    img: 'assets/images/banner/m-one.png',
    dia: '18',
    mes: 'Abr',
    titulo: 'Dançando os Florais',
    local: 'Sans Souci',
    link: 'evento-detalhe.html',
  },
  {
    img: 'assets/images/banner/m-two.png',
    dia: '19',
    mes: 'Fev',
    titulo: '2ª Vivência em Permacultura',
    local: 'Mampituba',
    link: 'evento-detalhe.html',
  },
  {
    img: 'assets/images/banner/m-three.png',
    dia: '26',
    mes: 'Nov',
    titulo: 'Vivências em Permacultura',
    local: 'Local a definir',
    link: 'evento-detalhe.html',
  },
  {
    img: 'assets/images/banner/m-four.png',
    dia: '24',
    mes: 'Set',
    titulo: 'Oficina "Fermentando"',
    local: 'Parque 35',
    link: 'evento-detalhe.html',
  },
  {
    img: 'assets/images/banner/m-five.png',
    dia: '02',
    mes: 'Jul',
    titulo: 'Oficina Cervejeiro Caseiro',
    local: 'Azenha',
    link: 'evento-detalhe.html',
  },
  {
    img: 'assets/images/banner/m-one.png',
    dia: '15',
    mes: 'Fev',
    titulo: 'Danças Circulares',
    local: 'Espaço Cultural TEN CATEN',
    link: 'evento-detalhe.html',
  },
  {
    img: 'assets/images/banner/m-two.png',
    dia: '14',
    mes: 'Dez',
    titulo: 'Oficina Abelhas Nativas',
    local: 'Galpão Crioulo',
    link: 'evento-detalhe.html',
  },
];

function buildEventItem(evento, index) {
  const div = document.createElement('div');
  div.className = 'event-item';
  // Efeito Cascata baseado no índice
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
