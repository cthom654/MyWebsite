function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let slideIndexes = [0, 0, 0]; // One for each project

function showSlide(projectIndex) {
    let slides = document.querySelectorAll('.project-card')[projectIndex].querySelectorAll('.slide');
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Show current slide
    if (slideIndexes[projectIndex] >= slides.length) {
        slideIndexes[projectIndex] = 0;
    }
    if (slideIndexes[projectIndex] < 0) {
        slideIndexes[projectIndex] = slides.length - 1;
    }
    
    slides[slideIndexes[projectIndex]].classList.add('active');
}

function changeSlide(direction, projectIndex) {
    slideIndexes[projectIndex] += direction;
    showSlide(projectIndex);
}

// Initialize all slideshows on page load
window.addEventListener('load', () => {
    for (let i = 0; i < 3; i++) {
        showSlide(i);
    }
});