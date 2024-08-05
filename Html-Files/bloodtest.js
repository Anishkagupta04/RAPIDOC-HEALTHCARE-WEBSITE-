document.addEventListener('DOMContentLoaded', function() {
    const bloodTestForm = document.getElementById('bloodTestForm');
    const popupOverlay = document.getElementById('popupOverlay');
    const closeBtn = document.querySelector('.close-btn');
  
    bloodTestForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const bloodGroup = document.getElementById('bloodGroup').value;
      const wbc = parseFloat(document.getElementById('wbcPercentage').value);
      const rbc = parseFloat(document.getElementById('rbcPercentage').value);
      const platelets = parseFloat(document.getElementById('plateletPercentage').value);
  
      let resultText = '';
      let skinDiseaseChance = '';
      let cure = '';
  
      if (wbc < 4.5 || wbc > 11) {
        resultText += 'Abnormal white blood cell count. ';
      }
      
      if (rbc < 4.2 || rbc > 5.4) {
        resultText += 'Abnormal red blood cell count. ';
      }
      
      if (platelets < 150 || platelets > 450) {
        resultText += 'Abnormal platelet count. ';
      }
  
      if (resultText === '') {
        resultText = 'All blood cell counts are within normal range.';
      }
  
      // Simple logic for skin disease chance (for demonstration purposes)
      if (wbc > 11) {
        skinDiseaseChance = 'There is an increased chance of skin disease due to elevated white blood cell count.';
        cure = 'Consult a dermatologist for a proper diagnosis and treatment plan. It may include anti-inflammatory medications or topical treatments.';
      } else {
        skinDiseaseChance = 'No increased chance of skin disease detected based on these results.';
        cure = 'No specific treatment needed. Maintain a healthy lifestyle and good skincare routine.';
      }
  
      document.getElementById('resultText').textContent = resultText;
      document.getElementById('skinDiseaseChance').textContent = skinDiseaseChance;
      document.getElementById('cure').textContent = cure;
      
      // Show popup
      popupOverlay.classList.remove('hidden');
      document.body.classList.add('popup-open');
    });
  
    function closePopup() {
      popupOverlay.classList.add('hidden');
      document.body.classList.remove('popup-open');
    }
  
    closeBtn.addEventListener('click', closePopup);
  
    popupOverlay.addEventListener('click', function(e) {
      if (e.target === popupOverlay) {
        closePopup();
      }
    });
  
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closePopup();
      }
    });
  });

  /*Phone JS*/
  document.addEventListener("DOMContentLoaded", function() {
    const phoneInputField = document.getElementById('phone');
    const iti = window.intlTelInput(phoneInputField, {
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            fetch('https://ipinfo.io/json?token=YOUR_TOKEN')
                .then(response => response.json())
                .then(data => callback(data.country))
                .catch(() => callback('us'));
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });

    document.getElementById('phone-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const phoneNumber = iti.getNumber();
        console.log('Full Phone Number:', phoneNumber);

        // You can now send this phone number to your server or process it as needed
    });
});

/*Read More JS*/
document.addEventListener('DOMContentLoaded', function() {
  const newsItems = document.querySelectorAll('.news-item');

  newsItems.forEach(item => {
    item.addEventListener('click', function() {
      const link = this.querySelector('.read-more').getAttribute('href');
      window.location.href = link;
    });
  });
});