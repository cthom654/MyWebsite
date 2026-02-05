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



// ========== MODAL FUNCTIONALITY ==========

// Modal content data
const modalData = {
  experience: {
    title: '<img src="./assets/experience.png" alt="Experience Icon" class="modal-title-icon"> Experience',
    content: `
      <p><strong>IT Technician</strong><br>
      Cookstown High School</p>
      <p>Add your detailed experience information here...</p>
    `
  },
  education: {
    title: '<img src="./assets/education.png" alt="Education Icon" class="modal-title-icon"> Education',
    content: `
      <p><strong>Bachelors of Science Degree</strong><br>
      in Computer Science</p>
      <p>Add your detailed education information here...</p>
    `
  },
  hobbies: {
    title: '<img src="./assets/hobbies.png" alt="Hobbies Icon" class="modal-title-icon"> Hobbies & Interests',
    content: `
      <p>Football & Sports<br>
      Music & Music Production<br>
      Gaming</p>
      <p>Add your detailed hobbies information here...</p>
    `
  }
};

// Open modal function
function openModal(type) {
  const modal = document.getElementById('modal-overlay');
  const data = modalData[type];
  
  document.getElementById('modal-title').innerHTML = data.title;
  document.getElementById('modal-body').innerHTML = data.content;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal function
function closeModal() {
  const modal = document.getElementById('modal-overlay');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Initialize modal functionality
window.addEventListener('load', () => {
  // Get clickable sections
  const experienceEl = document.querySelector('.experience-section');
  const educationEl = document.querySelector('.education-section');
  const hobbiesEl = document.querySelector('.hobbies-section');
  
  // Add click events to sections
  if (experienceEl) {
    experienceEl.addEventListener('click', () => openModal('experience'));
  }
  
  if (educationEl) {
    educationEl.addEventListener('click', () => openModal('education'));
  }
  
  if (hobbiesEl) {
    hobbiesEl.addEventListener('click', () => openModal('hobbies'));
  }
  
  // Close button click
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  
  // Click outside modal to close
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  });
  
  // Press Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});