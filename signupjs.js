import {initializeApp} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  orderByChild,
  query,
  get,
  equalTo,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

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
const database = getDatabase();
const dbref = ref(database, "data");
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

document.getElementById("google").addEventListener("click", function() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      sessionStorage.setItem("username", user.displayName);
      window.location.href = "./signedup.html";
    }).catch((error) => {
      console.error("Error during Google sign-in:", error);
    });
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent form from submitting the default way
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (setTimeout(validateForm(email, password), 500)){
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      console.log(userCredential);
     sessionStorage.setItem("username", userCredential.user.displayName); // set username into session storage 
    window.location.href = "./index.html";
    })
    .catch((error)=>{
      document.getElementById("login-failed").removeAttribute("style");
      console.log(error);
    })
  }
     // const email = document.getElementById("loginEmail").value;
    // const password = document.getElementById("loginPassword").value;
    // if (setTimeout(validateForm(email, password), 500)) {
    //   const usersRef = ref(database, "users/");
    //   const squery = query(usersRef, orderByChild("email"), equalTo(email));
    //   let name = null;
    //   get(squery).then((res) => {
    //     console.log(res);
    //     if (res.exists()) {
    //       const user = res.val();
    //       console.log(user);
    //       for (const userId in user) {
    //         const userd = user[userId];
    //         name = userd.username;
    //       }
    //       
    //      
    //       // localStorage.setItem('username',)
    //     } else {
    //       console.log("no results found");
    //       document.getElementById("login-failed").removeAttribute("style");
    //     }
  })
  // Simulate a successful registration (Replace with actual Firebase sign-up logic)
 // console.log("Form submitted with:", {email, password});
//}
// });

function validateForm( email, password) {
  if ( email === "" || password === "") {
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

/*646664380070-n07i34glgcc6sanb59p3m1k5k0cgn1v1.apps.googleusercontent.com*/