/* ==========================================
   membros.js
   Renderização dinâmica via banco de dados
========================================== */

// 1. Nosso Banco de Dados Simulado
// NOTA: Elaine já possui página de detalhe completa (team-elaine.html).
// Para os demais membros, basta duplicar team-elaine.html, renomear o arquivo
// (ex: team-leandro.html) e trocar a "url" abaixo pelo novo arquivo.
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
    name: 'Leandro N. dos Santos',
    role: 'Membro Fundador',
    img: 'assets/members/leandro/leandro.jpg',
    url: 'team-leandro.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:elaine@email.com',
    },
  },
  {
    name: 'Felipe Lopes Piva',
    role: 'Membro Fundador',
    img: 'assets/members/felipe/felipe.png',
    url: 'team-felipe-piva.html',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:elaine@email.com',
    },
  },
  {
    name: 'Caroline Falero da Silva',
    role: 'Membro Fundadora',
    img: 'assets/members/caroline/caroline.jpg',
    url: 'mailto:abayomi.falero@gmail.com',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:elaine@email.com',
    },
  },
  {
    name: 'Antônio Dias Echeverria',
    role: 'Membro Fundador',
    img: 'assets/members/antonio/antonio.jpeg',
    url: 'mailto:echeverriasvp@hotmail.com',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:elaine@email.com',
    },
  },
  {
    name: 'Patrícia Maria Berg',
    role: 'Membro Fundadora',
    img: 'assets/members/patricia/patricia.jpg',
    url: 'mailto:patricia1436@hotmail.com',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:elaine@email.com',
    },
  },
  {
    name: 'Helena Pereira Frantz',
    role: 'Membro Fundadora',
    img: 'assets/members/helena/helena.jpeg',
    url: 'mailto:helenafrantz@gmail.com',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:elaine@email.com',
    },
  },
  {
    name: 'Artemio Soares Marques',
    role: 'Membro Fundador',
    img: 'assets/members/artemio/artemio.jpg',
    url: 'mailto:marquesartemio@gmail.com',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:elaine@email.com',
    },
  },
  {
    name: 'Alexandre Oliveira',
    role: 'Membro Fundador',
    img: 'assets/members/alexandre/alexandre.jpeg',
    url: 'mailto:studioonearts@hotmail.com',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:elaine@email.com',
    },
  },
  {
    name: 'Siomara Goulart Kronbauer',
    role: 'Membro Fundadora',
    img: 'assets/members/siomara/siomara.jpeg',
    url: 'mailto:siokronbauer@hotmail.com',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:elaine@email.com',
    },
  },
  {
    name: 'César Augusto Cougo',
    role: 'Membro Fundador',
    img: 'assets/members/cesar/cesar.jpeg',
    url: 'mailto:cesarportoalegre@gmail.com',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:elaine@email.com',
    },
  },
  {
    name: 'José Fernando Kronbauer',
    role: 'Membro Fundador',
    img: 'assets/members/zeze/zeze.jpeg',
    url: 'mailto:zezekronbauer@gmail.com',
    socials: {
      whatsapp: 'https://wa.me/5551992429974',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com',
      email: 'mailto:elaine@email.com',
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
