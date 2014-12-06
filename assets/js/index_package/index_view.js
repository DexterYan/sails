
var Index_View = Backbone.View.extend({
	el: $('body'),
	events: {
		"click .ui.header"	:  "hello"
	},
	initialize: function() {
		_.bindAll(this, 'render');
		this.render();
	},
	
	window_scroll:function(){
		var self = this;
		$(window).scroll(function(event) {
			self.st = $(this).scrollTop();
			console.log(self.st);

			if(self.st > self.lastScrollTop && self.st >0 && self.st <self.scroll_area){
				// console.log("down"  + self.st);
				if(self.scroll_count == 0 && self.st>=0){
					$(window).unbind();
					$('#two_tab').animatescroll(
						{	onScrollStart:function(){
								$(".top-bar").removeClass("inverted")
							},
							onScrollEnd:function(){
								self.scroll_count++;
								self.lastScrollTop = $(this).scrollTop() + 1;
								self.window_scroll();
							},
						scrollSpeed:3000,easing:'easeOutElastic'}
					);
				}else if(self.scroll_count == 1 && self.st>=0){
					$(window).unbind();
					$('#three_tab').animatescroll(
						{	onScrollStart:function(){
								$(".top-bar").addClass("inverted")
							},
							onScrollEnd:function(){
								self.scroll_count++;
								self.lastScrollTop = $(this).scrollTop() + 1;
								self.window_scroll();
							},
						scrollSpeed:3000,easing:'easeOutElastic'}
					);
				}else if(self.scroll_count == 2 && self.st>=0){
					$(window).unbind();
					$('#four_tab').animatescroll(
						{	onScrollStart:function(){
								$(".top-bar").removeClass("inverted")
							},
							onScrollEnd:function(){
								self.scroll_count++;
								self.lastScrollTop = $(this).scrollTop() + 1;
								self.window_scroll();
							},
						scrollSpeed:3000,easing:'easeOutElastic'}
					);
				}
			}else if(self.st < self.lastScrollTop && self.st >0 && self.st <self.scroll_area){
				console.log("up" + self.st);

				if (self.scroll_count == 3 &&  self.st >=0){
					$(window).unbind();
					$('#three_tab').animatescroll(
						{	onScrollStart:function(){
								$(".top-bar").addClass("inverted")
							},
							onScrollEnd:function(){
								self.scroll_count--;
								self.lastScrollTop = $(this).scrollTop() + 1;
								self.window_scroll();
							},
						scrollSpeed:3000,easing:'easeOutElastic'}
					);
				}else if (self.scroll_count == 2 &&  self.st >=0){
					$(window).unbind();
					$('#two_tab').animatescroll(
						{	onScrollStart:function(){
								$(".top-bar").removeClass("inverted")
							},
							onScrollEnd:function(){
								self.scroll_count--;
								self.lastScrollTop = $(this).scrollTop() + 1;
								self.window_scroll();
							},
						scrollSpeed:3000,easing:'easeOutElastic'}
					);
				}else if(self.scroll_count == 1 &&  self.st >=0){
					$(window).unbind();
					$('#one_tab').animatescroll(
						{	onScrollStart:function(){
								$(".top-bar").addClass("inverted")
							},
							onScrollEnd:function(){
								self.scroll_count--;
								self.lastScrollTop = $(this).scrollTop() + 1;
								self.window_scroll();
							},
						scrollSpeed:3000,easing:'easeOutElastic'}
					);
				}
			}
		});
	},

	render: function(){
		this.scroll_area = $("body")[0].scrollHeight - $(".scroll-bar")[0].scrollHeight;
		this.scroll_count  =0;
		this.lastScrollTop =0;
		this.st = 0;
		this.window_scroll();
	},

})
