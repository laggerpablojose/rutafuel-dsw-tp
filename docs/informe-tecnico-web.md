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
- `servicios.html` se maquetó siguiendo el mockup definitivo del informe del TP1 ("Tu parada estratégica en
  el camino"): carousel superior, bajada institucional, y los 3 bloques de servicio en formato imagen+texto
  alternado (Combustibles de Máxima Evolución, Pará Recargá y Continuá, Cuidado Experto para tu Vehículo),
  cerrando con el formulario de contacto corto con validación de Bootstrap.
  - Para el bloque "Pará, Recargá y Continuá" se incorporó una fotografía nueva de cafetería
    (`img/content/cafeteria-rutafuel.webp`), ya que el proyecto no contaba con una imagen propia para ese
    servicio.
  - Para el bloque "Cuidado Experto para tu Vehículo" se reutilizó la fotografía de personal
    (`img/content/personal-rutafuel.webp`) en lugar de una imagen de mantenimiento/cambio de aceite, porque
    la única disponible para ese momento mostraba productos de una marca comercial real (no ficticia), lo
    que generaría un conflicto de marca dentro de un proyecto institucional propio. Queda pendiente
    reemplazarla por una fotografía propia de un box de servicio si el grupo consigue una.
- En `servicios.html` se sacó el mapa de cobertura del carousel (quedó solo con fachada y surtidores), porque
  ese contenido corresponde a la sección Ubicación, no a Servicios. La imagen ya optimizada
  (`img/content/mapa-cobertura-rutafuel.webp`) queda disponible para que se use ahí.
- Se resolvió el logo definitivo del sitio: se usa la variante "Abreviada" (águila con ruta integrada,
  `img/logo/logo-rutafuel.png`, copia de `logoux.png`) en el header de las 5 páginas, junto al texto
  "RutaFuel" agrandado (`fs-4`). Las otras dos variantes del boceto (sigla "RF" y versión "Completa" con
  surtidor) quedan disponibles en `img/logo/` para usos futuros (favicon, redes, etc.) pero no se usan en
  el sitio.
- En `servicios.html` se centró el texto y los botones de los 3 bloques de servicios, se agregó un efecto
  de zoom al pasar el mouse sobre las imágenes (`.img-zoom-wrap`, definido en `scss/custom.scss`) y una
  línea divisoria (`<hr>`) entre cada bloque, para mejorar la lectura visual de la sección.
- Se agregó favicon al sitio (`img/logo/logo-rutafuel.png`, la misma variante usada en el header) en las
  5 páginas.
- Se rediseñó el footer común de las 5 páginas: ahora incluye navegación a las 4 secciones internas
  (antes solo enlazaba a Inicio y Ubicación, lo que reforzaba menos los enlaces internos del sitio), el
  logo completo de RutaFuel, e íconos de redes sociales (YouTube, LinkedIn, TikTok, Instagram, Facebook)
  usando Bootstrap Icons vía CDN. Los enlaces de redes sociales quedan como `href="#"` porque el proyecto
  no cuenta con perfiles reales en esas plataformas — reemplazar por las URLs reales si en algún momento
  se crean.
- Se corrigió el favicon/logo del header: en una entrega anterior el archivo `img/logo/logo-rutafuel.png`
  no había llegado a quedar copiado en el proyecto, lo que mostraba un ícono de "imagen rota" en el navbar.
- Se incorporó la tipografía **Poppins** (Google Fonts) para todos los encabezados (`h1` a `h6`),
  reemplazando la fuente genérica de Bootstrap solo en títulos. El texto de párrafo se mantiene en la
  fuente base del proyecto, para no recargar el sitio con demasiadas tipografías distintas.
- Se agregó una cuarta imagen al carousel de `servicios.html` (`img/content/marca-rutafuel-noche.webp`):
  una edición propia de la fachada nocturna con un overlay oscuro y el nombre/slogan de la marca
  superpuestos, generada para reemplazar visualmente el espacio que dejó el mapa al sacarlo del carousel.
- Se limitó la altura del carousel de `servicios.html` a 420px en pantallas grandes y 260px en mobile
  (`.carousel-hero`, con `object-fit: cover`), ya que las fotos a tamaño completo (`w-100`) resultaban
  demasiado grandes en relación al resto del contenido de la página.
- Se ajustó el espaciado vertical del `<h1>` del hero y del `<h2>` "Nuestros servicios" para que queden
  centrados entre los bloques que los rodean (mismo margen arriba y abajo, usando `my-4` en vez de
  combinaciones asimétricas de padding de sección + margen del título).
- Pendiente: reemplazar el 3er slide del carousel (`marca-rutafuel-noche.webp`) por una nueva foto que el
  grupo va a generar con otra herramienta de IA, editada con los colores e identidad de RutaFuel.
- Se rediseñó `index.html` siguiendo con mayor fidelidad el boceto Whimsical original de la portada: hero
  con bordes violeta arriba/abajo y título de tamaño más moderado, franja "Nuestros servicios" con 6
  recuadros con ícono (Bootstrap Icons) en una sola fila, sección "Pensado para tu viaje" en 3 columnas
  separadas por una línea divisoria fina (en vez de la grilla de 4 cards anterior), y un banner final ancho
  para "Todo para tu viaje en un solo lugar" con imagen a un lado y texto al otro.
- Diferencias respecto al boceto literal: el punto activo del indicador del carousel se mantuvo en violeta
  de marca en vez del rosa/rojo del boceto (ese color no forma parte de la paleta de RutaFuel). El banner
  final usa la foto de cafetería en lugar del placeholder con "X" del boceto, como solución temporal hasta
  que se defina una imagen específica para esa sección.
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
| (fotografía nueva, cafetería) | cafeteria-rutafuel.webp | — | ~13 KB |

Esto responde directamente al punto de la consigna sobre tiempo de carga y organización de recursos: el
peso total de las imágenes usadas en el sitio se redujo en más del 95%. Los archivos originales se
conservan sin modificar en `img/img/` como respaldo, fuera de las páginas publicadas.

## Publicación

URL del sitio publicado:

Pendiente.
