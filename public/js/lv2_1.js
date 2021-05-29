window.googleDocCallback = function () { return true; };
let check = 0; // Default/continue 0, overload/almost 1, ready 2
window.onload = function(){
    preload(
        "../material/planet_run.png",
        "../material/planet_runaway.png",
        "../material/mbg_grass_3.png",
        "../material/waterer_blue.png",
        "../material/waterer_green.png",
        "../material/waterer_orange.png",
        "../material/waterer_purple.png",
        "../material/waterer_red.png",
    )
}
let checkpoint = 13;
let planetDialogNum = 3;
let meDialogNum = 5;
function callGas(method,successFnt){
    $.ajax({
        type: "get",
        async: false,
        url: "https://script.google.com/macros/s/AKfycbyk1G18028mYn8PNzxYNrG1slH9LedvY8cv4j6DmSDYOVz0T-Y9hv2jobVMGdYyF0SS/exec?callback=googleDocCallback",
        data: {
            "method": method,
            "id":id+1
        },
        success: function(response) {
            successFnt(response);
        }
    });
}

function test(e){
    console.log(e);
};
function tryCheck(e){
    if(e == "overload"){
        console.log("overload");
        htmlContent('instruct',`<br>人數已達上限<br>請靜待下一輪`);
        check = 1;
    }
    if(e == "almost"){
        console.log("almost");
        htmlContent('instruct',`<br>即將有小花成長茁壯<br>請靜待下一輪`);
        check = 1;
    }
    if(e == "continue"){
        check = 0;
    }
    if(e == "ready"){
        console.log("success");
        check = 2;
        //GAS回傳第幾個玩家!!!!!!!!!!
        changeAnimSrc('waterBtn','waterer_red');
        showSth('waterBtn');
        hideSth('loader');
        enableSth('readBtn');
        htmlContent('instruct',`<br>請點擊澆水器<br>幫花澆水`);
        document.getElementById('readBtn').value = '確定';
    }
}
function goCheck(){
    callGas("addPlayer",tryCheck);
    if(check < 2){
        if(check == 0){  //快速檢查是否登錄
            let connectInterval = setInterval(function (){
                callGas("addPlayer", tryCheck)
                if(check == 2){
                    clearInterval(connectInterval);
                }
                if(check == 1){
                    clearInterval(connectInterval);
                    let retryInterval = setInterval(function (){
                        callGas("addPlayer", tryCheck);
                        if(check == 2){
                            clearInterval(retryInterval);
                        }
                    },5000);
                }
            },2000);
        }
        if (check == 1) {  //太多人時過久一點再試
            let retryInternal = setInterval(async function () {
                callGas("addPlayer", tryCheck);
                if (check == 2){
                    clearInterval(retryInternal);
                }
            }, 5000);
        }
    }
}

function read() {
    showSth('loader');
    htmlContent('instruct',`<br>連線中`);
    document.getElementById('readBtn').value = '';
    disableSth('readBtn');
    disableSth('waterBtn');
    console.log('connecting');  //通知連接中
    preload(
        "../material/flower_blue_small.png",
        "../material/flower_red_small.png",
        "../material/flower_white_small.png",
        "../material/planet_watereye.png",
        "../material/planet_happy_blue.png",
        "../material/planet_happy_red.png",
        "../material/planet_happy_white.png"
    );
    document.getElementById( 'readBtn' ).setAttribute( "onclick", "javascript: goWater();" );
    setTimeout(()=>{
        goCheck();
    },1);
};
function goWater(){
    hideSth('readBtn');
    hideSth('instruct');
    enableSth('waterBtn');
}
function water(){
    console.log('water');
    callGas("goWater",test);
}