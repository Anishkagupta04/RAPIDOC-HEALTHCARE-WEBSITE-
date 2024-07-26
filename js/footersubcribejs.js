/* Footer Subscribe JS */
document.querySelector('.subscribe-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Here you would normally send the form data to the server using fetch or XMLHttpRequest
    // For demonstration purposes, we'll just show the confirmation message

    const confirmationMessage = document.querySelector('.confirmation-message');
    confirmationMessage.style.display = 'block'; // Show the confirmation message

    // Clear the input field
    this.querySelector('input[type="email"]').value = '';

    // Optionally, you can hide the confirmation message after a few seconds
    setTimeout(() => {
      confirmationMessage.style.display = 'none';
    }, 5000); // Hide after 5 seconds
  });

  /* popup msg*/
  
  document.querySelector('.subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Show the modal popup
    const modal = document.getElementById('popupModal');
    modal.style.display = 'block';

    // Clear the input field
    this.querySelector('input[type="email"]').value = '';

    // Hide the modal when the close button is clicked
    const closeModal = document.querySelector('.modal .close');
    closeModal.onclick = function() {
      modal.style.display = 'none';
    }
  });

  // Hide the modal when clicking outside of it
  window.onclick = function(event) {
    const modal = document.getElementById('popupModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  /* Subscribe Banner*/
  document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get the email input value
    var email = document.getElementById('emailInput').value;
    
    // You can add further validation of the email input here if needed
    
    // Show the subscribe banner
    document.getElementById('subscribeBanner').style.display = 'block';
    
    // Optionally, you can reset the form
    document.getElementById('subscribeForm').reset();
    
    // Simulate a delay and hide the banner after 5 seconds
    setTimeout(function() {
      document.getElementById('subscribeBanner').style.display = 'none';
    }, 5000);
  });