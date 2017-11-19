const path = require('path')

module.exports = {
  entry: {
    app: ['./src/css/main.styl', './src/js/main.js']
  },
  port: 3000,
  html: true,
  assets_url: '/', // Urls dans le fichier final
  stylelint: './src/css/**/*.styl',
  assets_path: path.dirname(__dirname) + '/dist/', // ou build ?
  refresh: ['./index.html'], // Permet de forcer le rafraichissement du navigateur lors de la modification de ces fichiers
  historyApiFallback: false, // Passer à true si on utilise le mode: 'history' de vue-router (redirige toutes les requêtes sans réponse vers index.html)
  debug: process.env.NODE_ENV === 'development'
}
