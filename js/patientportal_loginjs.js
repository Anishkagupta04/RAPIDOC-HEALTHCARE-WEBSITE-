document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can add actual login logic, for now, we'll just show the message
    var loginMessage = document.getElementById('loginMessage');
    loginMessage.textContent = 'Login Successful';
    loginMessage.style.display = 'block';
    
    // Set a timeout to hide the message after 3 seconds
    setTimeout(function() {
      loginMessage.style.display = 'none';
    }, 3000);
  });