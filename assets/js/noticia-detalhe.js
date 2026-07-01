/* ==========================================
   noticia-detalhe.js
   Lê ?noticia=slug da URL e preenche a página.
   Depende de noticias-data.js (NOTICIAS_DATA)
========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const params  = new URLSearchParams(window.location.search);
  const slug    = params.get('noticia');

  const loadingEl  = document.getElementById('loading-state');
  const contentEl  = document.getElementById('noticia-content');
  const notFoundEl = document.getElementById('not-found-state');

  setTimeout(() => {
    const noticia = NOTICIAS_DATA.find(n => n.slug === slug);

    if (!noticia) {
      loadingEl.style.display  = 'none';
      notFoundEl.style.display = 'block';
      return;
    }

    /* ── Meta da página ── */
    document.getElementById('page-title').textContent = `${noticia.title} | IPASG`;
    document.getElementById('page-desc').setAttribute('content', noticia.resumo);
    document.getElementById('breadcrumb-title').textContent = noticia.title;

    /* ── Imagem de capa ── */
    const img = document.getElementById('noticia-image');
    img.src = noticia.img;
    img.alt = noticia.title;

    /* ── Badge de categoria ── */
    document.getElementById('noticia-category').textContent = noticia.category;

    /* ── Cabeçalho do artigo ── */
    document.getElementById('noticia-title').textContent  = noticia.title;
    document.getElementById('noticia-date').textContent   = noticia.date;
    document.getElementById('noticia-author').textContent = noticia.author;

    /* ── Corpo do artigo ── */
    document.getElementById('noticia-body').innerHTML = noticia.descricaoCompleta;

    /* ── Tags ── */
    const tagsEl = document.getElementById('noticia-tags');
    if (noticia.tags && noticia.tags.length) {
      tagsEl.innerHTML = noticia.tags
        .map(t => `<span class="noticia-tag">${t}</span>`)
        .join('');
    } else {
      tagsEl.closest('.noticia-tags-row').style.display = 'none';
    }

    /* ── Sidebar: compartilhar via WhatsApp contextual ── */
    const waShare = document.getElementById('wa-share');
    waShare.href = `https://wa.me/?text=${encodeURIComponent(
      `${noticia.title} – ${window.location.href}`
    )}`;

    /* ── Sidebar: notícias relacionadas (mesma categoria, exceto a atual) ── */
    const relatedEl = document.getElementById('related-list');
    const related   = NOTICIAS_DATA
      .filter(n => n.slug !== slug && n.category === noticia.category)
      .slice(0, 3);

    if (related.length) {
      relatedEl.innerHTML = related.map(r => `
        <a href="noticia-detalhe.html?noticia=${r.slug}" class="related-card">
          <img src="${r.img}" alt="${r.title}" loading="lazy" />
          <div class="related-card__info">
            <span class="related-card__date">${r.dateShort}</span>
            <p>${r.title}</p>
          </div>
        </a>
      `).join('');
    } else {
      /* Se não houver da mesma categoria, mostra outras */
      const fallback = NOTICIAS_DATA.filter(n => n.slug !== slug).slice(0, 3);
      relatedEl.innerHTML = fallback.map(r => `
        <a href="noticia-detalhe.html?noticia=${r.slug}" class="related-card">
          <img src="${r.img}" alt="${r.title}" loading="lazy" />
          <div class="related-card__info">
            <span class="related-card__date">${r.dateShort}</span>
            <p>${r.title}</p>
          </div>
        </a>
      `).join('');
    }

    /* ── Mostra conteúdo ── */
    loadingEl.style.display  = 'none';
    contentEl.style.display  = 'grid';
  }, 200);
});
