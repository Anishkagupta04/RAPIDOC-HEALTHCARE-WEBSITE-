/*About Section*/
document.querySelectorAll('.about-us-community').forEach(function (element) {
    element.addEventListener('mouseover', function () {
      element.querySelector('img').src = './images/checkuphover.png';
    });
    element.addEventListener('mouseleave', function () {
      element.querySelector('img').src = './images/checkup.png';
    });
  });

  document.querySelectorAll('.about-us-event').forEach(function (element) {
    element.addEventListener('mouseover', function () {
      element.querySelector('img').src = './images/serviceshover.png';
    });
    element.addEventListener('mouseleave', function () {
      element.querySelector('img').src = './images/services.png';
    });
  });

  document.querySelectorAll('.about-us-product').forEach(function (element) {
    element.addEventListener('mouseover', function () {
      element.querySelector('img').src = './images/wardhover.png';
    });
    element.addEventListener('mouseleave', function () {
      element.querySelector('img').src = './images/ward.png';
    });
  });

  document.querySelectorAll('.about-us-location').forEach(function (element) {
    element.addEventListener('mouseover', function () {
      element.querySelector('img').src = './images/appointmenthover.png';
    });
    element.addEventListener('mouseleave', function () {
      element.querySelector('img').src = './images/appointment.png';
    });
  });