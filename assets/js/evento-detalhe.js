/* ==========================================
   evento-detalhe.js
   Lê ?id= da URL, busca em EVENTOS_DATA
   (eventos-data.js) e preenche a página.
========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const loadingEl = document.getElementById('eventoLoading');
  const conteudoEl = document.getElementById('eventoConteudo');
  const naoEncontradoEl = document.getElementById('eventoNaoEncontrado');

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);

  function mostrarNaoEncontrado() {
    loadingEl.style.display = 'none';
    naoEncontradoEl.style.display = 'block';
  }

  // Simula um pequeno carregamento (skeleton) antes de exibir o conteúdo
  setTimeout(() => {
    const evento =
      typeof EVENTOS_DATA !== 'undefined'
        ? EVENTOS_DATA.find(e => e.id === id)
        : null;

    if (!evento) {
      mostrarNaoEncontrado();
      return;
    }

    document.title = `${evento.titulo} | IPASG`;
    document.getElementById('page-title').textContent = `${evento.titulo} | IPASG`;

    document.getElementById('event-image').src = evento.img;
    document.getElementById('event-image').alt = evento.titulo;
    document.getElementById('event-category').innerHTML =
      `<i class="fa-solid fa-tag"></i> ${evento.categoria}`;
    document.getElementById('event-title').textContent = evento.titulo;
    document.getElementById('event-summary').textContent = evento.resumo;
    document.getElementById('event-description').textContent = evento.descricao;

    const dataFormatada = `${String(evento.dia).padStart(2, '0')} de ${
      MES_NOME[evento.mes]
    } de ${evento.ano}`;
    document.getElementById('event-date').textContent = dataFormatada;
    document.getElementById('event-time').textContent =
      `${evento.horarioInicio} às ${evento.horarioFim}`;
    document.getElementById('event-location').textContent = evento.local;
    document.getElementById('event-address').textContent = evento.endereco;
    document.getElementById('event-vagas').textContent = `${evento.vagas} pessoas`;
    document.getElementById('event-valor').textContent = evento.valor;

    // Galeria (imagens extras, se houver)
    const galleryEl = document.getElementById('event-gallery');
    galleryEl.innerHTML = '';
    if (evento.galeria && evento.galeria.length > 1) {
      evento.galeria.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = evento.titulo;
        img.loading = 'lazy';
        img.style.cssText =
          'width:140px;height:100px;object-fit:cover;border-radius:12px;flex-shrink:0;';
        galleryEl.appendChild(img);
      });
    }

    const whatsappMsg = encodeURIComponent(
      `Olá! Gostaria de me inscrever no evento "${evento.titulo}" (${dataFormatada}).`
    );
    document.getElementById(
      'event-register-link'
    ).href = `https://wa.me/5551992429974?text=${whatsappMsg}`;

    loadingEl.style.display = 'none';
    conteudoEl.style.display = 'grid';
  }, 400);
});
