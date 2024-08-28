const path = require('path');
module.exports = {
    entry: {
        index: './src/index.js', // 從哪裡開始打包
    },
    output: {
        filename: 'bundle.js', // 要打包成什麼
        path: path.resolve('./build'), // 要打包在哪裡
    },
    
    // 告訴打包工具，把所有的 js 檔都用 Babel 編譯過
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/, //不編譯的檔案
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
        ],
    },
    
    // 安裝 webpack-dev-server
    // webpack-dev-server 就是一款能讓你一改程式碼就能預覽到結果的開發工具。
    devServer: {
        static: {
            directory: path.join(__dirname, './build'), // 本來打包完的檔案位置
        },
        port: 8080, // 預覽網頁要跑在哪個port
    },

    mode: 'development', // 加這個才不會報錯
};