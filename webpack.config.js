var path = require('path')
var webpack = require('webpack')

module.exports = {

  entry: {
		issues: './assets/scripts/issues'
	},

  output: {

    path: path.resolve(__dirname, 'static', 'scripts'),

    filename: '[name].js',

    publicPath: '/scripts/'

  },

  module: {

    rules: [

    ]

  },

  resolve: {

    modules: [
      'node_modules'
    ],

    extensions: ['.js', '.json', '.jsx']

  },

  devtool: 'source-map',

  context: __dirname,

  target: 'web',

  externals: [],

  stats: 'errors-only',

  plugins: [

		new webpack.ProvidePlugin({
		  jQuery: 'jquery'
		})

  ]

}
