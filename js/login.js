$(function () {
    let yanzheng=$('.yanzheng')
    let validation=$('.validation')
    yanzheng.click(function () {
        $(this).css({"display":"none"})
        validation.css({"display":"block"})
    })
    $('form').validate({
        rules:{
            user:{
                required:true,
                minlength:11,
            },
            pass:{
                required:true,
                minlength:5,

            },

        },
        messages:{
            user:{
                required:'请输入手机号',
                minlength:'最少11位',
            },
            pass: {
                required: '请输入验证码',
                minlength: '密码最小长度5',
            },


        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).closest( ".form-group" ).addClass( "erroro" ).removeClass( "success" );
            $('.form-group').next("button").removeClass("hot1");
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).closest( ".form-group" ).addClass( "success" ).removeClass( "erroro" );
            $('.form-group').next("button").addClass("hot1");
        }

    })
})