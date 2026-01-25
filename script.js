

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

function copyEmail() {
    navigator.clipboard.writeText('cthom654@gmail.com').then(() => {
        // Optional: Show a brief message that it was copied
        alert('Email copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}