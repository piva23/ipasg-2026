/* ==========================================
   projetos.js — IPASG PRO
   Renderização Dinâmica dos Projetos & Carrossel Horizontal
========================================== */

const PROJETOS_DATA = [
  // --- Templates ocultos (remover hidden:true para reativar) ---
  {
    id: 1,
    hidden: true,
    category: 'permacultura',
    model: 'modelo-1',
    tag: 'Permacultura',
    title: 'Saneamento Ecológico',
    desc: 'Implementação de Bacias de Evapotranspiração para o tratamento e reuso seguro da água em comunidades locais.',
    img: 'assets/images/banner/m-four.png',
    link: 'projetos/saneamento.html',
  },
  {
    id: 2,
    hidden: true,
    category: 'permacultura',
    model: 'modelo-1',
    tag: 'Bioconstrução',
    title: 'Bioconstrução',
    desc: 'Técnicas de arquitetura sustentável usando terra, bambu e materiais locais com baixo impacto ambiental.',
    img: 'assets/images/banner/m-five.png',
    link: 'projetos/bioconstrucao.html',
  },
  {
    id: 3,
    hidden: true,
    category: 'biodiversidade',
    model: 'modelo-2',
    tag: 'Biodiversidade',
    title: 'Meliponicultura',
    desc: 'Criação e manejo sustentável de abelhas nativas sem ferrão, auxiliando na polinização e conservação ambiental.',
    img: 'assets/images/difference/thumb-lg-two.jpg',
    link: 'projetos/meliponicultura.html',
  },
  {
    id: 4,
    hidden: true,
    category: 'biodiversidade',
    model: 'modelo-2',
    tag: 'Agroecologia',
    title: 'Hortas Comunitárias',
    desc: 'Promoção da agroecologia e soberania alimentar através do plantio consorciado em espaços comunitários.',
    img: 'assets/images/banner/m-two.png',
    link: 'projetos/hortas.html',
  },
  {
    id: 5,
    hidden: true,
    category: 'arte',
    model: 'modelo-3',
    tag: 'Artes Integradas',
    title: 'Oficinas Culturais',
    desc: 'Espaços de criação artística focados em sustentabilidade, reaproveitamento de materiais e expressão popular.',
    img: 'assets/images/banner/m-three.png',
    link: 'projetos/oficinas-culturais.html',
  },
  {
    id: 6,
    hidden: true,
    category: 'saude',
    model: 'modelo-4',
    tag: 'Vivências & Saúde',
    title: 'Danças Circulares',
    desc: 'Resgate de saberes ancestrais e fortalecimento de vínculos comunitários através do movimento e da arte.',
    img: 'assets/images/banner/m-one.png',
    link: 'projetos/dancas-circulares.html',
  },
  {
    id: 7,
    category: 'permacultura',
    model: 'modelo-1',
    tag: 'Permacultura',
    title: 'Semear — Tecendo Saberes Populares',
    desc: 'Cultivando vida, preservando saberes e fortalecendo comunidades em Mampituba/RS. Há 30 anos, a Farmacinha Violeta mantém viva a tradição do cuidado com plantas medicinais.',
    img: 'assets/images/projetos/semear-01.jpg',
    link: 'projetos/semear.html',
  },
  {
    id: 8,
    category: 'apoiados',
    model: 'modelo-5',
    tag: 'Projetos Apoiados',
    title: 'Tekoa Ayvu — A Voz da Aldeia',
    desc: 'Uma celebração viva da cultura Mbyá Guarani.',
    img: 'assets/images/projetos/tekoa-ayvu-capa.jpg',
    link: 'projetos/tekoa-ayvu.html',
  },
];

function buildProjetoCard(projeto, index) {
  const card = document.createElement('article');
  card.className = 'card projeto-card';
  card.setAttribute('data-model', projeto.model);

  card.innerHTML = `
    <div class="projeto-thumb">
      <span class="projeto-tag tag-${projeto.model}">${projeto.tag}</span>
      <a href="${projeto.link}">
        <img src="${projeto.img}" alt="${projeto.title}" loading="lazy">
      </a>
    </div>
    <div class="projeto-content">
      <h3><a href="${projeto.link}">${projeto.title}</a></h3>
      <p>${projeto.desc}</p>
      <a href="${projeto.link}" class="read-more">Conhecer projeto <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  `;
  return card;
}

function renderProjetosGrid(targetId, filter = 'all', limit = 0) {
  const grid = document.getElementById(targetId);
  if (!grid) return;

  grid.innerHTML = '';

  let list = PROJETOS_DATA.filter(
    p =>
      (filter === 'all' || p.category === filter || p.model === filter) &&
      !p.hidden
  );

  if (limit > 0) {
    list = list.slice(0, limit);
  }

  if (list.length === 0) {
    grid.innerHTML =
      '<p style="grid-column:1/-1;text-align:center;color:var(--earth,#8a7a66);padding:24px 0;">Nenhum projeto nesta categoria no momento.</p>';
    return;
  }

  list.forEach((projeto, index) => {
    grid.appendChild(buildProjetoCard(projeto, index));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Render Home Featured Projects (Horizontal Carrossel)
  const homeGrid = document.getElementById('homeProjetosGrid');
  if (homeGrid) {
    renderProjetosGrid('homeProjetosGrid', 'all', 6);

    const btnLeft = document.getElementById('slideLeft');
    const btnRight = document.getElementById('slideRight');

    if (btnLeft) {
      btnLeft.addEventListener('click', () => {
        homeGrid.scrollBy({ left: -360, behavior: 'smooth' });
      });
    }

    if (btnRight) {
      btnRight.addEventListener('click', () => {
        homeGrid.scrollBy({ left: 360, behavior: 'smooth' });
      });
    }
  }

  // Render Main Projects Page Grid
  if (document.getElementById('projetosGrid')) {
    const urlParams = new URLSearchParams(window.location.search);
    const initialFilter = urlParams.get('filter') || 'all';

    renderProjetosGrid('projetosGrid', initialFilter);

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      if (btn.getAttribute('data-filter') === initialFilter) {
        btn.classList.add('active');
      }

      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        const newUrl = `${window.location.pathname}?filter=${filterValue}`;
        window.history.pushState({ path: newUrl }, '', newUrl);

        renderProjetosGrid('projetosGrid', filterValue);
      });
    });
  }
});
