let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;  
  }
  
  // Increment slide index and reset if necessary
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Display the current slide with fade-in effect
  slides[slideIndex - 1].style.opacity = 1;

  // Change slide every 4 seconds (4000ms)
  setTimeout(showSlides, 4000);
}
