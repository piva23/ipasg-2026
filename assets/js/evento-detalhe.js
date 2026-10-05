/* ==========================================
   evento-detalhe.js — IPASG
   Busca o evento por ?id= na URL, preenche hero,
   corpo, sidebar, galeria, compartilhamento e
   renderiza eventos relacionados.
========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const loadingEl = document.getElementById('eventoLoading');
  const conteudoEl = document.getElementById('eventoConteudo');
  const naoEncontradoEl = document.getElementById('eventoNaoEncontrado');

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);

  function mostrarNaoEncontrado() {
    const heroEl = document.getElementById('eventHero');
    if (heroEl) heroEl.style.display = 'none';
    if (loadingEl) loadingEl.style.display = 'none';
    if (naoEncontradoEl) naoEncontradoEl.style.display = 'block';
  }

  function setText(id_, valor) {
    const el = document.getElementById(id_);
    if (el) el.textContent = valor;
  }

  if (typeof EVENTOS_DATA === 'undefined' || isNaN(id)) {
    mostrarNaoEncontrado();
    return;
  }

  const evento = EVENTOS_DATA.find(e => e.id === id);

  if (!evento) {
    mostrarNaoEncontrado();
    return;
  }

  const mesNome = typeof MES_NOME !== 'undefined' ? MES_NOME[evento.mes] : evento.mes;
  const dataFormatada = `${String(evento.dia).padStart(2, '0')} de ${mesNome} de ${evento.ano}`;
  const paginaEvento = `${window.location.origin}${window.location.pathname}?id=${evento.id}`;

  /* --- SEO --- */
  document.title = `${evento.titulo} | IPASG`;
  const pageTitleEl = document.getElementById('page-title');
  if (pageTitleEl) pageTitleEl.textContent = `${evento.titulo} | IPASG`;

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', `${evento.titulo} | IPASG`);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', evento.resumo);

  /* --- HERO --- */
  const catEl = document.getElementById('event-category');
  if (catEl) catEl.innerHTML = `<i class="fa-solid fa-tag"></i> ${evento.categoria}`;

  setText('event-title', evento.titulo);
  setText('event-hero-date', dataFormatada);
  setText('event-hero-location', evento.local);

  /* --- IMAGEM, RESUMO E DESCRIÇÃO --- */
  const imgEl = document.getElementById('event-image');
  if (imgEl) {
    imgEl.src = evento.img;
    imgEl.alt = evento.titulo;
    imgEl.loading = 'eager';
  }

  setText('event-summary', evento.resumo);
  setText('event-description', evento.descricao);

  /* --- SIDEBAR --- */
  setText('event-date', dataFormatada);
  setText('event-time', `${evento.horarioInicio} às ${evento.horarioFim}`);
  setText('event-location', evento.local);
  setText('event-address', evento.endereco);
  setText('event-vagas', `${evento.vagas} pessoas`);
  setText('event-valor', evento.valor);

  const regLink = document.getElementById('event-register-link');
  if (regLink) {
    const msg = encodeURIComponent(
      `Olá! Gostaria de me inscrever no evento "${evento.titulo}" (${dataFormatada}).`
    );
    regLink.href = `https://wa.me/5551992429974?text=${msg}`;
  }

  /* --- GALERIA (somente se houver imagens além da capa) --- */
  const galleryWrap = document.getElementById('event-gallery-wrap');
  const galleryEl = document.getElementById('event-gallery');
  const galeria = Array.isArray(evento.galeria) ? evento.galeria : [];

  if (galleryWrap && galleryEl && galeria.length > 1) {
    galleryEl.innerHTML = '';
    galeria.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = evento.titulo;
      img.loading = 'lazy';
      img.width = 400;
      img.height = 300;
      galleryEl.appendChild(img);
    });
    galleryWrap.style.display = 'block';
  }

  /* --- COMPARTILHAMENTO --- */
  const shareWa = document.getElementById('share-wa');
  if (shareWa) {
    const texto = encodeURIComponent(
      `Confira o evento "${evento.titulo}" (${dataFormatada}) — ${paginaEvento}`
    );
    shareWa.href = `https://wa.me/?text=${texto}`;
  }

  const shareFb = document.getElementById('share-fb');
  if (shareFb) {
    shareFb.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      paginaEvento
    )}`;
  }

  /* --- EVENTOS RELACIONADOS --- */
  const relatedWrap = document.getElementById('relatedEventsWrap');
  const relatedContainer = document.getElementById('related-events-container');

  if (relatedWrap && relatedContainer) {
    const relacionados = EVENTOS_DATA.filter(e => e.id !== evento.id).slice(0, 3);

    if (relacionados.length > 0) {
      relacionados.forEach(rel => {
        const div = document.createElement('div');
        div.className = 'event-item';

        const mesTexto =
          rel.mesAbrev ||
          (typeof MES_ABREV !== 'undefined' ? MES_ABREV[rel.mes] : rel.mes);

        div.innerHTML = `
          <div class="event-image">
            <a href="${rel.link}">
              <img src="${rel.img}" alt="${rel.titulo}" loading="lazy" width="200" height="130" />
            </a>
          </div>
          <div class="event-date">
            <span class="day">${String(rel.dia).padStart(2, '0')}</span>
            <span class="month">${mesTexto}</span>
          </div>
          <div class="event-info">
            <span class="event-category-badge"><i class="fa-solid fa-tag"></i> ${rel.categoria}</span>
            <h3 class="event-title"><a href="${rel.link}">${rel.titulo}</a></h3>
            <p class="muted event-meta">
              <span><i class="fa-solid fa-location-dot"></i> ${rel.local}</span>
              <span><i class="fa-regular fa-clock"></i> ${rel.horarioInicio} às ${rel.horarioFim}</span>
              <span><i class="fa-solid fa-ticket"></i> ${rel.valor}</span>
            </p>
          </div>
          <div class="event-actions">
            <a href="${rel.link}" class="btn-ghost-dark event-btn"><i class="fa-solid fa-circle-info"></i> Detalhes</a>
          </div>
        `;
        relatedContainer.appendChild(div);
      });

      relatedWrap.style.display = 'block';
    }
  }

  /* --- EXIBE O CONTEÚDO --- */
  if (loadingEl) loadingEl.style.display = 'none';
  if (conteudoEl) conteudoEl.style.display = 'grid';
});
