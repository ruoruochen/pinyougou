# 品优购项目总结

本次项目一共实现了7个界面，包括首页、登录页面、注册页面、商品秒杀页、商品推文页、商品抢购页、商品详情页等界面。

### 项目展示

#### 首页

![image-20210106164351703](md_img/image-20210106164351703.png)

![image-20210106164416424](md_img/image-20210106164416424.png)

![image-20210106164436378](md_img/image-20210106164436378.png)

![image-20210106164457904](md_img/image-20210106164457904.png)

![image-20210106164840966](md_img/image-20210106164840966.png)

#### 登录页

![image-20210106164947754](md_img/image-20210106164947754.png)

#### 注册页

![image-20210106165013209](md_img/image-20210106165013209.png)

#### 商品秒杀页

![image-20210106165117497](md_img/image-20210106165117497.png)

![image-20210106165140702](md_img/image-20210106165140702.png)

#### 商品推文页

![image-20210106165226228](md_img/image-20210106165226228.png)

#### 商品抢购页

![image-20210106165302289](md_img/image-20210106165302289.png)

#### 商品详情页

![image-20210106165409239](md_img/image-20210106165409239.png)

![image-20210106165327943](md_img/image-20210106165327943.png)

### 项目技术概要

#### SDO优化

​        要做好一个成功的网站，一定要注意代码中的SDO优化，以下是我在品优购项目中所涉及到的SDO优化部分

![image-20210106165758682](md_img/image-20210106165758682.png)

#### 字体图标的引入

​        图片是有诸多优点的，但是缺点很明显，比如图片不但增加了总文件的大小，还增加了很多额外的"http请求"，这都会大大降低网页的性能的。更重要的是图片不能很好的进行“缩放”，因为图片放大和缩小会失真。 我们后面会学习移动端响应式，很多情况下希望我们的图标是可以缩放的。此时，用字体图标来完成会更好。

##### 字体图标的优点

​	    字体图标可以做出跟图片一样可以做的事情,改变透明度、旋转度，等.. 但是本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果等等... 本身体积更小，但携带的信息并没有削减。

#### 图片懒加载

通过图片的懒加载，可以减少服务器的压力，优化页面加载时间。

实现方法：

在html标签中使用data-lazy-src

```html
 <img data-lazy-src="upload/bargain.png" alt="">
```

引用懒加载js文件

```js
<script src="js/EasyLazyload.min.js"></script>
<script>
    lazyLoadInit({
    // coverColor: "white",
    // coverDiv: "<h1>test</h1>",
    // offsetBottom: 0,
    // offsetTopm: 0,
    showTime: 1100,
    onLoadBackEnd: function (i, e) {
        console.log("onLoadBackEnd:" + i);
    }
    , onLoadBackStart: function (i, e) {
        console.log("onLoadBackStart:" + i);
    }
});
</script>
```

#### js实现交互效果

使用js正则表达式进行用户注册输入数据验证、用户点击事件效果。



以上就是实现的基本效果啦~希望能够给大家带来帮助，一起学习一起进步。