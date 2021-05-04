module.exports = {
	'plugins': {
		'autoprefixer': {
			"overrideBrowserslist": [
				"defaults",
				"not ie < 11",
				"last 2 versions",
				"> 1%",
				"iOS 7",
				"last 3 iOS versions",
				"iOS >= 8",
				"Firefox >= 20",
				"Android > 4.4"
			]
		},
		'postcss-pxtorem': {
			replace: false,
			rootValue: 32,
			propList: ['*'],
			selectorBlackList: ['van-'],
		},
	}
}
