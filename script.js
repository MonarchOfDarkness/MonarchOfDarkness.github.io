window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('introduction').style.opacity = 0;
    document.getElementById('about').style.opacity = 0;
    fadeIn(document.getElementById('introduction'), 2000);
    fadeIn(document.getElementById('about'), 4000);
});

function fadeIn(element, duration) {
    let opacity = 0;
    let interval = 50;
    let gap = interval / duration;
    
    let fading = setInterval(() => {
        opacity += gap;
        element.style.opacity = opacity;

        if(opacity >= 1) clearInterval(fading);
    }, interval);
}

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Potential to add more interactivity as needed
