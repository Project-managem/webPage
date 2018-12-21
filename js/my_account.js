//登出
$("#login_out").click(function () {
    deleteCookie("id");
});


$("#my_account_orders").click(function () {
    //清空画布
    $("#account_orders .ruler-order").siblings("tr").remove();

    //改变导航栏样式
    $(this).parent().attr("class", "is-active");
    $(this).parent().siblings().attr("class", "none");

    //改变内容
    $("#account_orders").attr("class", "show-state");
    $("#account_orders").siblings().attr("class", "hidden-state");

    Mock.mock(/\.json/, {
        "orders": [
            {
                "id": "n0001",
                "date": "2018-10-3",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "3",
                    },
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "4"
                    },
                ],
                "total": "100"
            },
            {
                "id": "n0002",
                "date": "2018-10-3",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2"
                    }
                ],
                "total": "30"
            }
        ]

    });

    $.ajax({
        url: "test.json",
        timeout: 5000,
        type: "post",
        dataType: "json",
        data: "order",
    })
        .done(function (data) {
            console.log("success");
            console.log(data);
            createTable(data);

        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })
});

//创建用户订单表
function createTable(data) {
    var table = $(".account-order tbody"); //tbody
    table = table[0];
    for (let i = 0; i < data.orders.length; i++) {
        var header = document.createElement("tr");
        header.setAttribute("class", "header-orders");

        var date = document.createElement("td");
        date.setAttribute("colspan", "3");
        date.setAttribute("class", "date-orders");
        date.appendChild(document.createTextNode("Date:" + data.orders[i].date));


        var id = document.createElement("td");
        id.setAttribute("colspan", "3");
        id.setAttribute("class", "id-orders");
        id.appendChild(document.createTextNode("Order ID:" + data.orders[i].id));

        var pay_method = document.createElement("td");
        pay_method.setAttribute("colspan", "4");
        pay_method.setAttribute("class", "payway-orders");
        pay_method.appendChild(document.createTextNode("Order by:" + data.orders[i].method));

        header.appendChild(date);
        header.appendChild(id);
        header.appendChild(pay_method);

        $(table).append(header);

        for (let j = 0; j < data.orders[i].goods.length; j++) {
            var content = document.createElement("tr");
            content.setAttribute("class", "content-orders")

            var img = document.createElement("td");
            img.setAttribute("class", "img-orders");
            var img_img = document.createElement("img");
            img_img.setAttribute("src", data.orders[i].goods[j].image);
            img.appendChild(img_img);

            var title = document.createElement("td");
            title.setAttribute("class", "title-orders");
            title.setAttribute("colspan", "5");
            title.appendChild(document.createTextNode(data.orders[i].goods[j].title));

            var number = document.createElement("td");
            number.setAttribute("class", "number-orders");
            number.appendChild(document.createTextNode(data.orders[i].goods[j].num));

            var evalution = document.createElement("td");
            evalution.setAttribute("class", "evalution-orders");
            var evalution_a = document.createElement("a");
            evalution_a.appendChild(document.createTextNode("evalution"));
            evalution_a.setAttribute("href", "./evalution_info.html");
            evalution.appendChild(evalution_a);

            content.appendChild(img);
            content.appendChild(title);
            content.appendChild(number);
            content.appendChild(evalution);

            if (j === 0) {
                var total = document.createElement("td");
                total.setAttribute("class", "total-money-orders");
                total.setAttribute("rowspan", data.orders[i].goods.length);
                var total_content = document.createTextNode("total:￥" + data.orders[i].total);
                total.appendChild(total_content);

                var view = document.createElement("td");
                view.setAttribute("class", "view-orders");
                view.setAttribute("rowspan", data.orders[i].goods.length);
                var view_a = document.createElement("a");
                view_a.appendChild(document.createTextNode("view"));
                view.appendChild(view_a);

                content.appendChild(total);
                content.appendChild(view);
            }

            $(table).append(content);
        }//for j

    }//for n
}

//地址信息管理

//用户添加地址_事件函数
function addItem(username, address, tel) {
    $("#account_addresses .address_form").append("<div class=\"address-item-style shadow p-3 mb-5 bg-white rounded\">\n" +
        "                                                    <a href=\"javascript:void(0)\" class=\"reset_address\">\n" +
        "                                                        <img src=\"./images/icons/geer.png\"/></a>\n" +
        "                                                    <a href=\"javascript:void(0)\" class=\"delete_address\">\n" +
        "                                                        <img src=\"./images/icons/subtract.png\"/></a>\n" +
        "                                                    <input class=\"address_name\" type=\"text\" value=\"" + username + "\"/><br>\n" +
        "                                                    <label>addr:</label><br>\n" +
        "                                                    <textarea class=\"address_addr\" type=\"text\" >" + address + "</textarea>\n" +
        "                                                    <br><label>tel:</label><br>\n" +
        "                                                    <input class=\"address_tel\" type=\"text\" value=\"" + tel + "\" />\n" +
        "                                                </div>");

    $("#account_addresses .address_form .delete_address").last().on("click", function () {
        // alert(this.tagName);
        var obj = this;
        $("#account_addresses .address_form .delete_address").each(function (index, el) {
            if (el === obj) {
                // console.log(index);
                deleteAddressForm(index, this);
            }
        })
    });

    $("#account_addresses .address_form .reset_address").last().on("click", function () {
        // alert(this.tagName);
        var obj = this;
        $("#account_addresses .address_form .reset_address").each(function (index, el) {
            if (el === obj) {
                // console.log(index);
                resetAddressForm(index, this);
            }
        })
    });
}


//加载用户地址数据
//接收用户address 数据
//{
//  "id":1, //id 可以不要，我用不到
//  "username":"zhang san",
//  "address":"xxxxxxx",
//  "tel":"123123123"
// }
$("#my_account_addresses").click(function () {

    $("#account_addresses .address_form").empty();

    //改变导航栏样式
    $(this).parent().attr("class", "is-active");
    $(this).parent().siblings().attr("class", "none");

    //改变内容
    $("#account_addresses").attr("class", "show-state");
    $("#account_addresses").siblings().attr("class", "hidden-state");

    //用户添加地址_事件
    $(".woocommerce-MyAccount-content #add_address_items").click(function () {
        addItem("", "", "");
    });

    Mock.mock(/\.json/, {
        "obj":
            [{
                "id": 1,
                "username": "zhang san",
                "address": "xxxxxxx",
                "tel": "123123123"
            },
                {
                    "id": 2,
                    "username": "wang wu",
                    "address": "xxxxxxx",
                    "tel": "123123123"
                }]
    });

    $.ajax({
        url: "test.json",
        async: false,
        timeout: 5000,
        type: "post",
        dataType: "json",
        data: "Address"
    })
        .done(function (data) {
            console.log("success");
            console.log(data);
            for (let i = 0; i < data.obj.length; i++) {
                addItem(data.obj[i].username, data.obj[i].address, data.obj[i].tel, "disabled");

                $("#account_addresses .address_form").find("input").attr("disabled", "disabled");
                $("#account_addresses .address_form").find("textarea").attr("disabled", "disabled");
            }
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })

})

//
// //删除地址
// //Ajax 发送用户删除地址id号，但其id后的地址必须都要减一，注：id不固定
// //index = 1, 2, 3 ....n
//
// 服务器需要发送接收成功消息
// 消息可以为空
function deleteAddressForm(index, el) {
    Mock.mock(/\.json/, {});

    $.ajax({
        url: "test.json",
        async: false,
        timeout: 5000,
        type: "post",
        dataType: "json",
        data: index,
    })
        .done(function (data) {
            console.log("success");
            $(el).parent("div").remove();
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })
}

// 修改地址
// 发送用户修改后的，用户名，地址，电话，对应id号
// {
//     "id":1,
//     "username":"zhang san",
//     "address":"xxxxxxx",
//     "tel":"123123123"
// }
//
// 服务器需要发送接收成功消息
// 消息可以为空
function resetAddressForm(index, el) {
    // console.log(index);
    Mock.mock(/\.json/, {});

    if ($(el).siblings("input").attr("disabled") == "disabled") {
        $(el).siblings("input").attr("disabled", false);
        $(el).siblings("textarea").attr("disabled", false);
    }
    else {
        var data = {
            "id": index,
            "username": $(el).siblings("input").eq(0).val(),
            "address": $(el).siblings("input").eq(1).val(),
            "tel": $(el).siblings("input").eq(2).val(),
        };

        //发送用户修改表单数据
        $.ajax({
            url: "test.json",
            async: false,
            timeout: 5000,
            type: "post",
            dataType: "json",
            data: data,
        })
            .done(function (data) {
                console.log("success");
                console.log(data)
                $(el).siblings("input").attr("disabled", "disabled");
                $(el).siblings("textarea").attr("disabled", "disabled");
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            })
    }
}


$("#my_account_detail").click(function () {

    setCookie("id", "123", 1);

    //改变导航栏样式
    $(this).parent().attr("class", "is-active");
    $(this).parent().siblings().attr("class", "none");

    //改变内容
    $("#account_detail").attr("class", "show-state");
    $("#account_detail").siblings().attr("class", "hidden-state");

    //获得用户数据

    var id = getCookie("id");
    //例示数据
    Mock.mock(/\.json/, {
        "firstname": "san",
        "lastname": "zhang",
        "email": "123@123.com",
        "telephone": "123"
    });

    //更新表单
    $.ajax({
        url: "test.json",
        dataType: "json",
        timeout: 5000,
        type: "post",
        data: id
    })
        .done(function (data) {
            console.log("success");
            // console.log(data)
            $("#inputFirstName").val(data.firstname);
            $("#inputLastName").val(data.lastname);
            $("#inputEmail").val(data.email);
            $("#inputTel").val(data.telephone);
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })
});

//提交表单
$("#inputSubmitPasswordChange").click(function () {
    console.log(123);

    let old_password = $("#inputOldPassword").val();
    let password = $("#inputNewPassword").val();
    let re_passwd = $("#inputComfirmPassword").val();
    let telephone = $("#inputTel").val();

    // 验证密码输入是否一致
    if ($.trim(password) != $.trim(re_passwd)) {
        // console.log("123");
        $(function () {
            $("#inputNewPassword").popover('show');
        });
        return false;
    }
    //验证电话输入是否规范
    var reg = /^\d+$/;
    if (reg.test(telephone) == false) {
        $(function () {
            $("#inputTel").popover('show');
        });
        return false;
    }

    var cus_form = $("#account_detail").children("form").serialize();

    //例示数据
    Mock.mock(/\.txt/, {});

    $.ajax({
        url: "test.json",
        dataType: "test",
        timeout: 5000,
        type: "post",
        data: cus_form
    })
        .done(function (data) {
            console.log("success");
            alert("succeeding submitting your form");
            window.location.href = "my_account.html"
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })
});

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
function setCookie(name, value, hours) {
    if (hours) {
        var date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// 删除cookie
function deleteCookie(name) {
    setCookie(name, "", -1);
}