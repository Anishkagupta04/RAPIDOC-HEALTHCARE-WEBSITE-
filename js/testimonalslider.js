
const swiper = new Swiper('.js-testimonals-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
      el: '.js-testimonals-pagination',
      clickable: true
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      }
    }
  })