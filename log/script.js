document.addEventListener("DOMContentLoaded", function() {
  const registerButton = document.getElementById("register");
  const loginButton = document.getElementById("login");
  const container = document.getElementById("container");
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

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
    alert("Login successful!");
    // Redirect to the homepage after login
    setTimeout(() => {
      window.location.href = "index.html"; // Change "index.html" to your desired URL
    }, 1000); // Redirect after 1 second (1000 milliseconds)
  });
});
