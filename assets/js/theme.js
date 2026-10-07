/* ==========================================
   theme.js — IPASG PRO
   - Alterna tema claro/escuro com localStorage
   - Botão "Voltar ao topo" suave
========================================== */

(function () {
  const root = document.documentElement;

  // Carrega tema salvo ou padrão light
  const savedTheme = localStorage.getItem('theme') || 'light';
  root.setAttribute('data-theme', savedTheme);

  /* Troca a imagem do brand conforme o tema (dark usa data-dark-src) */
  function syncBrandLogo(theme) {
    const brandLogo = document.querySelector('.brand-link img');
    if (!brandLogo) return;
    const darkSrc = brandLogo.getAttribute('data-dark-src');
    const origSrc =
      brandLogo.getAttribute('data-orig-src') ||
      brandLogo.getAttribute('src');
    if (!brandLogo.getAttribute('data-orig-src')) {
      brandLogo.setAttribute('data-orig-src', origSrc);
    }
    if (theme === 'dark' && darkSrc) {
      brandLogo.src = darkSrc;
    } else {
      brandLogo.src = origSrc;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    /* Aplica o logo correto ja no carregamento (reload em dark) */
    syncBrandLogo(root.getAttribute('data-theme') || 'light');

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        syncBrandLogo(newTheme);
      });
    }

    // Botão Voltar ao Topo
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      });

      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });
})();
