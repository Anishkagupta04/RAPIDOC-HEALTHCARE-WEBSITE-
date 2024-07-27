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


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, reload, deleteUser } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // optional
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register event
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Set a timeout for checking email verification
    const timeout = setTimeout(async () => {
      await reload(user);
      if (!user.emailVerified) {
        await deleteUser(user)
          .then(() => {
            alert('Account deleted due to unverified email.');
            location.reload(); // Reload the page after deletion
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            location.reload(); // Reload the page on error
          });
      }
    }, 30000); // 30 seconds

    await sendEmailVerification(user);
    alert('Registration successful! Please check your email to verify your account.');
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    location.reload(); // Reload the page on error
  }
});

// Login event
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Check if email is verified
    await reload(user); // Ensure latest user data is fetched
    if (user.emailVerified) {
      window.location.href = '/index.html'; // Redirect to index.html upon successful login
    } else {
      alert('Please verify your email address.');
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    location.reload(); // Reload the page on error
  }
});