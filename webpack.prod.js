const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true, // Menghapus console.log di produksi
            drop_debugger: true, // Menghapus pernyataan debugger
            ecma: 5, // Versi ECMAScript untuk kompatibilitas
            inline: 2, // Inline fungsi pendek
            keep_fargs: false, // Menghapus parameter fungsi yang tidak digunakan
            keep_fnames: false, // Menghapus nama fungsi
            passes: 3, // Jumlah putaran kompresi
            pure_funcs: ['console.log'] // Fungsi murni yang tidak memengaruhi output
          },
          output: {
            comments: false, // Tidak menyertakan komentar di output
            ecma: 5 // Versi ECMAScript untuk kompatibilitas
          }
        },
        extractComments: false // Tidak mengekstrak komentar
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: {
                // https://sharp.pixelplumbing.com/api-output#jpeg
                quality: 50
              },
              webp: {
                // https://sharp.pixelplumbing.com/api-output#webp
                lossless: true
              },
              avif: {
                // https://sharp.pixelplumbing.com/api-output#avif
                lossless: true
              },

              // png by default sets the quality to 100%, which is same as lossless
              // https://sharp.pixelplumbing.com/api-output#png
              png: {},

              // gif does not support lossless compression at all
              // https://sharp.pixelplumbing.com/api-output#gif
              gif: {}
            }
          }
        }
      })
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    usedExports: true
  }
})
