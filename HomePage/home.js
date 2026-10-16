
const menuBtn = document.getElementById("menuBtn");
const menu  = document.getElementById("menu");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu()
{
    menu.classList.toggle("remove")
}