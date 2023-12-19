function toggleMenu() {

  const menu = document.getElementById("menu");
  
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menu.classList.add("disable");
  } else {
    menu.classList.remove("disable");
    menu.classList.add("active");
  }
}
document.getElementById("menu").addEventListener("click", toggleMenu);
