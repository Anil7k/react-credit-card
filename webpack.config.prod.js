const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.s?css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './[name].[ext]',
                            outputPath: 'assets/'
                        }
                    }
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ],
}