$(function () {
    let selected=$('.selected')
    let lis=$('.li')

    lis.on('click',function () {
        selected.attr('src','')
       $(this).children('.selected').attr('src','img/ld.png')
    })
     lis.triggerHandler('click')

})