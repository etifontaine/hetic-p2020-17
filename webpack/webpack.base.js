const path = require('path')
const webpack = require('webpack')
const config = require('./config')
const ExtractCSSPlugin = require('./extractCSSPlugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const libPath = path.join(__dirname, '../src')
const pkg = require('../package.json')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const PUBLIC_PATH = 'https://hetic-p2020-17.netlify.com/'
let webpackBase = {
  devtool: config.debug ? 'cheap-module-eval-source-map' : false,
  entry: config.entry,
  output: {
    path: config.assets_path,
    filename: config.debug ? '[name].js' : '[name].[hash:8].js',
    publicPath: config.assets_url
  },
  resolve: {
    extensions: ['.js', '.css', '.json', '.html'],
    alias: {
      root: path.join(__dirname, '../js'),
      components: path.join(__dirname, '../js/Classes')
    }
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loaders: ['pug-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ]
      },
      {
        test: /\.(webm|mp4)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(js)$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/],
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude:
          [/node_modules/, /libs/],
        loader:
          'babel-loader'
      },
      {
        test: /\.styl$/,
        use:
          ExtractCSSPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'stylus-loader']
          })
      },
      {
        test: /\.css$/,
        use:
          ExtractCSSPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader']
          })
      },
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: 'localhost:3000',
      notify: false
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.LoaderOptionsPlugin({
      options: {
        tslint: {
          emitErrors: true,
          failOnHint: true
        }
      }
    }),
    new ExtractCSSPlugin({
      filename: '[name].[contenthash:8].css',
      disable: config.debug
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(libPath, 'index.pug'),
      pkg,
      inject: 'body'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new CopyWebpackPlugin([
      {from: path.join(libPath, '.htaccess')},
      {from: path.join(libPath, 'manifest.json')},
      {from: path.join(libPath, 'favicon/')}
    ]),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  devServer:
    {
      headers: {
        'Access-Control-Allow-Origin':
          '*'
      }
    }
  ,
  performance: {
    hints: config.debug ? false : 'warning'
  }
}
module.exports = webpackBase
