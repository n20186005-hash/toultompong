import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

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

