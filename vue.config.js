module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            // 生产环境baseUrl
            process.env.baseURL = 'http://i.io';
        } else {
            // 为开发环境修改配置...
            console.log('dev，开发');
            config.devServer = {
                proxy: {
                    '/api': {
                        target: 'http://i.io',
                        // pathRewrite: {'^/api': ''},
                        changeOrigin: true, // target是域名的话，需要这个参数，
                        secure: true, // 设置支持https协议的代理
                    },
                },
            };
        }
    },
};
