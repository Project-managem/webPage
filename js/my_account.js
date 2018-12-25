//登出
$("#login_out").click(function () {
    deleteCookie("username");
});

/////////////////////////////////////////////////
/////服务器每个发送的数据格式相同
/////参考
// "orders": [
//     {
//         "id": "n0001",
//         "date": "2018",
//         "method": "Alipay",
//         "goods": [
//             {
//                 "image": "./images/1903/43.jpg",
//                 "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
//                 "num": "3",
//                 "price":"60"
//             },
//             {
//                 "image": "./images/1903/43.jpg",
//                 "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
//                 "num": "4",
//                 "price":"60"
//             },
//         ],
//         "total": "420",
//         "state":"Processing"
//
//     },
//     {
//         "id": "n0002",
//         "date": "2018",
//         "method": "Alipay",
//         "goods": [
//             {
//                 "image": "./images/1903/43.jpg",
//                 "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
//                 "num": "2",
//                 "price":"60"
//             }
//         ],
//         "total": "120",
//         "state":"Complete"
//     },
//     {
//         "id": "n0002",
//         "date": "2018",
//         "method": "Alipay",
//         "goods": [
//             {
//                 "image": "./images/1903/43.jpg",
//                 "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
//                 "num": "2",
//                 "price":"60"
//             }
//         ],
//         "total": "120",
//         "state":"shipped"
//     },
//     {
//         "id": "n0002",
//         "date": "2018",
//         "method": "Alipay",
//         "goods": [
//             {
//                 "image": "./images/1903/43.jpg",
//                 "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
//                 "num": "2",
//                 "price":"60"
//             }
//         ],
//         "total": "120",
//         "state":"Preparing"
//     }
// ]
//
//客户端发送给服务器端数据格式为
//{"method":"year"}
//year 可为 month , week , day
//对应date:xxxx（一年） , xxxx-xx（一月） , xxxx-xx-xx（一周） , xxxx-xx-xx(每次10天)
//请将数据按照相应的时间格式发送给我
//
//获取每年订单情况
$("#GetOrderByYear").click(function () {
    //清空画布
    $("#account_orders tbody").empty();

    Mock.mock(/\.json/,JSON.stringify({
        "orders": [
            {
                "id": "n0001",
                "date": "2018",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "3",
                        "price":"60"
                    },
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "4",
                        "price":"60"
                    },
                ],
                "total": "420",
                "state":"Processing"

            },
            {
                "id": "n0002",
                "date": "2018",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"Complete"
            },
            {
                "id": "n0002",
                "date": "2018",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"shipped"
            },
            {
                "id": "n0002",
                "date": "2018",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"Preparing"
            }
        ]

    }));

    $.ajax({
        url: "test.json",
        timeout: 5000,
        type: "post",
        dataType: "json",
        data: JSON.stringify({"method":"year"}),
    })
        .done(function (data) {
            console.log("success");
            data=JSON.parse(data);
            createTable(data);

        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })
});
//获取每月订单情况
$("#GetOrderByMonth").click(function () {
    //清空画布
    $("#account_orders tbody").empty();

    Mock.mock(/\.json/,JSON.stringify({
        "orders": [
            {
                "id": "n0001",
                "date": "2018-2",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "3",
                        "price":"60"
                    },
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "4",
                        "price":"60"
                    },
                ],
                "total": "420",
                "state":"Processing"

            },
            {
                "id": "n0002",
                "date": "2018-2",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"Complete"
            },
            {
                "id": "n0002",
                "date": "2018",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"shipped"
            },
            {
                "id": "n0002",
                "date": "2018-2",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"Preparing"
            }
        ]

    }));

    $.ajax({
        url: "test.json",
        timeout: 5000,
        type: "post",
        dataType: "json",
        data: JSON.stringify({"method":"month"}),
    })
        .done(function (data) {
            console.log("success");
            data=JSON.parse(data);
            createTable(data);

        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })
});
//获取每周订单情况
$("#GetOrderByWeek").click(function () {
    //清空画布
    $("#account_orders tbody").empty();

    Mock.mock(/\.json/,JSON.stringify({
        "orders": [
            {
                "id": "n0001",
                "date": "2018-2",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "3",
                        "price":"60"
                    },
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "4",
                        "price":"60"
                    },
                ],
                "total": "420",
                "state":"Processing"

            },
            {
                "id": "n0002",
                "date": "2018-2",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"Complete"
            },
            {
                "id": "n0002",
                "date": "2018",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"shipped"
            },
            {
                "id": "n0002",
                "date": "2018-2",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"Preparing"
            }
        ]

    }));

    $.ajax({
        url: "test.json",
        timeout: 5000,
        type: "post",
        dataType: "json",
        data: JSON.stringify({"method":"week"}),
    })
        .done(function (data) {
            console.log("success");
            data=JSON.parse(data);
            createTable(data);

        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })
});
//获取每日订单情况
$("#GetOrderByDay").click(function () {
    //清空画布
    $("#account_orders tbody").empty();

    Mock.mock(/\.json/,JSON.stringify({
        "orders": [
            {
                "id": "n0001",
                "date": "2018-2",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "3",
                        "price":"60"
                    },
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "4",
                        "price":"60"
                    },
                ],
                "total": "420",
                "state":"Processing"

            },
            {
                "id": "n0002",
                "date": "2018-2",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"Complete"
            },
            {
                "id": "n0002",
                "date": "2018",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"shipped"
            },
            {
                "id": "n0002",
                "date": "2018-2",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"Preparing"
            }
        ]

    }));

    $.ajax({
        url: "test.json",
        timeout: 5000,
        type: "post",
        dataType: "json",
        data: JSON.stringify({"method":"day"}),
    })
        .done(function (data) {
            console.log("success");
            data=JSON.parse(data);
            createTable(data);

        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })
});
////////////////////////////////////////////////////

///////////////////////////////////////////////////
//订单搜索
//客户端发送给服务端数据参考
// {
// "method":"day",
// "search":"dsaf"
// }
//服务端同其他，按日发
$("#GetOrderBySearch").click(function () {

    var c = $("#account_orders .OrderSearch").val();

    // console.log(c);
    //清空画布
    $("#account_orders tbody").empty();

    Mock.mock(/\.json/,JSON.stringify({
        "orders": [
            {
                "id": "n0001",
                "date": "2018-2",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "3",
                        "price":"60"
                    },
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "4",
                        "price":"60"
                    },
                ],
                "total": "420",
                "state":"Processing"

            },
            {
                "id": "n0002",
                "date": "2018-2",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"Complete"
            },
            {
                "id": "n0002",
                "date": "2018",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"shipped"
            },
            {
                "id": "n0002",
                "date": "2018-2",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"Preparing"
            }
        ]

    }));

    $.ajax({
        url: "test.json",
        timeout: 5000,
        type: "post",
        dataType: "json",
        data: JSON.stringify({"method":"day","search":c}),
    })
        .done(function (data) {
            console.log("success");
            data=JSON.parse(data);
            createTable(data);

        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })
});


//从导航进入订单历史表，预加载
$("#my_account_orders").click(function () {
    //清空画布
    $("#account_orders tbody").empty();

    //改变导航栏样式
    $(this).parent().attr("class", "is-active");
    $(this).parent().siblings().attr("class", "none");

    //改变内容
    $("#account_orders").attr("class", "show-state");
    $("#account_orders").siblings().attr("class", "hidden-state");

    Mock.mock(/\.json/,JSON.stringify({
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
                "price":"60"
            },
            {
                "image": "./images/1903/43.jpg",
                "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                "num": "4",
                "price":"60"
            },
            ],
            "total": "420",
            "state":"Processing"

        },
        {
                "id": "n0002",
                "date": "2018-10-3",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"Complete"
            },
            {
                "id": "n0002",
                "date": "2018-10-3",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"shipped"
            },
            {
                "id": "n0002",
                "date": "2018-10-3",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "2",
                        "price":"60"
                    }
                ],
                "total": "120",
                "state":"Preparing"
            }
        ]

    }));

    $.ajax({
        url: "test.json",
        timeout: 5000,
        type: "post",
        dataType: "json",
        data: "order",
    })
    .done(function (data) {
        console.log("success");
        data=JSON.parse(data);
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
            img.setAttribute("rowspan", "2");
            var img_img = document.createElement("img");
            img_img.setAttribute("src", data.orders[i].goods[j].image);
            img.appendChild(img_img);

            var title = document.createElement("td");
            title.setAttribute("class", "title-orders");
            title.setAttribute("colspan", "6");
            title.setAttribute("rowspan","2");
            title.appendChild(document.createTextNode(data.orders[i].goods[j].title));

            var price = document.createElement("td");
            price.appendChild(document.createTextNode(data.orders[i].goods[j].price));

            var number = document.createElement("td");
            number.setAttribute("class", "number-orders");
            number.appendChild(document.createTextNode("x"+data.orders[i].goods[j].num));

            // var evalution = document.createElement("td");
            // evalution.setAttribute("class", "evalution-orders");
            // if(data.orders[i].state == "finish"){
            //     var evalution_a = document.createElement("a");
            //     evalution_a.appendChild(document.createTextNode("evalution"));
            //     evalution_a.setAttribute("href", "./evalution_info.html");
            //     evalution.appendChild(evalution_a);
            // }
            // else{
            //     var processing = document.createElement("a");
            //     processing.appendChild(document.createTextNode("processing"));
            //     processing.setAttribute("href", "javascript:void(0)");
            //     evalution.appendChild(processing);
            // }

            var content2 = document.createElement("tr");
            content2.appendChild(number);

            content.appendChild(img);
            content.appendChild(title);
            content.appendChild(price);
            // content.appendChild(number);
            // content.appendChild(evalution);

            if (j === 0) {
                var total = document.createElement("td");
                total.setAttribute("class", "total-money-orders");
                total.setAttribute("rowspan", 2*data.orders[i].goods.length);
                var total_content = document.createTextNode("total:￥" + data.orders[i].total);
                total.appendChild(total_content);

                var view = document.createElement("td");
                view.setAttribute("class", "view-orders");
                view.setAttribute("rowspan",2* data.orders[i].goods.length);
                var view_a = document.createElement("a");
                view_a.appendChild(document.createTextNode(data.orders[i].state));
                if(data.orders[i].state.toLowerCase() =="processing" || data.orders[i].state.toLowerCase() =="preparing"){
                    view_a.setAttribute("href","#");
                }
                else{
                    view_a.setAttribute("href","evalution-info.html");
                    view_a.setAttribute("class","toEvalution");
                    //跳转至评论系统
                    // view_a.setAttribute("onclick",toEvalution(data.orders[i].id))
                   view_a.addEventListener("click",function () {
                       // console.log(data.orders[i].id);
                       setCookie("id",data.orders[i].id)
                   });
                }
                view.appendChild(view_a);

                content.appendChild(total);
                content.appendChild(view);

            }



            $(table).append(content);
            $(table).append(content2);
        }//for j

    }//for n
}

//地址信息管理

//用户添加地址_事件函数
function addItem(id,username, address, tel) {



    $("#account_addresses .address_form").append("<div class=\"address-item-style shadow p-3 mb-5 bg-white rounded\" id='"+id+"'>\n" +
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

     //添加删除事件
     $("#account_addresses .address_form .delete_address").last().on("click", function () {
        // alert(this.tagName);
        var obj = this;
        $("#account_addresses .address_form .delete_address").each(function (index, el) {
            if (el === obj) {
                // console.log(index);
                $(el).attr("id")
                deleteAddressForm(index, this);
            }
        })
    });

    //添加修改事件
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

    //用户添加地址_事件
    $(".woocommerce-MyAccount-content #add_address_items").click(function () {
        addItem("","", "", "");
    });

//预加载用户地址数据
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



    Mock.mock(/\.json/, JSON.stringify({
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
    }));

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
        data=JSON.parse(data);
        for (let i = 0; i < data.obj.length; i++) {
            addItem(data.obj[i].id,data.obj[i].username, data.obj[i].address, data.obj[i].tel);

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
    // Mock.mock(/\.json/, {});

    var id = $(el).parent("div").attr("id");

    $.ajax({
        url: "test.json",
        async: false,
        timeout: 5000,
        type: "post",
        dataType: "json",
        data:JSON.stringify(id)
    })
    .done(function () {
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

    // 返回数据,例子
    // {
    //     "id":"1"
    // }
    Mock.mock(/\.json/, {
        "id|1-100":1
    });

    if ($(el).siblings("input").attr("disabled") == "disabled") {
        $(el).siblings("input").attr("disabled", false);
        $(el).siblings("textarea").attr("disabled", false);
    }
    else {
        var data = {
            "id": $(el).parent("div").attr("id"),
            "username": $(el).siblings("input").eq(0).val(),
            "address": $(el).siblings("textarea").val(),
            "tel": $(el).siblings("input").eq(1).val(),
        };

        data = JSON.stringify(data);
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
                // data=JSON.parse(data);
                $(el).siblings("input").attr("disabled", "disabled");
                $(el).siblings("textarea").attr("disabled", "disabled");

                $(el).parent("div").attr("id",data.id);
            })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })
    }
}


//////////////////////////
//
//个人信息
//
//初始化个人信息
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
    Mock.mock(/\.json/,JSON.stringify( {
        "CustomerName": "Zhang San",
        "email": "123@123.com",
        "telephone": "123"
    }));

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
            data=JSON.parse(data);
            $("#inputCustomerName").val(data.CustomerName);
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

//修改个人信息
$("#inputResetSelfinfo").click(function(event) {
    /* Act on the event */
    $("#inputCustomerName").removeAttr('readonly');
    $("#inputEmail").removeAttr('readonly');
    $("#inputTel").removeAttr('readonly');

    $(this).css("display","none");
    $("#inputSubmitSelfinfo").css("display","block");
});

//提交个人信息
$("#inputSubmitSelfinfo").click(function(event) {
    /* Act on the event */
    var username = $("#inputCustomerName").val();
    var email = $("#inputEmail").val();
    var tel = $("#inputTel").val();

    var send = {
        "CustomerName":username,
        "email": email,
        "telephone": tel
    }

    $.ajax({
        url: 'test.json',
        type: 'post',
        dataType: 'JSON',
        data: JSON.stringify(send),
    })
    .done(function() {
        console.log("success");

        $("#inputCustomerName").attr('readonly',"readonly");
        $("#inputEmail").attr('readonly',"readonly");
        $("#inputTel").attr('readonly',"readonly");
        $("#inputSubmitSelfinfo").css("display","none");
        $("#inputResetSelfinfo").css("display","block");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
});

//提交修改密码
$("#inputSubmitPasswordChange").click(function () {
    // console.log(123);

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

    //发送后端数据格式
    var send ={
        "old_password":old_password,
        "new_password":password
    }

    //例示数据
    // Mock.mock(/\.txt/, {});

    $.ajax({
        url: "test.json",
        dataType: "json",
        timeout: 5000,
        type: "post",
        data: JSON.stringify(send)
    })
    .done(function (data) {
        console.log("success");
        data=JSON.parse(data);
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