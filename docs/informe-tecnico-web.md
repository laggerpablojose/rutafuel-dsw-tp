# Informe técnico web - RutaFuel

## 1. Título del informe

Informe técnico web del sitio institucional RutaFuel
Trabajo Práctico 2 - Desarrollo de Sitios Web - UTN FRSF

## 2. Integrantes

- Lezcano, Claudio - DNI 36202134 - [cdlezcano@frsf.utn.edu.ar](mailto:cdlezcano@frsf.utn.edu.ar)
- Bocchieri, Matías - DNI 40716036 - [mbocchieri@frsf.utn.edu.ar](mailto:mbocchieri@frsf.utn.edu.ar)
- Rossi, Marcos - DNI 40858352 - [mrossiameduri@frsf.utn.edu.ar](mailto:mrossiameduri@frsf.utn.edu.ar)
- Lagger, Pablo José - DNI 43959827 - [plagger@frsf.utn.edu.ar](mailto:plagger@frsf.utn.edu.ar)

## 3. Alcance del TP2

El Trabajo Práctico 2 consistió en construir el sitio web definido previamente durante el TP1, respetando la identidad visual, las secciones previstas y los criterios generales de maquetación responsive. Como el grupo está formado por cuatro integrantes, el alcance del trabajo corresponde a una portada y cuatro secciones internas: `index.html`, `servicios.html`, `promociones.html`, `nosotros.html` y `ubicacion.html`.

El sitio corresponde a una estación de servicio ficticia llamada RutaFuel. La propuesta tiene carácter institucional y presenta servicios, promociones, información de la empresa y ubicación. Para la construcción se utilizaron HTML5, Bootstrap 5, Sass, CSS compilado desde Sass, JavaScript básico, componentes interactivos de Bootstrap y criterios iniciales de SEO on-site. No se utilizó backend, base de datos ni APIs externas para resolver la funcionalidad principal del sitio.

## 4. Estructura del sitio

La estructura principal del proyecto quedó organizada con las páginas HTML en la raíz del proyecto para simplificar la navegación y la publicación. El sitio cuenta con `index.html`, `servicios.html`, `promociones.html`, `nosotros.html` y `ubicacion.html`. Además, se organizaron los estilos en `scss/` y `css/`, el comportamiento en `js/main.js`, las imágenes en `img/` y la documentación en `docs/`.

```txt id="nvz7uh"
index.html
servicios.html
promociones.html
nosotros.html
ubicacion.html

css/
└── main.css

scss/
├── custom.scss
└── _variables.scss

js/
└── main.js

img/
├── content/
└── logo/

docs/
├── informe-tecnico-web.md
└── informe-tecnico-seo.md
```

El archivo `css/main.css` es el CSS final utilizado por las páginas y se genera a partir de los archivos Sass.

## 5. Estado de implementación por página

### Inicio

La página `index.html` funciona como portada del sitio. Incluye el header común, la navegación principal, un hero institucional, un carousel de Bootstrap con imágenes de RutaFuel, una sección de servicios principales con íconos, bloques destacados relacionados con la app, ubicación y cuidado del vehículo, un llamado a promociones y el footer común. La página mantiene el objetivo del TP1: presentar la marca RutaFuel y guiar al usuario hacia las secciones internas.

### Servicios

La página `servicios.html` presenta los servicios principales de RutaFuel. Incluye el header común, el título “Tu parada estratégica en el camino”, un carousel superior, bloques de servicios con imagen y texto, botones con captura de eventos, un formulario de contacto con validación visual y el footer común. Los servicios se organizaron en bloques amplios para que la información sea clara y pueda adaptarse correctamente a escritorio, tablet y celular.

### Promociones

La página `promociones.html` quedó como una base maquetada, pero no está completa como sección final. El motivo es que el compañero responsable de esta parte no actualizó su diseño ni realizó la parte de código correspondiente. Por eso, actualmente la página conserva una estructura inicial con título, bajada, cards de promociones y botones con captura de eventos, pero no cuenta con el contenido visual y textual final que debería tener según el alcance completo del TP.

Se decidió no inventar promociones ni cerrar artificialmente esa sección, para que el informe refleje el estado real del proyecto. La página está integrada al sitio y mantiene navegación, metadatos, estructura semántica y estilos generales, pero la parte específica de diseño y contenido de Promociones queda faltante.

### Nosotros

La página `nosotros.html` presenta la identidad institucional de RutaFuel. Incluye header común, hero visual con imagen de fondo, título institucional, indicadores visuales con íconos, bloque de identidad, imágenes relacionadas con la estación, formulario “¿Querés trabajar con nosotros?” y footer común. La sección busca comunicar la idea de empresa, confianza, calidad y atención personalizada.

### Ubicación

La página `ubicacion.html` desarrolla la sección individual de ubicación. Incluye header común, título principal “Encontranos fácilmente”, subtítulo “Ubicados estratégicamente para acompañarte en tu viaje.”, mapa principal en formato imagen, botón “Cómo llegar” centrado, tres cards inferiores y footer común. Esta página respeta la estructura visual definida en el mockup del TP1: título, bajada, mapa destacado, CTA principal y cards informativas inferiores.

## 6. Cambios respecto del TP1

Durante la implementación del TP2 se mantuvo la estructura general definida en el TP1, aunque algunas páginas tuvieron adaptaciones propias de la etapa de desarrollo. En la portada se mantuvo la idea institucional de presentar RutaFuel como marca y orientar al usuario hacia las secciones internas, pero la imagen principal fue implementada mediante un carousel de Bootstrap en lugar de una imagen estática. Esta decisión permite mostrar más de una imagen representativa sin ocupar demasiado espacio vertical y, al mismo tiempo, incorporar un componente interactivo de Bootstrap.

En Servicios, la sección fue adaptada a una estructura de bloques con imagen y texto. Esto permite presentar mejor cada servicio y mantiene una lectura clara en distintos tamaños de pantalla. También se incorporó un formulario de contacto corto. Este formulario no envía datos a un servidor; se usa como recurso de interacción frontend y para aplicar validación visual con Bootstrap y JavaScript básico.

En Promociones, la sección quedó incompleta porque el integrante responsable no actualizó su diseño ni realizó su implementación de código. Se dejó una base inicial para no romper la navegación general del sitio, pero no se presenta como una página final terminada.

En Nosotros, la página se implementó como sección institucional, incorporando un hero visual, texto de identidad, íconos informativos y un formulario para postulación. La adaptación busca reforzar la presentación institucional de RutaFuel sin agregar complejidad innecesaria.

En Ubicación, la sección respeta el mockup del TP1. El mapa se implementó como imagen local y no como iframe o API externa. Esta decisión evita dependencias innecesarias, mantiene el sitio simple y conserva el foco visual definido en el diseño: mapa principal, botón “Cómo llegar” y tres cards informativas.

## 7. Uso de Bootstrap 5

Bootstrap 5 se utilizó como base principal para la maquetación responsive y para varios elementos visuales del sitio. Se usaron `container`, `row`, `col-*`, `col-md-*`, `col-lg-*` y `col-xl-*` para organizar el contenido en columnas adaptables. También se usaron componentes y clases como `navbar`, `navbar-expand-lg`, `navbar-dark`, `card`, `card-body`, `card-img-top`, `btn`, `btn-lg`, `carousel`, `carousel-inner`, `carousel-item` y controles del carousel.

Además, se usaron utilidades de Bootstrap como `d-flex`, `text-center`, `align-items-center`, `justify-content-center`, `g-4`, `mb-4`, `py-4`, `rounded-4`, `shadow-sm` e `img-fluid`. La grilla de Bootstrap permitió resolver la adaptación responsive sin escribir CSS específico para cada resolución.

## 8. Componentes JavaScript de Bootstrap

En el sitio se utilizaron componentes e interacciones asociadas a Bootstrap 5. El primero es `navbar collapse`, presente en las cinco páginas del sitio. Este componente permite que el menú principal se colapse en pantallas pequeñas y se active mediante el botón hamburguesa, algo necesario para que la navegación sea usable en celulares y tablets.

También se utilizó `carousel` en `index.html` y `servicios.html`. En la portada permite mostrar imágenes de RutaFuel dentro del hero principal, mientras que en Servicios refuerza visualmente la presentación de la sección. Por último, se usó validación visual de formularios en `servicios.html` y `nosotros.html`, mediante formularios marcados con la clase `needs-validation` y controlados desde `js/main.js`. Esta interacción permite validar campos requeridos sin enviar datos a un servidor.

## 9. JavaScript propio

El sitio utiliza un único archivo JavaScript propio: `js/main.js`. Este archivo concentra el comportamiento común del sitio y evita repetir lógica en cada página.

La función `actualizarAnioFooter()` actualiza automáticamente el año del footer en los elementos que tienen la clase `.js-anio`. Esto evita tener que modificar manualmente el año en cada página.

La función `registrarEventosRutaFuel()` busca todos los elementos que tienen el atributo `data-rf-event` y les agrega una captura del evento `click`. Cuando el usuario hace click, se muestra en consola el nombre del evento capturado. Algunos ejemplos son `cta-inicio-servicios`, `inicio-ver-ubicacion`, `servicios-ver-combustibles`, `contacto-servicios-enviar`, `promocion-1` y `ubicacion-como-llegar`.

La función `registrarValidacionFormularios()` busca formularios con clase `.needs-validation`. Cuando el usuario intenta enviar un formulario, se evita la recarga de la página, se comprueba si los campos requeridos son válidos y se aplican las clases visuales correspondientes. No se realiza envío real de datos porque el proyecto no incluye backend.

## 10. Personalización de Bootstrap mediante Sass

Bootstrap fue personalizado mediante Sass a partir de los archivos `scss/_variables.scss` y `scss/custom.scss`. En `_variables.scss` se definieron los colores principales de la identidad visual de RutaFuel. El color `#4D53B6` se utilizó como azul violáceo institucional para header y footer, mientras que `#6558F5` se utilizó como violeta/lila de acento para botones, enlaces destacados y elementos de acción. También se definieron fondos claros en blanco y gris suave para mantener contraste y legibilidad.

En el mismo archivo se asignaron estos valores a variables de Bootstrap, como `$primary`, `$secondary`, `$light` y `$dark`. Además, se configuraron radios de borde, tipografía base, tipografía de encabezados y color de enlaces.

En `custom.scss` se importan las funciones de Bootstrap, las variables propias y Bootstrap completo desde Sass. Luego se agregan estilos propios del proyecto, por ejemplo `skip-link`, header y footer, botón `btn-rutafuel`, secciones base, fondo suave `bg-soft`, cards, carousel hero, footer con logo y redes sociales, efectos de zoom en imágenes, bloques específicos de Inicio y estilos particulares de Nosotros.

El archivo que se enlaza desde las páginas es `css/main.css`. Este archivo es el CSS compilado y no debería editarse manualmente. Los cambios visuales se trabajan en Sass y luego se recompilan.

## 11. Responsive

El sitio fue desarrollado con criterio responsive para tres escenarios principales: PC, tablet y celular. En escritorio se aprovechan columnas múltiples, imágenes anchas, carousels y bloques horizontales. En tablet, las columnas se reorganizan mediante clases responsive de Bootstrap. En celular, el contenido se apila verticalmente y el navbar se transforma en menú colapsable mediante el componente collapse de Bootstrap.

El uso de `img-fluid` permite que las imágenes no desborden el ancho de pantalla y se adapten al contenedor correspondiente.

## 12. Optimización de imágenes

Las imágenes principales del sitio se organizaron en la carpeta `img/content/`. Se utilizaron archivos en formato WebP, como `fachada-estacion-noche.webp`, `surtidores-rutafuel.webp`, `mapa-cobertura-rutafuel.webp`, `personal-rutafuel.webp` y `cafeteria-rutafuel.webp`.

Los nombres de archivo se escribieron en minúsculas, con guiones, sin espacios y sin acentos. Además, las imágenes usadas en las páginas incluyen atributos `alt` descriptivos. Esto mejora la organización de recursos, ayuda a la accesibilidad y favorece el tiempo de carga frente al uso de imágenes sin optimizar.

## 13. Publicación

URL del sitio publicado:

https://laggerpablojose.github.io/rutafuel-dsw-tp/

## 14. Cierre técnico

El sitio RutaFuel queda construido como una web institucional responsive, con cinco páginas navegables, estructura HTML semántica, Bootstrap 5, Sass compilado, JavaScript básico y criterios iniciales de SEO.

La implementación prioriza una solución simple, académica y defendible, acorde al alcance de la materia Desarrollo de Sitios Web. La sección Promociones queda asentada como parte faltante del trabajo grupal, ya que no fue completada por el integrante responsable.
