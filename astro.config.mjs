import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kfrencher.github.io',
  base: '/kfrencher-bio-site',
  integrations: [tailwind()],
});
