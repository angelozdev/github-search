const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.tsx',
   output: {
      publicPath: '/',
      filename: 'bundle.js',
      path: __dirname + '/dist'
   },
   resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts']
   },
   module: {
      rules: [
         {
            test: /\.(t|j)sx?$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './public/index.html',
         filename: 'index.html',
      }),
      new MiniCssExtractPlugin({
         filename: 'assets/[name].css'
      })
   ]
}