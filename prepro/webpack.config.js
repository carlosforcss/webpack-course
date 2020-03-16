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
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader',
				],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					'css-loader',
					'stylus-loader',
				],
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