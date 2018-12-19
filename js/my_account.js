//登出
$("#login_out").click(function () {
    deleteCookie("id");
});

$("#my_account_orders").click(function () {

    Mock.mock(/\.json/, {
        "order": [
            {
                "id": "n0001",
                "date": "2018-10-3",
                "method": "Alipay",
                "goods": [
                    {
                        "image": "./images/1903/43.jpg",
                        "title": "马来西亚进口 特丽娜（D'Reena）芒果果肉饮料 芒果果汁 240ml*6（6罐装）",
                        "num": "3"
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
        url: "",
        async: false,
        timeout: 5000,
        type: "post",
        dataType: "json",
        data: "order",
    })
        .done(function (data) {
            console.log("success");
            var root = $(".woocommerce-MyAccount-content .account-order");
        )

        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })
});

function createTable(data,n) {
    for(let i=0;i<n;i++){
        var header = document.createElement("tr");

        var date = document.createElement("td");
        date.appendChild(document.createTextNode(data[i].date));
        date.setAttribute("colspan","3");
        date.setAttribute("class","date-orders");

        var id = document.createElement("td");
        date.appendChild(document.createTextNode(data[i].id));
        date.setAttribute("colspan","3");
        date.setAttribute("class","id-orders");

        var pay_method = document.createElement("td");
        date.appendChild(document.createTextNode(data[i].method));
        date.setAttribute("colspan","4");
        date.setAttribute("class","payway-orders");

        header.appendChild(date);
        header.appendChild(id);
        header.appendChild(pay_method);

        var content = document.createElement("tr");

        var img = document.createElement("td");
        date.setAttribute("href",data[i].goods[j]);
        date.setAttribute("class","id-orders");
        var title = document.createElement("td");
        var number = document.createElement("td");
        var total = document.createElement("td");
    }
}