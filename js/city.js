/**
 * Created by Administrator on 2017/5/7.
 */
$(function () {
    //加载城市事件
    $('.container').show();
//选择城市 start
    $('body').on('click', '.city-list p', function () {
        alert($(this).html())
    });
    //点击索引查询城市
    $('body').on('click', '.letter a', function () {
        var s = $(this).html();
        $(window).scrollTop($('#' + s + '1').offset().top);
        $("#showLetter span").html(s);
        $("#showLetter").show().delay(500).hide(0);
    });
     //中间的标记显示
     $('body').on('onMouse', '.showLetter span', function () {
        $("#showLetter").show().delay(500).hide(0);
    });

})