/* Contact Form Popup Msg*/
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Display confirmation message
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';
    // Reset the form
    event.target.reset();
  
    setTimeout(function() {
      confirmationMessage.style.display = 'none';
    }, 5000); //msg disappears after 5s
  });