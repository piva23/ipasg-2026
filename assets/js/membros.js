/* membros.js
   Data-driven rendering dos cards de membros + init Swiper e VanillaTilt
   Coloque em assets/js/membros.js
*/

// --- Dados dos membros (mantive os nomes e cargos do arquivo que você enviou) ---
const MEMBERS = [
  { name: "Elaine Regina dos Santos", role: "Presidenta", img: "assets/images/team/one.png", url: "team-elaine.html" },
  { name: "Leandro N. dos Santos", role: "Vice-presidente", img: "assets/images/team/leandro-santos.png", url: "team-leandro.html" },
  { name: "Felipe Lopes Piva", role: "Conselho Fiscal - Administrador", img: "assets/images/team/felipe-piva.png", url: "team-felipe-piva.html" },
  { name: "Caroline Falero da Silva", role: "Conselho Fiscal - Artista e Produtora", img: "assets/images/team/one.png", url: "mailto:abayomi.falero@gmail.com" },
  { name: "Antônio Dias Echeverria", role: "Zootecnista (Membro Fundador)", img: "assets/images/team/one.png", url: "mailto:echeverriasvp@hotmail.com" },
  { name: "Patrícia Maria Berg T. de Oliveira", role: "Aposentada (Membro Fundador)", img: "assets/images/team/one.png", url: "mailto:patricia1436@hotmail.com" },
  { name: "Helena Pereira Frantz", role: "Engenheira Florestal (Membro Fundador)", img: "assets/images/team/one.png", url: "mailto:helenafrantz@gmail.com" },
  { name: "Artemio Soares Marques", role: "Professor (Membro Fundador)", img: "assets/images/team/one.png", url: "mailto:marquesartemio@gmail.com" },
  { name: "Alexandre Oliveira", role: "Empresário (Membro Fundador)", img: "assets/images/team/one.png", url: "mailto:studioonearts@hotmail.com" },
  { name: "Siomara Goulart Kronbauer", role: "Educadora Física / Dança (Membro Fundador)", img: "assets/images/team/one.png", url: "mailto:siokronbauer@hotmail.com" },
  { name: "César Augusto Cougo Camargo", role: "Artista (Membro Fundador)", img: "assets/images/team/one.png", url: "mailto:cesarportoalegre@gmail.com" },
  { name: "José Fernando Dresch Kronbauer", role: "Administrador Sanitarista (Membro Fundador)", img: "assets/images/team/one.png", url: "mailto:zezekronbauer@gmail.com" }
  // Se quiser adicionar mais, siga o padrão { name, role, img, url }
];

// --- função para gerar o HTML de cada card ---
function buildCard(member) {
  const wrapper = document.createElement('article');
  wrapper.className = 'card van-tilt';
  wrapper.innerHTML = `
    <div class="thumb">
      <a href="${member.url}">
        <img src="${member.img}" alt="${member.name}" loading="lazy">
      </a>
    </div>
    <div class="card-body">
      <h3><a href="${member.url}">${member.name}</a></h3>
      <p>${member.role}</p>

      <div class="social" aria-hidden="true">
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>
    <div class="plus" aria-hidden="true"><i class="fa-solid fa-plus"></i></div>
  `;
  return wrapper;
}

// --- renderiza no DOM ---
function renderMembers() {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;
  MEMBERS.forEach(m => {
    const card = buildCard(m);
    grid.appendChild(card);
  });

  // inicializa VanillaTilt nos cards
  const tiltOptions = {
    max: 8,
    speed: 400,
    glare: false,
    "max-glare": 0.1,
    scale: 1.02
  };
  const tiltEls = document.querySelectorAll('.van-tilt');
  if (tiltEls.length) VanillaTilt.init(tiltEls, tiltOptions);
}

// --- init Swiper para banner slider ---
function initSlider() {
  if (!window.Swiper) return;
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    slidesPerView: 1,
    spaceBetween: 12,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}

// --- DOM ready ---
document.addEventListener('DOMContentLoaded', () => {
  renderMembers();
  initSlider();
});
