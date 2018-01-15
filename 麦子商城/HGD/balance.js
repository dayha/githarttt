// window.onload=function () {
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