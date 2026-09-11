import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://0xm1dn1ght.github.io',
  base: '/0x-coffee',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
