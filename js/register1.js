$(function () {

    $('form').validate({
        rules:{
            pass:{
                required:true,
                minlength:6,
            },
            password:{
                required:true,
                minlength:6,
                equalTo:"#pass",
            }

        },
        messages:{
            pass:{
                required:'请输入密码',
                minlength:'最少6位',
            },
            password: {
                required: '请确认密码',
                minlength:'最少6位',
                equalTo:"密码不一致",
            }


        },
        highlight: function ( element ) {
            $( element ).closest( ".form-group" ).addClass( "erroro" ).removeClass( "success" );
            $('.form-group').next("button").removeClass("hot1");
        },
        unhighlight: function (element) {
            $( element ).closest( ".form-group" ).addClass( "success" ).removeClass( "erroro" );
            $('.form-group').next("button").addClass("hot1");
            $('button').click(function () {
                location.href="login.html"
            })
        }

    })
})