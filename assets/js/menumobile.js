const openMenu = document.querySelector(".open-menu");
const menu = document.querySelector(".menu")

openMenu.addEventListener("click", function(){
   menu.classList.toggle("openMenu")
})