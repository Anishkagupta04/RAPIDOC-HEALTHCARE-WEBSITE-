import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup ,createUserWithEmailAndPassword,updateProfile} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyDx_FcoL3XJryt6BInhOaDsMKiSmxzrYBI",
  authDomain: "fir-7f3dd.firebaseapp.com",
  projectId: "fir-7f3dd",
  storageBucket: "fir-7f3dd.appspot.com",
  messagingSenderId: "467011865433",
  appId: "1:467011865433:web:e23be9d0cc3496bb961a48"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database=getDatabase();
const dbRef=ref(database,'data');
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

document.getElementById("goog").addEventListener("click", function() {
  console.log('clicked');
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

// document.getElementById("registerForm").addEventListener("submit", function(event) {
//   event.preventDefault();  // Prevent form from submitting the default way
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   if (validateForm(name, email, password)) {
//     try {
//       createUserWithEmailAndPassword(auth,email,password)
//      .then((credential)=>
//       {
//         set(ref(database, 'users/' + credential.user.uid), { // set userdetails in realtime database 
//         username: name,
//         email: email,
//     })
//     updateProfile(credential.user,{  // update profile for username
//       displayName:name,
//     })
//     window.location.href = "index.html";
//   });
    
//     } catch (error) {
//       console.log(error);
//       //alert("error occured!")
//     }
     
//     // Simulate a successful registration (Replace with actual Firebase sign-up logic)
    
//     console.log("Form submitted with:", { name, email, password });
//     //
//   }
// });

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
