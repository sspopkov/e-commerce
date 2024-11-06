const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 3001,
        compress: true,
        historyApiFallback: true,
        open: true,
        static: {
            directory: path.join(__dirname, "dist")
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    },
    output: {
        publicPath: 'http://localhost:3001/',
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './Cart': './src/Cart',
            },
            remotes: {
                catalog: 'catalog@http://localhost:3000/remoteEntry.js', // Добавьте эту строку
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: require('./package.json').dependencies['react'],
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: require('./package.json').dependencies['react-dom'],
                },
                redux: {
                    singleton: true,
                    requiredVersion: require('./package.json').dependencies['redux'],
                },
                'react-redux': {
                    singleton: true,
                    requiredVersion: require('./package.json').dependencies['react-redux'],
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
