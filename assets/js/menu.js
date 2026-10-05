document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobileToggle');
  const nav = document.querySelector('.nav');
  const dropdowns = document.querySelectorAll('.dropdown');
  const header = document.querySelector('.site-header');
  const isMobileMenu = () => window.matchMedia('(max-width: 960px)').matches;

  // --chrome-h: altura real do topo da página (topbar + header).
  // Usada pelo hero (primeira seção) para ocupar EXATAMENTE a altura
  // restante da tela. Medimos de verdade porque o topbar pode quebrar
  // linha em larguras intermediárias e some no mobile (display:none).
  const topbar = document.querySelector('.topbar');
  function updateChromeH() {
    const h =
      (topbar ? topbar.offsetHeight : 0) + (header ? header.offsetHeight : 0);
    document.documentElement.style.setProperty('--chrome-h', `${h}px`);
  }
  updateChromeH();
  window.addEventListener('resize', updateChromeH);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(updateChromeH);
  }

  /* ============================================================
     MENU MOBILE — backdrop, scroll lock, ESC, aria, acordeão
  ============================================================ */
  const backdrop = document.createElement('div');
  backdrop.className = 'nav-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.appendChild(backdrop);

  const menuIcon = () => (mobileToggle ? mobileToggle.querySelector('i') : null);
  const isMenuOpen = () => nav && nav.classList.contains('active');

  function setToggleState(open) {
    if (!mobileToggle) return;
    mobileToggle.setAttribute('aria-expanded', String(open));
    mobileToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    const icon = menuIcon();
    if (icon) {
      icon.classList.toggle('fa-xmark', open);
      icon.classList.toggle('fa-bars', !open);
    }
  }

  function closeDropdowns() {
    dropdowns.forEach(d => {
      d.classList.remove('open');
      const link = d.querySelector('a');
      if (link) link.setAttribute('aria-expanded', 'false');
    });
  }

  function openMenu() {
    if (!nav) return;
    nav.classList.add('active');
    backdrop.classList.add('show');
    document.body.classList.add('menu-open');
    // Sem isso o header some no scroll (transform arrastaria o painel junto)
    if (header) header.classList.remove('scroll-down');
    setToggleState(true);
    const firstLink = nav.querySelector('.nav-item > a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu(returnFocus = true) {
    if (!nav) return;
    nav.classList.remove('active');
    backdrop.classList.remove('show');
    document.body.classList.remove('menu-open');
    closeDropdowns();
    setToggleState(false);
    if (returnFocus && mobileToggle) mobileToggle.focus();
  }

  if (mobileToggle && nav) {
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.addEventListener('click', () =>
      isMenuOpen() ? closeMenu() : openMenu()
    );
    backdrop.addEventListener('click', () => closeMenu());
  }

  // CTA "Apoie" no rodapé do painel mobile (o do header some ≤500px)
  const apoie = document.getElementById('nav-apoie');
  if (nav && apoie) {
    const cta = apoie.cloneNode(true);
    cta.removeAttribute('id');
    cta.classList.add('nav-mobile-cta');
    nav.appendChild(cta);
  }

  // Acordeão: um submenu aberto por vez (só no mobile)
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    if (!link) return;
    link.setAttribute('aria-expanded', 'false');
    link.addEventListener('click', e => {
      if (!isMobileMenu()) return;
      e.preventDefault();
      const wasOpen = dropdown.classList.contains('open');
      closeDropdowns();
      if (!wasOpen) {
        dropdown.classList.add('open');
        link.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Teclado: ESC fecha; Tab fica contido no menu aberto (comporta-se como modal)
  document.addEventListener('keydown', e => {
    if (!isMenuOpen() || !isMobileMenu()) return;
    if (e.key === 'Escape') {
      closeMenu();
      return;
    }
    if (e.key !== 'Tab') return;
    const focusables = [
      ...(mobileToggle ? [mobileToggle] : []),
      ...nav.querySelectorAll('a[href], button:not([disabled])'),
    ];
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (!focusables.includes(active)) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && active === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  });

  let resizeTimeout;
  let wasMobileMenu = isMobileMenu();
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const isNowMobileMenu = isMobileMenu();
      if (isNowMobileMenu === wasMobileMenu) return;

      closeMenu(false);
      wasMobileMenu = isNowMobileMenu;
    }, 150);
  });

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    // Menu aberto: header fica congelado (senão o transform esconde o painel)
    if (isMenuOpen()) return;

    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (currentScroll <= 0) {
      header.classList.remove('scroll-up');
      header.classList.remove('scroll-down');
      return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scroll-down') && currentScroll > 200) {
      header.classList.remove('scroll-up');
      header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
      header.classList.remove('scroll-down');
      header.classList.add('scroll-up');
    }

    lastScroll = currentScroll;
  });
});
