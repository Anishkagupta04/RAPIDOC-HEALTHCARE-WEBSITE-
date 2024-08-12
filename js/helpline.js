window.addEventListener('DOMContentLoaded', function() {
  const helplineContainer = document.querySelector('.helpline-container');
  helplineContainer.style.opacity = '0';
  helplineContainer.style.animation = 'fadeIn 0.5s ease-in-out forwards';

  const contactDetailsContainer = document.querySelector('.contact-details-container');
  contactDetailsContainer.style.opacity = '0';
  setTimeout(function() {
    contactDetailsContainer.style.animation = 'fadeIn 0.5s ease-in-out forwards';
  }, 300);
});

ScrollReveal({
  //reset: true ,
  distance: '60px',
  duration: 2500,
  delay: 400
});
ScrollReveal().reveal('.content', { delay: 400, origin: 'left' ,interval:200});

  document.getElementById('emergencyButton').addEventListener('click', function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(function() {
      popup.style.display = 'none';
    }, 3000); // Hide popup after 3 seconds
  });