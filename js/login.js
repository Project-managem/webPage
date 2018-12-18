
//登陆用户
$(".submit-login input").click(function(event) {
	/* Act on the event */
	var username = $("username").val();
	var password = $("password").val();

	var obj ={
		"username":username,
		"password":password
	}
	var json = JSON.stringify(obj);

	Mock.mock(/\.json/, {
		"code":"123"
	})

	$.ajax({
		url: 'test.json',
		type: 'POST',
		dataType: 'JSON',
		timeout:5000,
		data: json
	})
	.done(function(data) {
		console.log("success");
		document.cookie=data.id;
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

});


//检测状态
function checkUserState(el,attr){
	var cookie = document.cookie;
	console.log(cookie =="");
	if(cookie ==""){
		console.log($(el).attr("href"));
		var attr = $(el).attr("href");
		// $(el).attr("href","javascript:void(0)");
		$("#login_form").modal("show");
		return false;
		// $("#login_form").on("show.bs.modal",hander(el,attr));
	}
	else{
		return true;
	}
}


$(".item-link").each(function(index, el) {
	$(el).click(function(event) {
		/* Act on the event */
		return checkUserState(el);
	});
});
$(".cart-content").each(function(index, el) {
	$(el).click(function(event) {
		/* Act on the event */
		return checkUserState(el);
	});
});
