/* ==========================================
   evento-detalhe.js
   Lê ?evento=slug da URL e preenche a página
   Depende de eventos-data.js (EVENTOS_DATA)
========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('evento');

  const loadingState = document.getElementById('loading-state');
  const contentState = document.getElementById('evento-content');
  const notFoundState = document.getElementById('not-found-state');

  // Pequeno delay para suavizar a transição visual (evita "flash")
  setTimeout(() => {
    const evento = EVENTOS_DATA.find(e => e.slug === slug);

    if (!evento) {
      loadingState.style.display = 'none';
      notFoundState.style.display = 'block';
      return;
    }

    // Título da página e meta description
    document.getElementById('page-title').textContent = `${evento.titulo} | IPASG`;
    document.getElementById('page-desc').setAttribute(
      'content',
      evento.descricaoCurta || `Detalhes do evento ${evento.titulo} do IPASG.`
    );
    document.getElementById('breadcrumb-title').textContent = evento.titulo;

    // Imagem e categoria
    document.getElementById('event-image').src = evento.img;
    document.getElementById('event-image').alt = evento.titulo;
    document.getElementById('event-badge').textContent = evento.categoria || 'Evento';

    // Título e meta inline
    document.getElementById('event-title').textContent = evento.titulo;
    document.getElementById('event-date-inline').textContent =
      `${evento.dia} de ${evento.mesCompleto} de ${evento.ano}`;
    document.getElementById('event-location-inline').textContent = evento.local;

    // Descrição completa
    document.getElementById('event-description').innerHTML =
      evento.descricaoCompleta || `<p>${evento.descricaoCurta}</p>`;

    // Sidebar - detalhes
    document.getElementById('event-date').textContent =
      `${evento.dia} de ${evento.mesCompleto} de ${evento.ano}`;
    document.getElementById('event-time').textContent = evento.horario || '–';
    document.getElementById('event-location').textContent = evento.endereco || evento.local;
    document.getElementById('event-price').textContent = evento.preco || 'Consulte';
    document.getElementById('event-vacancies').textContent = evento.vagas || 'Consulte';

    // Botão de inscrição
    const registerLink = document.getElementById('event-register-link');
    registerLink.href = evento.linkInscricao || 'https://wa.me/5551992429974';

    if (evento.vagas && evento.vagas.toLowerCase().includes('esgotado')) {
      registerLink.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Esgotado';
      registerLink.style.opacity = '0.6';
      registerLink.style.pointerEvents = 'none';
    }

    // WhatsApp contextual
    const waLink = document.getElementById('event-whatsapp-link');
    waLink.href = `https://wa.me/5551992429974?text=${encodeURIComponent(
      `Olá! Tenho dúvidas sobre o evento "${evento.titulo}".`
    )}`;

    // Mostra conteúdo
    loadingState.style.display = 'none';
    contentState.style.display = 'grid';
  }, 200);
});
