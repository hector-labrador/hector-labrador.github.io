// Navbar al hacer scroll

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// Menú móvil

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Cerrar menú al pulsar un enlace

const menuLinks = document.querySelectorAll(".nav-links a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// Animaciones al hacer scroll

const elementsToReveal = document.querySelectorAll(
    "#about, #experience, #education, #skills, #projects, #contact"
);

elementsToReveal.forEach(function (element) {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.12
    }
);


elementsToReveal.forEach(function (element) {
    observer.observe(element);
});
