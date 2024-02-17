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
