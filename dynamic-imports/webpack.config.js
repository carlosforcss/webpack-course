const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")

module.exports = {
	entry: {
		home: path.resolve(__dirname, "src/js/index.js"),
		contact: path.resolve(__dirname, "src/js/contact.js"),
	},
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name].js", 
		publicPath: "dist/",
		chunkFilename: "js/[id].[chunkhash].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
	            		presets: [
	            			"@babel/preset-env",
	            			'@babel/preset-react',
	            		],
	            		plugins: [
							"@babel/plugin-syntax-dynamic-import",
							"@babel/plugin-transform-runtime",
						],
	          		},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
				],
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'less-loader',
				],
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.styl$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
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
		new webpack.HotModuleReplacementPlugin(),
	
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "css/[id].css"
		}),
	],
	optimization: {
		splitChunks: {
			name: "commons",
			minSize: 0,
			chunks: 'all',
		},
	}
}