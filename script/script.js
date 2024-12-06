// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            const targetID = this.getAttribute('href');
            document.querySelector(targetID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in effect on scroll
const sections = document.querySelectorAll('section');
const fadeInOnScroll = () => {
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (sectionPosition < screenPosition) {
            section.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);

// Add fade-in class in CSS
const style = document.createElement('style');
style.innerHTML = `
.fade-in {
opacity: 1;
transform: translateY(0);
transition: opacity 1s ease-out, transform 1s ease-out;
}

section {
opacity: 0;
transform: translateY(50px);
}

nav ul li a:hover {
color: darkred;
transition: color 0.3s;
}

.product img {
transition: transform 0.3s ease;
}

.product img:hover {
transform: scale(1.05);
}
`;
document.head.appendChild(style);
document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const menu = document.getElementById("menu");

    setTimeout(() => {
        loadingScreen.style.display = "none";
        menu.style.display = "block";
    }, 2000); // 2 seconds delay
});