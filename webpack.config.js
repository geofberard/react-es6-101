module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname + "/",
        filename: "index.js"
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    }
}