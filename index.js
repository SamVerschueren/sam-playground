'use strict';
module.exports = () => {
	console.log('Environment variables');
	console.log(JSON.stringify(process.env, undefined, '  '));
};
