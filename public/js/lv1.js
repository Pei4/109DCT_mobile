window.googleDocCallback = function () { return true; };
//初始設定
let id;
let checkpoint = 0
let planetDialogNum = -1;
let meDialogNum = -1;
//變數
let chooseCheck = 0;  //  Default/掃描中 0, 掃描到 1
let option;
let optSrc;

setTimeout(()=>{
    preload(
        "../material/drink_bottle.png",
        "../material/drink_pack.png",
        "../material/drink_tea_3.png"
    )
},1)

function lv1Gas(method,choose,successFnt){
    $.ajax({
        type: "get",
        url: "https://script.google.com/macros/s/AKfycbz34Hlx6cYl-BLTACrvu00B2SYYb_D7eE4zGxIGA0IOTnMSwRPXyrRPcXanavVkmo3IyA/exec?callback=googleDocCallback",
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

function getId(e){
    id = parseInt(e.toString());
    localStorage.setItem('id',id);
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
    dialogControl();
    if(checkpoint < 4){
        lv1Gas("drink",option);
        addClass('object',`${optSrc}`);
        addClass('hand','drinkAnim');
        document.body.style.backgroundImage = 'url("../material/mbg_pink.png")';
        setTimeout(()=>{
            removeClass('object',`${optSrc}`);
            removeClass('hand','drinkAnim');
            goStar('state1');
        },4000);
        setTimeout(()=>{
            stopStar('state1','../material/star_200.png');
            document.body.style.backgroundImage = 'url("../material/mbg_sea.png")';
            dialogControl();
        },5000)
        chooseCheck = 0;
        optSrc = '';
    }
    else{
        lv1Gas("food",option);
        addClass('object',`${optSrc}`);
        addClass('hand','eatAnim');
        document.body.style.backgroundImage = 'url("../material/mbg_pink.png")';
        setTimeout(()=>{
            removeClass('object',`${optSrc}`);
            removeClass('hand','eatAnim');
            goStar('state2');
        },4000);
        setTimeout(()=>{
            stopStar('state2','../material/star_220.png');
            document.body.style.backgroundImage = 'url("../material/mbg_sea.png")';
            dialogControl();
        },5000);
    }
}

function chooseFnt1(){  //更新圖片與參數
    if (optSrc == 'water'){
        option = 'A';
        optSrc = 'drink_bottle';
        preload(
            "../material/drink_bottle_3.png",
            "../material/drink_bottle_2.png",
            "../material/drink_bottle_1.png",
            "../material/drink_bottle_0.png"
        )
    }
    else if(optSrc == 'pack'){
        optSrc = 'drink_pack';
        option = 'B';
        preload(
            "../material/drink_pack_3.png",
            "../material/drink_pack_2.png",
            "../material/drink_pack_1.png",
        )
    }
    else if(optSrc == 'tea'){
        optSrc = 'drink_tea_3';
        option = 'C';
        preload(
            "../material/drink_tea_2.png",
            "../material/drink_tea_1.png",
            "../material/drink_tea_0.png"
        )
    }
    preload(
        "../material/handplanet_1.png",
        "../material/handplanet_2.png",
        "../material/handplanet_3.png",
        "../material/mbg_pink.png"
    )
    hideSth('dialog');
    showSth('scanShow');
    showSth('scanOption');
    changeSource('scanImg',`../material/${optSrc}.png`);
}
function chooseFnt2(){  //更新圖片與參數
    if (optSrc == 'steak'){
        optSrc = 'food_steak_3';
        option = 1;
        preload(
            "../material/food_steak_2.png",
            "../material/food_steak_1.png",
            "../material/food_steak_0.png"
        )
    }
    else if(optSrc == 'chicken'){
        option = 2;
        optSrc = 'food_chicken_3';
        preload(
            "../material/food_chicken_2.png",
            "../material/food_chicken_1.png",
            "../material/food_steak_0.png"
        )
    }
    else if(optSrc == 'salad'){
        option = 3;
        optSrc = 'food_salad_3';
        preload(
            "../material/food_salad_2.png",
            "../material/food_salad_1.png",
            "../material/food_salad_0.png"
        )
    }
    preload(
        "../material/handplanet_4.png",
        "../material/handplanet_5.png",
        "../material/planet_smile.png",
        "../material/planet_smell.png"
    )
    hideSth('dialog');
    showSth('scanShow');
    showSth('scanOption');
    changeSource('scanImg',`../material/${optSrc}.png`);
}

function btnCheck(){  //開始掃描
    checkpoint ++;
    meDialogNum ++;
    htmlContent('me',meDialogArray[meDialogNum]);
    showSth('me');
    showSth('insta');
    hideSth('planet');
    hideSth('main');
    preload(
        "../material/drink_bottle.png",
        "../material/drink_pack.png",
        "../material/drink_tea_3.png",
        "../material/food_salad_3.png",
        "../material/food_chicken_3.png",
        "../material/food_steak_3.png"
    )
    let constraints = {video: {facingMode: { exact: "environment" }}};
    let video = document.querySelector('#preview');
    function handleSuccess(stream) {
        const codeReader = new ZXing.BrowserQRCodeReader();
        codeReader.decodeFromVideoDevice(undefined, 'preview', (result, err) => {
            if (result) { //掃後結果在這裡
                if(chooseCheck == 0){
                    optSrc = result.text;
                    if(checkpoint < 4){
                        if(optSrc == 'steak' || optSrc == 'chicken' || optSrc == 'salad'){
                            alert('這不是喝的喔～');
                        }
                        else{
                            chooseFnt1(); //還沒選的話就更新
                            chooseCheck = 1;
                        }
                    }
                    else {
                        if (optSrc == 'water' || optSrc == 'pack' || optSrc == 'tea') {
                            alert('這不是吃的喔～');
                        } else {
                            chooseFnt2(); //還沒選的話就更新
                            chooseCheck = 1;
                        }
                    }
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