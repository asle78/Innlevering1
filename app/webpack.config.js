var path = require ('path');

const entryPath = path.join(__dirname, 'index.js');

module.exports = {
    entry: entryPath,
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/, loader: 'babel-loader'
            }
        ]
    }
};