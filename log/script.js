document.addEventListener("DOMContentLoaded", function() {
  const registerButton = document.getElementById("register");
  const loginButton = document.getElementById("login");
  const container = document.getElementById("container");
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  const successBanner = document.createElement("div");
  // successBanner.id = "successBanner";
  // successBanner.textContent = "Login Successful";
  document.body.appendChild(successBanner);

  // Function to toggle password visibility
  function togglePasswordVisibility(toggleButton) {
    const passwordField = document.querySelector(toggleButton.getAttribute("toggle"));
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    // Change eye icon appearance based on password field visibility
    toggleButton.querySelector("svg").classList.toggle("visible");
  }

  // Event listener for register and login buttons
  registerButton.addEventListener("click", (event) => {
    event.preventDefault();
    container.classList.add("right-panel-active");
    registerForm.scrollIntoView({ behavior: "smooth" });
  });

  loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    container.classList.remove("right-panel-active");
    loginForm.scrollIntoView({ behavior: "smooth" });
  });

  // Event listener for password visibility toggle in register form
  const registerEye = document.querySelector("#registerForm .toggle-password");
  registerEye.addEventListener("click", function(event) {
    event.preventDefault();
    togglePasswordVisibility(registerEye);
  });

  // Event listener for password visibility toggle in login form
  const loginEye = document.querySelector("#loginForm .toggle-password");
  loginEye.addEventListener("click", function(event) {
    event.preventDefault();
    togglePasswordVisibility(loginEye);
  });

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Your registration logic goes here
    const name = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('#registerPassword').value;

    if (!name || !email || !password) {
      alert("Kindly, Please fill all the details😊");
      return;
    }

    // Simulate registration success
    document.getElementById("registerMessage").style.display = "block";
    setTimeout(() => {
      container.classList.remove("right-panel-active");
      loginForm.scrollIntoView({ behavior: "smooth" });
    }, 2000);
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Your login logic goes here
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('#loginPassword').value;

    if (!email || !password) {
      alert("Kindly, Please fill all the details😊");
      return;
    }

    // Simulate login success
    successBanner.style.display = "block";
    setTimeout(() => {
      successBanner.style.display = "none";
      window.location.href = "login.html"; // Change "login.html" to your desired URL
    }, 500); // Display banner for 2 seconds
  });
});
