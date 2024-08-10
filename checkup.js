document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav_link');
  
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });
  
  ScrollReveal({
    //reset: true ,
    distance: '60px',
    duration: 2500,
    delay: 400
  });
  ScrollReveal().reveal('.h1', { delay: 400, origin: 'left' });
  ScrollReveal().reveal('.sec-img', { delay: 400, origin: 'right' });
  ScrollReveal().reveal('.services-grid .services-item,.expect-grid .expect-item,.tip-grid .tip-item', { delay: 500, origin: 'bottom',interval:300 });