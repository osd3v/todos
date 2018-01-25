const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={

    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'index.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.js$/,use:['babel-loader']}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]


}