var swiper = new Swiper(".swiper", {
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView: 1,
      }
    },
  });

