document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-zoom'); // Ajoute la classe d'animation
                observer.unobserve(entry.target); // Arrête de surveiller cette section
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section); // Observer chaque section
    });
});

// Ajoute un gestionnaire d'événement pour chaque lien
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le comportement par défaut du lien

            const targetId = link.getAttribute('href'); // Récupère l'ID de la cible
            const targetSection = document.querySelector(targetId); // Sélectionne la section cible

            // Calcule la position de défilement
            const offset = 130; // Ajuste cette valeur selon la hauteur de ta barre de navigation
            const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

            // Défilement vers la section cible
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth', // Défilement en douceur
            });
        });
    });
});

// Gestion du bouton de défilement
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Afficher le bouton quand on défile vers le bas de la page
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};

// Lorsque l'utilisateur clique sur le bouton, faire défiler vers le haut
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Défilement en douceur
    });
});



window.addEventListener('scroll', function() {
    document.querySelectorAll('.animate-fade-in-up').forEach(function(el) {
        let rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});


const svgElement = document.querySelector('.shake-animation');
setTimeout(() => {
    svgElement.classList.remove('shake-animation');
}, 3000); // Arrêter l'animation après 3 secondes


 // Sélectionner tous les liens de navigation
 const navLinks = document.querySelectorAll('.nav-link');
                  
 // Fonction pour supprimer la classe active des autres liens et l'ajouter à l'élément cliqué
 navLinks.forEach(link => {
   link.addEventListener('click', function() {
     // Supprimer la classe active de tous les liens
     navLinks.forEach(nav => {
       nav.classList.remove('bg-blue-400', 'text-white', 'md:text-blue-700', 'active');
     });
     
     // Ajouter la classe active au lien cliqué
     this.classList.add('bg-blue-400', 'text-white', 'md:text-blue-700', 'active');
   });
 });
  




