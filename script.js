let navToggle = document.getElementById("toggler");
let header = document.querySelector("header");  
let nav = document.querySelector(".nav-links");

navToggle.addEventListener("click", toggleNav);
document.addEventListener("click", closeNav); 
function toggleNav(e) {
    e.stopPropagation();  
    nav.classList.toggle("active");
}

function closeNav(e) {
    if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        nav.classList.remove("active");
    }
}
