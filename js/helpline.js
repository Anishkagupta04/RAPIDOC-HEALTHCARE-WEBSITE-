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

const emergencyButton = document.querySelector('.emergency-button');
const popupContainer = document.querySelector('.popup-container');
const closeButton = document.querySelector('.close-button');
const nameInput = document.querySelector('#nameInput');
const nameDisplay = document.querySelector('#nameDisplay');

emergencyButton.addEventListener('click', (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();

  if (name) {
    popupContainer.style.visibility = 'visible';

    nameDisplay.textContent = `Emergency request from ${name}`;
  } else {
    alert('Please enter your name.');
  }
});

closeButton.addEventListener('click', () => {
  popupContainer.style.visibility = 'hidden';
});

ScrollReveal({
  //reset: true ,
  distance: '60px',
  duration: 2500,
  delay: 400
});
ScrollReveal().reveal('.content', { delay: 400, origin: 'left' ,interval:200});