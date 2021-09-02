//this code work to give it style to menu icon

const menuIcon = document.querySelector(".menu-icon");
const menuOptions = document.querySelector(".menu-options");

menuIcon.addEventListener("click", () => {
    menuOptions.classList.toggle("nav-menu_visible");
});


//this code work to animate loader

window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});