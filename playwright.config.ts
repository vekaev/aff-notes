import { defineConfig, devices } from '@playwright/test';

// Screen smoke tests on the production build (`npm run e2e` builds first). Phone and desktop, light and dark.
// Screenshots of every page land in test-results/ (uploaded by CI) so a reviewer can look without running anything.
export default defineConfig({
  testDir: 'e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: { baseURL: 'http://localhost:4173', serviceWorkers: 'block' },
  projects: [
    { name: 'phone-light', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium', colorScheme: 'light' } },
    { name: 'phone-dark', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium', colorScheme: 'dark' } },
    { name: 'desktop-light', use: { ...devices['Desktop Chrome'], colorScheme: 'light' } },
    { name: 'desktop-dark', use: { ...devices['Desktop Chrome'], colorScheme: 'dark' } },
  ],
  webServer: { command: 'npx vite preview --port 4173 --strictPort', port: 4173, reuseExistingServer: !process.env.CI },
});
