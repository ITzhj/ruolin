
$(function(){
    $('#dowebok').fullpage({
        sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        loopBottom: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        navigation:true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        // 回调
        afterLoad: function(anchorLink, index){
            // 第二屏回调
            if(index == 2){
              $('.b1').addClass('fadeIn')
              $('.er-bottom').addClass('fadeIn')
              // $('.btn-box').addClass('fadeIn')
            }

            // 第三屏回调
            if(index == 3){
              $('.c1').addClass('rotateInDownLeft')
            }

            // 第四屏
            if(index == 4){
              $('.d1').addClass('tada')
              $('.d2').addClass('tada')
            }

            // 第五屏
            if(index == 5){
              $('.e1').addClass('fadeInLeft')
              $('.e2').addClass('flipInX')
            }

            //第六屏
            if(index == 6){
              $('.f1-top').addClass('bounceIn')
              $('.f1-bottom').addClass('bounceIn')
              $('.f2').addClass('rollIn')
            }
        },
        onLeave:function(anchorLink,index){
            // 第二屏回调
            if(index == 2){
                $('.b1').removeClass('fadeIn')
                $('.er-bottom').removeClass('fadeIn')
                // $('.btn-box').removeClass('fadeIn')

            }

            // 第三屏回调
            if(index == 3){
                $('.c1').removeClass('rotateInDownLeft')
            }
            // 第四屏
            if(index == 4){
                $('.d1').removeClass('tada')
                $('.d2').removeClass('tada')
            }

            // 第五屏
            if(index == 5){
                $('.e1').removeClass('fadeInLeft')
                $('.e2').removeClass('flipInX')
            }
            // 第六屏
            if(index == 6){
                $('.f1-top').removeClass('bounceIn')
                $('.f1-bottom').removeClass('bounceIn')
                $('.f2').removeClass('rollIn')
            }
        }

  });

    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 2000);




    var len = $(".bottom-box div").length;
    var i = 0;
    $("#btn-l").click(function(){
        i++;
        if (i >= len-3) {
            i = 0;
        }
        $(".bottom-box").animate({
                "margin-left": -i * 268 + "px"
            }, 500, function() {})
    })
    $("#btn-r").click(function(){
        i--;
        if (i <= 3-len) {
            i = 0;
        }
        $(".bottom-box").animate({
            "margin-left": i * 268 + "px"
        }, 500, function() {})
    })



});


