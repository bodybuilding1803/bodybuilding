$(function () {
    let zhe=$('.zhezhao');
    let tan=$('ul.tan');
    let input=$('.tab >.right>input');
    input.on('click',function () {
        zhe.toggle();
        tan.slideToggle();
    })
    let hIscroll = new IScroll('#wrapper', {
        scrollX: true,
        scrollY: false,
    })
    let yuyin=$('.yuyin');
    let bottom=$('.bottom');
    bottom.on('click',function () {
        zhe.toggle(500);
        yuyin.slideToggle();
    })

})