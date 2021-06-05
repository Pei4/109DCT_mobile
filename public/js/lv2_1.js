window.googleDocCallback = function () { return true; };
let check = 0; // Default/continue 0, overload/almost 1, ready 2
let countMin = 0; //分鐘數
let countSec = 0; //秒數
let countStop = 0; //Default 0, 完成 1
let point = 0;
let scale = 0;
let accu = 0;
let smallFlowerArray = ['blue_1','blue_2','red_3','red_4','white_5','white_6'];

window.onload = function(){
    preload(
        "../material/planet_run.png",
        "../material/planet_runaway.png",
        "../material/mbg_grass_3.png",
        "../material/waterer_red.png",
        "../material/mbg_grass_6.png",
        "../material/seed.png",
        "../material/sprout.png"
    )
}
let checkpoint = 13;
let planetDialogNum = 3;
let meDialogNum = 5;

function callPlayer(){
    $.ajax({
        type: "get",
        async: false,
        url: "https://script.google.com/macros/s/AKfycbwCNY6-uawI2TMxpmK8CDPUnCR2q1nyYRzciz6e5GiFnvyIuALceFf6-aGVljq31jx1rg/exec?callback=googleDocCallback",
        data: {
            "id":id+1,
            "time":countSec
        },
        success: function(response) {
            if(countSec == 0){
                getPoint(response);
            }
            else {
                getTime(response);
            }
        }
    });
}
/*
function callWater(){
    $.ajax({
        type: "get",
        async: false,
        url: "https://script.google.com/macros/s/AKfycbxTho3IqNqjynhM19BZSAosRXLPFjJe-HaFmrY6CCxW/dev?callback=googleDocCallback",
        data: {
            "id2":id2,
            "point":point
        },
        success: function(response) {
            console.log(response);
            if (response>=50){
                changeSource('flower','../material/sprout.png');
            }
            else if(response=='full'){
                countStop = 1;
                explose();
            }
        }
    });
}
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
    if(e.toString().includes('continue') == true){
        console.log('true');
        check = 0;
        id2 = e.toString().split(',')[1];
        console.log(id2);
    }
    else{
        point = e;
        console.log(point);
        check = 2;
        showSth('waterBtn');
        hideSth('loader');
        enableSth('readBtn');
        htmlContent('instruct',`<br>請點擊澆水器<br>幫花澆水`);
        document.getElementById('readBtn').value = '確定';
        if(id2 == 2){
            changeAnimSrc('waterBtn','waterer_red');
        }
        else if(id2 == 3){
            changeAnimSrc('waterBtn','waterer_purple');
        }
        else if(id2 == 4){
            changeAnimSrc('waterBtn','waterer_orange');
        }
        else if(id2 == 5){
            changeAnimSrc('waterBtn','waterer_green');
        }
        else{
            changeAnimSrc('waterBtn','waterer_blue');
        }
        document.getElementById('waterDrop').style.transform = 'translate(-50%,0) scale(0.3, 0.3)';
    }
}
function goCheck(){
    callPlayer();
    if(check < 2){
        if(check == 0){  //快速檢查是否登錄
            let connectInterval = setInterval(function (){
                callPlayer();
                if(check == 2){
                    clearInterval(connectInterval);
                }
                if(check == 1){
                    clearInterval(connectInterval);
                    let retryInterval = setInterval(function (){
                        callPlayer();
                        if(check == 2){
                            clearInterval(retryInterval);
                        }
                    },5000);
                }
            },2000);
        }
        if (check == 1) {  //太多人時過久一點再試
            let retryInternal = setInterval(async function () {
                callPlayer();
                if (check == 2){
                    clearInterval(retryInternal);
                }
            }, 5000);
        }
    }
}
*/
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
        "../material/planet_happy_white.png",
        "../material/planet_sadsmile_2.png"
    );
    document.getElementById( 'readBtn' ).setAttribute( "onclick", "javascript: goWater();" );
    setTimeout(()=>{
        callPlayer()
    },1);
};
function getPoint(e){
    point = parseInt(e.toString());
    console.log(point);
    showSth('waterBtn');
    hideSth('loader');
    enableSth('readBtn');
    htmlContent('instruct',`<br>請點擊澆水器<br>幫花澆水`);
    document.getElementById('readBtn').value = '確定';
    changeAnimSrc('waterBtn','waterer_red');
    scale = point/21*2;
    document.getElementById('waterDrop').style.transform = `translate(-50%,0) scale(${scale}, ${scale})`;
}
function goWater(){
    hideSth('readBtn');
    hideSth('instruct');
    enableSth('waterBtn');
    showSth('timer');
    showSth('flower');
    document.body.style.backgroundImage = `url("../material/mbg_grass_6.png")`;
    let countInterval = setInterval(function(){
        countSec += 1;
        if (countSec < 10){
            htmlContent('sec',`0${countSec}`);
        }
        else if(countSec >= 10 && countSec < 60){
            htmlContent('sec',countSec);
        }
        else if(countSec = 60){
            htmlContent('sec','00');
            countSec = 0;
            countMin += 1;
            if(countMin < 10){
                htmlContent('min',`0${countMin}`);
            }
            else {
                htmlContent('min',countMin);
            }
        }
        if(countStop == 1){
            clearInterval(countInterval);
        }
    },1000)
}
function water(){
    accu += point;
    disableSth('waterBtn');
    showSth('waterDrop');
    addClass('waterDrop','dropDown');
    setTimeout(()=>{
        hideSth('waterDrop');
        removeClass(`waterDrop`,'dropDown');
    },900);
    setTimeout(()=>{
        enableSth('waterBtn');
        if (accu >= 10 && accu < 20){
            changeSource('flower','../material/sprout.png');
        }
        else if(accu >= 20) {
            countStop = 1;
            explode();
        }
    },910);
}
function explode(){
    hideSth('waterBtn');
    hideSth('flower');
    hideSth('timer');
    showSth('smallFlower');
    smallFlowerArray.forEach(flower=>{
        let num = flower.split('_')[1];
        addClass(flower,`explode${num}`);
    })
    setTimeout(()=>{
        callPlayer();
    },10);
}
function getTime(e){
    showSth('finish');
    countSec = countMin*60 + countSec;
    htmlContent('spend',`耗時 ${countSec} 秒!`);
    htmlContent('avg',`—其他玩家平均耗時 ${e} 秒—`);
}
function enableSmall(){
    smallFlowerArray.forEach(flower=>{
        enableSth(flower);
    })
}
function goFlower(e){
    if(e.id.includes('blue') == true){
        changeAnimSrc('hand','planet_happy_blue');
    }
    else if(e.id.includes('red')==true){
        changeAnimSrc('hand','planet_happy_red');
    }
    else {
        changeAnimSrc('hand','planet_happy_white');
    }
    goStar();
    addClass('hand','planetReset');
    hideSth('smallFlower');
    enableSth('dialog');
    setTimeout(()=>{
        stopStar('../material/star_222.png');
        addClass('hand','planetReset');
    },1000)
    dialogControl();
}