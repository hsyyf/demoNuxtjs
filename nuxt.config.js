module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'demo',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  router: {
    middleware: 'auth'
  },

  plugins: [{src: '~/plugins/common.js', ssr: false},
    {src: "~/plugins/element-ui.js"}],

  css: [{src: "element-ui/lib/theme-chalk/index.css"}],

  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios', 'js-md5', 'element-ui'],
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

