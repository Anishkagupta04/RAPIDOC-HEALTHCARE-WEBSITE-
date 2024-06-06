const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
let uppass = [];
let inpass = [];
let userImgPassInput = [];
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
  inpass = [];
  uppass = [];
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
  inpass = [];
  uppass = [];
});
// adding and removing border
function upimg(element) {
  var Image = element.querySelector("img");
  if (Image) {
    if (Image.classList.contains("clicked")) {
      Image.classList.remove("clicked");
      uppass.splice(uppass.indexOf(element.id), 1);
    } else {
      Image.classList.add("clicked");
      uppass.push(element.id);
    }
  }
}

function inimg(element) {
  var Image = element.querySelector("img");
  if (Image) {
    if (Image.classList.contains("clicked")) {
      Image.classList.remove("clicked");
    } else {
      Image.classList.add("clicked");
    }
  }
}
// element image recognition
function signup() {
  sessionStorage.setItem("upname", document.getElementById("upmail").value);
  sessionStorage.setItem("uppass", uppass);
  sessionStorage.setItem("userpass", document.getElementById("s-pass").value);
  var myText = "Account Created Succesfully";
  alert(myText);
}
// image pattern authentication
var v2 = new Boolean(false);
function signin() {
  userImgPassInput = [];
  const userEmailInput = document.getElementById("inmail").value;
  const userPassInput = document.getElementById("l-pass").value;
  const userImgPass = sessionStorage.getItem("uppass");
  const userEmail = sessionStorage.getItem("upname");
  const userPass = sessionStorage.getItem("userpass");
  const clickedImage = document.getElementsByClassName("clicked");
  for (let index = 0; index < clickedImage.length; index++) {
    userImgPassInput.push(clickedImage[index].parentElement.id);
  }
  console.log(userPass, userPassInput);
  if (!graphicMode) {
    if (
      userImgPass === userImgPassInput.toString() &&
      userEmailInput === userEmail
    ) {
      var myText = "Login is successful";
      alert(myText);
      NewTab();
    } else {
      var myText = "Login Failed";
      alert(myText);
    }
  } else {
    if (
      userImgPass === userImgPassInput.toString() &&
      userEmailInput === userEmail &&
      userPassInput.toString() == userPass.toString()
    ) {
      var myText = "Login is successful";
      alert(myText);
      NewTab();
    } else {
      var myText = "Login Failed";
      alert(myText);
    }
  }
}

function NewTab() {
  window.open("index.html", "_blank");
}

// TIMEPASS KA CODE //
// const inpassBtn = document.getElementsByClassName("inpass");
// const timepassBtn = document.getElementsByClassName("timepass");
// graphicMode = true;
// for (let index = 0; index < timepassBtn.length; index++) {
//   timepassBtn[index].addEventListener("click", function (event) {
//     console.log(event.target);
//     if (graphicMode) {
//       graphicMode = false;
//       inpassBtn[0].style.display = "none";
//       inpassBtn[1].style.display = "none";
//     } else {
//       graphicMode = true;
//       inpassBtn[0].style.display = "block";
//       inpassBtn[1].style.display = "block";
//     }
//   });
// }