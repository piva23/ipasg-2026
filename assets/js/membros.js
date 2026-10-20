/* ==========================================
   membros.js
   Renderização dinâmica via banco de dados
========================================== */

// 1. Banco de Dados
const MEMBERS = [
  {
    name: 'Elaine Regina dos Santos',
    role: 'Membro Fundadora',
    img: 'assets/members/elaine/elaine.jpg',
    url: 'team-elaine.html',
    socials: {
      whatsapp: 'https://wa.me/5551999680605',
      instagram: 'https://instagram.com/elaineregina.65',
      facebook: 'https://facebook.com/elaine.reginaa',
      email: 'mailto:elaineregina.65@gmail.com',
    },
  },
  {
    name: 'Leandro Nunes',
    role: 'Membro Fundador',
    img: 'assets/members/leandro/leandro.jpg',
    url: 'team-leandro.html',
    socials: {
      instagram: 'https://instagram.com/leonunes.65',
    },
  },
  {
    name: 'Felipe Piva',
    role: 'Membro Fundador',
    img: 'assets/members/felipe/felipe.jpg',
    url: 'team-felipe.html',
    socials: {
      instagram: 'https://instagram.com/pivafelipe_',
    },
  },
  {
    name: 'Caroline Falero',
    role: 'Membro Fundadora',
    img: 'assets/members/caroline/caroline.jpg',
    url: 'team-caroline.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com/abayomifalero',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:',
    },
  },
  {
    name: 'Antônio Dias Echeverria',
    role: 'Membro Fundador',
    img: 'assets/members/antonio/antonio.jpeg',
    url: 'team-antonio.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:',
    },
  },
  {
    name: 'Patrícia Berg',
    role: 'Membro Fundadora',
    img: 'assets/members/patricia/patricia.jpeg',
    url: 'team-patricia.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com/patricia1436',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:',
    },
  },
  {
    name: 'Helena Frantz',
    role: 'Membro Fundadora',
    img: 'assets/members/helena/helena.jpeg',
    url: 'team-helena.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com/helenapfrantz',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:',
    },
  },
  {
    name: 'Artemio S. Marques',
    role: 'Membro Fundador',
    img: 'assets/members/artemio/artemio.jpg',
    url: 'team-artemio.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com/artemiosoaresmarques',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:',
    },
  },
  {
    name: 'Alexandre Oliveira',
    role: 'Membro Fundador',
    img: 'assets/members/alexandre/alexandre.jpeg',
    url: 'team-alexandre.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:',
      website: 'http://www.studiooneartes.com',
    },
  },
  {
    name: 'Siomara Kronbauer',
    role: 'Membro Fundadora',
    img: 'assets/members/siomara/siomara.jpeg',
    url: 'team-siomara.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com/siokronbauer',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:',
    },
  },
  {
    name: 'Cesar Augusto Camargo',
    role: 'Membro Fundador',
    img: 'assets/members/cesar/cesar.jpeg',
    url: 'team-cesar.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com/varandacultural',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:',
    },
  },
  {
    name: 'Zezé Kronbauer',
    role: 'Membro Fundador',
    img: 'assets/members/zeze/zeze.jpeg',
    url: 'team-zeze.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com/zezekronbauer',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:',
    },
  },
  {
    name: 'Guilherme Worm',
    role: 'Membro Fundador',
    img: 'assets/members/guilherme/guilherme.jpeg',
    url: 'team-guilherme.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com/guiviwoo',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:',
    },
  },
  {
    name: 'Jorge Herrmann',
    role: 'Membro Fundador',
    img: 'assets/members/jorge/jorge.jpg',
    url: 'team-jorge.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com/jjorgeherrmann',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:',
    },
  },
];

// 2. Dicionário de Ícones
const iconMap = {
  whatsapp: 'fa-brands fa-whatsapp',
  instagram: 'fa-brands fa-instagram',
  facebook: 'fa-brands fa-facebook-f',
  youtube: 'fa-brands fa-youtube',
  linkedin: 'fa-brands fa-linkedin-in',
  twitter: 'fa-solid fa-seedling',
  email: 'fa-solid fa-envelope',
  website: 'fa-solid fa-globe',
};

// Ordem da gestão atual (aparecem primeiro, com badge) — o restante
// segue em ordem alfabética.
const ORDEM_GESTAO = [
  'Elaine Regina dos Santos',
  'Leandro Nunes',
  'Caroline Falero',
  'Felipe Piva',
  'Jorge Herrmann',
];

// 3. Montar a Caixinha (Card) do Membro
function buildCard(member, index) {
  const wrapper = document.createElement('div');

  // Cascata sutil no desktop (index >= 0); no mobile os cards
  // aparecem direto, sem animação em fila de espera.
  if (index !== null && index !== undefined) {
    wrapper.style.opacity = '0';
    wrapper.style.animation = 'fadeInUpCard 0.5s ease forwards';
    wrapper.style.animationDelay = `${Math.min(index * 0.06, 0.36)}s`;
  }

  let socialsHTML = '';
  if (member.socials) {
    for (const [network, link] of Object.entries(member.socials)) {
      // WhatsApp fica oculto para todos os membros (contato via institucional).
      if (network === 'whatsapp') continue;
      if (!link) continue;
      const iconClass = iconMap[network] || 'fa-solid fa-link';
      socialsHTML += `<li><a href="${link}" target="_blank" class="social-btn"><i class="${iconClass}"></i></a></li>`;
    }
  }

  const gestaoBadge = ORDEM_GESTAO.includes(member.name)
    ? ' <span class="gestao-badge" title="Gestão atual" aria-label="Gestão atual"><i class="fa-solid fa-star" aria-hidden="true"></i></span>'
    : '';

  wrapper.innerHTML = `
    <div class="team__single van-tilt">
      <div class="team__single-thumb">
        <a href="${member.url}">
          <img src="${member.img}" alt="${member.name}" loading="lazy" width="320" height="400">
        </a>
        <div class="team__icons">
          <div class="team__single-content__icon">
            <i class="fa-solid fa-plus"></i>
          </div>
          <div class="team__single__thumb-social">
            <ul>
              ${socialsHTML}
            </ul>
          </div>
        </div>
      </div>
      <div class="team__single-content">
        <h6><a href="${member.url}">${member.name}</a></h6>
        <p>${member.role}${gestaoBadge}</p>
      </div>
    </div>
  `;
  return wrapper;
}

// 4. Injetar na Tela e Inicializar Funções
function renderMembers() {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;

  grid.innerHTML = ''; // Garante que a grade está limpa

  // Ordem: gestão atual primeiro (na ordem definida), depois o restante
  // em ordem alfabética (pt-BR)
  const posicao = nome => {
    const i = ORDEM_GESTAO.indexOf(nome);
    return i === -1 ? ORDEM_GESTAO.length : i;
  };
  const ordemAlfabetica = [...MEMBERS].sort((a, b) => {
    const dif = posicao(a.name) - posicao(b.name);
    return dif !== 0 ? dif : a.name.localeCompare(b.name, 'pt-BR');
  });

  // Em telas pequenas não usamos a animação em cascata
  const isMobile = window.matchMedia('(max-width: 600px)').matches;

  ordemAlfabetica.forEach((m, index) => {
    grid.appendChild(buildCard(m, isMobile ? null : index));
  });

  // Previne conflitos no clique das redes
  document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
    });
  });

  // Efeito 3D apenas em dispositivos com mouse (não em toque)
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const tiltEls = document.querySelectorAll('.van-tilt');
  if (!isTouch && tiltEls.length && typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(tiltEls, {
      max: 6,
      speed: 400,
      glare: false,
      scale: 1.02,
    });
  }
}

// Roda a mágica
document.addEventListener('DOMContentLoaded', renderMembers);
