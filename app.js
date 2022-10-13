const previous = document.querySelector('[data-slide="previous"]');
const next = document.querySelector('[data-slide="next"]');

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider-inner img');
const slidesTotal = slides.length;

let activeSlide = parseInt(slider.dataset.active);

previous.addEventListener('click', slide);
next.addEventListener('click', slide);

function slide(e) {
  const direction = e.target.dataset.slide;

  if (direction === 'next' && activeSlide < slidesTotal) {
    activeSlide++;
  }

  if (direction === 'previous' && activeSlide > 1) {
    activeSlide--;
  }

  slider.dataset.active = activeSlide;
}
