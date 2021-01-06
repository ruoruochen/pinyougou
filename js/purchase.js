var img = document.querySelector('.goods_img>img');
var lis_img = document.querySelectorAll('.goods_img>ul>li>img');
console.log(img);
console.log(lis_img);
lis_img[0].onclick = function () {
    img.src = "upload/goods_img1.jpg"
    lis_img[0].className = "click_img"
    lis_img[1].className = ""
    lis_img[2].className = ""
    lis_img[3].className = ""
    lis_img[4].className = ""
}
lis_img[1].onclick = function () {
    img.src = "upload/goods_img2.jpg"
    lis_img[1].className = "click_img"
    lis_img[0].className = ""
    lis_img[2].className = ""
    lis_img[3].className = ""
    lis_img[4].className = ""
}
lis_img[2].onclick = function () {
    img.src = "upload/goods_img3.jpg"
    lis_img[2].className = "click_img"
    lis_img[0].className = ""
    lis_img[1].className = ""
    lis_img[3].className = ""
    lis_img[4].className = ""
}
lis_img[3].onclick = function () {
    img.src = "upload/goods_img4.jpg"
    lis_img[3].className = "click_img"
    lis_img[0].className = ""
    lis_img[1].className = ""
    lis_img[2].className = ""
    lis_img[4].className = ""
}
lis_img[4].onclick = function () {
    img.src = "upload/goods_img5.jpg"
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