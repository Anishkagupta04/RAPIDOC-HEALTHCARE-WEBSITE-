function toggleMenu() {
    const navLinks = document.querySelector('.nav_link');
    navLinks.classList.toggle('vis-h');
  }
  
  function openFeedback() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('feedback-wrapper').style.display = 'block';
  }
  
  function closeFeedback() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('feedback-wrapper').style.display = 'none';
  }
  
  function handleRatingChange(rating) {
    console.log('Rating:', rating);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;
    console.log('Feedback submitted:', { name, email, feedback });
    closeFeedback();
  }
  
  // popup will be displayed when placed cursor pointer on rateus in navbar
  document.addEventListener('DOMContentLoaded', function() {
    const rateUsLink = document.querySelector('a[href="#feedback"]');
    rateUsLink.addEventListener('click', function(e) {
      e.preventDefault();
      openFeedback();
    });
  });