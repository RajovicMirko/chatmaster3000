const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@a": path.resolve(__dirname, "src/assets"),
        "@c": path.resolve(__dirname, "src/components"),
        "@r": path.resolve(__dirname, "src/router"),
        "@sc": path.resolve(__dirname, "src/scss"),
        "@st": path.resolve(__dirname, "src/store"),
        "@v": path.resolve(__dirname, "src/views"),
        "@pj": path.resolve(__dirname, "package.json"),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/variables.scss";
          @import "@/scss/global.scss";
        `,
      },
    },
  },
};
