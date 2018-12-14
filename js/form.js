$("#nextPage").click(function () {
    $(".page2").css("display","block");
    $(".page1").css("display","none");
});

$("#lastPage").click(function () {
    $(".page1").css("display","block");
    $(".page2").css("display","none");
})

$("#nextPage").validate({
    rules:{
        firstname:"required",
        lastname:"required",
        number:"required",
        address:"",
        email:{
            required:true,
            email:true
        }
    }
    messages:{
        firstname:"Please input your first name"
    }
})