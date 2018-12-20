var a = {a:[{a:1},{b:2},{c:3}]};
console.log(a.a[0].a);

//登出
$("#login_out").click(function () {
    deleteCookie("id");
});

$("#my_account_orders").click(function () {

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

        table.appendChild(header);

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

            table.appendChild(content);
        }//for j

    }//for n
}

//地址信息管理

//用户添加地址_事件函数
function addItem(username="null",address="",tel="1") {
    $(this).siblings("div").append(" <div class=\"address-item-style shadow p-3 mb-5 bg-white rounded\">\n" +
        "                                                    <a href=\"javascript:void(0)\" class=\"reset_address\"><img\n" +
        "                                                            src=\"./images/icons/geer.png\"/></a>\n" +
        "                                                    <a href=\"javascript:void(0)\" class=\"delete_address\"><img\n" +
        "                                                            src=\"./images/icons/subtract.png\"/></a>\n" +
        "                                                    <input class=\"address_name\" type=\"text\" value=\""+username+"/><br>\n" +
        "                                                    <label>addr:</label><br>\n" +
        "                                                    <textarea class=\"address_addr\" type=\"text\">"+address+"</textarea>\n" +
        "                                                    <br><label>tel:</label><br>\n" +
        "                                                    <input class=\"address_tel\" type=\"text\" value=\""+tel+"/>\n" +
        "                                                </div>");

    $(".delete_address").last().click(function () {
        $(this).parent("div").remove();
    });

    $(".reset_address").last().click(function () {
        if ($(this).siblings("input").attr("disabled") == "disabled") {
            $(this).siblings("input").attr("disabled", false);
            $(this).siblings("textarea").attr("disabled", false);
        }
        else {
            $(this).siblings("input").attr("disabled", "disabled");
            $(this).siblings("textarea").attr("disabled", "disabled");
        }
    });
}
//用户添加地址_事件
$("#add_address").click(addItem());

//加载用户地址数据
//接收用户address 数据
//{
//  "id":1, //id 可以不要，我用不到
//  "username":"zhang san",
//  "address":"xxxxxxx",
//  "tel":"123123123"
// }
$("#my_account_addresses").click(function () {

    //改变导航栏样式
    $(this).parent().attr("class", "is-active");
    $(this).parent().siblings().attr("class", "none");

    //改变内容
    $("#account_addresses").attr("class", "show-state");
    $("#account_addresses").siblings().attr("class", "hidden-state");

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
                    "username": "zhang san",
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
            for(let i=0;i<data.obj.length;i++){
                addItem(data.obj[i].username, data.obj[i].address,data.obj[i].tel);
            }
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })
})


//删除地址
//Ajax 发送用户删除地址id号，但其id后的地址必须都要减一
//index = 1, 2, 3 ....n
$(".delete_address").each(function (index, el) {
    $(el).click(function () {
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
                $(this).parent("div").remove();
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            })
    })
});

//修改地址
//发送用户修改后的，用户名，地址，电话，对应id号
//{
//  "id":1,
//  "username":"zhang san",
//  "address":"xxxxxxx",
//  "tel":"123123123"
// }
$(".reset_address").each(function (index, el) {
    $(el).click(function (el) {
        console.log(index);
        if ($(this).siblings("input").attr("disabled") == "disabled") {
            $(this).siblings("input").attr("disabled", false);
            $(this).siblings("textarea").attr("disabled", false);
        }
        else {
            var data = {
                "id": index,
                "username": $(this).siblings("input")[0].val(),
                "address": $(this).siblings("input")[1].val(),
                "tel": $(this).siblings("input")[2].val(),
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
                    $(this).siblings("input").attr("disabled", "disabled");
                    $(this).siblings("textarea").attr("disabled", "disabled");
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    console.log("complete");
                })
        }
    })
});

