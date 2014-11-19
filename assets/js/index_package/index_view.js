
var Index_View = Backbone.View.extend({
	el: $('body'),
	events: {
		"click .ui.header"	:  "hello"
	},
	initialize: function() {
		_.bindAll(this, 'render');
		this.render();
	},
	
	render: function(){
		
	}
})
