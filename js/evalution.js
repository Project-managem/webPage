//预加载
//发送订单id到服务器，获取订单信息
$(document).ready(function () {

    //清屏
    $("#evalution .submit").prevAll("div").remove();

    var id = getCookie("id");

    Mock.mock(/\.json/, JSON.stringify({
        "orders": [
            {
                "img": "images/1903/39-300x300.jpg",
                "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                "score":"3",//之前有评论过就发送,score<=5
                "evalution":"this is prefect"//之前有评论过就发送
            },
            {
                "img": "images/1903/39-300x300.jpg",
                "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                "score":"",//之前有评论过就发送
                "evalution":""//之前有评论过就发送
            },

        ]
    }));


    var sends = JSON.stringify({"id": id});
    $.ajax({
        url: "test.json",
        async: false,
        timeout: 5000,
        type: "post",
        dataType: "json",
        data: sends
    })
        .done(function (data) {
            console.log("success");
            data = JSON.parse(data);
            // console.log(data);
            createOrder(data)
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })

})

//创建订单项目
function createOrder(data) {
    for (var i = 0; i < data.orders.length; i++) {

        //插入元素
        $("#evalution .submit").before(" <div class=\"row\">\n" +
            "                        <div class=\"col-md-4\">\n" +
            "                            <img src=\"" + data.orders[i].img + "\" alt=\"goods_image\">\n" +
            "                        </div>\n" +
            "                        <div class=\"col-md-8 goods-info\">\n" +
            "                            <div class=\"row\">\n" +
            "                                <h4>" + data.orders[i].title + "</h4>\n" +
            "                            </div>\n" +
            "                            <div class=\"row emoji\">\n" +
            "                                <div class=\"col-md-3\">\n" +
            "                                    <span>Commondity Evalution</span>\n" +
            "                                </div>\n" +
            "                                <div class=\"col-md-9 inline-block \">\n" +
            "                                    <img src=\"images/icons/terrible_.png\" alt=\"terrible\">\n" +
            "                                    <img src=\"images/icons/bad_.png\" alt=\"bad\">\n" +
            "                                    <img src=\"images/icons/normal_.png\" alt=\"normal\">\n" +
            "                                    <img src=\"images/icons/great_.png\" alt=\"great\">\n" +
            "                                    <img src=\"images/icons/prefect_.png\" alt=\"prefect\">\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                            <div class=\"row\">\n" +
            "                                <textarea name=\"\" id=\"\" cols=\"90\" rows=\"10\" placeholder=\"How do you feel ?\">"+data.orders[i].evalution+"</textarea>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>");

        $("#evalution .goods-info .emoji").last().find("img").each(function (index, el) {
            var objs = $("#evalution .goods-info .emoji").last().find("img");

            //初始化emoji数据
            if(index<data.orders[i].score){
                $(this).attr("src", $(this).attr("src").replace("_", ""));
                // console.log(123);
            }

            //设置Emoji事件
            $(el).click(function () {
                // console.log(index);
                for (var i = 0; i <= index; i++) {
                    objs.eq(i).attr("src", objs.eq(i).attr("src").replace("_", ""));
                }//for
                for (var i = index + 1; i < 5; i++) {
                    if (objs.eq(i).attr("src").indexOf("_") == -1) {
                        objs.eq(i).attr("src", objs.eq(i).attr("src").replace(".png", "_.png"));
                    }//if
                }//for

                $(el).parent("div").attr("name",index);
                console.log($(el).parent("div").attr("name"));
            })//click
        });//each

        //检查该订单是否已经评论，已经评论则关闭评论功能
        if(data.orders[i].score !=""){
            $("#evalution .goods-info .emoji").last().find("img").off("click");
            console.log(123);
            $("#evalution .goods-info").last().find("textarea").attr("readonly","readonly");
        }

    }//for

    //检查该订单是否已经评论，已经评论则关闭提交功能
    if(data.orders[0].score !="") {
        $("#evalution .submit input").attr("disabled","disabled");
        $("#evalution .submit input").css("background-color","gray");
    }
}

//提交用户评论
$("#evalution .submit input").click(function () {

    var send =[];

    var tag = $("#evalution .goods-info .emoji");
    for(var i=0;i<tag.length;i++){

        //发送数据的格式/////////
        send.push({
            "score":  $(tag).eq(i).attr("name"),
            "evalution": $(tag).eq(i).next("div").children("textarea").val()
        });
        //////////////////////
    }




    ////////
    Mock.mock(/\.json/);

    $.ajax({
        url: "test.json",
        async: false,
        timeout: 5000,
        type: "post",
        dataType: "json",
        data: send
    })
        .done(function (data) {
            console.log("success");
            deleteCookie("id");
            window.location.href="my_account.html";
            // data = JSON.parse(data);
            //console.log(data);
            // createOrder(data)
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })

})


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