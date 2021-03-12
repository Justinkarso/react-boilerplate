const path = require('path')
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
    mode: mode,
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    }
}