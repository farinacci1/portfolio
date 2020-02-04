
jQuery(function($) {

	var tabs =  $(".tab li a");
  
	tabs.click(function() {
		var content = this.hash.replace('/','');
		tabs.removeClass("active");
		$(this).addClass("active");
    		$(".panel").hide();
    		$(content).fadeIn(200);
	});

});
$(".slideshow > img:gt(0)").hide();

setInterval(function() { 
  $('.slideshow > img:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slideshow');
},  3000);
