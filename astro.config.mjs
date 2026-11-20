import { defineConfig } from 'astro/config';

// Site 100% estático. build.format 'file' gera privacidade.html, servido como /privacidade
// pelo Vercel (cleanUrls no vercel.json): URLs limpas, sem barra no fim.
export default defineConfig({
  site: 'https://selah-site.vercel.app',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
});
