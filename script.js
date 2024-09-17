// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to add animation when hero section is in view
function animateHeroText() {
    const heroSection = document.querySelector('.hero-text');
    const sectionPosition = heroSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition && sectionPosition > 0) {
        heroSection.classList.add('animate');
    } else {
        heroSection.classList.remove('animate');
    }
}

// Initially animate hero section when page loads
window.addEventListener('load', function() {
    document.querySelector('.hero-text').classList.add('animate');
});

// Event listener for scrolling
window.addEventListener('scroll', animateHeroText);
