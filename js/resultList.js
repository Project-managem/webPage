var currentPage = 0;

function createItemImg(jObj, parentDiv, m)
{
    //Item Img Div
    var itemImg = document.createElement("div");
    itemImg.className = "item-img products-thumb imgBlock";
    parentDiv.appendChild(itemImg);

    //-Item Link
    var itemLink = document.createElement("a");
    itemLink.href = "product.html?itemId=" + jObj.productId;
    itemImg.appendChild(itemLink);

    //--Product Thumb Hover
    var itemThumb = document.createElement("div");
    itemThumb.className = "product-thumb-hover";
    itemLink.appendChild(itemThumb);

    //---Product Image
    var itemThumbImg = document.createElement("img");
    itemThumbImg.width = "100%";
    itemThumbImg.height = "100%";
    itemThumbImg.minWidth = "300px";
    itemThumbImg.minHeight = "300px";
    itemThumb.appendChild(itemThumbImg);
    itemThumbImg.src = jObj.pictures[0].productPictureFilePath;

    //add to cart, wishlist, compare
    //-item bottom
    var itemBottom = document.createElement("div");
    itemBottom.className = "item-bottom clearfix";
    itemImg.appendChild(itemBottom);

    //--follow button
    var followButton = document.createElement("a");
    followButton.rel = "nofollow";
    followButton.href = "";
    followButton.className = "button product_type_simple add_to_cart_button ajax_add_to_cart";
    followButton.title = "Add to Cart";
    followButton.innerText = "Add to Cart";
    itemBottom.appendChild(followButton);

    //--compare button
    var compareButton = document.createElement("a");
    compareButton.href = "javascript:void(0)";
    compareButton.className = "compare button";
    compareButton.rel = "nofollow";
    compareButton.title = "Add to Cart";
    compareButton.innerText = "Compare";
    itemBottom.appendChild(compareButton);

    //--wishlist
    var wishlistButton = document.createElement("div");
    wishlistButton.className = "yith-wcwl-add-to-wishlist add-to-wishlist-248";
    itemBottom.appendChild(wishlistButton);

    //---wishlist Div1
    var wishlistDiv1 = document.createElement("span");
    wishlistDiv1.className = "yith-wcwl-add-button show";
    wishlistDiv1.display = "block";
    wishlistButton.appendChild(wishlistDiv1);

    //----wishlist Div1 address
    var wishlistDiv1a = document.createElement("a");
    wishlistDiv1a.href = "#";//Wishlist Address
    wishlistDiv1a.rel = "nofollow";
    wishlistDiv1a.className = "add_to_wishlist";
    wishlistDiv1a.innerText = "Add to Wishlist";
    wishlistDiv1.appendChild(wishlistDiv1a);

    //----wishlist Div1 img
    var wishlistDiv1i = document.createElement("img");
    wishlistDiv1i.src = "images/wpspin_light.gif";
    wishlistDiv1i.className = "ajax-loading";
    wishlistDiv1i.alt = "loading";
    wishlistDiv1i.width = 16;
    wishlistDiv1i.height = 16;
    //wishlistDiv1i.style = "visibility:hidden";
    wishlistDiv1i.visibility = "hidden";
    wishlistDiv1.appendChild(wishlistDiv1i);

    //---wishlist Div2
    var wishlistDiv2 = document.createElement("div");
    wishlistDiv2.className = "yith-wcwl-wishlistaddedbrowse hide";
    wishlistDiv2.display = "none";
    wishlistButton.appendChild(wishlistDiv2);

    //----wishlist div2 span
    var wishlistDiv2s = document.createElement("span");
    wishlistDiv2s.className = "feedback";
    wishlistDiv2s.innerText = "Product added!";
    wishlistDiv2.appendChild(wishlistDiv2s);

    //----wishlist div2 address
    var wishlistDiv2a = document.createElement("a");
    wishlistDiv2a.href = "";
    wishlistDiv2a.rel = "nofollow";
    wishlistDiv2a.innerText = "Browse Wishlist";
    wishlistDiv2.appendChild(wishlistDiv2a);

    //---wishlist div3
    var wishlistDiv3 = document.createElement("div");
    wishlistDiv3.clear = "both";
    wishlistButton.appendChild(wishlistDiv3);

    //---wishlist div4
    var wishlistDiv4 = document.createElement("div");
    wishlistDiv4.className = "yith-wcwl-wishlistaddresponse";
    wishlistButton.appendChild(wishlistDiv4);

    //--clear div
    var clearDiv = document.createElement("div");
    clearDiv.className = "clear";
    itemBottom.appendChild(clearDiv);

    //--quick view
    var quickView = document.createElement("a");
    quickView.href = "";
    quickView.className = "sm_quickview_handler-list fancybox fancybox.ajax";
    quickView.innerText = "Quick View";
    itemBottom.appendChild(quickView);

    return itemImg;
}

function createItemContent(jObj, parentDiv, m)
{
    //Wrapper Div
    var wrapper = document.createElement("div");
    wrapper.className = "item-wrap itemBlock";
    wrapper.onmouseout = function(){this.style.boxShadow = '0px 0px 0px #fff'};
    wrapper.onmousemove = function(){this.style.boxShadow = '0px 0px 30px #ccc'};
    parentDiv.appendChild(wrapper);

    //Item-Detail Div
    var itemDetail = document.createElement("div");
    itemDetail.className = "item-detail";
    wrapper.appendChild(itemDetail);

    //Item-Content Div
    var itemContent = document.createElement("div");
    itemContent.className = "item-content itemContentBlock";
    itemDetail.appendChild(itemContent);

    //*itemImg
    createItemImg(jObj, itemDetail, m);


    //Reviews-Content Div
    //var reviewContent = document.createElement("div");

    //Item Name and Link
    var itemName = document.createElement("h4");
    var itemAddress = document.createElement("a");
    itemAddress.href = "product.html?itemId=" + jObj.productId;
    itemAddress.title = jObj.productName;
    itemAddress.innerText = jObj.productName;
    itemName.appendChild(itemAddress);
    itemContent.appendChild(itemName);

    //Item Price Div
    var itemPrice = document.createElement("div");
    itemPrice.className = "item-price";
    itemContent.appendChild(itemPrice);

    //Item Price Span
    var priceSpan1 = document.createElement("span");
    itemPrice.appendChild(priceSpan1);
    var priceSpan2 = document.createElement("span");
    priceSpan2.className = "woocommerce-Price-amount amount";
    priceSpan1.appendChild(priceSpan2);
    var priceSpan3 = document.createElement("span");
    priceSpan3.className = "woocommerce-Price-currencySymbol";
    priceSpan3.innerText = "$";
    priceSpan2.appendChild(priceSpan3);
    var priceNumber = document.createTextNode(jObj.productPrice + ".00");
    priceSpan2.appendChild(priceNumber);

    return itemContent;

}

function createItemRow(jObj, m, n) //The parameter is json Object and the position that start to Read, and the Row number
{
    var parentDiv = document.getElementById("SearchResult");
    var rowDiv = document.createElement("div");
    var n = m;
    rowDiv.classNameName = "resultRow";

    for(var i = n; i < jObj.objList.length && i < (n + 3); i++)
    {
        createItemContent(jObj.objList[i], rowDiv, m);
        //createItemImg(jObj.objList[i], rowDiv, m++);
    }

    parentDiv.appendChild(rowDiv);
    rowDiv.id = "itemRow" + n;
    return m;//Return the Number that created;
}

//Create the List of search result
function createList(jObj)
{
    var n = 0;
    var m = 0;
    currentPage = jObj.currentPage;
    var row;

    //There are 4 item per row
    if(jObj.objList.length % 4)
        row = parseInt(jObj.objList.length / 4) + 1;
    else
        row = parseInt(jObj.objList.length / 4);

    for(var i = 0; i < row; i++)
        m = createItemRow(jObj, m);
}

//Get row number
function getRowSum()
{
    var sum = 0;
    var searchResult = document.getElementById("SearchResult");
    for(var i = 0; i < searchResult.childNodes.length; i++)
        if(searchResult.childNodes[i].nodeType == 1)
            sum++;
    //Generally the result should be 5 except the last page
    return sum;
}

//This function is used before load next page
function removeList()
{
    var searchRes = document.getElementById("SearchResult");
    var rowSum = getRowSum();

    for(var i = 0; i < rowSum; i++)
    {
        var itemRowObj = document.getElementById("itemRow" + i);
        searchRes.removeChild(itemRowObj);
    }
}

function functionTest()
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
                        "productPictureFilePath": "./image/banner.jpg"
                    },
                    {
                        "productId": "1",
                        "productPictureFilePath": "./image/liebiao_xiaomimix.jpg"
                    }
                ]
            }
        ]
    };

    var jsonString2 = {"allPageNum":1,"pageSize":10,"currentPage":1,"objList":[{"productId":1,"shopId":1,"shoptypeId":1,"productLocationId":1,"productName":"青年文摘","productType":"书籍","productPrice":"20","productNum":10,"productCreatedate":"Dec 4, 2018 12:00:00 AM","productStatus":1,"productDescription":"123","pictures":[{"productId":1,"productPictureFilePath":"/image/qingnianwenzai.jpg"},{"productId":1,"productPictureFilePath":"/image/wenzai.jpg"}]},{"productId":8,"shopId":1,"shoptypeId":1,"productLocationId":1,"productName":"新青年","productType":"杂志","productPrice":"18","productNum":13,"productCreatedate":"Dec 10, 2018 12:00:00 AM","productStatus":1,"productDescription":"你不可缺少的杂志","pictures":[{"productId":8,"productPictureFilePath":"/image/qingnianwenzai.jpg"},{"productId":8,"productPictureFilePath":"/image/wenzai.jpg"}]}]};

    //var jObj = JSON.parse(jsonString);
    createList(jsonString2);

}

//Get search key word from url
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

//request data after the whole page loaded
function callServer()
{
    //request data, in default there are 5row*4col per page
    //maybe can be used in next page load
    currentPage++;
    var keyword = toGetSearchKeyword();
    //var keyword = toGetSearchKeywordByCookie();
    var url = "./searchProducts.do?page=" + currentPage;

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

