import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://gunung.my.id',
    trailingSlash: 'always',
    integrations: [
        sitemap({
            filter: (page) => !page.includes('/404')
        }),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
