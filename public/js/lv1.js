let food = 0;
let chooseCheck = 0;  //  Default/掃描中 0, 掃描到 1
let option;
let id = 2;

function callGas(method,choose,successFnt){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbyWybm7KgqrlukAA516BCr_KCGBd-pxYdh0lGemGBeyXftUfC813fXVNpq4_2MaJIrKGg/exec?callback=googleDocCallback",
        data: {
            "method": method,
            "id":id+1,
            "choose":choose
        },
        success: function(response) {
            successFnt(response);
        }
    });
}

function correct(){  //再考慮看看
    showSth('dialog');
    hideSth('scanShow');
    hideSth('scanOption');
    chooseCheck = 0;
}

function sure(){  //確定
    hideSth('insta');
    hideSth('scanShow');
    hideSth('scanOption');
    showSth('dialog');
    callGas("food",food);
    checkpoint ++;
    showSth('nextBtn');
}

function chooseFnt(src){  //更新圖片與參數
    if (src == 'steak'){
        option = 1;
    }
    else if(src == 'chicken'){
        option = 2;
    }
    else if(src == 'salad'){
        option = 3;
    }
    food = option;
    hideSth('dialog');
    showSth('scanShow');
    showSth('scanOption');
    changeSource('scanImg',`../material/food_${src}_3.png`);
}

function btnCheck(){  //開始掃描
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
        codeReader.decodeFromVideoDevice(undefined, 'preview', (result, err) => {
            if (result) { //掃後結果在這裡
                if(chooseCheck == 0){
                    chooseFnt(result.text); //還沒選的話就更新
                    chooseCheck = 1;
                }   //已選就不反應
            }
        })
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