document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-bar');

    hamburger.addEventListener('click', function() {
        navBar.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function toggleJobDesc(event) {
        const box = event.currentTarget;
        box.classList.toggle('expanded');
    }

    const boxes = document.querySelectorAll('.experience .exp-container .exp-box');
    boxes.forEach(function(box) {
        box.addEventListener('click', toggleJobDesc);
    });
});