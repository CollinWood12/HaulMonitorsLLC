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


const sectionBackgrounds = {
  'home': "url('images/Background-home.png')",
  'about': "url('images/Background-about.png')",
  'services': "url('images/Background-services.png')",
  'testimonials': "url('images/Background-testimonials.png')",
  'estimates': "url('images/Background-estimates.png')",
}

function displaySection(sectionId) {
  document.querySelectorAll('.section').forEach(function(section) {
    section.classList.add('d-none');
  });

  const section = document.getElementById(sectionId);
  if (section) {
    let jumbotron = document.querySelector('.jumbotron');
    jumbotron.style.backgroundImage = sectionBackgrounds[sectionId] || '';
    section.classList.remove('d-none');
  }
}
displaySection('home')

