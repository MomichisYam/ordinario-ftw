/**
 * Función para asignar el aria-expanded como false cuando esta retraido
 */
function desplegarMenu() {
      const navList = document.getElementById("nav-list");
      const button = document.querySelector(".menu-toggle");
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !expanded);
      navList.classList.toggle("show");
    }

function cambiarAFlora(){
    window.location.replace("Flora.html")
}