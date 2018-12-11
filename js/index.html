function returnProductID(jObj)
{

}

function createProductID(jObj, parentObj)
{
    var DivID = parentObj.id + "-ProductId";
    var ProductIdDiv = document.createElement("div");

    // ProductIdDiv.innerHTML = jObj.productId;
    ProductIdDiv.style = "display:none;";
    ProductIdDiv.id = DivID;
    parentObj.appendChild(ProductIdDiv);

    var textNode = document.createTextNode(jObj.productId);
    ProductIdDiv.appendChild(textNode);
    return ProductIdDiv;
}

function createImgDiv(jObj, parentObj)//参数应为json对象
{
    var divObj = document.createElement("div");
    var itemAddr = document.createElement("a");
    var picAddr = document.createElement("img");
    divObj.className = "sub_mingxing";
    //itemAddr.target = "_blank";
    itemAddr.onclick = returnProductID();
    picAddr.src = "."+jObj.pictures[0].productPictureFilepath;
    picAddr.alt = "";
    divObj.appendChild(itemAddr);
    itemAddr.appendChild(picAddr);
    itemAddr.href = "customer/getProductDetail.do?productId=" + parentObj.childNodes[0].innerHTML;//jObj.itemURL;
    return divObj;
}

function createItemName(jObj, parentObj)//参数应为json对象
{
    var divObj = document.createElement("div");
    var itemAddr = document.createElement("a");
    itemAddr.innerHTML = jObj.productName;
    divObj.className = "pinpai";
    itemAddr.href = "xiangqing.html?itemid=" + parentObj.childNodes[0].innerHTML;//jObj.itemURL;
    //itemAddr.target = "_blank";
    itemAddr.onclick = returnProductID();
    divObj.appendChild(itemAddr);
    return divObj;
}

function createDescription(jObj)
{
    var divObj = document.createElement("div");
    var textNode = document.createTextNode(jObj.productDescription);
    divObj.className = "youhui";
    divObj.appendChild(textNode);
    return divObj;
}

function createPrice(jObj)
{
    var divObj = document.createElement("div");
    var textNode = document.createTextNode(jObj.productPrice);
    divObj.className = "jiage";
    divObj.appendChild(textNode);
    return divObj;
}

//创建一个商品方格，包含四个div
function createColDiv(jObj, parentDiv, i)//传入的是json对象和父Div对象以及该行中的序号
{
    var divID = "itemCol" + i.toString();
    var divObj = document.createElement("div");
    //var parentDiv = document.getElementById(parentId);
    divObj.id = divID;  //设置商品对应位置的div ID
    divObj.className = "mingxing fl mb20";  //设置商品div的css类
    //设置商品div的样式
    divObj.style.border = "2px solid #fff";
    divObj.style.width = "230px";
    divObj.style.cursor = "pointer";
    divObj.style.transition = "border 0.5s";
    divObj.onmouseout = function(){this.style.border='2px solid #fff'};
    divObj.onmousemove = function(){this.style.border='2px solid red'};
    //divObj.innerText = '<div class="sub_mingxing" ' + 'id=' + urlID + '><a href=' + '"./xiangqing.html"' + ' target="_blank"><img src=' + '"./image/liebiao_xiaomi6.jpg"' + ' alt=""></a></div>';
    //document.getElementById("Row" + i.toString()).appendChild(divObj);//在当前行添加商品对象div
    parentDiv.appendChild(divObj);

    var productID = createProductID(jObj, divObj);
    divObj.appendChild(productID);
    var picDiv = createImgDiv(jObj, divObj);
    divObj.appendChild(picDiv);
    var nameDiv = createItemName(jObj, divObj);
    divObj.appendChild(nameDiv);
    var briefInfo = createDescription(jObj);
    divObj.appendChild(briefInfo);
    var price = createPrice(jObj);
    divObj.appendChild(price);

    return divObj;
}

function createRowDiv(jObj, m)  //参数为json对象和开始读取的位置， 以及商品div的序号
{
    var parentDiv = document.getElementById("SearchRes");
    var rowDiv = document.createElement("div");
    var n = m;
    rowDiv.className = "main center mb20";

    for(var i = n; i < jObj.objList.length && i < (n + 5); i++)
    {
        var colDiv = createColDiv(jObj.objList[i], parentDiv, m++);
        rowDiv.appendChild(colDiv);
    }

    parentDiv.appendChild(rowDiv);
    rowDiv.id = parentDiv.childNodes.length - 3;
    //var rowChild = rowDiv.childNodes.length;
    return m;//返回创建到的商品序号
}

function createList(jObj)
{
    var n = 0;
    var m = 0;
    //默认一行有5个商品
    var row;
    if(jObj.objList.length % 5)
        row = parseInt(jObj.objList.length / 5) + 1;
    else
        row = parseInt(jObj.objList.length / 5);

    for(var i = 0; i < row; i++)
    {
        //if(document.getElementById("SearchRes").childNodes.length < 5)
            m = createRowDiv(jObj, m);
    }

}

function functionTest(n)
{
    var jsonString = {
        "allPageNum": "1",
        "pageSize": "10",
        "currentPage": "1",
        "objList": [
            {
                "productId": "1",
                "shopId": "1",
                "shoptypeId": "1",
                "productLocationId": "1",
                "productName": "xiaomi",
                "productType": "手机",
                "productPrice": "20",
                "productNum": "10",
                "productCreatedate": "Dec 4, 2018 12:00:00 AM",
                "productStatus": "1",
                "productDescription": "123",
                "pictures": [
                    {
                        "productId": "1",
                        "productPictureFilepath": "./image/banner.jpg"
                    },
                    {
                        "productId": "1",
                        "productPictureFilepath": "./image/liebiao_xiaomimix.jpg"
                    }
                ]
            }
        ]
    };

    var jsonString2 = {"allPageNum":1,"pageSize":10,"currentPage":1,"objList":[{"productId":1,"shopId":1,"shoptypeId":1,"productLocationId":1,"productName":"青年文摘","productType":"书籍","productPrice":"20","productNum":10,"productCreatedate":"Dec 4, 2018 12:00:00 AM","productStatus":1,"productDescription":"123","pictures":[{"productId":1,"productPictureFilepath":"/image/qingnianwenzai.jpg"},{"productId":1,"productPictureFilepath":"/image/wenzai.jpg"}]},{"productId":8,"shopId":1,"shoptypeId":1,"productLocationId":1,"productName":"新青年","productType":"杂志","productPrice":"18","productNum":13,"productCreatedate":"Dec 10, 2018 12:00:00 AM","productStatus":1,"productDescription":"你不可缺少的杂志","pictures":[{"productId":8,"productPictureFilepath":"/image/qingnianwenzai.jpg"},{"productId":8,"productPictureFilepath":"/image/wenzai.jpg"}]}]};

    //var jObj = JSON.parse(jsonString);
    if(n)
        createList(jsonString2);
    else
        listAppend(jsonString2);
}

function listAppend(jObj)
{
    //追加商品列表
    var tempId = document.getElementById("SearchRes").lastChild.lastChild.id;
    var m = parseInt(tempId.substr(7, tempId.length - 7)) + 1;
    //默认一行有5个商品
    var row;
    if(jObj.objList.length % 5)
        row = parseInt(jObj.objList.length / 5) + 1;
    else
        row = parseInt(jObj.objList.length / 5);

    for(var i = 0; i < row; i++)
    {
        //if(document.getElementById("SearchRes").childNodes.length < 5)
        m = createRowDiv(jObj, m);
    }
}

var loadInStart = false;
function callServer()
{
    if(loadInStart) return;
    loadInStart = true;
    //初次获取商品数据，默认一页有4row+6col
    var keyword = toGetSearchKeyword();
    //var keyword = toGetSearchKeywordByCookie();
    var url = "customer/searchProducts.do";

    var xmlHttp;
    if (window.XMLHttpRequest)
    {// 从 IE7+, Firefox, Chrome, Opera, Safari 中获得XMLHttpRequest对象
        xmlHttp=new XMLHttpRequest();
    }
    else
    {//从 IE6, IE5 中获得XMLHttpRequest对象
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlHttp.onreadystatechange = function()
    {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            var jObj = JSON.parse(xmlHttp.responseText);
            if(jObj)
                createList(jObj);
        }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function toGetSearchKeyword()
{
    //搜索关键字在地址当中"---.html?search=XXX"
    //当前获取搜索关键字
    var loc = location.href;
    var n1 = loc.length;//地址总长度
    var n2 = loc.indexOf("=");
    var id = decodeURI(loc.substr(n2 + 1, n1 - n2));
    return id;
}

function toStoreSearchKeywordByCookie(Keyword)
{
    $.cookie("Search", Keyword.toString());
}

function toGetSearchKeywordByCookie()
{
    var param = $.cookie("Search");
    return param;
}

//作为一个对象的w和h属性返回视口的尺寸
function getViewportSize(w){
    //使用指定的窗口， 如果不带参数则使用当前窗口
    w = w || window;

    //除了IE8及更早的版本以外，其他浏览器都能用
    if(w.innerWidth != null)
        return {w: w.innerWidth, h: w.innerHeight};

    //对标准模式下的IE（或任意浏览器）
    var d = w.document;
    if(document.compatMode == "CSS1Compat")
        return {w: d.documentElement.clientWidth, h: d.documentElement.clientHeight};

    //对怪异模式下的浏览器
    return {w: d.body.clientWidth, h: d.body.clientHeight};
}

function isScrollToPageBottom(){
    //文档高度
    var documentHeight = document.documentElement.offsetHeight;
    var viewPortHeight = getViewportSize().h;
    var scrollHeight = window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop || 0;

    return documentHeight - viewPortHeight - scrollHeight < 20;
}

function loadDataDynamic()
{

}

//如果滚动条滚动到页面底部，需要加载新的数据,并且显示加载提示
function watchScroll(){
    if(!isScrollToPageBottom()){
        setTimeout( arguments.callee, 900);
        return;            }
    loadDataDynamic();
}