document.addEventListener("DOMContentLoaded", function() {

  generateSections(['home', 'services', 'testimonials', 'estimates']);
  displaySection('home');

  const sections = document.querySelectorAll(".section-box");
  sections.forEach(section => {
    section.addEventListener("click", function() {
      const sectionId = this.getAttribute("id");
      if (sectionId === "contact-section" || sectionId === "home-section") {
        return; 
      }

      const pageUrl = sectionId + ".html"; 
      window.location.href = pageUrl; 
    });
  });
});


let jumbotron = document.querySelector('.jumbotron');

function displaySection(sectionId) {
  document.querySelectorAll('.section').forEach(function(section) {
    section.classList.add('d-none');
  });

  const section = document.getElementById(sectionId);
  if (section) {
    let jumbotron = document.getElementById('jumbotron-holder');
    switch(sectionId) {
      case 'home':
        jumbotron.style.backgroundImage = "url('images/Background-home.png')";
        break;
      case 'about':
        jumbotron.style.backgroundImage = "url('images/Background-about.png')";
        break;
      case 'services':
        jumbotron.style.backgroundImage = "url('images/Background-services.png')";
        break;
      case 'testimonials':
        jumbotron.style.backgroundImage = "url('images/Background-testimonials.png')";
        break;
      case 'estimates':
        jumbotron.style.backgroundImage = "url('images/Background-estimates.png')";
        break;
      default:
        break;
    }
    
    section.classList.remove('d-none');
  }
}