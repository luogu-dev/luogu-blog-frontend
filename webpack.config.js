const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

const themeName = process.env.THEME || 'debug'

module.exports = {
  entry: {
    article_list: ['babel-polyfill', path.resolve(__dirname, './src/templates', themeName, './article_list.js')],
    article: ['babel-polyfill', path.resolve(__dirname, './src/templates', themeName, './article.js')],
    katex: path.resolve(__dirname, './src/katex_import.js')
  },
  output: {
    path: path.resolve(__dirname, './dist', themeName),
    publicPath: `/static/blog/${themeName}/`,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {}
      },
      {
        test: /\.js$/,
        loader: 'babel-loader!eslint-loader',
        exclude: /(node_modules|semantic)/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        // Font Awesome
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].css' })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'common',
          filename: 'common.js',
          chunks: 'all',
          test: /article|article_list/
        }
      }
    }
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js'
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

if (process.env.BUNDLE_ANALYZE === 'true') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new BundleAnalyzerPlugin()
  ])
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.mode = 'production'
  module.exports.optimization.minimizer = [
    new UglifyJsPlugin({
      uglifyOptions: {
        beautify: false,
        compress: true,
        comments: false,
        mangle: false,
        toplevel: false
      }
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano')({ zindex: false }),
      cssProcessorOptions: {
        safe: false,
        discardComments: { removeAll: true }
      }
    })
  ]
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
