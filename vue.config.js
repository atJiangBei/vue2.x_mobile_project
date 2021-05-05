module.exports = {
	publicPath: './',
	assetsDir: './',
	outputDir: `./${process.env.VUE_APP_DIRNAME}`,
	devServer: {
		port: "8082",
		open: false,
		before: require('./mock/mock-server.js'),
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:9527',
				ws: true,
				changeOrigin: true
			}
		}
	}
}
