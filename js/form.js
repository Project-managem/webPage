/*提交表单——用户注册*/
$("#submit_register").click(function(event) {

    /* Act on the event */
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var address = $("#address").val();
    var email = $("#email").val();
    var telephone = $("#telephone").val();
    var password = $("#passwd").val();
    var re_passwd = $("#re_password").val();
    var username = $("#cusername").val();
    var verification = $("#verification").val();

    if($.trim(password) != $.trim(re_passwd)){
        console.log("123");
        $(function(){
            $("#password").popover('show');
        });
        return false;
    }
    var reg = /^\d+$/;
    if(reg.test(telephone) == false){
      $(function(){
        $("#telephone").popover('show');
    });
      return false;
  }

  var obj ={
    "customer_username":username,
    "customer_password":password,
    "customer_telephone":telephone,
    "customer_email":email,
    "customer_address":address,
    "customer_name":firstname+lastname,
};
var json = JSON.stringify(obj);

console.log(json);

  // /////// 测试用
  // Mock.mock(/\.json/, {
  //     "code":"1"
  // })
  //   /////////

    $.ajax({
        url: 'test.json',  ///改url为后端相关文件
        type: 'POST',
        dataType: 'JSON',
        data: json,
        timeout: 5000,
    })
    .done(function(data) {
        console.log("success");
        alert("success register");
        window.location.href="./index.html";   
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    return false;
});

/*用户输入提示*/
$("#telephone").focus(function(event){
    /* Act on the event */
    $(function(){
        $("#telephone").popover('hide');
    });
});

$("#password").focus(function(event) {
    /* Act on the event */
    $(function(){
        $("#password").popover('hide');
    });
});

$("#re_password").focus(function(event) {
    /* Act on the event */
    $(function(){
        $("#password").popover('hide');
    });
});


/*发送验证码*/
$("#send_verification").click(function(event) {
    /* Act on the event */
    console.log(1333);
    // var telephone = $("#customer_telephone").val();
    // var email = $("#customer_email").val();

    var telephone = "123";
    var email = "123@123.com";
    var data = {"customer_telephone":telephone,"customer_email":email};
    var json = JSON.stringify(data);

    console.log(json);
    // 发送验证码请求

    /////// 测试用
  //   Mock.mock(/\.json/, {
  //     "code":"123"
  // })
    /////////

    $.ajax({
        url: 'test.json',   ///改url为后端相关文件
        type: 'POST',
        dataType: 'JSON',
        data: json,
        timeout: 5000,
    })
    .done(function(data) {
       console.log("success");
       console.log(data.code);
       $("#send_verification").attr("disabled","true");
       $("#send_verification").css("background-color","gray");
   })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
});