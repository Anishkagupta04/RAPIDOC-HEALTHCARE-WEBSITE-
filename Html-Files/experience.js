
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get the email input value
    var email = document.getElementById('emailInput').value;
    
    // You can add further validation of the email input here if needed
    
    // Show the subscribe banner
    document.getElementById('subscribeBanner').style.display = 'block';
    
    // Optionally, you can reset the form
    document.getElementById('subscribeForm').reset();
    
    // Simulate a delay and hide the banner after 5 seconds
    setTimeout(function() {
      document.getElementById('subscribeBanner').style.display = 'none';
    }, 5000);
  });
  
  const doctorList = [
    {
      name: "Dr. Ram",
      specialization: "Cardiology",
      experience: 12,
      fee: 300,
      image: "./images/doctor19.jpeg"
    },
    {
      name: "Dr. Rina",
      specialization: "Gaynocologist",
      experience: 8,
      fee: 400,
      image: "./images/doctor.png"
    },
    {
      name: "Dr. Ganesh",
      specialization: "Dermatologist",
      experience: 10,
      fee: 500,
      image: "./images/doctor8.jpeg"
    },
    {
    name: "Dr. Appa",
      specialization: "ENT",
      experience: 9,
      fee: 600,
      image: "./images/doctor19.jpeg"
    },
    {
    name: "Dr. Sanket",
      specialization: "Pediatrics",
      experience: 8,
      fee: 700,
      image: "./images/doctor.png"
    },
    {
    name: "Dr. Ashwin",
      specialization: "Cardiology",
      experience: 5,
      fee: 800,
      image: "./images/doctor17.jpeg"
    },
    {
    name: "Dr. Tushar",
      specialization: "Dermatologist",
      experience: 13,
      fee: 900,
      image: "./images/doctor18.jpeg"
    },
    {
    name: "Dr. Shivani",
      specialization: "Gynacologist",
      experience: 14,
      fee: 1000,
      image: "./images/doctor8.jpeg"
    },
    {
    name: "Dr. Piyush",
      specialization: "ENT",
      experience: 15,
      fee: 150,
      image: "./images/doctor17.jpeg"
    },
    {
    name: "Dr. Dhanraj",
      specialization: "Pediatrics",
      experience: 11,
      fee: 250,
      image: "./images/doctor18.jpeg"
    },
    {
    name: "Dr. Rani",
      specialization: "Cardiology",
      experience: 5,
      fee: 100,
      image: "./images/doctor19.jpeg"
    },
    {
    name: "Dr. Dhanshree",
      specialization: "Pediatrics",
      experience: 6,
      fee: 350,
      image: "./images/doctor8.jpeg"
    },
    {
    name: "Dr. Radheshyam",
      specialization: "Dermatologist",
      experience: 7,
      fee: 450,
      image: "./images/doctor.png"
    },
    {
    name: "Dr. Abhishek",
      specialization: "Gynacologist",
      experience: 8,
      fee: 550,
      image: "./images/doctor17.jpeg"
    },
    {
    name: "Dr. Kalyani",
      specialization: "ENT",
      experience: 9,
      fee: 650,
      image: "./images/doctor8.jpeg"
    },
    {
    name: "Dr. Priya",
      specialization: "Pediatrics",
      experience: 10,
      fee: 750,
      image: "./images/doctor.png"
    },
    {
    name: "Dr. Sunita",
      specialization: "Cardiology",
      experience: 11,
      fee: 850,
      image: "./images/doctor17.jpeg"
    },
    {
    name: "Dr. Rajesh",
      specialization: "Gynacologist",
      experience: 12,
      fee: 950,
      image: "./images/doctor18.jpeg"
    },
    {
    name: "Dr. Namrata",
      specialization: "ENT",
      experience: 13,
      fee: 200,
      image:"./images/doctor19.jpeg"
    },
    {
    name: "Dr. Divyansh",
      specialization: "Dermatologist",
      experience: 14,
      fee: 300,
      image: "./images/doctor17.jpeg"
    },
    {
    name: "Dr. Samiksha",
      specialization: "Pediatrics",
      experience: 16,
      fee: 400,
      image: "./images/doctor.png"
    },
    {
    name: "Dr. Ramesh",
      specialization: "Cardiologist",
      experience: 10,
      fee: 200,
      image: "./images/doctor8.jpeg"
    },
    {
    name: "Dr. Madhuri",
      specialization: "Pediatrics",
      experience: 9,
      fee: 500,
      image: "./images/doctor17.jpeg"
    },
    {
    name: "Dr. Kanchan",
      specialization: "Dermatologist",
      experience: 8,
      fee: 600,
      image: "./images/doctor18.jpeg"
    },
    {
    name: "Dr. Suresh",
      specialization: "Pediatrics",
      experience: 7,
      fee: 700,
      image: "./images/doctor19.jpeg"
    },
    {
    name: "Dr. Dipali",
      specialization: "ENT",
      experience: 6,
      fee: 800,
      image: "./images/doctor.png"
    },
    {
    name: "Dr. Nikita",
      specialization: "Dermatologist",
      experience: 5,
      fee: 900,
      image: "./images/doctor17.jpeg"
    },
    {
    name: "Dr. Sangeeta",
      specialization: "Cardiologist",
      experience: 5,
      fee: 1000,
      image:"./images/doctor8.jpeg"
    },
    {
    name: "Dr. Vanshika",
      specialization: "ENT",
      experience: 10,
      fee: 100,
      image: "./images/doctor19.jpeg"
    },
    {
    name: "Dr. Prabhakar",
      specialization: "Gynacologist",
      experience: 11,
      fee: 300,
      image: "./images/doctor18.jpeg"
    },
  ];

  function renderDoctorList(doctors) {
    const doctorListElement = document.getElementById("doctor-list");
    doctorListElement.innerHTML = "";

    doctors.forEach(doctor => {
      const doctorItem = document.createElement("li");
      doctorItem.innerHTML = `
        <div class="content">
          <h4>${doctor.name}</h4>
          <p>Specialization: ${doctor.specialization}</p>
          <p>Experience: ${doctor.experience} years</p>
          <p>Fee: $${doctor.fee}</p>
        </div>
        ${doctor.image ? `<img src="${doctor.image}" alt="${doctor.name}" style="width: 80px; height: auto; border-radius: 50%;">` : ""}
      `;
      doctorListElement.appendChild(doctorItem);
    });
  }

  function filterDoctors() {
    const experienceFilter = document.getElementById("experience-filter").value;
    const feeFilter = document.getElementById("fee-filter").value;

    let filteredDoctors = doctorList.filter(doctor => {
      return (
        (experienceFilter === "" || doctor.experience >= experienceFilter) &&
        doctor.fee >= feeFilter
      );
    });

    renderDoctorList(filteredDoctors);
  }

  function sortDoctorsByFee() {
    doctorList.sort((a, b) => a.fee - b.fee);
    renderDoctorList(doctorList);
  }

  document.getElementById("experience-filter").addEventListener("change", filterDoctors);
  document.getElementById("fee-filter").addEventListener("input", () => {
    document.getElementById("fee-value").textContent = document.getElementById("fee-filter").value;
    filterDoctors();
  });

  document.getElementById("sort-btn").addEventListener("click", sortDoctorsByFee);

  renderDoctorList(doctorList);

  window.addEventListener("load", () => {
    const loader = document.querySelector(".pre");
    loader.classList.add("pre--hidden");
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  var currentYear = new Date().getFullYear();
  document.getElementById('year').textContent = currentYear;