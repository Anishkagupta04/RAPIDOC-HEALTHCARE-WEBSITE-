document.addEventListener("DOMContentLoaded", function() {
  const registerButton = document.getElementById("register");
  const loginButton = document.getElementById("login");
  const container = document.getElementById("container");
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  const successBanner = document.createElement("div");
  successBanner.id = "successBanner";
  successBanner.textContent = "Login Successful";
  document.body.appendChild(successBanner);

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

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Your registration logic goes here

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

    // Simulate login success
    successBanner.style.display = "block";
    setTimeout(() => {
      successBanner.style.display = "none";
      window.location.href = "login.html"; // Change "index.html" to your desired URL
    }, 2000); // Display banner for 2 seconds
  });
});
