// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Navbar background opacity on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(30, 41, 59, 0.9)';
    } else {
        nav.style.background = 'rgba(30, 41, 59, 0.7)';
    }
});

// Create floating background dots
function createBackgroundDots() {
    const container = document.createElement('div');
    container.className = 'background-dots';
    document.body.appendChild(container);

    for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        container.appendChild(dot);

        // Animate dots
        gsap.to(dot, {
            y: `${Math.random() * 100 - 50}`,
            x: `${Math.random() * 100 - 50}`,
            duration: Math.random() * 10 + 10,
            repeat: -1,
            yoyo: true,
            ease: 'none'
        });
    }
}

createBackgroundDots();

// Animate hero section on load
gsap.from('.hero-content', {
    duration: 1,
    y: 60,
    opacity: 0,
    ease: 'power3.out'
});

// Animate feature cards on scroll
gsap.from('.feature-card', {
    scrollTrigger: {
        trigger: '.features-grid',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 60,
    opacity: 0,
    stagger: 0.2
});

// Animate solution cards on scroll
gsap.from('.solution-grid > div', {
    scrollTrigger: {
        trigger: '.solution-grid',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    x: -60,
    opacity: 0,
    stagger: 0.2
});

// Animate stats cards on scroll
gsap.from('.stat-card', {
    scrollTrigger: {
        trigger: '.stats-grid',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 40,
    opacity: 0,
    stagger: 0.15
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect for feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.3,
            y: -5,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.3,
            y: 0,
            ease: 'power2.out'
        });
    });
});

// Add parallax effect to hero background
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    const scrolled = window.pageYOffset;
    heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
});