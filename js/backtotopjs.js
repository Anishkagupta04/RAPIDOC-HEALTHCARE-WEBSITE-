/* Back to top up JS */

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById('back-to-top-container');

    function checkButtonVisibility() {
      if (window.innerWidth > 100 && window.scrollY > 100) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    }

    window.addEventListener('scroll', checkButtonVisibility);
    window.addEventListener('resize', checkButtonVisibility);

    backToTopButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    checkButtonVisibility();
  });