document.getElementById('medicine-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const medicineName = document.getElementById('medicine-name').value;
  fetchMedicineInformation(medicineName);
});

async function fetchMedicineInformation(medicineName) {
  try {
      const response = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${medicineName}`);
      const data = await response.json();
      displayMedicineInformation(data);
  } catch (error) {
      console.error('Error fetching medicine information:', error);
      document.getElementById('medicine-info').innerHTML = '<p>There was an error fetching the medicine information. Please try again later.</p>';
  }
}

function displayMedicineInformation(data) {
  const medicineInfoSection = document.getElementById('medicine-info');
  medicineInfoSection.innerHTML = '';

  if (data.results && data.results.length > 0) {
      const medicineInfo = data.results[0];
      medicineInfoSection.innerHTML = `
          <h2>${medicineInfo.openfda.brand_name ? medicineInfo.openfda.brand_name[0] : 'No brand name available'}</h2>
          <p><strong>Purpose:</strong> ${medicineInfo.purpose ? medicineInfo.purpose.join(', ') : 'No purpose information available'}</p>
          <p><strong>Warnings:</strong> ${medicineInfo.warnings ? medicineInfo.warnings.join('<br>') : 'No warnings available'}</p>
          <p><strong>Directions:</strong> ${medicineInfo.directions ? medicineInfo.directions.join('<br>') : 'No directions available'}</p>
      `;
  } else {
      medicineInfoSection.innerHTML = '<p>No information found for the specified medicine.</p>';
  }
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");


  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;  
  }


  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.opacity = 1;


  setTimeout(showSlides, 4000);
}


