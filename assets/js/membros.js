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
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com/leonunes65',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:',
    },
  },
  {
    name: 'Felipe Piva',
    role: 'Membro Fundador',
    img: 'assets/members/felipe/felipe.png',
    url: 'team-felipe.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com/pivafelipe_',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:',
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
  twitter: 'fa-brands fa-x-twitter',
  email: 'fa-solid fa-envelope',
  website: 'fa-solid fa-globe',
};

// 3. Montar a Caixinha (Card) do Membro - AGORA COM ANIMAÇÃO NATIVA
function buildCard(member, index) {
  const wrapper = document.createElement('div');

  // Aqui geramos a animação em cascata! Cada card entra 0.1s depois do anterior.
  wrapper.style.opacity = '0';
  wrapper.style.animation = `fadeInUpCard 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`;
  wrapper.style.animationDelay = `${index * 0.1}s`;

  let socialsHTML = '';
  if (member.socials) {
    for (const [network, link] of Object.entries(member.socials)) {
      const iconClass = iconMap[network] || 'fa-solid fa-link';
      socialsHTML += `<li><a href="${link}" target="_blank" class="social-btn"><i class="${iconClass}"></i></a></li>`;
    }
  }

  wrapper.innerHTML = `
    <div class="team__single van-tilt">
      <div class="team__single-thumb">
        <a href="${member.url}">
          <img src="${member.img}" alt="${member.name}" loading="lazy">
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
        <p>${member.role}</p>
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

  // Repare que passamos o 'index' (0, 1, 2...) para a função buildCard fazer a cascata
  MEMBERS.forEach((m, index) => {
    grid.appendChild(buildCard(m, index));
  });

  // Previne conflitos no clique das redes
  document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
    });
  });

  // Inicializa o efeito 3D
  const tiltEls = document.querySelectorAll('.van-tilt');
  if (tiltEls.length && typeof VanillaTilt !== 'undefined') {
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
