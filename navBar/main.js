const toggleButton = document.querySelector(".nav_toggle");
const menu = document.querySelector(".nav_menu");
const links = document.querySelector(".nav_links");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  links.classList.toggle("active");
});
