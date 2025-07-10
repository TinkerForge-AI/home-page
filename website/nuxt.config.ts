export default defineNuxtConfig({
  compatibilityDate: '2025-07-10',
  
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode'
  ],
  
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark'
      }
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      }
    }
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/css/tinkerforge.css' // Custom TinkerForge AI styles
  ],

  app: {
    head: {
      title: 'TinkerForge AI - Building Safe, Beneficial AI Systems',
      titleTemplate: '%s | TinkerForge AI',
      meta: [
        { name: 'description', content: 'Building safe, beneficial AI systems through research and development. Inspired by playful innovation and credible engineering.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0d6efd' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'TinkerForge AI' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/tinkerforge-avatar.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/tinkerforge-avatar.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/tinkerforge-avatar.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    }
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },

  // Enhanced accessibility and performance
  ssr: true,
  experimental: {
    payloadExtraction: false
  },

  devtools: { enabled: true }
})