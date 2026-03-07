import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('PTL_SYSTEM :: INITIALIZED');

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    if (themeToggle) {
        console.log('THEME_TOGGLE :: FOUND');
        
        // Check for saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeToggle.addEventListener('click', () => {
            console.log('THEME_TOGGLE :: CLICKED');
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
        }
    }

    // Initialize Animations
    initAnimations();

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Form Submission Placeholder
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = 'TRANSMITTING...';
            btn.style.opacity = '0.5';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = 'TRANSMISSION_COMPLETE';
                btn.classList.add('btn-outline');
                btn.classList.remove('btn-primary');
                contactForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('btn-outline');
                    btn.classList.add('btn-primary');
                    btn.style.opacity = '1';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});
