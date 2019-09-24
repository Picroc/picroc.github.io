module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    loader: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    }
}