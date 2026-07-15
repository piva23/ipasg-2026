/* ==========================================
   theme.js
   - Tema sempre em modo claro.
   - Mantém apenas o botão voltar ao topo.
   - Botão "Voltar ao topo".
========================================== */

(function () {
  const root = document.documentElement;

  function applyLightTheme() {
    root.setAttribute('data-theme', 'light');
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLightTheme();

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
      toggleBtn.remove();
    }

    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
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
