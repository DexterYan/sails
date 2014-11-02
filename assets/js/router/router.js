var Router = Backbone.Router.extend({
	routes:{
		"(/)" : "indexPage"
	},

	firstLoad:true,

	initialize: function(args){
		console.log("index start 2");
	},
	indexPage: function(){
		console.log("index start");
		        new Index_View();
	}
})