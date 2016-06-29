 var path = require('path');
 module.exports = {
    entry: {
        'arrow-functions': './src/arrow-functions.js',
        'new-variable-declarations': './src/new-variable-declarations.js',
        'literal-templates': './src/literal-templates.js',
        'default-function-parameters': './src/default-function-parameters.js',
        'spread-and-rest-operators': './src/spread-and-rest-operators.js',
        'deconstructing': './src/deconstructing.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    devtool: 'source-map'
 };