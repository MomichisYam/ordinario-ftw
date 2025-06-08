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

/**
 * Función para redirigir a la página de Flora
 */
function cambiarAFlora(){
    window.location.replace("Flora.html")
}

/**
 * Función para redirigir a la página de Fauna
 */
function cambiarAFauna(){
    window.location.replace("Fauna.html")
}