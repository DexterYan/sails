var require = require('requirejs');
var config = require.config({
	paths: {
		backbone:    "backbone",
		jquery: "jquery", 		
		underscore: "underscore", 
		
	},

	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports:'Backbone'
		}, 
	}
})

