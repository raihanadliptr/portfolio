let menuIcon = document.querySelector('#navbar-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const contact = document.getElementById('contact');

    const contactEnd = contact.offsetTop + contact.offsetHeight;

    // Check if the section is at the top of the viewport
    if (window.scrollY >= contact.offsetTop && window.scrollY <= contactEnd) {
        header.classList.add('color-for-contact');
    } else {
        header.classList.remove('color-for-contact');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.contact-button').addEventListener('click', function() {
        window.location.href = '#contact';
    });
});