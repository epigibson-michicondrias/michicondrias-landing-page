# Michicondrias — landing

Landing pública de Michicondrias (Next.js 16, `motion`, `lenis`, paleta *Midnight & Gold*). Se publica sola en Vercel
con cada push a `main`.

La fuente de verdad del código es el monorepo `michicondrias` (`frontend/src/features/landing/` y
`frontend/public/landing/`). Para actualizar esta landing, copia esas carpetas aquí.

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_WEB_APP_URL` | URL de la web app. Sin ella, «Entrar» y «Crear cuenta» bajan a la sección de la app. |
| `NEXT_PUBLIC_APP_DOWNLOAD_URL` | Enlace de descarga (APK o tienda). Sin él, no se muestra el botón «Descargar la app». |

```bash
npm install
npm run dev
```
