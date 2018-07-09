$(function () {
    let dianzan=$('.icon-dianzan')
    dianzan.on('click',function () {
        $(this).toggleClass('hot')
    })
    let iscroll=new IScroll('.wrapper',{   //鼠标点击时出现滚动条  false为隐藏
        click:true,
        probeType:3,
    });
    let piscroll=new IScroll('.pwrapper',{   //鼠标点击时出现滚动条  false为隐藏
        click:true,
        probeType:3,
    });
})