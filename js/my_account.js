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
    var table = document.getElementsByClassName("account-order")[0];
    for(let i=0;i<n;i++){
        var header = document.createElement("tr");
        header.setAttribute("class","header-orders");

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

        table.appendChild(table);

        for(let j=0;j<data.goods.length,j++){
            var content = document.createElement("tr");
            content.setAttribute("class","content-orders")

            var img = document.createElement("td");
            img.setAttribute("href",data[i].goods[j].image);
            img.setAttribute("class","img-orders");
            var title = document.createElement("td");
            title.setAttribute("href",data[i].goods[j].title);
            title.setAttribute("class","title-orders");
            var number = document.createElement("td");
            number.setAttribute("href",data[i].goods[j].num);
            number.setAttribute("class","number-orders");
            var evalution = document.createElement("td");
            evalution.setAttribute("class","evalution-orders");
            var evalution_a = document.createElement("a");
            evalution_a.appendChild(document.createTextNode("evalution"));
            evalution.appendChild(evalution_a); 

            content.appendChild(img);
            content.appendChild(title);
            content.appendChild(number)；
            content.appendChild(evalution);

            if(j===0){
               var total = document.createElement("td");
               total.setAttribute("href",data[i].goods[j].total);
               total.setAttribute("class","total-money-orders");

               var view = document.createElement("td");
               view.setAttribute("class","view-orders");
               var view_a = document.createElement("a");
               view_a.appendChild(document.createTextNode("view"));
               view.appendChild(view_a);

               content.appendChild(total);
               content.appendChild(view);
           }

           table.appendChild(content);
       }



    }//for n
}