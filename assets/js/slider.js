document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.getElementById('prevHero');
  const nextBtn = document.getElementById('nextHero');
  if (!slides.length) return;
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  }

  function nextSlide() { goToSlide(currentSlide + 1); }
  function prevSlide() { goToSlide(currentSlide - 1); }

  function startSlider() { slideInterval = setInterval(nextSlide, 6000); }
  function resetSlider() { clearInterval(slideInterval); startSlider(); }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetSlider(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetSlider(); });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => { goToSlide(index); resetSlider(); });
  });

  startSlider();
});
