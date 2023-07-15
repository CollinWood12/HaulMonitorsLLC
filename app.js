document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".section-box");

  sections.forEach(section => {
    section.addEventListener("click", function() {
      const sectionId = this.getAttribute("id");
      if (sectionId === "contact-section" || sectionId === "home-section") {
        return; // Do nothing for phone number and home sections
      }

      const pageUrl = sectionId + ".html"; // Assuming the section IDs match the HTML file names
      window.location.href = pageUrl; // Redirect to the corresponding page
    });
  });
});



function displaySection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(function(section) {
    section.classList.add('d-none');
  });

  // Show the requested section
  document.getElementById(sectionId).classList.remove('d-none');
}

// Display Home by default
displaySection('home');