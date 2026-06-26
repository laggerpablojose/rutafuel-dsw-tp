/* =========================================================
   RutaFuel - JavaScript inicial
   Objetivo: cumplir captura básica de eventos sin lógica compleja.
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    actualizarAnioFooter();
    registrarEventosRutaFuel();
});

/* Actualiza el año del footer en todas las páginas */
function actualizarAnioFooter() {
    const elementosAnio = document.querySelectorAll(".js-anio");
    const anioActual = new Date().getFullYear();

    elementosAnio.forEach(function (elemento) {
        elemento.textContent = anioActual;
    });
}

/* Captura eventos simples en botones o enlaces marcados */
function registrarEventosRutaFuel() {
    const elementosConEvento = document.querySelectorAll("[data-rf-event]");

    elementosConEvento.forEach(function (elemento) {
        elemento.addEventListener("click", function () {
            const nombreEvento = elemento.getAttribute("data-rf-event");

            /*
              Este console.log sirve como evidencia inicial de captura de eventos.
              Más adelante puede reemplazarse por una acción visual, modal o toast.
            */
            console.log("Evento RutaFuel capturado:", nombreEvento);
        });
    });
}