export default {
  components: true,
  target: 'static',
  head: {
    title: 'Creature Games Studio',
    meta: [
      { charset: 'utf-8' },
      { viewport: 'width=device-width, initial-scale=1' }
    ]
  },
  css: [
    '~/assets/sass/main.sass',
    '~/assets/sass/colors.sass'
  ],
  buildModules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    sass: [
      '~/assets/sass/colors.sass'
    ]
  }
}
