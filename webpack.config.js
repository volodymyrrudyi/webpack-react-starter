var webpack = require('webpack');


module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:5000/',
    'webpack/hot/only-dev-server',
    './src'
  ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: {
      modulesDirectories: ['node_modules', 'src', 'public'],
      extensions: ['','.js', '.jsx', '.less','.png', '.jpg']
    },
    module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel'],
          },
          {
            test: /\.css$/,
            loader: "style!css"
          }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      hot: true,
      host: '127.0.0.1'
    }
};
