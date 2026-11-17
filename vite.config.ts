import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// Relative base so the build works from any folder (artifact host, Vercel, a file server).
// The app is a PWA: installable, and everything (pages, icons, all clips) is cached for offline use —
// the dropzone often has a weak signal.
export default defineConfig({
  base: './',
  build: { assetsInlineLimit: 0 },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/*.png', 'og.png'],
      manifest: {
        name: 'AFF Jump Notes',
        short_name: 'AFF notes',
        description: 'AFF skydiving study notes: plane to landing, emergencies, real videos and tests.',
        lang: 'en',
        start_url: './',
        scope: './',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#f2f0eb',
        theme_color: '#f2f0eb',
        categories: ['education', 'sports'],
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,webmanifest}'],
        // clips are cached the first time they play, and served from the cache offline (with range requests)
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.includes('/media/') && url.pathname.endsWith('.mp4'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'clips',
              rangeRequests: true,
              cacheableResponse: { statuses: [0, 200] },
              expiration: { maxEntries: 120 },
            },
          },
        ],
        navigateFallback: 'index.html',
      },
    }),
  ],
});
