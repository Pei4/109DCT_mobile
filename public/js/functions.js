let id = parseInt(localStorage.getItem('id'));
let checkpoint = parseInt(localStorage.getItem('checkPoint'));
let planetDialogNum = parseInt(localStorage.getItem('planetDialogNum'));
let meDialogNum = parseInt(localStorage.getItem('meDialogNum'));
let images = new Array();

function preload() {
    for (let i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}

let planetDialogArray =[
    '我肚子有點餓.....', //0-4
    '謝謝你找東西給我吃！', //1-8
    '欸！那邊好香喔！！',  //2-9跳10
    '有東西在發光耶',  //3-
    '我們過去看看吧',  //4-
    '哇～好多漂亮的花喔',  //5-
    '可以挑一朵適合的給我嗎',  //6-
    '我好喜歡～謝謝你！',  //7-
    '哎呀...我好像該回去了...',  //8-
    '我好像該回去了...',  //9-
    '其實我是新生的小星球',  //10-
    '要在某處遊歷之後',  //11-
    '才能回到宇宙的行列',  //12-
    '成為一顆獨立的星球',  //13-
    '這段日子',  //14-
    '謝謝你的陪伴！',  //15-
    '在回去之前\n想和你留下最後的回憶'];  //16-
let meDialogArray =[
    '是不是該找點喝的東西給它呢...',  //0-1
    '要喝什麼好呢？',  //1-2
    '找點食物給它吃吧',  //2-5
    '要吃什麼好呢？',  //3-6
    '所以你是從哪裡...',  //4-9
    '這傢伙完全無視我呢...',  //5-11
    '剛剛發生了...什麼事？',  //6-
    '你要回去哪裡？！', //7-
    '......' //8-
];
let planetCont = [4,8];
let meCont = [1,2,5,6,9];

function showSth(sth){
    document.getElementById(sth).style.display = 'block';
}
function hideSth(sth){
    document.getElementById(sth).style.display = 'none';
}
function disableSth(sth){
    document.getElementById(sth).style.pointerEvents = 'none';
}
function enableSth(sth){
    document.getElementById(sth).style.pointerEvents = 'auto';
}
function htmlContent(id,what){
    document.getElementById(id).innerHTML = what;
}
function changeSource(id,what){
    document.getElementById(id).src = what;
}
function changeAnimSrc(id,what){
    document.getElementById(id).style.backgroundImage = `url("../material/${what}.png")`;
}
function addClass(sth, what){
    document.getElementById(sth).className = what;
}
function removeClass(sth){
    document.getElementById(sth).className = '';
}
function goStar(state){
    showSth('flyStar');
    addClass('flyStar','starFly');
    addClass('hand',state);
}
function stopStar(state,starUrl){
    hideSth('flyStar');
    removeClass('flyStar','starFly');
    removeClass('hand',state);
    changeSource('starImg',starUrl);
}
function reUrl(url){
    //更新 localStorage
    localStorage.setItem('id', id.toString());
    localStorage.setItem('checkPoint', checkpoint.toString());
    localStorage.setItem('planetDialogNum', planetDialogNum.toString());
    localStorage.setItem('meDialogNum', meDialogNum.toString());
    location.href=`https://pei4.github.io/109DCT_mobile/public/html/${url}.html`;
}

function dialogControl(){
    checkpoint ++;
    console.log(checkpoint);
    if(checkpoint == 1){  //飲料關
        showSth('lv1Btn');
        disableSth('dialog');
    }
    if(checkpoint == 3){  //選完開始喝
        showSth('main');
        hideSth('lv1Btn');
        hideSth('dialog');
    }
    if(checkpoint == 4){  //喝完飲料換食物關
        showSth('dialog');
        enableSth('dialog');
        changeAnimSrc('hand','handplanet_3');
    }
    if(checkpoint == 5){  //食物關
        showSth('lv2Btn');
        disableSth('dialog');
    }
    if(checkpoint == 7){  //選完開始吃
        showSth('main');
        hideSth('lv2Btn');
        hideSth('dialog');
    }
    if(checkpoint == 8){  //吃完進過場
        showSth('dialog');
        enableSth('dialog');
        changeAnimSrc('hand','planet_smile');
        document.getElementById('hand').style.height = '30vh';
        document.getElementById('hand').style.bottom = '28vh';
    }
    if(checkpoint == 9){
        hideSth('next');
        setTimeout(()=>{
            checkpoint ++;
            planetDialogNum ++;
            htmlContent('planet',planetDialogArray[planetDialogNum]);
            showSth('planet');
            changeAnimSrc('hand','planet_smell');
            hideSth('me');
            showSth('next');
        },1000);
    }
    if(checkpoint == 100){
        reUrl('lv2_1');
    }
    if(meCont.includes(checkpoint)){
        meDialogNum ++;
        htmlContent('me',meDialogArray[meDialogNum]);
        showSth('me');
        hideSth('planet');
    }
    else if(planetCont.includes(checkpoint)){
        planetDialogNum ++;
        htmlContent('planet',planetDialogArray[planetDialogNum]);
        showSth('planet');
        hideSth('me');
    }
    if(checkpoint == 9){
        hideSth('next');
    }
    else if(document.getElementById('dialog').style.pointerEvents == 'auto'){
        showSth('next');
    }
    else{
        hideSth('next');
    }
}