$(function () {
    var btn = document.getElementById('close_btn');
    var div = document.querySelector('.guanggao');
    btn.onclick = function () {
        div.style.display = 'none';
    }

    // jquery 事件委托
    //当我们点击了小li 此时不需要执行 页面滚动事件里面的li的背景选择的添加current
    //使用节流阀，也称互斥锁
    var flag = true;
    // $(".dianti").on("click", "li", function () {
    //     flag = false;
    //     var index = $(this).index();
    //     console.log(index);
    //     var floorTop = $(".floor .w").eq(index).offset().top;
    //     console.log(index + " floorTop:" + floorTop);
    //     $("body,html").stop().animate({
    //         scrollTop: floorTop
    //     }, function () {
    //         flag = true;
    //     })
    //     $(this).addClass("now_dianti").siblings().removeClass("now_dianti");
    // })
    $(".dianti li").click(function () {
        flag = false;
        var index = $(this).index();
        console.log(index);
        var floorTop = $(".floor .w").eq(index).offset().top;
        console.log(index + " floorTop:" + floorTop);
        $("body,html").stop().animate({
            scrollTop: floorTop
        }, function () {
            flag = true;
        })
        $(this).addClass("now_dianti").siblings().removeClass("now_dianti");
    })

    var recomTop = $(".recom").offset().top;
    // console.log(recomTop);
    toggleTool();
    function toggleTool() {
        if ($(document).scrollTop() >= recomTop) {
            $(".dianti").fadeIn();
        } else {
            $(".dianti").fadeOut();
        };
    }

    $(window).scroll(function () {
        toggleTool();
        if (flag) {
            var floors = $(".floor .w");
            $(floors).each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".dianti li").eq(i).addClass("now_dianti").siblings().removeClass();
                }
            })
        }

    })
})

