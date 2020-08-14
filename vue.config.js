const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const webpack = require("webpack");

// const CompressionWebpackPlugin = require("compression-webpack-plugin");
// const zopfli = require("@gfx/zopfli");
// const BrotliPlugin = require("brotli-webpack-plugin");
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

const cdn = {
    css: ["https://cdn.bootcdn.net/ajax/libs/ant-design-vue/1.6.4/antd.min.css"],
    js: [
        "https://unpkg.com/vue@2.6.10/dist/vue.min.js", // 访问https://unpkg.com/vue/dist/vue.min.js获取最新版本
        "https://unpkg.com/vue-router@3.0.6/dist/vue-router.min.js",
        "https://unpkg.com/vuex@3.1.1/dist/vuex.min.js",
        "https://unpkg.com/axios@0.19.0/dist/axios.min.js",
        "https://cdn.bootcdn.net/ajax/libs/ant-design-vue/1.6.4/antd.min.js"
    ]
};
const pagesInfo = require("./pages.config");

module.exports = {
    // pages: {
    //     index: {
    //         entry: ['src/main.ts'],
    //         chunks: ['chunk-vendors', 'chunk-common', 'index']
    //     }
    // },
    publicPath: "./",
    // 输出文件目录
    outputDir: "dist",
    // 静态资源存放的文件夹(相对于ouputDir)
    assetsDir: "static",
    //////eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
    lintOnSave: false,
    // 我用的only，打包后小些
    runtimeCompiler: true,
    productionSourceMap: !IS_PROD, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
    parallel: require("os").cpus().length > 1,
    chainWebpack: config => {
        if (IS_PROD) {
            config
                .plugin("ignore")
                .use(
                    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/)
                );

            config.optimization.delete("splitChunks");
        }
        // 防止多页面打包卡顿
        // config => config.plugins.delete("named-chunks");
        // // 多页面cdn添加
        // Object.keys(pagesInfo).forEach(page => {
        //     config.plugin(`html-${page}`).tap(args => {
        //         // html中添加cdn
        //         args[0].cdn = cdn;

        //         // 修复 Lazy loading routes Error
        //         args[0].chunksSortMode = "none";
        //         return args;
        //     });
        // });

        return config;
    },
    configureWebpack: config => {
        if (IS_PROD) {
            config.externals = {
                //     vue: "Vue",
                //     "vue-router": "VueRouter",
                //     vuex: "Vuex",
                //     axios: "axios",
                //     'ant-design-vue': 'antd',
            };
            //配置代码分割 就不能配置pages
            config.optimization = {
                splitChunks: {
                    cacheGroups: {
                        common: {
                            name: "chunk-common",
                            chunks: "initial",
                            minChunks: 2,
                            maxInitialRequests: 5,
                            minSize: 0,
                            priority: 1,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        vendors: {
                            name: "chunk-vendors",
                            test: /[\\/]node_modules[\\/]/,
                            chunks: "all",
                            priority: 2,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        vue: {
                            name: "chunk-vue",
                            test: /[\\/]node_modules[\\/]vue[\\/]/,
                            chunks: "all",
                            priority: 3,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        vueRouter: {
                            name: "chunk-vue-router",
                            test: /[\\/]node_modules[\\/]vue-router[\\/]/,
                            chunks: "all",
                            priority: 4,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        moment: {
                            name: "chunk-moment",
                            test: /[\\/]node_modules[\\/]moment[\\/]/,
                            chunks: "all",
                            priority: 5,
                            reuseExistingChunk: true,
                            enforce: true
                        },
                        antDesignVue: {
                            name: "chunk-ant-design-vue",
                            test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
                            chunks: "all",
                            priority: 6,
                            reuseExistingChunk: true,
                            enforce: true
                        }
                    }
                }

            }

            //压缩gz 
            //     const plugins = [];
            //     plugins.push(
            //         new CompressionWebpackPlugin({
            //             algorithm(input, compressionOptions, callback) {
            //                 return zopfli.gzip(input, compressionOptions, callback);
            //             },
            //             compressionOptions: {
            //                 numiterations: 15
            //             },
            //             minRatio: 0.99,
            //             test: productionGzipExtensions
            //         })
            //     );
            //     plugins.push(
            //         new BrotliPlugin({
            //             test: productionGzipExtensions,
            //             minRatio: 0.99
            //         })
            //     );

            // config.plugins = [...config.plugins, ...plugins];



        }
    },
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "@/scss/variables.scss";//@指向src目录additionalData
              `
            }
        }
    },


    devServer: {
        open: false,
        // 跨域
        proxy: {
            '/reg': {
                target: 'https://ali6.infosalons.com.cn',
                changeOrigin: true,
                // pathRewrite: {
                //   '^/reg': '/reg'
                // }
            }
        }
    }
}


