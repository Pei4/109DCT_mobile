let vid = document.getElementById('preview');
let canvas = document.getElementById('shotCanvas');
let context = canvas.getContext('2d');
let w, h, ratio;

vid.addEventListener('loadedmetadata', function() {
    ratio = vid.videoWidth / vid.videoHeight;
    w = vid.videoWidth - 100;
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
window.onload = function (){
    document.getElementById('screenShot').addEventListener('click',screenshot);
    //截圖（拍照）
    function screenshot(){
        //影片比例
        context.fillRect(0, 0, w, h);
        context.drawImage(vid, 0, 0, w, h);
        //html2canvas(document.getElementById('capture')).then(function(canvas) {
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
        //});
    }
}


