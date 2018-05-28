const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' // 确保文件资源能够正确的访问
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html') // 模板html, 一开始加载的html
        }),
        new webpack.HotModuleReplacementPlugin()    // 热替换
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',     // 将ES6语法编程成ES5语法
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    // 解释在这 https://github.com/vuejs-templates/webpack/issues/215 
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    devtool: 'inline-source-map' // 调试方便，可以看到错误信息出现在未生成之前的js中

};