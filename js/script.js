document.getElementById('login').addEventListener('click', () => {
  document.getElementById('container').classList.remove('right-panel-active');
});

document.getElementById('register').addEventListener('click', () => {
  document.getElementById('container').classList.add('right-panel-active');
});
