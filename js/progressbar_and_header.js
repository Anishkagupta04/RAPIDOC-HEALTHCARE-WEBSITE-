
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.header_container');
const nav = document.querySelector('.nav_link');
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('nav-h');
  nav.classList.toggle('vis-h');
})


window.onscroll = function () {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
};