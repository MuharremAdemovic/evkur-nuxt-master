export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'nuxt-evkur1',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ["@assets/styles/styles.css"],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: '~/plugins/vuex-persist', ssr: false }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa', [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: "AIzaSyD9-sLzP_DLqS1Qn7ps1lzPsDF6eOg6rUg",
                    authDomain: "myfirebase-c5995.firebaseapp.com",
                    databaseURL: "https://myfirebase-c5995-default-rtdb.firebaseio.com",
                    projectId: "myfirebase-c5995",
                    storageBucket: "myfirebase-c5995.appspot.com",
                    messagingSenderId: "385340127295",
                    appId: "1:385340127295:web:bb949a1bfd5e5ad720e08a",
                    measurementId: "G-6RN12DKJKM"
                },
                services: {
                    auth: true,
                    firestore: true,
                    functions: true,
                    storage: true,
                    database: true,
                    messaging: true,
                    performance: true,
                    analytics: true,
                    remoteConfig: true
                }
            }
        ]

    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}