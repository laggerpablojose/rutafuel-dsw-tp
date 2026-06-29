# Informe técnico web - RutaFuel

## Integrantes

- Integrante 1: Lezcano, Claudio - DNI 36202134 - cdlezcano@frsf.utn.edu.ar
- Integrante 2: Bocchieri, Matías - DNI 40716036 - mbocchieri@frsf.utn.edu.ar
- Integrante 3: Rossi, Marcos - DNI 40858352 - mrossiameduri@frsf.utn.edu.ar
- Integrante 4: Lagger, Pablo José - DNI 43959827 - plagger@frsf.utn.edu.ar

## Cambios respecto del TP1

- En la portada (`index.html`) se reemplazó el espacio reservado para imagen por un carousel de Bootstrap
  con fotografías reales de la estación (fachada, surtidores y mapa de cobertura), en lugar de una sola
  imagen estática como sugería el mockup original. Se mantiene el resto de la estructura del TP1 (slogan,
  grilla de servicios, bloques destacados).
- En `servicios.html` se agregó el bloque "Contactate con nosotros" del wireframe como un formulario corto
  (nombre, email, mensaje) con validación de Bootstrap, en vez de un formulario extenso. Se prioriza así no
  duplicar el formulario más completo de "trabajá con nosotros" que corresponde a la sección Nosotros.
- Pendiente de completar por cada integrante a medida que se avance con Promociones, Nosotros y Ubicación.

## Estructura del sitio

- index.html
- servicios.html
- promociones.html
- nosotros.html
- ubicacion.html

## Uso de Bootstrap 5

Además de los componentes JavaScript (detallados en la sección siguiente), se utilizó el sistema de grid
de Bootstrap (`container`, `row`, `col-*`) para la maquetación responsiva de todas las páginas, y clases
utilitarias (`d-flex`, `g-4`, `text-center`, `shadow-sm`, etc.) para espaciado y alineación sin necesidad de
escribir CSS adicional para cada caso puntual.

## Componentes JavaScript de Bootstrap

Avance actual (3 de los 4 componentes mínimos exigidos por la consigna):

1. **Navbar collapse** — en las 5 páginas del sitio (`index.html`, `servicios.html`, `promociones.html`,
   `nosotros.html`, `ubicacion.html`). Se eligió porque es el componente estándar para que el menú de
   navegación se adapte a pantallas chicas (celular y tablet), requisito de diseño responsivo de la
   consigna.

2. **Carousel** — en `index.html` (hero de portada) y `servicios.html` (hero de la sección). Se usó para
   mostrar varias fotografías de la estación (fachada, surtidores, mapa de cobertura) sin ocupar más
   espacio vertical del necesario. Cada página tiene su propio `id` de carousel (`carouselRutaFuel` y
   `carouselServicios`) para que funcionen de forma independiente si se navega entre ambas en la misma
   sesión.

3. **Validación de formularios (`needs-validation`)** — en `servicios.html`, sobre el formulario de
   contacto ("Contactate con nosotros"). Se eligió el componente de validación nativo de Bootstrap porque
   evita escribir lógica de validación manual y da feedback visual inmediato (`invalid-feedback`) sin
   recargar la página.

Pendiente (a definir por las páginas restantes — Promociones, Nosotros): un cuarto componente, con
candidatos ya identificados en el wireframe del TP1: Modal para el detalle de cada promoción, o reutilizar
la validación de formularios en el formulario "trabajá con nosotros" de Nosotros (en ese caso habría que
sumar un componente distinto, como Accordion o Toast, para llegar a 4 componentes *distintos*).

## JavaScript propio

Se utilizó un único archivo `js/main.js`, compartido por las 5 páginas, con dos mecanismos de captura de
eventos:

- **Atributo `data-rf-event`**: cualquier botón o enlace marcado con este atributo queda registrado por la
  función `registrarEventosRutaFuel()`, que escucha el evento `click` y deja constancia en consola del
  nombre de la acción (por ejemplo, `cta-inicio-servicios` en el botón "Ver servicios" de la portada, o
  `contacto-servicios-enviar` en el botón de envío del formulario de contacto). Se eligió este patrón para
  no repetir código de captura de eventos en cada página.
- **Validación de formularios** (`registrarValidacionFormularios()`): escucha el evento `submit` de los
  formularios marcados con la clase `needs-validation`. Si el formulario es válido, se cancela el envío real
  (no hay backend), se muestra un mensaje de confirmación y se limpia el formulario; si no es válido, se
  marcan los campos con error según el componente de validación de Bootstrap.

Se usó `js/main.js` para mantener una sola fuente de comportamiento del sitio, en línea con el requisito de
JavaScript con captura de eventos.

## Personalización de Bootstrap mediante Sass

Se personalizaron variables de color para adaptar Bootstrap a la identidad visual de RutaFuel.

Colores principales:

- Header/Footer: #4D53B6
- Botones/Acento: #6558F5
- Fondos claros: blanco y gris suave

## Optimización de imágenes

Las fotografías originales de la estación (`img/img/`) se recibieron en formato PNG sin comprimir, con
nombres que incluían espacios y errores de codificación (por ejemplo, `Fachada Estaci[ó]n de servicio
Noche.png`). Se generó una copia optimizada en `img/content/`, en formato WebP, con nombres en minúsculas
sin espacios ni acentos:

| Nombre original | Nombre nuevo | Peso original | Peso optimizado |
|---|---|---|---|
| Fachada Estación de servicio Noche.png | fachada-estacion-noche.webp | ~1.78 MB | ~92 KB |
| Surtidores RutaFuel.png | surtidores-rutafuel.webp | ~1.85 MB | ~72 KB |
| Mapa ubicaciones RutaFuel.png | mapa-cobertura-rutafuel.webp | ~1.80 MB | ~75 KB |
| Personal RutaFuel.png | personal-rutafuel.webp | ~1.86 MB | ~64 KB |

Esto responde directamente al punto de la consigna sobre tiempo de carga y organización de recursos: el
peso total de las imágenes usadas en el sitio se redujo en más del 95%. Los archivos originales se
conservan sin modificar en `img/img/` como respaldo, fuera de las páginas publicadas.

## Publicación

URL del sitio publicado:

Pendiente.
