document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordLink = document.querySelector('.pass-link a');
    const popup = document.getElementById('forgotPasswordPopup');
    const closeBtn = popup.querySelector('.close');
    const resetForm = document.getElementById('resetPasswordForm');
  
    forgotPasswordLink.addEventListener('click', function(e) {
      e.preventDefault();
      popup.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  
    window.addEventListener('click', function(e) {
      if (e.target == popup) {
        popup.style.display = 'none';
      }
    });
  
    resetForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('resetEmail').value;
      const newPassword = document.getElementById('newPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      if (validatePassword(newPassword, confirmPassword)) {
        // Here you would typically send a request to your server to reset the password
        alert('Password successfully changed!');
        popup.style.display = 'none';
      }
    });
  
    function validatePassword(password, confirmPassword) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  
      if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return false;
      }
  
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
      }
  
      return true;
    }
  });


  /*Password Visibility*/
  document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordLink = document.querySelector('.pass-link a');
    const popup = document.getElementById('forgotPasswordPopup');
    const closeBtn = popup.querySelector('.close');
    const resetForm = document.getElementById('resetPasswordForm');
    const passwordToggles = document.querySelectorAll('.password-toggle');
  
    forgotPasswordLink.addEventListener('click', function(e) {
      e.preventDefault();
      popup.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  
    window.addEventListener('click', function(e) {
      if (e.target == popup) {
        popup.style.display = 'none';
      }
    });
  
    resetForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('resetEmail').value;
      const newPassword = document.getElementById('newPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      if (validatePassword(newPassword, confirmPassword)) {
        // Here you would typically send a request to your server to reset the password
        alert('Password successfully changed!');
        popup.style.display = 'none';
      }
    });
  
    passwordToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetInput = document.getElementById(targetId);
        const icon = this.querySelector('i');
  
        if (targetInput.type === 'password') {
          targetInput.type = 'text';
          icon.classList.remove('fa-eye');
          icon.classList.add('fa-eye-slash');
        } else {
          targetInput.type = 'password';
          icon.classList.remove('fa-eye-slash');
          icon.classList.add('fa-eye');
        }
      });
    });
  
    function validatePassword(password, confirmPassword) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  
      if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return false;
      }
  
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
      }
  
      return true;
    }
  });