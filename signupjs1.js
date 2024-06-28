import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup ,createUserWithEmailAndPassword,updateProfile} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyBEiIKrS7Raxv-73DyTjv_7xHkPKCyTKoo",
  authDomain: "gssoc-issue-solve.firebaseapp.com",
  databaseURL: "https://gssoc-issue-solve-default-rtdb.firebaseio.com",
  projectId: "gssoc-issue-solve",
  storageBucket: "gssoc-issue-solve.appspot.com",
  messagingSenderId: "897320160719",
  appId: "1:897320160719:web:7cb31eed6e903af62bd6ba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database=getDatabase();
const dbRef=ref(database,'data');
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

document.getElementById("google1").addEventListener("click", function() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "./signedup.html";
    }).catch((error) => {
      console.error("Error during Google sign-in:", error);
    });
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent form from submitting the default way
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (validateForm(name, email, password)) {
    // Simulate a successful registration (Replace with actual Firebase sign-up logic)
    try {
      createUserWithEmailAndPassword(auth,email,password)
     .then((credential)=>
      {
        set(ref(database, 'users/' + credential.user.uid), { // set userdetails in realtime database 
        username: name,
        email: email,
    })
    updateProfile(credential.user,{  // update profile for username
      displayName:name,
    })
  });

    } catch (error) {
      console.log(error);
      //alert("error occured!")
    }
    console.log("Form submitted with:", { name, email, password });
    //window.location.href = "./signed.html";
  }
});

function validateForm(name, email, password) {
  if (name === "" || email === "" || password === "") {
    alert("All fields are required!");
    return false;
  }
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
  return true;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
