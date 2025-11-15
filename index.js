// Scroll to section button
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Scroll reveal animations
const items = document.querySelectorAll(".fade-in");

const reveal = () => {
    let windowHeight = window.innerHeight;
    items.forEach(item => {
        let top = item.getBoundingClientRect().top;
        if (top < windowHeight - 50) {
            item.classList.add("show");
        }
    });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
