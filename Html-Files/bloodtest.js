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