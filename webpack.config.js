var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var themeName = process.env.THEME || 'debug'

module.exports = {
  entry: {
    article_list: ['babel-polyfill', path.resolve(__dirname, './src/templates', themeName, './article_list.js')],
    article: ['babel-polyfill', path.resolve(__dirname, './src/templates', themeName, './article.js')]
  },
  output: {
    path: path.resolve(__dirname, './dist', themeName),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader!eslint-loader',
        exclude: /(node_modules|semantic)/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'vue-style-loader'
        })
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
      path.resolve('./semantic/dist')
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
