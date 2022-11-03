import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import urls from 'rehype-urls'

function processUrl(url, node) {
  if (node.tagName === 'a') {
    node.properties.class = 'text-link'

    if (!url.href.startsWith('/')) {
      node.properties.target = '_blank'
      node.properties.rel = 'noopener noreferrer'
    }
  }
}

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [],
  rehypePlugins: [[urls, processUrl]],
  layout: {
    blog: './src/lib/Layouts/Article.svelte',
  },
})

export default config
