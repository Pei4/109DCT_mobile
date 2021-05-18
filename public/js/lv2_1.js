window.googleDocCallback = function () { return true; };
let check = 0; // Default/continue 0, overload/almost 1, ready 2
window.onload = function(){
    dialogControl();
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
        alert("overload, wait for 5 sec");  //人數過多，請稍待
        check = 1;
    }
    if(e == "almost"){
        alert("almost, wait for 5 sec");  //快完成了，靜候下一輪
        check = 1;
    }
    if(e == "continue"){
        check = 0;
    }
    if(e == "ready"){
        alert("success");
        check = 2;
    }
}
function goCheck(){
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
    alert('connecting');  //通知連接中
    callGas("addPlayer",tryCheck);
    goCheck();
    preload(
        "../material/flower_blue_small.png",
        "../material/flower_red_small.png",
        "../material/flower_white_small.png",
        "../material/planet_watereye.png",
        "../material/planet_happy_blue.png",
        "../material/planet_happy_red.png",
        "../material/planet_happy_white.png"
    )
};
function water(){
    callGas("goWater",test);
}