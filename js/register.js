$(function () {
    $('form').validate({
        rules:{
            user:{
                required:true,
                minlength:11,
                maxlength:11,
            },
            pass:{
                required:true,
                minlength:6,
                maxlength:6,
            }
        },
        messages:{
            user: {
                required: "请输入正确的手机号",
                minlength: "最少11位",
                maxlength: "最多11位",
            },
            pass: {
                required: "请输入验证码",
                minlength: "最少6位",
                maxlength: "最多6位"
            }
        },
        highlight: function (element) {
            $('.form-group').next("button").removeClass("hot1");

        },
        unhighlight: function (element) {
            $('.form-group').next("button").addClass("hot1");
            if ($('.form-group').next("button").hasClass("hot1")
            ) {
                $("button").click(function () {
                    location.href = "register1.html"

                })
            }

        } })
    $('.yanzheng').click(function () {
        $(this).addClass("hot");
    })
    // $('button').click(function () {
    //     location.href="register1.html"
    // })
})
