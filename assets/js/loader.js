/* ==========================================
   loader.js
   Preloader simples para suavizar o carregamento
========================================== */
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  loader.classList.add('is-hidden');
  setTimeout(() => loader.remove(), 500);
});
