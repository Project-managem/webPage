
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

    //测试用
    Mock.mock(/\.json/, JSON.stringify({
        "id": "id_0001"
	}))

	$.ajax({
		url: 'test.json',
		type: 'POST',
		dataType: 'JSON',
		timeout:5000,
		data: json,
		async:false
	})
	.done(function(data) {
		console.log("success");
		data=JSON.parse(data);
		setCookie("username",data.id,1);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

});


//检测状态
function checkUserState(el){
	var cookie = getCookie("username");
	// console.log(cookie);
	if(cookie ==null){
        // console.log(123);
		$("#login_form").modal("show");
		return false;
	}
	else{
        // $("#login_form").modal("hidden");
		let href = $(el).attr("href");
		// console.log(href);
		// window.location.href=href;
		return true;
	}
}

//用户未登录时，弹出登陆窗口
$("#header #menu-checkout").find("a").each(function (index,el) {
	$(this).click(function () {
		return	checkUserState(el);
    })
})
$("#header .widget-inner").find("a").each(function (index,el) {
    $(this).click(function () {
        return	checkUserState(el);
    })
})


// $("#header .header-mid clearfix .logo-self").off("click");

// 获取cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
//设置cookie
function setCookie(name,value,hours) {
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime()+(hours*60*60*1000));
// 删除cookie
var expires = "; expires="+date.toGMTString();
}else{
    var expires = "";
}
document.cookie = name+"="+value+expires+"; path=/";
}
function deleteCookie(name) {
    setCookie(name,"",-1);
}