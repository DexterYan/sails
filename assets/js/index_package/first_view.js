var First_View = Backbone.View.extend({
	el: $('body'),
	events: {
		"click .ui.header"	:  "hello"
	},
	initialize: function() {
		var self=this;
		if(!First_View.template){
			$.ajax({
				url: '/views/home/first.html',
				success: function(data){
					First_View.template = _.template(data);
					self.template = First_View.template;
					self.render();
				}				
			})
		}else{
			self.template = First_View.template;
			self.render();
		}
	},
	hello: function(e){
	 	alert("hello2");
	},
 	render: function(){
 		var self = this;
 		var template = this.template();
 		this.$el.html(template);
		$(this.el).append("<h2>hello world</h2>");
	}
})
