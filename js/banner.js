var pic = document.getElementById("banner");
var opacity = 1.0;
var flag = 1;
var n=0;

$(".banner-button").children().each(function (index,eq) {
    $(eq).mouseenter(function () {
        n=index;
        switch(n){
            case 0:pic.setAttribute("src","./image/desklampnew.jpg");break;
            case 1:pic.setAttribute("src","./image/login_bg.jpg");break;
            default:pic.setAttribute("src","./image/plugnew.jpg");break;
        }
        $(".banner-button").children().css({"background-color":"white","border":"none"});
        $(".banner-button").children().eq(n).css({"background-color":"red","border":"solid pink 1.5px"});
    })
});
setInterval(function(){
    $("#banner").fadeIn("3000",function () {
        // console.log(n);
        switch(n){
            case 0:pic.setAttribute("src","./image/desklampnew.jpg");changeButton(n);n++;break;
            case 1:pic.setAttribute("src","./image/login_bg.jpg");changeButton(n);n++;break;
            default:pic.setAttribute("src","./image/plugnew.jpg");changeButton(n);n=0;break;
        }

    });

},3000);

function changeButton(n) {
    $(".banner-button").children().css({"background-color":"white","border":"none"});
    $(".banner-button").children().eq(n).css({"background-color":"red","border":"solid pink 1.5px"});

}