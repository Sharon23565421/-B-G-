const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
           @import "./src/assets/scss/main.scss";
        `,
      },
    },
  },
})
