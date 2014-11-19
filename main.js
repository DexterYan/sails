var config = require.config({
	paths: {
		backbone:    	"assets/js/dependencies/backbone",
		jquery: 		"assets/js/dependencies/jquery-2.1.1.min", 		
		underscore: 	"assets/js/dependencies/underscore", 
		semantic: 	"assets/js/dependencies/semantic", 
		Index_View: 	"assets/js/index_package/index_view", 
		First_View: 	"assets/js/index_package/first_view", 
		router: 		"assets/js/router/router", 
			
	},

	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports:'Backbone'
		}, 
		semantic: {
			deps: ['jquery'],
		}, 
		router: {
			deps: ['backbone','jquery','Index_View','First_View'],
			exports:'Router'
		}, 
		Index_View: {
			deps: ['backbone', 'jquery', 'semantic'],
			exports:'Index_View'
		}, 
		First_View: {
			deps: ['backbone', 'jquery'],
			exports:'First_View'
		}, 
	},
	wrapShim: true,
	suppress: { nodeShim: true }
});

require(['backbone',
	'jquery',
	'underscore',
	'semantic',
	'router',
	'Index_View',
	'First_View'],
	function(Backbone,jquery, router,semantic){
	
	console.log('main.js ready!');

	new Router();

	Backbone.history.start({
	});
})

