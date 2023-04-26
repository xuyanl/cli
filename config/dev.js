const path = require('path');

/** @type {import('webpack').Configuration} */
const config = {
	mode: 'development',
	devServer: {
		// static: {
		// 	directory: path.join(__dirname, 'dist'),
		// },
		open: true,
		port: 'auto',
		proxy: {
		}
	}
};
module.exports = config;
