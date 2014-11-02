
var Index_View = Backbone.View.extend({
	el: $('body'),
	events: {
		"click .ui.header"	:  "hello"
	},
	initialize: function() {
		_.bindAll(this, 'render');
		this.render();
	},
	hello: function(e){
        alert("hello");
    },
    render: function(){
      $(this.el).append("<h2>hello world</h2>");
    }
})
