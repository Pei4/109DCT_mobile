let food = 0;
function btnCheck(){
    checkpoint ++;
    meDialogNum ++;
    htmlContent('me',meDialogArray[meDialogNum]);
    showSth('me');
    showSth('insta');
    hideSth('planet');
    hideSth('main');
    //掃描解碼
    let constraints = {video: {facingMode: { exact: "environment" }}};
    let video = document.querySelector('#preview');
    function handleSuccess(stream) {
        const codeReader = new ZXing.BrowserQRCodeReader();
        const control = codeReader.decodeFromVideoDevice(undefined, 'preview',(result, error, controls) => {
            if (result) { //掃後結果在這裡
                if(result.text == 'salad'){
                    food = 1;
                    hideSth('dialog');
                    showSth('scanShow');
                    showSth('scanOption');
                    changeSource('scanImg','../material/food_salad_3.png');
                    controls.stop();
                }
                if(result.text == 'steak'){
                    food = 2;
                    hideSth('dialog');
                    showSth('scanShow');
                    showSth('scanOption');
                    changeSource('scanImg','../material/food_steak_3.png');
                    controls.stop();
                }
                if(result.text == 'chicken'){
                    food = 3;
                    hideSth('dialog');
                    showSth('scanShow');
                    showSth('scanOption');
                    changeSource('scanImg','../material/food_chicken_3.png');
                    controls.stop();
                }
            }
        })
        /*codeReader.decodeFromVideoDevice(undefined, 'preview', (result, err) => {
            if (result) { //掃後結果在這裡
                if(result.text == 'salad'){
                    food = 1;
                    hideSth('dialog');
                    showSth('scanShow');
                    showSth('scanOption');
                    changeSource('scanImg','../material/food_salad_3.png');
                }
                if(result.text == 'steak'){
                    food = 2;
                    hideSth('dialog');
                    showSth('scanShow');
                    showSth('scanOption');
                    changeSource('scanImg','../material/food_steak_3.png');
                }
                if(result.text == 'chicken'){
                    food = 3;
                    hideSth('dialog');
                    showSth('scanShow');
                    showSth('scanOption');
                    changeSource('scanImg','../material/food_chicken_3.png');

                }
            }
        })*/
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