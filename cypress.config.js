const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,  // Habilita gravação de vídeos
    videosFolder: 'cypress/videos',  // Diretório onde os vídeos serão salvos
  },
});
