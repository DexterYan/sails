var config = require.config({
	paths: {
		backbone:    	"assets/js/dependencies/backbone",
		jquery: 		"assets/js/dependencies/jquery-2.1.1.min", 		
		underscore: 	"assets/js/dependencies/underscore", 
		Index_View: 	"assets/js/index_package/index_view", 
		router: 		"assets/js/router/router", 
			
	},

	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports:'Backbone'
		}, 
		router: {
			deps: ['backbone','jquery','Index_View'],
			exports:'Router'
		}, 
		Index_View: {
			deps: ['backbone', 'jquery'],
			exports:'Index_View'
		}, 
	},
	wrapShim: true,
	suppress: { nodeShim: true }
});

require(['backbone',
	'jquery',
	'underscore',
	'router',
	'Index_View'],
	function(Backbone,jquery, router){
	
	console.log('main.js ready!');

	new Router();

	Backbone.history.start({
	 	pushState: true
	});
})

