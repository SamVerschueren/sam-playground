"use strict";
const foo = require("./subdir");

foo();

module.exports = () => {
	console.log("Environment variables");
	console.log(JSON.stringify(process.env, undefined, "  "));
};
