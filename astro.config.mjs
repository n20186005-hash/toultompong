import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://toultompong.com',
  trailingSlash: 'never',
  adapter: cloudflare({
    mode: 'directory',
    imageService: 'cloudflare',
    functionPerRoute: false,
  }),
  output: 'server',
  integrations: [sitemap()],
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});

