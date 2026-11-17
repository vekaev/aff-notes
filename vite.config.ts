/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { ALL_LANGS, LANGS } from './src/content/types.ts';

// The 28 extra languages are separate chunks (assets/<lang>-<hash>.js, ~3 MB together). The offline install skips
// them; the reader's language is cached when it loads (runtime rule below + src/pwa-langs.ts for the first visit).
const EXTRA = ALL_LANGS.filter(l => !(LANGS as readonly string[]).includes(l));

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
        globIgnores: EXTRA.map(l => `assets/${l}-*.js`),
        // clips are cached the first time they play, and served from the cache offline (with range requests)
        runtimeCaching: [
          {
            // a language chunk is cached the first time it loads (hashed name, so it never goes stale)
            urlPattern: new RegExp(`/assets/(?:${EXTRA.join('|')})-[\\w-]+\\.js$`),
            handler: 'CacheFirst',
            options: {
              cacheName: 'langs',
              cacheableResponse: { statuses: [0, 200] },
              expiration: { maxEntries: 40 },
              // copies saved by src/pwa-langs.ts were fetched without an Origin header; `Vary: Origin` must not hide them
              matchOptions: { ignoreVary: true },
            },
          },
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
  // Other chats' git worktrees live in .claude/worktrees: never run their tests from here.
  test: { exclude: ['**/node_modules/**', '**/dist/**', '.claude/**', 'e2e/**'] },
});
