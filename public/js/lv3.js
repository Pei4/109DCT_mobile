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
        //iOS
        imageURL = canvas.toDataURL();
        var img = new Image();
        img.crossOrigin = "Anonymous";
        img.id = "getshot";
        img.src = imageURL;
        document.getElementById('capture').appendChild(img);
        var a = document.createElement("a");
        a.href = getshot.src;
        a.download = "workout_log.png";
        a.click();
        openInNewTab(imageURL);
        document.getElementById('capture').removeChild(img);
        //normal
        /*document.getElementById('capture').appendChild(canvas);
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.download = 'image.jpg';
        a.click();*/
    });
}