// frontend build configuration using webpack
// reference: https://github.com/petehunt/webpack-howto

// node imports
var path = require('path');


// relevant directories
var assets_dir = path.join(__dirname, 'urbanRadish', 'assets');
var scripts_dir = path.join(assets_dir, 'scripts');
var build_dir = path.join(assets_dir, 'build');


// export the configuration
module.exports = {
    watch: true,
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader?{rules:[{semi:0}]}",
                exclude: /node_modules/
            },
        ],
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            // inline base64 URLs for <=8k images, direct URLs for the rest
            { test: /\.(png|jpg)$/, loader: 'url-loader' },
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.styl', '.css'],
    },
    eslint: {
        configFile: '.eslintrc'
    }
};


//// end of file ////
