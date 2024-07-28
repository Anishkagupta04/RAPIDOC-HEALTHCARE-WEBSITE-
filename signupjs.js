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
  apiKey: "AIzaSyDx_FcoL3XJryt6BInhOaDsMKiSmxzrYBI",
  authDomain: "fir-7f3dd.firebaseapp.com",
  projectId: "fir-7f3dd",
  storageBucket: "fir-7f3dd.appspot.com",
  messagingSenderId: "467011865433",
  appId: "1:467011865433:web:e23be9d0cc3496bb961a48"
};




const app = initializeApp(firebaseConfig);
const database = getDatabase();
const dbref = ref(database, "data");
const auth = getAuth(app);

auth.languageCode = 'en';

function setItemWithExpiry(key,value,ttl){
  const now=new Date();
  const item={
    value:value,
    expiry:now.getTime()+ttl
  }
  localStorage.setItem(key,JSON.stringify(item));
}

const provider = new GoogleAuthProvider();
//signin
document.getElementById("googsignin").addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      setItemWithExpiry('username',user.displayName,30000); 
    })
    .catch((error) => {
      console.error("Error during Google sign-in:", error);
    });
});

// document.getElementById("loginForm").addEventListener("submit", function(event) {
//   event.preventDefault();  // Prevent form from submitting the default way
//   const email = document.getElementById("loginEmail").value;
//   const password = document.getElementById("loginPassword").value;

//   if (setTimeout(validateForm(email, password), 500)){
//     signInWithEmailAndPassword(auth,email,password)
//     .then((userCredential)=>{
//       console.log(userCredential.user);
//       setItemWithExpiry('username',userCredential.user.displayName,3000);
//    //  localStorage.setItem("username", userCredential.user.displayName); // set username into session storage 
//      window.location.href = "./index.html";
//     })
//     .catch((error)=>{
//       document.getElementById("login-failed").removeAttribute("style");
//       console.log(error);
//     })
//   }
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
  //})
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
