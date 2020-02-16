const path = require("path")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = {
	//entry: path.resolve(__dirname, "index.js"),
	devServer: {
	    host: '0.0.0.0',
	    port: 80,
	    disableHostCheck: false,
	    hot: true,
	},
	entry: {
		home: path.resolve(__dirname, "../src/js/index.js"),
	},
	mode: "development",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].js", 
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Plgins",
		}),
		new webpack.HotModuleReplacementPlugin(),
	]
}