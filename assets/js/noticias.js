/* ==========================================
   noticias.js
   Renderização dinâmica, Pesquisa e Filtros
========================================== */

const NOTICIAS_DATA = [
  {
    id: 1,
    title: 'IPASG aprova novo projeto de recuperação florestal',
    date: '10 Outubro, 2023',
    category: 'Permacultura',
    img: 'assets/images/banner/m-two.png',
    link: 'noticia-detalhe.html',
  },
  {
    id: 2,
    title: 'Alunos da rede pública visitam a sede ecológica',
    date: '28 Setembro, 2023',
    category: 'Educação',
    img: 'assets/images/banner/m-three.png',
    link: 'noticia-detalhe.html',
  },
  {
    id: 3,
    title: 'Como foi o nosso último curso de Saneamento Ecológico',
    date: '15 Agosto, 2023',
    category: 'Saneamento',
    img: 'assets/images/banner/m-one.png',
    link: 'noticia-detalhe.html',
  },
  {
    id: 4,
    title: 'Oficina de Meliponicultura reúne dezenas de produtores locais',
    date: '02 Julho, 2023',
    category: 'Eventos',
    img: 'assets/images/difference/thumb-lg-two.png',
    link: 'noticia-detalhe.html',
  },
];

function buildNewsCard(news, index) {
  const card = document.createElement('article');
  card.className = 'news-card';
  card.style.opacity = '0';
  card.style.animation = `fadeInUpCard 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`;
  card.style.animationDelay = `${index * 0.1}s`;

  card.innerHTML = `
    <div class="news-thumb">
      <div class="news-category">${news.category}</div>
      <a href="${news.link}">
        <img src="${news.img}" alt="${news.title}" loading="lazy" />
      </a>
    </div>
    <div class="news-content">
      <span class="news-date"><i class="fa-regular fa-calendar"></i> ${news.date}</span>
      <h3><a href="${news.link}">${news.title}</a></h3>
      <a href="${news.link}" class="read-more">Ler matéria completa <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  `;
  return card;
}

function renderNews(filterText = '', category = 'all') {
  const container = document.getElementById('news-list');
  if (!container) return;

  container.innerHTML = ''; // Limpa a grade

  // Aplica os filtros: texto da busca + categoria selecionada
  const filteredData = NOTICIAS_DATA.filter(news => {
    const matchText = news.title
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const matchCat = category === 'all' || news.category === category;
    return matchText && matchCat;
  });

  if (filteredData.length === 0) {
    container.innerHTML = `<p class="muted" style="grid-column: 1/-1; text-align: center; padding: 40px;">Nenhuma notícia encontrada com esses termos.</p>`;
    return;
  }

  filteredData.forEach((news, index) => {
    container.appendChild(buildNewsCard(news, index));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderNews(); // Renderiza tudo no início

  // Sistema de Busca em tempo real
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      const activeCat = document.querySelector('.cat-btn.active').dataset.cat;
      renderNews(e.target.value, activeCat);
    });
  }

  // Sistema de Filtro de Categorias (Sidebar)
  const catBtns = document.querySelectorAll('.cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      // Remove o active de todos e bota no atual
      catBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const searchValue = searchInput ? searchInput.value : '';
      const categoryValue = e.target.dataset.cat;
      renderNews(searchValue, categoryValue);
    });
  });
});
