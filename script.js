let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

ScrollReveal().reveal('.Personal', { delay: 200, origin: 'bottom', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.service-box', { interval: 200, origin: 'bottom', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.portfolio-box', { interval: 200, origin: 'bottom', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.blog-box', { interval: 200, origin: 'bottom', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.contact form', { delay: 200, origin: 'bottom', distance: '50px', duration: 1000 });

var typed = new Typed('.fade', {
    strings: ['Web Developer', 'UI/UX Designer', 'Creative Freelancer'],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});
