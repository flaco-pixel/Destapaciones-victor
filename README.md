# Victor Destapaciones — Sitio web

Sitio web para **Victor Destapaciones**, servicio de destapaciones, plomería,
limpieza de tanques y canaletas, con atención de urgencias las 24 horas en
CABA y GBA.

Sitio estático (HTML + CSS + JS puro, sin frameworks ni build). Se puede
abrir directamente en el navegador o publicarse en cualquier hosting
estático.

## Estructura

```
.
├── index.html      # Estructura y contenido del sitio
├── styles.css      # Diseño: colores, tipografía, animaciones, responsive
├── script.js       # Menú móvil, dropdown de WhatsApp, botón flotante, scroll reveal
└── images/
    ├── fondo-victor.jpg   # Foto de fondo fija (visible detrás de todo el sitio al scrollear)
    ├── favicon.svg        # Ícono del sitio (logo "V" + gota)
    └── galeria-1..6.svg   # Placeholders de la sección "Trabajos realizados"
```

## Ver el sitio en local

No requiere instalación. Alcanza con abrir `index.html` con doble clic,
o servirlo con cualquier servidor estático, por ejemplo:

```bash
npx serve .
# o
python3 -m http.server 8080
```

## Publicar con GitHub Pages

1. Subí este contenido a un repositorio de GitHub (ver más abajo).
2. En el repo: **Settings → Pages**.
3. En "Build and deployment" elegí **Deploy from a branch**, rama `main`,
   carpeta `/ (root)`.
4. Guardá. GitHub va a publicar el sitio en unos minutos en
   `https://<tu-usuario>.github.io/<nombre-del-repo>/`.

## Subir este proyecto a GitHub por primera vez

Desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Sitio Victor Destapaciones"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<nombre-del-repo>.git
git push -u origin main
```

(Reemplazá `<tu-usuario>` y `<nombre-del-repo>` por los tuyos. Si el
repositorio ya existe con contenido, usá `git pull origin main --allow-unrelated-histories`
antes del `push`.)

## Reemplazar imágenes por fotos reales

- **`images/fondo-victor.jpg`** → foto de fondo que se ve fija detrás de
  todo el sitio mientras se scrollea. Para cambiarla, reemplazá el archivo
  manteniendo el mismo nombre (o actualizá la variable `--bg-photo` en
  `styles.css`). Recomendado: mínimo 1600px de ancho, buena iluminación.
- **`images/galeria-1.svg` a `galeria-6.svg`** → sección "Trabajos
  realizados". Reemplazá cada una por una foto real (.jpg o .webp) de
  destapaciones, plomería, tanques, canaletas, etc. Si cambiás la
  extensión, actualizá el atributo `src` correspondiente en `index.html`.

## Contacto

Los dos números de WhatsApp/teléfono (`11.3833.5009` y `11.5908.8663`)
están conectados en todo el sitio a:

- WhatsApp: `https://wa.me/541138335009` y `https://wa.me/541159088663`
- Llamada: `tel:+541138335009` y `tel:+541159088663`

Para cambiarlos, buscá y reemplazá esos números en `index.html`.

## Revisado

- ✔ Responsive (mobile, tablet, notebook, PC)
- ✔ Botones de WhatsApp y llamada funcionando
- ✔ Menú hamburguesa en mobile
- ✔ Animaciones de aparición al hacer scroll (respeta `prefers-reduced-motion`)
- ✔ Accesibilidad: `alt` en imágenes, foco visible, skip-link
- ✔ SEO: title, meta description, datos estructurados (`schema.org/Plumber`)
