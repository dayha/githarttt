// window.onload=function (ev) {
//
//     lunBo();
// };
//未登录的弹框设置
$(function () {
    $('.jion_box').click(function(){
        $(".login_box").css({
            display:"block"
        })
    });
    // console.log('.jion_box')
    $('.bg_color2').css({
        height:"30px",
        background:"#cecece",
        lineHeight:"30px",
        paddingLeft:"10px"
    });
    $('.dialog-content').css({
        padding:"10px",
        overflow:"hidden"
    });
    $('#text_box1').css({
        color:"#cecece",
        background:"antiquewhite",
        textAlign: "center",
        fontSize: "14px",
        height:"40px",
        lineHeight:"40px"
    });
    $('.iclose').css({
        width:"20px",
        height:"20px",
        margin:"-25px 5px auto auto",
        cursor: "pointer",
        textAlign: "center",
        // paddingRight:"5px"
        lineHeight:"20px"
    }).click(function () {
        $('.login_box').css({
            display:"none"
        })
    }).mouseover(function(){
        $(this).css({
            background: "lightgreen"
        })
    }).mouseout(function(){
        $(this).css({
            background: "rgba(0,0,0,0)"
        })
    });
    $(".dian2").click(function () {
        $(".dian1").css({
            color:"black",
            textDecoration:"none"
        });
        $(this).css({
            color:"red",
            textDecoration:"underline"
        });
        $("#weima").css({
            display:"none"
        });
        $("#user_paswoss").css({
            display:"block"
        });
    });


    $(".dian1").click(function () {
        $(".dian2").css({
            color:"black",
            textDecoration:"none"
        });
        $(this).css({
            color:"red",
            textDecoration:"underline"
        });
        $("#user_paswoss").css({
            display:"none"
        });
        $("#weima").css({
            display:"block"
        });
    });

    $("#user,#password").css({
        width:"250",
        height:"30px",
        margin:"20px  auto auto 60px"
    })

});

$(function () {
    //边框
    $('.img_wares').mouseover(function () {
        $(this).css({
            border:"1px solid red",
            cursor:"pointer"
        })
    }).mouseout(function () {
        $(this).css({
            border:"1px solid rgba(0,0,0,0)"
        });
    });

    //年份日期
    var myDate = new Date;
    var year = myDate.getFullYear();//获取当前年
    var yue = myDate.getMonth()+1;//获取当前月
    var date = myDate.getDate();//获取当前日
    $('#date_box').html(year+'年'+yue+'月'+date+'日');
});
// var oimg_warex=document.getElementsByClassName('img_wares');
    // console.log(oimg_warex);
    // for(var i=0;i<oimg_warex.length;i++){
    //     oimg_warex[i].onmouseover=function(){
    //         this.style.border="1px solid red";
    //         this.style.cursor="pointer";
    //     };
    //     oimg_warex[i].onmouseout=function(){
    //         this.style.border="1px solid rgba(0,0,0,0)";
    //     };
    // }

// $(function() {
//     $('.img_wares').mouseover(function(){
//
//     })
//
//     for(var i=0;i<oimg_warex.length;i++){
//         oimg_warex[i].onmouseover=function(){
//             this.style.border="1px solid red";
//             this.style.cursor="pointer";
//         };
//         oimg_warex[i].onmouseout=function(){
//             this.style.border="1px solid rgba(0,0,0,0)";
//         };
//        }
// });
// function xianKuan(){
//     var oimg_warex=document.getElementsByClassName('img_wares');
//     // console.log(oimg_warex);
//     for(var i=0;i<oimg_warex.length;i++){
//         oimg_warex[i].onmouseover=function(){
//             this.style.border="1px solid red";
//             this.style.cursor="pointer";
//         };
//         oimg_warex[i].onmouseout=function(){
//             this.style.border="1px solid rgba(0,0,0,0)";
//         };
//     }
// }
// function bloW(){
//     var obox = document.getElementById('box_in');
//     var oiniti=document.getElementById('initial_box');
//     var oshade =document.getElementById('shade_box');
//     var omove=document.getElementById('move_box');
//     var oshow=document.getElementById('show_box');
//     var oshimg=oshow.getElementsByTagName('img')[0];
//     oshade.onmouseover=function(){
//         omove.style.display="block";
//         oshow.style.display="block";
//     };
//     oshade.onmouseout=function(){
//         omove.style.display="none";
//         oshow.style.display="none";
//     };
//
//     oshade.onmousemove=function(e){
//         var ev=e||window.event;
//         var left = ev.clientX-obox.offsetLeft-oiniti.offsetLeft-omove.offsetWidth/2;
//         var top = ev.clientY-obox.offsetTop-oiniti.offsetTop-omove.offsetHeight/2;
//         if(left<0){
//             left=0;
//         }else if(left>(oshade.offsetWidth-omove.offsetWidth)){
//             left=oshade.offsetWidth-omove.offsetWidth;
//         }
//         if(top<0){
//             top=0;
//         }else if(top>(oshade.offsetHeight-omove.offsetHeight)){
//             top=oshade.offsetHeight-omove.offsetHeight
//         }
//
//         omove.style.top=top + "px";
//         omove.style.left=left + "px";
//
//         var percentX = left/(oshade.offsetWidth-omove.offsetWidth);
//         var percentY = top/(oshade.offsetHeight-omove.offsetHeight);
//
//         oshimg.style.left= -percentX*(oshimg.offsetWidth-oshow.offsetWidth)+"px";
//         oshimg.style.top= -percentY*(oshimg.offsetHeight-oshow.offsetHeight)+"px";
//
//
//
//     }
// }

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

// $(function () {
//     var timer;
//     var len_pic=$('.pic_img').length;
//
// });
//通告栏
$(function () {
    var num=0;
    function goTop() {
        if(num == -28){
            num = 0;
        }
        num-=1;
        $('.bg_textLH').css({
            top:num
        })
    }
    var timer=setInterval(goTop,50);
    $('.top_notice').hover(function () {
        clearInterval(timer);
    },function () {
        timer=setInterval(goTop,50);
    })
});

//图片轮播
$(function () {
    var obWidth=$('#pic').width();
    var timer;
    var index=0
    var len_pic=$('.pic_img').length;
    // var len_list=$('.list_number').length;
    $('.list_number').click(function () {
        index = $('.list_number').index(this);
        showPic(index);
    }).eq(0).trigger('click');
    // $('.list_number').hover(function () {
    //     index=$('.list_number').index(this);
    //     showPic(index);
    // }).eq(0).trigger('hover');
    $('#pic').css("width",obWidth * (len_pic));

    $('#pic').hover(function () {
        clearInterval(timer);
    },function () {
        timer = setInterval(function () {
            showPic(index);
            index++;
            if (index == len_pic){index=0;}
        },2000);
    }).trigger('mouseleave');

    function showPic(index) {
        var nowLeft = -index * obWidth;
        $('#pic').stop(true,false).animate({left:nowLeft},200);
        $('.list_number').removeClass('active').eq(index).addClass('active');
    }
});


// window.onload=function (ev) {
//     lunBo();
// }
// function lunBo(){
//     var wrap=document.getElementById('wrap');
//     var  pic=document.getElementById('pic');
//     var list=document.getElementById('list').getElementsByTagName('li');//获取数组下标;
//     var index=0;
//     var timer=null;
// // 定义并调用自动播放函数
//     if(timer){
//         clearInterval(timer);
//         timer=null;
//     }
//     else {
//         timer=setInterval(autoplay,2000);
//     }
// // 定义图片切换函数
//     function autoplay(){
//         index++;
//         if(index>=list.length){
//             index=0;
//         }
//         else {
//             changeoptions(index);  //这个changeOption（index）；封装在代码最后，是把所有的图片都隐藏了，给当前的添加block
//         }
//     }
// // 鼠标划过整个容器时停止自动播放
//     wrap.onmouseover=function(){
//         clearInterval(timer);
//     };
// // 鼠标离开整个容器时继续播放至下一张
//     wrap.onmouseout=function(){
//         timer=setInterval(autoplay,2000);
//     };
// // 遍历所有数字导航实现划过切换至对应的图片
//     for(var i=0;i<list.length;i++){
//         list[i].id=i;
//         list[i].onmouseover=function(){
//             clearInterval(timer);
//             changeoptions(this.id);
//         }
//     }
//     function changeoptions(curindex){
//         for(var j=0;j<list.length;j++){
//             list[j].className='';
//         }
//         list[curindex].className='active';
//         pic.style.top=-curindex*150+'px';
//         index=curindex;
//     }
// }