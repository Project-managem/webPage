// $("#list1").mouseenter(function(event) {
// 	 Act on the event 
// 	$(".nav-display").eq(0).fadeIn("slow");
// });


$(".nav-list ul li").each(function(index, el) {
	$(el).mouseenter(function(event) {
		/* Act on the event */
		console.log(index);
		$(".nav-display").eq(index).fadeIn("slow");
	});
});

$(".nav-display").mouseleave(function(event) {
	/* Act on the event */
	$(".nav-display").fadeOut();
});
