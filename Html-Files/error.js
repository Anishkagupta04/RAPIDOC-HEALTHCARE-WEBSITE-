// Function to adjust navigation based on screen size
function adjustNav() {
    const nav = document.querySelector('nav');
    const windowWidth = window.innerWidth;
  
    if (windowWidth <= 768) {
      nav.classList.add('responsive');
    } else {
      nav.classList.remove('responsive');
    }
  }
  
  // Call the adjustNav function on initial load and window resize
  adjustNav();
  window.addEventListener('resize', adjustNav);
  
  // Responsive navigation functionality (optional)
  if (document.querySelector('nav.responsive')) {
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Font Awesome icon for menu (replace with your preferred method)
  
    navToggle.addEventListener('click', () => {
      const nav = document.querySelector('nav');
      nav.classList.toggle('active');
    });
  
    document.querySelector('header').appendChild(navToggle);
  }
  