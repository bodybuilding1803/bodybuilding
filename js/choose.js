$(function () {
    let lis=$('.list>li')
    lis.on('click',function () {
        let hot=$('li.hot')
        $(this).toggleClass('hot')
        if (hot.length>=3){
            if ($(this).hasClass('hot')) {
                $(this).toggleClass('hot')
            }

        }

    })
})