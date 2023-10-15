const menuToggle = document.querySelector(".menu-toggle");
const navLink = document.querySelector(".nav-link");

menuToggle.addEventListener("click", () => {
    navLink.classList.toggle("active");
});
