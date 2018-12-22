//验证用户名是否可用
$("#register_username").blur(function () {

    $.ajax({
        url: 'test.json',  ///改url为后端相关文件，需要返回是否可用，y：可用，n：不可
        type: 'POST',
        dataType: 'text',
        data:$(this).val(),
        timeout: 5000
    })
        .done(function (data) {
            console.log("success");
            if(data=="y"){

            }
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
})

// 提交表单——用户注册
$("#submit_register").click(function (event) {

    /* Act on the event */
    var customer_name = $("#register_name").val();
    var address = $("#register_address").val();
    var email = $("#register_email").val();
    var telephone = $("#register_telephone").val();
    var password = $("#register_passwd").val();
    var re_passwd = $("#register_re_password").val();
    var username = $("#register_username").val();
    var verification = $("#register_verification").val();
    var verification_back;

    // 验证密码输入是否一致
    if ($.trim(password) != $.trim(re_passwd)) {
        // console.log("123");
        $(function () {
            $("#register_password").popover('show');
        });
        return false;
    }
    //验证电话输入是否规范
    var reg = /^\d+$/;
    if (reg.test(telephone) == false) {
        $(function () {
            $("#register_telephone").popover('show');
        });
        return false;
    }


    var obj = {
        "customer_username": username,
        "customer_password": password,
        "customer_telephone": telephone,
        "customer_email": email,
        "customer_address": address,
        "customer_name": customer_name,
    };

    var json = JSON.stringify(obj);

    console.log(json);

    /////// 测试用
    // Mock.mock(/\.json/, {
    //     "code": "1",
    //     "message": "the verification code is wrong"
    // })
    /////////

    $.ajax({
        url: 'login',  ///改url为后端相关文件，需要返回是否注册成功{"code":1,"message":"xxxx"},code为1表示成功，否在失败，message为失败原因
        type: 'POST',
        dataType: 'JSON',
        data: $("#register").serialize(),
        timeout: 5000,
        async: false,
    })
        .done(function (data) {
            console.log("success");
            data=JSON.parse(data);
            if (data.code == 1) {
                window.location.href = "index.html";
                alert("success register");
            }
            else {
                alert("fail register \n" + data.message);
            }
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
    return false;
});


/*发送验证码*/
$("#send_verification").click(function (event) {
    /* Act on the event */

    var email = $("#email").val();
    var telephone = $("#register_telephone").val();

    if (email == "") {
        $(function () {
            $("#register_email").popover('show');
        });
        return;
    }
    if (telephone == "") {
        $(function () {
            $("#register_telephone").popover('show');
        });
        return;
    }

    // var data = {"customer_telephone": telephone, "customer_email": email};
    // var json = JSON.stringify(data);
    var json = telephone;
    // 发送验证码请求

    // 测试用
    Mock.mock(/\.json/, JSON.stringify({
        "code": "123"
    }));

    $.ajax({
        url: 'test.json',   ///改url为后端相关文件_发送验证码
        type: 'json',
        dataType: 'json',
        data: telephone,
        timeout: 5000,
    })
        .done(function (data) {
            console.log("success");
            data=JSON.parse(data);
            // console.log(data.code);
            // verification_back = data.code;
            $("#send_verification").attr("disabled", "true");
            $("#send_verification").css("background-color", "gray");
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
});


/*用户输入提示*/
$("#register_telephone").focus(function (event) {
    /* Act on the event */
    $(function () {
        $("#register_telephone").popover('hide');
    });
});

$("#register_passwd").focus(function (event) {
    /* Act on the event */
    $(function () {
        $("#register_passwd").popover('hide');
    });
});

$("#register_re_password").focus(function (event) {
    /* Act on the event */
    $(function () {
        $("#register_passwd").popover('hide');
    });
});

$("#email").focus(function (event) {
    /* Act on the event */
    $(function () {
        $("#email").popover('hide');
    });
});

$("#register_verification").focus(function (event) {
    /* Act on the event */
    $(function () {
        $("#register_verification").popover('hide');
    });
});
