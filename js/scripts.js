const menuIcon = document.querySelector(".menu-icon");
const menuOptions = document.querySelector(".menu-options");

menuIcon.addEventListener("click", () => {
    menuOptions.classList.toggle("nav-menu_visible");
});