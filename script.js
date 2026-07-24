// =====================================================================
// Saloni Gupta — Portfolio
// Vanilla JS: scroll reveals, active nav state, animated skill bars
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- Fade / slide-up reveal on scroll ---------- */
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => revealObserver.observe(el));

    
    /* ---------- Highlight active nav link based on section in view ---------- */
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const setActiveLink = (id) => {
        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    }, { threshold: 0.5, rootMargin: '-90px 0px -40% 0px' });

    sections.forEach((section) => navObserver.observe(section));

});
