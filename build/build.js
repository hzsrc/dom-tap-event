process.env.NODE_ENV = 'production'
var path = require('path')
var webpack = require('webpack')
var webpackConfig = {
  mode: 'production',
  entry: {
    domTapEvent: './src/index.js',

  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'index.js',
    library: '[name]',
    libraryTarget: 'umd'
  },
}

doWebpack(webpackConfig)

// webpackConfig.entry = {
//   'v-tap-event': './src/v-tap-event.js',
// }
// webpackConfig.output.filename = 'v-tap-event.js'
// webpackConfig.output.libraryTarget = 'commonjs-module'
// doWebpack(webpackConfig)


function doWebpack(config) {
  webpack(config, function (err, stats) {
    if (err) {
      throw err
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log('  Build complete.\n')
  })
}
