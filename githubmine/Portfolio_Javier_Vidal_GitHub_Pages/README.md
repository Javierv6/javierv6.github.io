# Portfolio de Javier Vidal Gómez

Web personal de un estudiante de ASIX, con perfil técnico, proyectos de laboratorio, repositorios públicos, aptitudes y currículum. Inspiración visual: la web de Valvarez; implementación, identidad y textos propios para Javier.

## Publicar en GitHub Pages

La carpeta `dist/` contiene la web lista para publicar. El ZIP de entrega contiene esos mismos archivos directamente en su raíz, junto con esta guía.

1. En la cuenta **Javierv6**, crea un repositorio público llamado **javierv6.github.io**. No hace falta instalar ningún framework.
2. Descomprime el ZIP y sube **su contenido** al repositorio. `index.html`, `styles.css`, `app.js`, `translations.js` y `assets/` deben quedar en la raíz, sin otra carpeta intermedia. Incluye `.nojekyll` si trabajas con Git.
3. En el repositorio abre **Settings → Pages → Build and deployment**.
4. En **Source**, elige **Deploy from a branch**. Selecciona la rama `main`, la carpeta `/(root)` y pulsa **Save**.
5. Cuando termine el despliegue, abre la dirección que muestre GitHub en **Visit site**. Para ese repositorio, la dirección prevista es `https://javierv6.github.io/`.

La publicación puede tardar varios minutos. La URL prevista no demuestra que la web esté ya publicada.

Documentación oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

Si prefieres un repositorio de proyecto, puedes usar otro nombre; las rutas relativas de la web admiten la publicación bajo una subcarpeta.

## Probar en tu ordenador

Puedes abrir `index.html` directamente. Para revisar el sitio mediante HTTP, ejecuta desde la carpeta que contiene `index.html`:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Abre `http://127.0.0.1:8000`. En el proyecto de desarrollo, entra antes en `dist/`.

## Archivos

| Archivo | Función |
| --- | --- |
| `index.html` | Portada, perfil, proyectos, formación y contacto mediante GitHub. |
| `aptitudes.html` | Aptitudes agrupadas y buscador de tecnologías. |
| `curriculum.html` | Currículum web imprimible. |
| `proyecto-*.html` | Fichas de DMZ/OPNsense, DNS/DHCP y LAMP. |
| `styles.css` | Diseño adaptable y temas claro y oscuro. |
| `app.js` | Menú, filtros, búsqueda, idiomas y preferencias locales. |
| `translations.js` | Textos en castellano, catalán e inglés. |
| `assets/CV_Javier_Vidal_Gomez.pdf` | Currículum de una página en castellano. |
| `assets/favicon.svg` | Marca JV. |
| `404.html` | Página de error. |

## Personalización

- Para cambiar textos, edita el HTML en castellano y la clave correspondiente en los tres idiomas de `translations.js`.
- Para cambiar los colores, edita las variables del principio de `styles.css`.
- Para actualizar el CV, sustituye el PDF conservando el nombre del archivo y revisa también `curriculum.html`.
- Los enlaces a `exercicis-html`, `Exercicis-CSS` y `JavaScript-tasks` apuntan a repositorios públicos comprobados. Las fichas de laboratorios describen formación y prácticas, y no presentan repositorios de esos laboratorios como si ya estuvieran publicados.
- El perfil no incluye experiencia laboral, certificaciones, correo electrónico, teléfono ni LinkedIn no facilitados. Puedes añadirlos cuando quieras publicarlos.

La web funciona sin dependencias externas, sin servicios de pago y sin servidor de aplicaciones. No necesita Node, PHP ni base de datos para publicarse.
