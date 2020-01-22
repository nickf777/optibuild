const hamburger = document.getElementById("hamburger-list");
const menu = document.getElementById("hamburger-menu")
const icon = document.getElementsByClassName("fa-bars")[0];

icon.addEventListener("click", function() {
    if (menu.style.display === "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
})

// Remove hamburger menu on re-size

window.addEventListener("resize", function() {
    if (innerWidth > 1135) {
        menu.style.display = "none"
    }
})