
const path = require('path')
const webpack = require('webpack')
const APP_PATH = path.resolve(__dirname, '../')
const APP_DIST = path.resolve(APP_PATH, './dist')
const APP_SRC = path.join(APP_PATH, '/src')
const APP_COMMON_PATH = path.join(APP_SRC, '/component/common')
const NODE_ENV = process.env.NODE_ENV
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'none',
    devtool: '#cheap-module-eval-source-map',//打包后代码和写的完全一致
    entry: NODE_ENV === 'development' ? './src/index.js' : './src/main.js',//入口文件，就是上步骤的src目录下的index.js文件，
    output: {
        path: path.resolve(APP_PATH, './dist'),//输出路径，就是上步骤中新建的dist目录，
        // publicPath: '/dist/',
        filename: 'helloMsg.js',
        library: 'helloMsg', // 指定的就是你使用require时的模块名
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve:{
        alias:{
            '@': APP_SRC,
            app_common_path: APP_COMMON_PATH
        },
        extensions: ['.js', '.json', '.vue', '.scss', '.css']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'less': [
                            'vue-style-loader',
                            'less-loader'
                        ],
                        'css': [
                            'vue-style-loader',
                            'css-loader'
                        ]
                    }
                },
                include: APP_SRC,
                exclude: /^node_modules$/,
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'vue-style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'vue-style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
                loader: 'url-loader',
                query: {
                    limit: 30000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        //vue-loader15必用
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new htmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            template: path.resolve(APP_PATH, './src/template/index.html')
        }),
        new copyWebpackPlugin([{
            from: path.resolve(__dirname, '../src/asset/images/'),
            to: path.resolve(__dirname, APP_DIST + '/copyasset/'),
        }])
    ]
}
