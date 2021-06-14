window.googleDocCallback = function () { return true; };
//初始設定
let checkpoint = 13;
let planetDialogNum = 3;
let meDialogNum = 5;
let id = parseInt(localStorage.getItem('id'));
//變數
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
        "../material/waterer_small.png",
        "../material/waterer_small_shine.png",
        "../material/mbg_grass_6.png",
        "../material/seed.png",
        "../material/sprout.png"
    )
}

function callPlayer(time){
    $.ajax({
        type: "get",
        async: false,
        url: "https://script.google.com/macros/s/AKfycbzuyms8xH-ehiA4CuL-Ce-aZ7IswtOVBu63BmhgDBVx9W35tzM_IRTzd28EsJLGz-EqOQ/exec?callback=googleDocCallback",
        data: {
            "id":id+1,
            "time":time
        },
        success: function(response) {
            if(time == 0){getPoint(response)}
            else if(time > 4) {getTime(response)}
        }
    });
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
        "../material/planet_happy_white.png",
        "../material/planet_sadsmile_2.png"
    );
    document.getElementById( 'readBtn' ).setAttribute( "onclick", "javascript: goWater();" );
    setTimeout(()=>{
        callPlayer(countSec)
    },1);
};
function getPoint(e){
    point = parseInt(e.toString());
    console.log(point);
    showSth('waterBtn');
    showSth('waterMask');
    hideSth('loader');
    enableSth('readBtn');
    htmlContent('instruct',`<br>請點擊澆水器<br>幫花澆水`);
    document.getElementById('readBtn').value = '確定';
    changeAnimSrc('waterBtn','waterer_small');
    scale = point/21*2;
    document.getElementById('waterDrop').style.transform = `translate(-50%,0) scale(${scale}, ${scale})`;
}
function goWater(){
    hideSth('readBtn');
    hideSth('instruct');
    hideSth('waterMask');
    changeAnimSrc('waterBtn','waterer_small_shine');
    document.getElementById('waterBtn').style.height = '25vh';
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
        callPlayer(countSec);
    },1);
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
    hideSth(e.id);
    setTimeout(()=>{
        if(e.id.includes('blue') == true){
            changeAnimSrc('hand','planet_happy_blue');
            callPlayer(3);
        }
        else if(e.id.includes('red')==true){
            changeAnimSrc('hand','planet_happy_red');
            callPlayer(1);
        }
        else {
            changeAnimSrc('hand','planet_happy_white');
            callPlayer(2);
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
    },5)
}