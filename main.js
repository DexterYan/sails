var config = require.config({
	paths: {
		backbone:    "assets/js/dependencies/backbone",
		jquery: "assets/js/dependencies/jquery-2.1.1.min", 		
		underscore: "assets/js/dependencies/underscore", 
		Index_view: "assets/js/index_package/index_view", 	
	},

	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports:'Backbone'
		}, 
		Index_view: {
			deps: ['backbone', 'jquery'],
		}, 
	},
	wrapShim: true,
	suppress: { nodeShim: true }
});

require(['backbone','jquery','underscore','Index_view'],function(Backbone){

})

