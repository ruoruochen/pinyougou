// 图片切换效果
var img = document.querySelector('.goods_img>img');
var lis_img = document.querySelectorAll('.goods_img>ul>li>img');
lis_img[0].onclick = function () {
    img.src = "upload/sanxing1.jpg"
    lis_img[0].className = "click_img"
    lis_img[1].className = ""
    lis_img[2].className = ""
    lis_img[3].className = ""
    lis_img[4].className = ""
}
lis_img[1].onclick = function () {
    img.src = "upload/sanxing2.jpg"
    lis_img[1].className = "click_img"
    lis_img[0].className = ""
    lis_img[2].className = ""
    lis_img[3].className = ""
    lis_img[4].className = ""
}
lis_img[2].onclick = function () {
    img.src = "upload/sanxing3.jpg"
    lis_img[2].className = "click_img"
    lis_img[0].className = ""
    lis_img[1].className = ""
    lis_img[3].className = ""
    lis_img[4].className = ""
}
lis_img[3].onclick = function () {
    img.src = "upload/sanxing4.jpg"
    lis_img[3].className = "click_img"
    lis_img[0].className = ""
    lis_img[1].className = ""
    lis_img[2].className = ""
    lis_img[4].className = ""
}
lis_img[4].onclick = function () {
    img.src = "upload/sanxing5.jpg"
    lis_img[4].className = "click_img"
    lis_img[0].className = ""
    lis_img[1].className = ""
    lis_img[2].className = ""
    lis_img[3].className = ""
}

// 选择商品效果

var lis = document.querySelectorAll('.choose_right>ul>li');
console.log(lis);

lis[0].onclick = function () {
    lis[0].className = "click_img"
    lis[1].className = ""
}
lis[1].onclick = function () {
    lis[1].className = "click_img"
    lis[0].className = ""
}

window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big')
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })

    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })

    preview_img.addEventListener('mousemove', function (e) {
        // console.log('move');
        //获得鼠标在盒子的坐标
        var x = e.pageX - preview_img.offsetLeft;
        var y = e.pageY - preview_img.offsetTop;
        // console.log(x + " " + y);
        // console.log();
        // if (x > 125 && x < 235) {
        //     mask.style.left = x - 125 + 'px';
        // }
        // if (y > 125 && y < 225) {
        //     mask.style.top = y - 125 + 'px';
        //     console.log('move');
        // }
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetWidth / 2;
        if (maskX < 0) {
            maskX = 0;
        } else if (maskX > preview_img.offsetWidth - mask.offsetWidth) {
            maskX = preview_img.offsetWidth - mask.offsetWidth;
        }

        if (maskY < 0) {
            maskY = 0;
        } else if (maskY > preview_img.offsetHeight - mask.offsetHeight) {
            maskY = preview_img.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var big_img = document.querySelector('.big_img')
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        var bigMax = big_img.offsetWidth - big.offsetWidth;
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        big_img.style.left = -bigX + 'px';
        big_img.style.top = -bigY + 'px';
    })
})
