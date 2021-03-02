const path = require('path');
module.exports = {
    entry: './public/test.js',
    output: {
        filename: 'test.bundle.js',
        path: path.resolve(__dirname, './'),
    }
};