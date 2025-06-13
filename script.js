// Theme switcher
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
document.body.appendChild(themeToggle);

// Set dark mode as default
let isDarkMode = true;
document.body.classList.add('dark-mode');

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('skill-category')) {
                animateSkills(entry.target);
            }
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections and skill categories
document.querySelectorAll('section, .skill-category').forEach(element => {
    observer.observe(element);
});

// Animate skills with progress bars
function animateSkills(skillCategory) {
    const skills = skillCategory.querySelectorAll('.skill');
    skills.forEach(skill => {
        const level = skill.getAttribute('data-level');
        const progressBar = skill.querySelector('.skill-progress');
        if (progressBar) {
            progressBar.style.width = level;
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add active state to navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    header.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Add hover effect to skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('mouseover', () => {
        category.style.transform = 'translateY(-5px)';
    });

    category.addEventListener('mouseout', () => {
        category.style.transform = 'translateY(0)';
    });
});

// Add typing effect to header subtitle
const subtitle = document.querySelector('header p');
const text = subtitle.textContent;
subtitle.textContent = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Add particle effect to header
function createParticle() {
    const header = document.querySelector('header');
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position and size
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 4 + 2;
    
    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    header.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

// Create particles periodically
setInterval(createParticle, 200);

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add animation delays to skill items
document.querySelectorAll('.skill').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// Add smooth reveal for project images
document.querySelectorAll('.project-card img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
});

// Add hover effect to social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'translateY(-3px) rotate(5deg)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'translateY(0) rotate(0)';
    });
}); 