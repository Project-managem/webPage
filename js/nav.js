$(".nav-list-info").each(function(index, el) {
	$(el).mouseenter(function(event) {
		/* Act on the event */
		console.log(index);
		$(this).children('li').css("display","block")
	});
});

// $(".nav-info").mouseleave(function(event) {
// 	 Act on the event 
// 	$(".nav-list-info").fadeOut();
// });
