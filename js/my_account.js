//登出
$("#login_out").click(function () {
    deleteCookie("id");
});

$("#my_account_orders").click(function () {
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
           var root =  $(".woocommerce-MyAccount-content");
           root.append("
            ")

        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        })
})