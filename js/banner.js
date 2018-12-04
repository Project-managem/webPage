var pic = document.getElementById("banner");
var opacity = 1.0;
var flag = 1;
var n=1;
setInterval(function(){
    switch(flag){
        case 1:
            console.log(opacity);
            if(opacity>0.8){
                opacity=opacity-0.005;
                pic.style.opacity = opacity;
            }
            else{
                opacity=opacity-0.1;
                pic.style.opacity = opacity;
            }
            if(opacity<=0){
                // opacity=1.0;
                n=switch_pic(n)
                flag=2;
            }
            break;
        case 2:
            console.log(opacity);
            if(opacity<0.8){
                opacity=opacity+0.1;
                pic.style.opacity = opacity;
            }
            else{
                opacity=opacity+0.05;
                pic.style.opacity = opacity;
            }
            if(opacity>=1){
                // opacity=1.0;
                // switch_pic(n+1)
                flag=1;
            }

            break;
        default:
            break;
    }

},100);

function switch_pic(n){
    console.log(n);
    switch(n){
        case 1:pic.setAttribute("src","./image/desklampnew.jpg");n++;break;
        default:pic.setAttribute("src","./image/plugnew.jpg");n=1;break;
    }
    return n;
}