# César Vega Rodríguez — Production Sound Mixer

Landing page estática. Sin dependencias, sin compilación: son tres archivos
(`index.html`, `styles.css`, `script.js`) más la fuente y la foto.

## Publicar los cambios

El sitio está conectado a Vercel. Cada `git push` a `main` publica una nueva
versión automáticamente; no hay que hacer nada más.

```bash
git add -A
git commit -m "Describe aquí el cambio"
git push
```

## Añadir los vídeos

Los clips **no** están en el repositorio: la carpeta `Videos/` está en
`.gitignore` porque pesa 215 MB y Vercel no admite archivos de más de 100 MB.
Se sirven desde Vimeo.

Para cada proyecto:

1. Sube el clip a Vimeo.
2. Copia el número final de la URL. En `vimeo.com/123456789` el ID es
   `123456789`. Si el vídeo es privado (`vimeo.com/123456789/abcdef123`),
   apunta también ese segundo código: es el *hash* de privacidad.
3. Ábrelo en `script.js`, arriba del todo, en el bloque `CLIPS`:

```js
const CLIPS = {
  'comet':          { vimeo: '123456789', hash: '', local: '...' },
  ...
};
```

4. Guarda y haz push.

Mientras un `vimeo` esté vacío, esa tarjeta se publica solo con su texto:
no aparece ningún reproductor roto. Y si abres `index.html` desde tu disco,
sigues viendo los vídeos locales de `Videos/` para revisarlos.

## Editar textos

La página es bilingüe. Los elementos con `data-i18n="clave"` toman su texto
del diccionario de `script.js` (objetos `es` y `en`). **Si cambias uno de
esos textos en el HTML, cámbialo también en el diccionario**, o volverá al
valor anterior en cuanto se cargue la página.

Los nombres propios —títulos, directores, productoras— están directamente en
el HTML y no se traducen.

## Pendiente

- Enlaces reales de IMDb, LinkedIn e Instagram (ahora apuntan a `#`).
- El PDF del CV para el enlace de descarga.
- La ciudad en «Base: [Ciudad, País]» del hero.
- El showreel de la cabecera de *Trabajo seleccionado*.
- Una versión de más resolución de `CV_Sonido.jpeg` (ahora 338×512).
