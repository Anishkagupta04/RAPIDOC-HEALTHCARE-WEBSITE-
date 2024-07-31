document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav_link');
  
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });
  
  