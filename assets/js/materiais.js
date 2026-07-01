/* ==========================================
   materiais.js — Renderização e Filtro Dinâmico
========================================== */
const MATERIAIS_DATA = [
  { id: 1, type: 'pdf', title: 'Cartilha de Bioconstrução Básica', desc: 'Guia passo a passo para construir estruturas de bambu e terra crua.', meta: 'Arquivo PDF • 4.2 MB', link: '#' },
  { id: 2, type: 'video', title: 'Oficina de Saneamento Ecológico', desc: 'Gravação completa da nossa última oficina prática na sede do IPASG.', meta: 'YouTube • 45 min', link: 'https://youtube.com' },
  { id: 3, type: 'drive', title: 'Mídia Kit e Logos IPASG', desc: 'Acesse nossas logos em alta resolução e o manual de identidade visual.', meta: 'Pasta do Google Drive', link: '#' },
  { id: 4, type: 'image', title: 'Galeria Mutirão 2023', desc: 'Fotos em alta resolução do mutirão de plantio agroflorestal.', meta: 'Álbum de Fotos • 24 itens', link: '#' },
  { id: 5, type: 'pdf', title: 'Relatório de Impacto 2022', desc: 'Resultados anuais de nossas ações educacionais e regenerativas.', meta: 'Arquivo PDF • 2.1 MB', link: '#' },
  { id: 6, type: 'video', title: 'Documentário: Sementes do Amanhã', desc: 'Curta-metragem sobre a comunidade local e as ações de permacultura.', meta: 'YouTube • 15 min', link: 'https://youtube.com' },
];

const TIPO_CONFIG = {
  pdf:   { icon: 'fa-solid fa-file-pdf',       color: '#e74c3c', btnText: 'Baixar PDF' },
  video: { icon: 'fa-brands fa-youtube',        color: '#e52d27', btnText: 'Assistir Vídeo' },
  drive: { icon: 'fa-brands fa-google-drive',   color: '#2E86C1', btnText: 'Acessar Drive' },
  image: { icon: 'fa-solid fa-images',          color: '#27ae60', btnText: 'Ver Fotos' },
};

function buildMaterialCard(material, index) {
  const card = document.createElement('div');
  card.className = 'material-card';
  card.style.opacity = '0';
  card.style.animation = `fadeInUpCard 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards`;
  card.style.animationDelay = `${index * 0.1}s`;

  const config = TIPO_CONFIG[material.type] || { icon: 'fa-solid fa-link', color: 'var(--green)', btnText: 'Acessar' };

  card.innerHTML = `
    <div class="material-icon-box" style="background-color:${config.color}15;color:${config.color};">
      <i class="${config.icon}"></i>
    </div>
    <div class="material-content">
      <span class="material-meta">${material.meta}</span>
      <h3>${material.title}</h3>
      <p>${material.desc}</p>
    </div>
    <div class="material-action">
      <a href="${material.link}" target="_blank" class="btn-ghost-dark material-btn">
        ${config.btnText} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:13px;margin-left:4px;"></i>
      </a>
    </div>
  `;
  return card;
}

function renderMateriais(filter = 'all') {
  const grid = document.getElementById('materiaisGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = MATERIAIS_DATA.filter(m => filter === 'all' || m.type === filter);
  if (filtered.length === 0) {
    grid.innerHTML = `<p class="muted" style="grid-column:1/-1;text-align:center;padding:40px;">Nenhum material encontrado.</p>`;
    return;
  }
  filtered.forEach((m, i) => grid.appendChild(buildMaterialCard(m, i)));
}

document.addEventListener('DOMContentLoaded', () => {
  renderMateriais('all');
  const filterBtns = document.querySelectorAll('.materiais-filter .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderMateriais(e.target.getAttribute('data-filter'));
    });
  });
});
