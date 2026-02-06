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
      <h4><strong>IT Technician</strong><br>
      Cookstown High School</h4>
      <p>As an IT Technician, I support and maintain the school's technology infrastructure, including hardware and software issues, 
      network connectivity, and user support.</p>
      <br>
      <h4>Maintenance</h4>
      This included carrying out regular maintenance tasks such as maintaining working keyboards, mice, and monitors (e.g I was required
      to replace faulty hardware and update drivers on computers).<br>
      <h4>Troubleshooting</h4>
      Additionally, I was required to troubleshoot technical problems such as maintaining network connectivity (e.g issues
      with staff and students internet connectivity), updating software for applications for staff around the school to 
      ensure smooth operations (e.g I had to reset a staff member's account in order for them to set up parent meetings).<br>
      <h4>Additional Support</h4>
      Furthermore, I went outside if my initail duties and I assisted staff and students with their IT needs (e.g I conducted an 
      after-school coding club in which I helped student code BBC Micro-Bit robots with the Python Coding Language, 
      introducing them to a new aspect that wasnt currently on the curriculum).
    `
  },
  education: {
    title: '<img src="./assets/education.png" alt="Education Icon" class="modal-title-icon"> Education',
    content: `
      <p><strong>Bachelors of Science Degree</strong><br>
      in Computer Science</p>
      <h4>University</h4>
      <p>I graduated with First Class Honours in Computer Science from The Open University, a journey 
      that sharpened both my technical skills and my discipline as an independent learner. 
      <h4>How It Helped Me</h4>
      Through a strong mix of theory and hands-on projects, I built a solid foundation in 
      software development, algorithms, data structures, and problem-solving, while learning how to design, 
      test, and reason about real-world systems. Studying with the Open University also strengthened my time management, 
      self-motivation, and ability to learn complex concepts independently, which I now bring into every project I work on.</p>
    `
  },
  hobbies: {
    title: '<img src="./assets/hobbies.png" alt="Hobbies Icon" class="modal-title-icon"> Hobbies & Interests',
    content: `
      <p>Football & Sports<br>
      Music & Music Production<br>
      Gaming</p>
      <h4>Football & Sports</h4>
      <p>I have had a passion for football and other sports since a very young age. I enjoy training and playing football 
      every week, I also enjoy watching matches and support Chelsea FC! I find that playing sports is the best way for me
      to stay fit as I enjoy it, relieve stress, and connect with others.</p>
      <h4>Music & Music Production</h4>
      <p>I enjoy creating music and producing tracks. I use various software tools to compose and edit music, 
      which allows me to express my creativity and explore the broad musical styles that I listen to and combine them.</p>
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