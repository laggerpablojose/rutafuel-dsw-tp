# Informe técnico SEO - RutaFuel

## 1. Título del informe

Informe técnico SEO del sitio institucional RutaFuel
Trabajo Práctico 2 - Desarrollo de Sitios Web - UTN FRSF

## 2. Dominio o URL publicada

URL publicada:

https://laggerpablojose.github.io/rutafuel-dsw-tp/

## 3. Título general del sitio

El título general del sitio es:

```txt
RutaFuel | Estación de servicio
```

Este título resume el nombre comercial del proyecto y el rubro principal del sitio.

## 4. Palabras clave objetivo generales

Las palabras clave generales elegidas para el sitio son:

- RutaFuel
- estación de servicio
- combustibles
- servicios para viajeros
- atención al viajero
- promociones estación de servicio
- ubicación de estación de servicio
- estación de servicio ficticia

Estas palabras clave se relacionan con la marca, el rubro y el tipo de información que el sitio ofrece.

## 5. Palabras clave por página

### Inicio

- RutaFuel
- estación de servicio
- combustible
- servicios en ruta
- viaje
- atención al viajero

### Servicios

- servicios RutaFuel
- combustibles
- cafetería
- tienda
- cuidado del vehículo
- mantenimiento
- atención al viajero

### Promociones

- promociones RutaFuel
- beneficios
- descuentos
- promociones estación de servicio
- ofertas para viajeros

### Nosotros

- Nosotros RutaFuel
- identidad institucional
- estación de servicio
- confianza
- calidad
- atención personalizada
- trabajar con nosotros

### Ubicación

- ubicación RutaFuel
- cómo llegar
- estación de servicio cercana
- horarios RutaFuel
- contacto RutaFuel
- mapa RutaFuel

## 6. Metadatos aplicados

Cada página del sitio cuenta con un título específico y una meta description propia.

### `index.html`

```html
<title>RutaFuel | Estación de servicio</title>
<meta
  name="description"
  content="Sitio institucional de RutaFuel, estación de servicio ficticia con información sobre servicios, promociones, nosotros y ubicación."
/>
```

### `servicios.html`

```html
<title>Servicios | RutaFuel</title>
<meta
  name="description"
  content="Conocé los servicios principales de RutaFuel: combustibles, tienda, atención al viajero y asistencia básica."
/>
```

### `promociones.html`

```html
<title>Promociones | RutaFuel</title>
<meta
  name="description"
  content="Promociones y beneficios de RutaFuel para clientes, viajeros y usuarios frecuentes de la estación de servicio."
/>
```

### `nosotros.html`

```html
<title>Nosotros | RutaFuel</title>
<meta
  name="description"
  content="Información institucional sobre RutaFuel, estación de servicio ficticia orientada a brindar atención simple, rápida y confiable."
/>
```

### `ubicacion.html`

```html
<title>Ubicación | RutaFuel</title>
<meta
  name="description"
  content="Encontrá fácilmente la ubicación de RutaFuel, consultá horarios de atención y datos de contacto para llegar a la estación de servicio."
/>
```

Los metadatos fueron redactados de forma breve y relacionada con el contenido de cada sección.

## 7. Jerarquía de encabezados

Se respetó una estructura jerárquica simple de encabezados.

Cada página utiliza una sola etiqueta `h1`, que identifica el tema principal de esa página.

### Inicio

H1 principal:

```txt
Más que combustible, somos parte de tu ruta
```

Luego se utilizan encabezados secundarios para secciones como “Nuestros servicios”, “Pensado para tu viaje” y “Todo para tu viaje en un solo lugar”.

### Servicios

H1 principal:

```txt
Tu parada estratégica en el camino
```

La página usa `h2` para “Nuestros servicios” y para el bloque de contacto. Los servicios individuales se presentan con `h3`.

### Promociones

H1 principal:

```txt
Promociones
```

La página usa `h2` para “Promociones destacadas” y encabezados `h3` para cada card de promoción.

### Nosotros

H1 principal:

```txt
PRODUCIMOS EL COMBUSTIBLE QUE TE LLEVA A DONDE QUERES LLEGAR
```

Luego se utilizan `h2` para bloques como “Identidad institucional” y “¿Querés trabajar con nosotros?”.

### Ubicación

H1 principal:

```txt
Encontranos fácilmente
```

Las cards inferiores utilizan encabezados secundarios para “Ubicación”, “Horarios” y “Contacto”.

Esta jerarquía facilita la lectura del contenido y permite identificar claramente el tema principal de cada página.

## 8. Etiquetas semánticas

El sitio utiliza etiquetas semánticas de HTML5.

Se aplican:

- `header`, para el encabezado común del sitio;
- `nav`, para la navegación principal;
- `main`, para el contenido principal de cada página;
- `section`, para separar bloques de contenido;
- `article`, para cards, servicios, promociones o bloques independientes;
- `footer`, para el pie de página común.

El uso de estas etiquetas permite que la estructura del documento sea más clara y facilita la interpretación del sitio por parte de navegadores, buscadores y tecnologías asistivas.

## 9. Imágenes

Las imágenes utilizadas incluyen atributos `alt` descriptivos.

Ejemplos de descripciones utilizadas:

- logo de RutaFuel;
- fachada iluminada de una estación de servicio RutaFuel;
- surtidores de combustible RutaFuel;
- mapa de cobertura y ubicación;
- personal de RutaFuel brindando atención;
- cafetería de RutaFuel.

Además, las imágenes principales están en formato WebP, lo que ayuda a reducir el peso de los recursos.

Los nombres de archivo se organizaron con una convención clara:

- minúsculas;
- guiones entre palabras;
- sin espacios;
- sin acentos.

Ejemplos:

```txt
fachada-estacion-noche.webp
surtidores-rutafuel.webp
mapa-cobertura-rutafuel.webp
personal-rutafuel.webp
cafeteria-rutafuel.webp
```

## 10. URLs amigables

El sitio usa nombres de archivo simples y relacionados con cada sección:

```txt
index.html
servicios.html
promociones.html
nosotros.html
ubicacion.html
```

Estas URLs son breves, claras y fáciles de entender.

No se utilizaron nombres con espacios, acentos ni caracteres especiales.

## 11. Enlaces internos

El sitio cuenta con enlaces internos en distintos puntos.

### Navbar

El menú principal enlaza a:

- Inicio;
- Servicios;
- Promociones;
- Nosotros;
- Ubicación.

Cada página marca su sección activa mediante la clase `active` y el atributo `aria-current="page"`.

### Footer

El pie de página incluye enlaces hacia:

- Servicios;
- Promociones;
- Nosotros;
- Ubicación.

### CTAs internos

También se incorporaron llamados a la acción dentro de las páginas, por ejemplo:

- “Ver servicios”;
- “Ubicación”;
- “Ver promociones”;
- botones de servicios;
- botón “Cómo llegar”.

Estos enlaces ayudan a recorrer el sitio y conectan las páginas entre sí.

## 12. Código y recursos

El proyecto mantiene una separación clara de archivos.

- HTML separado por página.
- CSS centralizado en `css/main.css`.
- Sass organizado en `scss/custom.scss` y `scss/_variables.scss`.
- JavaScript propio separado en `js/main.js`.
- Imágenes organizadas en `img/content/` y `img/logo/`.

El archivo `css/main.css` corresponde al CSS compilado desde Sass. Por ese motivo, los cambios de estilo se trabajan en los archivos `.scss` y luego se recompilan.

El archivo `js/main.js` concentra la lógica común del sitio:

- actualización automática del año del footer;
- captura de eventos con `data-rf-event`;
- validación básica de formularios con `.needs-validation`.

Esta organización evita mezclar estructura, estilos y comportamiento en un mismo archivo.

## 13. Accesibilidad básica

Se aplicaron criterios básicos de accesibilidad.

### Idioma

Todas las páginas declaran el idioma español:

```html
<html lang="es"></html>
```

### Viewport

Todas las páginas incluyen la configuración responsive:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Skip-link

Se incorporó un enlace para saltar directamente al contenido principal:

```html
<a class="skip-link" href="#contenido-principal"
  >Saltar al contenido principal</a
>
```

Esto mejora la navegación para usuarios que utilizan teclado.

### Navegación

La navegación principal usa:

```html
aria-label="Navegación principal"
```

El botón hamburguesa de Bootstrap incluye atributos como:

- `aria-controls`;
- `aria-expanded`;
- `aria-label`.

### Imágenes

Las imágenes relevantes incluyen texto alternativo mediante el atributo `alt`.

### Botones y enlaces

Los botones y enlaces utilizan textos visibles claros. En la sección Ubicación, el botón “Cómo llegar” incluye un `aria-label` específico y abre Google Maps en una pestaña nueva usando:

```html
target="_blank" rel="noopener noreferrer"
```

## 14. Herramientas de verificación

Herramientas consideradas para revisión:

- Lighthouse
- WAVE
- Validador HTML W3C

Estas herramientas sirven para verificar rendimiento, accesibilidad, buenas prácticas y estructura HTML.

No se incorporan resultados numéricos en este informe porque no forman parte del contenido registrado en el proyecto.

## 15. Estrategias SEO aplicadas

Las principales estrategias SEO aplicadas fueron:

- títulos específicos por página;
- meta descriptions específicas;
- una sola etiqueta `h1` por página;
- uso de `h2` y `h3` para organizar secciones;
- etiquetas semánticas HTML5;
- URLs simples y descriptivas;
- enlaces internos entre páginas;
- imágenes con atributo `alt`;
- uso de imágenes WebP;
- organización de recursos en carpetas;
- CSS centralizado;
- JavaScript separado;
- estructura responsive.

## 16. Cierre SEO

El sitio RutaFuel aplica criterios básicos de SEO on-site adecuados al alcance académico del TP2.

La implementación prioriza claridad estructural, navegación simple, metadatos por página, uso de etiquetas semánticas, imágenes descriptivas y organización de recursos. Estos criterios permiten que el sitio sea más entendible para usuarios, buscadores y herramientas de análisis.
