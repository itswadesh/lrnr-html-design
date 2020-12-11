export default {
  ssr:false,
  components: true,
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS_HTML'
      }
    ]
  },
  loading: { color: '#fff' },
  css: ['~/assets/css/form.css'],
  plugins: [],
  buildModules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: '/graphql'
        // wsEndpoint: "ws://localhost:9900/graphql"
      }
    },
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network'
      }
    }
  },
  proxy: {
    '/graphql': 'http://localhost:8800',
    '/api': 'http://localhost:8800',
    '/auth': 'http://localhost:8800',
    '/images': 'http://localhost:8800'
  },
  plugins: [{ src: '~/plugins/lazy.js', mode: 'client' }],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],
  axios: {},
  build: {
    extend(config, ctx) {}
  }

}
