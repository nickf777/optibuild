const hamburger = document.getElementById("hamburger-list");
const menu = document.getElementById("hamburger-menu")
const icon = document.getElementsByClassName("fa-bars")[0];
const windowWidth = window.innerWidth;

icon.addEventListener("click", function() {
    if (menu.style.display === "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
})

// Remove hamburger menu on re-size

window.addEventListener("resize", function() {
    if (windowWidth >= 1021) {
        menu.style.display = "none"
    }
})