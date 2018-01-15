$(function () {
    $('.change_num').eq(0).click(function (e) {
        $('.number1 input')[0].focus(function () {
            $(".number1 input").eq($('.change_num').index()).css("background-color","#FFFFCC");
            e.stopPropagation();
        });
    });
    $('.change_num').eq(1).click(function (e) {
        $('.number1 input')[1].focus(function () {
            $(".number1 input").eq($('.change_num').index()).css("background-color","#FFFFCC");
            e.stopPropagation();
        });
    });
    $('.remove').bind('click',function () {
        $(this).parent().parent().parent().remove();
    });
    $('.main_right_main2 ul').on('change',function (e) {
        var allPrice=0;
        var allReduce=0;   //折购价
        var allCound =0;
        var number = 0;
        $('.main_right_main2 ul').each(function () {
            var num = parseInt($(this).find('.number1 input').val());
            var price = parseFloat($(this).find('.price1 span').text());
            var total = parseFloat($(this).find('.total1 span').text());
            total = price * num;
            $('.total1 span').eq($(this).index()).text(total.toFixed(2));
            allPrice += total;
            number +=num;
        });
        allCound=allPrice;
        $('.num1 span').text(allPrice.toFixed(2));
        $('.num').text(number);
        $('.main_right_footer1 q').text(allCound);
    });
});












