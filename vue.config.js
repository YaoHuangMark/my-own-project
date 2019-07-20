const path = require('path')
function resolve (dir) {
    return path.join(__dirname, './', dir)
}
module.exports = {
    lintOnSave: false, // 关闭 eslint 检测，可设置 true 开启
    runtimeCompiler: true, // 是否使用包含运行时编译器的Vue核心构建。将其设置为true将允许您在Vue组件中使用template选项，但是会为您的应用程序带来大约10kb的额外有效负载。
    devServer: {
        port: 8888,
        proxy: {
            '/hy': {
                target: 'http://192.168.0.1:8080/investorhub',
                pathRewrite: {
                    '^/hy': '' // 重写path
                },
                changeOrigin: true
            }
        }
    },
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // CSS loader 会把把非根路径的url解释为相对路径， 加~前缀才会解释成模块路径。
                data: `@import "~@/assets/common.scss";`
            }
        }
    },
    chainWebpack: config => {
        // GraphQL Loader
        // 设置svg
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    }
}
