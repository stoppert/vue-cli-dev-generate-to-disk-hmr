const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    devServer: {
        clientLogLevel: 'info',
        public: 'localhost:8080',
        hotOnly: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },
    publicPath: 'dist/',
    configureWebpack: {
        plugins: [
            new WriteFilePlugin()
        ]
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].inject = false;
                return args;
            });

        return config;
    }
};
