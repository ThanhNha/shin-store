// https://v3.nuxtjs.org/api/configuration/nuxt.config
import svgLoader from 'vite-svg-loader'
import { resolve } from 'path'
export default defineNuxtConfig({
    components: [
      {
        path: '~/components', // will get any components nested in let's say /components/nested
        pathPrefix: false,
      },
    ],
    css: [
      'virtual:windi-base.css',
      'virtual:windi-components.css',
      'virtual:windi-utilities.css',
      '~/assets/scss/global.scss',
    ],
    vite: {
        plugins: [svgLoader({
          defaultImport: 'raw',
        })],
       
      },
      alias: {
        'icons': resolve(__dirname, './assets/icons'),
      },
    modules: [
        '@nuxt/image-edge',
        'nuxt-windicss',
      ],

})
