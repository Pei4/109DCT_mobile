let chooseCheck = 0;  //  Default/掃描中 0, 掃描到 1
let option;

//localStorage 初始化
localStorage.setItem('id', '2');
localStorage.setItem('checkPoint','0');
localStorage.setItem('planetDialogNum','-1');
localStorage.setItem('meDialogNum','-1');

window.googleDocCallback = function () { return true; };
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
    showSth('me');
    if(checkpoint < 4){
        callGas("drink",option);
        chooseCheck = 0;
        dialogControl();
    }
    else{
        callGas("food",option);
    }
}

function chooseFnt(src){  //更新圖片與參數
    if (src == 'water'){
        option = 'A';
        src = 'drink_bottle';
    }
    else if(src == 'pack'){
        src = 'drink_pack';
        option = 'B';
    }
    else if(src == 'tea'){
        src = 'drink_tea_3';
        option = 'C';
    }
    if (src == 'steak'){
        src = 'food_steak_3';
        option = 1;
    }
    else if(src == 'chicken'){
        option = 2;
        src = 'food_chicken_3';
    }
    else if(src == 'salad'){
        option = 3;
        src = 'food_salad_3';
    }
    hideSth('dialog');
    showSth('scanShow');
    showSth('scanOption');
    changeSource('scanImg',`../material/${src}.png`);
}

function btnCheck(){  //開始掃描
    checkpoint ++;
    meDialogNum ++;
    htmlContent('me',meDialogArray[meDialogNum]);
    showSth('me');
    showSth('insta');
    hideSth('planet');
    hideSth('main');
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