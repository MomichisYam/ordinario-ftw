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
function cambiarAFlora() {
    window.location.replace("Flora.html")
}

/**
 * Función para redirigir a la página de Fauna
 */
function cambiarAFauna() {
    window.location.replace("Fauna.html")
}

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