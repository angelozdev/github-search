const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.tsx',
   output: {
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
               loader: 'babel-loader',
               options: {
                  presets: [
                     '@babel/preset-env',
                     '@babel/preset-react',
                     '@babel/preset-typescript'
                  ]
               }
            }
         },
         {
            test: /\.css$/,
            use: [
               MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: {
                     modules: true
                  }
               }
            ]
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