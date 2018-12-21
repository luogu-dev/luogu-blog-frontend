const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const extractCSS = isProd || process.env.TARGET === 'development'

const themeName = process.env.THEME || 'bread'

const cssLoader = [
  extractCSS ? MiniCssExtractPlugin.loader : 'vue-style-loader',
  { loader: 'css-loader', options: { sourceMap: !isProd, importLoaders: 1 } },
  { loader: 'postcss-loader', options: { sourceMap: !isProd } }
]

module.exports = {
  entry: {
    article_list: path.resolve(__dirname, 'src/templates', themeName, 'article_list.js'),
    article: path.resolve(__dirname, 'src/templates', themeName, 'article.js'),
    katex: path.resolve(__dirname, 'src/katex_import.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist', themeName),
    filename: '[name].js'
  },
  mode: isProd ? "production" : 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoader
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
    new VueLoaderPlugin(),
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
    },
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          discardComments: { removeAll: true },
          postcssZindex: false,
          reduceIdents: false
        },
        canPrint: false
      })
    ]
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
  performance: {
    hints: false
  },
  devtool: isProd ? '#source-map' : '#eval-source-map'
}

if (process.env.BUNDLE_ANALYZE === 'true') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new BundleAnalyzerPlugin()
  ])
}
