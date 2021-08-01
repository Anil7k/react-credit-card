const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
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
                            name: 'assets/[name].[ext]',
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
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        watchContentBase: true,
        proxy: {
            '/**': {
                target: './',
                secure: false,
                // eslint-disable-next-line consistent-return
                bypass: (req) => {
                    // eslint-disable-next-line max-len
                    if (req.path.indexOf('.js') !== -1 || req.path.indexOf('.css') !== -1 || req.path.indexOf('img/') !== -1 || req.path.indexOf('assets/') !== -1 || req.path.indexOf('fonts/') !== -1) {
                        return './';
                    }
                },
            },
        }
    }
}