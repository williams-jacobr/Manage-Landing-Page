const menuToggle = document.querySelector(".menu-toggle");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const menuItems = document.querySelector(".menu__items");
modal.innerHTML = menuItems.innerHTML;

const toggle = function() {
    overlay.classList.toggle('closed');
    modal.classList.toggle("closed");
}

menuToggle.addEventListener("click", toggle);
overlay.addEventListener("click", toggle);