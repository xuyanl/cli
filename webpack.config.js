
const path = require('path')

const devMode = process.env.NODE_ENV !== "production";

/** @type {import('webpack').Configuration} */
const config = {
    entry: './scr/app.tx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[id][chunkhash].js',
        clean: true
    },
    resolve: {
        alias: {
            '@': './src'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/,
                use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, {
                    loader: "css-loader"
                }, 'less-loader'],// 使用loader来编译css文件，loader的执行顺序是从右往左，这里是先 css-loader，然后style-loader
                //使用less或者scss可以安装相应的loader
            },
            {
                test: /\.m?(js|ts|tsx)$/, // 匹配js ts tsx 文件
                exclude: /(node_modules)/,//排除node_modules下的文件
                use: {
                    loader: "babel-loader", // 使用babel编译，可以直接添加 options 选项，也可以在根目录新建babel.config.json文件
                },
            },
        ],
    },
}
