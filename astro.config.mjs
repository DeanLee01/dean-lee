// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// TODO: set real domain when deployed.
export default defineConfig({
	site: 'https://dean-holloway.example.com',
	integrations: [mdx(), sitemap()],
});
