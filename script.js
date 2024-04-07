const menuActiv = document.querySelector(".menu_activ");
const burger = document.querySelector("menu_burger");

function toggleMenu() {
  menuActiv.classList.toggle("hidden");
}

burger.addEventListener("click", toggleMenu)

