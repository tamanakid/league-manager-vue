module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/global/main.scss";',
      },
    },
  },
  transpileDependencies: [
    'vuetify',
  ]
};
