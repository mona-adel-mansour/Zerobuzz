console.log('Success: JavaScript from js/js.js running!')

function toggleMenu () {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
  }
} 
document.addEventListener("DOMContentLoaded", function() {
  const footerLinks = document.querySelectorAll(".footer-link");
  const kontaktFormular = document.getElementById("kontakt-formular");

  footerLinks.forEach(link => {
      link.addEventListener("click", function() {
          const target = this.dataset.target;
          if (target === "kontakt") {
              // Vis kontaktformularen, skjul andre sektioner
              kontaktFormular.style.display = "block";
              // Skjul andre sektioner i footer
              // Giv dem klassen "hidden" eller anvend display: none; eller visibility: hidden; som ønsket
          } else {
              // Vis den relevante sektion baseret på target
          }
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const kontaktLink = document.getElementById("kontakt-link");
  const kontaktFormular = document.getElementById("kontakt-formular");

  // Tilføj eventlytter til klik på "Kontakt" link
  kontaktLink.addEventListener("kontakt", function() {
      // Vis kontaktformularen
      kontaktFormular.style.display = "block";
      // Skjul andre sektioner i footer om nødvendigt
  });
});

