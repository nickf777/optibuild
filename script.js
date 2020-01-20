const hamburger = document.getElementById("hamburger-list");
const icon = document.getElementsByClassName("fa-bars")[0];

icon.addEventListener("click", function() {
    if (hamburger.style.display === "none") {
        hamburger.style.display = "flex"
    } else {
        hamburger.style.display = "none"
    }
})