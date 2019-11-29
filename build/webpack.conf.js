
const path = require('path')
const webpack = require('webpack')
const APP_PATH = path.resolve(__dirname, '../')
const APP_SRC = path.join(APP_PATH, '/src')
const NODE_ENV = process.env.NODE_ENV
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'none',
    // devtool: 'source-map',
    entry: NODE_ENV === 'development' ? './src/index.js' : './src/main.js',//入口文件，就是上步骤的src目录下的index.js文件，
    output: {
        path: path.resolve(APP_PATH, './dist'),//输出路径，就是上步骤中新建的dist目录，
        publicPath: '/dist/',
        filename: 'helloMsg.js',
        library: 'helloMsg', // 指定的就是你使用require时的模块名
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'css': [
                            'vue-style-loader',
                            'css-loader'
                        ],
                        'less': [
                            'vue-style-loader',
                            'less-loader'
                        ],
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
        })
    ]
}
