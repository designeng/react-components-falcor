module.exports = {
    entry: __dirname + '/src/application.js',
    output: {
        filename: './build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                  presets: ['react', 'es2015']
                }
            }
        ]
    },
    devtool: 'source-map'
}