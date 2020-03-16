const path = require("path")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = {
	devServer: {
	    host: '0.0.0.0',
	    port: 80,
	    disableHostCheck: false,
	    hot: true,
	},
	entry: {
		home: path.resolve(__dirname, "src/js/index.js"),
	},
	mode: "development",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].js", 
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
	            		presets: ['@babel/preset-react']
	          		},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.(jpg|png|gif|woff|ttf|eot|svt|mp4|webm)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 900000,
					},
				},
				include: path.join(__dirname, 'src'),
			},

		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Aplicacion con react",
			template: path.resolve(__dirname, "index.html")
		}),
		//new webpack.HotModuleReplacementPlugin(),
	]
}