const swiper = new Swiper('.js-testimonals-slider', {
  grabCursor: true,
  spaceBetween: 30,
  loop: true, // Added loop for continuous sliding
  pagination: {
    el: '.js-testimonals-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // Maintain single view on mobile
    320: {
      slidesPerView: 1,
    },
    // Two slides on tablets and larger
    768: {
      slidesPerView: 2,
    }
  },
  // Optional: Add autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
