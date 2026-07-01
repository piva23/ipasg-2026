/* ==========================================
   noticias.js
   Renderização dinâmica, Pesquisa e Filtros.
   Os dados vêm de noticias-data.js (NOTICIAS_DATA)
========================================== */

function buildNewsCard(news, index) {
  const card = document.createElement('article');
  card.className = 'news-card';
  card.style.opacity = '0';
  card.style.animation = `fadeInUpCard 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`;
  card.style.animationDelay = `${index * 0.1}s`;

  const link = `noticia-detalhe.html?noticia=${news.slug}`;

  card.innerHTML = `
    <div class="news-thumb">
      <div class="news-category">${news.category}</div>
      <a href="${link}">
        <img src="${news.img}" alt="${news.title}" loading="lazy" />
      </a>
    </div>
    <div class="news-content">
      <span class="news-date"><i class="fa-regular fa-calendar"></i> ${news.dateShort}</span>
      <h3><a href="${link}">${news.title}</a></h3>
      <p style="font-size:15px;color:var(--muted);line-height:1.6;margin-bottom:20px;">${news.resumo}</p>
      <a href="${link}" class="read-more">Ler matéria completa <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  `;
  return card;
}

function renderNews(filterText = '', category = 'all') {
  const container = document.getElementById('news-list');
  if (!container) return;
  container.innerHTML = '';

  const filtered = NOTICIAS_DATA.filter(n => {
    const matchText = n.title.toLowerCase().includes(filterText.toLowerCase()) ||
                      n.resumo.toLowerCase().includes(filterText.toLowerCase());
    const matchCat  = category === 'all' || n.category === category;
    return matchText && matchCat;
  });

  if (!filtered.length) {
    container.innerHTML = `<p class="muted" style="grid-column:1/-1;text-align:center;padding:40px;">Nenhuma notícia encontrada.</p>`;
    return;
  }

  filtered.forEach((n, i) => container.appendChild(buildNewsCard(n, i)));
}

document.addEventListener('DOMContentLoaded', () => {
  renderNews();

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      const cat = document.querySelector('.cat-btn.active')?.dataset.cat || 'all';
      renderNews(e.target.value, cat);
    });
  }

  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const search = searchInput ? searchInput.value : '';
      renderNews(search, e.currentTarget.dataset.cat);
    });
  });
});
