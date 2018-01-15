// window.onload=function (ev) {
//     myDay();
// };
// function myDay(){
//     var d = new Date();
//     var weekday=new Array(7);
//     weekday[0]="星期日";
//     weekday[1]="星期一";
//     weekday[2]="星期二";
//     weekday[3]="星期三";
//     weekday[4]="星期四";
//     weekday[5]="星期五";
//     weekday[6]="星期六";
//     var x = document.getElementById("date_box");
//     x.innerHTML=d.getFullYear()+"年"+weekday[d.getDay()];
// }
$(function () {
    var myDate = new Date;
    var year = myDate.getFullYear();//获取当前年
    var yue = myDate.getMonth()+1;//获取当前月
    var date = myDate.getDate();//获取当前日
    $('#date_box').html(year+'年'+yue+'月'+date+'日');
});
$(function () {
    $('.footer_top_2 ul li span:even').css('color','rgb(251,166,15)');
    $('.footer_main_2 span').eq(1).css("font-weight","normal");
    $('.footer_main_3 span').eq(0).css("font-weight","bold");
    $('.footer_main_6 div').css("color","rgb(165,132,108)")
});
$(function () {
    $('.main_right_list_img').mouseover(function () {
        this.style.borderColor='red';
    });
    $('.main_right_list_img').mouseout(function () {
        this.style.borderColor='#ccc'
    })
});