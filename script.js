/**
 * Función para asignar el aria-expanded como false cuando esta retraido
 */
function desplegarMenu() {
  const navList = document.getElementById("nav-list");
  const button = document.querySelector(".menu-toggle");
  const expanded = button.getAttribute("aria-expanded") === "true";
  
  // Actualiza el estado de accesibilidad
  button.setAttribute("aria-expanded", !expanded);
  
  // Alternar la clase "show" para mostrar/ocultar el menú
  navList.classList.toggle("show");
  
  // Cambiar el ícono del botón para indicar estado
  button.textContent = expanded ? "☰" : "✕";
}

/**
 * Función para redirigir a la página de Flora
 */
function cambiarAFlora() {
    window.location.replace("Flora.html")
}

/**
 * Función para redirigir a la página de Fauna
 */
function cambiarAFauna() {
    window.location.replace("Fauna.html")
}

/**
 * Función para cargar un documento XML y llamar a crearTablaMamiferos
 */
function loadXMLDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const xmlDoc = xhttp.responseXML;
        const mamifero = xmlDoc.getElementsByTagName("mamifero");
        crearTablaMamiferos(mamifero);
    }
    xhttp.open("GET", "mamiferos.xml");
    xhttp.send();
}

/**
 * Función para crear una tabla de mamiferos a partir de mamiferos.xml
 * @param {*} mamifero El mamifero del XML
 */
function crearTablaMamiferos(mamifero) {
    let table = "<tr><th>Nombre Cientifico</th><th>Nombre</th><th>Avistamientos</th></tr>";
    for (let i = 0; i < mamifero.length; i++) {
        table += "<tr><td>" +
            mamifero[i].getElementsByTagName("nombrecientifico")[0].childNodes[0].nodeValue +
            "</td><td><b>" +
            mamifero[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
            "</b></td><td>" +
            mamifero[i].getElementsByTagName("avistamientos")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("tabla-mamiferos").innerHTML = table;
}

/**
 * Función simular el envio de un avistamiento
 */
function enviarAvistamiento() {
    const checkboxes = document.querySelectorAll('input[name="mamifero"]:checked');
    
    if (checkboxes.length === 0) {
        alert("Por favor selecciona al menos un mamífero para reportar el avistamiento.");
        return;
    }
    
    alert("Reporte de avistamiento enviado, gracias por tu colaboración");
}

