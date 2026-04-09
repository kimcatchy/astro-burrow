// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

function remarkShiftHeadings() {
  return (/** @type {import('mdast').Root} */ tree) => {
    /** @param {any} node */
    function visit(node) {
      if (node.type === 'heading' && node.depth) {
        node.depth = Math.min(node.depth + 1, 6);
      }
      if (node.children && Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    }
    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  // REPLACE THIS with your own domain
  site: 'https://yourname.github.io',

  // Set this if you're deploying to a subpath (e.g., '/my-blog')
  // base: '/',

  integrations: [mdx(), sitemap(), react()],
  markdown: {
    remarkPlugins: [remarkShiftHeadings],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});