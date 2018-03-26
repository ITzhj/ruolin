// $(document).ready(function(){

//     var len = $(".big-box img").length;
//     var i = 0;
//     $(".btn-l").click(function(){

//         i++;
//         if (i >= len) {
//             i = 0;
//         }
//         $(".big-box").animate({
//                 "margin-left": -i * 530 + "px"
//             }, 500, function() {})
//         $(".img-box img").css("border","2px solid #000");
//         $(".img-box img").eq(i).css("border","2px solid red");
//     })


//     $(".btn-r").click(function(){
//         i--;
//         if (i <= -len) {
//             i = 0;
//         }
//         $(".big-box").animate({
//             "margin-left": i * 530 + "px"
//         }, 500, function() {})
//         $(".img-box img").css("border","2px solid #000");
//         $(".img-box img").eq(i).css("border","2px solid red");
//     })

//     // small-box
//     var small = $(".img-box img").length;
//     var i = 0;
//         $("#l").click(function(){
//             i++;
//             if (i >= small-2) {
//                 i = 0;
//             }
//             // $(".img-box img").css("border","2px solid #000");
//             // $(".img-box img").eq(i).css("border","2px solid red");
//             $(".img-box").animate({
//                 "margin-left": -i * 284 + "px"
//             }, 500, function() {})
//         })




//         $("#r").click(function(){
//             i--;
//             if (i <= 2-small) {
//                 i = 0;
//             }
//             // $(".img-box img").css("border","2px solid #000");
//             // $(".img-box img").eq(i).css("border","2px solid red");
//             $(".img-box").animate({
//                 "margin-left": i * 284 + "px"
//             }, 500, function() {})
//         })

// })
//

$(function(){
    var viewSwiper = new Swiper('.view .swiper-container', {
    onSlideChangeStart: function() {
        updateNavPosition()
    }
})

$('.view .arrow-left,.preview .arrow-left').on('click', function(e) {
    e.preventDefault()
    if (viewSwiper.activeIndex == 0) {
        viewSwiper.swipeTo(viewSwiper.slides.length - 1, 1000);
        return
    }
    viewSwiper.swipePrev()
})
$('.view .arrow-right,.preview .arrow-right').on('click', function(e) {
    e.preventDefault()
    if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
        viewSwiper.swipeTo(0, 1000);
        return
    }
    viewSwiper.swipeNext()
})

var previewSwiper = new Swiper('.preview .swiper-container', {
    visibilityFullFit: true,
    slidesPerView: 'auto',
    onlyExternal: true,
    onSlideClick: function() {
        viewSwiper.swipeTo(previewSwiper.clickedSlideIndex)
    }
})

function updateNavPosition() {
        $('.preview .active-nav').removeClass('active-nav')
        var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
        if (!activeNav.hasClass('swiper-slide-visible')) {
            if (activeNav.index() > previewSwiper.activeIndex) {
                var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
                previewSwiper.swipeTo(activeNav.index() - thumbsPerNav)
            } else {
                previewSwiper.swipeTo(activeNav.index())
            }
        }
    }
})