var LiveReloadPlugin    = require('webpack-livereload-plugin');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        filename: './public/build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('public/css/style.css', { allChunks: true }),
        new LiveReloadPlugin({ port: 8082 })
    ],
    devtool: 'source-map'
}