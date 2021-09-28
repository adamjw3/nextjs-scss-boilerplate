const { version } = require('./package.json');
module.exports = {
    title: 'Styleguidist Tutorial',
    version,
    components: 'components/**/*.js', // index.js
    require: ['styles/main.scss'],
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
    },
};
