/* ==========================================
   projetos.js
   Renderização e Filtro Dinâmico via URL
========================================== */

const PROJETOS_DATA = [
  {
    id: 1,
    category: 'permacultura',
    tag: 'Permacultura',
    title: 'Saneamento Ecológico',
    desc: 'Implementação de Bacias de Evapotranspiração para o tratamento e reúso seguro da água em comunidades locais.',
    img: 'assets/images/banner/m-four.png',
    link: 'projetos/saneamento.html',
  },
  {
    id: 2,
    category: 'permacultura',
    tag: 'Permacultura',
    title: 'Meliponicultura',
    desc: 'Criação e manejo sustentável de abelhas nativas sem ferrão, auxiliando na polinização e gerando renda familiar.',
    img: 'assets/images/difference/thumb-lg-two.png',
    link: 'projetos/meliponicultura.html',
  },
  {
    id: 3,
    category: 'arte',
    tag: 'Artes Integradas',
    title: 'Danças Circulares',
    desc: 'Resgate de saberes ancestrais e fortalecimento de vínculos comunitários através do movimento e da arte.',
    img: 'assets/images/banner/m-one.png',
    link: 'projetos/dancas-circulares.html',
  },
  {
    id: 4,
    category: 'permacultura',
    tag: 'Permacultura',
    title: 'Bioconstrução',
    desc: 'Técnicas de arquitetura sustentável usando terra, bambu e materiais locais com baixo impacto ambiental.',
    img: 'assets/images/banner/m-five.png',
    link: 'projetos/bioconstrucao.html',
  },
  {
    id: 5,
    category: 'arte',
    tag: 'Artes Integradas',
    title: 'Oficinas Culturais',
    desc: 'Espaços de criação artística focados em sustentabilidade, reaproveitamento de materiais e expressão popular.',
    img: 'assets/images/banner/m-three.png',
    link: 'projetos/oficinas-culturais.html',
  },
  {
    id: 6,
    category: 'permacultura',
    tag: 'Educação',
    title: 'Hortas Comunitárias',
    desc: 'Promoção da agroecologia e soberania alimentar através do plantio consorciado em espaços comunitários.',
    img: 'assets/images/banner/m-two.png',
    link: 'projetos/hortas.html',
  },
];

function buildProjetoCard(projeto, index) {
  const card = document.createElement('article');
  card.className = 'projeto-card';
  card.style.opacity = '0';
  card.style.animation = `fadeInUpCard 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`;
  card.style.animationDelay = `${index * 0.1}s`;

  card.innerHTML = `
    <div class="projeto-thumb">
      <div class="projeto-tag">${projeto.tag}</div>
      <a href="${projeto.link}">
        <img src="${projeto.img}" alt="${projeto.title}" loading="lazy">
      </a>
    </div>
    <div class="projeto-content">
      <h3><a href="${projeto.link}">${projeto.title}</a></h3>
      <p>${projeto.desc}</p>
      <a href="${projeto.link}" class="btn-ghost-dark read-more-btn">Conhecer projeto <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  `;
  return card;
}

function renderProjetos(filter = 'all') {
  const grid = document.getElementById('projetosGrid');
  if (!grid) return;

  grid.innerHTML = ''; // Limpa a grade

  const projetosFiltrados = PROJETOS_DATA.filter(
    p => filter === 'all' || p.category === filter
  );

  projetosFiltrados.forEach((projeto, index) => {
    grid.appendChild(buildProjetoCard(projeto, index));
  });
}

// Lógica de Inicialização Inteligente (Lê a URL)
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('projetosGrid');
  if (!grid) return;

  // 1. Pega o filtro da URL (ex: ?filter=arte). Se não tiver, usa 'all'.
  const urlParams = new URLSearchParams(window.location.search);
  const initialFilter = urlParams.get('filter') || 'all';

  // 2. Renderiza os projetos com o filtro inicial
  renderProjetos(initialFilter);

  const filterBtns = document.querySelectorAll('.filter-btn');

  // 3. Marca o botão correto como 'active' no carregamento da página
  filterBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-filter') === initialFilter) {
      btn.classList.add('active');
    }

    // 4. Lógica de clique nos botões
    btn.addEventListener('click', e => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const filterValue = e.target.getAttribute('data-filter');

      // Muda a URL no navegador sem recarregar a página (Clean URL)
      const newUrl =
        window.location.protocol +
        '//' +
        window.location.host +
        window.location.pathname +
        '?filter=' +
        filterValue;
      window.history.pushState({ path: newUrl }, '', newUrl);

      renderProjetos(filterValue);
    });
  });
});
