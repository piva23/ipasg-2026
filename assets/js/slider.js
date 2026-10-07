document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.getElementById('prevHero');
  const nextBtn = document.getElementById('nextHero');
  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval;

  // Pré-carrega todas as imagens do hero em memória assim que a página
  // inicia, para que a troca de slide nunca precise esperar o download/
  // decode da imagem (isso é o que causava o "pulo"/pop na troca).
  slides.forEach(slide => {
    const img = slide.querySelector('.hero-bg');
    if (!img) return;
    const preloader = new Image();
    preloader.src = img.currentSrc || img.src;
  });

  function goToSlide(index) {
    const nextIndex = (index + slides.length) % slides.length;
    if (nextIndex === currentSlide) return;

    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    currentSlide = nextIndex;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }
  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startSlider() {
    slideInterval = setInterval(nextSlide, 6500);
  }
  function resetSlider() {
    clearInterval(slideInterval);
    startSlider();
  }

  if (nextBtn)
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetSlider();
    });
  if (prevBtn)
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetSlider();
    });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      goToSlide(index);
      resetSlider();
    });
  });

  // Pausa o slider automático quando a aba não está visível, evitando
  // "pulos" acumulados de slide quando o usuário volta pra aba.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(slideInterval);
    } else {
      resetSlider();
    }
  });

  startSlider();
});
