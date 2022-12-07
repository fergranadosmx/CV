module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,css,jpg,html,json,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};