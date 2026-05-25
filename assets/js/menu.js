document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobileToggle');
  const nav = document.querySelector('.nav');
  const dropdowns = document.querySelectorAll('.dropdown');
  const header = document.querySelector('.site-header');

  // Lógica do Menu Mobile
  mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if (nav.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });

  // Lógica dos submenus no mobile
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', e => {
      if (window.innerWidth <= 960) {
        e.preventDefault();
        dropdown.classList.toggle('open');
      }
    });
  });

  // Smart Sticky Header & Efeito de Transparência no Topo
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Adiciona uma classe quando sai do topo (para mudar a cor do header)
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Se estiver no topo absoluto
    if (currentScroll <= 0) {
      header.classList.remove('scroll-up');
      header.classList.remove('scroll-down');
      return;
    }

    // Rolando para baixo (Esconde o menu)
    if (
      currentScroll > lastScroll &&
      !header.classList.contains('scroll-down') &&
      currentScroll > 200
    ) {
      header.classList.remove('scroll-up');
      header.classList.add('scroll-down');
    }
    // Rolando para cima (Mostra o menu)
    else if (
      currentScroll < lastScroll &&
      header.classList.contains('scroll-down')
    ) {
      header.classList.remove('scroll-down');
      header.classList.add('scroll-up');
    }

    lastScroll = currentScroll;
  });
});
