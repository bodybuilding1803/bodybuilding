$(function () {
    let recBox=$('.recBox');
    let w=recBox.innerWidth(),h=recBox.innerHeight();
    let canvas=$('canvas');
    let video=$('#video')[0];
    let ctx = canvas[0].getContext('2d');
    canvas[0].width=w;
    canvas[0].height=h;

    let constraints = { audio: true, video: { width: w, height: h } };
    getDato();
    function getDato(){
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function(mediaStream) {
                var video = document.querySelector('video');
                video.srcObject = mediaStream;
                video.onloadedmetadata = function(e) {
                    video.play();
                    ctx.drawImage(video,0,0);
                    let data = canvas[0].toDataURL('image/png',0.1).substring(22);

                    $.ajax({
                        url:'/ele/index.php/login1/rec',
                        data:{face:data},

                    })
                };
            })
            .catch(function(err) { console.log(err.name + ": " + err.message); });
    }
})