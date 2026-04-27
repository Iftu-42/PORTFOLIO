// ==========================
// MOBILE MENU TOGGLE
// ==========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});



// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });

    });

});



// ==========================
// SCROLL ANIMATION
// ==========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    const trigger = window.innerHeight * 0.8;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < trigger){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});



// Initial style
sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.6s ease";

});
