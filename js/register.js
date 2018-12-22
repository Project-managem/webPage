//验证用户名是否可用
$("#register_username").blur(function () {


    let send = $(this).val();
    $.ajax({
        url: 'test.txt',  ///改url为后端相关文件，需要返回是否可用，y：可用，n：不可
        type: 'POST',
        dataType: 'text',
        data: send,
        timeout: 5000
    })
        .done(function (data) {
            console.log("success");
            if (data == "y") {
                $("#register_check_availble").attr("src", "images/icons/sure.png");
            }
            else {
                $("#register_check_availble").attr("src", "images/icons/cross.png");
                $(function () {
                    $("#register_username").popover('show');
                });
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
    var customer_name = $.trim($("#register_customer_name").val());
    var address = $.trim($("#register_address").val());
    var email = $.trim($("#register_email").val());
    var telephone = $.trim($("#register_telephone").val());
    var passwd = $.trim($("#register_passwd").val());
    var re_password = $.trim($("#register_re_password").val());
    var username = $.trim($("#register_username").val());
    var verification_back;


    //验证是否表格项为空
    var array = [customer_name, address, email, telephone, passwd, re_password, username];
    var array_name = ["customer_name", "address", "email", "telephone", "passwd", "re_password", "username"];
    for (let a = 0; a < array.length; a++) {
        // console.log("t:"+a);
        if (array[a] == "") {
            $(function () {
                var id = "#register_" + array_name[a];
                // console.log(id);
                $(id).popover('show');
            });
            return false;
        }
    }

    // console.log(telephone);

    // 验证密码输入是否一致
    if (passwd != re_password) {
        console.log("123");
        $(function () {
            $("#register_passwd").popover('show');
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
        "customer_password": passwd,
        "customer_telephone": telephone,
        "customer_email": email,
        "customer_address": address,
        "customer_name": customer_name,
    };

    ///// 测试用
    Mock.mock(/\.json/, {
        "code": "1",
        "message": "the verification code is wrong"
    })
    /////////

    //发送表格
    var send = $("#register").serialize();

    $.ajax({
        url: 'test.json',  ///改url为后端相关文件，需要返回是否注册成功{"code":1,"message":"xxxx"},code为1表示成功，否在失败，message为失败原因
        type: 'POST',
        dataType: 'JSON',
        data:send,
        timeout: 5000,
        async: false,
    })
        .done(function (data) {
            console.log("success");
            // data = JSON.parse(data);
            if (data.code == 1) {
                alert("success register");
                window.location.href = "index.html";
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

    var email = $("#register_email").val();
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
    var send = {}
    // 发送验证码请求

    // 测试用
    Mock.mock(/\.json/, JSON.stringify({
        "code": "123"
    }));

    $.ajax({
        url: 'test.json',   ///改url为后端相关文件_发送验证码
        type: 'POST',
        dataType: 'json',
        data: telephone,
        timeout: 5000,
    })
        .done(function (data) {
            console.log("success");
            data = JSON.parse(data);
            // $("#send_verification").attr("disabled", "true");
            // $("#send_verification").css("background-color", "gray");
            $("#send_verification").css("display", "none");
            $("#check_verification").css("display", "inline")
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
});

//验证验证码请求
$("#check_verification").click(function () {
    var verification = $.trim($("#register_verification").val());

    var send = JSON.stringify(verification);

    Mock.mock(/\.json/, JSON.stringify({
        "code": true
    }));

    $.ajax({
        url: 'test.json',   ///改url为后端相关文件_发送验证码
        type: 'POST',
        dataType: 'json',
        data: send,
        timeout: 5000,
    })
        .done(function (data) {
            console.log("success");
            data = JSON.parse(data);
            if (data.code) {
                $("#submit_register").attr("disabled", false);
                $("#submit_register").css("background-color", "#ffaa00")

                $("#check_verification").css("background-color","gray");
                $("#check_verification").attr("disabled","disabled");
            }
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });
})


/*用户输入提示关闭*/
$("#register_customer_name").focus(function (event) {
    /* Act on the event */
    $(function () {
        $("#register_customer_name").popover('hide');
    });
});

$("#register_address").focus(function (event) {
    /* Act on the event */
    $(function () {
        $("#register_address").popover('hide');
    });
});


$("#register_email").focus(function (event) {
    /* Act on the event */
    $(function () {
        $("#register_email").popover('hide');
    });
});

$("#register_username").focus(function (event) {
    /* Act on the event */
    $(function () {
        $("#register_username").popover('hide');
    });
});

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


$("#register_verification").focus(function (event) {
    /* Act on the event */
    $(function () {
        $("#register_verification").popover('hide');
    });
});


