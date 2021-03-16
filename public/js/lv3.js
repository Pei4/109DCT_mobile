var video = document.getElementById('preview');
var canvas = document.getElementById('shotCanvas');
var context = canvas.getContext('2d');
var w, h, ratio;

//影片比例
video.addEventListener('loadedmetadata', function() {
    ratio = video.videoWidth / video.videoHeight;
    w = video.videoWidth - 100;
    h = parseInt(w / ratio, 10);
    canvas.width = w;
    canvas.height = h;
}, false);

function runVid(){
    let constraints = {video: {facingMode: { exact: "environment" }}};
    let video = document.querySelector('#preview');
    //存取相機
    function handleSuccess(stream) {
        window.stream = stream;
        video.srcObject = stream;
    }
    function handleError(error) {
        console.log('getUserMedia error: ', error);
    }
    navigator.mediaDevices.getUserMedia(constraints)
        .then(handleSuccess)
        .catch(handleError)
}


//截圖（拍照）
function screenshot(){
    html2canvas(document.getElementById('capture')).then(function(canvas) {
        context.fillRect(0, 0, w, h);
        context.drawImage(video, 0, 0, w, h);
        //iOS
        /*imageURL = canvas.toDataURL();
        let img = document.getElementById('screenShotImg');
        img.crossOrigin = "Anonymous";
        //img.id = "getshot";
        img.src = imageURL;
        document.getElementById('capture').appendChild(img);*/

        //normal
        /*document.getElementById('capture').appendChild(canvas);
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'image.jpg';
        a.click();*/

        //下載
        /*
        let a = document.createElement("a");
        a.href = getshot.src;
        a.download = "workout_log.png";
        a.click();
        document.getElementById('capture').removeChild(img);*/
    });
}