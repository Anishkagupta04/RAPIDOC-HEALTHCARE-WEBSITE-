
document.addEventListener("DOMContentLoaded", function () {
    const phoneInputField = document.getElementById('phone');
    const iti = window.intlTelInput(phoneInputField, {
      initialCountry: "auto",
      geoIpLookup: function (callback) {
        fetch('https://ipinfo.io/json?token=YOUR_TOKEN')
          .then(response => response.json())
          .then(data => callback(data.country))
          .catch(() => callback('us'));
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });
    document.getElementById('phone-form').addEventListener('submit', function (event) {
      event.preventDefault();
      const phoneNumber = iti.getNumber();
      console.log('Full Phone Number:', phoneNumber);

      // You can now send this phone number to your server or process it as needed
    });
  });
