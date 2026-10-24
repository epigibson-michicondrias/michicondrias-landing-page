# Michicondrias — landing

Landing pública de Michicondrias (Next.js 16, `motion`, `lenis`, paleta *Midnight & Gold*). Se publica sola en Vercel
con cada push a `main`.

La fuente de verdad del código es el monorepo `michicondrias` (`frontend/src/features/landing/` y
`frontend/public/landing/`). Para actualizar esta landing, copia esas carpetas aquí.

## Variables de entorno

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_WEB_APP_URL` | URL de la web app (por defecto `https://michicondrias.vercel.app`). Vacía: los botones bajan a la sección de la app. |
| `NEXT_PUBLIC_APP_DOWNLOAD_URL` | Enlace de descarga (APK o tienda). Sin él, no se muestra el botón «Descargar la app». |
| `NEXT_PUBLIC_LANDING_STANDALONE` | Se fija en `1` en `next.config.ts`: sin URL de web app, «Entrar» y «Crear cuenta» bajan a la sección de la app. |

### Botón «Descargar la app»

El botón solo se muestra si `NEXT_PUBLIC_APP_DOWNLOAD_URL` tiene valor. **Hay que setearla en Vercel**
(Settings → Environment Variables del proyecto `michicondrias-landing-page`) y redeplegar para que aparezca.
Mientras no haya un APK o enlace de tienda publicado, déjala sin definir: el botón queda oculto y el primario
pasa a ser «Crear cuenta gratis». No inventes una URL de descarga.

En local, copia `.env.example` a `.env.local` y rellena los valores.

```bash
npm install
npm run dev
```
