//伸缩动画
$("#search").click(function(event) {
    /* Act on the event */
    $(this).animate({
        width: '300px'
    });
});
$("#search").blur(function(event) {
    /* Act on the event */
    $(this).animate({
        width: '200px'
    });
});

//结果搜索
$(".icon-search").click(function(event) {
    /* Act on the event */
    var contents = $("#search").val();
    // 搜索预留
   $.ajax({
       url: '/path/to/file',
       type: 'default GET (Other values: POST)',
       dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
       data: {param1: 'value1'},
   })
   .done(function() {
       console.log("success");
   })
   .fail(function() {
       console.log("error");
   })
   .always(function() {
       console.log("complete");
   });
   
});