document.addEventListener("DOMContentLoaded", function() {
    const images = document.getElementsByTagName('img');
  
    Array.from(images).forEach(img => {
      img.addEventListener("mousemove", function(event) {
        const rect = img.getBoundingClientRect();
        const imgX = rect.left + rect.width / 2;
        const imgY = rect.top + rect.height / 2;
        const mouseX = event.clientX - imgX;
        const mouseY = event.clientY - imgY;
        
        const rotateX = mouseY * 0.05; 
        const rotateY = mouseX * -0.05; 
        
        gsap.to(img, {
          rotationX: rotateX,
          rotationY: rotateY,
          ease: "power2.out",
          duration: 0.3
        });
      });
  
      img.addEventListener("mouseleave", function() {
        gsap.to(img, {
          rotationX: 0,
          rotationY: 0,
          ease: "power2.out",
          duration: 0.5
        });
      });
    });
  });