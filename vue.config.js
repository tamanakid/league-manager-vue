module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/global/main.scss";',
      },
    },
  },
};
