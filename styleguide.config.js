const { version } = require('./package.json');
var webpack = require('webpack');
module.exports = {
    title: 'Styleguide',
    version,
    components: './components/**/*.js', // index.js
    ignore: ['./components/layout.js'],
    require: ['./styles/main.scss'],
    skipComponentsWithoutExample: true,
    template: {
        favicon: './public/favicon.ico',
    },
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                process: { env: {} },
            }),
        ],
    },
};
