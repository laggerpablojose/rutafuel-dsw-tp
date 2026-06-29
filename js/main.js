/* =========================================================
   RutaFuel - JavaScript inicial
   Objetivo: cumplir captura básica de eventos sin lógica compleja.
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    actualizarAnioFooter();
    registrarEventosRutaFuel();
    registrarValidacionFormularios();
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

/*
  Activa la validación de formularios de Bootstrap (componente needs-validation)
  en todos los formularios marcados con esa clase. Si el formulario es válido,
  además se muestra un mensaje de confirmación simple sin recargar la página.
*/
function registrarValidacionFormularios() {
    const formularios = document.querySelectorAll(".needs-validation");

    formularios.forEach(function (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();
            evento.stopPropagation();

            if (formulario.checkValidity()) {
                const confirmacion = formulario.querySelector(".form-text");
                if (confirmacion) {
                    confirmacion.classList.remove("d-none");
                }
                formulario.reset();
                formulario.classList.remove("was-validated");
            } else {
                formulario.classList.add("was-validated");
            }
        });
    });
}