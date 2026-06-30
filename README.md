# RutaFuel

RutaFuel es un proyecto académico desarrollado para el Trabajo Práctico 2 de la materia Desarrollo de Sitios Web de la Tecnicatura Universitaria en Tecnologías de la Información, UTN Facultad Regional Santa Fe.

El proyecto consiste en un sitio web institucional responsive para una estación de servicio ficticia. La propuesta parte del análisis, identidad visual, wireframes y mockups definidos durante el TP1, y en el TP2 se avanza con la construcción del sitio usando HTML5, Bootstrap 5, Sass, CSS compilado y JavaScript básico.

## Objetivo del proyecto

El objetivo principal es construir una web institucional navegable, responsive y coherente con el diseño previo del TP1. El sitio busca presentar la marca RutaFuel, sus servicios, promociones, información institucional y ubicación.

El trabajo aplica contenidos vistos en la materia, especialmente:

- estructura semántica con HTML5;
- maquetación responsive;
- uso de Bootstrap 5;
- personalización de Bootstrap mediante Sass;
- CSS compilado desde Sass;
- JavaScript básico con captura de eventos;
- uso de componentes interactivos de Bootstrap;
- criterios iniciales de SEO on-site;
- organización de archivos y documentación técnica.

## Alcance del TP2

El sitio implementado incluye una portada y cuatro páginas internas, de acuerdo con el tamaño del grupo:

- `index.html` — Inicio
- `servicios.html` — Servicios
- `promociones.html` — Promociones
- `nosotros.html` — Nosotros
- `ubicacion.html` — Ubicación

No se implementa backend, base de datos, sistema de usuarios, APIs externas ni persistencia de datos. Los formularios son solo frontend y utilizan validación visual.

## Estado actual del proyecto

El sitio se encuentra maquetado y navegable con las siguientes páginas:

- **Inicio:** portada implementada con presentación institucional, carousel, servicios principales, bloques destacados y enlaces internos.
- **Servicios:** sección implementada con carousel, bloques informativos, imágenes, botones y formulario de contacto con validación.
- **Promociones:** base maquetada e integrada al sitio, pero sin contenido final completo. La sección conserva una estructura inicial con cards y botones, ya que la parte específica de diseño y código no fue completada por el integrante responsable.
- **Nosotros:** sección institucional implementada con hero visual, información de la empresa ficticia, íconos e instancia de formulario.
- **Ubicación:** sección implementada respetando el mockup del TP1, con título, subtítulo, mapa principal, botón “Cómo llegar” y tres cards informativas.

## Tecnologías utilizadas

- HTML5
- Bootstrap 5
- Sass
- CSS compilado desde Sass
- JavaScript Vanilla
- Bootstrap Icons
- Google Fonts
- Git y GitHub

## Estructura del proyecto

```txt
RutaFuel-DSW-TP/
├── index.html
├── servicios.html
├── promociones.html
├── nosotros.html
├── ubicacion.html
├── css/
│   └── main.css
├── scss/
│   ├── custom.scss
│   └── _variables.scss
├── js/
│   └── main.js
├── img/
│   ├── content/
│   └── logo/
├── docs/
│   ├── informe-tecnico-web.md
│   └── informe-tecnico-seo.md
└── README.md
```

## Sass y CSS

El sitio utiliza Sass para personalizar Bootstrap y generar el archivo final de estilos.

Archivos principales:

- `scss/_variables.scss`: contiene variables de identidad visual, colores y ajustes generales.
- `scss/custom.scss`: importa Bootstrap desde Sass y agrega estilos propios del proyecto.
- `css/main.css`: archivo CSS compilado que usan las páginas HTML.

El archivo `css/main.css` no debería editarse manualmente. Los cambios visuales deben hacerse en los archivos `.scss` y luego compilarse nuevamente.

Colores principales utilizados:

- Azul violáceo institucional para header y footer: `#4D53B6`.
- Violeta/lila de acento para botones y acciones principales: `#6558F5`.
- Fondos claros en blanco y gris suave para mejorar contraste y legibilidad.

## JavaScript

El comportamiento común del sitio se encuentra en:

```txt
js/main.js
```

El archivo incluye funciones simples:

- actualización automática del año del footer;
- captura de clicks mediante atributos `data-rf-event`;
- validación visual de formularios con la clase `.needs-validation`.

No existe envío real de formularios porque el proyecto no tiene backend.

## Componentes Bootstrap utilizados

En el sitio se utilizan componentes e interacciones de Bootstrap 5, entre ellos:

- navbar responsive con collapse;
- carousel en Inicio;
- carousel en Servicios;
- validación visual de formularios mediante clases de Bootstrap y JavaScript propio.

## Diseño responsive

El sitio fue maquetado para adaptarse a tres tipos de pantalla:

- PC o escritorio;
- tablet;
- celular.

Para esto se usa principalmente el sistema de grilla de Bootstrap, con clases como `container`, `row`, `col-*`, `col-md-*`, `col-lg-*`, además de utilidades responsive e imágenes fluidas mediante `img-fluid`.

## SEO básico

El sitio aplica criterios iniciales de SEO on-site:

- un `title` específico por página;
- una `meta description` específica por página;
- una sola etiqueta `h1` por página;
- uso de etiquetas semánticas como `header`, `nav`, `main`, `section`, `article` y `footer`;
- imágenes con atributo `alt`;
- URLs simples y claras;
- enlaces internos entre páginas;
- CSS centralizado;
- JavaScript separado.

La documentación SEO se encuentra en:

```txt
docs/informe-tecnico-seo.md
```

## Publicación

URL del sitio publicado:

https://laggerpablojose.github.io/rutafuel-dsw-tp/

## Integrantes

- Claudio Lezcano
- Matías Bocchieri
- Marcos Rossi
- Pablo José Lagger

## Documentación

El proyecto incluye documentación técnica para la entrega:

- `docs/informe-tecnico-web.md`
- `docs/informe-tecnico-seo.md`

Estos informes describen la construcción del sitio, el uso de Bootstrap, Sass, JavaScript, responsive, SEO y el estado real de implementación de cada página.
:::
