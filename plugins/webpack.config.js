const path = require("path")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	//entry: path.resolve(__dirname, "index.js"),
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
					//'style-loader',
					{
						loader: MiniCSSExtractPlugin.loader,
					},
					'css-loader',
				],
			}
		]
	},
	plugins: [
		new MiniCSSExtractPlugin({
			filename: 'css/[name].css',
		}),
		new HtmlWebpackPlugin({
			title: "Plgins",
		})
	]
}