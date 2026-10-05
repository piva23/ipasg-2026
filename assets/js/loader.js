/* ==========================================
   loader.js
   Preloader simples para suavizar o carregamento
========================================== */
const hideLoader = () => {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('is-hidden');
    setTimeout(() => loader.remove(), 500);
  }, 300);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hideLoader);
} else {
  hideLoader();
}
