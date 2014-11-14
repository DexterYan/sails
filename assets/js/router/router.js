var Router = Backbone.Router.extend({
	routes:{
		"(/)" : "indexPage",
		'!/topic' : 'renderList'
	},

	firstLoad:true,

	initialize: function(args){
		console.log("index start 2");
	},
	indexPage: function(){
		console.log("index start");
		        new Index_View();
	},
	renderList : function() {  
	        	console.log('渲染列表方法');  
	}
})