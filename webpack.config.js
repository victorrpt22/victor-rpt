const HtmlWebpackPlugin = require("html-webpack-plugin")
const path=require('path')

const styleRules={
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],

}

const javascrptRules={
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic'
                }
                
            ]
        ]
    }
}

const rules = [javascrptRules, styleRules]

module.exports = (env, argv) => {
    const {mode} = argv
    const isProduction = mode == 'production'

    return {
        output: {
            filename: isProduction? '[name].[contenthash].js' : 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new HtmlWebpackPlugin({template: 'src/index.html'})
        ],
        module:{
            rules: rules
        },
        devServer: {
            open: true,
            port: 3000,
        },
        devtool:'source-map'
    }
}