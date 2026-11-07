import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Ganti `site` dengan domain final setelah website di-deploy.
export default defineConfig({
  site: 'https://itsupportpian.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
