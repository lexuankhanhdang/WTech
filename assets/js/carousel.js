// carousel.js - Simple carousel functionality for artist images
(function () {
  const carousel = document.getElementById('artist-carousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.slide');
  const dots = carousel.querySelectorAll('.dot');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  
  if (!slides.length) return;

  let currentIndex = 0;

  // Show slide at index
  function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Wrap around if necessary
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    // Add active class to current slide and dot
    slides[currentIndex].classList.add('active');
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add('active');
    }
  }

  // Handle previous button click
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
    });
  }

  // Handle next button click
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
    });
  }

  // Handle dot clicks
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Initialize first slide
  showSlide(0);

  // Optional: Auto-rotate carousel every 5 seconds
  // Uncomment to enable auto-rotate
  // setInterval(() => {
  //   showSlide(currentIndex + 1);
  // }, 5000);
})();
